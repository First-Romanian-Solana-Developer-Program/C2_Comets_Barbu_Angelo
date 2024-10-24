import "dotenv/config";
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log("User account loaded: ", user.publicKey.toBase58());

const tokenMint = new PublicKey("CzbDpanY5DBcMGwPETdm1N82cZ8cFMLj6NpwMFaXXLLW")
const destPubKey = new PublicKey("BMdqZbo8oJrHRps5SBvyJGSF7BCa6CNxgA7piumsxAim")

const destTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMint,
    destPubKey
);

console.log("Token account created: ", destTokenAccount.address.toBase58());