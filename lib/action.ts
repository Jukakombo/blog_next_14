"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./model";
import connectionDb from "./utils";

export const addPost = async (formData: any) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectionDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("added post to DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

// delete post by id
export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectionDb();
    await Post.findByIdAndDelete(id);
    console.log("deleted post from DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};
