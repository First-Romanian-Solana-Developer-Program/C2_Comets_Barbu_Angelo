use anchor_lang::prelude::*;

declare_id!("Ce4xfB5KLbukgYQtegXbXJv1GgUEhYfe65f2x3TupX3v");

#[program]
pub mod anchor_test {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
