import Link from "next/link";
import React, { FC } from "react";

interface NavbarItemsProps {
  title: string;
  isActive: boolean;
}

const NavbarItems: FC<NavbarItemsProps> = ({ title, isActive }) => {
  return (
    <Link
      href={`${title.trim()}`}
      className={`${isActive ? "text-[#1C2A39]" : ""} uppercase`}
    >
      {title}
    </Link>
  );
};

export default NavbarItems;
