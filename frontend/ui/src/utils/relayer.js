import  {ethers} from 'ethers';
import MintAbi from '../artifacts/MintContract.json' assert { type: 'json' };
import UnlockAbi from '../artifacts/UnlockContract.json' assert { type: 'json' };


// Connect to Sepolia
const sepoliaProvider = new ethers.providers.JsonRpcProvider("https://rpc2.sepolia.org");
const unlockContractAddress = "0xC5d05E860DD9cBdc92d0aD69eb87DA4D407F3A6"; 
const unlockContractABI = UnlockAbi.output.abi;
const unlockContract = new ethers.Contract(unlockContractAddress, unlockContractABI, sepoliaProvider);

// Connect to Arbitrum
const arbitrumProvider = new ethers.providers.JsonRpcProvider("https://sepolia-rollup.arbitrum.io/rpc");
const mintContractAddress = "0x6DbAcA96758A85529Ba9416382344fD51f84024F"; // Replace with your deployed mint contract address
const mintContractABI = MintAbi.output.abi; // Provide the ABI of MintContract
const mintContract = new ethers.Contract(mintContractAddress, mintContractABI, arbitrumProvider);

// Listen for Locked events
mintContract.on("Locked", async (user, amount) => {
    const amountToUnlock = calculateUnlockAmount(amount); // Logic for amount to unlock

    const wallet = new ethers.Wallet( import.meta.env.VITE_PRIVATE_KEY, sepoliaProvider); // Replace with your private key
    const tx = await unlockContract.connect(wallet).unlock(user, amountToUnlock);
    await tx.wait();
    console.log(`Unlocked ${amountToUnlock} ETH for ${user}`);
});

// Listen for Burned events
mintContract.on("Burned", async (user, amount) => {
    const amountToUnlock = calculateUnlockAmount(amount); // Logic for amount to unlock

    const wallet = new ethers.Wallet(import.meta.env.VITE_PRIVATE_KEY, sepoliaProvider); // Replace with your private key
    const tx = await unlockContract.connect(wallet).unlock(user, amountToUnlock);
    await tx.wait();
    console.log(`Unlocked ${amountToUnlock} ETH for ${user}`);
});

// Function to calculate unlock amount based on burned tokens
function calculateUnlockAmount(amount) {
    return amount / 10; 
}


// pm2 link d65b183nim9tw85 da4kipw2lyxbxzo
// pm2 start app.js