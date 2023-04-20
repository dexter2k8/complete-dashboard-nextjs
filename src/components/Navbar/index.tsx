import { memo } from "react";
import { InputBase } from "@mui/material";

function Navbar() {
  return (
    <header style={{ background: "#f2f0f0" }}>
      <InputBase />
      <h2 className="">Navbar</h2>
    </header>
  );
}

export default memo(Navbar);
