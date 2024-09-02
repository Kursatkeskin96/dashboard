import Image from 'next/image'
import React, { useRef } from 'react'
import projectimg from '@/utils/images/projectimg.png'
import { motion, useInView } from "framer-motion";

export default function ProjectDetails() {

  const refImage = useRef(null);
  const refText = useRef(null);

  const isInViewImage = useInView(refImage, { once: true });
  const isInViewText = useInView(refText, { once: true });

  return (
    <div className="flex justify-between items-center w-full flex-wrap gap-20 lg:gap-0">
      <motion.div
        ref={refImage}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewImage ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex justify-center items-center">
          <Image src={projectimg} alt="pic" width={400} />
        </div>
      </motion.div>
      <motion.div
        ref={refText}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewText ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center items-center lg:max-w-[40%]"
      >

          <h2 className="text-3xl text-white font-bold">Project Details</h2>
          <p className="text-[#d7d7d7] py-5">
            As a front-end web developer, my primary goal is to transition into
            a full-stack web developer role. To achieve this, I embarked on this
            project with the intention of deepening my understanding of back-end
            development, particularly using Python, FastAPI, and PostgreSQL.
            Through this project, I was able to significantly expand my
            knowledge of back-end fundamentals, including API design, database
            management, and server-side logic. This hands-on experience has been
            invaluable in bridging the gap between front-end and back-end
            development, bringing me closer to becoming a well-rounded
            full-stack developer.
          </p>
 
      </motion.div>
    </div>
  );
}
