import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

// function to send airDrop sol
async function airDrop(publicKey: string, amount: number) {
    const airDropSignature = await connection.requestAirdrop(new PublicKey(publicKey), amount);
    const res = await connection.confirmTransaction(airDropSignature);
    return res;
};

airDrop("wrssDLUaMCs99ePXyfVSQVg5v22xj6vho2xgLw5fnqT", LAMPORTS_PER_SOL).then((res) => {
    console.log(res);
})

