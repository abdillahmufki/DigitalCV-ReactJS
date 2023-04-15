import React from "react";
import "../App.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
function SearchBar() {
  return (
    <div className="searchBar__div absolute ml-3">
      <input
        type="text"
        name="search"
        placeholder="Cari lowongan yang anda inginkan"
        className="py-2 pl-10 w-[500px] pr-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
      <button className="absolute right-0 top-0 px-3 py-2  rounded-lg text-white focus:outline-none ">
        <MagnifyingGlassIcon className="h-5 w-5 text-[#000]" />
      </button>
    </div>
  );
}

export default SearchBar;
