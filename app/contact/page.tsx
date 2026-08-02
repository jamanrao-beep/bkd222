import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, 
  ChevronRight, ChevronLeft, Building2, ShieldCheck, 
  Clock, Users, Award, Target, Eye, Gem, 
  CheckCircle2, FileText, Leaf, Star, Quote,
  Send, User, BookOpen, Clock4, Timer
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-black selection:bg-brand-gold selection:text-white flex flex-col font-sans">
      {/* Header & Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Building" 
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Top Bar */}
        <div className="relative z-10 hidden md:flex justify-between items-center px-8 py-3 text-xs text-gray-300 border-b border-white/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-gold" />
              <span>1st Floor, IT Park, Shop No. 18, Doon Square, Dehradun</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-brand-gold" />
              <span>+91 92580 02814</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-brand-gold" />
              <span>info@badrikedardevelopers.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-white">Follow Us:</span>
            <Link href="https://www.facebook.com/badrikedardevelopers" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaFacebookF size={14} /></Link>
            <Link href="https://www.instagram.com/badrikedardevelopers?igsh=dHNsMnZoazh6N3Bj" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaInstagram size={14} /></Link>
            <Link href="https://youtube.com/@badrikedardevelopers?si=Sgf_tHWd8wQ4JJnx" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaYoutube size={14} /></Link>
            <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%2 Media0in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-8 py-5">
          <Link href="/">
            <Image 
              src="/BKD_Logo.png" 
              alt="Badri Kedar Developers" 
              width={160} 
              height={60} 
              className="object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-brand-gold transition-colors">About Us</Link>
            <Link href="/projects" className="text-white hover:text-brand-gold transition-colors">Projects</Link>

            <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>
            <Link href="/contact" className="text-brand-gold border-b-2 border-brand-gold pb-1">Contact</Link>
          </div>
          <Link 
            href="/contact" 
            className="hidden md:flex items-center gap-2 bg-brand-gold text-white px-6 py-2.5 text-sm font-semibold hover:bg-brand-gold-hover transition-all rounded shadow-lg shadow-brand-gold/20"
          >
            Get Consultation <ChevronRight size={16} />
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 font-medium mb-6">Let&apos;s Build Your Future Together</p>
          <div className="flex items-center gap-2 text-sm text-brand-gold font-semibold">
            <Link href="/" className="text-brand-gold hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-brand-gold" />
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Info & Map */}
          <div className="flex flex-col">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Get <span className="text-brand-gold">In</span> Touch
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm md:text-base max-w-md">
              We are here to help you find the perfect property or answer any questions you may have. Reach out to us anytime!
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {/* Office Address */}
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Office Address</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Bhagirath Enclave, 52, Balbir Rd, Dalanwala, Dehradun, Uttarakhand 248001
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Email Address</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    info@badrikedardevelopers.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Clock4 className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Working Hours</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Mon - Sat: 10:00 AM - 7:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Find Us On <span className="text-brand-gold">Map</span>
            </h3>
            <div className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-200">
              {/* Dummy Map Image */}
              <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                alt="Map Location" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover opacity-80"
              />
              {/* Map UI Overlay to simulate the look in the image */}
              <div className="absolute inset-0 bg-white/40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <MapPin size={32} className="text-red-600 fill-red-600" />
                <span className="bg-white px-3 py-1 rounded shadow text-xs font-bold text-red-600 mt-1">Badri Kedar Developers</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#1a1c23] rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Send Us <span className="text-brand-gold">A Message</span>
            </h2>
            <p className="text-gray-400 mb-8 text-sm">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <form className="flex flex-col gap-5 flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#111318] border border-white/10 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block pl-12 p-4 transition-colors"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-[#111318] border border-white/10 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block pl-12 p-4 transition-colors"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-500" />
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-[#111318] border border-white/10 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block pl-12 p-4 transition-colors"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <BookOpen className="h-5 w-5 text-gray-500" />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-[#111318] border border-white/10 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block pl-12 p-4 transition-colors"
                />
              </div>

              <div className="relative flex-1">
                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-500" />
                </div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full h-full min-h-[120px] bg-[#111318] border border-white/10 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block pl-12 p-4 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-brand-gold text-white font-semibold rounded-lg text-sm px-5 py-4 mt-2 flex items-center justify-center gap-2 hover:bg-brand-gold-hover transition-colors shadow-lg shadow-brand-gold/20"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Why Connect With Us */}
      <section className="py-20 px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Connect With <span className="text-brand-gold">Us?</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { 
              icon: Award, 
              title: "Verified Properties", 
              desc: "100% legally verified and hassle-free properties." 
            },
            { 
              icon: Timer, 
              title: "Quick Response", 
              desc: "We value your time and respond quickly." 
            },
            { 
              icon: Users, 
              title: "Trusted Experts", 
              desc: "Experienced professionals guiding you at every step." 
            },
            { 
              icon: ShieldCheck, 
              title: "Transparent Process", 
              desc: "Clear documentation and complete transparency." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <div className="w-16 h-16 rounded-full bg-brand-gold/5 flex items-center justify-center mb-6">
                <item.icon className="text-brand-gold w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0f1115] relative overflow-hidden">
        {/* Background Building Graphic */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Image 
            src="/building-outline.png" 
            alt="Cityscape" 
            width={400} 
            height={300} 
            className="object-contain"
            // Fallback in case image doesn't exist, we just won't see it or we can use an inline SVG
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <div className="w-full lg:w-1/3 relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
             <Image 
               src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" 
               alt="Luxury Home" 
               fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
               className="object-cover"
             />
          </div>
          <div className="flex-1 flex flex-col justify-center text-white">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to Invest in <span className="text-brand-gold">Your Future?</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg text-sm md:text-base leading-relaxed">
              Let&apos;s find the perfect property that matches your goals. Our team is ready to assist you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-brand-gold text-white px-8 py-3.5 font-semibold rounded-lg hover:bg-brand-gold-hover transition-all text-sm shadow-lg shadow-brand-gold/20">
                Call Now <Phone size={16} />
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-2 border border-white/20 px-8 py-3.5 font-semibold rounded-lg hover:bg-white hover:text-black transition-all text-sm bg-white/5">
                Chat on WhatsApp <FaWhatsapp size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0b0f] pt-20 pb-8 px-8 border-t border-white/5 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Image 
              src="/BKD_Logo.png" 
              alt="Badri Kedar Developers" 
              width={180} 
              height={70} 
              className="object-contain mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
              Building more than just properties - we build trust, value, and lasting relationships. Your future, our commitment.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://www.facebook.com/badrikedardevelopers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaFacebookF size={14} /></Link>
              <Link href="https://www.instagram.com/badrikedardevelopers?igsh=dHNsMnZoazh6N3Bj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaInstagram size={14} /></Link>
              <Link href="https://youtube.com/@badrikedardevelopers?si=Sgf_tHWd8wQ4JJnx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaYoutube size={14} /></Link>
              <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%2 Media0in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold font-serif">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Projects', 'Blogs', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : link === 'About Us' ? '/about' : link === 'Contact Us' ? '/contact' : '#'} className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                    <ChevronRight size={12} className="text-brand-gold" /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">Bhagirath Enclave, 52, Balbir Rd, Dalanwala, Dehradun, Uttarakhand 248001</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 items-center">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>info@badrikedardevelopers.com</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 items-center">
                <Clock size={18} className="text-brand-gold shrink-0" />
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold font-serif">Our Projects</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80"
              ].map((img, i) => (
                <Link href="/projects" key={i} className="block relative h-20 rounded-lg overflow-hidden group">
                  <Image src={img} alt="Project" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 <span className="text-brand-gold">Badri Kedar Developers</span>. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <div className="w-px h-4 bg-gray-600" />
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <button className="w-10 h-10 bg-brand-gold text-white flex items-center justify-center rounded-lg ml-4 hover:bg-brand-gold-hover transition-colors shadow-lg shadow-brand-gold/20">
              <ChevronLeft size={20} className="rotate-90" />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
