//! Add `use client` to prevent this page from being server side rendered
"use client";

//* Import React, useState, signIn function, useRouter, Link, toast, and FormControls
import React, { useState } from "react";

import signIn from "@/firebase/auth/signin";

import { toast } from "react-hot-toast";

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

    const { result, error } = await signIn(email, password);

    if (error) {
      toast.error("Sign In failed!");
      return console.log(error);
    }

    //* else successful
    toast.success("Sign In successful!");
    console.log(result);
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
            Sign In to Firebase Registration Tutorial
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
        <div className="flex flex-col items-center">
          {/* Buttons Wrapper */}
          <div className="flex flex-col items-center">
            <button className="btn" onClick={handleForm} type="submit">
              Login
            </button>
            {/* Sign-up URL */}
            <Link className="btn-3" href="/">
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
