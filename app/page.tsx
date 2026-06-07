"use client";

import { MessageSquareText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PlatformJourney from "./components/PlatformJourney";
import FeaturesSection from "./components/FeaturesSection";
import CurriculumSection from "./components/CurriculumSection";
import PricingPlans from "./components/PricingPlans";
import MoreReviewsSection from "./components/MoreReviewsSection";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MeetThePlatform from "./components/MeetThePlatform";
import PlatformValue from "./components/PlatformValue";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsBanner from "./components/StatsBanner";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import TradeShowcase from "./components/TradeShowcase";
import MentorMessage from "./components/MentorMessage";

export default function Home() {
  return (
    <>
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Width of the scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        /* Track of the scrollbar - White background */
        ::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 10px;
        }

        /* Handle of the scrollbar */
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #F23E4D, #d63240);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #ff5a6e, #e83a4a);
          cursor: pointer;
        }

        /* Corner of the scrollbar */
        ::-webkit-scrollbar-corner {
          background: #f5f5f5;
        }

        /* Firefox scrollbar styling - White track */
        * {
          scrollbar-width: thin;
          scrollbar-color: #F23E4D #f5f5f5;
        }

        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }

        /* Optional: Add a subtle glow effect when scrolling */
        ::-webkit-scrollbar-thumb:active {
          background: linear-gradient(135deg, #ff6b7e, #f23e4d);
          box-shadow: 0 0 5px rgba(242, 62, 77, 0.3);
        }
      `}</style>

      <div className="w-full min-h-screen bg-white font-sans antialiased selection:bg-[#FFF0F1] selection:text-[#F23E4D]">
        <Navbar />

        <main className="w-full flex flex-col">

          <Hero />

          <StatsBanner />

          <MeetThePlatform />

          <PlatformValue />
          
          {/* Block 1: The Platform Journey & Team Origin Section */}
          <PlatformJourney />

          {/* Block 2: Academy Features & Offerings Breakdown */}
          <FeaturesSection />

          <TradeShowcase />

          {/* Block 3: Downloadable Learning Curriculum & Timetables */}
          <CurriculumSection />

          {/* Block 4: Mentorship Pricing & The Client Toolkit Offer (₦10,500 Markdown) */}
          <PricingPlans />

          <MentorMessage />

          <FAQ />

          <TestimonialsSection />

          {/* Block 5: Student Trust Metrics, External Reviews, and Final Asymmetric Registration CTA */}
          <MoreReviewsSection />

        </main>

        <Footer/>

        {/* Premium Floating WhatsApp Dynamic Action Hub */}
        <a
          href="https://wa.me/YOUR_PHONE_NUMBER" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with T'Oluwayan FX on WhatsApp"
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-2xl ring-4 ring-white"
        >
          {/* Ambient Pulsing Radar Ring */}
          <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0 transition-opacity duration-300" />
          
          {/* Sleek Tooltip Label - Slides outward cleanly on desktop hover */}
          <span className="absolute right-16 bg-neutral-900 text-white text-xs font-bold tracking-wide px-3 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl border border-neutral-800 flex items-center gap-1.5">
            <MessageSquareText className="w-3.5 h-3.5 text-[#25D366]" />
            Chat with an Expert
          </span>

          {/* Professional WhatsApp Icon from react-icons */}
          <FaWhatsapp className="w-7 h-7 text-white drop-shadow-[0_1.5px_1px_rgba(0,0,0,0.12)]" />
        </a>

      </div>
    </>
  );
}