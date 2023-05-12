import Header from "@/components/Header";
import { Button } from "@mui/material";
import { memo, useContext } from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { MenuContext } from "@/hook/menuContext";
import StatBox from "@/components/StatBox";
import ChartLine from "@/features/ChartLine";

function Home() {
  const { isDark } = useContext(MenuContext);
  return (
    <>
      <div className="flex items-center justify-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button className={`${isDark ? "bg-indigo-900 text-gray-200" : "bg-indigo-300 text-gray-800"} font-bold h-11`}>
          <DownloadOutlinedIcon className="mr-2" />
          Download Reports
        </Button>
      </div>
      <div className="grid grid-cols-12 auto-rows-[8.75rem] gap-5">
        <div className={`flex place-items-center col-span-3 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={<EmailIcon className={`text-3xl ${isDark ? "text-teal-500" : "text-teal-700"}`} />}
          />
        </div>
        <div className={`flex place-items-center col-span-3 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+21%"
            icon={<PointOfSaleIcon className={`text-3xl ${isDark ? "text-teal-500" : "text-teal-700"}`} />}
          />
        </div>
        <div className={`flex place-items-center col-span-3 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase="+5%"
            icon={<PersonAddIcon className={`text-3xl ${isDark ? "text-teal-500" : "text-teal-700"}`} />}
          />
        </div>
        <div className={`flex place-items-center col-span-3 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress={0.75}
            increase="+43%"
            icon={<TrafficIcon className={`text-3xl ${isDark ? "text-teal-500" : "text-teal-700"}`} />}
          />
        </div>

        {/* ROW 2 */}
        <div className={`col-span-8 row-span-2 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <div className="flex items-center justify-between px-8 mt-6">
            <div>
              <h4 className={`font-['Roboto'] ${isDark ? "text-gray-200" : "text-gray-800"}`}>Revenue Generated</h4>
              <h3 className={`font-bold ${isDark ? "text-teal-500" : "text-teal-700"}`}>$59,342.32</h3>
            </div>
            <div>
              <DownloadOutlinedIcon className={`text-3xl ${isDark ? "text-teal-500" : "text-teal-700"}`} />
            </div>
          </div>
          <div className="h-60 -mt-8">
            <ChartLine isDashboard={false} />
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </>
  );
}

export default memo(Home);
