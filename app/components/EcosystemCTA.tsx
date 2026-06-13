"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Radio, ShieldCheck } from "lucide-react";

export default function EcosystemCTA() {
  const [memberCount, setMemberCount] = useState(14240);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemberCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#030508] py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-neutral-900/40">
      
      {/* Precision Ambient Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-neutral-900/60 border border-neutral-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-medium text-neutral-400 tracking-widest uppercase flex items-center gap-1">
              <Radio className="w-3 h-3 text-neutral-500" /> System Broadcast
            </span>
          </div>

          <div className="text-[#F23E4D] text-xs font-black tracking-[0.25em] uppercase bg-red-500/[0.03] border border-red-500/10 px-4 py-1.5 rounded-md shadow-sm">
            Join Our Trading Community Below
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-light text-neutral-400 tracking-tight pt-2">
            Connect to the <span className="font-semibold text-white">Execution Network</span>
          </h2>
        </div>

        {/* Premium Geometric Choice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* OPTION 1: TELEGRAM PUBLIC HUB */}
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Ft.me%2Fearnlikepro26%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn7FrAxMWPM9LmFuwBi8d8Q7eA_fZXXKVxJcscmtLhCDlzcBlmaE35s-wGd3I_aem_WsZWxmXrwtXtVM_QWlkhSA&e=AUAWpbxyNQeGfKWnOC0bVyePAuTgjTT8QVJwgxOrfmdzO8evq9IxrnOlyXOUWHxHxfqhSw8CPzYJj4p-5Lj7fv38J00A2uxZh3RD4VdvoVwpXIjwHoKF75wJAySLr-lAfo3OVxI"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl bg-[#090D14] p-8 border border-neutral-800/80 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
          >
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="space-y-6">
              {/* Premium native minimal Telegram branding vector */}
              <div className="text-blue-400 transition-transform duration-300 group-hover:scale-105">
                <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 tracking-tight">
                  Telegram Signal Hub
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <div className="w-6 h-0.5 bg-blue-500/30 rounded transition-all group-hover:w-12" />
                <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm pt-1">
                  Daily live order-flow logic patterns, daily bias streams, and structural template execution blueprints.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-neutral-900/60 flex items-center justify-between text-[11px]">
              <span className="text-neutral-500 font-light">Ecosystem Base Channel</span>
              <span className="text-blue-400 font-mono tracking-tight bg-blue-500/[0.04] px-2.5 py-0.5 rounded border border-blue-500/10 font-bold">
                {memberCount.toLocaleString()} Members
              </span>
            </div>
          </a>

          {/* OPTION 2: EXNESS BROKER ENVIRONMENT */}
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fone.exnessonelink.com%2Fa%2Fc_7ikhmuqp8l%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGndGBJvKZPrWJAtCLm-lbDWEUJ2M2bE89HLpnaWNT8rkmlGyZC5YDwi3Z9mAg_aem_rHMUQqPpob6HsfLdqW_TFA&e=AUD1hoMSwaR-HdBIUKUXrbPBCp3gPYSNtcUFPI13s25xQ8bYNv045WtY0EgNuZ6mAA0lAiZkdj9h5RmvvwfuNmhzYuWtjM8mv1ujswhEZeIDfVWRfgLftfGtrWHFq4xfCCzvqI4"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl bg-[#090D14] p-8 border border-neutral-800/80 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 hover:border-amber-500/20 hover:shadow-[0_0_40px_rgba(245,158,11,0.04)]"
          >
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="space-y-6">
              {/* Premium official corporate Exness infinity-rings logo mapping */}
              <div className="text-amber-400 transition-transform duration-300 group-hover:scale-105">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  {/* Left branding ring ring matrix */}
                  <circle cx="8.5" cy="12" r="4.5" />
                  {/* Right branding ring matrix */}
                  <circle cx="15.5" cy="12" r="4.5" />
                  {/* Core geometric overlap structural link bridge */}
                  <path d="M12 8.5 c 1 1, 2 2.5, 0 5" strokeLinecap="round" />
                </svg>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 tracking-tight">
                  Exness Terminal Portal
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <div className="w-6 h-0.5 bg-amber-500/20 rounded transition-all group-hover:w-12" />
                <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm pt-1">
                  Register your trading identity account profile through our direct low-spread institutional routing terminal link.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-neutral-900/60 flex items-center justify-between text-[11px]">
              <span className="text-neutral-500 font-light">Execution Infrastructure</span>
              <span className="text-amber-400 font-mono tracking-tight bg-amber-500/[0.02] px-2.5 py-0.5 rounded border border-amber-500/10 font-bold">
                Raw Spreads
              </span>
            </div>
          </a>

        </div>

        {/* Minimal Safeguard Footer */}
        <div className="mt-12 flex items-center justify-center gap-1.5 text-[10px] font-medium tracking-wide text-neutral-600 uppercase">
          <ShieldCheck className="w-3.5 h-3.5 text-neutral-700 flex-shrink-0" />
          <span>Official Verified Channels Only • Safeguard Account Credentials</span>
        </div>

      </div>
    </section>
  );
}