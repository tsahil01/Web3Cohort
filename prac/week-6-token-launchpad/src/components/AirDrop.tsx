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
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { toast } from "@/hooks/use-toast";

export function AirDrop() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [amount, setAmount] = useState(0);

  async function handleAirDrop() {
    console.log("AirDrop SOL");
    console.log(amount);
    if (wallet.publicKey) {
      const sentSol = await connection.requestAirdrop(
        wallet.publicKey,
        amount * LAMPORTS_PER_SOL
      );
      if (sentSol) {
        toast({
          title: "Airdrop Success",
          description: `Airdrop of ${amount} SOL was successful`,
        });
        setAmount(0);
      }
    } else {
      console.error("Wallet public key is null");
    }
  }

  return (
    <>
      {wallet.publicKey && (
        <Drawer>
          <DrawerTrigger asChild>
            <Button>AirDrop SOL</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>AirDrop SOL</DrawerTitle>
                <DrawerDescription>
                  Enter the amount of SOL you would like to AirDrop.
                </DrawerDescription>
              </DrawerHeader>
              <div className=" mx-auto w-auto">
                <Label>Amount</Label>
                <Input
                  type="number"
                  placeholder="0.0"
                  onChange={(e) => {
                    setAmount(parseFloat(e.target.value));
                  }}
                />
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button onClick={handleAirDrop}>Submit</Button>
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
