import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import GlobalLayout from "../layouts";
import Head from "next/head";
import { useState } from "react";
import { PlayerContext } from "@/contexts/playerContext";

export const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const App = ({ Component, pageProps }: AppProps) => {
  const [playerList, setPlayerList] = useState<any>([]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PlayerContext.Provider value={{ playerList, setPlayerList }}>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </PlayerContext.Provider>
    </>
  );
};
export default App;
