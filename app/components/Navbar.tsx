"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Monitor scroll position for style updates and dynamic active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background visibility
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section automatically based on user view position
      const sections = ["home", "about", "features", "curriculum", "plans", "faqs", "reviews"];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navigation links targeting local HTML element IDs
  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Curriculum", href: "#curriculum", id: "curriculum" },
    { name: "Plans", href: "#plans", id: "plans" },
    { name: "FAQs", href: "#faqs", id: "faqs" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isOpen 
          ? "bg-[#070B12]" 
          : isScrolled 
            ? "bg-[#070B12]/80 backdrop-blur-md border-b border-white/5 shadow-lg" 
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 gap-4 transition-all duration-300">
          
         {/* 1. Brand Logo Configuration Area */}
<div className="flex-shrink-0 flex items-center min-w-[140px]">
  <a href="#home" className="flex items-center">
    <div className="relative h-10 w-40 sm:h-12 sm:w-44 flex items-center">
      <span className="text-lg sm:text-xl font-black tracking-tight text-white whitespace-nowrap">
        T'Oluwayan <span className="text-[#F23E4D]">FX</span>
      </span>
    </div>
  </a>
</div>

          {/* 2. Desktop Navigation Links (Switches highlight color based on current scroll segment) */}
          <nav className="hidden xl:flex items-center justify-center gap-x-6 2xl:gap-x-8 flex-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[14px] 2xl:text-[15px] font-medium transition-colors duration-200 whitespace-nowrap tracking-wide ${
                  activeSection === link.id
                    ? "text-[#F23E4D] font-bold"
                    : "text-gray-200 hover:text-[#F23E4D]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* 3. Corporate Red Action Button Portal */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="#plans" // Redirect user down to pricing models/contact block
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F23E4D] text-white text-[13px] sm:text-[14px] font-bold tracking-wide rounded-xl hover:bg-[#d63240] transition-all duration-200 shadow-lg shadow-red-950/20 whitespace-nowrap"
            >
              Get in Contact
              <svg
                className="ml-1.5 w-3.5 h-3.5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* 4. Mobile Layout Interactive Panel Trigger */}
          <div className="xl:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Main menu toggle</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Accordion Dropdown Submenu Layer */}
      <div className={`${isOpen ? "block" : "hidden"} xl:hidden bg-[#070B12] border-t border-white/5 shadow-2xl`} id="mobile-menu">
        <div className="px-4 pt-4 pb-8 space-y-3 max-h-[calc(100vh-6rem)] overflow-y-auto">
          
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === link.id
                    ? "bg-[#F23E4D]/10 text-[#F23E4D] border border-[#F23E4D]/20"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-4 border-t border-white/5 mt-4">
            <a
              href="#plans"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center px-6 py-4 bg-[#F23E4D] text-white text-sm font-bold tracking-wide rounded-xl shadow-lg hover:bg-[#d63240]"
            >
              Access Learning Dashboard
              <svg className="ml-2 w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}