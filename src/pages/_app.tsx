import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import GlobalLayout from "../layouts";
import Head from "next/head";
import { useRef, useState } from "react";
import { PlayerContext } from "@/contexts/playerContext";
import { LyricContext } from "@/contexts/lyricContext";
import { IMusicDetail } from "@/interfaces/music";

export const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const App = ({ Component, pageProps }: AppProps) => {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const [listIndex, setListIndex] = useState<number>(0);
  const [playerList, setPlayerList] = useState<IMusicDetail[]>([]);
  const [lyricTimeStamp, setLyricTimeStamp] = useState(0);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LyricContext.Provider value={{ lyricTimeStamp, setLyricTimeStamp, audioPlayer }}>
        <PlayerContext.Provider value={{ listIndex, setListIndex, playerList, setPlayerList }}>
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </PlayerContext.Provider>
      </LyricContext.Provider>
    </>
  );
};

export default App;
