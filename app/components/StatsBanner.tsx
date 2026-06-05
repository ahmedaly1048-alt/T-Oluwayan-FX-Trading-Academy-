"use client";

export default function StatsBanner() {
  return (
    <section className="w-full relative z-20 bg-black">
      {/* 
        Grid Setup:
        - full width (w-full)
        - min-h-[200px] or h-auto ensures a comfortable vertical height block presence 
        - Clean layout dividing lines that match across breakpoints
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-b border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800 min-h-[100px] md:min-h-[160px]">
        
        {/* Block A: 100% Practical Training */}
        <div className="bg-neutral-950/80 backdrop-blur-md text-white flex flex-col sm:flex-row items-center justify-center p-8 text-center sm:text-left gap-5 group hover:bg-neutral-900/50 transition-colors h-full w-full">
          <div className="text-[#F23E4D] flex-shrink-0 transition-transform group-hover:scale-105">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">100% Practical</h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-bold uppercase tracking-wider">Training Centre</p>
          </div>
        </div>

        {/* Block B: 1000+ Testimonials (Theme-Matched Accent Center Piece) */}
        <div className="bg-[#F23E4D] text-white flex flex-col sm:flex-row items-center justify-center p-8 text-center sm:text-left gap-5 group shadow-xl h-full w-full">
          <div className="text-white flex-shrink-0 transition-transform group-hover:scale-105">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">1000+ Verified</h4>
            <p className="text-xs sm:text-sm text-red-100 font-bold uppercase tracking-wider">Client Testimonials</p>
          </div>
        </div>

        {/* Block C: Over 3,000 Students Trained */}
        <div className="bg-neutral-950/80 backdrop-blur-md text-white flex flex-col sm:flex-row items-center justify-center p-8 text-center sm:text-left gap-5 group hover:bg-neutral-900/50 transition-colors h-full w-full">
          <div className="text-[#F23E4D] flex-shrink-0 transition-transform group-hover:scale-105">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">Over 3,000+</h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-bold uppercase tracking-wider">Students Trained</p>
          </div>
        </div>

      </div>
    </section>
  );
}