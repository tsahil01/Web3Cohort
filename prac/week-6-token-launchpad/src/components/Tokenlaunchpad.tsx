import { useState } from "react";
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
import { Input } from "./ui/input";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { createInitializeInstruction, pack } from "@solana/spl-token-metadata";
import {
  ExtensionType,
  LENGTH_SIZE,
  TOKEN_2022_PROGRAM_ID,
  TYPE_SIZE,
  createAssociatedTokenAccountInstruction,
  createInitializeMetadataPointerInstruction,
  createInitializeMintInstruction,
  createMintToInstruction,
  getAssociatedTokenAddressSync,
  getMintLen,
} from "@solana/spl-token";
import { toast } from "@/hooks/use-toast";

export function TokenLaunchpad() {
  const { connection } = useConnection();
  const wallet = useWallet();

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [initialSupply, setInitialSupply] = useState(0);

  async function createToken() {
    if (!wallet.publicKey) {
      return;
    }

    const mintKeypair = Keypair.generate();

    const metaData = {
      mint: mintKeypair.publicKey,
      name: name,
      symbol: symbol,
      image: imgUrl,
      uri: "",
      additionalMetadata: [],
    };

    const mintLen = getMintLen([ExtensionType.MetadataPointer]);
    const metadataLen = TYPE_SIZE + LENGTH_SIZE + pack(metaData).length;

    const lamports = await connection.getMinimumBalanceForRentExemption(
      mintLen + metadataLen
    );

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        space: mintLen,
        lamports,
        programId: TOKEN_2022_PROGRAM_ID,
      }),
      createInitializeMetadataPointerInstruction(
        mintKeypair.publicKey,
        wallet.publicKey,
        mintKeypair.publicKey,
        TOKEN_2022_PROGRAM_ID

      ),
      createInitializeMintInstruction(
        mintKeypair.publicKey,
        9,
        wallet.publicKey,
        wallet.publicKey,
        TOKEN_2022_PROGRAM_ID
      ),
      createInitializeInstruction({
        programId: TOKEN_2022_PROGRAM_ID,
        mint: mintKeypair.publicKey,
        metadata: mintKeypair.publicKey,
        name: metaData.name,
        symbol: metaData.symbol,
        uri: metaData.uri,
        mintAuthority: wallet.publicKey,
        updateAuthority: wallet.publicKey
      })
    );

    transaction.feePayer = wallet.publicKey;

    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.partialSign(mintKeypair);

    await wallet.sendTransaction(transaction, connection);
    console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
    toast({
      title: "Token Mint Created",
      description: `Token mint created at ${mintKeypair.publicKey.toBase58()}`,
    });

    const associatedToken = getAssociatedTokenAddressSync(
      mintKeypair.publicKey,
      wallet.publicKey,
      false,
      TOKEN_2022_PROGRAM_ID
    );

    console.log(`Associated token address: ${associatedToken.toBase58()}`);
    toast({
      title: "Associated Token Address",
      description: `Associated token address: ${associatedToken.toBase58()}`,
    });

    const transaction2 = new Transaction().add(
      createAssociatedTokenAccountInstruction(
        wallet.publicKey,
        associatedToken,
        wallet.publicKey,
        mintKeypair.publicKey,
        TOKEN_2022_PROGRAM_ID
      )
    );

    await wallet.sendTransaction(transaction2, connection);

    const transaction3 = new Transaction().add(
      createMintToInstruction(
        mintKeypair.publicKey,
        associatedToken,
        wallet.publicKey,
        initialSupply * 10 ** 9,
        [],
        TOKEN_2022_PROGRAM_ID
      )
    );

    await wallet.sendTransaction(transaction3, connection);

    console.log(`Token minted to associated token address`);
    toast({
      title: "Token Minted",
      description: `Token minted to associated token address`,
    });
  }
  return (
    <>
      {wallet.publicKey && (
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Create Token</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Create Token</DrawerTitle>
                <DrawerDescription>
                  Create a new token on Solana
                </DrawerDescription>
              </DrawerHeader>
              <div className=" mx-auto w-auto">
                <Label>Name</Label>
                <Input
                  type="text"
                  placeholder="token-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Label>Symbol</Label>
                <Input
                  type="text"
                  placeholder="tkn-symbol"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                />
                <Label>Image Url</Label>
                <Input
                  type="text"
                  placeholder="image-url"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
                <Label>Initial Supply</Label>
                <Input
                  type="number"
                  placeholder="1000"
                  value={initialSupply}
                  onChange={(e) => setInitialSupply(Number(e.target.value))}
                />
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button onClick={createToken}>Submit</Button>
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
