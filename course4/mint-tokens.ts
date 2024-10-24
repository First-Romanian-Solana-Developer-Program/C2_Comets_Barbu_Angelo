import { createMint, getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import "dotenv/config";
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const DECIMALS = 6;
const AMOUNT = 10;

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const user = getKeypairFromEnvironment("SECRET_KEY");
const mintAuthority = getKeypairFromEnvironment("MINT_AUTHORITY");

const tokenMint = new PublicKey("CzbDpanY5DBcMGwPETdm1N82cZ8cFMLj6NpwMFaXXLLW")
const destTokenAccount = new PublicKey("2N5BAGtJqaEkPWLeNHKYDS5tha5Wouerzzm4DEARhPj7")

const signature = await mintTo(
    connection,
    user,
    tokenMint,
    destTokenAccount,
    mintAuthority,
    AMOUNT * (10 ** DECIMALS)
);

const link = getExplorerLink("tx", signature, "devnet");

console.log("Token minted: ", link);