"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

interface TradeScreenshot {
  id: number;
  imgUrl: string;
}

export default function TradeShowcase() {
  const studentTrades: TradeScreenshot[] = [
    {
      id: 1,
      imgUrl: "/t1.jpeg"
    },
    {
      id: 2,
      imgUrl: "/t2.jpeg"
    },
    {
      id: 3,
      imgUrl: "/t3.jpeg"
    },
    {
      id: 4,
      imgUrl: "/t5.png"
    },
    {
      id: 5,
      imgUrl: "/t4.jpeg"
    },
    {
      id: 6,
      imgUrl: "/t7.png"
    },
    {
      id: 7,
      imgUrl: "/t8.png"
    },
    {
      id: 8,
      imgUrl: "/t6.png"
    }
  ];

  return (
    <section className="w-full bg-neutral-950 py-8 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Compact */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full mb-2">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span className="text-[9px] font-bold text-emerald-400 tracking-wider uppercase">Verified</span>
          </div>
          <h2 className="text-4xl sm:text-3xl font-black text-white tracking-tight">
            Student Trades
          </h2>
          <p className="text-gray-400 text-[10px] mt-0.5">
            Real executions from mentorship channel
          </p>
        </div>

        {/* Grid - Smaller cards with prominent borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {studentTrades.map((trade) => (
            <div 
              key={trade.id} 
              className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Prominent Border - Always visible */}
              <div className="absolute inset-0 rounded-md border-2 border-[#F23E4D]/30 group-hover:border-[#F23E4D] transition-all duration-300 z-10 pointer-events-none" />
              
              {/* Inner border glow on hover */}
              <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                boxShadow: 'inset 0 0 0 1px rgba(242,62,77,0.3), 0 0 0 2px rgba(242,62,77,0.2)'
              }} />
              
              {/* Image Container - Smaller aspect ratio */}
              <div className="relative aspect-[4/5] w-full bg-neutral-950 overflow-hidden rounded-md">
                <Image
                  src={trade.imgUrl}
                  alt={`Trade screenshot ${trade.id}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.className += " flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950";
                      parent.innerHTML = `
                        <div class="text-center p-2">
                          <div class="w-8 h-8 mx-auto rounded-full border border-dashed border-neutral-700 flex items-center justify-center mb-1">
                            <span class="text-neutral-600 text-[8px] font-bold">FX</span>
                          </div>
                          <p class="text-[8px] font-bold text-white">Trade ${trade.id}</p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}