import { Post } from "@/lib/model";
import connectionDb from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectionDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Error, ");
  }
};
