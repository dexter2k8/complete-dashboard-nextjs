import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { memo } from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function ProSidebar() {
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <Sidebar>
      <Menu>
        <MenuItem onClick={() => collapseSidebar()}></MenuItem>
        <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default memo(ProSidebar);
