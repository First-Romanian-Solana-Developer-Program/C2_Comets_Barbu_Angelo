import { Umi } from "@metaplex-foundation/umi";
import { createNft } from "@metaplex-foundation/mpl-token-metadata";

import { generateSigner, percentAmount } from "@metaplex-foundation/umi";

import base58 from "bs58";
import { getExplorerLink } from "@solana-developers/helpers";

export async function mintNft(umi: Umi, metadataUri: string, data: any) {
    
  const mint = generateSigner(umi);

  try {
    let tx = createNft(umi, {
      mint,
      name: data.name,
      symbol: data.symbol,
      uri: metadataUri,
      updateAuthority: umi.identity.publicKey,
      sellerFeeBasisPoints: percentAmount(5),
      isCollection: false,
    });

    let result = await tx.sendAndConfirm(umi);

    const signature = base58.encode(result.signature);

    let explorerLink = getExplorerLink("tx", signature, "devnet");

    console.log(`Succesfully Minted! Check out your TX here:\n${explorerLink}`);

    console.log("Mint Address: ", mint.publicKey);
  } catch (error) {
    console.log(`Oops.. Something went wrong ${error}`);
  }
}