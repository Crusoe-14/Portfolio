"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Works() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-full lg:basis-full pl-10 pr-10">
          <div className="relative w-full rounded-lg h-full flex justify-between">
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work1.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <a
                target="_blank"
                href={
                  "https://www.behance.net/gallery/180189013/Afro-Future-Tech-Web-and-Mobile-UI-design"
                }
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    Afro Future Tech
                  </span>
                </div>
              </a>
            </div>
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work2.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <a
                target="_blank"
                href={"https://dribbble.com/shots/21039109-Fittzers-mobile-UI"}
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    Fitters App UI
                  </span>
                </div>
              </a>
            </div>
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work3.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <a
                target="_blank"
                href={
                  "https://dribbble.com/shots/21785998-Network-Crypto-fintech-web-design"
                }
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    Network Web3 Design
                  </span>
                </div>
              </a>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-full lg:basis-full pl-10 pr-10">
          <div className="relative w-full rounded-lg h-full flex justify-between">
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work4.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <a
                target="_blank"
                href={
                  "https://www.behance.net/gallery/180661841/JUMIA-User-Management-Web-Page-Design"
                }
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    Jumia User Management
                  </span>
                </div>
              </a>
            </div>
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work5.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <Link
                href={"#"}
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    Manillas RoboAdvisor
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work6.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <a
                target="_blank"
                href={"https://dribbble.com/shots/21133176-Guitara-mobile-UI"}
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">Guitara</span>
                </div>
              </a>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-full lg:basis-full pl-10 pr-10">
          <div className="relative w-full rounded-lg h-full flex justify-between">
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work7.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <Link
                href={"#"}
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    Starlink Hotspot
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work8.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <Link
                href={"#"}
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    The weather App
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work9.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <a
                target="_blank"
                href={
                  "https://dribbble.com/shots/21826068-School-of-Graphics-web-design"
                }
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    School of Graphics
                  </span>
                </div>
              </a>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-full lg:basis-full pl-10 pr-10">
          <div className="relative w-full rounded-lg h-full flex justify-between">
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work8.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <Link
                href={"#"}
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    The weather App
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work9.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <a
                target="_blank"
                href={
                  "https://dribbble.com/shots/21826068-School-of-Graphics-web-design"
                }
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    School of Graphics
                  </span>
                </div>
              </a>
            </div>
            <div className="w-max mt-10 flex-shrink-0 relative overflow-hidden group">
              <Image
                src="/images/works/work9.png"
                alt="mugshot"
                width={250}
                height={180}
                className="rounded-2xl"
              />
              <a
                target="_blank"
                href={
                  "https://dribbble.com/shots/21025526-Simple-Calculator-and-Converter"
                }
                className="w-[250px] h-[180px] bg-black/50 z-20  absolute top-0 left-0 hidden group-hover:block hover:block"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold ">
                    Calculator
                  </span>
                </div>
              </a>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
