'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Testimonials } from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Brands from '@/components/Brands';
import { Works } from '@/components/works';
import { useEffect, useState } from 'react';
import { WorksMobile } from '@/components/WorksMobile';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show the button when scrolled down 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className='overflow-x-hidden'>
      {showButton && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 left-5 transition'
          aria-label='Back to Top'
        >
          <img src='/icons/scroll-to-top.svg' alt='scroll-to-top' />
        </button>
      )}

      {/* HERO SECTION */}
      <section
        id='hero'
        className='flex items-center justify-center bg-transparent py-24 px-6'
      >
        <div className='text-white w-max text-center md:text-left'>
          <h1 className='text-[42px] sm:text-[84px]'>Hello there,</h1>
          <p className='text-sm sm:text-4xl mt-3'>
            I bring ideas to life; one pixel at a time!
          </p>
          <p className='text-sm sm:text-4xl pt-2 sm:pt-6'>
            Ready to create something amazing together?
          </p>

          <div className='flex items-center justify-center md:justify-start'>
            <Link
              href='#contact'
              className='flex items-center w-max px-4 py-2.5 rounded-[5px] rounded-br-none bg-[#FFC700] my-12 hover:*:'
            >
              <span className='text-[#020203] font-bold'>Talk to me</span>{' '}
              <img
                src='/icons/angle-right-black.svg'
                alt='icon'
                className='ml-2.5'
              />
            </Link>
          </div>

          <div className='flex items-center justify-center md:justify-start gap-3'>
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
      </section>

      {/* WORK SECTION */}
      <section
        id='work'
        className='bg-transparent px-6 sm:px-12 md:px-16 lg:px-28 py-14'
      >
        <div className='text-white text-center flex justify-center w-full'>
          <div className=''>
            <h3 className='text-2xl sm:text-4xl font-bold'>Recent Works</h3>
            <p className='text-sm sm:text-lg mt-6'>
              Designs That Speak for Themselves.
            </p>
            <p className='text-sm sm:text-lg mt-3'>
              {' '}
              A showcase of projects where creativity meets functionality.
            </p>
            <p className='text-sm sm:text-lg mt-3'>
              {' '}
              See how I turn ideas into reality.
            </p>
          </div>
        </div>

        <div className='hidden md:block'>
          <Works />
        </div>
        <div className='block md:hidden px-10'>
          <WorksMobile />
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section
        id='caseStudies'
        className='bg-transparent px-6 sm:px-12 md:px-16 py-14'
      >
        <div className='text-white text-center flex justify-center w-full'>
          <div className='md:w-[45%]'>
            <h3 className='text-2xl sm:text-4xl font-bold'>Case Studies</h3>
            <p className='text-sm sm:text-lg mt-6'>
              Unpacking the Journey from Concept to Completion. Explore the
              thought process, challenges, and design solutions that drive
              impactful user experiences
            </p>
          </div>
        </div>

        {/* CASE STUDY 1 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-16 md:mt-24 text-center md:text-left'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='bg-[#FFF6E9] text-[#FFA217] font-bold text-sm sm:text-lg py-[1px] px-4 w-max rounded-full'>
              Construction
            </div>
            <div className='text-white mt-6'>
              <h3 className='text-lg md:text-[28px] font-bold'>
                Marigold construction and Remodelling
              </h3>
              <p className='text-sm sm:text-lg mt-4'>
                Marigold has transformed visions and ideas into steel, masonry,
                and concrete realities. Our clients represent a broad spectrum
                of industries and business sectors, allowing us the opportunity
                to apply our extensive experience, know-how, and passion for
                excellence to each specific project in order to successfully
                handle every challenge and special circumstance.
              </p>
            </div>
            <div className='md:hidden mt-8'>
              <img
                src='/images/case-studies/marigold.png'
                alt='case-study'
                className='w-full'
              />
            </div>
            <a
              href='https://www.behance.net/gallery/181797551/Marigold-Construction-and-Remodeling-website-UI'
              target='_blank'
              className='flex items-center w-max px-4 py-2.5 rounded-[5px] rounded-br-none bg-[#FFA217] mt-8 hover:*:'
            >
              <span className='text-[#020203] font-bold text-sm sm:text-base'>
                View case study
              </span>{' '}
              <img
                src='/icons/angle-right-black.svg'
                alt='icon'
                className='ml-2.5'
              />
            </a>
          </div>
          <div className='hidden md:flex justify-end'>
            <Image
              src='/images/case-studies/marigold.png'
              alt='case-study'
              width={540}
              height={400}
            />
          </div>
        </div>

        {/* CASE STUDY 2 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-28 text-center md:text-left'>
          <div className='hidden md:flex justify-start'>
            <Image
              src='/images/case-studies/x.png'
              alt='case-study'
              width={540}
              height={400}
            />
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <div className='bg-[#D0E6FF] text-[#000AFF] font-bold text-sm sm:text-lg py-[1px] px-4 w-max rounded-full'>
              Social
            </div>
            <div className='text-white mt-6'>
              <h3 className='text-lg md:text-[28px] font-bold'>
                Improving X’s (FKA Twitter) UI for a better user experience
              </h3>
              <p className='text-sm sm:text-lg mt-4'>
                What if X users were able to find exactly what it is they are
                looking for when searching for topics of interest or looking up
                the trending topics?
              </p>
              <p className='text-sm sm:text-lg mt-4'>
                What if X had an algorithm that could narrow down a user’s
                search result to the exact or related content the user is
                searching for, filtering all unrelated contents?
              </p>
              <p className='text-sm sm:text-lg mt-4'>
                Follow this case study to find out.
              </p>
            </div>
            <div className='md:hidden mt-8'>
              <img
                src='/images/case-studies/x.png'
                alt='case-study'
                className='w-full'
              />
            </div>
            <a
              href='https://www.behance.net/gallery/181196455/Enhancing-Xs-%28formerly-Twitter%29-UI-for-a-better-UX'
              target='_blank'
              className='flex items-center w-max px-4 py-2.5 rounded-[5px] rounded-br-none bg-[#000AFF] mt-8 hover:*:'
            >
              <span className='text-white font-bold text-sm sm:text-base'>
                View case study
              </span>{' '}
              <img
                src='/icons/angle-right-white.svg'
                alt='icon'
                className='ml-2.5'
              />
            </a>
          </div>
        </div>

        {/* CASE STUDY 3 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-28 text-center md:text-left'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='bg-[#D0E6FF] text-[#2AB090] font-bold text-sm sm:text-lg py-[1px] px-4 w-max rounded-full'>
              Service
            </div>
            <div className='text-white mt-6'>
              <h3 className='text-lg md:text-[28px] font-bold'>
                Ayuda Web UI Design
              </h3>
              <p className='text-sm sm:text-lg mt-4'>
                Ayuda is a website that intends to allow users search for and
                seek professional help or services from certified professionals
                online. Ayuda is derived from the Spanish interpretation of the
                word 'Help'.
              </p>
              <p className='text-sm sm:text-lg mt-4'>
                Ayuda doesn’t just let you hire freelancers; you get to hire
                offline service providers as well: Handymen, Dog walkers,
                Nannies and babysitters, mechanics, gardeners, etc. Ayuda brings
                you the help you need at any time right to your doorstep!
              </p>
            </div>
            <div className='md:hidden mt-8'>
              <img
                src='/images/case-studies/aguda.png'
                alt='case-study'
                className='w-full'
              />
            </div>
            <a
              href='https://www.behance.net/gallery/180180089/Ayuda-web-UI-design-a-case-study'
              target='_blank'
              className='flex items-center w-max px-4 py-2.5 rounded-[5px] rounded-br-none bg-[#2AB090] mt-8 hover:*:'
            >
              <span className='text-white font-bold text-sm sm:text-base'>
                View case study
              </span>{' '}
              <img
                src='/icons/angle-right-white.svg'
                alt='icon'
                className='ml-2.5'
              />
            </a>
          </div>
          <div className='hidden md:flex justify-end'>
            <Image
              src='/images/case-studies/aguda.png'
              alt='case-study'
              width={540}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        id='testimonials'
        className='bg-transparent px-6 sm:px-12 md:px-16 lg:px-28 py-14'
      >
        <div className='text-white text-center flex justify-center w-full'>
          <div className='md:w-[45%]'>
            <h3 className='text-2xl sm:text-4xl font-bold'>Testimonials</h3>
            <p className='text-sm sm:text-lg mt-6'>
              What They’re Saying About My Work. Stories from clients and
              collaborators about how our partnership created meaningful
              results.
            </p>
          </div>
        </div>

        <div className='mt-10 md:mt-24 px-8 md:px-0'>
          <Testimonials />
        </div>

        <div className='mt-28'>
          <Brands />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id='contact'
        className=' text-2xl bg-transparent px-6 sm:px-12 md:px-16 py-20 md:py-32'
      >
        <div className='text-white text-center flex justify-center w-full'>
          <div className='md:w-[45%]'>
            <h3 className='text-2xl sm:text-4xl font-bold'>Get In Touch</h3>
            <p className='text-sm sm:text-lg mt-6'>
              Let’s Create Something Extraordinary Together. Have a project in
              mind or just want to say hello? I’m just a message away!
            </p>
          </div>
        </div>

        <div className='flex justify-center'>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
