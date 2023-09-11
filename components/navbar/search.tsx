"use client";

import { BiSearch } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">About</div>
        <div className="hidden  sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center">
          <div className="px-6 text-sm font-semibold">OverView</div>
        </div>
        <div className="hidden  sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center">
          <div className="px-6 text-sm font-semibold">Pricings</div>
        </div>
        <div className="hidden  sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center">
          <div className="px-6 text-sm font-semibold ">Solutions</div>
        </div>
        <div className="hidden  sm:block text-sm font-semibold   px-5 border-x-[1px] flex-1 text-center">
          <div className="px-6 text-sm font-semibold ">Features</div>
        </div>

        {/* <div className="p-2 text-white rounded-full bg-rose-500">
          <BiSearch size={18} />
        </div> */}
      </div>
    </div>
  );
};

export default Search;
