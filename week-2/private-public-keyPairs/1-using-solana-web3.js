import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const keypair = Keypair.generate(); // 1

const publicKey = keypair.publicKey;
const privateKey = keypair.secretKey;

console.log("Public Key:", publicKey.toString());
console.log("Private Key:", privateKey.toString());

const msg = new TextEncoder().encode("hello world");  // Uint8Array 

const signature = nacl.sign.detached(msg, privateKey);
console.log("Signature:", signature.toString("hex"));

const result = nacl.detached.verify(msg, signature, publicKey);

console.log("result", result); // true