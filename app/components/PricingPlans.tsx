"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CreditCard, ShieldCheck, HelpCircle, Check, ShoppingBag, X, Sparkles, Lock, ArrowRight } from "lucide-react";

interface Plan {
  title: string;
  price: string;
  originalPrice?: string;
  tag?: string;
  subtitle: string;
  features: string[];
  isPopular: boolean;
  isDark: boolean;
  paystackUrl: string;
}

export default function PricingPlans() {
  const [selectedPlanIdx, setSelectedPlanIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const plans: Plan[] = [
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
      isDark: false, // Changed to false to enforce unified light structure
      paystackUrl: "https://paystack.com/pay/toluwayan-yearly"
    }
  ];

  useEffect(() => {
    if (selectedPlanIdx !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPlanIdx]);

  const handlePayment = async (plan: Plan) => {
    setLoading(true);
    try {
      const numericalAmount = parseInt(plan.price.replace(/[^0-9]/g, ""), 10);
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "customer@example.com", 
          amount: numericalAmount,
          planId: plan.title,
        }),
      });

      const data = await response.json();
      if (data.status && data.data?.authorization_url) {
        window.location.href = data.data.authorization_url;
      } else {
        alert("Unable to initialize secure checkout portal.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong initializing transaction flow.");
    } finally {
      setLoading(false);
    }
  };

  const activePlan = selectedPlanIdx !== null ? plans[selectedPlanIdx] : null;

  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-4 sm:px-6 lg:px-8 text-gray-800 selection:bg-[#F23E4D]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Crisp Light Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] font-bold text-gray-500 tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F23E4D]" /> Accelerate Your Trading Edge
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Our Mentorship <span className="text-[#F23E4D]">Plans</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Choose a tier to scale your market comprehension. Secure, instantaneous deployment backed by automated delivery paths.
          </p>
        </div>

        {/* 4-Column Light Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setSelectedPlanIdx(index)}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer border bg-white shadow-sm hover:shadow-xl hover:border-gray-400 group
                ${plan.isPopular ? "border-[#F23E4D]/40 ring-4 ring-[#F23E4D]/5" : "border-gray-200/80"}
              `}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`px-4 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-md
                    ${plan.tag === "BEST VALUE" ? "bg-amber-500 text-black" : "bg-[#F23E4D] text-white"}`}>
                    {plan.tag}
                  </div>
                </div>
              )}

              <div className="flex flex-col h-full justify-between space-y-8">
                <div>
                  <div className="text-[10px] font-extrabold tracking-widest text-gray-400 uppercase">
                    {plan.title}
                  </div>

                  <div className="flex flex-col mt-4">
                    {plan.originalPrice && (
                      <span className="text-xs text-gray-400 line-through font-semibold mb-0.5">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-black text-gray-900 tracking-tight group-hover:text-[#F23E4D] transition-colors">
                      {plan.price}
                    </span>
                  </div>

                  <div className="w-full h-px bg-gray-100 my-5" />

                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700 mb-4 flex items-center gap-1.5">
                    {plan.subtitle}
                  </h4>

                  <ul className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[13px] leading-tight text-gray-600">
                        <Check className="w-4 h-4 text-[#F23E4D] mr-2.5 mt-0.5 flex-shrink-0 stroke-[2.5]" />
                        <span>{feature}</span>
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
                  className="w-full py-3.5 bg-gray-50 border border-gray-200 text-gray-800 text-xs font-black tracking-wider uppercase rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-[#F23E4D] group-hover:text-white group-hover:border-transparent"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* LIGHT SPLIT-PANEL MODAL OVERLAY */}
        {/* ======================================================== */}
        {activePlan && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm transition-all duration-300"
            onClick={() => setSelectedPlanIdx(null)}
          >
            <div 
              className="bg-white text-gray-900 w-full max-w-4xl rounded-[2.5rem] border border-gray-200 shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col md:flex-row transition-transform duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon Trigger */}
              <button
                onClick={() => setSelectedPlanIdx(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all z-50"
                aria-label="Dismiss Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* LEFT SIDE PANEL: Package Overview Summary */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 bg-gray-50 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-gray-200/80 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#F23E4D] uppercase block mb-1">Review Track</span>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">{activePlan.title}</h3>
                  </div>

                  <div className="space-y-3">
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">Included Privileges</span>
                    <ul className="space-y-2.5">
                      {activePlan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F23E4D] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-gray-300" />
                  <span>Need adjustment? Close this view to swap paths.</span>
                </div>
              </div>

              {/* RIGHT SIDE PANEL: Payment Secure Terminal */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto bg-white">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full text-emerald-600 text-[9px] font-extrabold tracking-widest uppercase">
                      <Lock className="w-3 h-3" /> Secure Gateway Connection
                    </div>
                    <h4 className="text-xl font-black text-gray-900 tracking-tight mt-3">Checkout Terminal</h4>
                    <p className="text-xs text-gray-500 mt-1">Transaction routes efficiently through integrated network routing matrices securely via Paystack.</p>
                  </div>

                  {/* Summary Pricing Block Container */}
                  <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wide block">Amount Due</span>
                      <span className="text-3xl font-black text-gray-900 block mt-0.5 tracking-tight">{activePlan.price}</span>
                    </div>
                    <div className="text-right text-[10px] font-bold text-gray-500 space-y-0.5">
                      <p>✓ Zero Hidden Costs</p>
                      <p>✓ Instant Access</p>
                    </div>
                  </div>

                  {/* Trigger Call to Action Button */}
                  <div className="space-y-3">
                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => handlePayment(activePlan)}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F23E4D] hover:bg-[#d63240] disabled:bg-gray-200 disabled:text-gray-400 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg shadow-red-500/10 group transform active:scale-[0.98]"
                    >
                      {loading ? (
                        <span className="animate-pulse">Opening Secure Link...</span>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4" />
                          Confirm & Launch Paystack
                          <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <div className="flex items-center justify-center gap-1.5 opacity-60 text-[10px] text-center text-gray-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="font-bold uppercase tracking-tight">Fully Encrypted Bank Grade Infrastructure Node</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 text-[11px] text-gray-400 leading-normal">
                  💡 <strong>Deployment Note:</strong> Upon automated confirmation clearances, matching verification parameters sync straight to your user account mailbox folder instantly.
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}