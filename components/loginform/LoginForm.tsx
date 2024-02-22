 "use client"
import { handleGithubLogin, login } from "@/lib/action";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
const LoginForm =   () => {
    const [state, formAction] = useFormState(login, undefined);
  return (
    <div className="bg-[#2d2b42] md:w-6/12 m-auto p-8">
      <form
        className="w-full bg-blue-600 text-center rounded-sm p-2 mb-2"
        action={handleGithubLogin}
      >
        <button>Login with Github</button>
      </form>
      <h1 className="text-center">OR</h1>
      <form action={formAction} className="">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full bg-[#0d0c22] text-gray-500 p-2 my-2 rounded-sm"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full bg-[#0d0c22] text-gray-500 p-2 my-2 rounded-sm"
        />
        <button className="mt-2 w-full bg-blue-600 text-center rounded-sm p-2 ">
          Login
        </button>
        <p className="text-red-600">{state?.error}</p>
        {"Don't have an account? " }&nbsp; <Link href="/register"><b>Register</b></Link>
      </form>
    </div>
  );
};
export default LoginForm;
