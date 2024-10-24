import { Umi } from '@metaplex-foundation/umi';

export async function uploadMetadata(umi: Umi, data: any, imageUri: string) {

    try {
        const metadata = {
            name: data.name,
            symbol: data.symbol,
            image: imageUri,
            description: data.description,
            attributes: data.attributes,
            creators: [],
            properties: {
                files: [
                    {
                        uri: imageUri,
                        type: "image/png",
                    },
                ],
            },
        }

        const metadataUri = await umi.uploader.uploadJson(metadata);

        console.log("Uploaded off-chain metadata to", metadataUri);

        return metadataUri;
    } catch(error) {
        console.error("Error uploading metadata: ", error);
    }

}