use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct Initialize {}

pub fn handler(_context: Context<Initialize>) -> Result<()> {
    // msg!("Greetings from: {{:?}}", context.program_id);
    Ok(())
}
