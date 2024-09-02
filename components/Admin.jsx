"use client";
import React, { useRef } from "react";
import admin from "@/utils/images/admin.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function Admin() {
  const refImage = useRef(null);
  const refText = useRef(null);

  const isInViewImage = useInView(refImage, { once: true });
  const isInViewText = useInView(refText, { once: true });
  return (
    <div className="flex justify-between items-center w-full flex-wrap gap-20 lg:gap-0 pb-32">
      <motion.div
        ref={refImage}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewImage ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={admin} alt="pic" width={400} />
      </motion.div>
      <motion.div
        ref={refText}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewText ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center items-center lg:max-w-[40%]"
      >
        <h2 className="text-3xl text-white font-bold">Admin Page</h2>
        <p className="text-[#d7d7d7] py-5">
          On the Admin page, you will see dynamic statistics that update in
          real-time. If you submit a new form, you'll notice that the stats
          change accordingly. Another great feature is the ability to change the
          status of requests directly from this page.
        </p>
      </motion.div>
    </div>
  );
}
