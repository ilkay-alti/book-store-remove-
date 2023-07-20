import React from "react";
interface UserMenuItemProps {
  title: string;
  onClick?: () => void;
}
const UserMenuItem = ({ title, onClick }: UserMenuItemProps) => {
  return (
    <div onClick={onClick} className="  px-10 py-4 bg-red-500">
      {title}
    </div>
  );
};

export default UserMenuItem;
