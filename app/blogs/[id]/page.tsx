import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../data";
import { 
  Phone, Mail, MapPin, Clock,
  ChevronRight, Calendar, ArrowLeft
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-black selection:bg-brand-gold selection:text-white flex flex-col font-sans">
      {/* Top Bar */}
      <div className="relative z-10 hidden md:flex justify-between items-center px-8 py-2 text-xs text-gray-300 border-b border-white/10 bg-black">
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
          <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%20in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-5 bg-black">
        <Link href="/">
          <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={440} height={140} className="h-24 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
          <Link href="/about" className="text-white hover:text-brand-gold transition-colors">About Us</Link>
          <Link href="/projects" className="text-white hover:text-brand-gold transition-colors">Projects</Link>
          <Link href="/blogs" className="text-brand-gold border-b-2 border-brand-gold pb-1">Blogs</Link>
          <Link href="/partners" className="text-white hover:text-brand-gold transition-colors">Our Partners</Link>
          <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>
        </div>
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-brand-gold text-white px-6 py-3 text-sm font-semibold hover:bg-brand-gold-hover transition-all"
        >
          Get Consultation <ChevronRight size={16} />
        </Link>
      </nav>

      {/* Hero / Header Image */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image 
            src={article.img} 
            alt={article.title} 
            fill sizes="100vw" 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 max-w-4xl mx-auto w-full text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-medium mb-6">
            <Link href="/blogs" className="hover:text-brand-gold transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Back to Blogs
            </Link>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-brand-gold font-semibold">
            <Calendar size={16} />
            {article.date}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 px-8 max-w-[900px] mx-auto w-full flex-1">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-gray-800 leading-relaxed text-lg whitespace-pre-wrap">
          {article.content}
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
             style={{ width: "auto", height: "auto" }} />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building more than just properties - we build trust, value, and lasting relationships. Your future, our commitment.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://www.facebook.com/badrikedardevelopers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaFacebookF size={16} /></Link>
              <Link href="https://www.instagram.com/badrikedardevelopers?igsh=dHNsMnZoazh6N3Bj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaInstagram size={16} /></Link>
              <Link href="https://youtube.com/@badrikedardevelopers?si=Sgf_tHWd8wQ4JJnx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaYoutube size={16} /></Link>
              <Link href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%20in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaWhatsapp size={16} /></Link>
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
                "/funvalley_thumbnail.jpg",
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

        <div className="max-w-[1600px] mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-center text-xs text-gray-500">
          <p>© 2026 <span className="text-brand-gold">Badri Kedar Developers</span>. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
