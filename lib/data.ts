import { Post, User } from "./model";
import connectionDb from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// getPosts
export const getPosts = async () => {
  try {
    connectionDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Could not get posts");
  }
};

// get single post
export const getPost = async (slug: any) => {
  try {
    connectionDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Could not find post");
  }
};

// get user by id number
export const getUser = async (id: any) => {
  noStore();
  try {
    connectionDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Could not find user");
  }
};

// get all users
export const getUsers = async () => {
  try {
    connectionDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Could not find users");
  }
};
