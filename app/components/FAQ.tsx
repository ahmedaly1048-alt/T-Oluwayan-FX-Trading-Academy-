"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Can I learn all of these within the training time frame?",
      answer: "Yes. Our comprehensive curriculum engineered by Moibi Tunde is structured into precise, logical building blocks that compress years of institutional knowledge into digestible phases, ensuring you grasp core and advanced frameworks efficiently."
    },
    {
      question: "Can I pay at the venue?",
      answer: "All registrations and seat allocations must be secured online via our payment portals prior to the training date to allow our management team to provision your physical or digital dashboard resources."
    },
    {
      question: "Are there any additional fees or expenses?",
      answer: "No, there are no hidden costs. Your subscription fee covers your full course access, resource materials, and continuous analytical updates inside the mentorship hub."
    },
    {
      question: "Can I get a discount on the training fee?",
      answer: "Our pricing structure is systematically optimized to reflect real-time value, premium analytics tools, and live training sessions. Promotional discounts are occasionally announced via our official Telegram community hub."
    },
    {
      question: "Can I pay in installments?",
      answer: "Installment options may be accessible depending on the specific tier chosen. Please connect directly with our active support representative via our WhatsApp link to evaluate your enrollment matrix."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading Module */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight relative pb-4 inline-block">
            Frequently Asked Questions
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#F23E4D] rounded-full" />
          </h2>
        </div>

        {/* Accordion Node Stack - Full Width */}
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    {/* Custom geometric indicator */}
                    <span className={`w-1.5 h-3 bg-[#F23E4D] transition-transform duration-200 rounded-sm block flex-shrink-0 ${isOpen ? "rotate-90" : ""}`} />
                    <span className="text-sm sm:text-base font-bold text-neutral-800 group-hover:text-[#F23E4D] transition-colors duration-150 tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 text-neutral-400 group-hover:text-[#F23E4D] transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180 text-[#F23E4D]" : ""}`} 
                  />
                </button>
                
                {/* Collapsible Content Area */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden text-neutral-600 text-sm sm:text-[15px] leading-relaxed pl-4.5 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3 pb-2" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 tracking-wide text-justify sm:text-left">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}