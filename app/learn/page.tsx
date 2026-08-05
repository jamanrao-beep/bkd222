"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Phone, Mail, ChevronRight, ArrowRight, ArrowUp, Calendar
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Learn() {
  const articles = [
    {
      date: "May 24, 2025",
      title: "Why Investing in Dehradun Plots Is Better Than Buying Flats in Dehradun",
      excerpt: "Buying an apartment might feel like the easier choice, but in 2026, Dehradun plots are proving to be the smarter...",
      image: "/480_sqyard_plot.png"
    },
    {
      date: "May 21, 2025",
      title: "Top 10 Emerging Areas to Buy Land in Dehradun",
      excerpt: "Dehradun's real estate map is shifting fast, and savvy investors are already looking beyond the city centre toward...",
      image: "/530_sqyard_plot.png"
    },
    {
      date: "May 18, 2025",
      title: "Complete Guide to Buying Residential Plots in Uttarakhand",
      excerpt: "Buying a residential plot in Uttarakhand can be a rewarding investment, provided you follow the right process...",
      image: "/181_sqyard_plot.png"
    },
    {
      date: "May 15, 2025",
      title: "Gated Township vs Open Plot: Which is Better?",
      excerpt: "Choosing between a plot inside a gated township and a standalone open plot is one of the most common dilemmas...",
      image: "/fun_valley_township.png"
    },
    {
      date: "May 10, 2025",
      title: "15 Things You Must Check Before Buying Land in Dehradun",
      excerpt: "Buying land is a significant decision, and Dehradun's growing market makes due diligence more important than...",
      image: "/home.jpeg"
    },
    {
      date: "May 07, 2025",
      title: "Why Laltappar-Majrigrant is Becoming Dehradun's Next Hotspot",
      excerpt: "Among Dehradun's emerging real estate pockets, Laltappar-Majrigrant is quickly building a reputation as the...",
      image: "/480_sqyard_plot.png"
    },
    {
      date: "May 05, 2025",
      title: "Farmhouse Land vs Residential Plots: Which Gives Better Returns?",
      excerpt: "Both farmhouse land and residential plots have carved out strong demand in Dehradun's real estate market, but the...",
      image: "/530_sqyard_plot.png"
    },
    {
      date: "May 02, 2025",
      title: "How to Finance Your Plot Purchase in Dehradun",
      excerpt: "Financing a plot purchase works differently from financing a ready home, and understanding your options...",
      image: "/181_sqyard_plot.png"
    },
    {
      date: "Apr 29, 2025",
      title: "Future Development Projects That Will Increase Land Prices in Dehradun",
      excerpt: "Dehradun's land prices are being shaped by a wave of infrastructure and development projects that are steadily...",
      image: "/fun_valley_township.png"
    },
    {
      date: "Apr 25, 2025",
      title: "Why Land is the Safest Long-Term Investment in Uttarakhand",
      excerpt: "When it comes to building long-term wealth, land continues to stand out as one of the most reliable investment...",
      image: "/home.jpeg"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-[#F7A300] selection:text-white overflow-x-hidden">
      {/* 1. Header (Navbar) */}
      <header className="absolute top-0 w-full z-50 bg-[#161616]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
             <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={220} height={70} className="h-12 w-auto object-contain" />
          </Link>
          
          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">About Us</Link>
            <Link href="/properties" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Properties</Link>
            <Link href="/learn" className="text-white border-b-2 border-[#F7A300] pb-1 text-sm font-medium">Read &amp; Learn More</Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Contact Us</Link>
          </nav>
          
          {/* Enquire Now Button */}
          <Link href="/contact" className="bg-[#F7A300] text-black px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
            Enquire Now <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center mt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 top-[-80px]">
          <Image src="/home.jpeg" alt="Latest Articles" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center h-full pt-10">
          <div className="max-w-3xl text-white">
            <p className="text-gray-300 font-medium text-sm mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Read &amp; Learn More</span>
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Our Latest Articles
            </h1>
            <div className="w-16 h-1 bg-[#F7A300] mb-8"></div>
            <p className="text-gray-200 text-[15px] max-w-xl leading-relaxed font-medium">
              Expert insights, market trends, investment guides and everything you need to make smarter real estate decisions in Dehradun.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Articles Grid Section */}
      <section className="py-20 bg-[#f5f6f8] relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-48 w-full">
                  <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-gray-800 text-[11px] font-bold px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm">
                    <Calendar size={12} className="text-[#F7A300]" />
                    {article.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-[17px] text-gray-900 mb-3 leading-snug hover:text-[#F7A300] transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-gray-600 mb-6 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  <Link href="#" className="text-[#F7A300] text-[13px] font-bold flex items-center gap-1.5 hover:gap-2 transition-all mt-auto w-fit">
                    Read More <ArrowRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-[#0a0a0a] text-gray-400 pt-16 pb-8 text-[13px] relative">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={200} height={60} className="mb-6 h-12 w-auto object-contain" />
            <p className="mb-6 leading-relaxed text-xs pr-4">
              Premium land opportunities across Uttarakhand for a better tomorrow.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaFacebookF size={13} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaInstagram size={13} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaYoutube size={13} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaLinkedinIn size={13} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-xs uppercase">QUICK LINKS</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/" className="hover:text-[#F7A300] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#F7A300] transition-colors">About Us</Link></li>
              <li><Link href="/properties" className="hover:text-[#F7A300] transition-colors">Properties</Link></li>
              <li><Link href="/learn" className="hover:text-[#F7A300] transition-colors">Read &amp; Learn More</Link></li>
              <li><Link href="/contact" className="hover:text-[#F7A300] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-xs uppercase">IMPORTANT LINKS</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/privacy" className="hover:text-[#F7A300] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#F7A300] transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-xs uppercase">CONTACT US</h4>
            <ul className="space-y-3 mb-8 font-medium">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#F7A300]" />
                <span>+91 9756580000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#F7A300]" />
                <span>info@badrikedardevelopers.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#F7A300] shrink-0 mt-0.5" />
                <span>Dehradun, Uttarakhand, India</span>
              </li>
            </ul>
            <h4 className="text-white font-bold mb-4 tracking-wider text-xs uppercase">OUR LOCATION</h4>
            <div className="w-full h-24 bg-gray-800 rounded overflow-hidden relative border border-gray-700">
               <Image src="/home.jpeg" alt="Map Location" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin size={24} className="text-[#ea4335] drop-shadow-md" />
               </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-medium">
          <p className="text-center w-full">© 2024 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
        
        {/* Scroll to top button (from image) */}
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute bottom-6 right-6 bg-[#F7A300] text-black p-2.5 rounded hover:bg-[#e59800] transition-colors shadow-lg">
          <ArrowUp size={20} />
        </button>
      </footer>
    </main>
  );
}
