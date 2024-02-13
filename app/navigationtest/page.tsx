"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  console.log(q);
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click
      </Link>{" "}
      <br />
      <button onClick={handleClick}>Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
