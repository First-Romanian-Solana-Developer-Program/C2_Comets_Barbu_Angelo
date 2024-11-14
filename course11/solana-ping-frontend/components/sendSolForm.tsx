import { FC, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, SystemProgram } from "@solana/web3.js";

export const SendSolForm: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicKey) console.error("Wallet not connected!");

    if (!connection) console.error("Connection not available!");

    if (!recipient) console.error("Recipient wallet address not provided!");

    if (!amount) console.error("Amount not provided!");

    try {
      const recipientPubKey = new PublicKey(recipient);
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubKey,
          lamports: Number(amount) * 1e9, // Convert SOL to lamports
        })
      );

      // Sending the transaction using sendTransaction from useWallet
      const signature = await sendTransaction(transaction, connection);
      console.log("Transaction sent with signature:", signature);
    } catch (error) {
      console.error("Failed to send transaction:", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="recipient">Recipient Wallet Address:</label>
        <input
          id="recipient"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Amount (SOL):</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send SOL</button>
    </form>
  );
};
