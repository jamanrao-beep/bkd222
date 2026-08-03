import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, 
  ChevronRight, ChevronLeft, Building2, ShieldCheck, 
  Clock, Users, Award, Target, Eye, Gem, 
  CheckCircle2, FileText, Leaf, Star, Quote
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-brand-gold selection:text-white">
      {/* Header & Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Building" 
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Top Bar */}
        <div className="relative z-10 hidden md:flex justify-between items-center px-8 py-2 text-xs text-gray-300 border-b border-white/10">
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
        <nav className="relative z-10 flex justify-between items-center px-8 py-4">
          <Link href="/">
            <Image 
              src="/BKD_Logo.png" 
              alt="Badri Kedar Developers" 
              width={160} 
              height={60} 
              className="object-contain"
             style={{ width: "auto", height: "auto" }} />
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
            <Link href="/about" className="text-brand-gold border-b-2 border-brand-gold pb-1">About Us</Link>
            <Link href="/projects" className="text-white hover:text-brand-gold transition-colors">Projects</Link>

            <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>
            <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>
          </div>
          <Link 
            href="/contact" 
            className="hidden md:flex items-center gap-2 bg-brand-gold text-white px-6 py-3 text-sm font-semibold hover:bg-brand-gold-hover transition-all"
          >
            Get Consultation
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-300 font-medium mb-6">Building trust. Creating communities.</p>
          <div className="flex items-center gap-2 text-sm text-brand-gold font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" 
              alt="Our Journey" 
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">OUR JOURNEY</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Journey</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established in the heart of Dev Bhumi, Uttarakhand, Badri Kedar Developers was founded with a simple yet powerful vision - to create thoughtfully planned developments that combine modern infrastructure with the natural beauty of the region.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Every project is guided by transparency, quality craftsmanship, and long-term value, ensuring our customers invest with complete confidence.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col items-start text-left">
                <Users className="text-brand-gold w-8 h-8 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Customer First</h4>
                <p className="text-xs text-gray-500">Your satisfaction is our top priority.</p>
              </div>
              <div className="flex flex-col items-start text-left">
                <FileText className="text-brand-gold w-8 h-8 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Legally Verified Properties</h4>
                <p className="text-xs text-gray-500">All our projects are 100% legally verified.</p>
              </div>
              <div className="flex flex-col items-start text-left">
                <Leaf className="text-brand-gold w-8 h-8 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Sustainable Development</h4>
                <p className="text-xs text-gray-500">Building a better tomorrow, responsibly.</p>
              </div>
              <div className="flex flex-col items-start text-left">
                <FileText className="text-brand-gold w-8 h-8 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Transparent Documentation</h4>
                <p className="text-xs text-gray-500">Clear, simple & hassle-free process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-zinc-50 py-24 px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6">
              <Target className="text-brand-gold w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Deliver exceptional real estate developments through innovation, transparency, and uncompromising quality.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6">
              <Eye className="text-brand-gold w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become Uttarakhand&apos;s most trusted real estate developer, creating communities that inspire generations.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6">
              <Gem className="text-brand-gold w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full text-left">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" /> Integrity
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" /> Sustainability
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" /> Customer Commitment
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" /> Innovation
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" /> Transparency
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" /> Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#0f1115] text-white py-24 px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">MEET OUR LEADERSHIP</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">The People Behind Our Promise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Leader 1 */}
            <div className="border border-brand-gold/30 rounded-xl overflow-hidden flex flex-col sm:flex-row bg-[#16181d] group">
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto shrink-0">
                <Image 
                  src="/Prashanth singh.png" 
                  alt="Prashant Singh" 
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold text-brand-gold mb-1">PRASHANT SINGH</h3>
                <p className="text-sm text-gray-400 mb-4">Director</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  With a strong foundation in real estate and a deep understanding of market dynamics, Prashant Singh leads with integrity and vision. His commitment to quality, transparency, and customer satisfaction drives the company&apos;s growth and success.
                </p>
                <div style={{ fontFamily: "'Caveat', 'Dancing Script', cursive" }} className="text-brand-gold text-4xl opacity-80 mt-2">Prashant Singh</div>
              </div>
            </div>

            </div>
        </div>
      </section>

      {/* Construction Partner */}
      <section className="relative py-24 px-8">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Construction Site" 
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-[#0f1115]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex">
          <div className="max-w-2xl text-white">
            <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">OUR CONSTRUCTION PARTNER</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Kailash Constructions Company</h2>
            <p className="text-gray-300 leading-relaxed mb-12">
              We are proud to be associated with Kailash Construction Company, a trusted name in the construction industry with over 10 years of experience. Known for their quality workmanship, innovative techniques, and on-time project delivery, they play a vital role in turning our vision into reality.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <Award className="text-brand-gold w-10 h-10 mb-3" />
                <h4 className="font-bold text-lg mb-1">10+</h4>
                <p className="text-xs text-gray-400">Experience</p>
              </div>
              <div>
                <Building2 className="text-brand-gold w-10 h-10 mb-3" />
                <h4 className="font-bold text-lg mb-1">Quality</h4>
                <p className="text-xs text-gray-400">Workmanship</p>
              </div>
              <div>
                <Target className="text-brand-gold w-10 h-10 mb-3" />
                <h4 className="font-bold text-lg mb-1">Innovative</h4>
                <p className="text-xs text-gray-400">Techniques</p>
              </div>
              <div>
                <Clock className="text-brand-gold w-10 h-10 mb-3" />
                <h4 className="font-bold text-lg mb-1">On-Time</h4>
                <p className="text-xs text-gray-400">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-50 py-24 px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
            WHY CHOOSE BADRI KEDAR DEVELOPERS?
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: Building2, title: "Premium Developments", desc: "Modern architecture and world-class amenities." },
            { icon: MapPin, title: "Prime Locations", desc: "Strategically located in high-growth areas." },
            { icon: FileText, title: "Clear Documentation", desc: "100% transparent and hassle-free process." },
            { icon: Leaf, title: "Sustainable Planning", desc: "Eco-friendly projects for a better future." },
            { icon: ShieldCheck, title: "Trusted Guidance", desc: "Expert advice at every step of your real estate journey." },
            { icon: Clock, title: "Timely Delivery", desc: "On-time possession with uncompromised quality." }
          ].map((feature, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center justify-start">
              <div className="w-14 h-14 mb-6 flex items-center justify-center border border-brand-gold/30 rounded-full group-hover:bg-brand-gold/5 transition-colors shrink-0">
                <feature.icon className="text-brand-gold w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 leading-snug text-sm">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0f1115] py-12 px-8 border-y border-white/5 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between gap-8">
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
            <Award className="text-brand-gold w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold mb-1">20+</h3>
              <p className="text-xs text-gray-400">Years of Excellence</p>
            </div>
          </div>
          <div className="hidden md:block w-px bg-white/10" />
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
            <Users className="text-brand-gold w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold mb-1">500+</h3>
              <p className="text-xs text-gray-400">Happy Clients</p>
            </div>
          </div>
          <div className="hidden md:block w-px bg-white/10" />
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
            <Building2 className="text-brand-gold w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold mb-1">100+</h3>
              <p className="text-xs text-gray-400">Properties Delivered</p>
            </div>
          </div>
          <div className="hidden md:block w-px bg-white/10" />
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
            <ShieldCheck className="text-brand-gold w-12 h-12" />
            <div>
              <h3 className="text-3xl font-bold mb-1">98%</h3>
              <p className="text-xs text-gray-400">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & Testimonial */}
      <section className="bg-zinc-50 border-b border-gray-200">
        <div className="grid lg:grid-cols-2">
          {/* Commitment (Left) */}
          <div className="relative py-24 px-8 lg:px-16 flex items-center bg-[#0f1115] text-white">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" 
                alt="Our Commitment" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover opacity-30"
              />
            </div>
            <div className="relative z-10 max-w-xl">
              <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">OUR COMMITMENT</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Every Investment Deserves Complete Confidence
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We don&apos;t just develop properties - we create opportunities for families, investors, and future generations. 
              </p>
              <p className="text-gray-300 mb-10 leading-relaxed">
                Every development reflects our commitment to quality, transparency, and long-term value.
              </p>
              <div className="flex gap-4">
                <Link href="/projects" className="bg-brand-gold text-white px-8 py-4 font-semibold hover:bg-brand-gold-hover transition-all rounded">
                  Explore Projects
                </Link>
                <Link href="/contact" className="border border-white/30 px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all rounded">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonial (Right) replaced with GMB */}
          <div className="py-24 px-8 lg:px-16 flex flex-col justify-center items-center bg-white relative">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide text-center">CHECK OUR GOOGLE REVIEWS</h2>
            <Link href="https://share.google/ftjiKC7wvTx2g4uvT" target="_blank" rel="noopener noreferrer" className="bg-white p-10 md:p-14 rounded-2xl shadow-2xl border border-gray-100 max-w-lg w-full relative group hover:border-brand-gold transition-colors flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star size={40} className="text-brand-gold" fill="currentColor" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4">See what our clients say on Google</h3>
              <p className="text-gray-500 mb-8">We pride ourselves on delivering excellent service and quality. Click here to read our Google My Business reviews.</p>
              <span className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 font-semibold hover:bg-brand-gold-hover transition-all rounded shadow-lg">
                View on Google
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-8 px-8 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Image 
              src="/BKD_Logo.png" 
              alt="Badri Kedar Developers" 
              width={180} 
              height={70} 
              className="object-contain mb-6"
             style={{ width: "auto", height: "auto" }} />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building more than just properties - we build trust, value, and lasting relationships. Your future, our commitment.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://www.facebook.com/badrikedardevelopers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaFacebookF size={16} /></Link>
              <Link href="https://www.instagram.com/badrikedardevelopers?igsh=dHNsMnZoazh6N3Bj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaInstagram size={16} /></Link>
              <Link href="https://youtube.com/@badrikedardevelopers?si=Sgf_tHWd8wQ4JJnx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaYoutube size={16} /></Link>
              <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%2 Media0in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaWhatsapp size={16} /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Projects', 'Blogs', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : link === 'About Us' ? '/about' : link === 'Projects' ? '/projects' : link === 'Blogs' ? '/blogs' : link === 'Contact Us' ? '/contact' : link === 'Our Partners' ? '/partners' : '#'} className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
                    <ChevronRight size={12} className="text-brand-gold" /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                <span>Bhagirath Enclave, 52, Balbir Rd, Dalanwala, Dehradun, Uttarakhand 248001</span>
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
            <h3 className="font-bold text-lg mb-6 text-brand-gold">Featured Projects</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "/Proj1.png",
                "/Proj2.png",
                "/Proj3.png",
                "/Proj4.png"
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
          <div className="flex items-center gap-6">
            <button className="w-10 h-10 bg-brand-gold text-white flex items-center justify-center rounded ml-4 hover:bg-brand-gold-hover transition-colors">
              <ChevronLeft size={20} className="rotate-90" />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
