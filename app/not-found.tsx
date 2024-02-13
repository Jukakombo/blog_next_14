import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry! What you are trying to find doen&apos;t exist</h2>
      <Link href={"/"}>Return Home</Link>
    </div>
  );
};

export default NotFound;
