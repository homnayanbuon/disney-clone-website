import React from "react";
import { avatar, logo } from "../assets";
import { navLinks } from "../constants";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-2">
      <div className="flex-1 flex gap-8 ">
        <img
          src={logo}
          alt="header logo"
          className="w-[80px] md:w-[180px] lg:w-[200px] object-contain cursor-pointer max-w-[200px]"
        />

        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((navLink, i) => (
            <HeaderItem key={i} title={navLink.name} Icon={navLink.icon} />
          ))}
        </div>
      </div>

      <img
        src={avatar}
        alt="avatar"
        className="w-12 h-12 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Header;
