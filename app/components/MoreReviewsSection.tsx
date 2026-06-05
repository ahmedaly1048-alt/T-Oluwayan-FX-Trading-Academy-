"use client";

import Link from "next/link";

export default function MoreReviewsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-3">
            We've got hundreds more reviews from our students!
          </h2>
          <p className="text-gray-500 text-sm sm:text-[15px] font-normal">
            Check them out on TrustPilot and Google Reviews
          </p>
        </div>

        {/* Review Platforms Row Layout */}
        <div className="flex flex-wrap items-center gap-y-4 mb-20">
          
          {/* TrustPilot Button */}
          <div className="flex items-center">
            <Link 
              href="https://www.trustpilot.com" 
              target="_blank"
              className="flex items-center space-x-4 bg-white hover:bg-gray-50/80 transition-colors py-2 pr-6 rounded-lg group"
            >
              {/* TrustPilot Styled Star Circle */}
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-gray-100 flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-[#00B67A]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[12px] text-gray-500 font-medium">Go to</span>
                <span className="text-base font-black text-black tracking-tight mt-0.5">TrustPilot</span>
              </div>
              {/* Right Arrow Indicator */}
              <svg className="w-4 h-4 text-black stroke-current ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* Vertical Divider (Hidden on small mobile viewports) */}
            <div className="hidden sm:block h-10 w-[1px] bg-gray-200 mx-6" />
          </div>

          {/* Google Reviews Button */}
          <div className="flex items-center">
            <Link 
              href="https://google.com" 
              target="_blank"
              className="flex items-center space-x-4 bg-white hover:bg-gray-50/80 transition-colors py-2 pr-6 rounded-lg group"
            >
              {/* Google App Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-gray-100 flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.32 14.24A7.16 7.16 0 0 1 4.93 12c0-.79.13-1.57.39-2.24V6.61H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.39l4.11-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.39l4.11 3.15c.94-2.85 3.57-4.96 6.68-4.96z"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[12px] text-gray-500 font-medium">Go to</span>
                <span className="text-base font-black text-black tracking-tight mt-0.5">Google Reviews</span>
              </div>
              {/* Right Arrow Indicator */}
              <svg className="w-4 h-4 text-black stroke-current ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Central Asymmetric Bottom Call To Action Module */}
        <div className="flex flex-col items-center justify-center text-center mt-12">
          <h3 className="text-lg font-extrabold text-black mb-5 tracking-tight">
            You want to be like these amazing people?
          </h3>
          
          <Link
            href="/enroll"
            className="inline-flex items-center justify-center px-8 py-4.5 bg-[#FFF0F1] text-[#F23E4D] text-[14px] font-bold tracking-wide rounded-tl-[18px] rounded-br-[18px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-[#FFE4E6] transition-colors duration-200 shadow-sm"
          >
            Enroll with us now
            <svg
              className="ml-2 w-4 h-4 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}