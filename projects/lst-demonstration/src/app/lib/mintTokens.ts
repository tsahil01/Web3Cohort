import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { OWNER_PRIVATE_KEY, TOKEN_MINT } from "./accounts";
import { getOrCreateAssociatedTokenAccount, mintTo, TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";
import bs58 from "bs58";

export async function mintTokens(fromAddress: string, amount: string) {

    const connection = new Connection("https://devnet.helius-rpc.com/?api-key=5ee90506-9542-4e79-aa66-a9280837284a", {
        commitment: "confirmed",
    });

    const userPublicKey = new PublicKey(fromAddress);
    const mint = new PublicKey(TOKEN_MINT);
    // console.log("mint: ", mint);
    // console.log("secretKey: ", OWNER_PRIVATE_KEY);

    const secretKeyBytes = bs58.decode(OWNER_PRIVATE_KEY);
    // console.log("Secret key bytes: ", secretKeyBytes);
    const payer = Keypair.fromSecretKey(secretKeyBytes);

    console.log("Payer: ", payer);

    // using token program id from 2022
    const newTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        userPublicKey,
        false,
        "confirmed",
        undefined,
        TOKEN_2022_PROGRAM_ID,

    );


    console.log("New token account: ", newTokenAccount);

    // send tokens to the new account
    const mintNewTokens = await mintTo(
        connection,
        payer,
        mint,
        newTokenAccount.address,
        payer.publicKey,
        parseInt(amount),
        [],
        undefined,
        TOKEN_2022_PROGRAM_ID
    );

    console.log("Minted tokens: ", mintNewTokens);

    const response = {
        message: "Minted tokens"
    }

    return response;
}