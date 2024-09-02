import Image from 'next/image';
import React, { useRef } from "react";
import safari from '@/utils/images/safari.png'
import { motion, useInView } from "framer-motion";

export default function FormView() {

    const refImage = useRef(null);
    const refText = useRef(null);

    const isInViewImage = useInView(refImage, { once: true });
    const isInViewText = useInView(refText, { once: true });
  return (
    <div className="bg-gradient-to-b from-lightGray to-darkNavy flex justify-center items-center flex-col p-5 lg:px-20 lg:py-20">
      <motion.div
        ref={refText}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewText ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center items-center flex-col"
      >
        <h4 className="text-3xl font-bold text-white text-center lg:text-left">
          Conference Attendance Request Form
        </h4>
        <p className="text-[#d7d7d7] py-5 text-center lg:max-w-[80%]">
          When a user fills out and submits this form, the data is securely
          stored in a PostgreSQL database. Admin users can then view and manage
          these requests on the admin page, with the ability to update the
          status from pending to approved or rejected.
        </p>
      </motion.div>
      <motion.div
        ref={refImage}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewImage ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={safari} alt="pic" width={900} />
      </motion.div>
    </div>
  );
}
