import { MenuContext } from "@/hook/menuContext";
import { memo, useContext } from "react";

function Footer() {
  const { isDark } = useContext(MenuContext);
  return (
    <footer className="text-center text-gray-500 text-sm">
      <span className={`${isDark ? "text-gray-200" : "text-gray-800"} font-bold text-lg mr-2`}>AdminHub</span>&copy;{" "}
      {new Date().getFullYear()} All Rights Reversed
    </footer>
  );
}

export default memo(Footer);
