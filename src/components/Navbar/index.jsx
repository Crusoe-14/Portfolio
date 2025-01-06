'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className='px-16 hidden lg:flex items-center justify-between py-3 sticky top-0 z-50 bg-[#020203]'>
      <div>
        <Link href='/' className='text-[#D0E6FF] font-bold text-[28px]'>
          <span>Godwin Okwong</span>
        </Link>
      </div>
      <div className='text-[28px] flex items-center gap-8'>
        <Link
          href='#hero'
          className={`text-[#D0E6FF] ${
            activeSection === 'hero' ? 'opacity-100' : 'opacity-30'
          }`}
        >
          <span>Home</span>
        </Link>
        <Link
          href='#work'
          className={`text-[#D0E6FF] ${
            activeSection === 'work' ? 'opacity-100' : 'opacity-30'
          }`}
        >
          <span>Work</span>
        </Link>
        <Link
          href='#caseStudies'
          className={`text-[#D0E6FF] ${
            activeSection === 'caseStudies' ? 'opacity-100' : 'opacity-30'
          }`}
        >
          <span>Case Studies</span>
        </Link>
        <Link
          href='#testimonials'
          className={`text-[#D0E6FF] ${
            activeSection === 'testimonials' ? 'opacity-100' : 'opacity-30'
          }`}
        >
          <span>Testimonials</span>
        </Link>
        <Link
          href='#contact'
          className={`text-[#D0E6FF] ${
            activeSection === 'contact' ? 'opacity-100' : 'opacity-30'
          }`}
        >
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
