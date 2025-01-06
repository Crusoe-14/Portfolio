'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-[#020203] border-b border-[#2D2D2D] shadow-md px-6 sm:px-12 md:px-16 lg:px-20 p-5 z-50 flex lg:hidden justify-between items-center sticky top-0'>
      <section className='flex justify-between w-full items-center'>
        <div className='flex items-center gap-8'>
          <button onClick={toggleMenu}>
            <img src={'/icons/hamburger.svg'} alt='hamburger' />
          </button>
        </div>
        <div className='flex-grow flex justify-center items-center'>
          <Link href='/' className='text-[#D0E6FF] font-bold text-2xl'>
            <span>Godwin Okwong</span>
          </Link>
        </div>
      </section>
      <section
        className={`items-center justify-between bg-[#BEBEBE1F] backdrop-blur-[6px] w-screen h-screen z-[10000] overflow-y-auto fixed top-0 left-0 ${
          menuOpen ? 'block' : 'hidden'
        }`}
        style={{ WebkitBackdropFilter: 'blur(6px)' }}
      >
        <section className='bg-[#020203] h-max w-max border-b border-[#2D2D2D] shadow-md pr-6'>
          <div className='flex justify-between w-full items-center px-6 py-4 gap-10 bg-[#020203] border-b border-[#2D2D2D] shadow-md'>
            <div className='flex items-center gap-8'>
              <button onClick={toggleMenu}>
                <img
                  src='/icons/close.svg'
                  alt='close-icon'
                  // className='h-5 w-auto'
                />
              </button>
            </div>
            <div className='flex-grow flex justify-center items-center'>
              <Link href='/' className='text-[#D0E6FF] font-bold text-2xl'>
                <span>GO</span>
              </Link>
            </div>
          </div>
          <div className='text-base flex flex-col gap-8 p-6 py-8'>
            <Link
              onClick={toggleMenu}
              href='#hero'
              className='text-[#D0E6FF] flex items-center gap-6'
            >
              <img
                src='/icons/home.svg'
                alt='home-icon'
                // className='h-5 w-auto'
              />
              <span>Home</span>
            </Link>
            <Link
              onClick={toggleMenu}
              href='#work'
              className='text-[#D0E6FF] flex items-center gap-6'
            >
              <img
                src='/icons/work.svg'
                alt='work-icon'
                // className='h-5 w-auto'
              />
              <span>Work</span>
            </Link>
            <Link
              onClick={toggleMenu}
              href='#caseStudies'
              className='text-[#D0E6FF] flex items-center gap-6'
            >
              <img
                src='/icons/cs.svg'
                alt='cs-icon'
                // className='h-5 w-auto'
              />
              <span>Case Studies</span>
            </Link>
            <Link
              onClick={toggleMenu}
              href='#testimonials'
              className='text-[#D0E6FF] flex items-center gap-6'
            >
              <img
                src='/icons/ts.svg'
                alt='ts-icon'
                // className='h-5 w-auto'
              />
              <span>Testimonials</span>
            </Link>
            <Link
              onClick={toggleMenu}
              href='#contact'
              className='text-[#D0E6FF] flex items-center gap-6'
            >
              <img
                src='/icons/contact.svg'
                alt='contact-icon'
                // className='h-5 w-auto'
              />
              <span>Contact</span>
            </Link>
          </div>
        </section>
      </section>
    </nav>
  );
};

export default NavbarMobile;
