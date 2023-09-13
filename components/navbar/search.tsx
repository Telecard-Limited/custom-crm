"use client";

import { BiSearch } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import MenuItem from "./menuItem";
const Search = () => {
  const router = useRouter();
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <MenuItem label="About" onClick={() => router.prefetch("/about-us")} />
        <div className="hidden  sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center">
          <MenuItem label="OverView" onClick={() => {}} />
        </div>
        <div className="hidden  sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center">
          <MenuItem label="Pricings" onClick={() => {}} />
        </div>
        <div className="hidden  sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center">
          <MenuItem label="Solutions" onClick={() => {}} />
        </div>
        <div className="hidden  sm:block text-sm font-semibold   px-5 border-x-[1px] flex-1 text-center">
          <MenuItem label="Features" onClick={() => {}} />
        </div>

        {/* <div className="p-2 text-white rounded-full bg-rose-500">
          <BiSearch size={18} />
        </div> */}
      </div>
    </div>
  );
};

export default Search;
