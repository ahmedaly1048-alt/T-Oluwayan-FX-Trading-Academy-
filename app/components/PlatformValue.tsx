"use client";

import Link from "next/link";
import Image from "next/image";

export default function PlatformValue() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Platform Lifestyle/Success Image Asset (5/12 width) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            {/* Sleek Framed Image Layout with thin double ring borders */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl ring-1 ring-neutral-200 border-4 border-[#F23E4D] group transition-all duration-300 hover:shadow-2xl">
              <Image
                src="/mentor2.jpeg"
                alt="T'Oluwayan FX Success Showcase"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.opacity = '0';
                  const p = e.currentTarget.parentElement;
                  if (p) p.className += " bg-gradient-to-tr from-[#2D0A10] to-[#1E060A] flex items-center justify-center p-6 text-white text-center font-bold";
                  if (p) p.innerHTML = "T'Oluwayan FX Results Asset";
                }}
              />
            </div>
          </div>

          {/* Right Column: Platform Impact & Dual CTA Buttons (7/12 width) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Upper Main Paragraph block */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 font-normal">
              <p>
                <span className="text-[#F23E4D] font-black tracking-wider uppercase mr-1">
                  ASIDES OUR PAID MENTORSHIP
                </span>
                , T'Oluwayan FX provides a dedicated structure for developing market enthusiasts all over the world to take definitive charge of their financial futures. Under the strategic market oversight of <span className="text-neutral-900 font-bold">Moibi Tunde</span>, we make hundreds of premium forex video modules, structured trading courses, and live interactive webinars available completely for FREE across both our educational network portals and official community media channels.
              </p>
            </div>

            {/* Lower Context Paragraph block */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                This collaborative network is exactly how Moibi manages and scales our community's <span className="text-neutral-900 font-bold">Free FX Signals</span>. By deploying real-time market data evaluation and institutional risk parameters, he guarantees that these complimentary setups retain elite precision. It is all part of our broader mission to create a secure, high-integrity haven for retail traders to learn from, collaborate with, and trade alongside seasoned analysts.
              </p>
            </div>

            {/* Subheading / Hook Above Buttons */}
            <div className="pt-2">
              <h4 className="text-sm sm:text-base font-bold text-[#111111] tracking-tight">
                Want to know more about Moibi Tunde and the T'Oluwayan FX Mentorship Hub?
              </h4>
            </div>

            {/* Dual Asymmetric Navigation Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
              
              {/* Primary Filled Button */}
              <Link
                href="/contact-rep"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 bg-[#F23E4D] text-white text-[14px] font-bold tracking-wide rounded-tl-[16px] rounded-br-[16px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-[#d63240] transition-colors duration-200 shadow-md"
              >
                Speak with a representative
                <svg
                  className="ml-2 w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>

              {/* Secondary Outlined Button */}
              <Link
                href="/telegram"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 bg-transparent border border-[#F23E4D] text-[#F23E4D] text-[14px] font-bold tracking-wide rounded-tl-[4px] rounded-br-[4px] rounded-tr-[16px] rounded-bl-[16px] hover:bg-red-50 transition-colors duration-200"
              >
                Visit telegram group
                <svg
                  className="ml-2 w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}