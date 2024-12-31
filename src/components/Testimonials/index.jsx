"use client"

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-10 pr-10">
          <div
            className="relative p-[1px] rounded-lg h-full"
            style={{
              background:
                "linear-gradient(270deg, #FF4400 -0.03%, #FFC700 99.97%)",
            }}
          >
            <div className="bg-[#020203] rounded-lg p-6 py-10 h-full">
              <div className=" flex">
                <div className="flex-shrink-0">
                  <img
                    src="/icons/quote.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
                <p className="text-white text-lg px-6">
                  Working with Godwin was an absolute game-changer for our
                  e-commerce platform. The sleek, user-friendly design they
                  delivered has significantly improved our customers' shopping
                  experience. Sales have increased by 35%, and user engagement
                  has never been higher. A true design wizard!
                </p>
                <div className="flex items-end flex-shrink-0">
                  <img
                    src="/icons/quote2.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src="/images/testimonial/image1.png"
                  alt="mugshot"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h6 className="text-lg font-bold italic text-white">
                  Saed, Hoojan
                </h6>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-10 pr-10">
          <div
            className="relative p-[1px] rounded-lg h-full"
            style={{
              background:
                "linear-gradient(270deg, #00FFEA -0.03%, #FFC700 99.97%)",
            }}
          >
            <div className="bg-[#020203] rounded-lg p-6 py-10 h-full">
              <div className=" flex">
                <div className="flex-shrink-0">
                  <img
                    src="/icons/quote.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
                <p className="text-white text-lg px-6">
                  We hired Godwin to join our team of developers for our mobile
                  app, and they exceeded all expectations. From the intuitive
                  navigation to the visually stunning interface, everything was
                  spot on. Their ability to translate complex requirements into
                  simple, delightful user experiences is unparalleled.
                </p>
                <div className="flex items-end flex-shrink-0">
                  <img
                    src="/icons/quote2.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src="/images/testimonial/image2.png"
                  alt="mugshot"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h6 className="text-lg font-bold italic text-white">
                  Uwem, Avangi
                </h6>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-10 pr-10">
          <div
            className="relative p-[1px] rounded-lg h-full"
            style={{
              background:
                "linear-gradient(270deg, #CE0101 -0.03%, #FFC700 99.97%)",
            }}
          >
            <div className="bg-[#020203] rounded-lg p-6 py-10 h-full">
              <div className=" flex">
                <div className="flex-shrink-0">
                  <img
                    src="/icons/quote.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
                <p className="text-white text-lg px-6">
                  Our SaaS dashboard was outdated and difficult to use, but
                  Godwin turned it into a seamless and modern experience. His
                  attention to detail and focus on usability have been
                  transformative for our clients. Feedback has been
                  overwhelmingly positive, and our retention rates are up by
                  20%.
                </p>
                <div className="flex items-end flex-shrink-0">
                  <img
                    src="/icons/quote2.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src="/images/testimonial/image3.png"
                  alt="mugshot"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h6 className="text-lg font-bold italic text-white">
                  Louis, Mployus
                </h6>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-10 pr-10">
          <div
            className="relative p-[1px] rounded-lg h-full"
            style={{
              background:
                "linear-gradient(270deg, #000DFF -0.03%, #FFC700 99.97%)",
            }}
          >
            <div className="bg-[#020203] rounded-lg p-6 py-10 h-full">
              <div className=" flex">
                <div className="flex-shrink-0">
                  <img
                    src="/icons/quote.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
                <p className="text-white text-lg px-6">
                  From wireframes to prototypes, Godwin ensured every step of
                  the design process was collaborative and insightful. His
                  usability testing uncovered pain points we hadn’t noticed, and
                  his solutions were practical and innovative. Truly a
                  professional with a user-first mindset!
                </p>
                <div className="flex items-end flex-shrink-0">
                  <img
                    src="/icons/quote2.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src="/images/testimonial/image4.png"
                  alt="mugshot"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h6 className="text-lg font-bold italic text-white">
                  Peter, School of Graphics
                </h6>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-10 pr-10">
          <div
            className="relative p-[1px] rounded-lg h-full"
            style={{
              background:
                "linear-gradient(270deg, #44FF00 -0.03%, #FFC700 99.97%)",
            }}
          >
            <div className="bg-[#020203] rounded-lg p-6 py-10 h-full">
              <div className=" flex">
                <div className="flex-shrink-0">
                  <img
                    src="/icons/quote.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
                <p className="text-white text-lg px-6">
                  As a nonprofit, we needed a website that was not only
                  functional but also told our story. Godwin crafted a design
                  that captured our vision perfectly. The site is now more
                  accessible and visually appealing, leading to a 50% increase
                  in donations and volunteer sign-ups.
                </p>
                <div className="flex items-end flex-shrink-0">
                  <img
                    src="/icons/quote2.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src="/images/testimonial/image5.png"
                  alt="mugshot"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h6 className="text-lg font-bold italic text-white">
                  Ayuba, IRSL
                </h6>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-10 pr-10">
          <div
            className="relative p-[1px] rounded-lg h-full"
            style={{
              background:
                "linear-gradient(270deg, #FB00FF -0.03%, #FFC700 99.97%)",
            }}
          >
            <div className="bg-[#020203] rounded-lg p-6 py-10 h-full">
              <div className=" flex">
                <div className="flex-shrink-0">
                  <img
                    src="/icons/quote.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
                <p className="text-white text-lg px-6">
                  We needed a cohesive design system to unify our products, and
                  Godwin delivered beyond expectations. He created a robust,
                  scalable design library that our team can use across projects.
                  It has streamlined development and maintained consistency
                  throughout. Amazing work!
                </p>
                <div className="flex items-end flex-shrink-0">
                  <img
                    src="/icons/quote2.svg"
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src="/images/testimonial/image6.png"
                  alt="mugshot"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h6 className="text-lg font-bold italic text-white">
                  Syed, Abacus
                </h6>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
