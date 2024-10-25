import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Label } from "./ui/label";

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
      const transaction = await new Transaction();
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
        <Drawer>
          <DrawerTrigger asChild>
            <Button>
              Send Solana
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Send Solana</DrawerTitle>
                <DrawerDescription>
                  Enter the address and amount of SOL you would like to send.
                </DrawerDescription>
              </DrawerHeader>
              <div className=" mx-auto w-auto">
                <Label>Recipient Address</Label>
                <Input
                  type="text"
                  placeholder="Recipient Address"
                  value={solAddress}
                  onChange={(e) => setSolAddress(e.target.value)}
                />
                <Label>Amount</Label>
                <Input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                />
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button onClick={handleSend}>Submit</Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
