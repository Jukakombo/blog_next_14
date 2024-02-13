"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NaveLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <div className="">
      <Link
        className={`mr-4 ${
          pathName == item.path &&
          "bg-white p-1 rounded-md text-black font-medium"
        }`}
        href={item.path}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NaveLink;
