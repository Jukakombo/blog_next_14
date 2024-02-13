import { addPost, deletePost } from "@/lib/action";
import React from "react";

const ServerActionTest = () => {
  return (
    <div>
      <form action={addPost}>
        <input
          type="text"
          placeholder="type title here..."
          name="title"
          className="text-gray-500"
        />
        <input
          type="text"
          placeholder="type desc here..."
          name="desc"
          className="text-gray-500"
        />
        <input
          type="text"
          placeholder="type userId here..."
          name="userId"
          className="text-gray-500"
        />
        <input
          type="text"
          placeholder="type slug here..."
          name="slug"
          className="text-gray-500"
        />
        <button>Create Post</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="delete post by postId " name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
