import React from "react";
import { BsDot } from "react-icons/bs";
import BookCategory from "@/mocks/BookCategory.json";
import SidebarItems from "./sidebarItems";
const SideBar = () => {
  return (
    <div className="absolute start-0 py-11 w-[710px] bg-[#EFEEF6] ">
      <div className="font-medium text-xs text-[#5C6A79] flex flex-col gap-6 text-left px-40 ">
        <div className="flex items-center gap-3 text-base font-bold text-[#1C2A39]">
          <BsDot width={6} height={6} />
          <h1> Best Seller</h1>
        </div>

        {BookCategory.map((catg, i) => {
          return <SidebarItems key={i} title={catg.title} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
