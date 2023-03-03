import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Balance from "../components/Balance";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className="mt-12 text-sm hidden md:inline-flex items-center">
          Atlantis
        </h1>

        <p className="flex flex-col xl:flex-row gap-4 mt-4 items-start justify-start">
          The Trustless Token Bridge for L1 - Starknet
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2> Balance </h2>
            <p>
              {" "}
              <Balance />{" "}
            </p>
          </a>

          <a href="https://wagmi.sh" className={styles.card}>
            <h2> Pool &rarr;</h2>
            <Logo />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by Bimo, María y Karol
        </a>
      </footer>
    </div>
  );
};

export default Home;
