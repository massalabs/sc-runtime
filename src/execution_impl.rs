use crate::abi_impl::*;
use crate::env::{assembly_script_abort, get_remaining_points_for_instance, Env};
use crate::settings;
use crate::types::{Interface, Response};
use anyhow::{bail, Result};
use as_ffi_bindings::{Read as ASRead, StringPtr, Write as ASWrite};
use std::sync::Arc;
use wasmer::wasmparser::Operator;
use wasmer::{
    imports, CompilerConfig, Function, ImportObject, Instance, Module, Store, Universal, Val,
};
use wasmer_compiler_singlepass::Singlepass;
use wasmer_middlewares::metering::{self, MeteringPoints};
use wasmer_middlewares::Metering;

/// Create an instance of VM from a module with a given interface, an operation
/// number limit and a webassembly module
fn create_instance(limit: u64, module: &[u8], interface: &dyn Interface) -> Result<Instance> {
    let metering = Arc::new(Metering::new(limit, |_: &Operator| -> u64 { 1 }));
    let mut compiler_config = Singlepass::new();
    compiler_config.push_middleware(metering);
    let store = Store::new(&Universal::new(compiler_config).engine());
    let env = Env::new(interface);
    let resolver: ImportObject = imports! {
        "env" => {
            // Needed by wasm generated by AssemblyScript.
            "abort" =>  Function::new_native_with_env(&store, env.clone(), assembly_script_abort),
        },
        "massa" => {
            "assembly_script_print" => Function::new_native_with_env(&store, env.clone(), assembly_script_print),
            "assembly_script_call" => Function::new_native_with_env(&store, env.clone(), assembly_script_call_module),
            "assembly_script_get_remaining_gas" => Function::new_native_with_env(&store, env.clone(), assembly_script_get_remaining_gas),
            "assembly_script_create_sc" => Function::new_native_with_env(&store, env.clone(), assembly_script_create_sc),
            "assembly_script_set_data" => Function::new_native_with_env(&store, env.clone(), assembly_script_set_data),
            "assembly_script_set_data_for" => Function::new_native_with_env(&store, env.clone(), assembly_script_set_data_for),
            "assembly_script_get_data" => Function::new_native_with_env(&store, env.clone(), assembly_script_get_data),
            "assembly_script_get_data_for" => Function::new_native_with_env(&store, env.clone(), assembly_script_get_data_for),
            "assembly_script_has_data" => Function::new_native_with_env(&store, env.clone(), assembly_script_has_data),
            "assembly_script_has_data_for" => Function::new_native_with_env(&store, env.clone(), assembly_script_has_data_for),
            "assembly_script_get_owned_addresses" => Function::new_native_with_env(&store, env.clone(), assembly_script_get_owned_addresses),
            "assembly_script_get_call_stack" => Function::new_native_with_env(&store, env.clone(), assembly_script_get_call_stack),
            "assembly_script_generate_event" => Function::new_native_with_env(&store, env.clone(), assembly_script_generate_event),
            "assembly_script_transfer_coins" => Function::new_native_with_env(&store, env.clone(), assembly_script_transfer_coins),
            "assembly_script_transfer_coins_for" => Function::new_native_with_env(&store, env.clone(), assembly_script_transfer_coins_for),
            "assembly_script_get_balance" => Function::new_native_with_env(&store, env.clone(), assembly_script_get_balance),
            "assembly_script_get_balance_for" => Function::new_native_with_env(&store, env.clone(), assembly_script_get_balance_for),
            "assembly_script_hash" => Function::new_native_with_env(&store, env.clone(), assembly_script_hash),
            "assembly_script_signature_verify" => Function::new_native_with_env(&store, env.clone(), assembly_script_signature_verify),
            "assembly_script_address_from_public_key" => Function::new_native_with_env(&store, env.clone(), assembly_script_address_from_public_key),
            "assembly_script_unsafe_random" => Function::new_native_with_env(&store, env.clone(), assembly_script_unsafe_random),
            "assembly_script_get_time" => Function::new_native_with_env(&store, env, assembly_script_get_time),
        },
    };
    let module = Module::new(&store, &module)?;
    Ok(Instance::new(&module, &resolver)?)
}

pub(crate) fn exec(
    limit: u64,
    instance: Option<Instance>,
    module: &[u8],
    function: &str,
    param: &str,
    interface: &dyn Interface,
) -> Result<Response> {
    let instance = match instance {
        Some(instance) => instance,
        None => create_instance(limit, module, interface)?,
    };
    let mut env = as_ffi_bindings::Env::default();
    env.init(&instance)?;

    // Closure for the execution allowing us to handle a gas error
    fn execution(
        instance: &Instance,
        function: &str,
        param: &str,
        env: &as_ffi_bindings::Env,
    ) -> Result<Response> {
        let param_ptr = *StringPtr::alloc(&param.to_string(), env)?;
        match instance
            .exports
            .get_function(function)?
            .call(&[Val::I32(param_ptr.offset() as i32)])
        {
            Ok(value) => {
                // TODO: clean and define wat should be return by the main
                if function.eq(crate::settings::MAIN) {
                    return Ok(Response {
                        ret: "0".to_string(),
                        remaining_gas: get_remaining_points_for_instance(instance),
                    });
                }
                let ret = if let Some(offset) = value.get(0) {
                    if let Some(offset) = offset.i32() {
                        let str_ptr = StringPtr::new(offset as u32);
                        let memory = instance.exports.get_memory("memory")?;
                        str_ptr.read(memory)?
                    } else {
                        bail!("Execution wasn't in capacity to read the return value")
                    }
                } else {
                    String::new()
                };
                Ok(Response {
                    ret,
                    remaining_gas: get_remaining_points_for_instance(instance),
                })
            }
            Err(error) => bail!(error),
        }
    }

    match execution(&instance, function, param, &env) {
        Ok(response) => Ok(response),
        Err(err) => {
            // Because the last needed more than the remaining points, we should have an error.
            match metering::get_remaining_points(&instance) {
                MeteringPoints::Remaining(..) => bail!(err),
                MeteringPoints::Exhausted => bail!("Not enough gas, limit reached at: {function}"),
            }
        }
    }
}

pub fn run(module: &[u8], limit: u64, interface: &dyn Interface) -> Result<u64> {
    let instance = create_instance(limit, module, interface)?;
    if instance.exports.contains(settings::MAIN) {
        Ok(exec(limit, Some(instance), module, settings::MAIN, "", interface)?.remaining_gas)
    } else {
        Ok(limit)
    }
}
