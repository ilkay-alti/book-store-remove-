import Link from "next/link";
import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import User from "./user";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-[#5C6A79] font-bold text-xs h-28 px-40 py-11">
      <Logo />
      <Navbar />
      <User />
    </div>
  );
};

export default Header;
