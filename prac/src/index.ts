// Public and Private Key Generation and message signing using tweetnacl library in Solana using @solana/web3.js

import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new random keypair
const keyPair = Keypair.generate();

const publicKey = keyPair.publicKey;
const secretKey = keyPair.secretKey;

console.log("Public Key:", publicKey.toString());
console.log("Secret Key:", secretKey);

const message = new TextEncoder().encode("hello world");

console.log("Message:", message);

const signature = nacl.sign.detached(message, secretKey);
console.log("Signature:", signature);

const result = nacl.sign.detached.verify(message, signature, publicKey.toBytes());

console.log("Result:", result);