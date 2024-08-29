"use client";
import CityLink from "@/components/city-link";
import SearchBar from "@/components/searchbar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";

export default function Home() {
  const cityLinks = useSelector(
    (state: RootState) => state.cityLinks.cityLinks
  );

  return (
    <>
      <main className="flex h-screen -mt-10 flex-col items-center justify-center w-full text-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/sun_clouds.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <span className="text-white text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-10 font-bold">
            WeatherPulse
          </span>
        </div>
        <SearchBar />
        <div className="flex flex-wrap mt-5 space-x-2 space-y-2 justify-center items-end">
          {cityLinks.map((item) => (
            <CityLink key={item.id} cityID={item.id} name={item.name} />
          ))}
        </div>
      </main>
    </>
  );
}
