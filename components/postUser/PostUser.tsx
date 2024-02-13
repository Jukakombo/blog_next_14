import { getUser } from "@/lib/data";
import Image from "next/image";
import React from "react";

// const getData = async (userId: any) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!res.ok) {
//     throw new Error("Error fetching!");
//   } else {
//     return res.json();
//   }
// };

const PostUser = async ({ id }: any) => {
  const user = await getUser(id);

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-[50px] h-[50px]">
        <Image
          className="rounded-[100%]"
          src={user.img ? user.img : "/noavatar.png"}
          alt="author"
          fill
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-gray-500">Author</h1>
        <h2>{user.username}</h2>
      </div>
    </div>
  );
};

export default PostUser;
