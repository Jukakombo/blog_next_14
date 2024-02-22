"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./model";
import connectionDb from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

// register user

export const register = async (previousState:any,formData: any) => {
 
  const { username, email, password, repeatpassword, img } =
    Object.fromEntries(formData);
  if (password !== repeatpassword) {
    return {error:"password do not match "}; 
  }

  try {
    connectionDb();

    const user = await User.findOne({ username });

    if (user) { 
    return {error:"Username already exists!"}; 

    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return {success:true}

  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// login user 
export const login = async (previousState:any,formData: any) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error:any) {
    // console.log(error)
    if(error.message.includes("CredentialsSignin")){
      return {error:"Invalide username or password!"}
    }
   
    // return { error: "Something went wrong!" };
    throw error;
  }
};
