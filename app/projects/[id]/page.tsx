import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MapPin, Mail, Clock } from "lucide-react";
import FunValley from "./FunValley";
import Plot480 from "./Plot480";
import Plot530 from "./Plot530";
import Plot620 from "./Plot620";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  
  // We have Proj1 to Proj4
  if (isNaN(projectId) || projectId < 1 || projectId > 4) {
    notFound();
  }

  if (projectId === 1) {
    return <FunValley />;
  }

  if (projectId === 2) {
    return <Plot480 />;
  }

  if (projectId === 3) {
    return <Plot530 />;
  }

  if (projectId === 4) {
    return <Plot620 />;
  }

  const projectImage = `/Proj${projectId}.png`;

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-black selection:bg-brand-gold selection:text-white flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-black relative z-10 flex justify-between items-center px-8 py-5">
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
          <Link href="/projects" className="text-brand-gold border-b-2 border-brand-gold pb-1">Projects</Link>
          <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>
          <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 px-8 max-w-[1200px] mx-auto w-full flex-1">
        <Link href="/projects" className="inline-flex items-center gap-2 text-brand-gold font-bold mb-8 hover:text-brand-gold-hover transition-colors">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
        
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-xl border border-gray-100 mb-12">
          <Image 
            src={projectImage}
            alt={`Project ${projectId}`}
            width={1200}
            height={1600}
            className="w-full h-auto rounded-xl mb-8"
            priority
          />
          <div className="px-2">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {projectId === 1 ? "Fun Valley Township" : 
               projectId === 2 ? "480 sq yard" : 
               projectId === 3 ? "530 sq yard" : "181 sq yard"}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to this premium property offering unparalleled luxury, comfort, and state-of-the-art amenities. Designed with meticulous attention to detail, this space perfectly balances modern aesthetics with functional living. Surrounded by lush greenery and offering excellent connectivity, it presents an exceptional opportunity for both homeowners and investors seeking lasting value in Dehradun.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gray-100">
              <div>
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <p className="font-semibold text-gray-900">Ready to Move</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Property Type</p>
                <p className="font-semibold text-gray-900">Residential</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-semibold text-gray-900">Dehradun, UK</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Contact</p>
                <p className="font-semibold text-brand-gold">Get in touch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-16 pb-8 px-8 border-t border-white/10 text-white mt-auto">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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

        <div className="max-w-[1600px] mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-center text-xs text-gray-500">
          <p>© 2024 <span className="text-brand-gold">Badri Kedar Developers</span>. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
