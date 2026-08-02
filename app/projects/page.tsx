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
      title: "Godrej Properties", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Ongoing",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Green Valley Homes", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Completed",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Kedar Heights", location: "Dehradun, Uttarakhand",
      type: "Commercial", status: "Ongoing",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Sunrise Residency", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Completed",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Himalaya Business Center", location: "Dehradun, Uttarakhand",
      type: "Commercial", status: "Ongoing",
      img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "River View Apartments", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Ongoing",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Shivalik Enclave", location: "Dehradun, Uttarakhand",
      type: "Residential", status: "Completed",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "IT Park Square", location: "Dehradun, Uttarakhand",
      type: "Commercial", status: "Ongoing",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    }
  ];

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
            <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%20in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-8 py-5">
          <Link href="/">
            <Image 
              src="/BKD.png" 
              alt="Badri Kedar Developers" 
              width={160} 
              height={60} 
              className="object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-brand-gold transition-colors">About Us</Link>
            <Link href="/projects" className="text-brand-gold border-b-2 border-brand-gold pb-1">Projects</Link>

            <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>
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

      {/* 3D Model Placeholder */}
      <section className="w-full bg-[#111] py-20 flex items-center justify-center border-b border-white/10 relative overflow-hidden h-[50vh] min-h-[400px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="w-20 h-20 border-2 border-brand-gold border-dashed rounded-full flex items-center justify-center mb-6 animate-spin-slow">
             <Building2 className="text-brand-gold w-10 h-10 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-gold font-bold mb-2">Model Comes Here</h2>
          <p className="text-gray-400 text-sm max-w-md">
            (Placeholder for full-screen size interactive 3D model or large immersive image)
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8 max-w-[1400px] mx-auto w-full">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-brand-gold text-white px-6 py-2.5 rounded text-sm font-semibold shadow-md">All Properties</button>
            <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2.5 rounded text-sm font-medium hover:border-brand-gold hover:text-brand-gold transition-colors">Residential</button>
            <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2.5 rounded text-sm font-medium hover:border-brand-gold hover:text-brand-gold transition-colors">Commercial</button>
            <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2.5 rounded text-sm font-medium hover:border-brand-gold hover:text-brand-gold transition-colors">Ongoing Projects</button>
            <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2.5 rounded text-sm font-medium hover:border-brand-gold hover:text-brand-gold transition-colors">Completed Projects</button>
          </div>
          <button className="bg-[#1a1c23] text-white px-6 py-2.5 rounded text-sm font-semibold flex items-center gap-2 shadow-md hover:bg-black transition-colors">
            <Settings2 size={16} /> Filters
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:shadow-lg transition-all duration-300">
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
                  <Link href="/projects" className="flex items-center justify-between text-brand-gold font-semibold text-sm hover:text-brand-gold-hover transition-colors px-4 py-3 border border-brand-gold/30 rounded group-hover:border-brand-gold">
                    View Details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
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
              src="/BKD LOGO Official.png" 
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
              <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%20in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold font-serif">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Projects', 'Services', 'Gallery', 'Blogs', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : link === 'About Us' ? '/about' : link === 'Projects' ? '/projects' : link === 'Contact Us' ? '/contact' : '#'} className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2">
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
            <h3 className="font-bold text-lg mb-6 text-brand-gold font-serif">Featured Projects</h3>
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
