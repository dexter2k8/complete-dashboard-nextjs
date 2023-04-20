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

function Navbar() {
  const { isDark, setIsDark } = useContext(MenuContext);
  return (
    <div className="flex justify-between">
      <div className="flex">
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <div
          className={`${
            isDark ? "bg-gray-100" : "bg-slate-800"
          } flex items-center w-max rounded overflow-hidden duration-300`}
        >
          <InputBase
            sx={{ ml: 2, flex: 1, transition: "0.3s", color: `${isDark ? "black" : "white"}` }}
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
