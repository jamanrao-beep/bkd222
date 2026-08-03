import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { 
  Map, Users, Navigation, TreePine, Home, 
  Lightbulb, Zap, Gamepad2, Store, FileText, 
  HandCoins, TrendingUp, Leaf, HardHat, MapPin,
  ArrowLeft, Building2, Compass, Landmark,
  CheckCircle2, Building, Plane, Stethoscope, CarFront, Ruler, ChevronRight, Clock, Mail
} from "lucide-react";

export default function Plot530() {
  const themeColor = "#2c4c3b"; // Dark green theme
  
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
               src="/530_sqyard_plot.png" 
               alt="530 Sq Yards Plot" 
               fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
               className="object-cover object-top"
               priority
             />
           </div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center mt-4 text-center px-4">
           <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4" style={{ color: themeColor }}>
             530 SQ.YARDS PLOT
           </h1>
           <div className="text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg mb-4" style={{ backgroundColor: themeColor }}>
             <MapPin className="text-brand-gold" size={20} />
             <span className="font-medium tracking-wide">THANO CHOWK, RAM NAGAR DANDA, DEHRADUN-RISHIKESH HIGHWAY</span>
           </div>
           <div className="flex items-center gap-4 text-lg font-bold" style={{ color: themeColor }}>
             <div className="h-0.5 w-12" style={{ backgroundColor: themeColor }}></div>
             <span>Prime Location | Dual Facing | Vastu Compliant</span>
             <div className="h-0.5 w-12" style={{ backgroundColor: themeColor }}></div>
           </div>
        </div>

        {/* Floating Left Boxes */}
        <div className="relative z-10 flex flex-col gap-3 mt-12 ml-4 md:ml-12 max-w-[340px]">
           {[
             { icon: Map, title: "DUAL FACING", subtitle: "PLOT\n(NORTH-EAST &\nSOUTH-EAST)" },
             { icon: Home, title: "300 MTR FROM", subtitle: "PACIFIC HOUSING\nPROJECT" },
             { icon: TreePine, title: "PEACEFUL & GREEN", subtitle: "SURROUNDINGS" },
             { icon: TrendingUp, title: "RAPIDLY DEVELOPING", subtitle: "RESIDENTIAL ZONE" },
             { icon: Compass, title: "VASTU COMPLIANT", subtitle: "PLOT" },
             { icon: Navigation, title: "EXCELLENT", subtitle: "CONNECTIVITY" },
           ].map((item, idx) => (
             <div key={idx} className="backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-4 text-white shadow-xl transition-transform hover:scale-105" style={{ backgroundColor: `${themeColor}e6` }}>
               <div className="border border-white/20 p-2 rounded-lg">
                 <item.icon size={24} strokeWidth={1.5} className="text-brand-gold" />
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-[13px] leading-tight text-brand-gold">{item.title}</span>
                 <span className="text-[11px] font-semibold text-white whitespace-pre-line leading-tight mt-0.5">{item.subtitle}</span>
               </div>
             </div>
           ))}
        </div>

        {/* Bottom Dark Bar overlaying the image */}
        <div className="absolute bottom-12 left-4 right-4 md:left-12 md:right-12 z-20">
           {/* Tab */}
           <div className="inline-block px-4 py-1 rounded-t-lg text-white font-bold text-sm" style={{ backgroundColor: "#557a46" }}>
             KEY DISTANCES
           </div>
           <div className="backdrop-blur-md border border-white/20 rounded-b-2xl rounded-tr-2xl px-6 py-6 flex flex-wrap justify-between items-center text-white shadow-2xl gap-4" style={{ backgroundColor: `${themeColor}f2` }}>
             {[
               { icon: Plane, title: "JOLLY GRANT\nAIRPORT", subtitle: "3 KM" },
               { icon: Stethoscope, title: "HIMALAYAN\nHOSPITAL", subtitle: "4 KM" },
               { icon: MapPin, title: "RISHIKESH", subtitle: "17 KM" },
               { icon: Building2, title: "DEHRADUN CITY", subtitle: "20 KM" },
               { icon: Store, title: "LOCAL MARKET, SCHOOLS\n& GOVT. HOSPITALS", subtitle: "50 MTR" },
               { icon: Home, title: "THANO CHOWK & PACIFIC\nHOUSING PROJECT", subtitle: "300 MTR" },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center flex-1 min-w-[120px] text-center border-r border-white/20 last:border-0 px-2">
                 <item.icon size={32} className="text-white mb-2" strokeWidth={1.2} />
                 <span className="font-bold text-[11px] leading-tight whitespace-pre-line mb-1">{item.title}</span>
                 <span className="text-sm font-black text-brand-gold">{item.subtitle}</span>
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
              A premium 530 Sq.Yards (Approx. 4,760 Sq.Ft.) plot located at Thano Chowk, Ram Nagar Danda, 
              Dehradun, just 300 meters from Pacific Housing Project. The plot is dual facing (North-East & 
              South-East) with 18 ft and 14 ft road access, making it ideal for residential, farmhouse, villa or 
              commercial projects. Peaceful surroundings with excellent connectivity and rapid development 
              in the area makes this a high-potential investment.
            </p>
          </div>
          <div className="rounded-2xl p-6 border-2 flex flex-col items-center justify-center min-w-[300px]" style={{ backgroundColor: "#f9fcf8", borderColor: "#557a46" }}>
             <span className="text-lg font-bold mb-6" style={{ color: "#557a46" }}>PLOT DIMENSIONS</span>
             <div className="flex items-center gap-6">
               <Ruler size={48} strokeWidth={1} style={{ color: themeColor }} />
               <div className="flex flex-col text-center font-bold text-xl" style={{ color: themeColor }}>
                 <span>68 FT (FRONT)</span>
                 <span className="my-1">X</span>
                 <span>70 FT (DEPTH)</span>
               </div>
             </div>
          </div>
        </div>

        {/* Price & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 mt-12">
          <div className="text-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl" style={{ backgroundColor: themeColor }}>
             <span className="text-xl font-bold tracking-widest mb-2">PRICE</span>
             <span className="text-5xl font-black text-[#f1c40f] mb-2 tracking-tighter">₹30,000</span>
             <span className="text-lg font-bold tracking-widest text-white">PER GAJ</span>
             <span className="text-sm font-semibold text-gray-300 mt-1">(NEGOTIABLE)</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center border border-gray-200 rounded-3xl p-6 bg-gray-50">
             {[
               { icon: FileText, title: "PAKKI REGISTRY\nWITH 143 RESIDENTIAL\nCONVERSION" },
               { icon: CheckCircle2, title: "CLEAR TITLE\nPROPERTY" },
               { icon: Map, title: "R3 LAND USE /\nGENERAL CATEGORY" },
               { icon: Landmark, title: "BANK LOAN\nAVAILABLE FROM\nALL MAJOR BANKS" },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center px-2 border-r border-gray-300 last:border-0">
                 <div className="mb-4">
                   <item.icon size={42} strokeWidth={1.2} style={{ color: themeColor }} />
                 </div>
                 <span className="font-bold text-xs leading-tight whitespace-pre-line" style={{ color: themeColor }}>{item.title}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* PLOT HIGHLIGHTS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-[#f8f9fa] border-t border-gray-200">
        <div className="flex justify-center mb-10">
          <div className="text-white px-8 py-2 rounded font-bold text-xl" style={{ backgroundColor: "#557a46" }}>
            PLOT HIGHLIGHTS
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-gray-300 border-b border-gray-200 pb-12 mb-12">
           {[
             { icon: Map, title: "530 Gaj", subtitle: "Plot Size" },
             { icon: Compass, title: "NE & SE", subtitle: "Dual Facing" },
             { icon: Navigation, title: "18 FT & 14 FT", subtitle: "Road Access" },
             { icon: FileText, title: "143 Residential", subtitle: "Conversion" },
             { icon: Users, title: "Independent", subtitle: "Ownership" },
           ].map((item, idx) => (
             <div key={idx} className="flex flex-col items-center px-4">
               <item.icon size={40} strokeWidth={1.2} className="mb-3" style={{ color: themeColor }} />
               <span className="font-bold text-lg" style={{ color: themeColor }}>{item.title}</span>
               <span className="text-sm font-semibold text-gray-600">{item.subtitle}</span>
             </div>
           ))}
        </div>

        {/* USAGE POTENTIAL vs TOP BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Usage Potential */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="text-white text-center py-3 font-bold text-lg" style={{ backgroundColor: "#557a46" }}>
              USAGE POTENTIAL
            </div>
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center gap-6 border-b border-gray-100 pb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#557a46" }}>
                  <Home size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500">Ideal For</div>
                  <div className="font-bold text-lg" style={{ color: themeColor }}>Farmhouse / Second Home / Luxury Villas</div>
                </div>
              </div>
              <div className="flex items-center gap-6 border-b border-gray-100 pb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#557a46" }}>
                  <Building2 size={32} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight" style={{ color: themeColor }}>Commercial Projects – Hotel,<br/>Homestay, Guest House, etc.</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#557a46" }}>
                  <TrendingUp size={32} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg" style={{ color: themeColor }}>Safe & High-Return<br/>Investment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Benefits */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="text-white text-center py-3 font-bold text-lg" style={{ backgroundColor: "#557a46" }}>
              TOP BENEFITS
            </div>
            <div className="p-8">
              <ul className="space-y-5">
                {[
                  "Excellent Connectivity",
                  "Peaceful & Green Surroundings",
                  "Rapidly Developing Zone",
                  "Vastu-Compliant Plot",
                  "R3 Land Use / General Category",
                  "Bank Loan Available from All Major Banks"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 size={24} className="flex-shrink-0" style={{ color: "#557a46" }} />
                    <span className="font-bold text-[15px]" style={{ color: themeColor }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* NEARBY LANDMARKS & LEGAL */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-white border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border border-gray-200 rounded-2xl p-8 bg-gray-50">
          
          {/* Landmarks */}
          <div className="border-b md:border-b-0 md:border-r border-gray-300 pb-8 md:pb-0 md:pr-8">
            <h3 className="text-xl font-black text-center mb-8" style={{ color: themeColor }}>NEARBY LANDMARKS</h3>
            <ul className="space-y-5">
              {[
                { icon: Store, title: "Thano Chowk & Pacific Housing Project", dist: "300 m" },
                { icon: Navigation, title: "Local Market, Schools &\nGovt. Hospitals", dist: "50 m" },
                { icon: Plane, title: "Jolly Grant Airport, Dehradun", dist: "3 km" },
                { icon: Stethoscope, title: "Himalayan Hospital", dist: "4 km" },
                { icon: MapPin, title: "Rishikesh", dist: "17 km" },
                { icon: Building2, title: "Dehradun City", dist: "20 km" },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <item.icon size={24} strokeWidth={1.5} style={{ color: themeColor }} />
                    <span className="font-bold text-sm whitespace-pre-line leading-tight" style={{ color: themeColor }}>{item.title}</span>
                  </div>
                  <span className="font-bold text-sm text-gray-800 whitespace-nowrap">{item.dist}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:pl-4">
            <h3 className="text-xl font-black text-center mb-8" style={{ color: themeColor }}>LEGAL & FINANCIAL</h3>
            <ul className="space-y-6">
              {[
                "Pakki Registry with 143 Residential Conversion",
                "Clear Title Property",
                "R3 Land Use / General Category",
                "Bank Loan Available from All Major Banks",
                "Independent Ownership"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0" style={{ color: "#557a46" }} />
                  <span className="font-bold text-sm" style={{ color: themeColor }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* DREAM PROJECT PHOTOS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-white">
        <div className="flex justify-center mb-10">
          <div className="text-white px-8 py-2 rounded font-bold text-xl uppercase" style={{ backgroundColor: "#557a46" }}>
            Perfect For Your Dream Project
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80", label: "LUXURY VILLA" },
            { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80", label: "HOTEL / HOMESTAY" },
            { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", label: "GUEST HOUSE" },
            { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", label: "COMMERCIAL PROJECT" },
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg h-64 group">
              <Image src={item.img} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={item.label} className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 inset-x-0 py-3 text-center text-white font-bold text-sm" style={{ backgroundColor: "rgba(85, 122, 70, 0.9)" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM HIGHLIGHTS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-10 bg-[#f8f9fa] border-y border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
           {[
             { icon: TreePine, title: "PEACEFUL & GREEN\nSURROUNDINGS" },
             { icon: Navigation, title: "EXCELLENT ROAD\nCONNECTIVITY" },
             { icon: TrendingUp, title: "RAPIDLY DEVELOPING\nRESIDENTIAL ZONE" },
             { icon: HandCoins, title: "HIGH RETURN\nINVESTMENT" },
           ].map((item, idx) => (
             <div key={idx} className="flex items-center gap-4 justify-center">
               <item.icon size={40} strokeWidth={1.2} style={{ color: "#557a46" }} />
               <span className="font-bold text-xs whitespace-pre-line" style={{ color: themeColor }}>{item.title}</span>
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
