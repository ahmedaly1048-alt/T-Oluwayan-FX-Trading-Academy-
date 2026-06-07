"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // Slider Management State Machine
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  // Array of background images for the slider
  const backgroundImages = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero4.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // 5-second slide interval
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <header className="relative w-full min-h-[85vh] flex flex-col justify-center bg-black overflow-hidden select-none">
      
      {/* 1. FULL SCREEN SLIDER TRACK BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={image}
              alt={`Forex Training Background Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
              quality={95}
            />
          </div>
        ))}
        {/* Ambient Dark Layer Mask */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75" />
      </div>

      {/* 2. CENTER CONTENT CONTAINER (Tightened layout bounds) */}
      <div className="relative max-w-2xl mx-auto text-center z-20 flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6">
        
        {/* Compact Balanced Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.2] mb-4 drop-shadow-sm">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-white">
            T'Oluwayan FX Academy
          </span>
        </h1>

        {/* Clean, high-density structural subtitle block */}
        <p className="text-xs sm:text-sm md:text-[15px] text-gray-300/90 max-w-xl font-medium leading-relaxed mb-8 px-2 drop-shadow">
          Start your journey to mastering Forex Trading with one of the best elite networks in the world. 
          Go from beginner to advanced with the combined expertise of our global institutional desk at{" "}
          <span className="text-white font-bold tracking-wide">T'OLUWAYAN FX</span>. Enroll now to access 
          over 80 professional curriculums demystifying global financial market complexities.
        </p>

        {/* Scaled-down Call to Action Interfaces */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          
          {/* Primary Action Button */}
          <Link
            href="/enroll"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-[#F23E4D] text-white text-[14px] font-bold tracking-wide rounded-tl-[18px] rounded-br-[18px] rounded-tr-[3px] rounded-bl-[3px] hover:bg-[#d63240] transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-red-900/30 whitespace-nowrap"
          >
            Enroll with us now
            <svg
              className="ml-1.5 w-3.5 h-3.5 animate-bounce mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>

          {/* Secondary Action Button */}
          <Link
            href="/signals"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-transparent border-2 border-white text-white text-[14px] font-bold tracking-wide rounded-tl-[3px] rounded-br-[3px] rounded-tr-[18px] rounded-bl-[18px] hover:bg-white/10 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] whitespace-nowrap"
          >
            Get forex signals
            <svg
              className="ml-1.5 w-3.5 h-3.5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* 3. SLIDER DOTS INDICATOR - CENTER RIGHT */}
      <div className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 z-20 flex flex-col gap-2.5">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "h-6 w-1 bg-[#F23E4D]"
                : "h-2 w-1 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </header>
  );
}