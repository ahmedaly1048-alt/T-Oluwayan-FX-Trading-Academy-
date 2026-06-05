"use client";

import Link from "next/link";

export default function PricingPlans() {
  const plans = [
    {
      title: "TOOLKIT OFFER",
      price: "₦10,500",
      originalPrice: "₦15,000",
      tag: "POPULAR",
      subtitle: "What you will get with this toolkit...",
      features: [
        "Trade Like the Pros Ebook",
        "Step-by-step execution guide",
        "Insider Secrets Revealed Toolkit",
        "Private community access link",
        "Direct download access link"
      ],
      isPopular: true,
      isDark: false,
      btnText: "Get the toolkit now"
    },
    {
      title: "3 MONTHS PLAN",
      price: "₦138,000",
      subtitle: "You will get everything in the toolkit plus...",
      features: [
        "Access to institutional video archive",
        "Weekly live trading lab sessions",
        "Direct access to master desks",
        "Standard platform signal channels",
        "Priority desk support hub"
      ],
      isPopular: false,
      isDark: false,
      btnText: "Choose this plan"
    },
    {
      title: "6 MONTHS PLAN",
      price: "₦235,000",
      tag: "POPULAR",
      subtitle: "You will get everything in the 3 months plus...",
      features: [
        "Advanced live trading sessions",
        "Daily live market analysis rooms",
        "Verified certificate of completion",
        "1-on-1 strategic portfolio review",
        "Top priority desk support routing"
      ],
      isPopular: false,
      isDark: false,
      btnText: "Choose this plan"
    },
    {
      title: "YEARLY PLAN",
      price: "₦415,000",
      tag: "TOP TIER",
      subtitle: "You will get everything in the 6 months plus...",
      features: [
        "Complete institutional trading system",
        "Private executive signals portal",
        "Virtual graduation & certification",
        "120 mins custom algorithmic setup",
        "Super Priority Instant Support access"
      ],
      isPopular: false,
      isDark: true,
      btnText: "Choose this plan"
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block Section */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex-shrink-0 text-[#F23E4D] w-14 h-14">
            {/* Custom SVG Rocket Icon matching image_ed2768.png */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2s.5 2 1.5 4c1 2 2.5 3.5 4.5 4.5 2 1 4 1.5 4 1.5s-2 .5-4 1.5c-2 1-3.5 2.5-4.5 4.5-1 2-1.5 4-1.5 4s-.5-2-1.5-4c-1-2-2.5-3.5-4.5-4.5-2-1-4-1.5-4-1.5s2-.5 4-1.5c2-1 3.5-2.5 4.5-4.51-2 1.5-4 1.5-4z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl  text-gray-900 tracking-tight mb-6">
              Our mentorship <span className="font-black text-black">plans</span>
            </h2>
          </div>
        </div>

        {/* Sub-description paragraph text */}
        <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-5xl mb-16">
          We offer online and physical mentorship classes in our platform branches across Nigeria. You can pay for our online mentorship by choosing a plan below to get started immediately. If you prefer our physical classes, you can start the enrollment verification process by consulting our support hub.
        </p>

        {/* 4-Column Responsive Grid Layout Container with equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border
                ${plan.isDark ? "bg-gradient-to-br from-[#1E060A] to-[#2a0a10] border-[#3a1515] text-white" : ""}
                ${plan.isPopular ? "bg-[#FFF0F1] border-red-200 shadow-md text-gray-900" : ""}
                ${!plan.isDark && !plan.isPopular ? "bg-white border-gray-100 shadow-sm text-gray-900" : ""}
              `}
            >
              {/* Popular Badge - ONLY on the first card (index === 0) */}
              {index === 0 && plan.tag === "POPULAR" && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Badge with arrow effect */}
                    <div className="bg-gradient-to-r from-[#F23E4D] to-[#d63240] text-white px-4 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span>POPULAR CHOICE</span>
                    </div>
                    {/* Small triangle pointer */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#d63240] rotate-45"></div>
                  </div>
                </div>
              )}

              <div className="flex flex-col h-full">
                {/* Upper Tag Category Label - Adjusted for better spacing */}
                <div className="text-[11px] font-black tracking-widest uppercase mb-4 min-h-[20px] mt-2">
                  {plan.tag && plan.tag !== "POPULAR" && (
                    <span className={`inline-block px-2 py-1 rounded-md ${plan.isDark ? "bg-[#F23E4D]/20 text-[#F23E4D]" : "bg-red-100 text-[#F23E4D]"}`}>
                      {plan.tag === "TOP TIER" ? "TOP TIER | YEARLY PLAN" : plan.tag}
                    </span>
                  )}
                  {!plan.tag && <span className="text-gray-400">{plan.title}</span>}
                </div>

                {/* Pricing Core Module Display */}
                <div className="flex flex-col mb-6">
                  {plan.originalPrice && (
                    <span className="text-sm text-gray-400 line-through font-bold mb-0.5">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className={`text-4xl sm:text-5xl font-black ${plan.isDark ? "text-[#F23E4D]" : "text-[#F23E4D]"}`}>
                    {plan.price}
                  </span>
                </div>

                {/* Divider Line */}
                <div className={`w-full h-px my-5 ${plan.isDark ? "bg-gray-700" : "bg-gray-100"}`} />

                {/* Cryptocurrency and Currency Acceptor Tags */}
                <div className="flex items-center space-x-2 mb-6">
                  <span className={`text-[11px] font-medium ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                    Payments available
                  </span>
                  <div className="flex space-x-1.5 items-center">
                    {/* Circle icon representations */}
                    {['₿', '$', '₦'].map((symbol) => (
                      <span key={symbol} className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold border
                        ${plan.isDark ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-gray-100 border-gray-200 text-gray-600"}
                      `}>
                        {symbol}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inside Category Checklist Headings */}
                <h4 className={`text-sm font-extrabold mb-4 ${plan.isDark ? "text-gray-200" : "text-black"}`}>
                  {plan.subtitle}
                </h4>

                {/* Features Checklists - This will grow to fill space equally */}
                <ul className="space-y-3.5 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[13px] leading-tight">
                      {/* Checkbox Icon */}
                      <svg className={`w-4 h-4 mr-2.5 mt-0.5 flex-shrink-0 ${plan.isDark ? "text-[#F23E4D]" : "text-[#F23E4D]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.isDark ? "text-gray-300" : "text-gray-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Red CTA Button Wrapper - Always at bottom */}
                <div className="mt-auto">
                  <Link
                    href={`/checkout?plan=${plan.title.toLowerCase().replace(/ /g, "-")}`}
                    className="group flex w-full items-center justify-center px-4 py-4 bg-[#F23E4D] text-white text-[13px] font-bold tracking-wide rounded-tl-[16px] rounded-br-[16px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-[#d63240] transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {plan.btnText}
                    <svg className="ml-1.5 w-3.5 h-3.5 stroke-current transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}