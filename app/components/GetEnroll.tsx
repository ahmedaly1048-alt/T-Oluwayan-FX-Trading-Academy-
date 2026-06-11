"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Flame, Users2 } from "lucide-react";

export default function GetEnroll() {
  const [selectedTier, setSelectedTier] = useState<"standard" | "pro">("pro");

  // Hardcoded blueprint core variables
  const seatsLeft = 7;
  
  return (
    <section
    id="enrollment-section" 
    className="w-full bg-[#05080E] py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-neutral-900/40">
      
      {/* High-Tier Ambient Background Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F23E4D]/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Typography Intro */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F23E4D]/10 border border-[#F23E4D]/20 px-3 py-1 rounded-md">
            <Flame className="w-3.5 h-3.5 text-[#F23E4D]" />
            <span className="text-[10px] font-black text-[#F23E4D] tracking-widest uppercase">System Open • Active Access</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Secure Your Operational Seat
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
            Initialize entry to the proprietary trading matrix. Select your training track configuration profile below to begin immediate routing.
          </p>
        </div>

        {/* Master Enrollment Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#090D14] rounded-3xl border border-neutral-800/80 overflow-hidden shadow-2xl">
          
          {/* LEFT PANEL: CHOOSE ACCOUNT FRAME WORK (7/12 Width) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-10">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">Step 01</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Select Program Configuration</h3>
              </div>

              {/* Toggle Selection Rows */}
              <div className="space-y-4">
                {/* TIER 1: STANDARD */}
                <div 
                  onClick={() => setSelectedTier("standard")}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    selectedTier === "standard" 
                      ? "bg-neutral-900 border-neutral-700 shadow-md" 
                      : "bg-transparent border-neutral-900/60 opacity-60 hover:opacity-90 hover:border-neutral-800"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedTier === "standard" ? "border-[#F23E4D]" : "border-neutral-700"
                    }`}>
                      {selectedTier === "standard" && <div className="w-2.5 h-2.5 rounded-full bg-[#F23E4D]" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Standard Core Blueprint</h4>
                      <p className="text-[11px] text-neutral-400 font-light mt-0.5">Structured video library access, fundamental metrics.</p>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-bold text-white">$199</span>
                    <span className="text-[10px] text-neutral-500 block">One-time fee</span>
                  </div>
                </div>

                {/* TIER 2: PRO (DEFAULT RECOMMENDED) */}
                <div 
                  onClick={() => setSelectedTier("pro")}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer relative flex items-center justify-between group ${
                    selectedTier === "pro" 
                      ? "bg-neutral-900 border-neutral-700 shadow-md" 
                      : "bg-transparent border-neutral-900/60 opacity-60 hover:opacity-90 hover:border-neutral-800"
                  }`}
                >
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded border border-blue-400/30">
                    Recommended Track
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedTier === "pro" ? "border-blue-500" : "border-neutral-700"
                    }`}>
                      {selectedTier === "pro" && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Institutional Pro Elite</h4>
                      <p className="text-[11px] text-neutral-400 font-light mt-0.5">Live streaming calls, direct channel alerts, orderflow data feed.</p>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-bold text-white">$349</span>
                    <span className="text-[10px] text-neutral-500 block">One-time fee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Live Security Banner */}
            <div className="pt-6 border-t border-neutral-900 flex flex-wrap gap-4 items-center justify-between text-neutral-500 text-[11px]">
              <span className="flex items-center gap-1.5 font-light">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Fully Secured 256-Bit Checkout Processing
              </span>
              <span className="flex items-center gap-1.5 font-mono text-neutral-400 bg-neutral-950 px-2.5 py-0.5 rounded border border-neutral-900">
                <Users2 className="w-3.5 h-3.5 text-blue-400" /> {seatsLeft} Slots Left This Batch
              </span>
            </div>
          </div>

          {/* RIGHT PANEL: SUMMARY & PRIMARY CTA DISPATCH (5/12 Width) */}
          <div className="lg:col-span-5 bg-[#0B101A] p-8 sm:p-12 border-l border-neutral-900 flex flex-col justify-between space-y-8 relative">
            {/* Corner Decorative Tech Grid accent overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">Step 02</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Ecosystem Inclusions</h3>
              </div>

              {/* Dynamic Feature List Breakdown based on selection state */}
              <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F23E4D] mt-0.5 flex-shrink-0" />
                  <span>Full structural layout roadmap architecture module library</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F23E4D] mt-0.5 flex-shrink-0" />
                  <span>Proprietary Institutional algorithm order flow playbook</span>
                </li>
                {selectedTier === "pro" && (
                  <>
                    <li className="flex items-start gap-2.5 text-neutral-200 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Private live trade streaming feed sync terminal access</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-neutral-200 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Direct phone alert signals channel profile connection</span>
                    </li>
                  </>
                )}
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F23E4D] mt-0.5 flex-shrink-0" />
                  <span>Lifetime baseline core server verification credentials</span>
                </li>
              </ul>
            </div>

            {/* Price Calculations Container Frame */}
            <div className="space-y-5 pt-6 border-t border-neutral-900 relative z-10">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-neutral-400 font-light">Total Commitment</span>
                <span className="text-3xl font-black text-white font-mono tracking-tight">
                  {selectedTier === "standard" ? "$199" : "$349"}
                </span>
              </div>

              {/* Core Execution Action Action Trigger Link Button */}
              <a
                href="https://your_checkout_gateway_link_here" // REPLACE WITH PAYSTACK/STRIPE/WHATSAPP REDIRECT URL
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-4 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl group/btn ${
                  selectedTier === "pro"
                    ? "bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-blue-950/40 hover:shadow-blue-500/10"
                    : "bg-gradient-to-r from-[#F23E4D] to-[#d63240] shadow-red-950/40 hover:shadow-red-500/10"
                }`}
              >
                <span>Initialize Vault Registration</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}