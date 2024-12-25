import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='grid grid-cols-3 items-center justify-between px-16 py-10'>
        <div>
          <div className='flex items-center gap-3'>
            <Image src='/logos/logo.svg' alt='logo' width={43} height={48} />
            <h2 className='text-[#D0E6FF] font-bold text-[36px]'>
              <span>Godwin Okwong</span>
            </h2>
          </div>
          <p className='text-lg text-white mt-6'>
            Godwin is an excellent UI/UX designer and Product designer working
            remotely from Abuja, Nigeria.
          </p>
          <div className='mt-6'>
            <Link href='/' className='block text-white text-lg'>
              iboyo.okwong@gmail.com
            </Link>
            <Link href='/' className='block text-white text-lg mt-3'>
              +234-813 619 1067
            </Link>
            <div className='flex items-center gap-3 mt-4'>
              <a href={'https://dribbble.com/Crusoe14'} target='_blank'>
                <img src='/socials/dribbble.svg' alt='social' />
              </a>
              <a href={'https://www.behance.net/godwinok'} target='_blank'>
                <img src='/socials/behance.svg' alt='social' />
              </a>
              <a href={'https://www.behance.net/godwinok'} target='_blank'>
                <img src='/socials/github.svg' alt='social' />
              </a>
              <a
                href={'https://www.linkedin.com/in/crusoeokwong/'}
                target='_blank'
              >
                <img src='/socials/linkedin.svg' alt='social' />
              </a>
              <a href={'#'} target='_blank'>
                <img src='/socials/x.svg' alt='social' />
              </a>
            </div>
          </div>
        </div>
        <div></div>
        <div className='flex justify-end'>
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
          <img src='/icons/red-heart.svg' alt='red-heart' className='ml-2'/>
        </div>
        <p className='text-center text-white mt-3'>Godwin Okwong @ 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
