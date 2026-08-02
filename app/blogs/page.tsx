import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, 
  ChevronRight, ChevronLeft, 
  ArrowRight, Calendar, Search, Clock, Bookmark
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Blogs() {
  const articles = [
    {
      title: "Why Investing in Dehradun Plots is Better Than Buying Flats in 2026",
      excerpt: "Buying an apartment might feel like the easier choice, but in 2026, Dehradun plots are proving to be the smarter inve...",
      date: "May 24, 2025",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Top 10 Emerging Areas to Buy Land in Dehradun",
      excerpt: "Dehradun's real estate map is shifting fast, and savvy investors are already looking beyond the city centre toward em...",
      date: "May 21, 2025",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Complete Guide to Buying Residential Plots in Uttarakhand",
      excerpt: "Buying a residential plot in Uttarakhand can be a rewarding investment, but the process comes with its own set of leg...",
      date: "May 18, 2025",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Gated Township vs Open Plot: Which is Better?",
      excerpt: "Choosing between a plot inside a gated township and a standalone open plot is one of the most common dilemmas for lan...",
      date: "May 15, 2025",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "15 Things You Must Check Before Buying Land in Dehradun",
      excerpt: "Buying land is a significant decision, and Dehradun's growing market makes due diligence more important than ever. Be...",
      date: "May 10, 2025",
      img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Why Laltappar–Majrigrant is Becoming Dehradun's Next Investment Hub",
      excerpt: "Among Dehradun's emerging real estate pockets, Laltappar–Majrigrant is quickly building a reputation as the city's ne...",
      date: "May 07, 2025",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Farmhouse Land vs Residential Plots: Which Gives Better Returns?",
      excerpt: "Both farmhouse land and residential plots have carved out strong demand in Dehradun's real estate market, but they se...",
      date: "May 05, 2025",
      img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "How to Finance Your Plot Purchase in Dehradun",
      excerpt: "Financing a plot purchase works differently from financing a ready home, and understanding your options can make the ...",
      date: "May 02, 2025",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Future Development Projects That Will Increase Land Prices in Dehradun",
      excerpt: "Dehradun's land prices are being shaped by a wave of infrastructure and development projects that are steadily transf...",
      date: "Apr 29, 2025",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Why Land is the Safest Long-Term Investment in Uttarakhand",
      excerpt: "When it comes to building long-term wealth, land continues to stand out as one of the most reliable investment option...",
      date: "Apr 25, 2025",
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80"
    },
  ];

  const categories = [
    { name: "Investment Tips", count: "10" },
    { name: "Plot Buying Guide", count: "08" },
    { name: "Dehradun Real Estate", count: "12" },
    { name: "Infrastructure Update", count: "06" },
    { name: "Legal & RERA", count: "07" },
    { name: "Lifestyle & Living", count: "05" },
    { name: "Market Trends", count: "09" }
  ];

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-black selection:bg-brand-gold selection:text-white flex flex-col font-sans">
      {/* Header & Hero Section */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            fill sizes="100vw" 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
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
            <Link href="/blogs" className="text-brand-gold border-b-2 border-brand-gold pb-1">Blogs</Link>
            <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-8">
          <div className="flex items-center gap-2 text-sm text-gray-300 font-medium mb-4">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-brand-gold">Blogs</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Read, Learn <span className="text-brand-gold">&</span> More
          </h1>
          <p className="text-base text-gray-300 font-medium mb-6 max-w-xl leading-relaxed">
            Stay updated with the latest real estate trends, investment guides, and expert insights.
          </p>
          <div className="flex items-center gap-2 text-sm text-white font-semibold">
            <Bookmark size={16} className="text-brand-gold" />
            Valuable Insights. Smarter Decisions.
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 px-8 max-w-[1600px] mx-auto w-full grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Left Side: Articles Grid (approx 75%) */}
        <div className="xl:col-span-9 flex flex-col">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4 inline-block w-fit">
            Our <span className="text-brand-gold">Latest</span> Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {articles.slice(0, 8).map((article, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <Image 
                    src={article.img}
                    alt={article.title}
                    fill sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-gray-800 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                    <Calendar size={10} className="text-brand-gold" /> {article.date}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug line-clamp-2">{article.title}</h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <div className="mt-auto">
                    <Link href="#" className="inline-flex items-center gap-1.5 text-brand-gold font-bold text-xs hover:text-brand-gold-hover transition-colors group/link">
                      Read More <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Box at bottom of grid */}
          <div className="bg-[#fcfaf5] rounded-xl border border-brand-gold/20 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shrink-0 shadow-md text-white">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Stay Updated with Our Latest Insights</h3>
                <p className="text-gray-500 text-sm">Subscribe to get the latest real estate updates and expert tips directly in your inbox.</p>
              </div>
            </div>
            <div className="flex w-full md:w-auto min-w-[300px]">
              <input type="email" placeholder="Enter your email address..." className="w-full border border-gray-200 rounded-l text-sm px-4 py-3 focus:outline-none focus:border-brand-gold bg-white" />
              <button className="bg-brand-gold text-white font-semibold text-sm px-6 py-3 rounded-r hover:bg-brand-gold-hover transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Sidebar (approx 25%) */}
        <div className="xl:col-span-3 flex flex-col gap-6">
          
          {/* Search Articles */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 text-base mb-4">Search Articles</h3>
            <div className="flex relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full border border-gray-200 rounded-l text-xs px-3 py-2.5 focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold text-white px-3 py-2.5 rounded-r hover:bg-brand-gold-hover transition-colors">
                <Search size={14} />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 text-base mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat, i) => (
                <li key={i}>
                  <Link href='#' className="flex items-center justify-between group">
                    <span className="text-gray-500 text-xs font-medium group-hover:text-brand-gold transition-colors">
                      {cat.name}
                    </span>
                    <span className="text-[10px] font-bold text-brand-gold border border-brand-gold rounded-full w-6 h-6 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors">
                      {cat.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Articles */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 text-base mb-4">Popular Articles</h3>
            <div className="space-y-4 mb-6">
              {articles.slice(0, 4).map((article, i) => (
                <div key={i} className="flex gap-3 group cursor-pointer">
                  <div className="relative w-16 h-12 rounded overflow-hidden shrink-0">
                    <Image src={article.img} alt={article.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-gray-900 text-[11px] leading-tight mb-1 line-clamp-2 group-hover:text-brand-gold transition-colors">{article.title}</h4>
                    <div className="flex items-center gap-1 text-[9px] text-gray-400 font-semibold">
                      <Calendar size={8} /> {article.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-brand-gold/10 text-brand-gold font-bold text-xs py-2.5 rounded hover:bg-brand-gold hover:text-white transition-colors flex items-center justify-center gap-1">
              View All Articles <ArrowRight size={12} />
            </button>
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
