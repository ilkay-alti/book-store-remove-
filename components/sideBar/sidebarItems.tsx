import Link from "next/link";
import React from "react";

type SidebarItemsProps = {
  title: string;
};

const SidebarItems: React.FC<SidebarItemsProps> = ({ title }) => {
  return (
    <div>
      <Link className="fill-current " href={`/Books/${title}`}>
        {title}
      </Link>
    </div>
  );
};

export default SidebarItems;
