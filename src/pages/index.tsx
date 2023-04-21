import ProSidebar from "@/features/ProSidebar";
import Navbar from "@/features/Navbar";
import { MenuContext } from "@/hook/menuContext";
import { useContext } from "react";

export default function Home() {
  const { isDark } = useContext(MenuContext);
  return (
    <div className="flex">
      <ProSidebar />
      <main className={`p-4 duration-300 ${isDark ? "bg-slate-900" : "bg-slate-100"} w-full h-screen`}>
        <Navbar />
      </main>
    </div>
  );
}
