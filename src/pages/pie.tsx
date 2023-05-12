import { memo } from "react";
import Header from "@/components/Header";
import ChartPie from "@/features/ChartPie";

function Pie() {
  return (
    <>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <div className="h-[calc(100vh-16.5rem)]">
        <ChartPie />
      </div>
    </>
  );
}

export default memo(Pie);
