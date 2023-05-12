import { MenuContext } from "@/hook/menuContext";
import { memo, useContext } from "react";

function ProgressCircle({ progress = 0.75, size = 40 }) {
  const { isDark } = useContext(MenuContext);
  const angle = progress * 360;
  return (
    <div
      style={{
        background: `radial-gradient(${isDark ? "#334155" : "#cbd5e1"} 55%, transparent 56%),
    conic-gradient(transparent 0deg ${angle}deg, ${isDark ? "#6870fa" : "#818cf8"} ${angle}deg 360deg),
    ${isDark ? "#14b8a6" : "#0f766e"}`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className="rounded-full"
    ></div>
  );
}

export default memo(ProgressCircle);
