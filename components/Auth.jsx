'use client'
import Image from "next/image";
import React, {useRef} from "react";
import projectimg from "@/utils/images/projectimg.png";
import { AiFillLock } from "react-icons/ai";
import { motion, useInView } from "framer-motion";


export default function ProjectDetails() {

    const refImage = useRef(null);
    const refText = useRef(null);

    const isInViewImage = useInView(refImage, { once: true });
    const isInViewText = useInView(refText, { once: true });


  return (
    <div className="flex justify-between items-center w-full flex-wrap gap-20 lg:gap-0">
      <motion.div
        ref={refText}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewText ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center items-center lg:max-w-[40%]"
      >
        <h2 className="text-3xl text-white font-bold">Authentication</h2>
        <p className="text-[#d7d7d7] py-5">
          I implemented robust sign-in and sign-up functionality, ensuring user
          passwords are securely hashed using bcrypt. Authentication is managed
          through JWT tokens, providing a secure and scalable solution.
          Logged-in users gain access to the /admin page, while any attempt to
          access this route without being logged in triggers an automatic
          redirect to the login page, enforced by custom middleware logic. This
          ensures that only authenticated users can access sensitive areas of
          the application.
        </p>
      </motion.div>

      <motion.div
        ref={refImage}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewImage ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-[450px] w-[100%] h-[300px] md:h-[350px] rounded-[12px]  bg-gradient-to-r to-[#4F55B9] from-[#ADB1FF] flex justify-center items-center"
      >
          <AiFillLock className="text-[200px] text-white" />
      </motion.div>
    </div>
  );
}
