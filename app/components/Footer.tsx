import React from 'react'

import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({subsets: ['latin']})

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent bg-[#000000] border-r-transparent border-b-transparent z-20'>
      <div className='container p-12 flex justify-between mx-auto'>
        <span>
          <h5 className={sourceCodePro.className + ' text-2xl'}>mzp.dev</h5>
        </span>
        <p className='text-slate-600'>
          All rights reserved.<br/>
          About Me Image by brgfx on Freepik
        </p>
      </div>
    </footer>
  )
}

export default Footer