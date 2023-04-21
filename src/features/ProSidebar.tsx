import { Menu, MenuItem, Sidebar, SubMenu, menuClasses } from "react-pro-sidebar";
import { MouseEvent, memo, useContext, useState } from "react";
import { MenuContext } from "@/hook/menuContext";
import { useRouter } from "next/router";

import PandaIcon from "@/components/PandaIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Image from "next/image";

function ProSidebar() {
  const { isDark } = useContext(MenuContext);
  const [selected, setSelected] = useState("Dashboard");
  const router = useRouter();

  const styledSidebar = {
    ["." + menuClasses.button]: {
      color: `${isDark ? "#e0e0e0" : "#141414"}`,
      background: `${isDark ? "#334155" : "#cbd5e1"}`,
      "&.ps-menu-button:hover": { color: "#818cf8", background: `${isDark ? "#334155" : "#cbd5e1"}` },
      "&.ps-active": { color: "#6870fa" },
      "&.ps-active:hover": { color: "#818cf8", background: `${isDark ? "#334155" : "#cbd5e1"}` },
    },
  };

  const handleChange = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, title: string, route: string) => {
    setSelected(title);
    router.replace(route);
  };

  return (
    <Sidebar
      style={{ border: "none" }}
      backgroundColor={`${isDark ? "#334155" : "#cbd5e1"}`}
      rootStyles={styledSidebar}
    >
      <Menu>
        <MenuItem icon={<PandaIcon />} className="my-4 [&_a.ps-menu-button]:cursor-default">
          <h2 className={`font-semibold ${isDark ? "text-blue-200" : "text-blue-500"}`}>AdminHub</h2>
        </MenuItem>
      </Menu>
      <Menu style={{ overflowY: "auto", maxHeight: "80vh" }}>
        <MenuItem
          icon={<HomeOutlinedIcon />}
          active={selected === "Dashboard"}
          onClick={(e) => handleChange(e, "Dashboard", "/")}
        >
          Dashboard
        </MenuItem>

        <SubMenu label="Data" rootStyles={styledSidebar}>
          <MenuItem
            icon={<PeopleOutlinedIcon />}
            active={selected === "Manage team"}
            onClick={(e) => handleChange(e, "Manage team", "" /* "team" */)}
          >
            Manage team
          </MenuItem>
          <MenuItem
            icon={<ContactsOutlinedIcon />}
            active={selected === "Contacts Information"}
            onClick={(e) => handleChange(e, "Contacts Information", "" /* "contacts" */)}
          >
            Contacts Information
          </MenuItem>
          <MenuItem
            icon={<ReceiptOutlinedIcon />}
            active={selected === "Invoices Balances"}
            onClick={(e) => handleChange(e, "Invoices Balances", "" /* "invoices" */)}
          >
            Invoices Balances
          </MenuItem>
        </SubMenu>

        <SubMenu label="Pages" rootStyles={styledSidebar}>
          <MenuItem
            icon={<PersonOutlinedIcon />}
            active={selected === "Profile Form"}
            onClick={(e) => handleChange(e, "Profile Form", "" /* "form" */)}
          >
            Profile Form
          </MenuItem>
          <MenuItem
            icon={<CalendarTodayOutlinedIcon />}
            active={selected === "Calendar"}
            onClick={(e) => handleChange(e, "Calendar", "" /* "calendar" */)}
          >
            Calendar
          </MenuItem>
          <MenuItem
            icon={<HelpOutlineOutlinedIcon />}
            active={selected === "FAQ Page"}
            onClick={(e) => handleChange(e, "FAQ Page", "" /* "faq" */)}
          >
            FAQ Page
          </MenuItem>
        </SubMenu>

        <SubMenu label="Charts" rootStyles={styledSidebar}>
          <MenuItem
            icon={<BarChartOutlinedIcon />}
            active={selected === "Bar Chart"}
            onClick={(e) => handleChange(e, "Bar Chart", "" /* "bar" */)}
          >
            Bar Chart
          </MenuItem>
          <MenuItem
            icon={<PieChartOutlineOutlinedIcon />}
            active={selected === "Pie Chart"}
            onClick={(e) => handleChange(e, "Pie Chart", "" /* "pie" */)}
          >
            Pie Chart
          </MenuItem>
          <MenuItem
            icon={<TimelineOutlinedIcon />}
            active={selected === "Line Chart"}
            onClick={(e) => handleChange(e, "Line Chart", "" /* "line" */)}
          >
            Line Chart
          </MenuItem>
          <MenuItem
            icon={<MapOutlinedIcon />}
            active={selected === "Geography Chart"}
            onClick={(e) => handleChange(e, "Geography Chart", "" /* "geography" */)}
          >
            Geography Chart
          </MenuItem>
        </SubMenu>
      </Menu>
      <Menu>
        <MenuItem className="absolute bottom-4 [&_a.ps-menu-button]:cursor-default">
          <section className="flex gap-6">
            <figure className="min-w-fit">
              <Image src={"/user.png"} alt="Avatar" width={40} height={40} />
            </figure>
            <div>
              <h3 className={`font-semibold leading-6 ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>Mark</h3>
              <p className={`${isDark ? "text-teal-500" : "text-teal-700"}`}>VP Fancy Admin</p>
            </div>
          </section>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default memo(ProSidebar);
