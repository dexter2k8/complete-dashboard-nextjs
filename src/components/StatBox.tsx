import { memo, useContext } from "react";
import ProgressCircle from "./ProgressCircle";
import { MenuContext } from "@/hook/menuContext";

interface IStarBoxProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  progress: number;
  increase: string;
}

function StatBox({ title, subtitle, icon, progress, increase }: IStarBoxProps) {
  const { isDark } = useContext(MenuContext);
  return (
    <div className="w-full m-[0_1.875rem]">
      <section className="flex justify-between">
        <div>
          {icon}
          <h4 className={`mt-2 ${isDark ? "text-gray-200" : "text-gray-800"}`}>{title}</h4>
        </div>
        <div>
          <ProgressCircle progress={progress} />
        </div>
      </section>
      <section className="flex justify-between">
        <h5 className={isDark ? "text-teal-500" : "text-teal-700"}>{subtitle}</h5>
        <h5 className={`italic ${isDark ? "text-teal-500" : "text-teal-700"}`}>{increase}</h5>
      </section>
    </div>
  );
}

export default memo(StatBox);
