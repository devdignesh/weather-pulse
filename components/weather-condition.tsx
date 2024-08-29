import { cn } from "@/lib/utils";
import { WeatherState } from "@/types";
import React from "react";
import { IconType } from "react-icons";

interface WeatherConditionProps {
  title: string;
  icon: IconType;
  data: number | null;
  unit: string;
  classNames ?: string
}

const WeatherCondition = ({
  title,
  icon: Icon,
  data,
  unit,
  classNames
}: WeatherConditionProps) => {
  return (
    <div className={cn(`w-full sm:w-1/2 lg:w-1/4 min-h-56 sm:min-h-64 p-2 lg:p-3`, classNames)}>
      <div className="w-full h-full bg-[#1b1b1d] flex flex-col rounded-3xl">
        <div className="flex flex-row px-6 py-4 justify-between items-center rounded-tr-3xl rounded-tl-3xl">
          <div className="flex flex-row space-x-2 items-center">
            <Icon className="text-white" />
            <span className="text-white font-medium sm:text-base text-sm">{title}</span>
          </div>
        </div>

        <div className="flex h-full flex-row items-center justify-center">
          <div className="space-x-1">
            <span className="text-white font-semibold font-aldrich text-4xl lg:text-[44px]">
              {data|| '0'}
            </span>
            <span className="text-zinc-300 text-xl">{unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCondition;
