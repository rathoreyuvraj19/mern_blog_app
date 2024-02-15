import { Label, TextInput, Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex flex-col gap-5 md:flex-row p-3 max-w-3xl mx-auto">
        <div className="flex-1">
          <Link to={"/"} className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Yuvraj's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username"></Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
              ></TextInput>
            </div>
            <div>
              <Label value="Your Email"></Label>
              <TextInput
                type="text"
                placeholder="xyz@company.com"
                id="email"
              ></TextInput>
            </div>
            <div>
              <Label value="Your Password"></Label>
              <TextInput
                type="text"
                placeholder="Password"
                id="password"
              ></TextInput>
            </div>
            <Button gradientDuoTone={"purpleToPink"} type={"submit"}>
              Sign Up
            </Button>
          </form>
          <div>
            <Link
              to={"/signin"}
              className="flex justify-center text-blue-400 hover:text-blue-700"
            >
              Already have an account? Sign In ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
