"use client";
import React, { useState, useEffect } from "react";
import { CgSandClock } from "react-icons/cg";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { BiCheckShield } from "react-icons/bi";
import { CgMathDivide } from "react-icons/cg";
import BeatLoader from "react-spinners/BeatLoader";
import CountUp from "react-countup";

export default function Page() {
  const [requests, setRequests] = useState([]);
  const [totalRequests, setTotalRequests] = useState(0);
  const [totalApproved, setTotalApproved] = useState(0);
  const [approvalRate, setApprovalRate] = useState(0);
  const [mostAttenders, setMostAttenders] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5; // Number of records to show per page

  const API_URL = "/api"; // Use the proxy endpoint

 useEffect(() => {
   setLoading(true);
   fetch(`${API_URL}/posts`)
     .then((response) => response.json())
     .then((data) => {
       const sortedData = data.sort((a, b) => {
         const dateA = new Date(a.created_at).getTime(); 
         const dateB = new Date(b.created_at).getTime(); 
         return dateB - dateA; // Descending order: latest created_at first
       });

       setRequests(sortedData);

       const total = sortedData.length;
       const approved = sortedData.filter(
         (req) => req.status === "Approved"
       ).length;
       const rejected = sortedData.filter(
         (req) => req.status === "Rejected"
       ).length;

       setTotalRequests(total);
       setTotalApproved(approved);
       const rate = (approved / (approved + rejected)).toFixed(1);
       setApprovalRate(rate);

       const attendanceCount = {};
       sortedData.forEach((request) => {
         const key = `${request.firstname} ${request.lastname}`;
         if (!attendanceCount[key]) {
           attendanceCount[key] = {
             firstname: request.firstname,
             lastname: request.lastname,
             count: 0,
           };
         }
         attendanceCount[key].count += 1;
       });

       const sortedAttenders = Object.values(attendanceCount)
         .sort((a, b) => b.count - a.count)
         .slice(0, 3); // Get the top 3

       setMostAttenders(sortedAttenders);
       setLoading(false);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
       setLoading(false);
     });
 }, []);


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

  const handleStatusChange = (id, newStatus, index) => {
    setRequests((prevRequests) =>
      prevRequests.map((r, i) =>
        i === index ? { ...r, status: newStatus } : r
      )
    );

    fetch(`http://16.171.30.91:8000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update status");
        }
        return response.json();
      })
      .then((updatedData) => {
        console.log("Status updated successfully:", updatedData);
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  const staticTotalRequests = 8;
  const staticApproved = 6;
  const staticApprovalRate = 1.3;

  const requestsDifference = totalRequests - staticTotalRequests;
  const approvedDifference = totalApproved - staticApproved;
  const approvalRateDifference = approvalRate - staticApprovalRate;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRequests = requests.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const upcomingEvents = requests.slice(0, 3);

  return (
    <div className="bg-[#0A0C2B] min-h-screen w-full border-t-[1px] border-gray-300 flex justify-center items-center gap-20">
      <div className="w-full lg:w-[900px] 2xl:w-[1100px] h-fit py-[50px] lg:py-[50px] mx-auto px-4 ">
        <h1 className="text-white pb-10 underline text-xl lg:text-2xl text-center lg:text-left">
          Admin Portal
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-20 items-center">
          {loading ? (
            <div className="w-full h-[150px] rounded-[20px] bg-custom-gradient gap-5 flex flex-col justify-center items-center">
              <p className="text-[#6B6B6B]">Total Requests</p>
              <div className="flex justify-center items-center gap-5">
                <div className="h-full flex justify-center items-center w-1/2">
                  <div className="bg-white rounded-[100px] p-3">
                    <CgSandClock className="text-3xl" />
                  </div>
                </div>
                <div className="flex justify-center h-full items-center gap-4 font-bold">
                  <p className="text-black font-bold text-xl flex justify-center items-center gap-4">
                    <BeatLoader
                      color="#0A0C2B"
                      loading={loading}
                      size={5}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-[150px] rounded-[20px] bg-custom-gradient gap-5 flex flex-col justify-center items-center">
              <p className="text-[#6B6B6B]">Total Requests</p>
              <div className="flex justify-center items-center gap-5">
                <div className="h-full flex justify-center items-center w-1/2">
                  <div className="bg-white rounded-[100px] p-3">
                    <CgSandClock className="text-3xl" />
                  </div>
                </div>
                <div className="flex justify-center h-full items-center gap-4 font-bold">
                  <p className="text-black font-bold text-xl flex justify-center items-center gap-4">
                    <CountUp end={totalRequests} duration={5} />
                  </p>
                  <p
                    className={`flex justify-center text-sm items-center gap-1 ${
                      requestsDifference <= 0
                        ? "text-[#DD1819]"
                        : "text-[#286F25]"
                    }`}
                  >
                    {requestsDifference <= 0 ? (
                      <BiSolidDownArrow className="text-[12px]" />
                    ) : (
                      <BiSolidUpArrow className="text-[12px]" />
                    )}
                    {requestsDifference}
                  </p>
                </div>
              </div>
            </div>
          )}
          {loading ? (
            <div className="w-full h-[150px] rounded-[20px] bg-custom-gradient gap-5 flex flex-col justify-center items-center">
              <p className="text-[#6B6B6B]">Total Accepted Requests</p>
              <div className="flex justify-center items-center gap-5">
                <div className="h-full flex justify-center items-center w-1/2">
                  <div className="bg-white rounded-[100px] p-3">
                    <BiCheckShield className="text-3xl" />
                  </div>
                </div>
                <div className="flex justify-center h-full items-center gap-4 font-bold">
                  <BeatLoader
                    color="#0A0C2B"
                    loading={loading}
                    size={5}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-[150px] rounded-[20px] bg-custom-gradient gap-5 flex flex-col justify-center items-center">
              <p className="text-[#6B6B6B]">Total Accepted Requests</p>
              <div className="flex justify-center items-center gap-5">
                <div className="h-full flex justify-center items-center w-1/2">
                  <div className="bg-white rounded-[100px] p-3">
                    <BiCheckShield className="text-3xl" />
                  </div>
                </div>
                <div className="flex justify-center h-full items-center gap-4 font-bold">
                  <p className="text-black font-bold text-xl flex justify-center items-center gap-4">
                    <CountUp end={totalApproved} duration={5} />
                  </p>
                  <p
                    className={`flex justify-center text-sm items-center gap-1 ${
                      approvedDifference >= 0
                        ? "text-[#286F25]"
                        : "text-[#DD1819]"
                    }`}
                  >
                    {approvedDifference >= 0 ? (
                      <BiSolidUpArrow className="text-[12px]" />
                    ) : (
                      <BiSolidDownArrow className="text-[12px]" />
                    )}
                    {approvedDifference}
                  </p>
                </div>
              </div>
            </div>
          )}
          {loading ? (
            <div className="w-full h-[150px] rounded-[20px] bg-custom-gradient gap-5 flex flex-col justify-center items-center">
              <p className="text-[#6B6B6B]">Approval Rate</p>
              <div className="flex justify-center items-center gap-5">
                <div className="h-full flex justify-center items-center w-1/2">
                  <div className="bg-white rounded-[100px] p-3">
                    <CgMathDivide className="text-3xl" />
                  </div>
                </div>
                <div className="flex justify-center h-full items-center gap-4 font-bold">
                  <BeatLoader
                    color="#0A0C2B"
                    loading={loading}
                    size={5}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              </div>
            </div>
          ) : (
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
                    <CountUp
                      end={parseFloat(approvalRate)}
                      decimals={1}
                      duration={5}
                    />
                  </p>
                  <p
                    className={`flex justify-center text-sm items-center gap-1 ${
                      approvalRateDifference >= 0
                        ? "text-[#286F25]"
                        : "text-[#DD1819]"
                    }`}
                  >
                    {approvalRateDifference >= 0 ? (
                      <BiSolidUpArrow className="text-[12px]" />
                    ) : (
                      <BiSolidDownArrow className="text-[12px]" />
                    )}
                    {approvalRateDifference.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Second Full-Width Box */}
        <div className="w-full h-auto mt-10 lg:mt-20 rounded-[20px] min-h-[600px] bg-custom-gradient flex flex-col justify-center items-center gap-5 p-8">
          {/* Table Heading */}
          {loading ? (
            // Show spinner or loading message when data is still loading
            <div className="flex justify-center items-center">
              <div>
                <BeatLoader
                  color="#0A0C2B"
                  loading={loading}
                  size={5}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </div>
          ) : (
            // Show content when loading is false
            <div className="w-full">
              <div className="hidden md:flex w-full justify-between items-center border-b-[1px] border-gray-300 pb-4 ">
                <p className="w-[15%] text-gray-500 font-semibold">Full Name</p>
                <p className="w-[10%] text-gray-500 font-semibold">
                  Department
                </p>
                <p className=" text-gray-500 font-semibold">
                  Conference Name
                </p>
                <p className="w-[30%] text-gray-500 font-semibold">
                  Conference Details
                </p>
                <p className="w-[10%] text-gray-500 font-semibold">Date</p>
                <p className="w-[10%] text-gray-500 font-semibold">Status</p>
              </div>

              {/* Table Rows */}
              {currentRequests.map((request, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b-[1px] border-gray-300 px-1"
                >
                  <div className="w-full md:w-[15%] mb-2 md:mb-0">
                    <p className="text-gray-500 md:hidden">Full Name</p>
                    <p className="text-black  font-semibold">
                      {request.firstname} {request.lastname}
                    </p>
                  </div>
                  <div className="w-full md:w-[10%] mb-2 md:mb-0">
                    <p className="text-gray-500 md:hidden">Department</p>
                    <p className="text-black">Software</p>
                  </div>
                  <div className="w-full md:w-[15%] mb-2 md:mb-0">
                    <p className="text-black">{request.conference_name}</p>
                  </div>
                  <div className="w-full md:w-[30%] mb-2 md:mb-0">
                    <p className="text-gray-500 md:hidden">
                      Conference Details
                    </p>
                    <p className="text-black">
                      {request.conference_detail} /{" "}
                      {request.conference_location}
                    </p>
                  </div>
                  <div className="w-full md:w-[10%] mb-2 md:mb-0">
                    <p className="text-gray-500 md:hidden">Date</p>
                    <p className="text-black">{request.conference_date}</p>
                  </div>
                  <div className="w-full md:w-[10%] flex items-center gap-2">
                    <p className="text-gray-500 md:hidden">Status</p>
                    <select
                      className={`px-3 py-1 rounded-full text-sm cursor-pointer ${getStatusClass(
                        request.status
                      )}`}
                      value={request.status}
                      onChange={(e) =>
                        handleStatusChange(request.id, e.target.value, index)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              ))}

              {/* Pagination Controls */}
              <div className="flex justify-center mt-4">
                {[...Array(Math.ceil(requests.length / recordsPerPage))].map(
                  (_, pageIndex) => (
                    <button
                      key={pageIndex}
                      onClick={() => paginate(pageIndex + 1)}
                      className={`mx-1 px-3 py-1 rounded ${
                        currentPage === pageIndex + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300"
                      }`}
                    >
                      {pageIndex + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Last Row (2 boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-20 mt-10 lg:mt-20 items-center">
          {/* First box spans 2 columns on medium and larger screens */}
          <div className="w-full h-auto rounded-[20px] bg-custom-gradient md:col-span-2 p-6">
            {/* Table Header */}
            <h2 className="text-2xl pl-[16px] font-bold text-black mb-6">
              Upcoming Events
            </h2>

            {loading ? (
              <div className="w-full overflow-x-auto flex justify-center items-center">
                <BeatLoader
                  color="#0A0C2B"
                  loading={loading}
                  size={5}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <table className="w-full text-center">
                  {/* Table Heading */}
                  <thead>
                    <tr className="text-gray-500 text-sm border-b-[1px] border-gray-300">
                      <th className="py-3 px-4 w-1/4">Conference Name</th>
                      <th className="py-3 px-4 w-1/4">Location</th>
                      <th className="py-3 px-4 w-1/4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingEvents.map((request, index) => (
                      <tr
                        key={index}
                        className="text-black border-b-[1px] border-gray-300"
                      >
                        <td className="py-3 px-4">{request.conference_name}</td>
                        <td className="py-3 px-4">
                          {request.conference_location}
                        </td>
                        <td className="py-3 px-4">{request.conference_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Second box takes the remaining 1 column */}
          <div className="w-full h-auto rounded-[20px] bg-custom-gradient p-1 2xl:p-6">
            {/* Header */}
            <h2 className="text-2xl pl-[16px] font-bold text-black mb-6">
              Most Attenders
            </h2>

            {loading ? (
              <div className="w-full overflow-x-auto flex justify-center items-center">
                <BeatLoader
                  color="#0A0C2B"
                  loading={loading}
                  size={5}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left">
                  {/* Table Heading */}
                  <thead>
                    <tr className="text-gray-500 text-sm border-b-[1px] border-gray-300">
                      <th className="py-3 px-4 w-2/3">Full Name</th>
                      <th className="py-3 px-4 w-1/3">Times Attended</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mostAttenders.map((attender, index) => (
                      <tr
                        key={index}
                        className="text-black border-b-[1px] border-gray-300"
                      >
                        <td className="py-3 px-4">
                          {attender.firstname} {attender.lastname}
                        </td>
                        <td className="py-3 px-4">{attender.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
