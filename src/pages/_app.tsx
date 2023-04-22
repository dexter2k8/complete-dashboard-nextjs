import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MenuProvider from "@/hook/menuContext";
import { ProSidebarProvider } from "react-pro-sidebar";
import Layout from "@/features/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuProvider>
        <ProSidebarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProSidebarProvider>
      </MenuProvider>
    </>
  );
}
