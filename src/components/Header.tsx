import { MenuContext } from "@/hook/menuContext";
import { memo, useContext } from "react";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: IHeaderProps) {
  const { isDark } = useContext(MenuContext);
  return (
    <div className="mb-9 mt-7">
      <h2 className={`font-['Roboto'] font-bold leading-tight" ${isDark ? "text-gray-200" : "text-gray-700"}`}>
        {title}
      </h2>
      <h5 className={`font-['Roboto'] ${isDark ? "text-teal-400" : "text-teal-700"}`}>{subtitle}</h5>
    </div>
  );
}

export default memo(Header);
