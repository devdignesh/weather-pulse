import React, { useMemo } from "react";
import { HiLocationMarker } from "react-icons/hi";
import SearchBar from "./searchbar";
import { FaRegBell } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { localities } from "@/lib/localitiesData";
import Image from "next/image";
import Link from "next/link";

const Header = ({ cityId }: { cityId: string }) => {
  const cityName = useMemo(() => {
    const locality = localities.find((city) => city.id === cityId);
    return locality ? locality.name : "City not found";
  }, [cityId]);
  return (
    <>
      <div className="sm:p-3 bg-black md:p-4 p-2   drop-shadow-lg">
        <div className="flex w-full flex-row justify-between items-center ">
          <div className="flex flex-row space-x-4">
            <div className="w-full flex flex-row justify-center items-center">
              <Link href={"/"}>
                <Image
                  src="/images/sun_clouds.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </Link>
            </div>

            <div className="flex flex-row space-x-2 items-center">
              <span className="hidden sm:block">
                <HiLocationMarker className="text-white" size={20} />
              </span>
              <span className="text-white w-24 hidden sm:block capitalize text-sm font-light text-nowrap">
                {cityName}
              </span>
            </div>
          </div>

          <div>
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
