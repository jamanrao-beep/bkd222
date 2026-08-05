"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  Map, Users, Navigation, TreePine, Home,
  Lightbulb, Zap, Gamepad2, Store, FileText,
  HandCoins, TrendingUp, Leaf, ShieldCheck, MapPin,
  ArrowLeft, Building2, Compass, Landmark, ArrowRight,
  CheckCircle2, Building, Plane, Stethoscope, CarFront, Ruler,
  GraduationCap, ChevronRight, Clock, Mail, Sun, Briefcase, Bus, Train, PlusSquare, HeartPulse, HardHat,
  Crosshair, Spline, ArrowUp, BriefcaseBusiness, Phone, Palmtree
} from "lucide-react";
import { IndianRupee } from "lucide-react";

export default function Plot530() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans selection:bg-[#F7A300] selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent border-b border-white/10">
        <Link href="/">
          <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={440} height={140} className="h-24 w-auto object-contain" priority />
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
          <Link href="/" className="text-gray-300 hover:text-[#F7A300] transition-colors">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-[#F7A300] transition-colors">About Us</Link>
          <Link href="/properties" className="text-white border-b-2 border-[#F7A300] pb-1">Properties</Link>
          <Link href="/learn" className="text-gray-300 hover:text-[#F7A300] transition-colors">Read &amp; Learn More</Link>
          <Link href="/contact" className="text-gray-300 hover:text-[#F7A300] transition-colors">Contact Us</Link>
        </div>
        {/* Enquire Now Button */}
        <Link href="/contact" className="bg-[#F7A300] text-black px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
          Enquire Now <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </nav>

      {/* Top Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col pt-[80px]">
        <div className="absolute inset-0 z-0 top-0">
          <Image
            src="/new_prop_2.jpg"
            alt="Thano Plot"
            fill sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 max-w-[1400px] mx-auto w-full text-white">
          <div className="flex items-center gap-2 text-xs font-semibold mb-6">
            <Link href="/" className="text-[#F7A300] hover:text-white transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/properties" className="text-[#F7A300] hover:text-white transition-colors">Properties</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Thano, Dehradun</span>
          </div>

          <h1 className="font-serif text-5xl md:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight">
            Thano, Dehradun<br />
            <span className="text-[#F7A300]">Rishikesh Highway</span>
          </h1>

          <div className="flex items-center gap-2 font-bold text-[15px] mb-8">
            <MapPin size={20} className="text-[#F7A300]" strokeWidth={2.5} />
            <span>North - East &amp; South - East Facing</span>
          </div>

          <p className="text-gray-100 text-base max-w-sm leading-relaxed mb-12 font-medium">
            530 Gaj plot near Thano Chowk, just 300 meters<br/>from Pacific Housing Project.<br/>Dual facing with 18 ft &amp; 14 ft road access.
          </p>

          <div className="flex flex-wrap gap-12 items-center">
            <div className="flex items-center gap-4">
              <Map size={36} strokeWidth={1.5} className="text-[#F7A300]" />
              <div>
                <p className="text-[11px] text-gray-300 font-bold uppercase tracking-wide mb-0.5">Plot Size</p>
                <p className="font-bold text-sm">530 Gaj</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Navigation size={36} strokeWidth={1.5} className="text-[#F7A300]" />
              <div>
                <p className="text-[11px] text-gray-300 font-bold uppercase tracking-wide mb-0.5">Road Access</p>
                <p className="font-bold text-sm">18 ft &amp; 14 ft</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Compass size={36} strokeWidth={1.5} className="text-[#F7A300]" />
              <div>
                <p className="text-[11px] text-gray-300 font-bold uppercase tracking-wide mb-0.5">Facing</p>
                <p className="font-bold text-sm">N &amp; E, S &amp; E</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 bg-[#f8f9fa]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative h-[420px] rounded-2xl overflow-hidden group shadow-md">
            <Image src="/prop2_gal_main.png" alt="Property View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[202px] rounded-2xl overflow-hidden group shadow-sm">
              <Image src="/prop2_gal_1.png" alt="Property View 1" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-[202px] rounded-2xl overflow-hidden group shadow-sm">
              <Image src="/prop2_gal_2.png" alt="Property View 2" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-[202px] rounded-2xl overflow-hidden group shadow-sm">
              <Image src="/gal_new_3.png" alt="Property View 3" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-[202px] rounded-2xl overflow-hidden group shadow-sm">
              <Image src="/gal_new_4.png" alt="Property View 4" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-16 pt-8 bg-[#f8f9fa]">
        <div className="mb-10">
          <h2 className="text-[34px] font-serif font-bold text-gray-900 border-b-2 border-[#F7A300] inline-block pb-1">
            Property <span className="text-[#F7A300]">Highlights</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: MapPin, title: "Prime Location", desc: "Just 300 meters from Pacific Housing Project, near Thano Chowk." },
            { icon: Crosshair, title: "Dual Facing", desc: "North - East & South - East facing for maximum advantage." },
            { icon: Building2, title: "Wide Road Access", desc: "18 ft & 14 ft wide road access for smooth connectivity." },
            { icon: FileText, title: "Vastu Compliant", desc: "Plot is vastu compliant ensuring positivity and prosperity." },
            { icon: TrendingUp, title: "High Investment Value", desc: "High appreciation potential in a fast developing area." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="mx-auto w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-6">
                <item.icon size={28} strokeWidth={1.5} className="text-[#F7A300]" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-[15px]">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[180px] mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Property Details */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 bg-[#f8f9fa] border-t border-gray-100">
        <div className="mb-12">
          <h2 className="text-[34px] font-serif font-bold text-gray-900 border-b-2 border-[#F7A300] inline-block pb-1">
            Property <span className="text-[#F7A300]">Details</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0 text-[13px]">
          <div className="space-y-0">
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <Map size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Plot Size
              </div>
              <span className="font-bold text-gray-900">530 Gaj</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <Compass size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Facing
              </div>
              <span className="font-bold text-gray-900">North - East &amp; South - East</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <Building2 size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Road Access
              </div>
              <span className="font-bold text-gray-900">18 ft &amp; 14 ft</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <Navigation size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Distance from Pacific Housing
              </div>
              <span className="font-bold text-gray-900">300 meters</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <ShieldCheck size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Vastu Compliant
              </div>
              <span className="font-bold text-gray-900">Yes</span>
            </div>
          </div>
          
          <div className="space-y-0 mt-0">
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <MapPin size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Location
              </div>
              <span className="font-bold text-gray-900 text-right">Thano, Dehradun Rishikesh Highway</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <Home size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Property Type
              </div>
              <span className="font-bold text-gray-900">Residential Plot</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <Users size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Ownership
              </div>
              <span className="font-bold text-gray-900">Freehold</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <CheckCircle2 size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Approved By
              </div>
              <span className="font-bold text-gray-900">MDDA Approved Area</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-4 text-gray-600 font-semibold">
                <IndianRupee size={20} className="text-[#F7A300]" strokeWidth={1.5} /> Price
              </div>
              <span className="font-bold text-gray-900">₹30,000 / Gaj</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 bg-[#f8f9fa]">
        <div className="mb-12">
          <h2 className="text-[34px] font-serif font-bold text-gray-900 border-b-2 border-[#F7A300] inline-block pb-1">
            Location <span className="text-[#F7A300]">Advantages</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-10 divide-x divide-gray-200">
          {[
            { icon: Home, title: "Thano Chowk", dist: "2 mins drive" },
            { icon: Building2, title: "Pacific Housing Project", dist: "1 min drive" },
            { icon: Landmark, title: "Rishikesh", dist: "20 mins drive" },
            { icon: Building, title: "Dehradun City", dist: "25 mins drive" },
            { icon: Plane, title: "Jolly Grant Airport", dist: "40 mins drive" },
            { icon: Train, title: "Railway Station", dist: "25 mins drive" },
            { icon: GraduationCap, title: "School & College", dist: "10-15 mins" },
            { icon: BriefcaseBusiness, title: "Hospital", dist: "10 mins drive" },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col items-center text-center px-2`}>
              <item.icon size={36} strokeWidth={1.2} className="text-[#F7A300] mb-4" />
              <h4 className="font-bold text-gray-900 text-[13px] mb-1.5 whitespace-pre-line">{item.title}</h4>
              <p className="text-gray-500 text-[11px] font-medium">{item.dist}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Invest Here */}
      <section className="w-full bg-[#0a0a0a] py-20 px-6 mt-8 rounded-t-3xl border-t-4 border-[#F7A300]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white border-b-2 border-[#F7A300] inline-block pb-2">
              Why <span className="text-[#F7A300]">Invest</span> Here?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {[
              { icon: TrendingUp, title: "High Growth Corridor", desc: "Located on Dehradun-Rishikesh Highway, a rapidly developing real estate corridor." },
              { icon: Plane, title: "Excellent Connectivity", desc: "Well connected to major destinations with wide road network." },
              { icon: HardHat, title: "Future Development", desc: "Surrounded by upcoming residential and commercial projects." },
              { icon: Home, title: "Great Returns", desc: "High demand area ensuring excellent rental yield and property appreciation." },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center text-center px-6 ${i !== 0 ? 'pt-8 lg:pt-0' : ''}`}>
                <div className="text-[#F7A300] mb-6">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-white text-[15px] mb-3">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[220px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <iframe
                src="https://maps.google.com/maps?q=Dehradun,+Uttarakhand,+India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto pt-6 border-t border-gray-800 flex items-center justify-center text-xs text-gray-500 font-medium">
          <p className="text-center w-full">© 2026 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
        
        {/* Scroll to top button */}
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute bottom-6 right-6 bg-[#F7A300] text-black p-2.5 rounded hover:bg-[#e59800] transition-colors shadow-lg">
          <ArrowUp size={20} />
        </button>
      </footer>
    </div>
  );
}
