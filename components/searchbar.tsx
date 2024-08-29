"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, clearSuggestions } from "@/store/localitiesSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

const SearchBar = ({ className }: { className?: string }) => {
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();
  const { suggestions, query } = useSelector(
    (state: RootState) => state.localities
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setQuery(value));
  };

  const handleSuggestionClick = (name: string, id: string) => {
    dispatch(setQuery(name));
    dispatch(clearSuggestions());
    router.push(`/${id}`);
  };

  return (
    <div
      className={classNames(
        "md:w-[550px] ml-2 h-[44px]  sm:h-[46px] rounded-full bg-[#1e1e1e]",
        className
      )}
    >
      <div className="justify-start pl-4 sm:pl-6 items-center flex flex-row h-full relative">
        <span className="text-white">
          <FiSearch size={20} />
        </span>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-transparent border-none w-full  focus:outline-none placeholder:text-sm text-white placeholder:text-zinc-400 pl-2 text-[15px] leading-5"
          placeholder="Search city ..."
          style={{ outline: "none", boxShadow: "none" }}
        />

        {isFocused && suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full mt-1 bg-[#1e1e1e] text-start py-2 rounded-2xl z-10 max-h-[250px] overflow-hidden overflow-y-scroll">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="py-2 px-4 hover:bg-gray-700 text-[15px] text-zinc-300 cursor-pointer"
                onMouseDown={() =>
                  handleSuggestionClick(suggestion.name, suggestion.id)
                }
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
