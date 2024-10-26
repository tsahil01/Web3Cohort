import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { AirDrop } from "./components/AirDrop";
import { Toaster } from "./components/ui/toaster";
import { Balance } from "./components/Balance";
import { SignMessage } from "./components/SignMsg";
import SendSolana from "./components/SendSolana";

import { Buffer } from "buffer";
import { Separator } from "./components/ui/separator";
import { TokenLaunchpad } from "./components/Tokenlaunchpad";
window.Buffer = window.Buffer || Buffer;

export default function App() {
  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/vYa-RYjmjTm_eOz511A0gCCyS9bxvkVa">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex md:flex-row flex-col justify-between gap-2  p-8 border bg-white rounded-xl">
                <div className="my-auto">
                  <h1 className="scroll-m-20 md:text-4xl text-2xl font-extrabold tracking-tight lg:text-5xl">
                    Solana Wallet & Tokens
                  </h1>
                  <p className="hidden md:flex leading-7 text-primary/60 md:text-sm text-xs [&:not(:first-child)]:mt-1">
                    Manage your Solana wallet and tokens
                  </p>
                </div>
                <div className="flex md:flex-row flex-col md:gap-4 gap-2 my-auto">
                  <WalletMultiButton />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-6 justify-between mt-9 container mx-auto align-middle h-full my-auto">
                <div className="flex flex-col my-auto gap-5 p-8 border bg-white rounded-xl w-full">
                  <h3 className="text-2xl font-bold">Wallet Actions</h3>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Airdrop</h3>
                    <AirDrop />
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sign Message</h3>
                    <SignMessage />
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Send Solana</h3>
                    <SendSolana />
                  </div>
                </div>
                <div className="flex flex-col gap-5 p-8 border bg-white rounded-xl w-full">
                  <h3 className="text-2xl font-bold">Tokens Actions</h3>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Create Token
                    </h3>
                    <TokenLaunchpad />
                  </div>
                </div>
                <div className="p-8 border bg-white rounded-xl w-full">
                  <h3 className="text-2xl font-bold">Wallet Balance</h3>
                  <Balance />
                </div>
              </div>
            </div>
          </div>
          <Toaster />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
