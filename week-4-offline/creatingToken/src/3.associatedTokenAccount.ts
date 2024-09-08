import { getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const payer = Keypair.fromSecretKey(Uint8Array.from([154, 211, 64, 175, 148, 185, 170, 177, 109, 190, 167, 123, 241, 15, 31, 172, 22, 98, 211, 160, 22, 163, 159, 213, 15, 40, 83, 113, 195, 159, 89, 132, 14, 13, 194, 129, 129, 110, 201, 60, 8, 159, 168, 58, 84, 134, 77, 43, 42, 242, 238, 206, 152, 72, 216, 94, 99, 190, 198, 106, 168, 122, 137, 126]))

const mintAuthority = payer;

const connection = new Connection(clusterApiUrl("devnet"));

async function mintNewTokens(mint: PublicKey, to: PublicKey, amount: number) {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer, // Payer
        mint, // Mint
        new PublicKey(to) // Owner of the token account
    );

    console.log("Token account created at: ", tokenAccount.address.toBase58());

    await mintTo(
        connection,
        payer, // Payer
        mint, // Mint
        tokenAccount.address, // destination account
        payer, // mint authority
        amount // amount
    )

    console.log("Minted ", amount, " tokens to ", tokenAccount.address.toBase58());
}

async function main() {
    const mint = new PublicKey("7gx1iz8WtDTFT1Ayhw7aqsK9u9ed3LsDJw3h4BC8rFTV") // Mint address from previous step (2.TokenMint.ts)
    await mintNewTokens(mint, mintAuthority.publicKey, LAMPORTS_PER_SOL * 100);
};

main();