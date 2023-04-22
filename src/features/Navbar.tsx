import { memo, useContext } from "react";
import { InputBase } from "@mui/material";
import IconButton from "@/components/IconButton";
import { MenuContext } from "@/hook/menuContext";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useProSidebar } from "react-pro-sidebar";

function Navbar() {
  const { isDark, setIsDark } = useContext(MenuContext);
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="flex items-center gap-2 sm:justify-between flex-col sm:flex-row">
      <div className="flex gap-4">
        <IconButton onClick={() => collapseSidebar()}>
          <MenuOutlinedIcon />
        </IconButton>
        <div
          className={`${
            isDark ? "bg-slate-700" : "bg-slate-300"
          } flex items-center w-max rounded overflow-hidden duration-300`}
        >
          <InputBase
            sx={{ ml: 2, flex: 1, transition: "0.3s", color: `${isDark ? "#e0e0e0" : "#141414"}` }}
            placeholder="Search"
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <IconButton onClick={() => setIsDark(!isDark)}>
          {isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default memo(Navbar);
