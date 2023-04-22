import { ReactNode, memo, useContext } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "@/features/Footer";
import ProSidebar from "./ProSidebar";
import { MenuContext } from "@/hook/menuContext";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const { isDark } = useContext(MenuContext);
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <ProSidebar />
        <div className={`h-screen w-full flex flex-col p-4 ${isDark ? "bg-slate-900" : "bg-slate-100"}`}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default memo(Layout);
