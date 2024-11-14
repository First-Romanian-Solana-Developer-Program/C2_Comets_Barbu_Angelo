import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { airdropIfRequired } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Connected to devnet!", connection.rpcEndpoint);

const publicKey = new PublicKey("5KRsoL6pQd3euiQpNHBNC73knQxKt5GXV6zo1EUu6xr2");

const balanceInLamports = await connection.getBalance(publicKey);

console.log("Accounts's balance in lamports:", balanceInLamports);

console.log("Airdropping SOL to Account...");

await airdropIfRequired(
    connection, 
    publicKey, 
    5 * LAMPORTS_PER_SOL,
    4 * LAMPORTS_PER_SOL
);

console.log("Done airdropping!");

const newBalanceInLamports = await connection.getBalance(publicKey);

console.log("Accounts's new balance in lamports:", newBalanceInLamports);