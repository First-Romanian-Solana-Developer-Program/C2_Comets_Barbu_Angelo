import { createMint } from "@solana/spl-token";
import "dotenv/config";
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const DECIMALS = 6;

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const user = getKeypairFromEnvironment("MINT_AUTHORITY");

console.log("User account loaded: ", user.publicKey.toBase58());

const tokenMint = await createMint(
    connection,
    user,
    user.publicKey,
    null,
    DECIMALS,
);

const link = getExplorerLink("address", tokenMint.toBase58(), "devnet");

console.log("Token mint created: ", link);