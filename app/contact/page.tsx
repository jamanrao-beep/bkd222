"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Phone, Mail, ChevronRight, ArrowRight, ArrowUp, Calendar,
  MessageSquare, UserCheck, FileText, Handshake, Send, CheckCircle2, AlertCircle, Loader2
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    agree: true,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setResponseMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      setStatus("error");
      setResponseMessage("Please provide either your email address or phone number so we can reach you.");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("error");
      setResponseMessage("Please write a short message regarding your inquiry.");
      return;
    }

    if (!formData.agree) {
      setStatus("error");
      setResponseMessage("Please agree to the terms and privacy policy before submitting.");
      return;
    }

    setStatus("loading");
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && (data.success || !data.error)) {
        setStatus("success");
        setResponseMessage("Thank you! Your message has been sent directly to Badrikedardevelopers@gmail.com. Our team will get back to you shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          message: "",
          agree: true,
        });
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Failed to send message. Please try again or contact us via WhatsApp.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setResponseMessage("An unexpected error occurred. Please try contacting us directly via WhatsApp or Phone.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-[#F7A300] selection:text-white overflow-x-hidden">
      {/* 1. Header (Navbar) */}
      <header className="absolute top-0 w-full z-50 bg-black border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
             <Image src="/BKD_Logo_V2.png" alt="Badri Kedar Developers" width={440} height={140} className="h-24 w-auto object-contain" priority />
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
        <div className="absolute inset-0 z-0 ">
          <Image src="/universal_hero.jpg" alt="Contact Us" fill sizes="(max-width: 768px) 100vw, 100vw" priority className="object-cover" />
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
            <a href="tel:+919058571709" className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-1 hover:border-[#F7A300]/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="text-white" size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">Message Us</h4>
                <p className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#F7A300] transition-colors">+91 90585 71709</p>
                <p className="text-[11px] text-gray-500 font-medium">Chat with us for quick assistance</p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="mailto:Badrikedardevelopers@gmail.com" className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-1 hover:border-[#F7A300]/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="text-white" size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">Email Us</h4>
                <p className="font-bold text-gray-900 text-sm mb-2 break-all group-hover:text-[#F7A300] transition-colors">Badrikedardevelopers@gmail.com</p>
                <p className="text-[11px] text-gray-500 font-medium">We reply within 24 hours</p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="https://maps.app.goo.gl/fubbNgPdeS1dezBt6?g_st=ac" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-1 hover:border-[#F7A300]/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="text-white" size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">Visit Us</h4>
                <p className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#F7A300] transition-colors">Dehradun, Uttarakhand, India</p>
                <p className="text-[11px] text-gray-500 font-medium">Get directions on the map</p>
              </div>
            </a>

            {/* Card 4 */}
            <a href="https://wa.me/919058571709" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-1 hover:border-[#F7A300]/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#F7A300] rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FaWhatsapp className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">WhatsApp</h4>
                <p className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#F7A300] transition-colors">+91 90585 71709</p>
                <p className="text-[11px] text-gray-500 font-medium">Chat with us on WhatsApp</p>
              </div>
            </a>

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

              {/* Status alerts */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-emerald-800 text-sm animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-0.5">Message Sent Successfully!</p>
                    <p className="text-xs text-emerald-700 leading-relaxed">{responseMessage}</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-800 text-sm animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-0.5">Submission Error</p>
                    <p className="text-xs text-red-700 leading-relaxed">{responseMessage}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *" 
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email Address" 
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors" 
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number *" 
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors" 
                  />
                </div>

                <div>
                  <select 
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors text-gray-700 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:12px_12px] bg-[right_1.25rem_center]"
                  >
                    <option value="">I&apos;m a... (Select Category)</option>
                    <option value="Buyer">Buyer / Investor</option>
                    <option value="Channel Partner">Channel Partner / Real Estate Professional</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message / Property Requirements *" 
                    rows={5} 
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#F7A300] focus:ring-1 focus:ring-[#F7A300] transition-colors resize-none"
                  ></textarea>
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 text-[#F7A300] focus:ring-[#F7A300] cursor-pointer" 
                  />
                  <label htmlFor="terms" className="text-xs font-medium text-gray-600 cursor-pointer">
                    I agree to the <Link href="/privacy" className="text-[#F7A300] hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-[#F7A300] hover:underline">Terms &amp; Conditions</Link>.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-[#F7A300] text-white px-8 py-3.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#e59800] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all mt-6 shadow-lg shadow-[#F7A300]/20"
                >
                  {status === "loading" ? (
                    <>
                      Sending Message... <Loader2 size={16} className="animate-spin ml-1" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} fill="currentColor" className="ml-1" />
                    </>
                  )}
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
                  src="https://maps.google.com/maps?q=Dehradun,+Uttarakhand,+India&t=&z=11&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                
                {/* Custom Overlay Box mimicking the design */}
                <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-[220px]">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Badri Kedar Developers</h4>
                  <p className="text-gray-500 text-[11px] mb-2 font-medium">Dehradun, Uttarakhand, India</p>
                  <a href="https://maps.app.goo.gl/fubbNgPdeS1dezBt6?g_st=ac" target="_blank" rel="noopener noreferrer" className="text-[#F7A300] text-[11px] font-semibold hover:underline">View larger map</a>
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
          <Image src="/universal_hero.jpg" alt="CTA Background" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover grayscale" />
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
            <Link href="tel:+919058571709" className="bg-[#F7A300] text-black px-8 py-4 rounded font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors shadow-lg shadow-[#F7A300]/20">
              <Phone size={18} fill="currentColor" /> Message Us: +91 90585 71709
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#0a0a0a] text-gray-400 pt-16 pb-8 text-[13px] relative">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image src="/BKD_Logo_V2.png" alt="Badri Kedar Developers" width={250} height={80} className="mb-6 h-20 md:h-24 w-auto object-contain mx-auto md:mx-0" />
            <p className="mb-6 leading-relaxed text-xs max-w-sm md:max-w-none">
              Premium land opportunities across Uttarakhand for a better tomorrow.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <Link href="https://www.facebook.com/share/1EnGjVx2PK/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaFacebookF size={13} /></Link>
              <Link href="https://www.instagram.com/badrikedardevelopers?igsi=dHNsMnZoazh6N3Bj" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaInstagram size={13} /></Link>
              <Link href="https://youtube.com/@badrikedardevelopers?si=C-P664QQ8mtwgujs" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaYoutube size={13} /></Link>
              <Link href="https://wa.me/919058571709" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaWhatsapp size={13} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
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
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-white font-bold mb-6 tracking-wider text-xs uppercase">CONTACT US</h4>
            <ul className="space-y-3 mb-8 font-medium flex flex-col items-center md:items-start">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={14} className="text-[#F7A300]" />
                <a href="tel:+919058571709" className="hover:text-[#F7A300] transition-colors">+91 90585 71709</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={14} className="text-[#F7A300]" />
                <a href="mailto:Badrikedardevelopers@gmail.com" className="hover:text-[#F7A300] transition-colors">Badrikedardevelopers@gmail.com</a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3 text-center md:text-left">
                <MapPin size={14} className="text-[#F7A300] shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/fubbNgPdeS1dezBt6?g_st=ac" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7A300] transition-colors">Dehradun, Uttarakhand, India</a>
              </li>
            </ul>
            <h4 className="text-white font-bold mb-4 tracking-wider text-xs uppercase">OUR LOCATION</h4>
            <a href="https://maps.app.goo.gl/fubbNgPdeS1dezBt6?g_st=ac" target="_blank" rel="noopener noreferrer" className="block w-full max-w-sm md:max-w-none h-24 bg-gray-800 rounded overflow-hidden relative border border-gray-700 group">
              <iframe
                src="https://maps.google.com/maps?q=Dehradun,+Uttarakhand,+India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale group-hover:grayscale-0 pointer-events-none transition-all duration-500"
              ></iframe>
            </a>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-medium">
          <p className="text-center w-full">© 2026 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
        
        {/* Scroll to top button */}
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute bottom-24 right-6 bg-[#F7A300] text-black p-2.5 rounded hover:bg-[#e59800] transition-colors shadow-lg">
          <ArrowUp size={20} />
        </button>
      </footer>
    </main>
  );
}
