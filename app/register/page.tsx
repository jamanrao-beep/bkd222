import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, 
  ChevronRight, ChevronLeft, 
  ArrowRight, User, Users, Lock, Eye, CheckSquare, 
  LayoutGrid, Building2, Tag, LineChart, FileCheck, Clock, ChevronDown
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Register() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-black selection:bg-brand-gold selection:text-white flex flex-col font-sans">
      {/* Header & Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex flex-col">
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
            <Link href="https://www.instagram.com/badrikedardevelopers?igsh=dHNsMnZoazh6N3Bj" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaInstagram size={14} /></Link>
            <Link href="https://youtube.com/@badrikedardevelopers?si=Sgf_tHWd8wQ4JJnx" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaYoutube size={14} /></Link>
            <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%2 Media0in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-8 py-5">
          <Link href="/">
            <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={440} height={140} className="h-24 w-auto object-contain" />
          </Link>
                                        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-brand-gold transition-colors">About Us</Link>
            <Link href="/projects" className="text-white hover:text-brand-gold transition-colors">Projects</Link>
            <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>
            <Link href="/partners" className="text-white hover:text-brand-gold transition-colors">Our Partners</Link>
            <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>
          </div>
          <Link 
            href="/contact" 
            className="hidden md:flex items-center gap-2 bg-brand-gold text-white px-6 py-2.5 text-sm font-semibold hover:bg-brand-gold-hover transition-all rounded shadow-lg shadow-brand-gold/20"
          >
            Get Consultation <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Create Your Account</h1>
          <p className="text-lg text-gray-300 font-medium mb-6 max-w-xl">
            Join Badri Kedar Developers and explore the best real estate opportunities.
          </p>
          <div className="flex items-center gap-2 text-sm text-brand-gold font-semibold">
            <Link href="/" className="text-brand-gold hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-brand-gold" />
            <span className="text-white">Register</span>
          </div>
        </div>
      </section>

      {/* Main Registration Card Section (Overlapping Hero) */}
      <section className="px-8 max-w-[1200px] mx-auto w-full -mt-32 relative z-20 mb-20">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-100 min-h-[600px]">
          
          {/* Left Side: Form */}
          <div className="p-10 lg:p-14 flex-1">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              Register <span className="text-brand-gold">Now</span>
            </h2>
            <p className="text-gray-500 text-sm mb-10">
              Please fill in the details below to create your account.
            </p>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded focus:ring-brand-gold focus:border-brand-gold block pl-12 p-3.5 transition-colors"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded focus:ring-brand-gold focus:border-brand-gold block pl-12 p-3.5 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded focus:ring-brand-gold focus:border-brand-gold block pl-12 p-3.5 transition-colors"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded focus:ring-brand-gold focus:border-brand-gold block pl-12 pr-12 p-3.5 transition-colors"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                </div>
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  className="w-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm rounded focus:ring-brand-gold focus:border-brand-gold block pl-12 pr-12 p-3.5 transition-colors"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                </div>
                <select 
                  className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-brand-gold focus:border-brand-gold block pl-12 p-3.5 transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500">I am a...</option>
                  <option value="buyer">Buyer</option>
                  <option value="partner">Channel Partner / Real Estate Agent</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LayoutGrid className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                </div>
                <select className="w-full bg-white border border-gray-200 text-gray-500 text-sm rounded focus:ring-brand-gold focus:border-brand-gold block pl-12 p-3.5 transition-colors appearance-none cursor-pointer">
                  <option value="">I am interested in</option>
                  <option value="residential">Residential Properties</option>
                  <option value="commercial">Commercial Properties</option>
                  <option value="investment">Investment Opportunities</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <ChevronRight className="h-5 w-5 text-gray-400 rotate-90" strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center cursor-pointer">
                  <div className="w-3 h-3 bg-brand-gold rounded-sm hidden" />
                </div>
                <label className="text-sm text-gray-600">
                  I agree to the <Link href="/terms" className="text-brand-gold font-medium hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-brand-gold font-medium hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <button 
                type="button"
                className="w-full bg-brand-gold text-white font-semibold rounded text-sm px-5 py-4 mt-4 flex items-center justify-center gap-2 hover:bg-brand-gold-hover transition-colors shadow-lg shadow-brand-gold/20"
              >
                Create Account <ArrowRight size={16} />
              </button>

              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="px-4 text-xs font-semibold text-gray-400">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="text-center text-sm text-gray-600">
                Already have an account? <Link href='#' className="text-brand-gold font-bold hover:underline">Login Now</Link>
              </div>
            </form>
          </div>

          {/* Right Side: Features */}
          <div className="w-full lg:w-[400px] bg-[#0f1115] p-10 lg:p-14 text-white flex flex-col justify-center">
            <h2 className="font-serif text-2xl font-bold mb-10">
              Why <span className="text-brand-gold">Register</span> With Us?
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Building2 className="text-brand-gold w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm mb-1">Early Access to Projects</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Be the first to know about new launches and exclusive offers.</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-white/10" />

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Tag className="text-brand-gold w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm mb-1">Exclusive Offers</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Get access to special discounts and pre-launch deals.</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <LineChart className="text-brand-gold w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm mb-1">Expert Guidance</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Our real estate experts will help you make the right investment.</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <FileCheck className="text-brand-gold w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm mb-1">Secure & Easy Process</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Simple, transparent and completely secure registration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Banner */}
      <section className="px-8 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-[#0f1115] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
          <div className="relative w-full lg:w-[250px] h-[150px] rounded-xl overflow-hidden shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" 
              alt="House" 
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-white">
            <p className="text-brand-gold font-bold tracking-widest text-[10px] uppercase mb-2">NEED HELP?</p>
            <h2 className="font-serif text-3xl font-bold mb-2">We&apos;re Here to Help You</h2>
            <p className="text-sm text-gray-400">Have questions? Our team is ready to assist you.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link href='#' className="flex items-center gap-2 border border-brand-gold text-brand-gold px-6 py-3 font-semibold rounded hover:bg-brand-gold hover:text-white transition-all text-sm">
              <Phone size={16} /> Call Us Now
            </Link>
            <Link href="/contact" className="flex items-center gap-2 bg-brand-gold text-white px-6 py-3 font-semibold rounded hover:bg-brand-gold-hover transition-all text-sm shadow-lg shadow-brand-gold/20">
              <FaWhatsapp size={16} /> Chat on WhatsApp
            </Link>
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
             style={{ width: "auto", height: "auto" }} />
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
              {['Home', 'About Us', 'Projects', 'Blogs', 'Our Partners', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : link === 'About Us' ? '/about' : link === 'Projects' ? '/projects' : link === 'Blogs' ? '/blogs' : link === 'Contact Us' ? '/contact' : link === 'Our Partners' ? '/partners' : '#'} className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
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
                "/new_prop_4.jpg",
                "/ranipokhri_thumbnail.jpg",
                "/thano_thumbnail.jpg",
                "/new_prop_3.jpg"
              ].map((img, i) => (
                <Link href={`/projects/${i+1}`} key={i} className="block relative h-20 rounded overflow-hidden group">
                  <Image src={img} alt="Project" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500">
          <p>© 2026 <span className="text-brand-gold">Badri Kedar Developers</span>. All Rights Reserved.</p>
          
        </div>
      </footer>
    </main>
  );
}
