import Header from "@/components/Header";
import ChartLine from "@/features/ChartLine";
import { memo } from "react";

function Line() {
  return (
    <>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <div className="h-[calc(100vh-16.5rem)]">
        <ChartLine isDashboard={true} />
      </div>
    </>
  );
}

export default memo(Line);
