import "dotenv/config";
import {
    getExplorerLink,
    getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

const AMOUNT = 0.1;
const DECIMALS = 6;

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log("User account loaded: ", user.publicKey.toBase58());

const recipient = new PublicKey("BMdqZbo8oJrHRps5SBvyJGSF7BCa6CNxgA7piumsxAim");
const tokenMint = new PublicKey("CzbDpanY5DBcMGwPETdm1N82cZ8cFMLj6NpwMFaXXLLW");

const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMint,
    user.publicKey
)

const destTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMint,
    recipient
)

const signature = await transfer(
    connection,
    user,
    sourceTokenAccount.address,
    destTokenAccount.address,
    user,
    AMOUNT * (10 ** DECIMALS),
);

console.log("Tokens transferred: ", getExplorerLink("tx", signature, "devnet"));