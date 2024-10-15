import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { airdropIfRequired } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Connected to devnet!", connection.rpcEndpoint);

const andreeaPublicKey = new PublicKey("FHWmMp8Lwdjakm1QgYS74ht9kFwzAjbLwsGsYeahHPaS");

const balanceInLamports = await connection.getBalance(andreeaPublicKey);

console.log("Andreea's balance in lamports:", balanceInLamports);

console.log("Airdropping 1 SOL to Andreea...");

await airdropIfRequired(
    connection, 
    andreeaPublicKey, 
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL
);

console.log("Done airdropping!");

const newBalanceInLamports = await connection.getBalance(andreeaPublicKey);

console.log("Andreea's new balance in lamports:", newBalanceInLamports);