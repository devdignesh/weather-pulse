"use client";
import Header from "@/components/header";
import React, { useEffect } from "react";
import TodayWeather from "@/components/today-weather";
import { FaDroplet } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "@/store/weatherSlice";
import { AppDispatch } from "@/store/store";
import { RootState } from "@/store/store";
import WeatherCondition from "@/components/weather-condition";
import { FaCloudRain, FaCompass, FaTint, FaWind } from "react-icons/fa";

const page = ({ params }: { params: { cityId: string } }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (params.cityId) {
      dispatch(fetchWeatherData(params.cityId));
    }
  }, [params.cityId, dispatch]);

  const weatherData = useSelector((state: RootState) => state.weather);
  const isLoading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);

  console.log("weatherData=====", weatherData);

  if (error) {
    return (
      <>
        <Header cityId={params.cityId} />
        <p className="text-white">Someting went wrong : {error}</p>
      </>
    );
  }

  return (
    <>
      <Header cityId={params.cityId} />
      <div className="w-full mb-10">
        {weatherData && (
          <div className="flex w-full flex-wrap justify-between">
            <TodayWeather data={weatherData} />

            <WeatherCondition
              title="Humidity"
              icon={FaDroplet}
              data={weatherData.humidity}
              unit="%"
            />
            <WeatherCondition
              title="Rain Accumulation"
              icon={FaCloudRain}
              data={weatherData.rainAccumulation}
              unit="mm"
            />
            <WeatherCondition
              title="Rain Intensity"
              icon={FaTint}
              data={weatherData.rainIntensity}
              unit="mm/h"
              classNames="lg:w-1/4"
            />

            <WeatherCondition
              title="Wind Direction"
              icon={FaCompass}
              data={Math.round(weatherData.windDirection ?? 0)}
              unit="deg"
              classNames="lg:w-1/2"
            />

            <WeatherCondition
              title="Wind Speed"
              icon={FaWind}
              data={weatherData.windSpeed}
              unit="km/h"
              classNames="lg:w-1/2"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default page;
