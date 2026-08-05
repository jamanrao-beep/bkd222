"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Phone, Mail, ChevronRight, ShieldCheck, Map, TrendingUp,
  Building2, Users, Calendar, ArrowRight, Handshake, Headphones,
  Maximize, Compass, Route, IndianRupee, Map as MapIcon, ArrowUp
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Properties() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-[#F7A300] selection:text-white overflow-x-hidden">
      {/* 1. Header (Navbar) */}
      <header className="absolute top-0 w-full z-50 bg-black border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
             <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={220} height={70} className="h-12 w-auto object-contain" />
          </Link>
          
          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">About Us</Link>
            <Link href="/properties" className="text-white border-b-2 border-[#F7A300] pb-1 text-sm font-medium">Properties</Link>
            <Link href="/learn" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Read &amp; Learn More</Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Contact Us</Link>
          </nav>
          
          {/* Enquire Now Button */}
          <Link href="/contact" className="bg-[#F7A300] text-black px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
            Enquire Now <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center mt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
          <Image src="/universal_hero.jpg" alt="Premium Plots" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center h-full pt-10">
          <div className="max-w-xl text-white mb-10 md:mb-0">
            <p className="text-[#F7A300] font-bold tracking-[0.15em] text-xs uppercase mb-4">PROPERTIES</p>
            <h1 className="font-serif text-5xl md:text-[56px] font-bold leading-[1.1] mb-4 tracking-tight">
              Premium Land<br />
              Opportunities<br />
              <span className="text-[#F7A300]">Across Uttarakhand</span>
            </h1>
            <p className="text-gray-200 text-[15px] max-w-md leading-relaxed font-medium">
              Explore our handpicked land parcels in prime locations.<br/>Secure your future with high-potential investments.
            </p>
          </div>
          
          {/* Right Stats Grid */}
          <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10 shrink-0">
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col items-center text-center">
                <MapPin className="text-[#F7A300] w-8 h-8 mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-2xl mb-1">100+</h4>
                <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wide leading-tight">Premium<br/>Locations</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Building2 className="text-[#F7A300] w-8 h-8 mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-2xl mb-1">57+</h4>
                <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wide leading-tight">Projects<br/>Delivered</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="text-[#F7A300] w-8 h-8 mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-2xl mb-1">10+</h4>
                <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wide leading-tight">Years of<br/>Experience</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="text-[#F7A300] w-8 h-8 mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-2xl mb-1">500+</h4>
                <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wide leading-tight">Happy<br/>Investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Property Cards Section */}
      <section className="py-20 bg-gray-50 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 w-full">
                <Image src="/new_prop_1.jpg" alt="Ranipokhari Plot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#F7A300] text-black text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">FEATURED</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-800 p-1.5 rounded"><MapIcon size={16} /></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-[22px] font-bold text-gray-900 mb-2 leading-snug">Ranipokhari, Dehradun<br/>Rishikesh Highway</h3>
                <div className="flex items-center gap-1.5 text-gray-700 mb-4 text-sm font-medium">
                  <MapPin size={16} className="text-[#F7A300]" />
                  <span>North - West Facing</span>
                </div>
                <p className="text-[13px] text-gray-600 mb-6 leading-relaxed flex-grow">
                  Prime 480 Gaj plot just 30 meters from Dehradun-Rishikesh 4-Lane State Highway. Vastu compliant with 20 ft wide road access.
                </p>
                <div className="border-t border-gray-100 mb-6"></div>
                <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-6">
                  <div className="flex items-start gap-3">
                    <Maximize size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Plot Size</p>
                      <p className="text-[13px] font-bold text-gray-900">480 Gaj</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Compass size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Facing</p>
                      <p className="text-[13px] font-bold text-gray-900">North - West</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Route size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Road Access</p>
                      <p className="text-[13px] font-bold text-gray-900">20 ft Wide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IndianRupee size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Price</p>
                      <p className="text-[13px] font-bold text-gray-900">₹30,000 / Gaj</p>
                    </div>
                  </div>
                </div>
                <Link href="/projects/1" className="bg-[#111] text-white w-full py-3.5 rounded flex items-center justify-center gap-2 text-sm font-semibold hover:bg-black transition-colors group">
                  View More <ArrowRight size={16} className="text-[#F7A300] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 w-full">
                <Image src="/new_prop_2.jpg" alt="Thano Plot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#F7A300] text-black text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">POPULAR</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-800 p-1.5 rounded"><MapIcon size={16} /></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-[22px] font-bold text-gray-900 mb-2 leading-snug">Thano, Dehradun<br/>Rishikesh Highway</h3>
                <div className="flex items-center gap-1.5 text-gray-700 mb-4 text-sm font-medium">
                  <MapPin size={16} className="text-[#F7A300]" />
                  <span>North - East &amp; South - East Facing</span>
                </div>
                <p className="text-[13px] text-gray-600 mb-6 leading-relaxed flex-grow">
                  530 Gaj plot near Thano Chowk, just 300 meters from Pacific Housing Project. Dual facing with 18 ft &amp; 14 ft road access.
                </p>
                <div className="border-t border-gray-100 mb-6"></div>
                <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-6">
                  <div className="flex items-start gap-3">
                    <Maximize size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Plot Size</p>
                      <p className="text-[13px] font-bold text-gray-900">530 Gaj</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Compass size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Facing</p>
                      <p className="text-[13px] font-bold text-gray-900">N &amp; E, S &amp; E</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Route size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Road Access</p>
                      <p className="text-[13px] font-bold text-gray-900">18 ft &amp; 14 ft</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IndianRupee size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Price</p>
                      <p className="text-[13px] font-bold text-gray-900">₹30,000 / Gaj</p>
                    </div>
                  </div>
                </div>
                <Link href="/projects/2" className="bg-[#111] text-white w-full py-3.5 rounded flex items-center justify-center gap-2 text-sm font-semibold hover:bg-black transition-colors group">
                  View More <ArrowRight size={16} className="text-[#F7A300] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 w-full">
                <Image src="/new_prop_3.jpg" alt="New Defence Colony Plot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#F7A300] text-black text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">BEST VALUE</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-800 p-1.5 rounded"><MapIcon size={16} /></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-[22px] font-bold text-gray-900 mb-2 leading-snug">New Defence Colony,<br/>Sahasradhara</h3>
                <div className="flex items-center gap-1.5 text-gray-700 mb-4 text-sm font-medium">
                  <MapPin size={16} className="text-[#F7A300]" />
                  <span>East Facing</span>
                </div>
                <p className="text-[13px] text-gray-600 mb-6 leading-relaxed flex-grow">
                  181 Gaj east-facing plot in fast-developing New Defence Colony. Ideal for residential or commercial investment.
                </p>
                <div className="border-t border-gray-100 mb-6"></div>
                <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-6">
                  <div className="flex items-start gap-3">
                    <Maximize size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Plot Size</p>
                      <p className="text-[13px] font-bold text-gray-900">181 Gaj</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Compass size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Facing</p>
                      <p className="text-[13px] font-bold text-gray-900">East</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Route size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Road Access</p>
                      <p className="text-[13px] font-bold text-gray-900">4-Lane Highway</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IndianRupee size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Price</p>
                      <p className="text-[13px] font-bold text-gray-900">₹70,000 / Gaj</p>
                    </div>
                  </div>
                </div>
                <Link href="/projects/3" className="bg-[#111] text-white w-full py-3.5 rounded flex items-center justify-center gap-2 text-sm font-semibold hover:bg-black transition-colors group">
                  View More <ArrowRight size={16} className="text-[#F7A300] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 w-full">
                <Image src="/new_prop_4.jpg" alt="Fun Valley Plot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#F7A300] text-black text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">PREMIUM</div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-800 p-1.5 rounded"><MapIcon size={16} /></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-[22px] font-bold text-gray-900 mb-2 leading-snug">Fun Valley, Majrigrant,<br/>Laltappar, Dehradun</h3>
                <div className="flex items-center gap-1.5 text-gray-700 mb-4 text-sm font-medium">
                  <MapPin size={16} className="text-[#F7A300]" />
                  <span>Haridwar Highway</span>
                </div>
                <p className="text-[13px] text-gray-600 mb-6 leading-relaxed flex-grow">
                  57 Bigha gated township with 100+ plots. Fully clear land with transparent paperwork. Ideal for residential &amp; future-focused investment.
                </p>
                <div className="border-t border-gray-100 mb-6"></div>
                <div className="grid grid-cols-2 gap-y-5 gap-x-2 mb-6">
                  <div className="flex items-start gap-3">
                    <Maximize size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Plot Size</p>
                      <p className="text-[13px] font-bold text-gray-900">57 Bigha</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapIcon size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Plots</p>
                      <p className="text-[13px] font-bold text-gray-900">100+</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Route size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Road Access</p>
                      <p className="text-[13px] font-bold text-gray-900">Internal Roads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IndianRupee size={18} className="text-[#F7A300] shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Rate</p>
                      <p className="text-[13px] font-bold text-gray-900">₹28,000+ / sq. yard</p>
                    </div>
                  </div>
                </div>
                <Link href="/projects/4" className="bg-[#111] text-white w-full py-3.5 rounded flex items-center justify-center gap-2 text-sm font-semibold hover:bg-black transition-colors group">
                  View More <ArrowRight size={16} className="text-[#F7A300] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Features Strip */}
      <section className="bg-[#111111] py-14">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {[
              { icon: <ShieldCheck size={36} strokeWidth={1.5} />, title: "Verified Properties", desc: "All properties are legally verified and documentation is 100% clear." },
              { icon: <MapPin size={36} strokeWidth={1.5} />, title: "Prime Locations", desc: "Carefully selected locations with high growth potential and connectivity." },
              { icon: <Handshake size={36} strokeWidth={1.5} />, title: "Secure Investment", desc: "Safe investment with clear titles, secure deals and peace of mind." },
              { icon: <TrendingUp size={36} strokeWidth={1.5} />, title: "Best Returns", desc: "High appreciation potential and assured returns on your investment." },
              { icon: <Headphones size={36} strokeWidth={1.5} />, title: "End to End Support", desc: "From search to settlement, we are with you at every step." }
            ].map((value, i) => (
              <div key={i} className={`flex flex-col items-center text-center flex-1 ${i !== 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}>
                <div className="text-[#F7A300] mb-5">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold text-[14px] mb-2.5">{value.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call To Action Strip */}
      <section className="bg-[#2c3138] border-t border-white/5 py-10 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/universal_hero.jpg" alt="CTA bg" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3138] via-[#2c3138]/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-[28px] font-serif text-white mb-2 leading-tight">Ready to Invest in Your Future?</h2>
            <p className="text-gray-400 text-[15px]">Connect with our experts today and find the perfect land for you.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-[#F7A300] text-black px-6 py-3 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
              Enquire Now <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link href="tel:+919756580000" className="bg-transparent border border-white/30 text-white px-6 py-3 rounded text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Phone size={16} fill="transparent" /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#0a0a0a] text-gray-400 pt-16 pb-8 text-[13px] relative">
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
               <Image src="/home.jpeg" alt="Map Location" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin size={24} className="text-[#ea4335] drop-shadow-md" />
               </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-medium">
          <p className="text-center w-full">© 2026 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
        
        {/* Scroll to top button (from image) */}
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute bottom-6 right-6 bg-[#F7A300] text-black p-2 rounded hover:bg-[#e59800] transition-colors">
          <ArrowUp size={20} />
        </button>
      </footer>
    </main>
  );
}
