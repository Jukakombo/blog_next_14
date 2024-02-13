import Link from "next/link";
import React from "react";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between shadow-md py-4">
      <Link href={"/"}>
        <div className="text-[30px] font-semibold ">Logo</div>
      </Link>
      <div className="">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
