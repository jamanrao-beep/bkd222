"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Phone, Mail, ChevronRight, ArrowRight, ArrowUp, Calendar,
  MessageSquare, UserCheck, FileText, Handshake, Send
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-[#F7A300] selection:text-white overflow-x-hidden">
      {/* 1. Header (Navbar) */}
      <header className="absolute top-0 w-full z-50 bg-[#161616]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
             <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={220} height={70} className="h-12 w-auto object-contain" priority />
          </Link>
          
          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">About Us</Link>
            <Link href="/properties" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Properties</Link>
            <Link href="/learn" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Read &amp; Learn More</Link>
            <Link href="/contact" className="text-white border-b-2 border-[#F7A300] pb-1 text-sm font-medium">Contact Us</Link>
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
          <Image src="/home.jpeg" alt="Contact Us" fill sizes="(max-width: 768px) 100vw, 100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center h-full pt-10">
          <div className="max-w-2xl text-white">
            <p className="font-medium text-sm mb-6 flex items-center gap-2">
              <Link href="/" className="text-[#F7A300] hover:text-white transition-colors">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">Contact Us</span>
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-gray-200 text-base md:text-lg max-w-xl leading-relaxed font-medium">
              We&apos;re here to help you make the right real estate investment in Dehradun. Reach out to us for any queries, site visits, or more information.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Contact Info Cards */}
      <section className="relative z-20 -mt-16 mb-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center shrink-0">
                <MessageSquare className="text-white" size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">Message Us</h4>
                <p className="font-bold text-gray-900 text-sm mb-2">+91 9756580000</p>
                <p className="text-[11px] text-gray-500 font-medium">Chat with us for quick assistance</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-white" size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">Email Us</h4>
                <p className="font-bold text-gray-900 text-sm mb-2">info@badrikedardevelopers.com</p>
                <p className="text-[11px] text-gray-500 font-medium">We reply within 24 hours</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-white" size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">Visit Us</h4>
                <p className="font-bold text-gray-900 text-sm mb-2">Dehradun, Uttarakhand, India</p>
                <p className="text-[11px] text-gray-500 font-medium">Get directions on the map</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center shrink-0">
                <FaWhatsapp className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">WhatsApp</h4>
                <p className="font-bold text-gray-900 text-sm mb-2">+91 9756580000</p>
                <p className="text-[11px] text-gray-500 font-medium">Chat with us on WhatsApp</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Main Content Area (Form & Map) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                Send Us a <span className="text-[#F7A300]">Message</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#F7A300] mb-6"></div>
              
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Have a question or need assistance? Fill out the form and our team will get back to you shortly.
              </p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors" />
                  </div>
                </div>
                <div>
                  <input type="tel" placeholder="Your Phone Number" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors" />
                </div>
                <div>
                  <input type="text" placeholder="Subject" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors" />
                </div>
                <div>
                  <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors resize-none"></textarea>
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                  <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-300 text-[#F7A300] focus:ring-[#F7A300]" />
                  <label htmlFor="terms" className="text-xs font-medium text-gray-600">
                    I agree to the <Link href="/privacy" className="text-[#F7A300] hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-[#F7A300] hover:underline">Terms &amp; Conditions</Link>.
                  </label>
                </div>
                
                <button type="button" className="bg-[#F7A300] text-white px-8 py-3.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#e59800] transition-colors mt-6">
                  Send Message <Send size={16} fill="currentColor" className="ml-1" />
                </button>
              </form>
            </div>
            
            {/* Right: Map and Info */}
            <div className="flex flex-col">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                Our <span className="text-[#F7A300]">Office</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#F7A300] mb-8"></div>
              
              {/* Map Placeholder */}
              <div className="w-full h-[350px] bg-gray-200 rounded-2xl mb-10 overflow-hidden relative border border-gray-200 shadow-sm group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74617267597!2d77.94709420067305!3d30.32540979207907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1715612345678!5m2!1sen!2sin" 
                  className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                
                {/* Custom Overlay Box mimicking the design */}
                <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-[220px]">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Badri Kedar Developers</h4>
                  <p className="text-gray-500 text-[11px] mb-2 font-medium">Dehradun, Uttarakhand, India</p>
                  <a href="#" className="text-[#F7A300] text-[11px] font-semibold hover:underline">View larger map</a>
                </div>
              </div>
              
              <h2 className="font-serif text-[28px] font-bold text-gray-900 mb-2">
                Why Contact <span className="text-[#F7A300]">Us?</span>
              </h2>
              <div className="w-12 h-0.5 bg-[#F7A300] mb-8"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="flex flex-col items-center text-center pt-4 md:pt-0">
                  <div className="text-[#F7A300] mb-3">
                    <UserCheck size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-[13px] mb-2 leading-tight">Expert Guidance</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">Get professional advice for your real estate investment.</p>
                </div>
                <div className="flex flex-col items-center text-center pt-4 md:pt-0 md:pl-6">
                  <div className="text-[#F7A300] mb-3">
                    <Calendar size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-[13px] mb-2 leading-tight">Site Visit Assistance</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">We help you schedule and plan your site visits.</p>
                </div>
                <div className="flex flex-col items-center text-center pt-4 md:pt-0 md:pl-6">
                  <div className="text-[#F7A300] mb-3">
                    <FileText size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-[13px] mb-2 leading-tight">Transparent Process</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">Clear information and support at every step.</p>
                </div>
                <div className="flex flex-col items-center text-center pt-4 md:pt-0 md:pl-6">
                  <div className="text-[#F7A300] mb-3">
                    <Handshake size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-[13px] mb-2 leading-tight">Dedicated Support</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">Our team is here to assist you with all your queries.</p>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Call To Action Strip */}
      <section className="bg-[#1a1c20] border-t border-white/5 py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/home.jpeg" alt="CTA Background" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c20] via-[#1a1c20]/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#F7A300]/30 flex items-center justify-center shrink-0">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center">
                <MessageSquare className="text-black" size={24} fill="currentColor" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-[32px] font-serif text-white mb-2 leading-tight">
                Let&apos;s Talk About <span className="text-[#F7A300]">Your Future!</span>
              </h2>
              <p className="text-gray-400 text-[15px]">
                Have questions or need help choosing the right plot?<br className="hidden md:block" />
                Message us today &mdash; we&apos;re here to help.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <Link href="tel:+919756580000" className="bg-[#F7A300] text-black px-8 py-4 rounded font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors shadow-lg shadow-[#F7A300]/20">
              <Phone size={18} fill="currentColor" /> Message Us: +91 9756580000
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
        
        <div className="max-w-[1400px] mx-auto px-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-medium">
          <p className="text-center w-full">© 2026 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
        
        {/* Scroll to top button (from image) */}
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute bottom-6 right-6 bg-[#F7A300] text-black p-2.5 rounded hover:bg-[#e59800] transition-colors shadow-lg">
          <ArrowUp size={20} />
        </button>
      </footer>
    </main>
  );
}
