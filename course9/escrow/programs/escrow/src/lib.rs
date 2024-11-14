pub mod constants;
pub mod error;
pub mod instructions;
pub mod state;

use anchor_lang::prelude::*;

pub use constants::*;
pub use instructions::*;
pub use state::*;

declare_id!("4BUQ8wLrxPRW4bD2JEV28Eg7e3nhfnk4m3qEFefW8Urz");

#[program]
pub mod escrow {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        initialize::handler(ctx)
    }

    pub fn make_offer(
        context: Context<MakeOffer>,
        id: u64,
        token_mint_amount_a: u64,
        token_mint_amount_b: u64
        ) -> Result<()> {

        instructions::make_offer::process_make_offer_instruction(context, id, token_mint_amount_a, token_mint_amount_b)

    }

    pub fn take_offer(context: Context<TakeOffer>) -> Result<()> {
        instructions::take_offer::process_take_offer_instruction(context)
    }
}
