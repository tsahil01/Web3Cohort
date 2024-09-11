import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useToast } from "@/hooks/use-toast";

export default function SendSolana() {
  const [solAddress, setSolAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const { toast } = useToast();
  const wallet = useWallet();
  const { connection } = useConnection();

  async function handleSend() {
    console.log(solAddress, amount);
    if (!wallet.publicKey) {
      console.error("Wallet public key is null");
      return;
    }
    
    if (wallet.publicKey) {
      const transaction = new Transaction();
      transaction.add(
        await SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(solAddress),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );
      const send = await wallet.sendTransaction(transaction, connection);
      console.log(send);
      toast({
        title: "Transaction Success",
        description: `Transaction of ${amount} SOL was successful. Tx: ${send}`,
      });
    }
  }

  return (
    <>
      {wallet.publicKey && (
        <div className="flex flex-col gap-2 mx-auto mt-7 border p-5 rounded-xl">
          <Input
            placeholder="Enter Solana address"
            onChange={(e) => setSolAddress(e.target.value)}
          />
          <Input
            placeholder="Enter amount"
            type="number"
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <Button onClick={handleSend}>Send Solana</Button>
        </div>
      )}
    </>
  );
}
