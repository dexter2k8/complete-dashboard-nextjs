import { Dispatch, SetStateAction, createContext, useMemo, useState } from "react";

interface IContextProps {
  children: React.ReactNode;
}

interface IMenuContext {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext({} as IMenuContext);

function MenuProvider({ children }: IContextProps) {
  const [isDark, setIsDark] = useState<boolean>(true);

  const values = useMemo((): IMenuContext => ({ isDark, setIsDark }), [isDark]);

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
}

export default MenuProvider;
