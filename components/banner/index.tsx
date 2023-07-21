import React from "react";
import BannerBoxItem from "./bannerBoxItem";
import Image from "next/image";
import human from "@/public/illustration.svg";

const Bannner = () => {
  return (
    <div className="bg-[#FFE0E2] text-[#FFF] w-full flex flex-col items-center justify-around py-16 pt-16 mb-32">
      <h1 className="uppercase font-semibold text-2xl text-black">
        big summer sale
      </h1>
      <div className="flex">
        <div className="relative uppercase font-bold text-6xl  self-start">
          <h1 className="z-10 text-[#534FD2]">up</h1>
          <h1 className="  absolute  -bottom-1 left-1 text-[#FFF]">up</h1>
        </div>
        {/* <div className="relative uppercase font-bold text-6xl self-start">
          <h1 className="z-10 text-[#534FD2]">up</h1>
          <h1 className=" absolute  bottom-16 left-2 text-[#FFF]">up</h1>
        </div> */}
        <div className="relative uppercase font-black text-9xl self-center">
          <h1 className="z-10 text-[#534FD2]">60</h1>
          <h1 className="  absolute  -bottom-1 left-1 text-[#FFF]">60</h1>
        </div>

        <div className="relative uppercase  font-bold text-6xl self-end">
          <h1 className="  z-10 text-[#534FD2]">%</h1>
          <h1 className="   absolute  -bottom-1 left-1 text-[#FFF]">%</h1>
        </div>
      </div>
      <Image
        src={human}
        width={1000}
        height={430}
        alt="Picture of the author"
        className="relative"
      />

      <BannerBoxItem
        styles="bg-[#9E98DC] w-[149px] h-[204px] flex absolute end-14 top-1/4 "
        redirectUrl="/"
        text="Change old book on new"
      />

      <BannerBoxItem
        styles="bg-[#FF8FE6] w-[137px] h-[273px] flex absolute end-0 top-2/4"
        redirectUrl="/"
        text="top 100 books 2019"
      />
    </div>
  );
};

export default Bannner;
