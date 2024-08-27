import React from 'react'
import stars from '@/utils/images/stars.png'
import Image from 'next/image';

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-[#F5F5F5]">
      <div className="w-[900px] h-[600px] rounded-[15px] bg-[#1E323D] flex justify-center items-center">
        <div className=" w-full h-full relative">
          <Image src={stars} alt="stars" fill={true} className="absolute" priority />
          <p className="absolute text-white text-center top-[50%] w-full opacity-75">
            Expand Your Knowledge and Network Globally
          </p>
        </div>
        <div className="w-full h-full">
          <h1 className="text-white text-xl text-center pt-10">
            Conference Attendance Request
          </h1>
          <p className="text-[#b9b9b9] text-center text-[12px] pt-1">
            Please fill out all the fields accurately.
          </p>
          <form className="w-[80%] mx-auto">
            <div className="flex justify-center items-center gap-4 pt-10">
              <div>
                <label
                  className="text-[12px] text-[#b7b7b7]"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  autoComplete="given-name"
                  placeholder="John"
                  className="bg-[#31566A] w-full text-white rounded-[7px] h-[35px] text-[12px] pl-2"
                />
              </div>
              <div>
                <label
                  className="text-[12px] text-[#b7b7b7]"
                  htmlFor="lastname"
                >
                  Lastname
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  autoComplete="family-name"
                  id="lastname"
                  className="bg-[#31566A] text-white rounded-[7px] w-full h-[35px] text-[12px] pl-2"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <label className="text-[12px] text-[#b7b7b7]" htmlFor="email">
                E-mail
              </label>
              <input
                type="text"
                autoComplete="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="bg-[#31566A] text-white rounded-[7px] h-[35px] text-[12px] pl-2"
              />
            </div>
            <div className="flex justify-center items-center gap-4 pt-4">
              <div>
                <label
                  className="text-[12px] text-[#b7b7b7]"
                  htmlFor="conference-name"
                >
                  Conference Name
                </label>
                <input
                  type="text"
                  placeholder="Next.js CONF24"
                  id="conference-name"
                  className="bg-[#31566A] text-white rounded-[7px] w-full h-[35px] text-[12px] pl-2"
                />
              </div>
              <div>
                <label
                  className="text-[12px] text-[#b7b7b7]"
                  htmlFor="conference-location"
                >
                  Conference Location
                </label>
                <input
                  type="text"
                  placeholder="San"
                  id="conference-location"
                  className="bg-[#31566A] text-white rounded-[7px] w-full h-[35px] text-[12px] pl-2"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <label
                className="text-[12px] text-[#b7b7b7]"
                htmlFor="conference-detail"
              >
                Conference Detail
              </label>
              <input
                type="text"
                id="conference-detail"
                placeholder="Please type your conference detail..."
                className="bg-[#31566A] text-white rounded-[7px] h-[35px] text-[12px] pl-2"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label
                className="text-[12px] text-[#b7b7b7]"
                htmlFor="conference-date"
              >
                Conference Date
              </label>
              <div className="flex justify-center items-center gap-4">
                <input
                  type="text"
                  id="conference-date"
                  placeholder="DD"
                  className="bg-[#31566A] w-full text-white rounded-[7px] h-[35px] text-[12px] pl-2"
                />
                <input
                  type="text"
                  id="conference-date"
                  placeholder="MM"
                  className="bg-[#31566A] w-full text-white rounded-[7px] h-[35px] text-[12px] pl-2"
                />
                <input
                  type="text"
                  id="conference-date"
                  placeholder="YYYY"
                  className="bg-[#31566A] w-full text-white rounded-[7px] h-[35px] text-[12px] pl-2"
                />
              </div>
            </div> 
            <button className="w-full h-[40px] rounded-[7px] hover:bg-gray-200 bg-white text-[#31566A] mt-10">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
