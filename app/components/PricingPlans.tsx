"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CreditCard, ShieldCheck, HelpCircle, Check, ShoppingBag, X } from "lucide-react";

export default function PricingPlans() {
  // Modal tracking state machine
  const [selectedPlanIdx, setSelectedPlanIdx] = useState<number | null>(null);

  const plans = [
    {
      title: "TOOLKIT OFFER",
      price: "₦10,500",
      originalPrice: "₦15,000",
      tag: "POPULAR CHOICE",
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
      paystackUrl: "https://paystack.com/pay/toluwayan-toolkit"
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
      paystackUrl: "https://paystack.com/pay/toluwayan-3months"
    },
    {
      title: "6 MONTHS PLAN",
      price: "₦235,000",
      tag: "BEST VALUE",
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
      paystackUrl: "https://paystack.com/pay/toluwayan-6months"
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
      paystackUrl: "https://paystack.com/pay/toluwayan-yearly"
    }
  ];

  // Freeze primary body document layout scrolling when modal overlay mounts active
  useEffect(() => {
    if (selectedPlanIdx !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPlanIdx]);

  const activePlan = selectedPlanIdx !== null ? plans[selectedPlanIdx] : null;

  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block Section */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex-shrink-0 text-[#F23E4D] w-12 h-12 mt-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2s.5 2 1.5 4c1 2 2.5 3.5 4.5 4.5 2 1 4 1.5 4 1.5s-2 .5-4 1.5c-2 1-3.5 2.5-4.5 4.5-1 2-1.5 4-1.5 4s-.5-2-1.5-4c-1-2-2.5-3.5-4.5-4.5-2-1-4-1.5-4-1.5s2-.5 4-1.5c2-1 3.5-2.5 4.5-4.51-2 1.5-4 1.5-4z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-2">
              Our Mentorship <span className="font-black text-black">Plans</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-medium">
              Click <span className="text-[#F23E4D] font-bold">Buy Now</span> on any plan to securely review and confirm your checkout layout.
            </p>
          </div>
        </div>

        {/* 4-Column Card Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setSelectedPlanIdx(index)}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer border hover:border-neutral-400 hover:shadow-xl
                ${plan.isDark ? "bg-gradient-to-br from-[#1E060A] to-[#2a0a10] border-[#3a1515] text-white" : "bg-white border-gray-200 text-gray-900"}
                ${plan.isPopular ? "bg-[#FFF0F1] border-red-200" : ""}
              `}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-[#F23E4D] text-white px-3.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-md">
                    {plan.tag}
                  </div>
                </div>
              )}

              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="text-[11px] font-black tracking-widest text-gray-400 uppercase mb-3 mt-2">
                    {plan.title}
                  </div>

                  <div className="flex flex-col mb-4">
                    {plan.originalPrice && (
                      <span className="text-xs text-gray-400 line-through font-bold mb-0.5">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-black text-[#F23E4D] tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  <div className={`w-full h-px my-4 ${plan.isDark ? "bg-neutral-800" : "bg-gray-100"}`} />

                  <h4 className={`text-xs font-black uppercase tracking-wide mb-4 ${plan.isDark ? "text-gray-200" : "text-black"}`}>
                    {plan.subtitle}
                  </h4>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[13px] leading-tight">
                        <Check className="w-3.5 h-3.5 text-[#F23E4D] mr-2 mt-0.5 flex-shrink-0 stroke-[3]" />
                        <span className={plan.isDark ? "text-gray-300" : "text-gray-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlanIdx(index);
                  }}
                  className="w-full py-4 bg-[#F23E4D] hover:bg-[#d63240] text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* PAYMENT CONFIRMATION PORTAL MODAL OVERLAY MASK */}
        {/* ======================================================== */}
        {activePlan && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/80 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedPlanIdx(null)} // Click outside window container context box to dismiss modal
          >
            <div 
              className="bg-neutral-900 text-white w-full max-w-2xl rounded-3xl border border-neutral-800 shadow-2xl relative overflow-hidden animate-scaleUp max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()} // Stop click bubbling out to container overlay closer trigger
            >
              {/* Absolutized Top Dismiss Target Button */}
              <button
                onClick={() => setSelectedPlanIdx(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors z-30"
                aria-label="Dismiss Modal Window"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F23E4D]/10 rounded-full blur-[70px] pointer-events-none" />

              {/* Scrollable Modal Box Layout Body context area content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Header Phase Marker */}
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 bg-[#F23E4D]/10 border border-[#F23E4D]/20 px-3 py-1 rounded-md text-[#F23E4D] text-[10px] font-black tracking-widest uppercase">
                    Step 1: Confirm Your Selection
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    Review Your Purchase Details
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Please look over your chosen package parameters below before proceeding to the checkout validation terminal.
                  </p>
                </div>

                {/* Info Block Structure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-950 p-5 rounded-2xl border border-neutral-800">
                  <div>
                    <span className="text-neutral-500 text-[10px] font-black uppercase tracking-wider block">Course Track Selected</span>
                    <span className="text-lg font-black text-white block mt-0.5">{activePlan.title}</span>
                  </div>
                  <div className="sm:border-l sm:border-neutral-800 sm:pl-5 mt-3 sm:mt-0">
                    <span className="text-neutral-500 text-[10px] font-black uppercase tracking-wider block">Total Payable Fee</span>
                    <span className="text-2xl font-black text-emerald-400 block mt-0.5">{activePlan.price}</span>
                  </div>
                </div>

                {/* Step 2 Execution Block */}
                <div className="space-y-3.5 pt-2">
                  <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md text-blue-400 text-[10px] font-black tracking-widest uppercase">
                    Step 2: Initialize Paystack Gateway
                  </div>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    By clicking **"Confirm & Pay Now"** below, you will launch the secure, official Paystack portal link matching your selection. There you can pay seamlessly via **Card, Direct App Transfer, or USSD code**.
                  </p>
                </div>

                {/* Live Functional Link Anchor */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href={activePlan.paystackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4.5 bg-[#F23E4D] hover:bg-[#d63240] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-red-950/30 transform active:scale-[0.99]"
                  >
                    <CreditCard className="w-4 h-4" />
                    Confirm & Pay Now
                  </a>
                  
                  <div className="flex items-center justify-center gap-1.5 opacity-50 text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold tracking-tight uppercase">
                      PCI-DSS Compliant Encryption Standard Processing
                    </span>
                  </div>
                </div>

              </div>

              {/* Sticky Fixed Modal Window System Footer Grid Bar */}
              <div className="bg-neutral-950/80 p-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 mt-auto">
                <p className="text-center sm:text-left leading-normal max-w-md">
                  💡 <strong>Layman Note:</strong> Once payment succeeds inside Paystack, your course orientation file updates are triggered and dispatched automatically to your billing email window inbox immediately.
                </p>
                <div className="flex items-center gap-1 text-neutral-500 hover:text-white transition-colors flex-shrink-0">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <Link href="/support" onClick={() => setSelectedPlanIdx(null)}>Need Help?</Link>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}