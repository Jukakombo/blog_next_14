import { Metadata } from "next";
import Image from "next/image";
import React from "react";
export const metadata: Metadata = {
  title: "About ",
  description:
    "We create digital ideas that are bigger, bolder, braver and better.",
};
const page = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <h2 className="text-[#3673fd] text-xl font-bold my-4">About Agency</h2>
        <h1 className="text-[30px] md:text-[50px] md:tracking-wider font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          We specialize in crafting digital concepts that are not only expansive
          but also daring, innovative, and superior. At the core of our
          philosophy lies a firm belief in the power of adaptable and precise
          ideas. Our expertise spans across the globe, where we stand out as
          leaders in providing top-tier consulting and finance solutions. With a
          diverse portfolio, we excel in web and software development, offering
          a wide spectrum of services tailored to meet your needs.
        </p>
        <div className="mt-8 flex items-center justify-between">
          <div className="">
            <h1 className="text-[#3673fd] font-bold text-xl">10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className="">
            <h1 className="text-[#3673fd] font-bold text-xl">234 K+</h1>
            <p>People Reached</p>
          </div>
          <div className="">
            <h1 className="text-[#3673fd] font-bold text-xl">5 K+</h1>
            <p>Service and plugins</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[500px] ">
        <Image src="/about.png" alt="about" fill />
      </div>
    </div>
  );
};

export default page;
