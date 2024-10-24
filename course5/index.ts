import "dotenv/config";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

import { uploadImage } from "./upload-image";
import { uploadMetadata } from "./upload-metadata";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { mintNft } from "./mint-nft";

const NFT_DATA = {
    name: "Angelo's NFT",
    symbol: "ANFT",
    description: "This is a test NFT for Solana Developers Program C2 2024",
    imageFilePath: "nftImage.png",
  };

const user = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"));
const umi = createUmi(connection);

let keypair = umi.eddsa.createKeypairFromSecretKey(user.secretKey);
const myKeypairSigner = createSignerFromKeypair(umi, keypair);

// Load up the necessary plugins
umi.use(signerIdentity(myKeypairSigner));
umi.use(mplTokenMetadata());
umi.use(irysUploader());

console.log("Loaded user:", user.publicKey.toBase58());

(async () => {
  try {
    const imgUri = await uploadImage(umi, NFT_DATA.imageFilePath);

    const metadataUri = await uploadMetadata(umi, NFT_DATA, imgUri!);

    await mintNft(umi, metadataUri!, NFT_DATA);

  } catch (error) {
    console.log("Error:", error);
  }
})();