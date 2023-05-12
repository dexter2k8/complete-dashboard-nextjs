import Header from "@/components/Header";
import ChartGeography from "@/features/ChartGeography";
import { MenuContext } from "@/hook/menuContext";
import { memo, useContext } from "react";

function Geography() {
  const { isDark } = useContext(MenuContext);
  return (
    <>
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <div className={`rounded h-[calc(100vh-16.5rem)] ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
        <ChartGeography />
      </div>
    </>
  );
}

export default memo(Geography);
