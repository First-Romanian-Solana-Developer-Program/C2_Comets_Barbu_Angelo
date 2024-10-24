import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { airdropIfRequired } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Connected to devnet!", connection.rpcEndpoint);

const publicKey = new PublicKey("BMdqZbo8oJrHRps5SBvyJGSF7BCa6CNxgA7piumsxAim");

const balanceInLamports = await connection.getBalance(publicKey);

console.log("Accounts's balance in lamports:", balanceInLamports);

console.log("Airdropping 1 SOL to Account...");

await airdropIfRequired(
    connection, 
    publicKey, 
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL
);

console.log("Done airdropping!");

const newBalanceInLamports = await connection.getBalance(publicKey);

console.log("Accounts's new balance in lamports:", newBalanceInLamports);