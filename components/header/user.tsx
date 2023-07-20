"use client";
import React, { useState } from "react";
import { BiUser, BiBasket, BiSearch } from "react-icons/bi";

import UserMenuItem from "./userMenuItem";
import Link from "next/link";
const User = () => {
  const [userIsOpen, setUserIsOpen] = useState<boolean>(true);

  return (
    <div className="flex gap-10 ">
      <Link href={"/"}>
        <BiUser className="w-4 h-4 cursor-pointer " />
      </Link>
      <Link href={"/"}>
        <BiSearch className="w-4 h-4 cursor-pointer" />
      </Link>
      <Link href={"/"}>
        <BiBasket className="w-4 h-4 cursor-pointer" />
      </Link>{" "}
    </div>
  );
};

export default User;
