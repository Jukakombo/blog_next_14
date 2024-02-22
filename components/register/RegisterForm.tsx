"use client"
import { register } from '@/lib/action'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect }  from 'react'
import { useFormState } from 'react-dom'

const  RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
 
  useEffect(()=>{
   state?.success && router.push("/login");
  },[state?.success, router]);

  return (
    <div>
       <div className="bg-[#2d2b42] md:w-6/12 m-auto p-8">
      <form action={formAction}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full bg-[#0d0c22] text-gray-500 p-2 my-2 rounded-sm"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full bg-[#0d0c22] text-gray-500 p-2 my-2 rounded-sm"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full bg-[#0d0c22] text-gray-500 p-2 my-2 rounded-sm"
        />
        <input
          name="repeatpassword"
          type="password"
          placeholder="Repeat password"
          className="w-full bg-[#0d0c22] text-gray-500 p-2 my-2 rounded-sm"
        />
        <button className="bg-blue-600 p-2 mt-3 rounded-sm text-white text-center w-full">
          Register
        </button>
   <div className="flex items-center"> <p className="text-red-600">{state?.error}</p> &nbsp; <Link href="/login">Have any account? <b>Login</b></Link></div>
      </form>
    </div>
    </div>
  )
}

export default RegisterForm
