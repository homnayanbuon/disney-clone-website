import React from "react";

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:underline underline-offset-8 transition-all text-base ">
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default HeaderItem;
