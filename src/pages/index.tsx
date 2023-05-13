import Header from "@/components/Header";
import { Button } from "@mui/material";
import IconButton from "@/components/IconButton";
import { memo, useContext } from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { MenuContext } from "@/hook/menuContext";
import StatBox from "@/components/StatBox";
import ChartLine from "@/features/ChartLine";
import { mockTransactions } from "@/mock/mockData";
import ProgressCircle from "@/components/ProgressCircle";
import ChartBar from "@/features/ChartBar";
import ChartGeography from "@/features/ChartGeography";

function Home() {
  const { isDark } = useContext(MenuContext);
  return (
    <>
      <div className="flex items-center justify-between pr-5">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button className={`${isDark ? "bg-indigo-900 text-gray-200" : "bg-indigo-300 text-gray-800"} font-bold h-11`}>
          <DownloadOutlinedIcon className="mr-2" />
          Download Reports
        </Button>
      </div>
      <div className="pr-5 grid grid-cols-12 auto-rows-[8.75rem] gap-5">
        {/* ROW 1 */}
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
            <IconButton>
              <DownloadOutlinedIcon className={`text-3xl ${isDark ? "text-teal-500" : "text-teal-700"}`} />
            </IconButton>
          </div>
          <div className="h-60 -mt-8">
            <ChartLine isDashboard={false} />
          </div>
        </div>
        <div
          className={`col-span-4 row-span-2 overflow-auto rounded grid grid-cols-3 ${
            isDark ? "bg-slate-700" : "bg-slate-300"
          }`}
        >
          <h4
            className={`font-['Roboto'] border-b-4 p-4 col-span-3 ${
              isDark ? "text-gray-200 border-slate-900" : "text-gray-800 border-slate-100"
            }`}
          >
            Recent Transactions
          </h4>
          {mockTransactions.map((el, i) => (
            <>
              <div
                className={`border-b-4 p-4 ${
                  isDark ? "text-gray-200 border-slate-900" : "text-gray-800 border-slate-100"
                }`}
              >
                <h5 className={`font-bold ${isDark ? "text-teal-500" : "text-teal-700"}`}>{el.txId}</h5>
                <p>{el.user}</p>
              </div>
              <span
                className={`border-b-4 p-4 flex items-center justify-center ${
                  isDark ? "text-gray-200 border-slate-900" : "text-gray-800 border-slate-100"
                }`}
              >
                {el.date}
              </span>
              <div
                className={`border-b-4 p-4 flex items-center justify-end ${
                  isDark ? "text-gray-200 border-slate-900" : "text-gray-800 border-slate-100"
                }`}
              >
                <span className={`p-1 rounded ${isDark ? "bg-teal-700" : "bg-teal-500"}`}>{el.cost}</span>
              </div>
            </>
          ))}
        </div>

        {/* ROW 3 */}
        <div className={`col-span-4 row-span-2 p-6 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <h4 className={`font-['Roboto'] ${isDark ? "text-gray-200" : "text-gray-800"}`}>Campaign</h4>
          <div className="mt-6 flex flex-col items-center">
            <ProgressCircle size={125} />
            <h5 className={`mt-4 ${isDark ? "text-teal-500" : "text-teal-700"}`}>$48,352 revenue generated</h5>
            <p className={isDark ? "text-gray-200" : "text-gray-800"}>Includes extra misc expenditures and costs</p>
          </div>
        </div>
        <div className={`col-span-4 row-span-2 py-6 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <h4 className={`font-['Roboto'] px-6 ${isDark ? "text-gray-200" : "text-gray-800"}`}>Sales Quantity</h4>
          <div className="h-64 -mt-6">
            <ChartBar isDashboard={false} />
          </div>
        </div>
        <div className={`col-span-4 row-span-2 py-6 rounded ${isDark ? "bg-slate-700" : "bg-slate-300"}`}>
          <h4 className={`font-['Roboto'] px-6 mb-3 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            Geography Based Traffic
          </h4>
          <div className="h-52">
            <ChartGeography isDashboard={false} />
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Home);
