'use client'
import React, { useRef } from "react";
import { ImMobile } from "react-icons/im";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Cards() {

  const horizontalRef = useRef(null);
  const verticalRef = useRef(null);

  const isHorizontalInView = useInView(horizontalRef, { once: true, margin: "0px 0px -100px 0px"});
  const isVerticalInView = useInView(verticalRef,{ once: true, margin: "0px 0px -100px 0px"});

  return (
    <div>
      <motion.div
        ref={horizontalRef}
        variants={containerVariants}
        className="flex justify-center gap-32 lg:gap-0 lg:justify-between items-center pb-20 flex-wrap"
        initial="hidden"
        animate={isHorizontalInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-b from-lightGray to-darkNavy w-[277px] h-[218px] rounded-[6px] relative flex justify-center items-center">
            <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-gradient-to-b from-[#4F55B9] to-[#ADB1FF] w-[120px] h-[120px] rounded-[50%] flex justify-center items-center">
              <AiFillThunderbolt className="text-white text-[60px]" />
            </div>
            <p className="text-white text-lg">Lightning-fast load times</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-b from-lightGray to-darkNavy w-[277px] h-[218px] rounded-[6px] relative flex justify-center items-center">
            <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-gradient-to-b from-[#4F55B9] to-[#ADB1FF] w-[120px] h-[120px] rounded-[50%] flex justify-center items-center">
              <AiFillHeart className="text-white text-[60px]" />
            </div>
            <p className="text-white text-lg">User friendly design</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-b from-lightGray to-darkNavy w-[277px] h-[218px] rounded-[6px] relative flex justify-center items-center">
            <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-gradient-to-b from-[#4F55B9] to-[#ADB1FF] w-[120px] h-[120px] rounded-[50%] flex justify-center items-center">
              <ImMobile className="text-white text-[60px]" />
            </div>
            <p className="text-white text-lg">Fully responsive UI</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
