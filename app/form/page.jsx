"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import stars from "@/utils/images/stars.webp";
import Image from "next/image";

export default function Page() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [conferenceName, setConferenceName] = useState("");
  const [conferenceLocation, setConferenceLocation] = useState("");
  const [conferenceDetail, setConferenceDetail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [inputErrors, setInputErrors] = useState({}); // Track input errors
  const [conferenceDate, setConferenceDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const router = useRouter();

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    if (e.target.value) {
      setInputErrors((prev) => ({ ...prev, firstname: false }));
    }
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
    if (e.target.value) {
      setInputErrors((prev) => ({ ...prev, lastname: false }));
    }
  };

  const handleConfName = (e) => {
    setConferenceName(e.target.value);
    if (e.target.value) {
      setInputErrors((prev) => ({ ...prev, conferenceName: false }));
    }
  };

  const handleConfLocation = (e) => {
    setConferenceLocation(e.target.value);
    if (e.target.value) {
      setInputErrors((prev) => ({ ...prev, conferenceLocation: false }));
    }
  };

  const handleConfDetail = (e) => {
    setConferenceDetail(e.target.value);
    if (e.target.value) {
      setInputErrors((prev) => ({ ...prev, conferenceDetail: false }));
    }
  };

  const handleDayInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2) {
      if (value > 31) {
        e.target.value = "";
      } else {
        setConferenceDate((prev) => ({ ...prev, day: value }));
        if (value.length === 2) {
          monthRef.current.focus();
        }
      }
    } else {
      e.target.value = value.slice(0, 2);
    }
    if (value) {
      setInputErrors((prev) => ({ ...prev, day: false }));
    }
  };

  const handleMonthInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2) {
      if (value > 12) {
        e.target.value = "";
      } else {
        setConferenceDate((prev) => ({ ...prev, month: value }));
        if (value.length === 2) {
          yearRef.current.focus();
        }
      }
    } else {
      e.target.value = value.slice(0, 2);
    }
    if (value) {
      setInputErrors((prev) => ({ ...prev, month: false }));
    }
  };

  const handleYearInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4) {
      if (value > 2025) {
        e.target.value = "";
      }
      setConferenceDate((prev) => ({ ...prev, year: value }));
    } else {
      e.target.value = value.slice(0, 4);
    }
    if (value) {
      setInputErrors((prev) => ({ ...prev, year: false }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const valid = validateEmail(value);
    setIsEmailValid(valid);
    if (valid) {
      setInputErrors((prev) => ({ ...prev, email: false }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {};
    if (!firstname) errors.firstname = true;
    if (!lastname) errors.lastname = true;
    if (!email || !isEmailValid) errors.email = true;
    if (!conferenceName) errors.conferenceName = true;
    if (!conferenceLocation) errors.conferenceLocation = true;
    if (!conferenceDetail) errors.conferenceDetail = true;
    if (!conferenceDate.day) errors.day = true;
    if (!conferenceDate.month) errors.month = true;
    if (!conferenceDate.year) errors.year = true;

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
      return; // Prevent API request if there are errors
    }

    const data = {
      firstname,
      lastname,
      email,
      conference_name: conferenceName,
      conference_location: conferenceLocation,
      conference_detail: conferenceDetail,
      conference_date: `${conferenceDate.day}/${conferenceDate.month}/${conferenceDate.year}`,
      status: "pending",
    };

    try {
      const response = await fetch(`http://13.60.207.223:8000/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push(
          `/success?place=${conferenceLocation}&date=${conferenceDate.day}/${conferenceDate.month}/${conferenceDate.year}`
        );
        // Optionally clear the form or show a success message
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-[#F5F5F5]">
      <div className="w-[90%] md:w-[900px] h-auto md:h-[600px] mt-20 md:mt-0 rounded-[15px] bg-[#1E323D] flex flex-col md:flex-row justify-center items-center">
        {/* Image container */}
        <div className="w-full h-[300px] md:h-full md:w-1/2 relative">
          <Image
            src={stars}
            alt="stars"
            fill={true}
            className="absolute object-cover rounded-t-[15px] md:rounded-r-none md:rounded-l-[15px]"
            priority
            
          />
          <p className="absolute text-white text-center top-[50%] w-full opacity-75">
            Expand Your Knowledge and Network Globally
          </p>
        </div>

        {/* Form container */}
        <div className="w-full md:w-1/2 h-full px-6 py-10 md:py-0">
          <h1 className="text-white text-xl text-center pt-10 ">
            Conference Attendance Request
          </h1>
          <p className="text-[#b9b9b9] text-center text-[12px] pt-1">
            Please fill out all the fields accurately.
          </p>
          <form className="w-full mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-10">
              <div className="w-full md:w-1/2">
                <label
                  className="text-[12px] text-[#b7b7b7]"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={handleFirstname}
                  autoComplete="given-name"
                  required
                  placeholder="John"
                  className={`bg-[#31566A] w-full text-white rounded-[7px] h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                    inputErrors.firstname
                      ? "border-red-700"
                      : "border-[#32566A]"
                  } focus:border-gray-300 focus:ring-0`}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  className="text-[12px] text-[#b7b7b7]"
                  htmlFor="lastname"
                >
                  Lastname
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={lastname}
                  onChange={handleLastname}
                  autoComplete="family-name"
                  required
                  id="lastname"
                  className={`bg-[#31566A] text-white rounded-[7px] w-full h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                    inputErrors.lastname ? "border-red-700" : "border-[#32566A]"
                  } focus:border-gray-300 focus:ring-0`}
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
                required
                id="email"
                onChange={handleEmailChange}
                value={email}
                placeholder="johndoe@gmail.com"
                className={`bg-[#31566A] text-white rounded-[7px] h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                  inputErrors.email || !isEmailValid
                    ? "border-red-700"
                    : "border-[#32566A]"
                } focus:border-gray-300 focus:ring-0`}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4">
              <div className="w-full md:w-1/2">
                <label
                  className="text-[12px] text-[#b7b7b7]"
                  htmlFor="conference-name"
                >
                  Conference Name
                </label>
                <input
                  type="text"
                  placeholder="Next.js CONF24"
                  value={conferenceName}
                  onChange={handleConfName}
                  required
                  id="conference-name"
                  className={`bg-[#31566A] text-white rounded-[7px] w-full h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                    inputErrors.conferenceName
                      ? "border-red-700"
                      : "border-[#32566A]"
                  } focus:border-gray-300 focus:ring-0`}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  className="text-[12px] text-[#b7b7b7]"
                  htmlFor="conference-location"
                >
                  Conference Location
                </label>
                <input
                  type="text"
                  placeholder="San Francisco"
                  value={conferenceLocation}
                  onChange={handleConfLocation}
                  id="conference-location"
                  required
                  className={`bg-[#31566A] text-white rounded-[7px] w-full h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                    inputErrors.conferenceLocation
                      ? "border-red-700"
                      : "border-[#32566A]"
                  } focus:border-gray-300 focus:ring-0`}
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
                value={conferenceDetail}
                onChange={handleConfDetail}
                required
                placeholder="Please type your conference detail..."
                className={`bg-[#31566A] text-white rounded-[7px] h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                  inputErrors.conferenceDetail
                    ? "border-red-700"
                    : "border-[#32566A]"
                } focus:border-gray-300 focus:ring-0`}
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
                  type="number"
                  id="conference-date"
                  inputMode="numeric"
                  placeholder="DD"
                  ref={dayRef}
                  onChange={handleDayInputChange}
                  required
                  className={`bg-[#31566A] w-full text-white rounded-[7px] h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                    inputErrors.day ? "border-red-700" : "border-[#32566A]"
                  } focus:border-gray-300 focus:ring-0`}
                />
                <input
                  type="number"
                  id="conference-date"
                  inputMode="numeric"
                  ref={monthRef}
                  onChange={handleMonthInputChange}
                  placeholder="MM"
                  required
                  className={`bg-[#31566A] w-full text-white rounded-[7px] h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                    inputErrors.month ? "border-red-700" : "border-[#32566A]"
                  } focus:border-gray-300 focus:ring-0`}
                />
                <input
                  type="number"
                  id="conference-date"
                  inputMode="numeric"
                  ref={yearRef}
                  onChange={handleYearInputChange}
                  placeholder="YYYY"
                  required
                  className={`bg-[#31566A] w-full text-white rounded-[7px] h-[35px] text-[12px] pl-2 focus:outline-none border-[1px] ${
                    inputErrors.year ? "border-red-700" : "border-[#32566A]"
                  } focus:border-gray-300 focus:ring-0`}
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full h-[40px] rounded-[7px] hover:bg-gray-200 bg-white text-[#31566A] mt-10"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
