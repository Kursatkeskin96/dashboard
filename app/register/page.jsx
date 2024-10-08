"use client";
import React, { useState } from "react";
import Image from "next/image";
import stars from "@/utils/images/loginscreen.webp";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";

export default function Page() {
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [arePasswordsMatch, setArePasswordsMatch] = useState(true);
  const [loading, setLoading] = useState(false);



  const handleEmailChange = (e) => {
    const value = e.target.value.toLowerCase();
    setEmail(value);
  };
  
  const router = useRouter();


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(email)) {
      setIsEmailCorrect(false);
      setLoading(false);
    } else {
      setIsEmailCorrect(true);
    }

    if (password !== confirmPassword) {
      setArePasswordsMatch(false);
      setLoading(false);
    } else {
      setArePasswordsMatch(true);
    }

    if (password.length < 5) {
      setIsPasswordCorrect(false);
      setLoading(false);
    } else {
      setIsPasswordCorrect(true);
    }

    if (validateEmail(email) && password === confirmPassword && password.length >= 5) {
      console.log("Form Submitted:", { email, password });

      try {
        const API_URL = '/api'
        const response = await fetch(`${API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("User created successfully:", data);
          router.push('/login')
          // Optionally redirect or show a success message
        } else {
          console.error("Error creating user:", data);
          setShowError(true);
        }
      } catch (error) {
        console.error("Error:", error);
        setShowError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-start items-center bg-white w-[90%] md:w-[400px] lg:w-[500px] h-fit  pb-10 rounded-[15px]">
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
          Sign Up
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
              Please type a valid e-mail address.
            </p>
          )}

          <label htmlFor="password" className="text-[#898989] w-full pt-10">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
            required
            name="password"
            placeholder="*********"
            className={`border-b-2 bg-transparent w-full border-gray-400 focus:outline-none pt-2 focus:border-[#0E354C]`}
          />

          <label htmlFor="password2" className="text-[#898989] w-full pt-10">
            Confirm Password
          </label>
          <input
            type="password"
            id="password2"
            onChange={handleConfirmPasswordChange}
            required
            name="password2"
            placeholder="*********"
            className={`border-b-2 bg-transparent w-full border-gray-400 focus:outline-none pt-2 focus:border-[#0E354C] ${
              !arePasswordsMatch ? "border-red-500" : "border-gray-400"
            }`}
          />
          {!isPasswordCorrect && (
            <p className="w-full pt-2 text-red-600 text-xs">
              Password should be minimum 5 characters.
            </p>
          )}
          {!arePasswordsMatch && (
            <p className="w-full pt-2 text-red-600 text-xs">
              Passwords do not match.
            </p>
          )}

          {showError && (
            <p className="w-full pt-2 text-red-600 text-xs">
              An error occurred. Please try again.
            </p>
          )}

          <button
            className="w-full h-[45px] rounded-md bg-[#C60166] text-white mt-10 font-bold text-center"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <ClipLoader size={24} color="#fff" /> : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
