"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, CreditCard } from "lucide-react";

interface PaymentTier {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  paystackPlanLink: string; 
}

export default function PaymentSection() {
  const [selectedTier, setSelectedTier] = useState<string>("growth");

  const tiers: PaymentTier[] = [
    {
      id: "starter",
      name: "Standard Bootcamp",
      price: "₦150,000",
      billingPeriod: "One-time Access",
      description: "Perfect for beginners looking to master foundational institutional mechanics and risk structures.",
      features: [
        "Access to basic 40+ curriculum modules",
        "Live bi-weekly market sync sessions",
        "Access to private Telegram group",
        "Standard indicators toolkit access",
        "Email support channel desk"
      ],
      paystackPlanLink: "https://paystack.com/pay/your-starter-link" 
    },
    {
      id: "growth",
      name: "Elite Mentorship",
      price: "₦350,000",
      billingPeriod: "Full Academic Cycle",
      description: "Our signature network experience. Advanced order flow alignment, setups mapping, and deep live access.",
      features: [
        "Full access to all 80+ curriculum items",
        "Daily London/NY live trading room stream",
        "Direct trade setups channel access",
        "Moibi Tunde's personalized review loops",
        "Priority WhatsApp support hub lines",
        "Exclusive physical meetups invitation"
      ],
      paystackPlanLink: "https://paystack.com/pay/your-elite-link" 
    }
  ];

  return (
    <section className="w-full bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Select Your Mentorship Plan
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Click on a plan card to select it, then click the confirmation button to complete your secure payment via Paystack.
          </p>
        </div>

        {/* 2-Column Clean Selection Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-10">
          {tiers.map((tier) => {
            const isSelected = selectedTier === tier.id;
            
            return (
              <div 
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 cursor-pointer bg-white border-2 ${
                  isSelected 
                    ? "border-[#F23E4D] shadow-md shadow-red-900/5" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div>
                  {/* Title & Radio Button Selection Row */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-black text-gray-900 tracking-tight">{tier.name}</h3>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected ? "border-[#F23E4D]" : "border-gray-300"
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#F23E4D]" />}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-5">
                    {tier.description}
                  </p>

                  {/* Pricing Frame */}
                  <div className="flex items-baseline gap-1 mb-6 pb-5 border-b border-gray-100">
                    <span className="text-3xl font-black text-gray-900 tracking-tight">{tier.price}</span>
                    <span className="text-xs text-gray-400 font-medium">/ {tier.billingPeriod}</span>
                  </div>

                  {/* Standardized Bullet Feature Matrix */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-3.5 h-3.5 text-[#F23E4D] mt-0.5 flex-shrink-0 stroke-[3]" />
                        <span className="text-gray-600 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* SINGLE CENTRALIZED CALL-TO-ACTION PORTAL FOOTER */}
        {(() => {
          const currentPlan = tiers.find((t) => t.id === selectedTier)!;
          
          return (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-2xl mx-auto text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black tracking-widest text-[#F23E4D] uppercase block">Selected Track</span>
                <h4 className="text-base font-bold text-gray-900">
                  {currentPlan.name} — <span className="text-emerald-600 font-black">{currentPlan.price}</span>
                </h4>
                <p className="text-[11px] text-gray-400 max-w-xs leading-normal">
                  Your payments are processed instantly with secure, automated onboarding via official Paystack links.
                </p>
              </div>

              <div className="w-full sm:w-auto flex-shrink-0">
                <a
                  href={currentPlan.paystackPlanLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F23E4D] hover:bg-[#d63240] text-white text-xs font-black tracking-widest uppercase rounded-xl transition-colors shadow-lg shadow-red-900/10"
                >
                  <CreditCard className="w-4 h-4" />
                  Confirm & Pay via Paystack
                </a>
                
                <div className="flex items-center justify-center gap-1 mt-2 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Secured & Encrypted Connection
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}