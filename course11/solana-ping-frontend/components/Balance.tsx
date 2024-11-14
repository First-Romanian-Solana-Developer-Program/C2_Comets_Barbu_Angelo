import { FC, useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";

export const Balance: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey && connection) {
        try {
          // Fetch the balance for the connected wallet
          const balance = await connection.getBalance(publicKey);
          setBalance(balance / 1e9); // Convert lamports to SOL (1 SOL = 1e9 lamports)
        } catch (error) {
          console.error("Failed to fetch balance:", error);
        }
      }
    };

    fetchBalance();
  }, [connection, publicKey]);

  return (
    <div>
      <h3>Balance: {balance !== null ? balance.toFixed(2) : "Loading..."} SOL</h3>
    </div>
  );
};
