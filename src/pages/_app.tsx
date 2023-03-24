import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import GlobalLayout from "../layouts";
import Head from "next/head";

export const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  );
};
export default App;
