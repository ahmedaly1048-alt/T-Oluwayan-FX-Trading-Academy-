import React from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="bg-white max-w-md w-full rounded-2xl border border-gray-200/80 shadow-xl shadow-neutral-200/50 p-8 text-center">
        <div className="flex justify-center mb-5">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 stroke-[1.5]" />
        </div>

        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Payment Successful!
        </h1>

        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
          Thank you for your payment. Your mentorship enrollment has been processed, and your portal access will be activated shortly.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-5 py-3 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-colors shadow-md"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}