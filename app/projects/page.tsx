import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, 
  ChevronRight, ChevronLeft, Building2, ShieldCheck, 
  Home, Building, Settings2, HandCoins, FileCheck2, UserCheck,
  Map, Award, Clock, Users
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Fun Valley Township", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Ongoing",
      img: "/fun_valley_township.png"
    },
    {
      title: "480 sq yard", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Ongoing",
      img: "/480_sqyard_plot.png"
    },
    {
      title: "530 sq yard", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Ongoing",
      img: "/530_sqyard_plot.png"
    },
    {
      title: "620 sq yard", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Ongoing",
      img: "/181_sqyard_plot.png"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-black selection:bg-brand-gold selection:text-white flex flex-col font-sans">
      {/* Header & Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/home.jpeg" 
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
            <Image 
              src="/BKD_Logo.png" 
              alt="Badri Kedar Developers" 
              width={160} 
              height={60} 
              className="object-contain"
             style={{ width: "auto", height: "auto" }} />
          </Link>
                              <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-brand-gold border-b-2 border-brand-gold pb-1">Home</Link>
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
            Get Consultation
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Our Properties</h1>
          <p className="text-lg text-gray-300 font-medium mb-6">Exceptional properties crafted for a better tomorrow.</p>
          <div className="flex items-center gap-2 text-sm text-brand-gold font-semibold">
            <Link href="/" className="text-brand-gold hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-brand-gold" />
            <span className="text-white">Properties</span>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="py-20 px-8 max-w-[1400px] mx-auto w-full">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <Link href={`/projects/${i+1}`} key={i} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={project.img}
                  alt={project.title}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded shadow-sm ${project.status === 'Ongoing' ? 'bg-brand-gold text-white' : 'bg-[#1a1c23] text-white'}`}>
                  {project.status}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{project.title}</h3>
                <p className="text-gray-500 text-xs mb-4">{project.location}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium mb-5">
                  {project.type === 'Residential' ? (
                    <Home size={16} className="text-gray-400" />
                  ) : (
                    <Building size={16} className="text-gray-400" />
                  )}
                  {project.type}
                </div>
                <div className="mt-auto">
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <div className="flex items-center justify-between text-brand-gold font-semibold text-sm hover:text-brand-gold-hover transition-colors px-4 py-3 border border-brand-gold/30 rounded group-hover:border-brand-gold">
                    View Details <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Looking For Perfect Property */}
      <section className="bg-[#0b0c10] py-24 px-8 text-white border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4">LOOKING FOR THE PERFECT PROPERTY?</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let Us Help You Find<br/>Your Dream Property
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-10 max-w-lg">
              Whether you are looking for a home, an investment, or a commercial space, we have the perfect option for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-gold text-white px-8 py-3.5 font-semibold rounded hover:bg-brand-gold-hover transition-all text-sm shadow-lg shadow-brand-gold/20">
                Get Free Consultation
              </Link>
              <Link href="/contact" className="flex items-center gap-2 border border-white/20 px-8 py-3.5 font-semibold rounded hover:bg-white hover:text-black transition-all text-sm">
                Contact Us <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-brand-gold/50 transition-colors group">
              <ShieldCheck className="text-brand-gold w-10 h-10 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h4 className="font-bold mb-2">Verified<br/>Properties</h4>
              <p className="text-xs text-gray-400">100% legally verified<br/>and hassle-free.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-brand-gold/50 transition-colors group">
              <HandCoins className="text-brand-gold w-10 h-10 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h4 className="font-bold mb-2">Best Investment<br/>Options</h4>
              <p className="text-xs text-gray-400">High appreciation<br/>and great returns.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-brand-gold/50 transition-colors group">
              <FileCheck2 className="text-brand-gold w-10 h-10 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h4 className="font-bold mb-2">Transparent<br/>Process</h4>
              <p className="text-xs text-gray-400">Clear documentation<br/>and full transparency.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-brand-gold/50 transition-colors group">
              <UserCheck className="text-brand-gold w-10 h-10 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h4 className="font-bold mb-2">Expert<br/>Guidance</h4>
              <p className="text-xs text-gray-400">Professional advice<br/>at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="bg-[#fafafa] py-24 px-8 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Why Invest With Badri Kedar Developers?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <Map className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Prime Locations</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Strategically located projects in the best areas.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <Building2 className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Quality Construction</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Built with high-quality materials and standards.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <Building className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Modern Amenities</h4>
                <p className="text-xs text-gray-500 leading-relaxed">World-class amenities for a comfortable lifestyle.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <Clock className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Timely Delivery</h4>
                <p className="text-xs text-gray-500 leading-relaxed">On-time possession and commitment.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <Award className="text-brand-gold w-10 h-10" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Customer Satisfaction</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Our customers are at the heart of everything we do.</p>
              </div>
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
            <h3 className="font-bold text-lg mb-6 text-brand-gold font-serif">Featured Projects</h3>
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
          
        </div>
      </footer>
    </main>
  );
}
