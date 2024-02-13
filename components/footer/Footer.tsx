import React from "react";
import { MdOutlineBlindsClosed } from "react-icons/md";
const Footer = () => {
  return (
    <div className="h-[100px] flex items-center justify-between text-gray-500">
      <p className="font-bold flex items-center cursor-pointer ">
        <MdOutlineBlindsClosed className="mr-4 " size={25} />
        Alipet
      </p>
      <p>Allright reserved {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
