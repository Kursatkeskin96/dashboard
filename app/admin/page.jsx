'use client'
import React, {useState} from "react";
import { CgSandClock } from "react-icons/cg";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { BiCheckShield } from "react-icons/bi";
import { CgMathDivide } from "react-icons/cg";


export default function Page() {
  const [status1, setStatus1] = useState("Pending");
  const [status2, setStatus2] = useState("Approved");
  const [status3, setStatus3] = useState("Rejected");

  // Function to dynamically change the background color based on the status
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-gray-500 text-white";
      case "Approved":
        return "bg-green-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };


  return (
    <div className="bg-[#0A0C2B] min-h-screen w-full border-t-[1px] border-gray-300 flex justify-center items-center gap-20">
      <div className="w-full  lg:w-[900px] 2xl:w-[1100px] h-fit py-[50px] lg:py-[50px] mx-auto px-4 ">
        <h1 className="text-white pb-10 underline text-xl lg:text-2xl text-center lg:text-left">
          Admin Portal
        </h1>

        {/* First Row (3 boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-20 items-center">
          <div className="w-full h-[150px] rounded-[20px] bg-custom-gradient gap-5 flex flex-col justify-center items-center">
            <p className="text-[#6B6B6B]">Total Pending Request</p>

            <div className="flex justify-center items-center gap-5">
              <div className="h-full flex justify-center items-center w-1/2">
                <div className="bg-white rounded-[100px] p-3">
                  <CgSandClock className="text-3xl" />
                </div>
              </div>
              <div className="flex justify-center h-full items-center gap-4 font-bold">
                <p className="text-black font-bold text-xl flex justify-center items-center gap-4">
                  14
                </p>
                <p className="flex text-[#DD1819] justify-center text-sm items-center gap-1">
                  <BiSolidDownArrow className="text-[12px]" /> -6
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[150px] rounded-[20px] bg-custom-gradient gap-5 flex flex-col justify-center items-center">
            <p className="text-[#6B6B6B]">Total Accepted Request</p>

            <div className="flex justify-center items-center gap-5">
              <div className="h-full flex justify-center items-center w-1/2">
                <div className="bg-white rounded-[100px] p-3">
                  <BiCheckShield className="text-3xl" />
                </div>
              </div>
              <div className="flex justify-center h-full items-center gap-4 font-bold">
                <p className="text-black font-bold text-xl flex justify-center items-center gap-4">
                  18
                </p>
                <p className="flex text-[#286F25] justify-center text-sm items-center gap-1">
                  <BiSolidUpArrow className="text-[12px]" /> +10
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[150px] rounded-[20px] bg-custom-gradient gap-5 flex flex-col justify-center items-center">
            <p className="text-[#6B6B6B]">Approval Rate</p>

            <div className="flex justify-center items-center gap-5">
              <div className="h-full flex justify-center items-center w-1/2">
                <div className="bg-white rounded-[100px] p-3">
                  <CgMathDivide className="text-3xl" />
                </div>
              </div>
              <div className="flex justify-center h-full items-center gap-4 font-bold">
                <p className="text-black font-bold text-xl flex justify-center items-center gap-4">
                  1.4
                </p>
                <p className="flex text-[#286F25] justify-center text-sm items-center gap-1">
                  <BiSolidUpArrow className="text-[12px]" /> +0.4
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Full-Width Box */}
        <div className="w-full h-auto mt-10 lg:mt-20 rounded-[20px] bg-custom-gradient flex flex-col justify-center items-center gap-5 p-8">
          {/* Table Heading */}
          <div className="hidden md:flex w-full justify-between items-center border-b-[1px] border-gray-300 pb-4">
            <p className="w-[15%] text-gray-500 font-semibold">Full Name</p>
            <p className="w-[10%] text-gray-500 font-semibold">Department</p>
            <p className="w-[15%] text-gray-500 font-semibold">
              Conference Name
            </p>
            <p className="w-[30%] text-gray-500 font-semibold">
              Conference Details
            </p>
            <p className="w-[10%] text-gray-500 font-semibold">Date</p>
            <p className="w-[10%] text-gray-500 font-semibold">Status</p>
          </div>

          {/* Table Rows */}
          {/* Row 1 */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b-[1px] border-gray-300 px-1">
            <div className="w-full md:w-[15%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Full Name</p>
              <p className="text-black font-semibold">Kursat Keskin</p>
            </div>
            <div className="w-full md:w-[10%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Department</p>
              <p className="text-black">Software</p>
            </div>
            <div className="w-full md:w-[15%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Conference Name</p>
              <p className="text-black">Next JS 14 Introduction</p>
            </div>
            <div className="w-full md:w-[30%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Conference Details</p>
              <p className="text-black">
                Next JS 14 Introduction with some details. / San Francisco
              </p>
            </div>
            <div className="w-full md:w-[10%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Date</p>
              <p className="text-black">07-12-2024</p>
            </div>
            <div className="w-full md:w-[10%] flex items-center gap-2">
              <p className="text-gray-500 md:hidden">Status</p>
              <select
                className={`px-3 py-1 rounded-full text-sm cursor-pointer ${getStatusClass(
                  status1
                )}`}
                value={status1}
                onChange={(e) => setStatus1(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b-[1px] border-gray-300 p">
            <div className="w-full md:w-[15%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Full Name</p>
              <p className="text-black font-semibold">Dilan Keskin</p>
            </div>
            <div className="w-full md:w-[10%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Department</p>
              <p className="text-black">Finance</p>
            </div>
            <div className="w-full md:w-[15%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Conference Name</p>
              <p className="text-black">Financial Changes in the world</p>
            </div>
            <div className="w-full md:w-[30%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Conference Details</p>
              <p className="text-black">
                Financial Changes in the world / London
              </p>
            </div>
            <div className="w-full md:w-[10%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Date</p>
              <p className="text-black">21-04-2024</p>
            </div>
            <div className="w-full md:w-[10%] flex items-center gap-2">
              <p className="text-gray-500 md:hidden">Status</p>
              <select
                className={`px-3 py-1 rounded-full text-sm cursor-pointer ${getStatusClass(
                  status2
                )}`}
                value={status2}
                onChange={(e) => setStatus2(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b-[1px] border-gray-300">
            <div className="w-full md:w-[15%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Full Name</p>
              <p className="text-black font-semibold">Dilan Keskin</p>
            </div>
            <div className="w-full md:w-[10%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Department</p>
              <p className="text-black">Finance</p>
            </div>
            <div className="w-full md:w-[15%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Conference Name</p>
              <p className="text-black">Financial Changes in the world</p>
            </div>
            <div className="w-full md:w-[30%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Conference Details</p>
              <p className="text-black">
                Financial Changes in the world / London
              </p>
            </div>
            <div className="w-full md:w-[10%] mb-2 md:mb-0">
              <p className="text-gray-500 md:hidden">Date</p>
              <p className="text-black">21-04-2024</p>
            </div>
            <div className="w-full md:w-[10%] flex items-center gap-2">
              <p className="text-gray-500 md:hidden">Status</p>
              <select
                className={`px-3 py-1 rounded-full text-sm cursor-pointer ${getStatusClass(
                  status3
                )}`}
                value={status3}
                onChange={(e) => setStatus3(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>
        {/* Last Row (2 boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-20 mt-10 lg:mt-20 items-center">
          {/* First box spans 2 columns on medium and larger screens */}
          <div className="w-full h-auto rounded-[20px] bg-custom-gradient md:col-span-2 p-6">
            {/* Table Header */}
            <h2 className="text-2xl pl-[16px] font-bold text-black mb-6">
              Upcoming Events
            </h2>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-center">
                {/* Table Heading */}
                <thead>
                  <tr className="text-gray-500 text-sm border-b-[1px] border-gray-300">
                    <th className="py-3 px-4 w-1/4">Conference Name</th>
                    <th className="py-3 px-4 w-1/4">Location</th>
                    <th className="py-3 px-4 w-1/4">Date</th>
                    <th className="py-3 px-4 w-1/4">Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table Rows */}
                  {Array(3)
                    .fill()
                    .map((_, i) => (
                      <tr
                        key={i}
                        className="text-black border-b-[1px] border-gray-300"
                      >
                        <td className="py-3 px-4">Next JS 14 Introduction</td>
                        <td className="py-3 px-4">San Francisco</td>
                        <td className="py-3 px-4">07-12-2024</td>
                        <td className="py-3 px-4">3</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Second box takes the remaining 1 column */}
          <div className="w-full h-auto rounded-[20px] bg-custom-gradient p-6">
            {/* Header */}
            <h2 className="text-2xl pl-[16px] font-bold text-black mb-6">
              Most Attenders
            </h2>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left">
                {/* Table Heading */}
                <thead>
                  <tr className="text-gray-500 text-sm border-b-[1px] border-gray-300">
                    <th className="py-3 px-4 w-1/2">Full Name</th>
                    <th className="py-3 px-4 w-1/2">Department</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table Rows */}
                  {Array(3)
                    .fill()
                    .map((_, i) => (
                      <tr
                        key={i}
                        className="text-black border-b-[1px] border-gray-300"
                      >
                        <td className="py-3 px-4">Kursat Keskin</td>
                        <td className="py-3 px-4">Software</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
