import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Phone, Mail, ChevronRight, ShieldCheck, Map, TrendingUp,
  Check, Building2, Trees, Droplets, Mountain, Store, Users, Award, Compass, Car
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-[#F7A300] selection:text-white overflow-x-hidden">
      {/* 1. Header (Navbar) */}
      <header className="absolute top-0 w-full z-50 bg-black border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
             <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={440} height={140} className="h-24 w-auto object-contain" />
          </Link>
          
          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-white border-b-2 border-[#F7A300] pb-1 text-sm font-medium">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">About Us</Link>
            <Link href="/properties" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Properties</Link>
            <Link href="/learn" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Read &amp; Learn More</Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Contact Us</Link>
          </nav>
          
          {/* Enquire Now Button */}
          <Link href="/contact" className="bg-[#F7A300] text-black px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
            Enquire Now <ChevronRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[650px] flex items-center mt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
          <Image src="/universal_hero.jpg" alt="Premium Plots" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" priority />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          {/* Left Text */}
          <div className="max-w-2xl text-white">
            <p className="text-[#F7A300] font-bold tracking-[0.15em] text-xs uppercase mb-4">PREMIUM PLOTS. PRIME LOCATIONS.</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[75px] font-bold leading-[1.1] mb-6 tracking-tight">
              Invest In<br />
              Your <span className="text-[#F7A300]">Future</span><br />
              Today
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-lg leading-relaxed">
              Discover premium land opportunities across Uttarakhand with high growth potential and secure returns.
            </p>
          </div>
          
          {/* Right Stats Panel */}
          <div className="hidden lg:flex flex-col bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 py-10 w-72 items-center text-center mr-8">
            <div className="flex flex-col items-center pb-6">
              <div className="w-12 h-12 mb-3">
                 <svg viewBox="0 0 24 24" fill="none" stroke="#F7A300" strokeWidth="1.5" className="w-full h-full"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">500+</h3>
              <p className="text-sm text-gray-300">Happy Investors</p>
            </div>
            
            <div className="w-full h-px bg-white/10"></div>
            
            <div className="flex flex-col items-center py-6">
              <div className="w-12 h-12 mb-3">
                 <svg viewBox="0 0 24 24" fill="none" stroke="#F7A300" strokeWidth="1.5" className="w-full h-full"><path d="M12 15l-2 5l9-5l-2-5l-5 5z"/><circle cx="12" cy="8" r="5"/></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
              <p className="text-sm text-gray-300">Transparent Deals</p>
            </div>
            
            <div className="w-full h-px bg-white/10"></div>
            
            <div className="flex flex-col items-center pt-6">
              <div className="w-12 h-12 mb-3">
                 <svg viewBox="0 0 24 24" fill="none" stroke="#F7A300" strokeWidth="1.5" className="w-full h-full"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 flex items-center gap-2">
                Legally
              </h3>
              <p className="text-sm text-gray-300">Verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Strip */}
      <section className="bg-white py-8 border-b border-gray-100 shadow-sm relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-[#F7A300] stroke-[1.5]" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Verified Properties</h4>
                <p className="text-xs text-gray-500">100% Legal &amp; Transparent</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-10 h-10 text-[#F7A300] stroke-[1.5]" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Prime Locations</h4>
                <p className="text-xs text-gray-500">High Growth Corridors</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center"><svg viewBox="0 0 24 24" fill="none" stroke="#F7A300" strokeWidth="1.5" className="w-10 h-10"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Secure Investment</h4>
                <p className="text-xs text-gray-500">Clear Titles. Safe Deals.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <TrendingUp className="w-10 h-10 text-[#F7A300] stroke-[1.5]" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Best Returns</h4>
                <p className="text-xs text-gray-500">High Appreciation Potential</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center"><svg viewBox="0 0 24 24" fill="none" stroke="#F7A300" strokeWidth="1.5" className="w-10 h-10"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">End to End Support</h4>
                <p className="text-xs text-gray-500">From Search to Settlement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Invest With Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-[40%]">
            <p className="text-[#F7A300] font-bold text-xs tracking-widest uppercase mb-4">WHY INVEST WITH US</p>
            <h2 className="font-serif text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Building <span className="text-[#F7A300]">Trust.</span><br />
              Creating <span className="text-[#F7A300]">Value.</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We specialize in premium land parcels that offer not just ownership, but long term value and peace of mind.
            </p>
            <ul className="space-y-4">
              {['Clear Titles & Documentation', 'High Appreciation Potential', 'Best Locations in Uttarakhand', 'Hassle Free Buying Process'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-[#F7A300] rounded-full p-0.5">
                    <Check size={16} className="text-white stroke-[3]" />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-[60%] w-full">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
               <Image src="/home_second_image.jpg" alt="Scenic land" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Top Properties */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-[#F7A300] font-bold text-xs tracking-widest uppercase mb-8">OUR TOP PROPERTIES</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link href="/properties" className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 block group flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 w-full">
                <Image src="/new_prop_1.jpg" alt="Ranipokhari Plot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-1 leading-tight">Ranipokhari, Dehradun<br/>Rishikesh Highway</h3>
                <div className="flex items-center gap-1.5 text-gray-500 mb-4 mt-2">
                  <MapPin size={14} className="text-[#F7A300]" />
                  <span className="text-xs font-medium uppercase tracking-wide">North - West Facing</span>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>Plot Size: 480 Gaj (Approx. 4,320 Sq. Ft.)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>Just 30 meters from Dehradun-Rishikesh 4-Lane State Highway</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>20 ft Wide Road Access</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <p className="font-bold text-[#F7A300] text-xl">₹30,000 <span className="text-gray-500 text-sm font-normal">per Gaj (Negotiable)</span></p>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/properties" className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 block group flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 w-full">
                <Image src="/new_prop_2.jpg" alt="Thano Plot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-1 leading-tight">Thano, Dehradun<br/>Rishikesh Highway</h3>
                <div className="flex items-center gap-1.5 text-gray-500 mb-4 mt-2">
                  <MapPin size={14} className="text-[#F7A300]" />
                  <span className="text-xs font-medium uppercase tracking-wide">North-East &amp; South-East Facing</span>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>Plot Size: 530 Gaj (Approx. 4,760 Sq. Ft.)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>Just 300 meters from Pacific Housing Project</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>18 ft &amp; 14 ft Double Side Road Access</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <p className="font-bold text-[#F7A300] text-xl">₹30,000 <span className="text-gray-500 text-sm font-normal">per Gaj (Negotiable)</span></p>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/properties" className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 block group flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 w-full">
                <Image src="/new_prop_3.jpg" alt="New Defence Colony Plot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-1 leading-tight">New Defence Colony,<br/>Sahastradhara</h3>
                <div className="flex items-center gap-1.5 text-gray-500 mb-4 mt-2">
                  <MapPin size={14} className="text-[#F7A300]" />
                  <span className="text-xs font-medium uppercase tracking-wide">East Facing</span>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>Plot Size: 181 Gaj (28x61&apos;6&quot;x28x56)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>Just 800 meters from Sahastradhara 4-Lane Highway</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>East-facing plot for positive vastu</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <p className="font-bold text-[#F7A300] text-xl">₹70,000 <span className="text-gray-500 text-sm font-normal">per Gaj (Negotiable)</span></p>
                </div>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/properties" className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 block group flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 w-full">
                <Image src="/new_prop_4.jpg" alt="Fun Valley Plot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-1 leading-tight">Fun Valley, Majrigrant,<br/>Laltappar, Dehradun</h3>
                <div className="flex items-center gap-1.5 text-gray-500 mb-4 mt-2">
                  <MapPin size={14} className="text-[#F7A300]" />
                  <span className="text-xs font-medium uppercase tracking-wide">Haridwar Highway</span>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>57 Bigha gated township with 100+ plots</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>Fully clear land with transparent paperwork</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7A300] mt-1.5 shrink-0"></div>
                    <span>Ideal for residential &amp; future-focused investment</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <p className="font-bold text-gray-900 text-lg">Rate: <span className="text-[#F7A300]">₹28,000+</span> <span className="text-gray-500 text-sm font-normal">per sq. yard</span></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Info Sections (Dark) */}
      <section className="bg-[#1f2329] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Column 1 */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#F7A300" strokeWidth="1.5" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <p className="text-[#F7A300] font-bold text-[11px] tracking-widest uppercase">DEHRADUN - GROWTH CORRIDOR</p>
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4 leading-snug">
              Strategic Locations.<br/>
              Stronger <span className="text-[#F7A300]">Future.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              All our properties are located in high growth corridors with excellent connectivity and rapid infrastructure development.
            </p>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Award className="text-[#F7A300] w-6 h-6 mb-2" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-lg mb-1">10+</h4>
                <p className="text-[#F7A300] text-[9px] font-semibold uppercase leading-tight">Years of<br/>Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="text-[#F7A300] w-6 h-6 mb-2" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-lg mb-1">100+</h4>
                <p className="text-[#F7A300] text-[9px] font-semibold uppercase leading-tight">Premium<br/>Locations</p>
              </div>
              <div className="flex flex-col items-center">
                <Map className="text-[#F7A300] w-6 h-6 mb-2" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-lg mb-1">57+</h4>
                <p className="text-[#F7A300] text-[9px] font-semibold uppercase leading-tight">Bigha Land<br/>Developed</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="text-[#F7A300] w-6 h-6 mb-2" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-lg mb-1">500+</h4>
                <p className="text-[#F7A300] text-[9px] font-semibold uppercase leading-tight">Happy<br/>Investors</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="pt-10 lg:pt-0 lg:px-12">
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="#F7A300" strokeWidth="1.5" className="w-5 h-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              <h3 className="text-[#F7A300] font-bold text-[11px] tracking-widest uppercase">PROJECT HIGHLIGHTS</h3>
            </div>
            <ul className="space-y-4">
              {[
                {text: 'Wide internal roads & smooth connectivity'},
                {text: 'Green parks & landscaped surroundings'},
                {text: 'Street lighting, water supply & electricity'},
                {text: 'Peaceful environment with mountain views'},
                {text: 'Vastu-friendly plots'},
                {text: 'On-campus utility/general store'}
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] text-gray-300 font-medium">
                  <div className="w-5 h-5 rounded flex items-center justify-center shrink-0 border border-[#F7A300]">
                     <Check size={12} strokeWidth={3} className="text-[#F7A300]" />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="pt-10 lg:pt-0 lg:pl-12">
            <div className="flex items-center gap-3 mb-6">
               <svg viewBox="0 0 24 24" fill="none" stroke="#F7A300" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
               <h3 className="text-[#F7A300] font-bold text-[11px] tracking-widest uppercase">NEARBY LANDMARKS</h3>
            </div>
            <ul className="space-y-4">
              {[
                {name: 'Jolly Grant Airport', dist: '14 km', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#F7A300]"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-4 4-2.8-.9c-.4-.1-.8.2-1 .6L1 17l4.8 2.2L8 24l1.2-.2c.4-.2.7-.6.6-1l-.9-2.8 4-4 4 6 1.2-.7c.4-.2.7-.6.6-1.1z"/></svg>},
                {name: 'Rishikesh', dist: '23 km', icon: <MapPin size={16} className="text-[#F7A300]" />},
                {name: 'Dehradun City', dist: '20 km', icon: <Building2 size={16} className="text-[#F7A300]" />},
                {name: 'Bhaniawala Chowk', dist: '7 km', icon: <MapPin size={16} className="text-[#F7A300]" />},
                {name: 'Himalayan Institute', dist: '9 km', icon: <MapPin size={16} className="text-[#F7A300]" />}
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between text-[13px] text-gray-300 font-medium">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <span>{item.dist}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 7. Call To Action Strip */}
      <section className="bg-[#2c3138] border-t border-white/5 py-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-[28px] font-serif text-white mb-2 leading-tight">Ready to Invest in Your Future?</h2>
            <p className="text-gray-400 text-sm">Connect with our property experts and find the perfect plot for you.</p>
          </div>
          <div className="flex gap-4">
            <Link href="tel:+919756580000" className="bg-[#F7A300] text-black px-6 py-3 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
              <Phone size={16} fill="black" /> Call Now
            </Link>
            <Link href="https://wa.me/919756580000" className="bg-transparent border border-white/30 text-white px-6 py-3 rounded text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
              <FaWhatsapp size={18} /> WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#0a0a0a] text-gray-400 pt-16 pb-8 text-[13px]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={200} height={60} className="mb-6 h-12 w-auto object-contain" />
            <p className="mb-6 leading-relaxed">
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
               <Image src="/universal_hero.jpg" alt="Map Location" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin size={24} className="text-[#ea4335] drop-shadow-md" />
               </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 pt-6 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-medium">
          <p>© 2026 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
