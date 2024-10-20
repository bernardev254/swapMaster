// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintContract is ERC20, Ownable {
    event Locked(address indexed user, uint256 amount);
    event Burned(address indexed user, uint256 amount);

    constructor(uint256 initialSupply) ERC20("SwapToken", "STK") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply);
    }

    // Mint new tokens
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // Lock tokens and emit an event
    function lock(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        _burn(msg.sender, amount); // Burn tokens to lock them
        emit Locked(msg.sender, amount);
    }

    // Burn tokens
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
        emit Burned(msg.sender, amount);
    }
}
// token addr   0x6DbAcA96758A85529Ba9416382344fD51f84024F  arbitrum sepolia