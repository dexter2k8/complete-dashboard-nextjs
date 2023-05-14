import { memo } from "react";
import Header from "@/components/Header";
import ChartBar from "@/features/ChartBar";

function Bar() {
  return (
    <>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <div className="h-[calc(100vh-16.5rem)]">
        <ChartBar isDashboard={true} />
      </div>
    </>
  );
}

export default memo(Bar);
