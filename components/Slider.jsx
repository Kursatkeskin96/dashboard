'use client'
import React from 'react'
import Slider from 'react-infinite-logo-slider'
import aws from '@/utils/images/amazonwebservices.svg'
import figma from '@/utils/images/figma.png'
import git from '@/utils/images/git.png'
import github1 from '@/utils/images/github1.png'
import postgre from '@/utils/images/postgre.png'
import postman from '@/utils/images/postman.png'
import react from '@/utils/images/react.png'
import tailwind from '@/utils/images/tailwind.png'
import Image from 'next/image'
import { motion } from "framer-motion";

export default function SliderComponent() {
  return (
    <div className="max-w-[100%]">
      <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-t from-[#4F55B9] to-[#ADB1FF] font-bold text-center mb-10 w-fit mx-auto">
        Technologies Used
      </h3>
      <Slider
        width="220px"
        duration={30}
        pauseOnHover={false}
        blurBorders={true}
        blurBoderColor={"#0A0C2B"}
      >
        <Slider.Slide>
          <div className="bg-white rounded-[50%] p-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ">
            <Image src={aws} alt="alt" width={100} />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="bg-white rounded-[50%] p-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ">
            <Image src={figma} alt="alt" width={100} />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="bg-white rounded-[50%] p-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ">
            <Image src={git} alt="alt" width={100} />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="bg-white rounded-[50%] p-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ">
            <Image src={github1} alt="alt" width={100} />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="bg-white rounded-[50%] p-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ">
            <Image src={postgre} alt="alt" width={100} />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="bg-white rounded-[50%] p-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ">
            <Image src={postman} alt="alt" width={100} />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="bg-white rounded-[50%] p-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ">
            <Image src={react} alt="alt" width={100} />
          </div>
        </Slider.Slide>
        <Slider.Slide>
          <div className="bg-white rounded-[50%] p-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] ">
            <Image src={tailwind} alt="alt" width={100} />
          </div>
        </Slider.Slide>
      </Slider>
    </div>
  );
}
