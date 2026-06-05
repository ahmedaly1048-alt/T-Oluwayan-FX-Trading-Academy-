"use client";

import Link from "next/link";

export default function FeaturesSection() {
  const cards = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Nodes/Community Style Icon */}
          <circle cx="12" cy="5" r="2.5" fill="#3B82F6" />
          <circle cx="5" cy="12" r="2.5" fill="#EF4444" />
          <circle cx="19" cy="12" r="2.5" fill="#10B981" />
          <circle cx="12" cy="19" r="2.5" fill="#F59E0B" />
          <path d="M12 7.5v9M7.5 12h9M6.8 6.8l10.4 10.4M6.8 17.2L17.2 6.8" stroke="#9CA3AF" />
        </svg>
      ),
      title: "A vast community of awesome Fx traders.",
      description: "We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free.",
      btnText: "Join our community",
      href: "/community",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Forex Whiteboard/Presentation Icon */}
          <rect x="3" y="3" width="18" height="13" rx="1" stroke="#111827" strokeWidth="2" />
          <path d="M9 16v4M15 16v4M6 20h12" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          <text x="6" y="11" fill="#111827" fontSize="5" fontWeight="900" fontFamily="sans-serif">FOREX</text>
        </svg>
      ),
      title: "Forex enlightenment",
      description: "We provide a robust curriculum that covers everything from forex basics to advanced trading strategies. Our aim is to equip you with the knowledge and skills you need to thrive in the forex market.",
      btnText: "Enroll now and get started",
      href: "/enroll",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Trading Candlestick Monitor Icon */}
          <rect x="2" y="3" width="20" height="13" rx="2" stroke="#06B6D4" strokeWidth="2" />
          <path d="M12 16v4M8 20h8" stroke="#111827" strokeWidth="2" />
          <path d="M6 8h2M10 6h2M16 10h2" stroke="#EF4444" strokeWidth="2" />
          <path d="M7 5v8M11 4v10M17 7v6" stroke="#10B981" strokeWidth="1.5" />
        </svg>
      ),
      title: "Live trading sessions with professionals",
      description: "Our free live trading session on YouTube every Monday 1:00 PM GMT+1 was created to help traders improve their trading and be consistently profitable.",
      btnText: "Enroll now and join waitlist",
      href: "/waitlist",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* One-on-one Tutors Icon */}
          <circle cx="8" cy="8" r="3" fill="#3B82F6" />
          <path d="M2 18a6 6 0 0112 0H2z" fill="#3B82F6" />
          <circle cx="16" cy="11" r="2" fill="#60A5FA" />
          <path d="M12 18a4 4 0 018 0h-8z" fill="#60A5FA" />
          <path d="M9 3h4v2H9z" fill="#F59E0B" />
        </svg>
      ),
      title: "One-on-one mentorship calls",
      description: "Book intensive one-on-one meetings with our experienced tutors at FirepipsFX academy and get access to a private live session to learn and gain insights.",
      btnText: "Book a session",
      href: "/book",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-start space-x-4 mb-16">
          {/* Red Analytics Heading Icon from image_ed8942.png */}
          <div className="flex-shrink-0 text-[#F23E4D] w-14 h-14 pt-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              <rect x="15" y="5" width="2" height="4" fill="#F23E4D" stroke="none" />
              <rect x="10" y="9" width="2" height="4" fill="#F23E4D" stroke="none" />
            </svg>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
              Learning with <span className="font-black text-black">T'Oluwayan FX</span>
            </h2>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight leading-tight mt-1">
              <span className="font-black text-black">academy</span> offers you...
            </h2>
          </div>
        </div>

        {/* Features Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100 lg:border-t-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between pt-10 pb-8 px-6 lg:px-8 bg-white relative
                ${index !== 0 ? "lg:border-l lg:border-gray-200/70" : ""}
                border-b border-gray-100 md:border-b-0
              `}
            >
              <div className="space-y-6">
                {/* Feature Icon */}
                <div className="h-14 flex items-center justify-start">
                  {card.icon}
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-extrabold text-black tracking-tight leading-snug min-h-[56px]">
                  {card.title}
                </h3>

                {/* Feature Description */}
                <p className="text-[#4A4A4A] text-[14px] leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Asymmetric Light-Pink Styled Button Section */}
              <div className="pt-10">
                <Link
                  href={card.href}
                  className="inline-flex items-center justify-center px-5 py-3.5 bg-[#FFF0F1] text-[#F23E4D] text-[13px] font-bold tracking-wide rounded-tl-[16px] rounded-br-[16px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-[#FFE4E6] transition-colors duration-200"
                >
                  {card.btnText}
                  <svg
                    className="ml-2 w-3.5 h-3.5 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}