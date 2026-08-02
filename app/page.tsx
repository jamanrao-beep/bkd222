import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, 
  ChevronRight, ChevronLeft, Building2, Map, ShieldCheck, 
  Clock, Users, Award, Play, MessageCircle 
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-gold selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/project.png" 
            alt="Premium Building" 
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
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
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-brand-gold border-b-2 border-brand-gold pb-1">Home</Link>
            <Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
            <Link href="/projects" className="hover:text-brand-gold transition-colors">Projects</Link>

            <Link href="/blogs" className="hover:text-brand-gold transition-colors">Blogs</Link>
            <Link href="/partners" className="hover:text-brand-gold transition-colors">Our Partners</Link>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
          </div>
          <Link 
            href="/contact" 
            className="hidden md:flex items-center gap-2 bg-brand-gold text-white px-6 py-3 text-sm font-semibold hover:bg-brand-gold-hover transition-all"
          >
            Get Consultation <ChevronRight size={16} />
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-medium tracking-wide mb-4 text-sm md:text-base">
              Building More Than Just Properties
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Building Trust.<br/>
              <span className="text-brand-gold">Creating Communities.</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed">
              Crafting premium real estate spaces that inspire trust, elevate lifestyles and create lasting value.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/projects" 
                className="flex items-center gap-2 bg-brand-gold text-white px-8 py-4 font-semibold hover:bg-brand-gold-hover transition-all"
              >
                Explore Projects <ChevronRight size={18} />
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center gap-2 border border-white/30 px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all"
              >
                Contact Us <Phone size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 hover:bg-black/50 transition-all backdrop-blur-sm">
          <ChevronLeft size={24} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/20 hover:bg-black/50 transition-all backdrop-blur-sm">
          <ChevronRight size={24} />
        </button>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-6xl">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-wrap md:flex-nowrap justify-between gap-8 shadow-2xl backdrop-blur-md bg-opacity-95">
            <div className="flex items-center gap-4 flex-1">
              <Award className="text-brand-gold w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">20+</h3>
                <p className="text-sm text-gray-400">Years of Excellence</p>
              </div>
            </div>
            <div className="hidden md:block w-px bg-white/10" />
            <div className="flex items-center gap-4 flex-1">
              <Users className="text-brand-gold w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
            <div className="hidden md:block w-px bg-white/10" />
            <div className="flex items-center gap-4 flex-1">
              <Building2 className="text-brand-gold w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-sm text-gray-400">Properties Delivered</p>
              </div>
            </div>
            <div className="hidden md:block w-px bg-white/10" />
            <div className="flex items-center gap-4 flex-1">
              <ShieldCheck className="text-brand-gold w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">98%</h3>
                <p className="text-sm text-gray-400">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* WhatsApp Floating Button */}
        <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%2 Media0in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
          <MessageCircle size={28} />
        </Link>
      </section>

      {/* Premium Developments */}
      <section className="bg-white text-black pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Our Premium Developments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked residential and commercial projects designed for modern living and long-term value.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link href="/projects" className="block relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
            <Image src="/project.png" alt="Our Projects" width={1200} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="bg-brand-gold text-white px-8 py-4 rounded font-bold text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">Explore All Projects</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#111] text-white py-24 px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl font-bold">
            Why Choose Badri Kedar <span className="text-brand-gold">Developers</span>?
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {[
            { icon: Map, title: "Prime Locations", desc: "Strategically located in the best areas." },
            { icon: Building2, title: "Quality Construction", desc: "Built with high-quality materials & standards." },
            { icon: ShieldCheck, title: "Clear Documentation", desc: "100% transparent and legal process." },
            { icon: Clock, title: "Timely Delivery", desc: "On-time possession and commitments." },
            { icon: Users, title: "Customer First", desc: "Your satisfaction is our priority." },
            { icon: Award, title: "Trusted Guidance", desc: "Expert advice at every step." }
          ].map((feature, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-8 text-center hover:border-brand-gold/50 hover:bg-white/5 transition-all group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-brand-gold rounded-xl group-hover:bg-brand-gold/10 transition-colors">
                <feature.icon className="text-brand-gold w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-darker-bg py-24 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Together We Build Opportunities Not Just Structure
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Established in the heart of Dev Bhumi, Uttarakhand, Badri Kedar Developers was founded with a simple yet powerful vision - to create thoughtfully planned developments that combine modern infrastructure with the natural beauty of the region.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Every project is guided by transparency, quality craftsmanship, and long-term value, ensuring our customers invest with complete confidence.
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10">
              <div>
                <div className="w-10 h-10 border border-brand-gold rounded flex items-center justify-center mb-3">
                  <ShieldCheck className="text-brand-gold w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1">Integrity</h4>
                <p className="text-xs text-gray-500">We do what we say, always.</p>
              </div>
              <div>
                <div className="w-10 h-10 border border-brand-gold rounded flex items-center justify-center mb-3">
                  <ShieldCheck className="text-brand-gold w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1">Transparency</h4>
                <p className="text-xs text-gray-500">Clear process, complete trust.</p>
              </div>
              <div>
                <div className="w-10 h-10 border border-brand-gold rounded flex items-center justify-center mb-3">
                  <Award className="text-brand-gold w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1">Quality</h4>
                <p className="text-xs text-gray-500">No compromises on standards.</p>
              </div>
              <div>
                <div className="w-10 h-10 border border-brand-gold rounded flex items-center justify-center mb-3">
                  <Building2 className="text-brand-gold w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1">Sustainability</h4>
                <p className="text-xs text-gray-500">Building for a better tomorrow.</p>
              </div>
            </div>

            
          </div>

          </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-8 bg-[#1a1a1a] border-t border-white/10">
        <div className="absolute inset-0 opacity-10">
           <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" alt="" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">Looking To Invest?</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s Build Something<br/>
              Extraordinary <span className="text-brand-gold">Together</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Whether you are looking for a home, an investment, or a commercial space, we have the perfect option for you.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="flex items-center justify-center gap-3 bg-brand-gold text-white px-8 py-4 font-semibold hover:bg-brand-gold-hover transition-all min-w-[200px] rounded">
              Call Now <Phone size={18} />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-3 border border-white/20 px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all min-w-[200px] rounded">
              Chat on WhatsApp <MessageCircle size={18} className="text-green-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-8 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Image 
              src="/BKD_Logo.png" 
              alt="Badri Kedar Developers" 
              width={180} 
              height={70} 
              className="object-contain mb-6"
            />
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
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80"
              ].map((img, i) => (
                <Link href="/projects" key={i} className="block relative h-20 rounded overflow-hidden group">
                  <Image src={img} alt="Project" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform" />
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
            <button className="w-10 h-10 bg-brand-gold text-white flex items-center justify-center rounded ml-4 hover:bg-brand-gold-hover transition-colors">
              <ChevronLeft size={20} className="rotate-90" />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
