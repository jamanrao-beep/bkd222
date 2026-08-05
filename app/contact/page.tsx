import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, ChevronDown,
  ChevronRight, ChevronLeft, Building2, ShieldCheck, 
  Clock, Users, Award, Target, Eye, Gem, 
  CheckCircle2, FileText, Leaf, Star, Quote,
  Send, User, BookOpen, Clock4, Timer,
  MessageSquare, Calendar, Handshake, ChevronUp
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-black selection:bg-brand-gold selection:text-white flex flex-col font-sans">
      {/* Header & Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Building" 
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Top Bar */}
        <div className="relative z-10 hidden md:flex justify-between items-center px-8 py-3 text-xs text-gray-300 border-b border-white/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-gold" />
              <span>Bhagirath Enclave, 52, Balbir Rd, Dalanwala, Dehradun, Uttarakhand 248001</span>
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
            <Link href="https://www.instagram.com/badrikedardevelopers" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaInstagram size={14} /></Link>
            <Link href="https://youtube.com/@badrikedardevelopers" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaYoutube size={14} /></Link>
            <Link href="https://wa.me/919756580000" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-8 py-5">
          <Link href="/">
            <Image 
              src="/bkd-white-logo.png" 
              alt="Badri Kedar Developers" 
              width={160} 
              height={60} 
              className="object-contain"
             style={{ width: "auto", height: "auto" }} />
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-brand-gold transition-colors">About Us</Link>
            <Link href="/projects" className="text-white hover:text-brand-gold transition-colors">Projects</Link>
            <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>
            <Link href="/partners" className="text-white hover:text-brand-gold transition-colors">Our Partners</Link>
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
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-12 pt-10 max-w-5xl">
          <div className="flex items-center gap-2 text-sm font-semibold mb-6">
            <Link href="/" className="text-brand-gold hover:text-white transition-colors">Home</Link>
            <span className="text-white">/</span>
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
            We&apos;re here to help you make the right real estate investment in Dehradun. Reach out to us for any queries, site visits, or more information.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative z-20 px-8 max-w-7xl mx-auto w-full -mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] flex items-start gap-4 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
              <MessageSquare className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Message Us</h3>
              <p className="font-semibold text-gray-900 text-sm mb-1">+91 9756580000</p>
              <p className="text-xs text-gray-500">Chat with us for quick assistance</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] flex items-start gap-4 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
              <Mail className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Email Us</h3>
              <p className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 break-all">info@badrikedardevelopers.com</p>
              <p className="text-xs text-gray-500">We reply within 24 hours</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] flex items-start gap-4 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Visit Us</h3>
              <p className="font-semibold text-gray-900 text-sm mb-1">Dehradun, Uttarakhand, India</p>
              <p className="text-xs text-gray-500">Get directions on the map</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] flex items-start gap-4 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
              <FaWhatsapp className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1">WhatsApp</h3>
              <p className="font-semibold text-gray-900 text-sm mb-1">+91 9756580000</p>
              <p className="text-xs text-gray-500">Chat with us on WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form and Map */}
      <section className="px-8 max-w-7xl mx-auto w-full pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Form */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Send Us a <span className="text-brand-gold">Message</span>
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mb-6" />
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Have a question or need assistance? Fill out the form and our team will get back to you shortly.
            </p>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold p-4" />
                <input type="email" placeholder="Your Email" className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold p-4" />
              </div>
              <input type="tel" placeholder="Your Phone Number" className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold p-4" />
              <input type="text" placeholder="Subject" className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold p-4" />
              <textarea placeholder="Your Message" rows={5} className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold p-4 resize-none"></textarea>
              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" id="agree" className="w-4 h-4 text-brand-gold border-gray-300 rounded focus:ring-brand-gold" />
                <label htmlFor="agree" className="text-sm text-gray-500 font-medium">
                  I agree to the <Link href="#" className="text-brand-gold hover:underline">Privacy Policy</Link> and <Link href="#" className="text-brand-gold hover:underline">Terms & Conditions</Link>.
                </label>
              </div>
              <button type="button" className="bg-brand-gold text-white font-semibold rounded-lg text-sm px-8 py-3.5 mt-4 flex items-center justify-center gap-2 hover:bg-brand-gold-hover transition-colors w-fit shadow-[0_4px_14px_0_rgba(232,139,32,0.39)]">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* Right: Map and Features */}
          <div className="flex flex-col gap-10">
            {/* Map */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-brand-gold">Office</span>
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold mb-6" />
              <div className="relative w-full h-[280px] rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 bg-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=Dehradun%2C%20Uttarakhand%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Why Contact <span className="text-brand-gold">Us?</span>
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <User className="text-brand-gold w-8 h-8 mb-3" strokeWidth={1.5} />
                  <h4 className="font-bold text-gray-900 text-xs mb-2">Expert Guidance</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed max-w-[120px]">Get professional advice for your real estate investment.</p>
                </div>
                <div className="flex flex-col items-center border-l border-gray-200">
                  <Calendar className="text-brand-gold w-8 h-8 mb-3" strokeWidth={1.5} />
                  <h4 className="font-bold text-gray-900 text-xs mb-2">Site Visit Assistance</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed max-w-[120px]">We help you schedule and plan your site visits.</p>
                </div>
                <div className="flex flex-col items-center border-l border-gray-200">
                  <FileText className="text-brand-gold w-8 h-8 mb-3" strokeWidth={1.5} />
                  <h4 className="font-bold text-gray-900 text-xs mb-2">Transparent Process</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed max-w-[120px]">Clear information and support at every step.</p>
                </div>
                <div className="flex flex-col items-center border-l border-gray-200">
                  <Handshake className="text-brand-gold w-8 h-8 mb-3" strokeWidth={1.5} />
                  <h4 className="font-bold text-gray-900 text-xs mb-2">Dedicated Support</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed max-w-[120px]">Our team is here to assist you with all your queries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#0a0a0a] overflow-hidden py-12 px-8 border-b-4 border-brand-gold">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80" alt="Road Background" fill className="object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border-2 border-brand-gold/30 flex items-center justify-center shrink-0 border-dashed">
               <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center">
                 <MessageSquare className="text-white w-6 h-6 fill-current" />
               </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-white mb-2">
                Let&apos;s Talk About <span className="text-brand-gold">Your Future!</span>
              </h2>
              <p className="text-gray-300 text-sm max-w-lg leading-relaxed">
                Have questions or need help choosing the right plot?<br className="hidden sm:block" /> Message us today — we&apos;re here to help.
              </p>
            </div>
          </div>
          <button className="shrink-0 bg-brand-gold text-white font-bold rounded text-sm px-6 py-4 flex items-center gap-2 hover:bg-brand-gold-hover transition-colors shadow-lg shadow-brand-gold/20">
            <MessageSquare size={16} className="fill-current" /> Message Us: +91 9756580000
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] pt-16 pb-6 px-8 text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1 */}
          <div className="lg:col-span-1">
            <Image 
              src="/BKD_Logo.png" 
              alt="Badri Kedar Developers" 
              width={160} 
              height={60} 
              className="object-contain mb-4"
             style={{ width: "auto", height: "auto" }} />
            <p className="text-gray-400 text-xs leading-relaxed mb-6 font-medium">
              Premium land opportunities across Uttarakhand for a better tomorrow.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://www.facebook.com/badrikedardevelopers" target="_blank" className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaFacebookF size={10} /></Link>
              <Link href="https://www.instagram.com/badrikedardevelopers" target="_blank" className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaInstagram size={10} /></Link>
              <Link href="https://youtube.com/@badrikedardevelopers" target="_blank" className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaYoutube size={10} /></Link>
              <Link href="#" target="_blank" className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><span className="text-[10px] font-bold">in</span></Link>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-bold text-xs mb-5 uppercase tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Properties', 'Read & Learn More', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-xs font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-bold text-xs mb-5 uppercase tracking-wide">IMPORTANT LINKS</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-xs font-medium">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-xs font-medium">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="font-bold text-xs mb-5 uppercase tracking-wide">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-xs text-gray-400 items-start font-medium">
                <Phone size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <span>+91 9756580000</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-400 items-start font-medium">
                <Mail size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <span>info@badrikedardevelopers.com</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-400 items-start font-medium">
                <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Dehradun, Uttarakhand, India</span>
              </li>
            </ul>
          </div>

          {/* Col 5 */}
          <div>
            <h3 className="font-bold text-xs mb-5 uppercase tracking-wide">OUR LOCATION</h3>
            <div className="relative w-full h-24 rounded border border-white/10 bg-gray-200 overflow-hidden">
               <iframe
                  src="https://maps.google.com/maps?q=Dehradun%2C%20Uttarakhand%2C%20India&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                ></iframe>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex items-center justify-center text-[11px] text-gray-500 relative">
          <p>© 2024 Badri Kedar Developers. All Rights Reserved.</p>
          <button className="absolute right-0 bottom-0 bg-brand-gold w-8 h-8 rounded text-white flex items-center justify-center hover:bg-brand-gold-hover transition-colors shadow-lg">
            <ChevronUp size={16} />
          </button>
        </div>
      </footer>
    </main>
  );
}
