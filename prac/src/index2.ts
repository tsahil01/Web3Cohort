// Public and Private Key Generation and message signing in Ethereum using ethers

import { ethers } from "ethers";

const wallet = ethers.Wallet.createRandom();

console.log(wallet);

const publicKey = wallet.address;
const privateKey = wallet.privateKey;

console.log("publicKey: ", publicKey);
console.log("privateKey: ", privateKey);

const message = "hello world";


async function signMessage(message: string) {
    const signature = await wallet.signMessage(message)
    return signature;
}

signMessage(message).then((signature) => {
    console.log("signature: ", signature);

    const recoveredAddress = ethers.verifyMessage(message, signature);
    console.log("recoveredAddress: ", recoveredAddress);
    console.log("Signature is valid:", recoveredAddress === publicKey);
})

