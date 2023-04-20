import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MenuProvider from "@/hook/menuContext";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuProvider>
        <ProSidebarProvider>
          <Component {...pageProps} />
        </ProSidebarProvider>
      </MenuProvider>
    </>
  );
}
