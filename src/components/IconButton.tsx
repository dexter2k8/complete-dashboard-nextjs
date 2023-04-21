import { MenuContext } from "@/hook/menuContext";
import { IconButton as MUIButton } from "@mui/material";
import { MouseEventHandler, ReactNode, memo, useContext } from "react";

interface IIconButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

function IconButton({ children, onClick }: IIconButtonProps) {
  const { isDark } = useContext(MenuContext);
  return (
    <MUIButton onClick={onClick} className={`${isDark ? "text-gray-300" : "text-gray-500"}`}>
      {children}
    </MUIButton>
  );
}

export default memo(IconButton);
