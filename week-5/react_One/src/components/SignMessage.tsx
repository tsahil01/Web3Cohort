import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useWallet } from "@solana/wallet-adapter-react";
import { ed25519 } from "@noble/curves/ed25519";
import { useToast } from "@/hooks/use-toast";
import bs58 from "bs58";

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
        <div className="flex flex-col border rounded-md mx-auto p-3">
          <h2 className="text-xl font-bold mx-auto mt-5">Sign Message</h2>
          <div className="flex md:flex-row flex-col gap-4 mx-auto">
            <Input
              type="text"
              placeholder="Enter Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Button onClick={signMsg}>Sign Message</Button>
          </div>
        </div>
      )}
    </>
  );
}
