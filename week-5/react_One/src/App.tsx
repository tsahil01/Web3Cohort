import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import Header from "./components/Header";
import Airdrop from "./components/Airdrop";
import { Toaster } from "./components/ui/toaster";
import { SignMessage } from "./components/SignMessage";
import SendSolana from "./components/SendSolana";

import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;


export default function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/vYa-RYjmjTm_eOz511A0gCCyS9bxvkVa"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <main className="flex-1 w-full container mx-auto">
            <Header />
            <div className="flex flex-col gap-4 md:px-8 px-4 mx-auto">
              <div className="flex flex-col md:flex-row w-full gap-4 mx-auto">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Airdrop />
              <SignMessage />
              <SendSolana />
            </div>
          </main>
        </WalletModalProvider>
      </WalletProvider>
      <Toaster />
    </ConnectionProvider>
  );
}
