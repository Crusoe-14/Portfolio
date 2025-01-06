'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function WorksMobile() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-full'
    >
      <CarouselContent>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work1.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <a
              target='_blank'
              href={
                'https://www.behance.net/gallery/180189013/Afro-Future-Tech-Web-and-Mobile-UI-design'
              }
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  Afro Future Tech
                </span>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work2.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <a
              target='_blank'
              href={'https://dribbble.com/shots/21039109-Fittzers-mobile-UI'}
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  Fitters App UI
                </span>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work3.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <a
              target='_blank'
              href={
                'https://dribbble.com/shots/21785998-Network-Crypto-fintech-web-design'
              }
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  Network Web3 Design
                </span>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work4.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <a
              target='_blank'
              href={
                'https://www.behance.net/gallery/180661841/JUMIA-User-Management-Web-Page-Design'
              }
              className='w-[250px] h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  Jumia User Management
                </span>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work5.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <Link
              href={'#'}
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  Manillas RoboAdvisor
                </span>
              </div>
            </Link>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work6.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <a
              target='_blank'
              href={'https://dribbble.com/shots/21133176-Guitara-mobile-UI'}
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>Guitara</span>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work7.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <Link
              href={'#'}
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  Starlink Hotspot
                </span>
              </div>
            </Link>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work8.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <Link
              href={'#'}
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  The weather App
                </span>
              </div>
            </Link>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work9.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <a
              target='_blank'
              href={
                'https://dribbble.com/shots/21826068-School-of-Graphics-web-design'
              }
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  School of Graphics
                </span>
              </div>
            </a>
          </div>
        </CarouselItem>
        <CarouselItem className='md:basis-full lg:basis-full'>
          <div className='w-full mt-10 flex-shrink-0 relative overflow-hidden group'>
            <img
              src='/images/works/work10.png'
              alt='mugshot'
              className='rounded-2xl w-full h-full'
            />
            <a
              target='_blank'
              href={
                'https://dribbble.com/shots/21025526-Simple-Calculator-and-Converter'
              }
              className='w-full h-full bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block'
            >
              <div className='h-full w-full flex items-center justify-center'>
                <span className='text-white text-lg font-bold '>
                  Calculator
                </span>
              </div>
            </a>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
