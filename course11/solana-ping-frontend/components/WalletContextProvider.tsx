import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { ReactNode, useMemo, useState, useEffect } from "react";

require("@solana/wallet-adapter-react-ui/styles.css");

function WalletContextProvider({ children }: { children: ReactNode }) {
    const [isClient, setIsClient] = useState(false);

    // Ensure this is only rendered on the client-side
    useEffect(() => {
        setIsClient(true); // Set to true once the component is mounted on the client
    }, []);

    const endpoint = clusterApiUrl("devnet");

    const wallets = useMemo(() => [], []); // No specific wallet providers are added here; you might want to add them if needed.

    if (!isClient) {
        return null; // Return null until the component is mounted on the client
    }

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default WalletContextProvider;
