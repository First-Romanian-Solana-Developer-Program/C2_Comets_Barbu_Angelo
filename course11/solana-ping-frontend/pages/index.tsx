import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { AppBar } from "../components/AppBar";
import Head from "next/head";
import { PingButton } from "../components/PingButton";
import WalletContextProvider from "../components/WalletContextProvider";
import { Balance } from "../components/Balance";
import { SendSolForm } from "../components/sendSolForm";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client
  }, []);

  if (!isClient) {
    return null; // Render nothing until client-side hydration is complete
  }

  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta name="description" content="Wallet-Adapter Example" />
      </Head>

      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <PingButton />
          <Balance />  {/* Display the balance */}
          <SendSolForm />  {/* Send SOL form */}
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
