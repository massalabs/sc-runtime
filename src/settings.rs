use cornetto::Cornetto;

// main function name in the webassembly module
pub(crate) const MAIN: &str = "main";

// Metering private implementation
#[allow(dead_code)]
#[derive(Cornetto)]
struct Metering {
    #[cornetto(mut, 200)]
    pub call: u64,
    #[cornetto(const, 200)]
    pub set_data: u64,
    #[cornetto(const, 200)]
    pub get_data: u64,
    #[cornetto(const, 200)]
    pub create_sc: u64,
    #[cornetto(const, 200)]
    pub print: u64,
    #[cornetto(const, 200)]
    pub remaining_points: u64,
}

pub(crate) fn metering_call() -> u64 {
    METERING.call()
}

pub(crate) fn metering_print() -> u64 {
    METERING.print()
}

pub(crate) fn metering_create_sc() -> u64 {
    METERING.create_sc()
}

pub(crate) fn metering_remaining_points() -> u64 {
    METERING.remaining_points()
}

#[cfg(test)]
pub(crate) fn set_metering(call_price: u64) {
    METERING._reset(call_price);
}

#[cfg(test)]
pub(crate) fn reset_metering() {
    METERING._reset(DEFAULT_METERING_CALL);
}