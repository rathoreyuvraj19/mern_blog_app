import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { loadingState, currentUserState, errorState } from "../atoms/atoms.js";

const backendUrl = "http://localhost:3000/api/v1/signin";

export default function Signin() {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [errorMessage, setErrorMessage] = useRecoilState(errorState);
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prevVal) => {
      return { ...prevVal, [e.target.id]: e.target.value.trim() };
    });
    // console.log(formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const body = formData;
    setLoading(true);
    try {
      const response = await axios.post(backendUrl, formData);
      setErrorMessage(null);
      const token = response.data.token;
      localStorage.setItem("token", `Bearer ${token}`);
      console.log(token);
      setCurrentUser("Singh");
      navigate("/dashboard");
    } catch (error) {
      // console.log(error.response);
      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
      setLoading(false);
    } finally {
      setLoading(false); // Set loading back to false regardless of success or error
    }
  }

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email"></Label>
              <TextInput
                type="email"
                placeholder="xyz@company.com"
                id="email"
                required
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label value="Your Password"></Label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                required
                onChange={handleChange}
              ></TextInput>
            </div>
            <Button
              gradientDuoTone={"purpleToPink"}
              type={"submit"}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner className="mr-2" size={"sm"}></Spinner>
                  <span>Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div>
            <Link
              to={"/signup"}
              className="flex justify-center mt-4 text-blue-400 hover:text-blue-700"
            >
              Dont Have an Account? Sign Up ?
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
