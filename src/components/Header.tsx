import { MenuContext } from "@/hook/menuContext";
import { memo, useContext } from "react";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: IHeaderProps) {
  const { isDark, setIsDark } = useContext(MenuContext);
  return (
    <div>
      <h2 className={`font-['Roboto'] font-bold leading-tight" ${isDark ? "text-gray-200" : "text-gray-700"}`}>
        {title}
      </h2>
      <h5 className={`font-['Roboto'] ${isDark ? "text-teal-400" : "text-teal-700"}`}>{subtitle}</h5>
    </div>
  );
}

export default memo(Header);
