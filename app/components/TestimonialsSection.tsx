"use client";

import { useRef } from "react";

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      initials: "NA",
      name: "Norbert Agwaraonye",
      duration: "Trading for 2 years now",
      headline: "What I'm seeing in T'Oluwayan FX",
      quote: "What I'm seeing in T'Oluwayan FX had been my expectations for over 3 years of trading. I have the education and technical know-how that every trader needs. I'm more than satisfied with everything I see on daily basis. The interaction between the mentors and mentees is fantastic and that makes me feel at home."
    },
    {
      initials: "US",
      name: "Uthman. S",
      duration: "Trading for 3 years now",
      headline: "Take the course",
      quote: "I'm 2 weeks into the mentorship program. It's worth every penny. If you want to understand the financial market take it. It's not just a course but you will also be mentored till you know how to consistently win in the market."
    },
    {
      initials: "AS",
      name: "Akachukwu Success",
      duration: "Trading for 1 year now",
      headline: "Moibi really inspired me",
      quote: "Since I joined T'Oluwayan FX, my mindset on trading really changed, i looked onto Moibi Tunde I learnt all he does his strategy, his risk management, his money management., all he does he really inspired me since then I have been seeing some results in my trading mindset.. Love you boss Moibi 💓"
    },
    {
      initials: "OA",
      name: "Oluwaseun Adewunmi",
      duration: "Trading for 1 year now",
      headline: "Excellent!",
      quote: "Excellent! Just 2 weeks in the mentorship program I can see the anatomy of price action crystal clear ( The Hidden Treasure). Is like you are in an institution longing to graduate so you can start working ,making money:no pass no graduation! Moibi is a rare Gem!"
    }
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Heading Module matching layout */}
        <div className="flex items-start space-x-4 mb-12">
          <div className="flex-shrink-0 text-[#F23E4D] w-14 h-14 pt-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM4 11a4 4 0 100 8 4 4 0 000-8zm16 0a4 4 0 100 8 4 4 0 000-8zM12 14c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight leading-none">
              Hear our students learning
            </h2>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-none mt-3">
              experiences
            </h2>
          </div>
        </div>

        {/* Carousel Slide Action Buttons Overlays */}
        <div className="absolute top-1/2 -left-4 z-30 transform translate-y-4 hidden xl:block">
          <button
            onClick={() => handleScroll("left")}
            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#F23E4D] hover:scale-105 transition-all"
          >
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 -right-4 z-30 transform translate-y-4 hidden xl:block">
          <button
            onClick={() => handleScroll("right")}
            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#F23E4D] hover:scale-105 transition-all"
          >
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Horizontal Slider Layout Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-[300px] sm:w-[320px] flex-shrink-0 bg-white border border-gray-100/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 snap-start flex flex-col justify-between items-stretch"
            >
              <div>
                {/* Meta User Profile Layout Row */}
                <div className="flex items-center space-x-3.5 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#FFF0F1] flex items-center justify-center text-[#F23E4D] font-black text-sm tracking-wider flex-shrink-0">
                    {item.initials}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-black text-black truncate tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-[12px] text-gray-400 font-medium mt-0.5">
                      {item.duration}
                    </p>
                  </div>
                </div>

                {/* Separation Rule Graphic Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-red-100 via-transparent to-transparent mb-5" />

                {/* Title Highlight Heading */}
                <h3 className="text-[15px] font-extrabold text-black tracking-tight mb-3 leading-snug">
                  {item.headline}
                </h3>

                {/* Blockquote Body Paragraph */}
                <p className="text-[#4A4A4A] text-[13px] leading-relaxed font-normal text-justify sm:text-left">
                  {item.quote}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}