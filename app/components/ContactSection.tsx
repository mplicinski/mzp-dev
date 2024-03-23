'use client'

import React, { useState } from 'react'
import GithubIcon from "../../public/images/github-icon.svg"
import LinkedIn from "../../public/images/linkedin-icon.svg"
import Link from 'next/link'
import Image from "next/image"

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section id='contact' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10 my-auto'>
        <h5 className='text-xl font-bold text-white my-2'>Contact Me</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          {"Interested in collaborating or have an opportunity you think could be a great fit? Feel free to reach out! I'm open to connecting whether it's regarding a project you have in mind or if you simply want to discuss technology or design. Don't hesitate to get in touch!"}
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/mplicinski" target='_blank'>
            <Image src={GithubIcon} alt="Github Icon"/>
          </Link>
          <Link href="https://www.linkedin.com/in/mplicinski/" target='_blank'>
            <Image src={LinkedIn } alt="Github Icon"/>
          </Link>
        </div>
      </div>
      <div>
          <form action="" className='flex flex-col' onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='mb-6 w-1/2 mr-2'>
                <label htmlFor="name" className='text-white block mb-2 text-sm font-medium'>Your Name</label>
                <input
                  name="name"
                  type="text" 
                  id="name" 
                  required 
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5 pl-2"
                  placeholder='Joe Smith'/>
              </div>
              <div className='mb-6 w-1/2 ml-2'>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                <input
                  name="email"
                  type="email" 
                  id="email" 
                  required 
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5 pl-2"
                  placeholder='example@mail.com'/>
              </div>
            </div>
            <div className='mb-6'>
              <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
              <input 
                name="subject"
                type="text" 
                id="subject" 
                required 
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5 pl-2"
                placeholder='Subject'/>
            </div>
            <div className='mb-6'>
              <label 
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium">
                  Message
              </label>
              <textarea 
                name="message" 
                id="message"
                rows={10}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5 pl-2"
                placeholder='Message'
                >
              </textarea>
            </div>
            <button className='bg-purple-500 w-48 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg mx-auto'>
              Send Message
            </button>
            {
              // If email submitted successfully, show success message
              emailSubmitted && (
                <p className='border px-2 py-1 border-green-500 green-500 bg-green-500 rounded-lg w-fit text-white text-md mt-2 text-center mx-auto '>
                  Email Sent Successfully
                </p>
              )
            }
          </form>
      </div>
    </section>
  )
}

export default ContactSection