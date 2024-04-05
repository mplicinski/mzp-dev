'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'

import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className='md:gird md:grid-cols-2 flex-row md:flex md:flex-row justify-between'>
        <div className='mr-1'>
          <h3 className='text-xl font-bold mb-1'>
            Web Dev
          </h3>
          <ul className='mb-3'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Django & Flask</li>
            <li>Spring</li>
          </ul>
        </div>
        <div className='mr-1'>
          <h3 className='text-xl font-bold mb-1'>
            Software Dev
          </h3>
          <ul className='mb-3'>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='mr-1'>
          <h3 className='text-xl font-bold mb-1'>
            System Administraion
          </h3>
          <ul>
            <li>Windows Server Adninistration</li>
            <li>Linux Sevrver Administration</li>
            <li>Docker Administration</li>
            <li>Powershell Scripting</li>
            <li>Bash Scripting</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className='flex flex-row'>
        <Image src="/images/depaul.png" width={50} height={30} alt={'Depaul University Logo'} className='mr-3'/>
        <ul>
          <li>DePaul University, Chicago</li>
          <li>Bachelors in Computer Science</li>
        </ul>
      </div>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div>
        <h3 className='font-bold text-xl'>iManage, Senior Support Engineer</h3>
        <ul className='pl-3 list-disc mt-1'>
          <li>Developed custom REST API scripts using Python and PowerShell to resolve unique issues and create specialized workflows.</li>
          <li>Built custom import configurations and automated scripts for mass configuration changes to avoid high volumes of repetitive manual work.</li>
          <li>Provided remote call support and troubleshooting assistance to customers.</li>
          <li>Facilitated collaboration and meetings between multiple teams including engineering, DevOps, and system administrators to solve multifaceted issues.</li>
          <li>Analyzed and diagnosed software and configuration issues in complex multi-tiered application environments.</li>
        </ul>
        <h3 className='mt-3 font-bold text-xl '>The Guardian Insurance Agencym, Web Developer & IT Administrator</h3>
        <ul className='list-disc pl-3 mt-1'>
          <li>Designed, built, and deployed agency website featuring an aesthetic frontend and functional backend.</li>
          <li>{"Centralized information storage and retrieval by converting the agency's physical documents/files into an organized database."}</li>
          <li>Assisted clients with document generation and delivery.</li>
          <li>Resolved IT issues throughout the agency and its systems when problems arose.</li>
          <li>Trained new employees in use of company technology and in providing customer service.</li>
        </ul>
      </div> 
    )
  } 
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative mx-auto'>
            <Image
              src="/images/profile-picture.jpeg"
              alt="Matthew Plicinski's Profile Photo"
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
              width={250}
              height={250}
            />
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-whte mb-4 mt-1'>About Me</h2>
          <p className='text-base md:text-lg'>
            {"Hi, my name is Matthew Plicinski I have a diverse background in web development, IT administration, and customer support. I've had a passion for technology from a young age and have explored it all through my youth and going into college where I acquired a Bachelors of Computer Science from DePaul University. My skills include various web development technologies, a diverse set of programming & scripting languages, as well as Windows & Linux system administration. Along with my customer support experience I bring a strong skill set to understand & troubleshoot complex & multifaceted issues. Whether its building robust web applications, designing user-friendly interfaces, or streamlining IT operations I'm always ready for the challenge.  I am continuously seeking growth and excited to contribute my expertise to a dynamic team, taking on new problems in the ever evolving world of technology."}
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}>
                Skills
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}>
                Education
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("experience")} 
              active={tab === "experience"}>
                Experience
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection