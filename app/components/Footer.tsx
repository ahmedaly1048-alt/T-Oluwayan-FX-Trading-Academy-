"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaTelegramPlane, 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaTiktok,
  FaMapMarkerAlt,
  FaArrowUp,
  FaChevronDown
} from "react-icons/fa";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission logic here
    console.log("Subscribed:", email);
  };

  return (
    <footer className="w-full bg-[#120203] text-gray-300 pt-16 pb-8 border-t border-red-950/40 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN MODULE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 pb-12 border-b border-red-950/30">
          
          {/* COLUMN 1: Newsletter / Megaphone Broadcast Area */}
          <div className="lg:col-span-4 lg:pr-12 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Brand Coral/Red Megaphone Icon Wrapper */}
              <div className="text-[#F23E4D]">
                <IoMegaphoneOutline className="w-14 h-14 transform -rotate-12" />
              </div>

              <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let's keep you <br /> informed!
              </h2>

              <p className="text-sm text-zinc-400 max-w-sm">
                Subscribe to our newsletter to receive updates from T'Oluwayan FX Academy
              </p>

              {/* Action Form Group */}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-sm pt-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to continue"
                    required
                    className="w-full bg-transparent border border-zinc-700 rounded-full py-3.5 px-6 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#F23E4D] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-zinc-400 text-zinc-900 font-bold text-sm rounded-tl-[18px] rounded-br-[18px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <FiSend className="w-4 h-4" />
                  Subscribe to our newsletter
                </button>
              </form>
            </div>
          </div>

          {/* COLUMN 2: T'Oluwayan FX Academy Navigation Links */}
          <div className="lg:col-span-4 lg:px-12 border-y lg:border-y-0 lg:border-x border-red-950/40 py-8 lg:py-0">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
              T'Oluwayan FX Academy
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/mentorship" className="hover:text-white transition-colors">Mentorship Plans</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <button className="flex items-center gap-1.5 hover:text-white transition-colors text-left">
                  <MdLocationOn className="w-4 h-4" />
                  Our locations 
                  <FaChevronDown className="w-3 h-3 mt-0.5" />
                </button>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">Access learning dashboard</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <FaArrowUp className="w-3 h-3" />
                  Back to the top
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Corporate Identity & Social Networks */}
          <div className="lg:col-span-4 lg:pl-12 flex flex-col justify-between space-y-12 lg:space-y-0">
            
            {/* Top Corporate Identity Card */}
            <div className="text-right lg:text-right flex flex-col items-end">
              <div className="relative w-32 h-10 mb-4">
                <Image
                  src="" // <-- Add your logo path here
                  alt="T'Oluwayan FX Logo"
                  fill
                  className="object-contain object-right"
                />
              </div>
              <h3 className="text-white font-bold text-sm tracking-wide mb-2">
                T'Oluwayan FX Global Limited
              </h3>
              <p className="text-xs text-zinc-400 max-w-xs leading-relaxed flex items-center gap-1 justify-end">
                <MdLocationOn className="w-3 h-3" />
                Lagos, Nigeria and West Africa.
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                +234xxxxxxxxxx
              </p>
            </div>

            {/* Bottom Networks & Compliance Area */}
            <div className="space-y-6 flex flex-col items-end w-full">
              <div className="text-right">
                <h4 className="text-white font-bold text-sm tracking-wide mb-4">
                  Connect with us on social media
                </h4>
                {/* Social Channels Network Grid */}
                <div className="flex items-center justify-end gap-3">
                  {/* Telegram */}
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-red-950/40 border border-red-900/20 flex items-center justify-center text-white hover:bg-[#F23E4D] hover:scale-110 transition-all duration-200"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane className="w-4 h-4" />
                  </a>
                  {/* WhatsApp */}
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-red-950/40 border border-red-900/20 flex items-center justify-center text-white hover:bg-[#25D366] hover:scale-110 transition-all duration-200"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                  {/* Instagram */}
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-red-950/40 border border-red-900/20 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#F56040] hover:scale-110 transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  {/* Facebook */}
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-red-950/40 border border-red-900/20 flex items-center justify-center text-white hover:bg-[#1877F2] hover:scale-110 transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  {/* X (Twitter) */}
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-red-950/40 border border-red-900/20 flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all duration-200"
                    aria-label="X (Twitter)"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  {/* TikTok */}
                  <a 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-red-950/40 border border-red-900/20 flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all duration-200"
                    aria-label="TikTok"
                  >
                    <FaTiktok className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Legal Outbound Navigation Nodes */}
              <div className="flex flex-col items-end space-y-2 text-xs font-semibold text-white">
                <Link href="/terms" className="flex items-center gap-1 hover:underline">
                  Terms and conditions 
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
                <Link href="/privacy" className="flex items-center gap-1 hover:underline">
                  Privacy Policy 
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              </div>

              <p className="text-xs text-zinc-500 pt-4">
                © 2026 T'Oluwayan FX Global Limited. All Rights Reserved
              </p>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Legal Framework Disclaimers */}
        <div className="pt-8 space-y-6 text-[11px] text-zinc-500 leading-relaxed text-justify font-mono tracking-tight">
          <p>
            <strong className="text-zinc-400 font-sans">DISCLAIMER:</strong> This legal disclaimer applies to the use of toluwayanfx.com and its related services. The information contained on this website is for purposes of education only. We are not authorized as a financial advisor but only as a training organization and so by viewing any material or using the information within this site you agree that this is general education material and you will not hold any person or entity responsible for loss or damages resulting from the content or general advice provided here by T'Oluwayan FX Academy. Decisions based on information contained herein are the sole responsibility of the visitor. Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading, and seek advice from an independent financial advisor if you have any doubts. Once again, The information contained on this website is for general information and educational purposes only.
          </p>
          <p>
            <strong className="text-zinc-400 font-sans">REFUND POLICY:</strong> Refund of mentorship fee is only valid within one week of subscription. Refund will not be processed if request is made after the first week that is after five (5) working days of subscription.
          </p>
        </div>

      </div>
    </footer>
  );
}