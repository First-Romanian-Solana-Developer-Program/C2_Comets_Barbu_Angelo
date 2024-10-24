import { createGenericFile, Umi } from "@metaplex-foundation/umi";
import { readFile } from "fs/promises";

export async function uploadImage(umi: Umi, imageFilePath: string) {
  try {

    const imageFile = await readFile(imageFilePath);

    const imageConverted = createGenericFile(
      new Uint8Array(imageFile),
      "image/png",
    );

    const [imageUri] = await umi.uploader.upload([imageConverted], {
      onProgress: (percent) => {
        console.log(`Uploading image: ${percent * 100}%`);
      },
    });
    console.log("Image URI: ", imageUri);

    if (!imageUri) {
      throw new Error("Image upload failed");
    }

    return imageUri;

  } catch (error) {
    console.log("Error uploading image: ", error);
  }
}