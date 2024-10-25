// Tokens on Solana =>
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, TOKEN_2022_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey, Keypair } from '@solana/web3.js';

const connetion = new Connection(clusterApiUrl("devnet"));

const keyPair = Keypair.generate();

// const publicKey = keyPair.publicKey;
// const secretKey = keyPair.secretKey;

const publicKey = "3wg85BNVczcgcnDPL2uAnyrTYxGMVBGfDqjxUiUFYDaK";

// console.log("Public Key:", publicKey);
// console.log("Secret Key:", secretKey);

async function airDrop(amount: number, to: string) {
    amount = amount * LAMPORTS_PER_SOL;
    const airDropSignature = await connetion.requestAirdrop(new PublicKey(to), amount);
    const confirmTranx = await connetion.confirmTransaction(airDropSignature);
    console.log(confirmTranx);
}

// airDrop(10, publicKey.toString());


// --------------------------------------------------------------------------------------------

const payer = Keypair.fromSecretKey(Uint8Array.from([202, 43, 52, 180, 27, 81, 57, 178, 78, 125, 7, 61, 78, 27, 31, 248, 65, 168, 87, 106, 162, 3, 142, 139, 146, 249, 104, 222, 251, 61, 55, 4, 43, 184, 249, 12, 214, 143, 137, 93, 62, 147, 5, 196, 79, 214, 86, 195, 235, 183, 4, 139, 229, 18, 196, 31, 155, 228, 62, 170, 149, 19, 165, 148]));
const mintAuthority = payer;

async function createMintforToken (payer: Keypair, mintAuthority: any) {
    const mint = await createMint(
        connetion,
        payer,
        mintAuthority.publicKey,
        null,
        9
    );
    console.log("Mint:", mint.toBase58());
    return mint;
}

async function mintNewTokens(mint: PublicKey, to: any, amount: number) { 
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connetion,
        payer,
        mint,
        new PublicKey(to)
      );

      console.log('Token account created at', tokenAccount.address.toBase58());
      await mintTo(
        connetion,
        payer,
        mint,
        tokenAccount.address,
        payer,
        amount
      )
      console.log('Minted', amount, 'tokens to', tokenAccount.address.toBase58());
}


async function main() {
    const mint = await createMintforToken(payer, mintAuthority.publicKey);
    await mintNewTokens(mint, mintAuthority.publicKey, 100);
}


main()
