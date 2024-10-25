import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { ed25519 } from "@noble/curves/ed25519";
import { useToast } from "@/hooks/use-toast";
import bs58 from "bs58";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
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

export function SignMessage() {
  const [message, setMessage] = useState<string>("");
  const { publicKey, signMessage } = useWallet();
  const { toast } = useToast();

  async function signMsg() {
    if (!publicKey) {
      toast({
        title: "Error",
        description: "Wallet not connected",
      });
      return;
    }
    if (!signMessage) {
      toast({
        title: "Error",
        description: "Signer not available",
      });
      return;
    }
    if (message) {
      console.log("Message: ", message);
      const encodeMsg = new TextEncoder().encode(message);
      const signature = await signMessage(encodeMsg);
      console.log("Signature: ", signature);

      if (!ed25519.verify(signature, encodeMsg, publicKey.toBytes())) {
        toast({
          title: "Error",
          description: "Message not signed",
        });
        return;
      } else {
        toast({
          title: "Message Signed",
          description: `Message signature: ${bs58.encode(signature)}`,
        });
        return;
      }
    }
  }

  return (
    <>
      {publicKey && (
        <Drawer>
          <DrawerTrigger asChild>
            <Button>
              Sign Message
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Sign Message</DrawerTitle>
                <DrawerDescription>
                  Enter the message you would like to sign.
                </DrawerDescription>
              </DrawerHeader>
              <div className=" mx-auto w-auto">
                <Label>Message</Label>
                <Input
                  type="text"
                  placeholder="Message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button onClick={signMsg}>Submit</Button>
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
