import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, 
  ChevronRight, ChevronLeft, ShieldCheck, 
  Clock, Users, Award, Target,
  ArrowRight
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Partners() {
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
            <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>
            <Link href="/partners" className="text-brand-gold border-b-2 border-brand-gold pb-1">Partners</Link>
          </div>
          <Link 
            href="/contact" 
            className="hidden md:flex items-center gap-2 bg-brand-gold text-white px-6 py-2.5 text-sm font-semibold hover:bg-brand-gold-hover transition-all rounded shadow-lg shadow-brand-gold/20"
          >
            Get Consultation <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Our Trusted Partners</h1>
          <p className="text-lg text-gray-300 font-medium mb-6">Stronger Collaborations. Greater Excellence.</p>
          <div className="flex items-center gap-2 text-sm text-brand-gold font-semibold">
            <Link href="/" className="text-brand-gold hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-brand-gold" />
            <span className="text-white">Our Trusted Partners</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="flex flex-col">
            <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">TOGETHER WE BUILD EXCELLENCE</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building More Than Structures &ndash; Building <span className="text-brand-gold">Trust</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              At Badri Kedar Developers, we believe that exceptional results come from exceptional partnerships. We proudly collaborate with industry-leading experts who share our commitment to quality, transparency, and customer satisfaction.
            </p>
          </div>
          <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1560250059-45e0d4c20f18?auto=format&fit=crop&w=800&q=80" 
              alt="Handshake Partnership" 
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Banner */}
        <div className="bg-[#1a1c23] rounded-2xl p-8 md:p-12 shadow-xl border border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <ShieldCheck className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-white mb-2">Trusted Collaboration</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We partner with verified and experienced professionals committed to excellence.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-white mb-2">Quality Assurance</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our partners uphold the highest standards in design, construction and service delivery.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-white mb-2">Shared Vision</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We work with partners who align with our vision of creating value and lasting relationships.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Target className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-white mb-2">Client First Approach</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                All our partnerships are built with one goal &ndash; delivering the best for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-16 px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full mb-12">
          {/* Partner 1 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Logo simulation */}
              <div className="flex flex-col items-center">
                <div className="text-red-700 font-serif font-black tracking-widest text-xl leading-none">KAILASH</div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">Construction Company</div>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Construction Partner</div>
          </div>

          {/* Partner 2 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-xl font-bold text-gray-800 tracking-wider font-serif flex flex-col items-center">
                <span className="text-3xl leading-none text-brand-gold">A</span>
                <span className="text-xs mt-1">AR. PRAMOD KUMAR</span>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Architect Partner</div>
          </div>

          {/* Partner 3 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center text-gray-800">
                <svg className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l10 18H2L12 3zm0 4.5l-6.5 11.5h13L12 7.5z"/></svg>
                <div className="font-bold text-sm tracking-widest">MAHADEV</div>
                <div className="text-[8px] tracking-widest uppercase">Steel Industries</div>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Steel Supplier</div>
          </div>

          {/* Partner 4 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-[#003876] rounded-sm"></div>)}
                </div>
                <div className="flex flex-col text-[#003876] font-bold leading-tight text-xs">
                  <span>MP BIRLA</span>
                  <span>CEMENT</span>
                </div>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Cement Partner</div>
          </div>

          {/* Partner 5 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex items-center text-[#ff8000] font-bold text-lg font-serif">
                <span className="text-[#a51a1a] mr-1 text-2xl font-black italic">ap</span>
                asianpaints
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Paint Partner</div>
          </div>

          {/* Partner 6 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-[#e31837] font-bold text-2xl italic tracking-tighter">Supreme</div>
              <div className="text-[7px] text-gray-500 uppercase mt-1">People who know plastics best</div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Plumbing Partner</div>
          </div>

          {/* Partner 7 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-gray-600 font-bold text-2xl tracking-widest font-sans">
                H<span className="text-red-600 text-3xl leading-none -ml-1">^</span>FELE
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Hardware Partner</div>
          </div>

          {/* Partner 8 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-[#e22926] font-black text-xl tracking-wider">POLYCAB</div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Electrical Partner</div>
          </div>

          {/* Partner 9 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-[#005a5b] font-bold text-2xl font-serif italic">Jaquar</div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Sanitary Partner</div>
          </div>

          {/* Partner 10 */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-between h-40 hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-[#e3000f] font-normal text-2xl tracking-tighter">hindware</div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-4">Bath Partner</div>
          </div>
        </div>

        <button className="flex items-center gap-2 border border-brand-gold text-brand-gold font-semibold px-6 py-2.5 rounded hover:bg-brand-gold hover:text-white transition-all text-sm">
          Become Our Partner <Users size={16} />
        </button>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#0f1115] py-20 px-8">
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
          <Image 
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2000&q=80" 
            alt="City Handshake" 
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-[#0f1115]/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
          <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">PARTNER WITH US</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Let&apos;s Create Landmarks <span className="text-brand-gold">Together</span>
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl text-sm md:text-base leading-relaxed">
            We are always open to associating with like-minded organizations and professionals who share our passion for quality and innovation. Let&apos;s build a better tomorrow, together.
          </p>
          <div>
            <Link href='#' className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white px-8 py-3.5 font-semibold rounded hover:bg-brand-gold-hover transition-all text-sm shadow-lg shadow-brand-gold/20">
              Partner With Us <ArrowRight size={16} />
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
              {['Home', 'About Us', 'Projects', 'Blogs', 'Contact Us', 'Our Trusted Partners'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : link === 'About Us' ? '/about' : link === 'Contact Us' ? '/contact' : link === 'Our Trusted Partners' ? '/partners' : '#'} className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
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
                <span className="leading-relaxed">1st Floor, IT Park, Shop No. 18, Doon Square, Dehradun, Uttarakhand 248013</span>
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
