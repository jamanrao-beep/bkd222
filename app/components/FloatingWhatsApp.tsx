"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on Hover (appears to the left) */}
      <div className="pointer-events-none absolute right-full mr-3 hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        <div className="bg-gray-900/90 backdrop-blur text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap border border-white/10">
          Chat with us on WhatsApp
        </div>
      </div>

      <Link
        href="https://wa.me/919058571709"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle pulsating animation ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:opacity-75"></span>
        
        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-8 h-8 text-white drop-shadow-md" />
      </Link>
    </aside>
  );
}
