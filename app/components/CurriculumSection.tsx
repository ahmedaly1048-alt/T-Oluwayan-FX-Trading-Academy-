"use client";

import Link from "next/link";

export default function CurriculumSection() {
  const downloadActions = [
    {
      text: "Download timetable",
      href: "/downloads/timetable.pdf",
      isPrimary: true,
    },
    {
      text: "Beginners curriculum",
      href: "/downloads/beginners-curriculum.pdf",
      isPrimary: false,
    },
    {
      text: "Intermediate curriculum",
      href: "/downloads/intermediate-curriculum.pdf",
      isPrimary: false,
    },
    {
      text: "Advanced curriculum",
      href: "/downloads/advanced-curriculum.pdf",
      isPrimary: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Heading */}
        <h2 className="text-4xl sm:text-5xl font-black text-[#1a0508] tracking-tight mb-6">
          Our learning curriculum
        </h2>

        {/* Paragraph Description Copy */}
        <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-normal mb-12 max-w-7xl text-justify sm:text-left">
          Unlock the path to success with our comprehensive curriculum, designed to equip you with the skills and knowledge needed to excel in forex trading. Whether you're just starting out or looking to advance, our step-by-step modules cover everything from foundational concepts to advanced strategies. Take the first step toward mastering your future. Click the button below to download the curriculum now and begin your journey today!
        </p>

        {/* Interactive Download Buttons Grid Layout */}
        <div className="flex flex-wrap items-center gap-y-4">
          {downloadActions.map((action, index) => (
            <div key={index} className="flex items-center">
              
              {/* Individual Button Elements */}
              <Link
                href={action.href}
                className={`inline-flex items-center justify-center px-6 py-4.5 text-[14px] font-bold tracking-wide transition-all duration-200
                  ${
                    action.isPrimary
                      ? "bg-[#F23E4D] text-white hover:bg-[#d63240] rounded-tl-[18px] rounded-br-[18px] rounded-tr-[4px] rounded-bl-[4px] shadow-sm"
                      : "bg-[#FFF0F1] text-[#F23E4D] hover:bg-[#FFE4E6] rounded-tl-[18px] rounded-br-[18px] rounded-tr-[4px] rounded-bl-[4px]"
                  }
                `}
              >
                {action.text}
                {/* Custom Downward Arrow Vector matching image_ed2e8e.png */}
                <svg
                  className="ml-2 w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </Link>

              {/* Thin Vertical Dividers between buttons (Hidden on last item and on small mobile screens) */}
              {index !== downloadActions.length - 1 && (
                <div className="hidden sm:block h-10 w-[1px] bg-gray-300/70 mx-4" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}