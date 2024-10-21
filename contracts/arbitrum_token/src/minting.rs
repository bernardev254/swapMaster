use alloc::string::String;
use alloy_primitives::{Address, U256};
use stylus_sdk::evm;

// Simplified Minting Contract on Arbitrum for Bridging
pub struct MintingContract {
    token_address: Address,
    relayer: Address, // Address of the trusted relayer that listens to Ethereum events
}

// Define methods for the MintingContract
impl MintingContract {
    // Initialize the contract with the ERC-20 token address and relayer address
    pub fn new(token_address: Address, relayer: Address) -> Self {
        Self { token_address, relayer }
    }

    /// Mints tokens to the user's address on Arbitrum based on lock events from Ethereum.
    /// This function is only callable by the trusted relayer.
    pub fn mint_tokens(&mut self, user: Address, amount: U256) -> Result<(), String> {
        // Check that the caller is the authorized relayer
        if msg::sender() != self.relayer {
            return Err("Unauthorized caller".into());
        }

        // Get the ERC-20 token contract and call the mint method
        let mut token_contract = Erc20::<TokenParams>::get_mut(self.token_address);

        // Mint the tokens to the user's address
        token_contract.mint(user, amount)?;

        // Log the minting event (could use a custom event for cross-chain minting)
        evm::log(Transfer {
            from: Address::ZERO,
            to: user,
            value: amount,
        });

        Ok(())
    }
}
