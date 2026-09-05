"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

interface NavbarProps {
  activePage?: "home" | "about" | "properties" | "learn" | "contact" | "projects" | "blogs" | "partners" | "login" | "register";
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About Us", href: "/about", id: "about" },
    { name: "Properties", href: "/properties", id: "properties" },
    { name: "Read & Learn More", href: "/learn", id: "learn" },
    { name: "Contact Us", href: "/contact", id: "contact" },
  ];

  return (
    <>
      <header className="absolute top-0 w-full z-50 bg-black border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/BKD_Logo_V2.png" 
              alt="Badri Kedar Developers" 
              width={440} 
              height={140} 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain" 
              priority 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white border-b-2 border-[#F7A300] pb-1"
                      : "text-gray-300 hover:text-[#F7A300]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Enquire Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#F7A300] text-black px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors shadow-md"
            >
              Enquire Now <ChevronRight size={18} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile Right Controls: Enquire Button + Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-2.5 sm:gap-3">
            <Link
              href="/contact"
              className="bg-[#F7A300] text-black px-3.5 sm:px-4 py-2 rounded text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-1.5 hover:bg-[#e59800] transition-colors"
            >
              <span>Enquire</span>
              <ChevronRight size={15} strokeWidth={2.5} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="p-2 sm:p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:text-[#F7A300] border border-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-[#F7A300]"
            >
              <Menu size={22} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-sm bg-[#0e1015] border-l border-white/10 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/50">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <Image 
                  src="/BKD_Logo_V2.png" 
                  alt="Badri Kedar Developers" 
                  width={180} 
                  height={60} 
                  className="h-12 w-auto object-contain" 
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
              <div className="text-[11px] font-bold text-[#F7A300] uppercase tracking-wider mb-3 px-3">
                Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "bg-[#F7A300]/15 text-[#F7A300] border-l-4 border-[#F7A300] font-semibold pl-3"
                        : "text-gray-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} className={isActive ? "text-[#F7A300]" : "text-gray-500"} />
                  </Link>
                );
              })}

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#F7A300] text-black py-3 px-4 rounded-lg font-bold text-center flex items-center justify-center gap-2 hover:bg-[#e59800] transition-colors shadow-lg"
                >
                  Enquire Now <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/919058571709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg font-semibold text-center flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg"
                >
                  <FaWhatsapp size={18} /> Chat on WhatsApp
                </a>
              </div>

              {/* Quick Contact Info */}
              <div className="pt-6 border-t border-white/10 mt-6 space-y-3 text-xs text-gray-400">
                <div className="text-[11px] font-bold text-[#F7A300] uppercase tracking-wider mb-2 px-1">
                  Contact Details
                </div>
                <a href="tel:+919058571709" className="flex items-center gap-3 hover:text-[#F7A300] transition-colors p-1">
                  <Phone size={15} className="text-[#F7A300] shrink-0" />
                  <span>+91 90585 71709</span>
                </a>
                <a href="mailto:Badrikedardevelopers@gmail.com" className="flex items-center gap-3 hover:text-[#F7A300] transition-colors p-1">
                  <Mail size={15} className="text-[#F7A300] shrink-0" />
                  <span className="truncate">Badrikedardevelopers@gmail.com</span>
                </a>
                <a 
                  href="https://maps.app.goo.gl/fubbNgPdeS1dezBt6?g_st=ac" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 hover:text-[#F7A300] transition-colors p-1"
                >
                  <MapPin size={15} className="text-[#F7A300] shrink-0 mt-0.5" />
                  <span className="leading-snug">Bhagirath Enclave, 52, Balbir Rd, Dalanwala, Dehradun</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer Socials */}
            <div className="p-5 border-t border-white/10 bg-black/40 flex items-center justify-around">
              <Link 
                href="https://www.facebook.com/share/1EnGjVx2PK/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#F7A300] hover:border-[#F7A300] transition-colors"
              >
                <FaFacebookF size={14} />
              </Link>
              <Link 
                href="https://www.instagram.com/badrikedardevelopers?igsi=dHNsMnZoazh6N3Bj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#F7A300] hover:border-[#F7A300] transition-colors"
              >
                <FaInstagram size={14} />
              </Link>
              <Link 
                href="https://youtube.com/@badrikedardevelopers?si=C-P664QQ8mtwgujs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#F7A300] hover:border-[#F7A300] transition-colors"
              >
                <FaYoutube size={14} />
              </Link>
              <Link 
                href="https://wa.me/919058571709" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#F7A300] hover:border-[#F7A300] transition-colors"
              >
                <FaWhatsapp size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
