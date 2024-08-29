import React from "react";
import classNames from "classnames";
import { WeatherState } from "@/types";

const TodayWeather = ({
  data,
  className,
}: {
  data: WeatherState;
  className?: string;
}) => {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div
        className={classNames(
          `w-full min-h-56 sm:min-h-64 sm:w-1/2 lg:w-1/4 p-2`,
          className
        )}
      >
        <div className="w-full h-full bg-[#bbd7ec] flex flex-col rounded-3xl">
          <div
            className={
              "flex flex-row bg-[#55555518] py-4 px-5 justify-between items-center rounded-tr-3xl rounded-tl-3xl"
            }
          >
            <span className="text-black font-medium">{dayName}</span>
            <span className="text-black font-medium">{date}</span>
          </div>
          <div className="py-6 px-5 h-full flex flex-col justify-between">
            <div className="flex flex-row items-center justify-between">
              <span className="text-black font-semibold font-aldrich text-[42px] md:text-[52px] pt-2">
                {data.temperature || "0"}°
              </span>
            </div>
            <div className="mt-5 flex flex-row space-x-2">
              <div>
                <span className="font-inter font-sm font-light text-zinc-500 ">
                  High
                </span>
                <span className="font-aldrich font-sm"> 20°</span>
              </div>

              <div>
                <span className="font-inter font-sm font-light text-zinc-500 ">
                  Low
                </span>
                <span className="font-aldrich font-sm  "> 10°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayWeather;
