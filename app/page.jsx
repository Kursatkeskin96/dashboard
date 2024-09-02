'use client'
import Image from "next/image";
import React from "react";
import spacecard from "@/utils/images/space-card.png";
import Slider from "@/components/Slider";
import ProjectDetails from "@/components/ProjectDetails";
import Auth from "@/components/Auth";
import Cards from "@/components/Cards";
import FormView from "@/components/FormView";
import Admin from "@/components/Admin";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="w-[90%] md:w-[80%] h-min-screen flex justify-center items-start flex-col gap-52 mx-auto tracking-wide">
      <motion.div
        initial={{ opacity: 0, z: 100 }}
        animate={{ opacity: 1, z: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex justify-center gap-20 md:gap-0 lg:justify-between items-center w-full pt-32 flex-wrap ">
          <div className="lg:max-w-[40%] w-full flex justify-center lg:items-start items-center flex-col">
            <h1 className="text-3xl text-white font-bold fle text-center md:text-left">
              Welcome To My{" "}
              <span className="border-b-[6px] border-[#4F55B9]">
                Full-Stack
              </span>{" "}
              Project
            </h1>
            <p className="text-[#d7d7d7] py-5">
              On this page, you&apos;ll find detailed information about the
              project, including the technologies and tools used, the objectives
              behind its development, and a brief overview of its functionality
            </p>
            <Link href="13.60.207.223:8000/docs">
              <button className="mt-10 md:mt-0 bg-gradient-to-r from-[#4F55B9] to-[#ADB1FF] text-white h-[40px] w-[200px] rounded-[12px]">
                API DOCS
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <Image src={spacecard} alt="pic" width={300} />
          </div>
        </div>
      </motion.div>

      <div className="">
        <ProjectDetails />
      </div>

      <div className=" w-full">
        <Slider />
      </div>

      <div>
        <Auth />
      </div>

      <div className="w-full">
        <Cards />
      </div>

      <div className="w-full">
        <FormView />
      </div>

      <div className="w-full">
        <Admin />
      </div>
    </div>
  );
}
