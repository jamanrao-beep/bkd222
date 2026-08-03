import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { 
  Map, Users, Navigation, TreePine, Home, 
  Lightbulb, Zap, Gamepad2, Store, FileText, 
  HandCoins, TrendingUp, Leaf, ShieldCheck, MapPin,
  ArrowLeft, Building2, Compass, Landmark,
  CheckCircle2, Building, Plane, Stethoscope, CarFront, Ruler,
  GraduationCap, ChevronRight, Clock, Mail
} from "lucide-react";

export default function Plot620() {
  const themeColor = "#0f2343"; // Deep navy blue theme
  const accentColor = "#c59d5f"; // Gold accent
  
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
        <Link href="/projects" className="inline-flex items-center gap-2 font-bold hover:text-brand-gold transition-colors" style={{ color: themeColor }}>
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* Top Hero Section */}
      <section className="relative w-full min-h-[950px] lg:min-h-screen flex flex-col pt-12 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-white">
           <div className="absolute inset-0 bg-gradient-to-b from-[#e0f0ff] to-transparent h-[300px] z-0"></div>
           <div className="absolute top-[200px] inset-x-0 bottom-0 z-0">
             <Image 
               src="/Proj4.png" 
               alt="620 Sq Yards Plot" 
               fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
               className="object-cover object-top"
               priority
             />
           </div>
        </div>

        {/* Project 04 Ribbon */}
        <div className="absolute top-0 left-12 z-20 text-white flex flex-col items-center justify-center w-28 h-36" style={{ backgroundColor: themeColor }}>
           <span className="text-sm font-semibold tracking-wider mt-4">PROJECT</span>
           <span className="text-5xl font-bold mt-1" style={{ color: accentColor }}>04</span>
           <div className="absolute -bottom-6 left-0 w-0 h-0 border-l-[56px] border-l-transparent border-r-[56px] border-r-transparent border-t-[24px]" style={{ borderTopColor: themeColor }}></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center mt-4 text-center px-4 pl-32 md:pl-4">
           <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4" style={{ color: themeColor }}>
             620 SQ.YARDS PLOT
           </h1>
           <div className="text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg mb-4" style={{ backgroundColor: themeColor }}>
             <MapPin style={{ color: accentColor }} size={20} />
             <span className="font-medium tracking-wide">BHANIYAWLA CHOWK, DEHRADUN-HARIDWAR HIGHWAY</span>
           </div>
           <div className="flex items-center gap-4 text-lg font-bold" style={{ color: themeColor }}>
             <div className="h-0.5 w-12" style={{ backgroundColor: themeColor }}></div>
             <span>Prime Location | High Appreciation | Vastu Compliant Plot</span>
             <div className="h-0.5 w-12" style={{ backgroundColor: themeColor }}></div>
           </div>
        </div>

        {/* Floating Left Boxes */}
        <div className="relative z-10 flex flex-col gap-3 mt-12 ml-4 md:ml-12 max-w-[340px]">
           {[
             { icon: Navigation, title: "JUST 200 MTR FROM", subtitle: "DEHRADUN-HARIDWAR\nHIGHWAY" },
             { icon: MapPin, title: "PREMIUM & FAST", subtitle: "DEVELOPING LOCATION" },
             { icon: Navigation, title: "30 FT WIDE", subtitle: "INTERNAL ROAD" },
             { icon: ShieldCheck, title: "GATED COMMUNITY", subtitle: "WITH SECURITY" },
             { icon: TreePine, title: "PEACEFUL & GREEN", subtitle: "SURROUNDINGS" },
             { icon: TrendingUp, title: "HIGH APPRECIATION", subtitle: "& FUTURE GROWTH" },
           ].map((item, idx) => (
             <div key={idx} className="backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-4 text-white shadow-xl transition-transform hover:scale-105" style={{ backgroundColor: `${themeColor}e6` }}>
               <div className="border border-white/20 p-2 rounded-lg">
                 <item.icon size={24} strokeWidth={1.5} style={{ color: accentColor }} />
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-[13px] leading-tight" style={{ color: accentColor }}>{item.title}</span>
                 <span className="text-[11px] font-semibold text-white whitespace-pre-line leading-tight mt-0.5">{item.subtitle}</span>
               </div>
             </div>
           ))}
        </div>

        {/* Bottom Dark Bar overlaying the image */}
        <div className="absolute bottom-12 left-4 right-4 md:left-12 md:right-12 z-20">
           {/* Tab */}
           <div className="inline-block px-4 py-1 rounded-t-lg text-white font-bold text-sm border-b-2" style={{ backgroundColor: themeColor, borderColor: accentColor }}>
             <span style={{ color: accentColor }}>KEY DISTANCES</span>
           </div>
           <div className="backdrop-blur-md border border-white/20 rounded-b-2xl rounded-tr-2xl px-6 py-6 flex flex-wrap justify-between items-center text-white shadow-2xl gap-4" style={{ backgroundColor: `${themeColor}f2` }}>
             {[
               { icon: Plane, title: "JOLLY GRANT\nAIRPORT", subtitle: "10 KM" },
               { icon: MapPin, title: "RISHIKESH", subtitle: "15 KM" },
               { icon: Building2, title: "DEHRADUN CITY", subtitle: "12 KM" },
               { icon: MapPin, title: "HARIDWAR", subtitle: "18 KM" },
               { icon: Navigation, title: "BHANIYAWLA\nCHOWK", subtitle: "500 MTR" },
               { icon: GraduationCap, title: "SCHOOLS & HOSPITALS", subtitle: "WITHIN 3 KM" },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center flex-1 min-w-[120px] text-center border-r border-white/20 last:border-0 px-2">
                 <item.icon size={32} className="text-white mb-2" strokeWidth={1.2} />
                 <span className="font-bold text-[11px] leading-tight whitespace-pre-line mb-1">{item.title}</span>
                 <span className="text-sm font-black text-white">{item.subtitle}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ABOUT THE PROPERTY */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-white">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="flex-1">
            <h2 className="text-3xl font-black mb-6 tracking-tight" style={{ color: themeColor }}>ABOUT THE PROPERTY</h2>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              A premium 620 Sq.Yards plot located at Bhaniyawla Chowk, Dehradun-Haridwar Highway, just 200 meters from the highway.
              The plot offers excellent road connectivity, peaceful green surroundings and high appreciation potential. Ideal for residential 
              villa, farmhouse or investment purposes.
            </p>
          </div>
          <div className="rounded-2xl p-6 border flex flex-col items-center justify-center min-w-[300px]" style={{ backgroundColor: "#fafafa", borderColor: accentColor }}>
             <span className="text-lg font-bold mb-6" style={{ color: themeColor }}>PLOT DIMENSIONS</span>
             <div className="flex items-center gap-6">
               <div className="border-4 border-dashed rounded w-16 h-16 flex items-center justify-center" style={{ borderColor: themeColor }}>
                 <div className="border border-dotted w-12 h-12" style={{ borderColor: themeColor }}></div>
               </div>
               <div className="flex items-center gap-6 text-center font-bold" style={{ color: themeColor }}>
                 <div className="flex flex-col">
                   <span className="text-sm">FRONT</span>
                   <span className="text-xl">65 FT</span>
                 </div>
                 <div className="h-10 w-px bg-gray-300"></div>
                 <div className="flex flex-col">
                   <span className="text-sm">AREA</span>
                   <span className="text-xl">620 SQ.YARDS</span>
                   <span className="text-xs font-semibold text-gray-500">(Approx.)</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Price & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 mt-12">
          <div className="text-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl" style={{ backgroundColor: themeColor }}>
             <span className="text-xl font-bold tracking-widest mb-2">PRICE</span>
             <span className="text-5xl font-black mb-2 tracking-tighter" style={{ color: accentColor }}>₹32,000</span>
             <span className="text-lg font-bold tracking-widest text-white">PER GAJ</span>
             <span className="text-sm font-semibold text-gray-300 mt-1">(NEGOTIABLE)</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border border-gray-200 rounded-3xl p-4 bg-gray-50">
             {[
               { icon: FileText, title: "CLEAR TITLE\nPROPERTY" },
               { icon: ShieldCheck, title: "VASTU\nCOMPLIANT" },
               { icon: Landmark, title: "BANK LOAN\nAVAILABLE" },
               { icon: Users, title: "INDEPENDENT\nOWNERSHIP" },
               { icon: Map, title: "R3 LAND USE /\nGENERAL CATEGORY" },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center px-1 border-r border-gray-300 last:border-0">
                 <div className="mb-4">
                   <item.icon size={42} strokeWidth={1.2} style={{ color: themeColor }} />
                 </div>
                 <span className="font-bold text-[11px] leading-tight whitespace-pre-line" style={{ color: themeColor }}>{item.title}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* PLOT HIGHLIGHTS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-[#f8f9fa] border-t border-gray-200">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12" style={{ backgroundColor: accentColor }}></div>
          <h2 className="text-2xl font-black tracking-tight text-center" style={{ color: themeColor }}>PROJECT HIGHLIGHTS</h2>
          <div className="h-px w-12" style={{ backgroundColor: accentColor }}></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center border border-gray-200 rounded-xl bg-white py-6 mb-12 shadow-sm">
           {[
             { icon: Map, title: "620 Sq.Yards", subtitle: "Plot Size" },
             { icon: Compass, title: "North-East", subtitle: "Facing Plot" },
             { icon: Navigation, title: "30 FT Wide", subtitle: "Internal Road" },
             { icon: FileText, title: "R3 Land Use /", subtitle: "General Category" },
             { icon: Users, title: "Independent", subtitle: "Ownership" },
           ].map((item, idx) => (
             <div key={idx} className="flex flex-col items-center px-4 border-r border-gray-200 last:border-0">
               <item.icon size={36} strokeWidth={1.2} className="mb-3" style={{ color: themeColor }} />
               <span className="font-bold text-[15px]" style={{ color: themeColor }}>{item.title}</span>
               <span className="text-sm font-semibold text-gray-600">{item.subtitle}</span>
             </div>
           ))}
        </div>

        {/* USAGE POTENTIAL vs TOP BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Usage Potential */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="text-white text-center py-3 font-bold text-lg" style={{ backgroundColor: themeColor }}>
              USAGE POTENTIAL
            </div>
            <div className="p-6 flex flex-col gap-6">
              {[
                { icon: Home, title: "Ideal For Luxury Villa /\nFarmhouse" },
                { icon: Building2, title: "Perfect For Residential\nConstruction" },
                { icon: TreePine, title: "Holiday Home / Weekend\nRetreat" },
                { icon: HandCoins, title: "Excellent Investment With\nHigh Returns" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="text-brand-gold">
                    <item.icon size={48} strokeWidth={1} style={{ color: themeColor }} />
                  </div>
                  <div>
                    <div className="font-bold text-base whitespace-pre-line leading-tight" style={{ color: themeColor }}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Benefits */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="text-white text-center py-3 font-bold text-lg" style={{ backgroundColor: themeColor }}>
              TOP BENEFITS
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {[
                  "Just 200 Mtr From Dehradun-Haridwar Highway",
                  "Prime & Fast Developing Location",
                  "30 FT Wide Internal Road",
                  "Vastu-Compliant Plot",
                  "Peaceful & Green Surroundings",
                  "High Appreciation & Future Growth",
                  "R3 Land Use / General Category",
                  "Bank Loan Available from All Major Banks"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="rounded-full bg-brand-gold p-0.5 flex-shrink-0" style={{ backgroundColor: themeColor }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="font-bold text-sm" style={{ color: themeColor }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* NEARBY LANDMARKS & LEGAL */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-[#f8f9fa] border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Landmarks */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm p-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
              <h3 className="text-lg font-black text-center" style={{ color: themeColor }}>NEARBY LANDMARKS</h3>
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
            </div>
            
            <ul className="space-y-4">
              {[
                { icon: MapPin, title: "Bhaniyawla Chowk", dist: "500 m" },
                { icon: Store, title: "Local Market", dist: "1.2 km" },
                { icon: GraduationCap, title: "Schools & Colleges", dist: "2.5 km" },
                { icon: Stethoscope, title: "Hospitals", dist: "2.8 km" },
                { icon: Building2, title: "Dehradun City", dist: "12 km" },
                { icon: MapPin, title: "Haridwar", dist: "18 km" },
                { icon: MapPin, title: "Rishikesh", dist: "15 km" },
                { icon: Plane, title: "Jolly Grant Airport", dist: "10 km" },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <item.icon size={20} strokeWidth={1.5} className="text-gray-500" />
                    <span className="font-bold text-[15px]" style={{ color: themeColor }}>{item.title}</span>
                  </div>
                  <span className="font-bold text-[15px] text-gray-800 whitespace-nowrap">{item.dist}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm p-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
              <h3 className="text-lg font-black text-center" style={{ color: themeColor }}>LEGAL & FINANCIAL</h3>
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
            </div>
            <ul className="space-y-6">
              {[
                "Clear Title Property",
                "R3 Land Use / General Category",
                "Pakku Registry with Mutation",
                "Bank Loan Available from All Major Banks",
                "Independent Ownership",
                "Safe & Secure Investment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="rounded-full bg-brand-gold p-0.5 flex-shrink-0" style={{ backgroundColor: themeColor }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-bold text-[15px]" style={{ color: themeColor }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* DREAM PROJECT PHOTOS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-white">
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: accentColor }}></div>
            <div className="font-black text-2xl uppercase tracking-widest" style={{ color: themeColor }}>
              Your Future. Your Space.
            </div>
            <div className="h-px w-12" style={{ backgroundColor: accentColor }}></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=600&q=80", label: "JUST 200 MTR FROM HIGHWAY" },
            { img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80", label: "PEACEFUL & GREEN AREA" },
            { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80", label: "IDEAL FOR LUXURY VILLA" },
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg h-[280px] group border-4 border-white">
              <Image src={item.img} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={item.label} className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 inset-x-0 py-3 text-center text-white font-bold text-sm" style={{ backgroundColor: themeColor }}>
                {item.label}
              </div>
            </div>
          ))}
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
