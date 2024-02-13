"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative h-[250px] md:h-[500px] w-full">
        <Image src="/contact.png" fill alt="contact" />
      </div>
      <div className="">
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name and Surename"
            className="bg-gray-700 my-4 p-2 rounded-sm outline-none"
          />
          <input
            type="email"
            name="name"
            placeholder="Email"
            className="bg-gray-700 my-4 p-2 rounded-sm outline-none"
          />
          <input
            type="text"
            name="name"
            placeholder="Phone"
            className="bg-gray-700 my-4 p-2 rounded-sm outline-none"
          />
          <textarea
            name=""
            cols={30}
            rows={10}
            placeholder="Type message here..."
            className="bg-gray-700 my-4 p-2 rounded-sm outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-sm p-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
