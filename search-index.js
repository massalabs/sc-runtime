var searchIndex = JSON.parse('{\
"massa_sc_runtime":{"doc":"","t":"NNENDNIIDENENKKKLKLLLLLLLLLLKKKKKKKKKKKMLLLLKLLLLKKKKLKKLLLLLLLLLLLLLLLLKLLLLLKKKKKLLLLLLLLLLKKKKKKKKLLKKKKKLLKKKKKKKKKKKKKKKKKKKKLLLLLKKMLLLLLKLLLLLMKKLLKLLLLLKLKKKKKKKKKKKKMMFFKKKLKLLKKMKLLLLLKKKLLLLLLLLLLLLLLLKKKLLLLLLLLLLLLLLLKMM","n":["ASModule","CL","Compiler","ExecutionError","GasCosts","InstanceError","Interface","InterfaceClone","Response","RuntimeModule","SP","VMError","WasmV1Module","add_native_amount_wasmv1","address_from_public_key","append_ds_value_wasmv1","as_error","base58_check_to_bytes_wasmv1","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","bytes_to_base58_check_wasmv1","caller_has_write_access","check_address_wasmv1","check_native_amount_wasmv1","check_pubkey_wasmv1","check_signature_wasmv1","checked_add_native_time_wasmv1","checked_div_native_time_wasmv1","checked_mul_native_time_wasmv1","checked_scalar_div_native_time_wasmv1","checked_sub_native_time_wasmv1","cl_compilation_cost","clone","clone","clone","clone","clone_box","clone_into","clone_into","clone_into","clone_into","compare_address_wasmv1","compare_native_amount_wasmv1","compare_native_time_wasmv1","compare_pub_key_wasmv1","compiler","create_module","delete_ds_entry_wasmv1","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","div_rem_native_amount_wasmv1","drop","drop","drop","drop","drop","ds_entry_exists_wasmv1","evm_get_address_from_pubkey","evm_get_pubkey_from_signature","evm_signature_verify","finish_call","fmt","fmt","fmt","fmt","from","from","from","from","from","from","generate_event","generate_event_wasmv1","get_address_category_wasmv1","get_address_version_wasmv1","get_balance","get_balance_for","get_balance_wasmv1","get_bytecode_wasmv1","get_call_coins","get_call_coins","get_call_coins_wasmv1","get_call_stack","get_current_period","get_current_slot","get_current_thread","get_data","get_data_for","get_ds_keys_wasmv1","get_ds_value_wasmv1","get_keys","get_keys_for","get_module","get_op_data","get_op_keys","get_op_keys_wasmv1","get_origin_operation_id","get_owned_addresses","get_pubkey_version_wasmv1","get_signature_version_wasmv1","get_time","get_tmp_module","has_data","has_data_for","hash","hash_blake3","hash_keccak256","hash_sha256","init","init","init","init","init","init_call","init_call_wasmv1","init_gas_cost","into","into","into","into","into","is_address_eoa","layout_raw","layout_raw","layout_raw","layout_raw","layout_raw","max_instance_cost","native_amount_from_str_wasmv1","native_amount_to_string_wasmv1","new","new","op_entry_exists","pointer_metadata","pointer_metadata","pointer_metadata","pointer_metadata","pointer_metadata","print","provide","raw_append_data","raw_append_data_for","raw_delete_data","raw_delete_data_for","raw_get_bytecode","raw_get_bytecode_for","raw_get_data","raw_get_data_for","raw_set_bytecode","raw_set_bytecode_for","raw_set_data","raw_set_data_for","remaining_gas","ret","run_function","run_main","scalar_div_rem_native_amount_wasmv1","scalar_mul_native_amount_wasmv1","send_message","serialize","set_bytecode_wasmv1","set_data","set_data_for","set_ds_value_wasmv1","signature_verify","sp_compilation_cost","sub_native_amount_wasmv1","to_owned","to_owned","to_owned","to_owned","to_string","transfer_coins","transfer_coins_for","transfer_coins_wasmv1","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","unsafe_random","unsafe_random_f64","unsafe_random_wasmv1","upcast_any_box","upcast_any_box","upcast_any_box","upcast_any_box","upcast_any_box","upcast_any_mut","upcast_any_mut","upcast_any_mut","upcast_any_mut","upcast_any_mut","upcast_any_ref","upcast_any_ref","upcast_any_ref","upcast_any_ref","upcast_any_ref","validate_address","error","init_gas_cost"],"q":[[0,"massa_sc_runtime"],[231,"massa_sc_runtime::VMError"]],"d":["","","Enum listing the available compilers","VM execution error: {error} | Init cost is {init_gas_cost}","","VM instance error: {0}","","","That’s what is returned when a module is executed …","","","","","","Convert a public key to an address","","","","","","","","","","","","","","","Check whether or not the caller has write access in the …","","","","","","","","","","","","","","","","","","","","","","","","Used compiler for the current module","Requires a new address that contains the sent &amp;u8","","","","","","","","","","","","","","","Deserialize a RuntimeModule","","","","","","","","","","Get address from public key (EVM)","Get public key from signature (EVM)","Verify signature (EVM)","Finish a call","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Generate a smart contract event","Generate a smart contract event","","","Get the SCE ledger balance for the current address. …","Get the SCE ledger balance for an address. Defaults to …","","","Get the amount of coins that have been made available for …","Get the amount of coins that have been made available for …","Get the native amount of coins that have been made …","Expect to return a list of addresses in the call stack","Returns the period of the current execution slot","Returns the current execution slot","Returns the thread of the current execution slot","","","","","Return datastore keys Will only return keys with a given …","Return datastore keys Will only return keys with a given …","For the given bytecode:","Return operation datastore data for a given key","Return operation datastore keys","","","Expect to return a list of owned addresses","","","Returns the current time (millisecond unix timestamp)","Compile a temportary module from the given bytecode","Requires to replace the data in the current address","Check if a datastore entry exists","Hash data","Returns the blake3 hash of the given bytes","","","","","","","","Prepare the execution of a module at the given address and …","Prepare the execution of a module at the given address and …","number of gas required for the instance creation","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Return true if the address is a User address, false if it …","","","","","","","","","Dispatch module creation corresponding to the first …","","Check if operation in datastore exists","","","","","","Print function for examples","","Append a value to the current datastore value for the …","Append a value to the current datastore value for the …","Delete a datastore entry","Delete a datastore entry at of the given address","Returns bytecode of the current address","Returns bytecode of the target address","Return the datastore value of the corresponding key","Requires the data at the address","Sets the executable bytecode at a current address.","Sets the executable bytecode at a target address. The …","Set the datastore value for the corresponding key","Set the datastore value for the corresponding key of the …","number of gas that remain after the execution (metering)","returned value from the module call","Library Input, take a <code>module</code> wasm built with the massa …","Library Input, take a <code>module</code> wasm built with the massa …","","","Sends an async message","Serialize a RuntimeModule, prepending its byte id","","","","","Verify signature","","","","","","","","Transfer an amount from the address on the current call …","Transfer an amount from the specified address to a target …","","","","","","","","","","","","","","","","","Returns a random number (unsafe: can be predicted and …","Returns a random number (unsafe: can be predicted and …","Returns a random number (unsafe: can be predicted and …","","","","","","","","","","","","","","","","Validate an address","",""],"i":[15,14,0,13,0,13,0,0,0,0,14,0,15,17,17,17,13,17,13,14,15,25,16,13,14,15,25,16,17,17,17,17,17,17,17,17,17,17,17,16,13,14,15,16,42,13,14,15,16,17,17,17,17,15,17,17,13,14,15,25,16,13,14,15,25,16,13,14,15,15,25,16,17,13,14,15,25,16,17,17,17,17,17,13,13,25,16,13,13,14,15,25,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,13,14,15,25,16,17,17,25,13,14,15,25,16,17,13,14,15,25,16,16,17,17,15,16,17,13,14,15,25,16,17,13,17,17,17,17,17,17,17,17,17,17,17,17,25,25,0,0,17,17,17,15,17,17,17,17,17,16,17,13,14,15,16,13,17,17,17,13,14,15,25,16,13,14,15,25,16,13,14,15,25,16,17,17,17,13,14,15,25,16,13,14,15,25,16,13,14,15,25,16,17,43,43],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,[[1,1],[[2,[1]]]],[3,[[2,[4]]]],[[[6,[5]],[6,[5]],[7,[4]]],2],[[],8],[3,[[2,[[9,[5]]]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[6,[5]]],4],[[],[[2,[10]]]],[3,[[2,[10]]]],[1,[[2,[10]]]],[3,[[2,[10]]]],[3,[[2,[10]]]],[[11,11],[[2,[11]]]],[[11,11],2],[[11,12],[[2,[11]]]],[[11,12],2],[[11,11],[[2,[11]]]],0,[13,13],[14,14],[15,15],[16,16],[[],[[18,[17]]]],[[]],[[]],[[]],[[]],[[3,3],[[2,[19]]]],[[1,1],[[2,[19]]]],[[11,11],[[2,[19]]]],[[3,3],[[2,[19]]]],[15,14],[[[6,[5]]],[[2,[4]]]],[[[6,[5]],[7,[4]]],2],[20],[20],[20],[20],[20],[20],[20],[20],[20],[20],[[],[[22,[21]]]],[[],[[22,[21]]]],[[],[[22,[21]]]],[[[6,[5]],12,16],[[2,[15]]]],[[],[[22,[21]]]],[[],[[22,[21]]]],[[1,1],2],[20],[20],[20],[20],[20],[[[6,[5]],[7,[4]]],[[2,[10]]]],[[[6,[5]]],[[2,[[9,[5]]]]]],[[[6,[5]],[6,[5]]],[[2,[[9,[5]]]]]],[[[6,[5]],[6,[5]],[6,[5]]],[[2,[10]]]],[[],2],[[13,23],24],[[13,23],24],[[25,23],24],[[16,23],24],[26,13],[[]],[[]],[[]],[[]],[[]],[4,2],[[[9,[5]]],2],[3,[[2,[27]]]],[3,[[2,[12]]]],[[],[[2,[12]]]],[3,[[2,[12]]]],[[[7,[4]]],[[2,[1]]]],[[[7,[4]]],[[2,[[9,[5]]]]]],[[],[[2,[12]]]],[[],[[2,[12]]]],[[],[[2,[1]]]],[[],[[2,[[9,[4]]]]]],[[],[[2,[12]]]],[[],[[2,[28]]]],[[],[[2,[5]]]],[[17,[6,[5]]],[[2,[29]]]],[[17,3,[6,[5]]],[[2,[29]]]],[[[6,[5]],[7,[4]]],[[2,[[30,[[9,[5]]]]]]]],[[[6,[5]],[7,[4]]],[[2,[[9,[5]]]]]],[[[7,[[6,[5]]]]],[[2,[[30,[[9,[5]]]]]]]],[[3,[7,[[6,[5]]]]],[[2,[[30,[[9,[5]]]]]]]],[[[6,[5]],12],2],[[[6,[5]]],[[2,[[9,[5]]]]]],[[[7,[[6,[5]]]]],[[2,[[9,[[9,[5]]]]]]]],[[[6,[5]]],[[2,[[9,[[9,[5]]]]]]]],[[],[[2,[[7,[4]]]]]],[[],[[2,[[9,[4]]]]]],[3,[[2,[12]]]],[3,[[2,[12]]]],[[],[[2,[12]]]],[[[6,[5]],12],2],[[[6,[5]]],[[2,[10]]]],[[3,[6,[5]]],[[2,[10]]]],[[[6,[5]]],[[2,[[31,[5]]]]]],[[[6,[5]]],[[2,[[31,[5]]]]]],[[[6,[5]]],[[2,[[31,[5]]]]]],[[[6,[5]]],[[2,[[31,[5]]]]]],[[],20],[[],20],[[],20],[[],20],[[],20],[[3,12],[[2,[[9,[5]]]]]],[[3,1],[[2,[[9,[5]]]]]],0,[[]],[[]],[[]],[[]],[[]],[3,[[2,[10]]]],[[],[[22,[32,33]]]],[[],[[22,[32,33]]]],[[],[[22,[32,33]]]],[[],[[22,[32,33]]]],[[],[[22,[32,33]]]],0,[3,[[2,[1]]]],[1,[[2,[4]]]],[[[6,[5]],12,16,14],[[2,[15]]]],[[34,34],[[2,[16]]]],[[[6,[5]]],[[2,[10]]]],[[]],[[]],[[]],[[]],[[]],[3,2],[35],[[[6,[5]],[6,[5]]],2],[[3,[6,[5]],[6,[5]]],2],[[[6,[5]]],2],[[3,[6,[5]]],2],[[],[[2,[[9,[5]]]]]],[3,[[2,[[9,[5]]]]]],[[[6,[5]]],[[2,[[9,[5]]]]]],[[3,[6,[5]]],[[2,[[9,[5]]]]]],[[[6,[5]]],2],[[3,[6,[5]]],2],[[[6,[5]],[6,[5]]],2],[[3,[6,[5]],[6,[5]]],2],0,0,[[17,15,3,[6,[5]],12,16],[[22,[25,13]]]],[[17,15,12,16],[[22,[25,13]]]],[[1,12],2],[[1,12],[[2,[1]]]],[[3,3,12,12,12,[6,[5]],7],2],[15,[[2,[[9,[5]]]]]],[[[6,[5]],[7,[4]]],2],[[17,[6,[5]],36],2],[[17,3,[6,[5]],36],2],[[[6,[5]],[6,[5]],[7,[4]]],2],[[[6,[5]],3,3],[[2,[10]]]],0,[[1,1],[[2,[1]]]],[[]],[[]],[[]],[[]],[[],4],[[3,12],2],[[3,3,12],2],[[4,1,[7,[4]]],2],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],37],[[],37],[[],37],[[],37],[[],37],[[],[[2,[38]]]],[[],[[2,[39]]]],[12,[[2,[[9,[5]]]]]],[[[18,[40]]],[[18,[41,40]]]],[[[18,[40]]],[[18,[41,40]]]],[[[18,[40]]],[[18,[41,40]]]],[[[18,[40]]],[[18,[41,40]]]],[[[18,[40]]],[[18,[41,40]]]],[[],41],[[],41],[[],41],[[],41],[[],41],[[],41],[[],41],[[],41],[[],41],[[],41],[3,[[2,[10]]]],0,0],"c":[],"p":[[3,"NativeAmount"],[6,"Result"],[15,"str"],[3,"String"],[15,"u8"],[15,"slice"],[4,"Option"],[8,"Error"],[3,"Vec"],[15,"bool"],[3,"NativeTime"],[15,"u64"],[4,"VMError"],[4,"Compiler"],[4,"RuntimeModule"],[3,"GasCosts"],[8,"Interface"],[3,"Box"],[4,"ComparisonResult"],[15,"usize"],[3,"With"],[4,"Result"],[3,"Formatter"],[6,"Result"],[3,"Response"],[3,"Error"],[4,"AddressCategory"],[3,"Slot"],[8,"DeserializeOwned"],[3,"BTreeSet"],[15,"array"],[3,"Layout"],[3,"LayoutError"],[3,"PathBuf"],[3,"Demand"],[8,"Serialize"],[3,"TypeId"],[15,"i64"],[15,"f64"],[3,"Global"],[8,"Any"],[8,"InterfaceClone"],[13,"ExecutionError"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
