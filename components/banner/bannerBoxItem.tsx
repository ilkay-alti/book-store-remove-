import React, { Children, FC } from "react";
import Link from "next/link";
import arrow from "@/public/arrow.svg";
import Image from "next/image";

type BannerBoxItemProps = {
  styles: string;
  redirectUrl: string;
  text: string;
};
const BannerBoxItem: React.FC<BannerBoxItemProps> = ({
  styles,
  redirectUrl,
  text,
}) => {
  console.log(styles, redirectUrl);
  return (
    <Link
      href={redirectUrl}
      className={`${styles} text-[#1C2A39] text-lg font-bold  p-5 flex items-end`}
    >
      <div>
        <h1 className="uppercase inline-block align-text-bottom">{text}</h1>
        <Image src={arrow} width={55} height={12} alt="Picture of the author" />
      </div>
    </Link>
  );
};

export default BannerBoxItem;
