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
    "/hero1.jpg", // Add your first background image (e.g., trading chart, market screen)
    "/hero2.jpg", // Add your second background image (e.g., forex trading floor)
    "/hero4.jpg", // Add your third background image (e.g., financial conference)
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
              src={image} // Different image for each slide
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      {/* 2. CENTER CONTENT CONTAINER */}
      <div className="relative max-w-4xl mx-auto text-center z-20 flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white">
            T'Oluwayan FX Academy!
          </span>
        </h1>

        {/* Platform-centric Sub-headline Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200/90 max-w-3xl font-medium leading-relaxed mb-10 px-2 drop-shadow">
          Start your journey to mastering Forex Trading with one of the best elite trading networks in the world! 
          Go from a beginner to an advanced FX trader with the combined expertise of our global institutional desk at{" "}
          <span className="text-white font-bold tracking-wide">T'OLUWAYAN FX</span>. Enroll now to gain access to 
          over 80 in-depth professional curriculums that carefully demystify the extreme complexities of the global financial markets.
        </p>

        {/* Dual Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          
          {/* Primary Action Button (Asymmetric Rounding) */}
          <Link
            href="/enroll"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4.5 bg-[#F23E4D] text-white text-[15px] font-bold tracking-wide rounded-tl-[24px] rounded-br-[24px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-[#d63240] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/30"
          >
            Enroll with us now
            <svg
              className="ml-2 w-4 h-4 animate-bounce mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>

          {/* Secondary Action Button (Transparent Outlined Asymmetric Rounding) */}
          <Link
            href="/signals"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4.5 bg-transparent border-2 border-white text-white text-[15px] font-bold tracking-wide rounded-tl-[4px] rounded-br-[4px] rounded-tr-[24px] rounded-bl-[24px] hover:bg-white/10 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get forex signals
            <svg
              className="ml-2 w-4 h-4 stroke-current"
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

      {/* 3. SLIDER DOTS INDICATOR - MOVED TO CENTER RIGHT */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 flex flex-col gap-3">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "h-8 w-1.5 bg-[#F23E4D]"
                : "h-3 w-1.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </header>
  );
}