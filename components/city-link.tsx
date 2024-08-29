import Link from "next/link";
import React from "react";
import { IoIosTrendingUp } from "react-icons/io";

const CityLink = ({ cityID, name }: { cityID: string; name: string }) => {
  return (
    <>
      <Link href={`/${cityID}`}>
        <div className="bg-[#1e1e1e] px-4 py-1 rounded-full text-zinc-400 hover:text-white hover:bg-[#131212] transition-all duration-200 flex flex-row space-x-1 cursor-pointer">
          <span className=" text-sm">{name}</span>
          <IoIosTrendingUp size={18} />
        </div>
      </Link>
    </>
  );
};

export default CityLink;
