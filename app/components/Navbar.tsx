"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Clean, platform-centric navigation array
  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/about" },
    { name: "Plans", href: "/plans" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enforces a tight, single-line alignment container across all breakpoints */}
        <div className="flex items-center justify-between h-20 md:h-24 gap-4">
          
          {/* 1. Platform Logo Area */}
          <div className="flex-shrink-0 flex items-center min-w-[140px]">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-40 sm:h-12 sm:w-44 flex items-center">
                <Image
                  src="/toluwayan-logo.png" 
                  alt="T'Oluwayan FX Platform Logo"
                  width={180}
                  height={50}
                  className="object-contain h-full w-auto"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const textLogo = document.createElement('span');
                      textLogo.className = 'fallback-text text-lg sm:text-xl font-black tracking-tight text-gray-800 whitespace-nowrap';
                      textLogo.innerHTML = `T'Oluwayan <span class="text-[#F23E4D]">FX</span>`;
                      parent.appendChild(textLogo);
                    }
                  }}
                />
              </div>
            </Link>
          </div>

          {/* 2. Desktop Navigation Links (Visible only on modern large screens) */}
          <nav className="hidden xl:flex items-center justify-center gap-x-4 2xl:gap-x-6 flex-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[14px] 2xl:text-[15px] font-medium transition-colors duration-200 whitespace-nowrap ${
                  link.active
                    ? "text-[#F23E4D] font-bold"
                    : "text-gray-600 hover:text-[#F23E4D]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. Action Portal Button (Desktop/Tablet Layout link) */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#F23E4D] text-white text-[13px] sm:text-[14px] font-bold tracking-wide rounded-tl-[18px] rounded-br-[18px] rounded-tr-[3px] rounded-bl-[3px] hover:bg-[#d63240] transition-all duration-200 shadow-sm whitespace-nowrap"
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
            </Link>
          </div>

          {/* 4. Mobile/Tablet Menu Button */}
          <div className="xl:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-[#F23E4D] hover:bg-red-50 focus:outline-none transition-colors"
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

      {/* Mobile Dropdown Panel Drawer */}
      <div className={`${isOpen ? "block" : "hidden"} xl:hidden bg-white border-t border-gray-100 shadow-inner`} id="mobile-menu">
        <div className="px-4 pt-4 pb-6 space-y-1.5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          
          {/* Responsive Double Column link grid for easier navigation */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  link.active
                    ? "bg-[#FFF0F1] text-[#F23E4D]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#F23E4D]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-50 mt-2">
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center px-6 py-4 bg-[#F23E4D] text-white text-sm font-bold tracking-wide rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px] rounded-bl-[4px] shadow-md hover:bg-[#d63240]"
            >
              Access Learning Dashboard
              <svg className="ml-2 w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}