'use client'

import React from 'react'
import Image from 'next/image' 
import Link from 'next/link';

import bg from '../../public/images/hero-graphic.png'

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12 h-screen'>
        <Image 
          src={bg}
          alt={'graphic of cyan, magenta, and yellow planets in space.'}
          layout='fill'
          objectFit='cover'
          quality={100}
          className='-z-9 object-left border-2 border-b-[#33353F] border-l-transparent border-r-transparent border-t-transparent block h-screen'
          >
        </Image>
        <div className='col-span-7 w-10/12 place-self-center text-center sm:text-left z-10 ml-50 mt-80 lg:mt-0'>
          <h1 className='text-whtte mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan'>{"Hi, I'm"}{" "}</span>
            <br/>
            <TypeAnimation
              sequence={[
                'Matt',
                3000, 
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
          <Link href={"#contact"}>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan to-magenta hover:bg-white text-black mt-3 hover:scale-110 transition-all duration-300'>
                Contact Me
            </button>
          </Link>
          <Link href={'/files/matthew-plicinski-resume.pdf'}  target="_blank"  rel="noopener noreferrer" locale={false} download >
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-magenta to-yellow hover:bg-slate-800 text-white mt-3 hover:scale-110 transition-all duration-300'> 
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download Resume
              </span>
            </button>
            </Link>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative -z-20'>
        </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection