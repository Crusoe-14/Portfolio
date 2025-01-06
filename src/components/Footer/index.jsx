import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-between px-6 sm:px-12 md:px-16 py-10'>
        <div>
          <div className='flex items-center justify-center md:justify-start gap-3'>
            <Image src='/logos/logo.svg' alt='logo' width={43} height={48} />
            <h2 className='text-[#D0E6FF] font-bold text-2xl sm:text-[36px]'>
              <span>Godwin Okwong</span>
            </h2>
          </div>
          <p className='text-sm sm:text-lg text-white mt-6 text-center md:text-left'>
            Godwin is an excellent UI/UX designer and Product designer working
            remotely from Abuja, Nigeria.
          </p>
          <div className='md:hidden flex justify-center p-8'>
            <img src='/images/mugshot.png' alt='mugshot' />
          </div>
          <div className='mt-6 flex flex-col items-center md:items-start'>
            <div>
              <Link
                href='mailto:iboyo.okwong@gmail.com'
                className='text-white text-lg flex items-center gap-4'
              >
                <img src='/icons/message.svg' alt='icon' />
                iboyo.okwong@gmail.com
              </Link>
              <Link
                href='tel:+2348136191067'
                className='text-white text-lg flex items-center gap-4 mt-3'
              >
                <img src='/icons/call.svg' alt='icon' />
                +234 813 619 1067
              </Link>
              <div className='flex items-center gap-3 mt-4'>
                <a href={'https://dribbble.com/Crusoe14'} target='_blank'>
                  <img src='/socials/dribbble.svg' alt='social' />
                </a>
                <a href={'https://www.behance.net/godwinok'} target='_blank'>
                  <img src='/socials/behance.svg' alt='social' />
                </a>
                <a href={'https://github.com/Crusoe-14'} target='_blank'>
                  <img src='/socials/github.svg' alt='social' />
                </a>
                <a
                  href={'https://www.linkedin.com/in/crusoeokwong/'}
                  target='_blank'
                >
                  <img src='/socials/linkedin.svg' alt='social' />
                </a>
                <a href={'https://x.com/14th_0_Eight'} target='_blank'>
                  <img src='/socials/x.svg' alt='social' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className='hidden md:flex justify-end'>
          <Image
            src='/images/mugshot.png'
            alt='mugshot'
            width={308}
            height={310}
          />
        </div>
      </div>
      <div className='flex flex-col items-center text-xs bg-[#1B1B1B] py-6 text-white'>
        <div className='flex items-center'>
          <span>Made with</span>{' '}
          <img src='/icons/red-heart.svg' alt='red-heart' className='ml-2' />
        </div>
        <p className='text-center text-white mt-3'>
          Godwin Okwong @ {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
