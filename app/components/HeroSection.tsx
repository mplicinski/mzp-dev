'use client'

import React from 'react'
import Image from 'next/image' 
import Link from 'next/link';

import { saveAs } from "file-saver";

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1RetLTx5Td1nX4TZi6p6edUa2a3zGBSyX/view?usp=drive_link",
      "matthew_plicinski_cv.pdf"
    );
  };

  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 w-10/12 place-self-center text-center sm:text-left'>
          <h1 className='text-whtte mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan to-magenta'>Hi, I'm {" "}</span>
            <br/>
            <TypeAnimation
              sequence={[
                'Matt',
                2000, 
                'a Web Developer',
                1500,
                'an IT Administrator',
                1500,
                'and Designer',
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-lg lg:text-xl'>
            Building & optimizing digital experiences
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan to-magenta hover:bg-white text-black mt-3 hover:scale-110 transition-all duration-300'>
              <Link href={"#contact"}>
                Contact Me
              </Link>
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-magenta to-yellow hover:bg-slate-800 text-white mt-3 hover:scale-110 transition-all duration-300'>
            <Link href={'/files/matthew-plicinski-resume.pdf'}  target="_blank"  rel="noopener noreferrer" locale={false} download >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download Resume
              </span>
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative'>
          <Image
            src="/images/profile-picture.jpeg"
            alt="Matthew Plicinski's Profile Photo"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
            width={250}
            height={250}
          />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection