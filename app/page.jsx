import Image from 'next/image'
import React from 'react'
import ropes from '@/utils/images/ropes.png'
import spacecard from '@/utils/images/space-card.png'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <div className='w-[80%] h-min-screen flex justify-center items-start flex-col mx-auto tracking-wide'>
      <div className='flex justify-between items-center w-full pt-32'>
        <div className='max-w-[40%]'>
          <h1 className='text-3xl text-white font-bold'>Welcome To My <span className='border-b-[6px] border-[#4F55B9]'>Full-Stack</span> Project</h1> 
          <p className='text-[#d7d7d7] py-5'>In this page, you will have informations about
the project. What technologies / tools are being used, what was my goal etc.</p>
<button className=' bg-gradient-to-r from-[#4F55B9] to-[#ADB1FF] text-white h-[40px] w-[200px] rounded-[12px]'>API DOCS</button>
        </div>
      <div>
        <Image src={ropes} alt='pic' width={200}  />
      </div>
        <div>
          <Image src={spacecard} alt='pic' width={300} />
        </div>
      </div>
      <div className='pt-20 w-full'>
      <Slider />
      </div>
    </div>
  )
}
