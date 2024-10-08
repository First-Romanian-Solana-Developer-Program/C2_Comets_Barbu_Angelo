import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log('Loaded keypair! ✅');
console.log('Public key:', keypair.publicKey.toBase58());
console.log('Private key:', keypair.secretKey);