'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link';

export default function Page() {

const [conferenceLocation, setConferenceLocation] = useState('');
const [conferenceDate, setConferenceDate] = useState('');

     useEffect(() => {
       const queryParams = new URLSearchParams(window.location.search);
       const place = queryParams.get("place");
       const date = queryParams.get("date");
       if (place) {
         setConferenceLocation(place)
       }
       if (date){
        setConferenceDate(date)
       }
     }, []);

  return (
    <div className="w-full flex justify-center items-start pt-[100px] min-h-screen bg-[#F5F5F5]">
      <div className="bg-[#1E323D] w-[90%] text-center md:w-[600px] h-auto md:h-fit rounded-[15px] shadow-lg flex flex-col justify-start py-10 md:px-20 px-4 items-center">
        <h1 className="text-2xl text-white font-bold">
          We have got your request! 🎉
        </h1>
        <p className="text-gray-300 pt-3 text-center text-sm">
          Your request now on process. Once decision made, you will recive an
          email about it.{" "}
        </p>
        <div className="pt-5 w-full">
          <hr class=" h-[1px]  mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>
          <div className="flex justify-between items-center flex-wrap mx-auto">
            <div className="flex flex-col justify-start items-center ">
              <p className="text-lg font-bold text-white">Conference Location</p>
              <p className="text-gray-300">{conferenceLocation}</p>
            </div>
            <div className="flex flex-col justify-start items-center">
              <p className="text-lg font-bold text-white">Conference Date</p>
              <p className="text-gray-300">{conferenceDate}</p>
            </div>
          </div>
          <hr class=" h-[1px]  mx-auto mt-4 mb-1 bg-gray-300 border-0 rounded md:my-10"></hr>
        </div>
        <p className="text-gray-300 text-center text-[12px]">
          If you have any questions or feedback contact with contact@gmail.com
        </p>
        <Link className="w-full" href="/">
          <button className="w-[90%]  mt-5 mx-auto h-[40px] rounded-[7px] hover:bg-gray-200 bg-white text-[#31566A]">
            Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
