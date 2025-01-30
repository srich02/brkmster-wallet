import { useState } from "react";
import "./App.css";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./solanawallet";
import { EthWallet } from "./ethwallet";


function App() {
  const [count, setCount] = useState(0);
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <button
        onClick={async function () {
          const mn = await generateMnemonic();
          setMnemonic(mn);
        }}
      >
        Create Seed Phrase
      </button>
      <input type="text" value={mnemonic}></input>
      <SolanaWallet></SolanaWallet>
      <EthWallet></EthWallet>
    </>
  );
}

export default App;
