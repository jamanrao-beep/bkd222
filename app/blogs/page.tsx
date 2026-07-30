import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, 
  ChevronRight, ChevronLeft, 
  ArrowRight, Calendar, Search, Clock
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Blogs() {
  const articles = [
    {
      title: "Why Dehradun is Emerging as a Real Estate Hotspot",
      excerpt: "Dehradun is witnessing rapid infrastructure growth, making it the perfect time to invest.",
      date: "21 May, 2025",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "5 Things to Check Before Buying a Property",
      excerpt: "Avoid costly mistakes! Here are the key things every buyer should verify before purchasing.",
      date: "18 May, 2025",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Real Estate Investment: A Smart Long-Term Choice",
      excerpt: "Discover why real estate continues to be one of the most secure and profitable investment options.",
      date: "15 May, 2025",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Under Construction vs Ready to Move: Which is Better?",
      excerpt: "Compare the benefits of under construction and ready-to-move properties.",
      date: "12 May, 2025",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Why Invest in Uttarakhand Real Estate?",
      excerpt: "Uttarakhand offers natural beauty, peaceful living and high investment potential.",
      date: "08 May, 2025",
      img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Home Buying Guide for First-Time Buyers",
      excerpt: "A complete guide to help first-time buyers make informed and confident decisions.",
      date: "05 May, 2025",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Benefits of Investing in Residential Plots",
      excerpt: "Residential plots offer flexibility, appreciation and the freedom to build your dream home.",
      date: "02 May, 2025",
      img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Legal Documents Every Property Buyer Must Know",
      excerpt: "Understand the essential legal documents to ensure a safe and secure property purchase.",
      date: "28 Apr, 2025",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Premium Amenities That Add Value to Your Home",
      excerpt: "Know the amenities that enhance lifestyle and increase the value of your property.",
      date: "25 Apr, 2025",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = [
    { name: "Real Estate Tips", count: "12" },
    { name: "Investment Guide", count: "10" },
    { name: "Market Updates", count: "08" },
    { name: "Property Guide", count: "09" },
    { name: "Home Buying Tips", count: "07" },
    { name: "Legal & Finance", count: "06" },
    { name: "Lifestyle & Living", count: "05" }
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
            <Link href="https://facebook.com" className="hover:text-brand-gold transition-colors"><FaFacebookF size={14} /></Link>
            <Link href="https://instagram.com" className="hover:text-brand-gold transition-colors"><FaInstagram size={14} /></Link>
            <Link href="https://youtube.com" className="hover:text-brand-gold transition-colors"><FaYoutube size={14} /></Link>
            <Link href="https://whatsapp.com" className="hover:text-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
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
            <Link href="/projects" className="text-white hover:text-brand-gold transition-colors">Projects</Link>

            <Link href="/blogs" className="text-brand-gold border-b-2 border-brand-gold pb-1">Blogs</Link>
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
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Read, Learn & More</h1>
          <p className="text-lg text-gray-300 font-medium mb-6 max-w-xl">
            Insights, tips and updates from the world of real estate and property investment.
          </p>
          <div className="flex items-center gap-2 text-sm text-brand-gold font-semibold">
            <Link href="/" className="text-brand-gold hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-brand-gold" />
            <span className="text-white">Read, Learn & More</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 px-8 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Articles Grid (approx 75%) */}
        <div className="lg:col-span-9 flex flex-col">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Our <span className="text-brand-gold">Latest</span> Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {articles.map((article, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:shadow-lg transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={article.img}
                    alt={article.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-brand-gold text-white text-xs font-semibold px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm">
                    <Calendar size={12} /> {article.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <div className="mt-auto">
                    <Link href="/blogs" className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm hover:text-brand-gold-hover transition-colors group/link">
                      Read More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-gold hover:text-brand-gold transition-colors bg-white">
              <ChevronLeft size={16} />
            </button>
            <button className="w-10 h-10 rounded bg-brand-gold text-white font-semibold flex items-center justify-center shadow-md">
              1
            </button>
            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-gold hover:text-brand-gold transition-colors bg-white font-medium">
              2
            </button>
            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-gold hover:text-brand-gold transition-colors bg-white font-medium">
              3
            </button>
            <div className="w-10 h-10 flex items-center justify-center text-gray-400 tracking-widest">
              ...
            </div>
            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-gold hover:text-brand-gold transition-colors bg-white font-medium">
              8
            </button>
            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-gold hover:text-brand-gold transition-colors bg-white">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Side: Sidebar (approx 25%) */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          
          {/* Search Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Search Articles</h3>
            <div className="w-8 h-1 bg-brand-gold mb-6 rounded-full" />
            <div className="flex relative">
              <input 
                type="text" 
                placeholder="Search here..." 
                className="w-full border border-gray-200 rounded-l text-sm px-4 py-3 focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold text-white px-4 py-3 rounded-r hover:bg-brand-gold-hover transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Categories</h3>
            <div className="w-8 h-1 bg-brand-gold mb-6 rounded-full" />
            <ul className="space-y-4">
              {categories.map((cat, i) => (
                <li key={i}>
                  <Link href='#' className="flex items-center justify-between group">
                    <span className="text-gray-600 text-sm font-medium group-hover:text-brand-gold transition-colors">
                      {cat.name}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center text-[10px] font-bold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                      {cat.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Popular Articles</h3>
            <div className="w-8 h-1 bg-brand-gold mb-6 rounded-full" />
            <div className="flex flex-col gap-5">
              {articles.slice(0, 4).map((article, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="relative w-20 h-16 rounded overflow-hidden shrink-0">
                    <Image 
                      src={article.img} 
                      alt={article.title} 
                      fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-gray-900 text-xs leading-snug mb-1.5 group-hover:text-brand-gold transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                      <Calendar size={10} className="text-brand-gold" /> {article.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Stay Informed CTA Section */}
      <section className="bg-[#0f1115] relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80" 
            alt="Cityscape" 
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] to-transparent" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 border-y border-white/5">
          <div className="flex flex-col text-white max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Stay Informed, Make <span className="text-brand-gold">Better Decisions</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Get expert insights and the latest updates to help you make the right property decisions.
            </p>
          </div>
          <div className="shrink-0">
             <Link href="/projects" className="inline-flex items-center justify-center gap-2 border border-brand-gold text-brand-gold px-8 py-3.5 font-semibold rounded hover:bg-brand-gold hover:text-white transition-all text-sm shadow-lg shadow-brand-gold/10">
              Explore Our Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0b0f] pt-20 pb-8 px-8 border-t border-white/5 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Image 
              src="/bkd-white-logo.png" 
              alt="Badri Kedar Developers" 
              width={180} 
              height={70} 
              className="object-contain mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
              Building more than just properties - we build trust, value, and lasting relationships. Your future, our commitment.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://facebook.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaFacebookF size={14} /></Link>
              <Link href="https://instagram.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaInstagram size={14} /></Link>
              <Link href="https://youtube.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaYoutube size={14} /></Link>
              <Link href="https://whatsapp.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-gold font-serif">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Projects', 'Services', 'Gallery', 'Blogs', 'Our Partners', 'Contact Us'].map((link) => (
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
                <span className="leading-relaxed">1st Floor, IT Park, Shop No. 18, Doon Square, Dehradun, Uttarakhand 248013</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 items-center">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+91 92580 02814</span>
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
