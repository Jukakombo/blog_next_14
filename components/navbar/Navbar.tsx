import Link from "next/link";
import React from "react";
import Links from "./Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="flex items-center justify-between shadow-md py-4">
      <Link href={"/"}>
        <div className="text-[30px] font-semibold ">Logo</div>
      </Link>
      <div className="">
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
