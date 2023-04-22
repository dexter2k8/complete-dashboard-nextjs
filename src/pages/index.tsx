import Header from "@/components/Header";
import { Button } from "@mui/material";
import { memo, useContext } from "react";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { MenuContext } from "@/hook/menuContext";

function Home() {
  const { isDark } = useContext(MenuContext);
  return (
    <div className="flex items-center justify-between my-11">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      <Button className={`${isDark ? "bg-indigo-900 text-gray-200" : "bg-indigo-300 text-gray-800"} font-bold h-11`}>
        <DownloadOutlinedIcon className="mr-2" />
        Download Reports
      </Button>
    </div>
  );
}

export default memo(Home);
