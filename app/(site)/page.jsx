//! Add `use client` to prevent this page from being server side rendered
"use client";

//* Import React, useState, signIn function, useRouter, Link, toast, and FormControls
import React, { useState } from "react";

import { toast } from "react-hot-toast";

import signUp from "@/firebase/auth/signup";

import Link from "next/link";
import { useRouter } from "next/navigation";

import FormControls from "@/components/FormControls";

export default function Page() {
  //* Create state variables for email and password
  const [email, setEmail] = useState("");

  //* Create state variables for email and password
  const [password, setPassword] = useState("");

  //* Create a router variable
  const router = useRouter();

  //* Create a function to handle the form
  const handleForm = async (event) => {
    //* Prevent the default form action
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      toast.error("Sign up failed, please try again!");
      return console.log(error);
    }

    //* else successful
    console.log(result);
    toast.success("Sign up successful!");
    return router.push("/admin");
  };

  //* Return the form
  return (
    //* Wrapper Div
    <div className="wrapper">
      {/* Form Wrapper */}
      <div className="form-wrapper flex flex-col">
        {/* Title Div */}
        <div className="py-10">
          <h1 className="text-4xl lg:text-5xl text-center font-bold px-2">
            Sign Up to Firebase Registration Tutorial
          </h1>
        </div>
        {/* Form Controls: Email */}
        <FormControls
          label="Email"
          type="email"
          id="email"
          value={email}
          setValue={setEmail}
        />
        {/* Form Controls: Password */}
        <FormControls
          label="Password"
          type="password"
          id="password"
          value={password}
          setValue={setPassword}
        />
        {/* Buttons Wrapper */}
        <div className="flex flex-col items-center">
          <button className="btn" onClick={handleForm} type="submit">
            Register
          </button>
          {/* Login URL */}
          <Link className="btn-2" href="/signin">
            Login to Account
          </Link>
        </div>
      </div>
    </div>
  );
}
