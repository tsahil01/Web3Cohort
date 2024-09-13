
// Create Token Mint

import { createMint, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";

// this payer is the same as the one in the previous snippets (1.airDrop.ts)
const payer = Keypair.fromSecretKey(Uint8Array.from([154, 211, 64, 175, 148, 185, 170, 177, 109, 190, 167, 123, 241, 15, 31, 172, 22, 98, 211, 160, 22, 163, 159, 213, 15, 40, 83, 113, 195, 159, 89, 132, 14, 13, 194, 129, 129, 110, 201, 60, 8, 159, 168, 58, 84, 134, 77, 43, 42, 242, 238, 206, 152, 72, 216, 94, 99, 190, 198, 106, 168, 122, 137, 126]))
const mintAuthority = payer;

const connection = new Connection(clusterApiUrl("devnet"));

async function createMintForToken() {

    const mint = await createMint(
        connection,
        payer, // the one who pays for the transaction. Could be the owner of the mint or the mint authority (other than the owner). Here both are the same
        mintAuthority.publicKey,
        null,
        9,
    )
    console.log("Mint created at: ", mint.toBase58());
    return mint;
}

async function main() {
    const mint = await createMintForToken();
};


main();

