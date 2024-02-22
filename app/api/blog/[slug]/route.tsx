import { Post } from "@/lib/model";
import connectionDb from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }: any) => {
  const { slug } = params;
  try {
    connectionDb();
    const post = await Post.find({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Error, finding post!");
  }
};
export const DELETE = async (request, { params }: any) => {
  const { slug } = params;
  try {
    connectionDb();
    const post = await Post.deleteOne({ slug });
    return NextResponse.json("poste deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Error, failed to delete the post post!");
  }
};
