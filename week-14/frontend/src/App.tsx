import { useState } from "react";
import "./App.css";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

const connection = new Connection(
);

const from = new PublicKey("DiEVU22vEBc256EdUAQvLoRCqAFggNmxiGgyfxeYZRJ3");

function App() {
  const [amt, setAmt] = useState("0");
  const [add, setAdd] = useState("");

  async function sendAmount() {
    console.log("Sending SOL");

    const instruction = await SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: new PublicKey("2RdAqu3Gx3ugv9gTXZTw9JdkNpJNr3NGfSfVJ5hCWV8Q"),
      lamports: 0.01 * LAMPORTS_PER_SOL,
    });
    const tnx = new Transaction();
    tnx.add(instruction);

    const { blockhash } = await connection.getLatestBlockhash();
    tnx.recentBlockhash = blockhash;
    tnx.feePayer = from;

    const serialize = await tnx.serialize({
      requireAllSignatures: false,
      verifySignatures: false,
    });

    console.log(serialize);

    const response = await fetch("http://localhost:3000/api/v1/txn/sign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token") 
      },
      body: JSON.stringify({
        message: serialize,
        retry: false,
      }),
    });

    console.log(response);
  }

  return (
    <>
      <h1>Hello</h1>
      <div>
        <input
          type="text"
          placeholder="Amount"
          onChange={(e) => setAmt(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setAdd(e.target.value)}
        />
        <button onClick={sendAmount}>Send</button>
      </div>
    </>
  );
}

export default App;
