import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { Button } from "./ui/button";

export function Balance() {
  const [balance, setBalance] = useState<number | string>("");

  const { connection } = useConnection();
  const wallet = useWallet();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
    }
  }
  return (
    <>
      <div className="rounded-xl m-5 p-6 flex  flex-col gap-5 justify-center">
        {balance && (
          <h1 className="text-2xl font-bold">Balance: {balance} SOL</h1>
        )}
        <Button onClick={getBalance} variant={"outline"}>
          Get Balance
        </Button>
      </div>
    </>
  );
}
