"use client";
import React from "react";
import data from "@/mocks/NavbarSection.json";
import NavbarItems from "./navbarItems";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex gap-10 ">
      {data.map((data, i) => {
        return (
          <NavbarItems
            key={i}
            title={data.title}
            isActive={pathName.startsWith(`/${data.title}`)}
          />
        );
      })}
    </div>
  );
};

export default Navbar;
