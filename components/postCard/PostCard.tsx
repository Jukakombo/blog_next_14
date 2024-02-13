"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoMdClock } from "react-icons/io";
const PostCard = ({ post }: any) => {
  console.log(post);
  return (
    <div className="text-white ">
      <div className="">
        <div className="flex items-center border rounded-md">
          {post.img ? (
            <div className="relative w-[100%] h-[300px] md:h-[300px] ">
              <Image className="object-cover" src={post.img} fill alt="post" />
            </div>
          ) : (
            <div className="relative w-full h-[300px] md:h-[300px] ">
              <Image className="object-cover" src="/post.jpg" fill alt="post" />
            </div>
          )}
        </div>
        <div className="flex items-center mt-2">
          <IoMdClock size={20} className="text-white mr-2" />
          <span className="   ">{post.createdAt.toString().slice(4, 16)}</span>
        </div>

        <div className="">
          <h1 className="font-bold py-2">{post?.title}</h1>
          <p className="text-gray-400">{post?.body}</p>
          <Link className="underline" href={`/blog/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
