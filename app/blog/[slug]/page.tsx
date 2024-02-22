import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import moment from "moment";
import React, { Suspense } from "react";
// import { Metadata } from "next";

export const generateMetadata = async ({ params }: any) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const getData = async (slug: any) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error fetching!");
  } else {
    return res.json();
  }
};
const SinglePage = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      {post.img ? (
        <div className="relative w-full h-[250px] md:h-[600px]">
          <Image className="rounded-md" src={post.img} alt="single_post" fill />
        </div>
      ) : (
        <div className="relative w-full h-[250px] md:h-[600px]">
          <Image
            className="rounded-md"
            src="/post.jpg"
            alt="single_post"
            fill
          />
        </div>
      )}
      <div className="text">
        <h1 className="font-bold my-2">{post.title}</h1>
        <div className="flex items-center gap-4">
          <div className="">
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser id={post.userId} />
            </Suspense>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Published</span>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
        </div>
        <p className="text-gray-400 my-4">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePage;
