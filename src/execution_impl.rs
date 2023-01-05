use crate::execution::{BinaryModule, ContextModule};
use crate::settings;
use crate::types::{Interface, Response};

use crate::GasCosts;
use anyhow::{bail, Result};
use wasmer::{Instance, Store};
use wasmer_middlewares::metering::{self, MeteringPoints};

#[cfg(feature = "gas_calibration")]
use crate::middlewares::gas_calibration::{get_gas_calibration_result, GasCalibrationResult};

/// Internal execution function, used on smart contract called from node or
/// from another smart contract
/// Parameters:
/// * `limit`: Limit of gas that can be used.
/// * `instance`: Optional wasmer instance to be passed instead of creating it directly in the function.
/// * `module`: Bytecode that contains the function to be executed.
/// * `function`: Name of the function to call.
/// * `param`: Parameter to pass to the function.
/// * `interface`: Interface to call function in Massa from execution context.
///
/// Return:
/// The return of the function executed as string and the remaining gas for the rest of the execution.
pub(crate) fn exec(
    mut binary_module: impl BinaryModule,
    interface: &dyn Interface,
    function: &str,
    param: &[u8],
    gas_costs: GasCosts,
) -> Result<(Response, Instance)> {
    let mut module = ContextModule::new(interface, binary_module, gas_costs);
    let instance = module.create_vm_instance_and_init_env()?;

    match module.execution(&instance, function, param) {
        Ok(response) => Ok((response, instance)),
        Err(err) => {
            if cfg!(feature = "gas_calibration") {
                bail!(err)
            } else {
                // Because the last needed more than the remaining points, we should have an error.
                match metering::get_remaining_points(&mut module.store, &instance) {
                    MeteringPoints::Remaining(..) => bail!(err),
                    MeteringPoints::Exhausted => {
                        bail!("Not enough gas, limit reached at: {function}")
                    }
                }
            }
        }
    }
}

/// Library Input, take a `module` wasm built with the massa environment,
/// must have a main function inside written in AssemblyScript:
///
/// ```js
/// import { print } from "massa-sc-std";
///
/// export function main(_args: string): i32 {
///     print("hello world");
///     return 0;
/// }
/// ```
/// Return:
/// the remaining gas.
pub fn run_main(
    binary_module: impl BinaryModule,
    interface: &dyn Interface,
    gas_costs: GasCosts,
) -> Result<Response> {
    Ok(exec(binary_module, interface, settings::MAIN, b"", gas_costs)?.0)
}

/// Library Input, take a `module` wasm built with the massa environment,
/// run a function of that module with the given parameter:
///
/// ```js
/// import { print } from "massa-sc-std";
///
/// export function hello_world(_args: string): i32 {
///     print("hello world");
///     return 0;
/// }
/// ```
pub fn run_function(
    binary_module: impl BinaryModule,
    function: &str,
    param: &[u8],
    interface: &dyn Interface,
    gas_costs: GasCosts,
) -> Result<Response> {
    Ok(exec(binary_module, interface, function, param, gas_costs)?.0)
}

/// Same as run_main but return a GasCalibrationResult
#[cfg(feature = "gas_calibration")]
pub fn run_main_gc(
    bytecode: &[u8],
    limit: u64,
    interface: &dyn Interface,
    param: &[u8],
    gas_costs: GasCosts,
) -> Result<GasCalibrationResult> {
    let mut module = get_module(interface, bytecode, gas_costs)?;
    let (instance, store) = create_instance(limit, &mut module)?;
    if instance.exports.contains(settings::MAIN) {
        let (_resp, instance, mut store) = exec(
            u64::MAX,
            Some((instance.clone(), store)),
            module,
            settings::MAIN,
            param,
        )?;
        Ok(get_gas_calibration_result(&instance, &mut store))
    } else {
        bail!("No main");
    }
}
