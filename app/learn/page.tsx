"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { ArrowRight, MapPin, Phone, Mail, ArrowUp, Calendar } from "lucide-react";

export default function LearnPage() {
  const articles = [
    {
      title: "Why Investing in Dehradun Plots is Better Than Buying Flats in Dehradun",
      excerpt: "Buying an apartment might feel like the easier choice, but in 2026, Dehradun plots are proving to be the smarter...",
      date: "May 24, 2025",
      image: "/blog_1.jpg"
    },
    {
      title: "Top 10 Emerging Areas to Buy Land in Dehradun",
      excerpt: "Dehradun's real estate map is shifting fast, and savvy investors are already looking beyond the city centre toward...",
      date: "May 21, 2025",
      image: "/blog_2.jpg"
    },
    {
      title: "Complete Guide to Buying Residential Plots in Uttarakhand",
      excerpt: "Buying a residential plot in Uttarakhand can be a rewarding investment, provided you follow the right process...",
      date: "May 18, 2025",
      image: "/blog_3.jpg"
    },
    {
      title: "Gated Township vs Open Plot: Which is Better?",
      excerpt: "Choosing between a plot inside a gated township and a standalone open plot is one of the most common dilemmas...",
      date: "May 15, 2025",
      image: "/blog_4.jpg"
    },
    {
      title: "15 Things You Must Check Before Buying Land in Dehradun",
      excerpt: "Buying land is a significant decision, and Dehradun's growing market makes due diligence more important than...",
      date: "May 10, 2025",
      image: "/blog_5.jpg"
    },
    {
      title: "Why Laltappar-Majigrant is Becoming Dehradun's Next Hotspot",
      excerpt: "Among Dehradun's emerging real estate pockets, Laltappar-Majigrant is quickly building a reputation as the...",
      date: "May 07, 2025",
      image: "/blog_6.jpg"
    },
    {
      title: "Farmhouse Land vs Residential Plots: Which Gives Better Returns?",
      excerpt: "Both farmhouse land and residential plots have carved out strong demand in Dehradun's real estate market, but the...",
      date: "May 05, 2025",
      image: "/blog_7.jpg"
    },
    {
      title: "How to Finance Your Plot Purchase in Dehradun",
      excerpt: "Financing a plot purchase works differently from financing a ready home, and understanding your options...",
      date: "May 02, 2025",
      image: "/blog_8.jpg"
    },
    {
      title: "Future Development Projects That Will Increase Land Prices in Dehradun",
      excerpt: "Dehradun's land prices are being shaped by a wave of infrastructure and development projects that are steadily...",
      date: "Apr 29, 2025",
      image: "/blog_9.jpg"
    },
    {
      title: "Why Land is the Safest Long-Term Investment in Uttarakhand",
      excerpt: "When it comes to building long-term wealth, land continues to stand out as one of the most reliable investment...",
      date: "Apr 25, 2025",
      image: "/blog_10.jpg"
    }
  ];

  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen font-sans selection:bg-[#F7A300] selection:text-white">
      {/* 1. Header Navigation */}
      <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent border-b border-white/10">
        <Link href="/">
          <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={220} height={70} className="h-12 w-auto object-contain" priority />
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
          <Link href="/" className="text-gray-300 hover:text-[#F7A300] transition-colors">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-[#F7A300] transition-colors">About Us</Link>
          <Link href="/properties" className="text-gray-300 hover:text-[#F7A300] transition-colors">Properties</Link>
          <Link href="/learn" className="text-white border-b-2 border-[#F7A300] pb-1">Read &amp; Learn More</Link>
          <Link href="/contact" className="text-gray-300 hover:text-[#F7A300] transition-colors">Contact Us</Link>
        </div>
        <Link href="/contact" className="bg-[#F7A300] text-black px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
          Enquire Now <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[450px] overflow-hidden flex flex-col justify-end pb-[10vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 top-[-80px]">
          <Image src="/home.jpeg" alt="Latest Articles" fill sizes="(max-width: 768px) 100vw, 100vw" priority className="object-cover" />
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
                <div className="relative h-[200px] w-full p-2">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur text-gray-800 text-[11px] font-bold px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm">
                      <Calendar size={12} className="text-[#F7A300]" />
                      {article.date}
                    </div>
                  </div>
                </div>
                <div className="px-6 py-5 flex flex-col flex-grow">
                  <Link href={`/blogs/${index + 1}`}>
                    <h3 className="font-bold text-[17px] text-gray-900 mb-3 leading-snug hover:text-[#F7A300] transition-colors cursor-pointer pr-4">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-[13px] text-gray-600 mb-6 leading-relaxed flex-grow pr-4">
                    {article.excerpt}
                  </p>
                  <Link href={`/blogs/${index + 1}`} className="text-[#F7A300] text-[13px] font-bold flex items-center gap-1.5 hover:gap-2 transition-all mt-auto w-fit">
                    Read More <ArrowRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-[#0a0a0a] text-gray-400 pt-16 pb-8 px-6 text-[13px] relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
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
        
        <div className="max-w-[1400px] mx-auto pt-6 border-t border-gray-800 flex items-center justify-center text-[11px] text-gray-500 font-medium">
          <p className="text-center w-full">© 2026 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
        
        {/* Scroll to top button */}
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute bottom-6 right-6 bg-[#F7A300] text-black p-2.5 rounded hover:bg-[#e59800] transition-colors shadow-lg">
          <ArrowUp size={20} />
        </button>
      </footer>
    </main>
  );
}
