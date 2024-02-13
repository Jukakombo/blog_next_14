import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog ",
  description: "Stay updated with our latest blog.",
};

const BlogPost = async ({ params, searchParams }: any) => {
  const posts = await getPosts();
  // console.log(posts);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {posts.map((post: any) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default BlogPost;
