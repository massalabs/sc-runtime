var searchIndex = JSON.parse('{\
"massa_sc_runtime":{"doc":"","t":"NNENDNIIDENENLLLLLLLLLLLLLLLLLLLKLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMFFLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMM","n":["ASModule","CL","Compiler","ExecutionError","GasCosts","InstanceError","Interface","InterfaceClone","Response","RuntimeModule","SP","VMError","WasmV1Module","address_from_public_key","address_from_public_key","as_error","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","caller_has_write_access","caller_has_write_access","clone","clone","clone","clone","clone_box","clone_into","clone_into","clone_into","clone_into","compiler","create_module","create_module","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","drop","drop","drop","drop","drop","finish_call","finish_call","fmt","fmt","fmt","fmt","from","from","from","from","from","from","generate_event","generate_event","get_balance","get_balance","get_balance_for","get_balance_for","get_call_coins","get_call_coins","get_call_stack","get_call_stack","get_current_period","get_current_period","get_current_thread","get_current_thread","get_data","get_data_for","get_keys","get_keys","get_keys_for","get_keys_for","get_module","get_module","get_op_data","get_op_data","get_op_keys","get_op_keys","get_owned_addresses","get_owned_addresses","get_time","get_time","has_data","has_data","has_data_for","has_data_for","has_op_key","has_op_key","hash","hash","hash_sha256","hash_sha256","init","init","init","init","init","init_call","init_call","init_gas_cost","into","into","into","into","into","layout_raw","layout_raw","layout_raw","layout_raw","layout_raw","new","new","pointer_metadata","pointer_metadata","pointer_metadata","pointer_metadata","pointer_metadata","print","print","provide","raw_append_data","raw_append_data","raw_append_data_for","raw_append_data_for","raw_delete_data","raw_delete_data","raw_delete_data_for","raw_delete_data_for","raw_get_bytecode","raw_get_bytecode","raw_get_bytecode_for","raw_get_bytecode_for","raw_get_data","raw_get_data","raw_get_data_for","raw_get_data_for","raw_set_bytecode","raw_set_bytecode","raw_set_bytecode_for","raw_set_bytecode_for","raw_set_data","raw_set_data","raw_set_data_for","raw_set_data_for","remaining_gas","ret","run_function","run_main","send_message","send_message","serialize","set_data","set_data_for","signature_verify","signature_verify","sp_compilation_cost","to_owned","to_owned","to_owned","to_owned","to_string","transfer_coins","transfer_coins","transfer_coins_for","transfer_coins_for","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","unsafe_random","unsafe_random","unsafe_random_f64","unsafe_random_f64","upcast_any_box","upcast_any_box","upcast_any_box","upcast_any_box","upcast_any_box","upcast_any_mut","upcast_any_mut","upcast_any_mut","upcast_any_mut","upcast_any_mut","upcast_any_ref","upcast_any_ref","upcast_any_ref","upcast_any_ref","upcast_any_ref","validate_address","validate_address","error","init_gas_cost"],"q":[[0,"massa_sc_runtime"],[222,"massa_sc_runtime::VMError"]],"d":["","","Enum listing the available compilers","VM execution error: {error} | Init cost is {init_gas_cost}","","VM instance error: {0}","","","That’s what is returned when a module is executed …","","","","","","","","","","","","","","","","","","Check whether or not the caller has write access in the …","Check whether or not the caller has write access in the …","","","","","","","","","","Used compiler for the current module","Requires a new address that contains the sent &amp;u8","Requires a new address that contains the sent &amp;u8","","","","","","","","","","","","","","Deserialize a RuntimeModule","","","","","","","","Finish a call","Finish a call","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Generate a smart contract event","Generate a smart contract event","Get the SCE ledger balance for the current address. …","Get the SCE ledger balance for the current address. …","Get the SCE ledger balance for an address. Defaults to …","Get the SCE ledger balance for an address. Defaults to …","Get the amount of coins that have been made available for …","Get the amount of coins that have been made available for …","Expect to return a list of addresses in the call stack","Expect to return a list of addresses in the call stack","Returns the period of the current execution slot","Returns the period of the current execution slot","Returns the thread of the current execution slot","Returns the thread of the current execution slot","","","Return datastore keys Will only return keys with a given …","Return datastore keys Will only return keys with a given …","Return datastore keys Will only return keys with a given …","Return datastore keys Will only return keys with a given …","For the given bytecode:","For the given bytecode:","Return operation datastore data for a given key","Return operation datastore data for a given key","Return operation datastore keys","Return operation datastore keys","Expect to return a list of owned addresses","Expect to return a list of owned addresses","Returns the current time (millisecond unix timestamp)","Returns the current time (millisecond unix timestamp)","Requires to replace the data in the current address","Requires to replace the data in the current address","Check if a datastore entry exists","Check if a datastore entry exists","Check if key is in operation datastore","Check if key is in operation datastore","","","","","","","","","","Prepare the execution of a module at the given address and …","Prepare the execution of a module at the given address and …","number of gas required for the instance creation","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","Dispatch module creation corresponding to the first …","","","","","","","Print function for examples","Print function for examples","","Append a value to the current datastore value for the …","Append a value to the current datastore value for the …","Append a value to the current datastore value for the …","Append a value to the current datastore value for the …","Delete a datastore entry","Delete a datastore entry","Delete a datastore entry at of the given address","Delete a datastore entry at of the given address","Returns bytecode of the current address","Returns bytecode of the current address","Returns bytecode of the target address","Returns bytecode of the target address","Return the datastore value of the corresponding key","Return the datastore value of the corresponding key","Requires the data at the address","Requires the data at the address","Sets the executable bytecode at a current address.","Sets the executable bytecode at a current address.","Sets the executable bytecode at a target address. The …","Sets the executable bytecode at a target address. The …","Set the datastore value for the corresponding key","Set the datastore value for the corresponding key","Set the datastore value for the corresponding key of the …","Set the datastore value for the corresponding key of the …","number of gas that remain after the execution (metering)","returned value from the module call","Library Input, take a <code>module</code> wasm built with the massa …","Library Input, take a <code>module</code> wasm built with the massa …","Sends an async message","Sends an async message","Serialize a RuntimeModule, prepending its byte id","","","","","","","","","","","Transfer an amount from the address on the current call …","Transfer an amount from the address on the current call …","Transfer an amount from the specified address to a target …","Transfer an amount from the specified address to a target …","","","","","","","","","","","","","","","","Returns a random number (unsafe: can be predicted and …","Returns a random number (unsafe: can be predicted and …","Returns a random number (unsafe: can be predicted and …","Returns a random number (unsafe: can be predicted and …","","","","","","","","","","","","","","","","","","",""],"i":[8,7,0,6,0,6,0,0,0,0,7,0,8,10,10,6,6,7,8,20,9,6,7,8,20,9,10,10,6,7,8,9,37,6,7,8,9,8,10,10,6,7,8,20,9,6,7,8,20,9,6,7,8,8,20,9,6,7,8,20,9,10,10,6,6,20,9,6,6,7,8,20,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,6,7,8,20,9,10,10,20,6,7,8,20,9,6,7,8,20,9,8,9,6,7,8,20,9,10,10,6,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20,20,0,0,10,10,8,10,10,10,10,9,6,7,8,9,6,10,10,10,10,6,7,8,20,9,6,7,8,20,9,6,7,8,20,9,10,10,10,10,6,7,8,20,9,6,7,8,20,9,6,7,8,20,9,10,10,38,38],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,[1,[[3,[2]]]],[1,[[3,[2]]]],[[],4],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[[3,[5]]]],[[],[[3,[5]]]],[6,6],[7,7],[8,8],[9,9],[[],[[11,[10]]]],[[]],[[]],[[]],[[]],[8,7],[[[13,[12]]],[[3,[2]]]],[[[13,[12]]],[[3,[2]]]],[14],[14],[14],[14],[14],[14],[14],[14],[14],[14],[[],[[16,[15]]]],[[],[[16,[15]]]],[[],[[16,[15]]]],[[[13,[12]],17,9],[[3,[8]]]],[[],[[16,[15]]]],[[],[[16,[15]]]],[14],[14],[14],[14],[14],[[],3],[[],3],[[6,18],19],[[6,18],19],[[20,18],19],[[9,18],19],[[]],[21,6],[[]],[[]],[[]],[[]],[2,3],[2,3],[[],[[3,[17]]]],[[],[[3,[17]]]],[1,[[3,[17]]]],[1,[[3,[17]]]],[[],[[3,[17]]]],[[],[[3,[17]]]],[[],[[3,[[22,[2]]]]]],[[],[[3,[[22,[2]]]]]],[[],[[3,[17]]]],[[],[[3,[17]]]],[[],[[3,[12]]]],[[],[[3,[12]]]],[[10,[13,[12]]],[[3,[23]]]],[[10,1,[13,[12]]],[[3,[23]]]],[[[24,[[13,[12]]]]],[[3,[[25,[[22,[12]]]]]]]],[[[24,[[13,[12]]]]],[[3,[[25,[[22,[12]]]]]]]],[[1,[24,[[13,[12]]]]],[[3,[[25,[[22,[12]]]]]]]],[[1,[24,[[13,[12]]]]],[[3,[[25,[[22,[12]]]]]]]],[[[13,[12]],17],[[3,[8]]]],[[[13,[12]],17],[[3,[8]]]],[[[13,[12]]],[[3,[[22,[12]]]]]],[[[13,[12]]],[[3,[[22,[12]]]]]],[[],[[3,[[22,[[22,[12]]]]]]]],[[],[[3,[[22,[[22,[12]]]]]]]],[[],[[3,[[22,[2]]]]]],[[],[[3,[[22,[2]]]]]],[[],[[3,[17]]]],[[],[[3,[17]]]],[[[13,[12]]],[[3,[5]]]],[[[13,[12]]],[[3,[5]]]],[[1,[13,[12]]],[[3,[5]]]],[[1,[13,[12]]],[[3,[5]]]],[[[13,[12]]],[[3,[5]]]],[[[13,[12]]],[[3,[5]]]],[[[13,[12]]],[[3,[[26,[12]]]]]],[[[13,[12]]],[[3,[[26,[12]]]]]],[[[13,[12]]],[[3,[[26,[12]]]]]],[[[13,[12]]],[[3,[[26,[12]]]]]],[[],14],[[],14],[[],14],[[],14],[[],14],[[1,17],[[3,[[22,[12]]]]]],[[1,17],[[3,[[22,[12]]]]]],0,[[]],[[]],[[]],[[]],[[]],[[],[[16,[27,28]]]],[[],[[16,[27,28]]]],[[],[[16,[27,28]]]],[[],[[16,[27,28]]]],[[],[[16,[27,28]]]],[[[13,[12]],17,9,7],[[3,[8]]]],[[29,29],[[3,[9]]]],[[]],[[]],[[]],[[]],[[]],[1,3],[1,3],[30],[[[13,[12]],[13,[12]]],3],[[[13,[12]],[13,[12]]],3],[[1,[13,[12]],[13,[12]]],3],[[1,[13,[12]],[13,[12]]],3],[[[13,[12]]],3],[[[13,[12]]],3],[[1,[13,[12]]],3],[[1,[13,[12]]],3],[[],[[3,[[22,[12]]]]]],[[],[[3,[[22,[12]]]]]],[1,[[3,[[22,[12]]]]]],[1,[[3,[[22,[12]]]]]],[[[13,[12]]],[[3,[[22,[12]]]]]],[[[13,[12]]],[[3,[[22,[12]]]]]],[[1,[13,[12]]],[[3,[[22,[12]]]]]],[[1,[13,[12]]],[[3,[[22,[12]]]]]],[[[13,[12]]],3],[[[13,[12]]],3],[[1,[13,[12]]],3],[[1,[13,[12]]],3],[[[13,[12]],[13,[12]]],3],[[[13,[12]],[13,[12]]],3],[[1,[13,[12]],[13,[12]]],3],[[1,[13,[12]],[13,[12]]],3],0,0,[[10,8,1,[13,[12]],17,9],[[16,[20,6]]]],[[10,8,17,9],[[16,[20,6]]]],[[1,1,17,17,17,[13,[12]],24],3],[[1,1,17,17,17,[13,[12]],24],3],[8,[[3,[[22,[12]]]]]],[[10,[13,[12]],31],3],[[10,1,[13,[12]],31],3],[[[13,[12]],1,1],[[3,[5]]]],[[[13,[12]],1,1],[[3,[5]]]],0,[[]],[[]],[[]],[[]],[[],2],[[1,17],3],[[1,17],3],[[1,1,17],3],[[1,1,17],3],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],32],[[],32],[[],32],[[],32],[[],32],[[],[[3,[33]]]],[[],[[3,[33]]]],[[],[[3,[34]]]],[[],[[3,[34]]]],[[[11,[35]]],[[11,[36,35]]]],[[[11,[35]]],[[11,[36,35]]]],[[[11,[35]]],[[11,[36,35]]]],[[[11,[35]]],[[11,[36,35]]]],[[[11,[35]]],[[11,[36,35]]]],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[[],36],[1,[[3,[5]]]],[1,[[3,[5]]]],0,0],"c":[],"p":[[15,"str"],[3,"String"],[6,"Result"],[8,"Error"],[15,"bool"],[4,"VMError"],[4,"Compiler"],[4,"RuntimeModule"],[3,"GasCosts"],[8,"Interface"],[3,"Box"],[15,"u8"],[15,"slice"],[15,"usize"],[3,"With"],[4,"Result"],[15,"u64"],[3,"Formatter"],[6,"Result"],[3,"Response"],[3,"Error"],[3,"Vec"],[8,"DeserializeOwned"],[4,"Option"],[3,"BTreeSet"],[15,"array"],[3,"Layout"],[3,"LayoutError"],[3,"PathBuf"],[3,"Demand"],[8,"Serialize"],[3,"TypeId"],[15,"i64"],[15,"f64"],[3,"Global"],[8,"Any"],[8,"InterfaceClone"],[13,"ExecutionError"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
