"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import stars from "@/utils/images/loginscreen.webp";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/authContext";
import ClipLoader from "react-spinners/ClipLoader";

export default function Page() {
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const { login } = useContext(AuthContext);

  const router = useRouter();

  const handleEmailChange = (e) => {
    const value = e.target.value.toLowerCase();
    setEmail(value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(email)) {
      setIsEmailCorrect(false);
      setLoading(false);
      return;
    } else {
      setIsEmailCorrect(true);
    }

    if (password.length < 5) {
      setIsPasswordCorrect(false);
      setLoading(false);
      return;
    } else {
      setIsPasswordCorrect(true);
    }

    if (validateEmail(email) && password.length >= 5) {
      try {
        const API_URL = "/api"
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: email,
            password: password,
          }),
        });

        if (!response.ok) {
          setShowError(true);
          setLoading(false);
          return;
        } else {
          const data = await response.json();
          login(data.access_token); // Update the global state
          setShowError(false);
          setLoading(false);
          console.log("Navigating to /admin");
          router.push("/admin"); // Ensure the redirect happens
        }
      } catch (error) {
        console.error("Error during login:", error);
        setShowError(true);
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-start items-center bg-white w-[90%] h-fit md:w-[400px] lg:w-[500px] md:h-[600px] pb-10 rounded-[15px]">
        <div className="relative w-full h-[200px] md:h-[250px] flex jsutify-center items-center">
          <Image
            src={stars}
            alt="stars"
            sizes="auto"
            priority
            fill={true}
            className="absolute rounded-t-[15px]"
          />
        </div>
        <h1 className="text-3xl absolute pt-10 font-bold text-white">
          Sign In
        </h1>
        <div className="flex justify-start w-full items-center px-10 flex-col">
          <label htmlFor="email" className="text-[#898989] pt-12 w-full">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            onChange={handleEmailChange}
            autoComplete="email"
            required
            name="email"
            placeholder="johndoe@gmail.com"
            className={`border-b-2 bg-transparent w-full border-gray-400 focus:outline-none pt-2 focus:border-[#0E354C] ${
              !isEmailCorrect ? "border-red-500" : " border-gray-400"
            }`}
          />
          {!isEmailCorrect && (
            <p className="w-full pt-2 text-red-600 text-xs">
              Please type valid e-mail address.
            </p>
          )}
          <label htmlFor="password" className="text-[#898989] w-full pt-10">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            name="password"
            onChange={handlePasswordChange}
            placeholder="*********"
            className={`border-b-2 bg-transparent w-full border-gray-400 focus:outline-none pt-2 focus:border-[#0E354C] ${
              !isPasswordCorrect ? "border-red-500" : " border-gray-400"
            }`}
          />
          {!isPasswordCorrect && (
            <p className="w-full pt-2 text-red-600 text-xs">
              Password should be minimum 5 characters.
            </p>
          )}
          {showError && (
            <p className="w-full pt-2 text-red-600 text-xs">
              Your credentials are wrong. Please try again.
            </p>
          )}
          {loading ? (
            <button
              disabled
              className="w-full h-[45px] rounded-md bg-[rgba(198,1,103,0.84)] text-white mt-10 font-bold text-center"
            >
              <ClipLoader
                color="#fff"
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-full h-[45px] rounded-md bg-[#C60166] text-white mt-10 font-bold text-center"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
