"use client";
import Link from "next/link";
import NaveLink from "./navLink/NaveLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { handleLogout } from "@/lib/action";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = ({ session }: any) => {
  const [open, setOpen] = useState(false);
  const isAdmin = true;
  // const session = true;
  return (
    <div className="">
      <div className="flex items-center  desktop_view">
        {links.map((item, index) => (
          <NaveLink item={item} key={index} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NaveLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="bg-blue-500 rounded-sm  p-1 text-white">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NaveLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>{" "}
      <button
        className="mobile_view hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <AiOutlineClose className="text-white" size={25} />
        ) : (
          <GiHamburgerMenu className="text-white" size={25} />
        )}
      </button>
      {open && (
        <div
          className="h-screen z-20 absolute top-[70px] right-0 w-[50%] flex-col flex items-center gap-[10%] bg-[#2b2a40] transition-all overflow-hidden justify-center 
         "
        >
          {links.map((item, index) => (
            <NaveLink item={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
