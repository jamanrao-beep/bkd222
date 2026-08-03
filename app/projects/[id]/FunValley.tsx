import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { 
  Map, Users, Navigation, TreePine, Home, 
  Lightbulb, Zap, Gamepad2, Store, FileText, 
  HandCoins, TrendingUp, Leaf, HardHat, MapPin,
  ArrowLeft, Building2, ChevronRight, Clock, Mail
} from "lucide-react";

export default function FunValley() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-4 bg-black border-b border-white/10">
        <Link href="/">
          <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={160} height={60} className="object-contain" style={{ width: "auto", height: "auto" }} />
        </Link>
                            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
            <Link href="/about" className="text-white hover:text-brand-gold transition-colors">About Us</Link>
            <Link href="/projects" className="text-white hover:text-brand-gold transition-colors">Projects</Link>
            <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>
            <Link href="/partners" className="text-white hover:text-brand-gold transition-colors">Our Partners</Link>
            <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>
          </div>
      </nav>

      <div className="px-8 py-4">
        <Link href="/projects" className="inline-flex items-center gap-2 text-[#0a1128] font-bold hover:text-brand-gold transition-colors">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* Top Hero Section */}
      <section className="relative w-full min-h-[950px] lg:min-h-screen flex flex-col pt-12 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-white">
           {/* We use a generic sky at the top and the township image below to match the infographic style */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#e0f0ff] to-transparent h-[300px] z-0"></div>
           <div className="absolute top-[200px] inset-x-0 bottom-0 z-0">
             <Image 
               src="/fun_valley_township.png" 
               alt="Fun Valley Township" 
               fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
               className="object-cover object-top"
               priority
             />
           </div>
        </div>

        {/* Project 01 Ribbon */}
        <div className="absolute top-0 right-12 z-20 bg-[#0a1128] text-white flex flex-col items-center justify-center w-28 h-36">
           <span className="text-sm font-semibold tracking-wider mt-4">PROJECT</span>
           <span className="text-5xl font-bold text-brand-gold mt-1">01</span>
           <div className="absolute -bottom-6 left-0 w-0 h-0 border-l-[56px] border-l-transparent border-r-[56px] border-r-transparent border-t-[24px] border-t-[#0a1128]"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center mt-8 text-center px-4">
           <h1 className="text-[#0a1128] text-5xl md:text-7xl font-black tracking-tight mb-6">
             FUN VALLEY TOWNSHIP
           </h1>
           <div className="bg-[#0a1128] text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
             <MapPin className="text-brand-gold" size={20} />
             <span className="font-medium tracking-wide">Majrigrant, Laltappar, Dehradun-Haridwar Highway (NH-07)</span>
           </div>
        </div>

        {/* Floating Left Boxes */}
        <div className="relative z-10 flex flex-col gap-3 mt-16 ml-4 md:ml-12 max-w-[340px]">
           {[
             { icon: Map, title: "57 BIGHA", subtitle: "GATED TOWNSHIP" },
             { icon: Users, title: "150+", subtitle: "PLOTS" },
             { icon: Navigation, title: "700-800 MTR", subtitle: "FROM NH-07" },
             { icon: TreePine, title: "2-SIDED", subtitle: "RESERVE FOREST VIEW" },
             { icon: Home, title: "IDEAL FOR RESIDENTIAL", subtitle: "LIVING & FUTURE INVESTMENT" },
           ].map((item, idx) => (
             <div key={idx} className="bg-[#0a1128]/90 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4 text-white shadow-xl transition-transform hover:scale-105">
               <div className="border border-white/20 p-2 rounded-lg">
                 <item.icon size={28} strokeWidth={1.5} />
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-lg leading-tight">{item.title}</span>
                 <span className="text-xs font-semibold text-gray-300">{item.subtitle}</span>
               </div>
             </div>
           ))}
        </div>

        {/* Bottom Dark Bar overlaying the image */}
        <div className="absolute bottom-8 left-4 right-4 md:left-12 md:right-12 z-20">
           <div className="bg-[#0a1128]/95 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-6 flex flex-wrap justify-between items-center text-white shadow-2xl gap-4">
             {[
               { icon: Navigation, title: "30 FT WIDE", subtitle: "INTERNAL ROADS" },
               { icon: Lightbulb, title: "STREET", subtitle: "LIGHTS" },
               { icon: Zap, title: "24/7 WATER,", subtitle: "ELECTRICITY, INTERNET" },
               { icon: Gamepad2, title: "PARK & KIDS", subtitle: "PLAY ZONE" },
               { icon: Store, title: "ON-CAMPUS", subtitle: "STORE" },
             ].map((item, idx) => (
               <div key={idx} className="flex items-center gap-3 flex-1 min-w-[150px]">
                 <item.icon size={32} className="text-gray-300" strokeWidth={1.2} />
                 <div className="flex flex-col">
                   <span className="font-bold text-sm">{item.title}</span>
                   <span className="text-xs font-semibold text-gray-400">{item.subtitle}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Bottom Content Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-[#f8f9fa]">
        
        {/* Info & Rate block */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-[#0a1128] mb-6 tracking-tight">ABOUT PROJECT</h2>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Fun Valley Township is a premium 57 Bigha gated community with 150+ plots just 700-800 meters from Dehradun-Haridwar NH-07. Surrounded by 2-sided reserve forest, it offers a peaceful environment with modern infrastructure and all essential amenities — perfect for residential living and future investment.
            </p>
          </div>
          <div className="bg-[#0a1128] text-white rounded-3xl p-10 flex flex-col items-center justify-center min-w-[350px] shadow-2xl">
             <span className="text-xl font-bold tracking-widest mb-2">RATE</span>
             <span className="text-5xl font-black text-[#f1c40f] mb-2 tracking-tighter">₹28,000/-</span>
             <span className="text-sm font-bold tracking-widest text-gray-300">PER SQ. YARD</span>
          </div>
        </div>

        {/* Bottom Features Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-300 pt-16 pb-16">
           {[
             { icon: FileText, title: "CLEAR LAND TITLE", subtitle: "& TRANSPARENT\nPAPERWORK" },
             { icon: HandCoins, title: "EASY LOAN FACILITY", subtitle: "FROM HDFC, PNB,\nINDIAN OVERSEAS &\nMORE" },
             { icon: TrendingUp, title: "HIGH ROI", subtitle: "POTENTIAL" },
             { icon: Leaf, title: "PEACEFUL", subtitle: "SURROUNDINGS" },
             { icon: HardHat, title: "MULTIPLE", subtitle: "CONSTRUCTION\nUNDER PROCESS" },
           ].map((item, idx) => (
             <div key={idx} className="flex flex-col items-center text-center">
               <div className="mb-4">
                 <item.icon size={48} className="text-[#0a1128]" strokeWidth={1.2} />
               </div>
               <span className="font-bold text-[#0a1128] text-sm leading-tight mb-1">{item.title}</span>
               <span className="text-xs font-semibold text-[#0a1128]/70 whitespace-pre-line">{item.subtitle}</span>
             </div>
           ))}
        </div>

      </section>

      {/* --- NEW CONTINUATION SECTIONS --- */}
      
      {/* PROJECT HIGHLIGHTS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-white border-t border-gray-100">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-brand-gold w-16"></div>
          <h2 className="text-3xl font-black text-[#0a1128] tracking-tight text-center">PROJECT HIGHLIGHTS</h2>
          <div className="h-px bg-brand-gold w-16"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
           {[
             { icon: Home, title: "Gated Entry", subtitle: "& Exit" },
             { icon: Navigation, title: "30 FT Wide", subtitle: "Internal Roads" },
             { icon: Lightbulb, title: "Street", subtitle: "Lights" },
             { icon: Zap, title: "24/7 Water,", subtitle: "Electricity,\nInternet" },
             { icon: Gamepad2, title: "Parks & Kids", subtitle: "Play Zone" },
             { icon: Store, title: "On-Campus", subtitle: "Store" },
           ].map((item, idx) => (
             <div key={idx} className="flex flex-col items-center">
               <div className="mb-4 text-[#0a1128]">
                 <item.icon size={48} strokeWidth={1.2} />
               </div>
               <span className="font-bold text-[#0a1128] text-sm leading-tight">{item.title}</span>
               <span className="text-sm text-[#0a1128] whitespace-pre-line">{item.subtitle}</span>
             </div>
           ))}
        </div>
      </section>

      {/* PLOT SIZES & CONSTRUCTION STATUS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-[#f8f9fa]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left: Plot Sizes */}
          <div>
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="h-px bg-brand-gold w-12"></div>
              <h3 className="text-2xl font-black text-[#0a1128]">PLOT SIZES AVAILABLE</h3>
              <div className="h-px bg-brand-gold w-12"></div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { gaj: "138 Gaj", dim: "25×50" },
                { gaj: "166 Gaj", dim: "30×50" },
                { gaj: "200 Gaj", dim: "30×60" },
                { gaj: "240 Gaj", dim: "30×72" },
                { gaj: "277 Gaj", dim: "50×50" },
                { gaj: "286 Gaj", dim: "43×60" },
                { gaj: "388 Gaj", dim: "50×70" },
                { gaj: "Up to", dim: "500 Gaj" },
              ].map((plot, i) => (
                <div key={i} className="border border-gray-300 bg-white rounded-lg p-3 text-center shadow-sm">
                  <div className="font-bold text-[#0a1128] text-lg">{plot.gaj}</div>
                  <div className="text-sm text-gray-500 font-medium">{plot.dim}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 text-sm font-semibold text-[#0a1128]">
              <Map size={20} className="text-brand-gold" />
              <span>Two-sided, East West North South plots available</span>
            </div>
          </div>

          {/* Right: Construction Status */}
          <div>
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="h-px bg-brand-gold w-12"></div>
              <h3 className="text-2xl font-black text-[#0a1128]">CONSTRUCTION STATUS</h3>
              <div className="h-px bg-brand-gold w-12"></div>
            </div>
            
            <ul className="space-y-4">
              {[
                "Roads Completed",
                "Water Pipelines Completed",
                "Electricity Completed\n(4 Transformers of 250 KW, 1 Already Setup)",
                "Construction on Plot No. 1 completed",
                "Multiple construction under process"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 bg-brand-gold rounded-full p-0.5">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[#0a1128] font-medium whitespace-pre-line">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEARBY LANDMARKS & UPCOMING */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left: Nearby Landmarks */}
          <div>
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="h-px bg-brand-gold w-12"></div>
              <h3 className="text-2xl font-black text-[#0a1128]">NEARBY LANDMARKS</h3>
              <div className="h-px bg-brand-gold w-12"></div>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-10 flex justify-center text-[#0a1128]"><Building2 size={28} strokeWidth={1.5} /></div>
                <div>
                  <span className="font-bold text-[#0a1128]">Holy Angel School</span>
                  <span className="text-gray-500 ml-4 font-medium">1.5 – 2 km</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 flex justify-center text-[#0a1128]"><MapPin size={28} strokeWidth={1.5} /></div>
                <div>
                  <span className="font-bold text-[#0a1128]">Indian Oil Petrol Pump</span>
                  <span className="text-gray-500 ml-4 font-medium">1.5 – 2 km</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 flex justify-center text-[#0a1128]"><FileText size={28} strokeWidth={1.5} /></div>
                <div>
                  <span className="font-bold text-[#0a1128]">Uttaranchal Dental College</span>
                  <span className="text-gray-500 ml-4 font-medium">1.5 – 2 km</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 flex justify-center text-[#0a1128]"><Store size={28} strokeWidth={1.5} /></div>
                <div>
                  <span className="font-bold text-[#0a1128]">General Store</span>
                  <span className="text-gray-500 ml-4 font-medium">Within the society</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Upcoming Developments */}
          <div>
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="h-px bg-brand-gold w-12"></div>
              <h3 className="text-2xl font-black text-[#0a1128]">UPCOMING DEVELOPMENTS NEARBY</h3>
              <div className="h-px bg-brand-gold w-12"></div>
            </div>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50">
                <div className="w-12 h-12 flex items-center justify-center text-[#0a1128] border border-gray-300 rounded-lg bg-white flex-shrink-0">
                  <Store size={24} />
                </div>
                <div>
                  <div className="font-bold text-[#0a1128] text-lg">Luxury Shopping Complex</div>
                  <div className="text-gray-600 font-medium">(Velaura Square – 1.5 – 2 km away)</div>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50">
                <div className="w-12 h-12 flex items-center justify-center text-[#0a1128] border border-gray-300 rounded-lg bg-white flex-shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <div className="font-bold text-[#0a1128] text-lg">Govt. Approved International</div>
                  <div className="text-gray-600 font-medium">Convention Centre (57 acres)</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISTANCE FROM KEY LANDMARKS */}
      <section className="relative w-full py-16 bg-[#0a1128] overflow-hidden">
        {/* Landscape Background */}
        <div className="absolute inset-0 z-0">
           <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-30" alt="" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12 text-center text-white">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px bg-brand-gold w-16"></div>
            <h2 className="text-3xl font-black tracking-tight text-brand-gold">DISTANCE FROM KEY LANDMARKS</h2>
            <div className="h-px bg-brand-gold w-16"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
             {[
               { icon: Navigation, title: "Rishikesh", dist: "19 km" },
               { icon: Building2, title: "Dehradun", dist: "23 km" },
               { icon: MapPin, title: "Haridwar", dist: "23 km" },
               { icon: Zap, title: "Jolly Grant\nAirport", dist: "14 km" },
               { icon: Map, title: "Bhaniawala\nChowk", dist: "7 km" },
               { icon: Navigation, title: "Lal Tapad", dist: "~3 km" },
               { icon: Home, title: "Army Equipment\nCanteen", dist: "5 km" },
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center">
                 <item.icon size={36} strokeWidth={1.5} className="text-white mb-2" />
                 <span className="font-semibold text-sm whitespace-pre-line mb-1">{item.title}</span>
                 <span className="font-bold text-xl">{item.dist}</span>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-white/20 pt-10">
             {[
               { icon: Building2, title: "Himalayan\nInstitute", dist: "9 km" },
               { icon: Navigation, title: "Doiwala Railway\nStation", dist: "9 km" },
               { icon: Home, title: "Nepali Farm", dist: "12 km" },
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center">
                 <item.icon size={36} strokeWidth={1.5} className="text-white mb-2" />
                 <span className="font-semibold text-sm whitespace-pre-line mb-1">{item.title}</span>
                 <span className="font-bold text-xl">{item.dist}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* PRICING & PAYMENT PLAN */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-[#f8f9fa]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#0a1128] mb-8 tracking-tight">PRICING & PAYMENT PLAN</h2>
            <ul className="space-y-4">
              {[
                "Rate: ₹28,000/- per Sq. Yard",
                "Circle Rate: ₹13,650/- per Sq. Meter",
                "Booking / Token: ₹50,000/- or above",
                "25-30% amount within next 10 days",
                "3-month window for full payment",
                "Flexible EMI options available on-site",
                "High ROI potential – best investment opportunity in the Dehradun region"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 bg-[#0a1128] rounded-full p-0.5">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[#0a1128] font-bold text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1200&q=80" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" alt="Night Road" />
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
                "/Proj1.png",
                "/Proj2.png",
                "/Proj3.png",
                "/Proj4.png"
              ].map((img, i) => (
                <Link href={`/projects/${i + 1}`} key={i} className="block relative h-20 rounded overflow-hidden group">
                  <Image src={img} alt="Project" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 <span className="text-brand-gold">Badri Kedar Developers</span>. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
