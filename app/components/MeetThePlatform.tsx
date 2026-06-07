"use client";

import Image from "next/image";

export default function MeetThePlatform() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Scroll Indicator Link */}
        <div className="w-full flex flex-col items-center justify-center mb-16 text-center">
          <span className="text-[11px] sm:text-xs font-bold text-[#F23E4D] uppercase tracking-widest">
            Learn more about T'Oluwayan FX
          </span>
          <svg 
            className="w-4 h-4 text-[#F23E4D] mt-2 animate-bounce" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Platform Overview & Copy (7/12 width) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header with Icon Component */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 text-[#F23E4D] w-12 h-12">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2zm0 4.2l-1.4 2.8-3.1.5 2.2 2.2-.5 3.1 2.8-1.5 2.8 1.5-.5-3.1 2.2-2.2-3.1-.5L12 6.2z M3 21h18v2H3v-2z"/>
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                Meet your <span className="text-[#3a060b] font-black">Trading Analyst</span>
              </h2>
            </div>

            {/* Main Descriptive Text Box */}
            <div className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed space-y-6 font-normal">
              <p>
                <span className="text-[#F23E4D] font-black tracking-wider uppercase text-[15px] mr-1">
                  MOIBI TUNDE
                </span>{" "}
                is the elite, highly profitable trading analyst leading the market execution strategy here at T'Oluwayan FX Academy. Backed by years of strict institutional experience, real-time market data evaluation, and technical depth, he serves as the primary engine behind our renowned high-accuracy setup pipelines.
              </p>

              <p>
                As our principal market strategist, Moibi transforms volatile market complexities into clean, systemic trade setups. He is directly responsible for engineering and directing your <span className="text-neutral-900 font-bold">Free FX Signals</span>, providing our growing global community with live institutional-grade market access without the premium price barriers. 
              </p>

              <p>
                Whether you view the markets as <span className="text-neutral-900 font-bold">The Provider</span>, <span className="text-neutral-900 font-bold">The Hustler</span>, or <span className="text-neutral-900 font-bold">The Skeptic</span>, Moibi's real-time risk mitigation blueprints ensure your capital transitions safely beyond simple retail speculation. Through exact execution metrics and calculated targets, he bridges the gap between basic theory and verified, long-term capital profitability.
              </p>
            </div>
          </div>

          {/* Right Column: Platform Hero Asset/Media (5/12 width) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center lg:pt-12">
            {/* Sleek Framed Image Layout with thin double ring borders */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[24px] overflow-hidden bg-gray-50 shadow-xl ring-1 ring-neutral-200 border-4 border-[#F23E4D] transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
              <Image
                src="/Tee 2.jpeg"
                alt="Moibi Tunde - T'Oluwayan FX Profitability Analyst"
                fill
                priority
                className="object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.opacity = '0';
                  const p = e.currentTarget.parentElement;
                  if(p) p.className += " bg-gradient-to-br from-[#1E060A] to-[#4A0A14] flex items-center justify-center p-6 text-white text-center font-bold text-lg";
                  if(p) p.innerHTML = "Moibi Tunde - Trading Analyst";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}