"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, ShieldCheck, Award, Flame, ArrowRight, MousePointerClick } from "lucide-react";

export default function MentorMessage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false); // Track first play to remove the custom placeholder

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    
    // Once the student clicks the placeholder once, we remove it permanently
    if (!hasPlayedOnce) {
      setHasPlayedOnce(true);
    }

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch((err) => console.log("Playback interrupted:", err));
      setIsPlaying(true);
    }
  };

  const handleUnmuteExplicitly = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering play/pause cycle toggle
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    setIsMuted(false);
  };

  return (
    <section className="w-full bg-[#070B12] py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 relative overflow-hidden">
      {/* Visual Background Glow Modifiers */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#F23E4D]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authoritative Copy & Direct Manifestos (5/12 width) */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#F23E4D]/10 border border-[#F23E4D]/20 px-3 py-1 rounded-md">
              <Flame className="w-3.5 h-3.5 text-[#F23E4D]" />
              <span className="text-[11px] font-black text-[#F23E4D] tracking-wider uppercase">Direct From Desk</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              What Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-neutral-400">Chief Mentor</span> Says
            </h2>

            <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed tracking-wide">
              <p className="border-l-2 border-[#F23E4D] pl-4 italic text-neutral-200 bg-white/[0.02] py-3 pr-2 rounded-r-lg">
                "90% of retail traders lose capital not because they lack passion, but because they are executing outdated retail strategies designed to feed liquidity to corporate desks. We rewrite that entire approach."
              </p>
              <p>
                In this presentation blueprint, our lead framework strategist breaks down the exact operational roadmap used to guide retail students into consistent independent execution.
              </p>
              <p className="font-medium text-neutral-300">
                You are strictly advised to review this brief layout presentation in its entirety before subscribing to any active program channel.
              </p>
            </div>

            {/* Strategic Value Proposition Badges */}
            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-neutral-800/60">
              <div className="flex items-start space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">No Fluff</h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Raw execution metrics.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Award className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Proven Edge</h4>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Institutional order logic.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Attention Grabber Custom Interactive Media Frame (7/12 width) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div 
              onClick={handlePlayToggle}
              className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl group cursor-pointer ring-4 ring-neutral-900 transition-all duration-300 hover:border-neutral-700"
            >
              
              {/* HTML5 Cinematic Video Media Tag — Poster Image attribute removed */}
              <video
                ref={videoRef}
                src="/menote.mp4" // Swap this with your actual local .mp4 asset target path
                preload="metadata"
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover relative z-10"
              />

              {/* STYLIZED PLACEHOLDER OVERLAY (VISIBLE ONLY UNTIL FIRST PLAY) */}
              {!hasPlayedOnce && (
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                  
                  {/* Subtle radiating background circles */}
                  <div className="absolute w-[80%] h-[80%] rounded-full border border-neutral-800 pointer-events-none" />
                  <div className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-neutral-800/60 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Pulsing Arrow Action Element */}
                    <div className="w-20 h-20 rounded-full bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/60 flex items-center justify-center mb-6 shadow-xl relative group-hover:scale-105 transition-transform duration-300">
                      <span className="absolute inset-0 rounded-full bg-[#F23E4D] opacity-30 animate-ping" />
                      <ArrowRight className="w-8 h-8 text-[#F23E4D]" />
                    </div>

                    <h4 className="text-lg font-black text-white uppercase tracking-wider leading-tight drop-shadow-lg">
                      Academy Briefing
                    </h4>
                    <p className="text-neutral-400 text-xs mt-1 leading-relaxed max-w-[280px]">
                      Mandatory viewing before program enrollment channel access
                    </p>

                    {/* Explicit "Click Here" interaction prompt strip */}
                    <div className="mt-8 inline-flex items-center space-x-2.5 bg-[#F23E4D] text-white px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg shadow-red-950/20 group-hover:bg-[#d63240]">
                      <MousePointerClick className="w-4 h-4 fill-white animate-bounce" />
                      <span>Click to Stream Manifesto</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Floating Interaction Feedback Button (Visible when video is playing/interacted) */}
              {hasPlayedOnce && (
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className={`w-16 h-16 rounded-full bg-[#F23E4D] flex items-center justify-center shadow-xl shadow-red-950/50 transform group-hover:scale-110 transition-all duration-300 pointer-events-auto ${
                    isPlaying ? "opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm" : "opacity-100"
                  }`}>
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white fill-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    )}
                  </div>
                </div>
              )}

              {/* Dynamic Warning Unmute Strips For First Time Viewers */}
              {isPlaying && isMuted && (
                <button
                  onClick={handleUnmuteExplicitly}
                  className="absolute top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center space-x-2 bg-[#F23E4D] text-white px-4 py-2 rounded-full shadow-lg text-xs font-black tracking-widest uppercase border border-red-400 transform transition-transform hover:scale-105"
                >
                  <Volume2 className="w-4 h-4 fill-white animate-pulse" />
                  <span>Tap to Unmute</span>
                </button>
              )}

              {/* Bottom Custom Playback Feedback Bar Overlay */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-neutral-800 z-20">
                <div 
                  className={`h-full bg-gradient-to-r from-[#F23E4D] to-blue-500 transition-all ${
                    isPlaying ? "w-full duration-[60s] ease-linear" : "w-0"
                  }`} 
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}