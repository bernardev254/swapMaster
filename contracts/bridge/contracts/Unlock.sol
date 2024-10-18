// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract UnlockContract {
    event Unlocked(address indexed user, uint256 amount);

    // Function to unlock ETH for a user
    function unlock(address user, uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        payable(user).transfer(amount);
        emit Unlocked(user, amount);
    }

    // Fallback function to receive ETH
    receive() external payable {}
}


// addr sepolia  0xC5d05E860DD9cBdc92d0aD69eb87DA4D407F3A6E