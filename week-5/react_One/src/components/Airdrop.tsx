import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function Airdrop() {
  const wallet = useWallet();
  const [sol, setSol] = useState<string | number>(0);
  const { toast } = useToast()

  const { connection } = useConnection();

  async function sendAirdropToUser() {
    if (wallet.publicKey) {
      const sendSol = await connection.requestAirdrop(wallet.publicKey, Number(sol) * LAMPORTS_PER_SOL);
      if(sendSol) {
        toast({
          title: "Airdrop Success",
          description: `Airdrop of ${sol} SOL was successful`,
        })
      }
    } else {
      console.error("Wallet public key is null");
    }
  }

  return (
    <>
      {wallet.publicKey && (
        <>
          <h2 className="text-xl font-bold">Airdrop</h2>
          <div className="flex md:flex-row flex-col gap-4 max-w-xl">
            <Input
              type="number"
              placeholder="Enter SOL"
              onChange={(e) => {
                setSol(e.target.value);
              }}
            />
            <Button onClick={sendAirdropToUser}>Request Airdrop</Button>
          </div>
        </>
      )}
    </>
  );
}
