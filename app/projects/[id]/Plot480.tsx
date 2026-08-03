import Image from "next/image";
import Link from "next/link";
import { 
  Map, Users, Navigation, TreePine, Home, 
  Lightbulb, Zap, Gamepad2, Store, FileText, 
  HandCoins, TrendingUp, Leaf, ShieldCheck, MapPin,
  ArrowLeft, Building2, Compass, Landmark,
  CheckCircle2, Building, Plane, Stethoscope, CarFront, Ruler,
  GraduationCap
} from "lucide-react";

export default function Plot480() {
  const themeColor = "#0f2343"; // Deep navy blue theme
  const accentColor = "#c59d5f"; // Gold accent
  
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-4 bg-black border-b border-white/10">
        <Link href="/">
          <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={160} height={60} className="object-contain" style={{ width: "auto", height: "auto" }} />
        </Link>
                  <div className="hidden lg:flex items-center gap-8 text-sm font-medium">\n            <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>\n            <Link href="/about" className="text-white hover:text-brand-gold transition-colors">About Us</Link>\n            <Link href="/projects" className="text-white hover:text-brand-gold transition-colors">Projects</Link>\n            <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>\n            <Link href="/partners" className="text-white hover:text-brand-gold transition-colors">Our Partners</Link>\n            <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>\n          </div>
      </nav>

      <div className="px-8 py-4">
        <Link href="/projects" className="inline-flex items-center gap-2 font-bold hover:text-brand-gold transition-colors" style={{ color: themeColor }}>
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* Top Hero Section */}
      <section className="relative w-full max-w-[1400px] mx-auto min-h-[850px] flex flex-col pt-12 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-white">
           <div className="absolute inset-0 bg-gradient-to-b from-[#e0f0ff] to-transparent h-[300px] z-0"></div>
           <div className="absolute top-[200px] inset-x-0 bottom-0 z-0">
             <Image 
               src="/Proj2.png" 
               alt="480 Sq Yards Plot" 
               fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
               className="object-cover object-top"
               priority
             />
           </div>
        </div>

        {/* Project 02 Ribbon */}
        <div className="absolute top-0 left-12 z-20 text-white flex flex-col items-center justify-center w-28 h-36" style={{ backgroundColor: themeColor }}>
           <span className="text-sm font-semibold tracking-wider mt-4">PROJECT</span>
           <span className="text-5xl font-bold mt-1" style={{ color: accentColor }}>02</span>
           <div className="absolute -bottom-6 left-0 w-0 h-0 border-l-[56px] border-l-transparent border-r-[56px] border-r-transparent border-t-[24px]" style={{ borderTopColor: themeColor }}></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center mt-4 text-center px-4 pl-32 md:pl-4">
           <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4" style={{ color: themeColor }}>
             480 SQ.YARD PLOT
           </h1>
           <div className="text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg mb-4" style={{ backgroundColor: themeColor }}>
             <MapPin style={{ color: accentColor }} size={20} />
             <span className="font-medium tracking-wide">RANIPOKHARI, DEHRADUN-RISHIKESH HIGHWAY</span>
           </div>
        </div>

        {/* Floating Left Boxes */}
        <div className="relative z-10 flex flex-col gap-3 mt-12 ml-4 md:ml-12 max-w-[340px]">
           {[
             { icon: Navigation, title: "JUST 30 MTR FROM", subtitle: "4-LANE HIGHWAY" },
             { icon: Compass, title: "NORTH-NORTH WEST", subtitle: "FACING PLOT" },
             { icon: Navigation, title: "20 FT ROAD ACCESS", subtitle: "" },
             { icon: FileText, title: "CLEAR TITLE", subtitle: "PROPERTY" },
             { icon: TreePine, title: "PEACEFUL & GREEN", subtitle: "SURROUNDINGS" },
             { icon: TrendingUp, title: "HIGH RETURN", subtitle: "INVESTMENT" },
           ].map((item, idx) => (
             <div key={idx} className="backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-4 text-white shadow-xl transition-transform hover:scale-105" style={{ backgroundColor: `${themeColor}e6` }}>
               <div className="border border-white/20 p-2 rounded-lg">
                 <item.icon size={24} strokeWidth={1.5} style={{ color: accentColor }} />
               </div>
               <div className="flex flex-col">
                 <span className="font-bold text-[13px] leading-tight" style={{ color: accentColor }}>{item.title}</span>
                 {item.subtitle && <span className="text-[11px] font-semibold text-white whitespace-pre-line leading-tight mt-0.5">{item.subtitle}</span>}
               </div>
             </div>
           ))}
        </div>

        {/* Bottom Dark Bar overlaying the image */}
        <div className="absolute bottom-12 left-4 right-4 md:left-12 md:right-12 z-20">
           <div className="backdrop-blur-md border border-white/20 rounded-2xl px-6 py-6 flex flex-wrap justify-between items-center text-white shadow-2xl gap-4" style={{ backgroundColor: `${themeColor}f2` }}>
             {[
               { icon: Plane, title: "JOLLY GRANT AIRPORT", subtitle: "4 KM" },
               { icon: MapPin, title: "RISHIKESH", subtitle: "11 KM" },
               { icon: Building2, title: "DEHRADUN CITY", subtitle: "20 KM" },
               { icon: Navigation, title: "BHANIYAWALA CHOWK", subtitle: "7 KM" },
               { icon: GraduationCap, title: "SCHOOLS & HOSPITALS", subtitle: "WITHIN 4 KM" },
             ].map((item, idx) => (
               <div key={idx} className="flex items-center flex-1 min-w-[200px] gap-3 border-r border-white/20 last:border-0 px-2">
                 <item.icon size={36} style={{ color: accentColor }} strokeWidth={1.2} />
                 <div className="flex flex-col">
                   <span className="font-bold text-[11px] leading-tight whitespace-pre-line text-gray-300">{item.title}</span>
                   <span className="text-sm font-black text-white">{item.subtitle}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* ABOUT THE PROPERTY */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-white">
        <div className="mb-12">
          <h2 className="text-3xl font-black mb-4 tracking-tight" style={{ color: themeColor }}>ABOUT THE PROPERTY</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-4xl">
            A premium 480 Sq.Yard (Approx. 4,320 Sq.Ft.) plot located in the prime area of Ranipokhari, 
            just 30 meters walking distance from the Dehradun-Rishikesh 4-Lane State Highway. This 
            north-north west facing plot is ideal for residential, commercial or investment purposes 
            with excellent connectivity and rapid development in the area.
          </p>
        </div>

        {/* Feature Icons Row */}
        <div className="flex flex-wrap justify-center md:justify-between gap-8 py-8 border-b border-gray-200">
           {[
             { icon: Map, title: "EXCELLENT\nCONNECTIVITY" },
             { icon: Compass, title: "VASTU\nCOMPLIANT" },
             { icon: Home, title: "IDEAL FOR VILLA /\nFARMHOUSE" },
             { icon: Building2, title: "COMMERCIAL\nPOTENTIAL" },
             { icon: TrendingUp, title: "RAPIDLY\nDEVELOPING ZONE" },
           ].map((item, idx) => (
             <div key={idx} className="flex flex-col items-center text-center">
               <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border" style={{ borderColor: accentColor, color: accentColor }}>
                 <item.icon size={36} strokeWidth={1.2} />
               </div>
               <span className="font-bold text-xs whitespace-pre-line" style={{ color: themeColor }}>{item.title}</span>
             </div>
           ))}
        </div>

        {/* Price & Document Features */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 mt-12">
          <div className="text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl" style={{ backgroundColor: themeColor }}>
             <span className="text-sm font-bold tracking-widest mb-1 self-start">PRICE</span>
             <span className="text-5xl font-black mb-1 tracking-tighter" style={{ color: accentColor }}>₹30,000</span>
             <span className="text-sm font-semibold tracking-widest text-gray-300">PER GAJ (NEGOTIABLE)</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center border border-gray-200 rounded-2xl p-6 bg-gray-50">
             {[
               { icon: FileText, title: "Pakki Registry\nwith Mutation" },
               { icon: ShieldCheck, title: "Bank Loan\nAvailable" },
               { icon: Users, title: "Independent\nOwnership" },
               { icon: Map, title: "R3 Land Use /\nGeneral Category" },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center px-1 border-r border-gray-300 last:border-0">
                 <div className="mb-4 text-gray-600">
                   <item.icon size={42} strokeWidth={1.2} />
                 </div>
                 <span className="font-bold text-[12px] leading-tight whitespace-pre-line" style={{ color: themeColor }}>{item.title}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* PLOT DETAILS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-[#f8f9fa] border-t border-gray-200">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12" style={{ backgroundColor: accentColor }}></div>
          <h2 className="text-2xl font-black tracking-tight text-center" style={{ color: themeColor }}>PLOT DETAILS</h2>
          <div className="h-px w-12" style={{ backgroundColor: accentColor }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
           {[
             { icon: Map, title: "Plot Size", val: "480 Gaj", sub: "(Approx. 4,320 Sq.Ft.)" },
             { icon: Compass, title: "Facing", val: "North-North West", sub: "(Vastu Compliant)" },
             { icon: Navigation, title: "Road Access", val: "20 FT", sub: "Wide Road" },
             { icon: Users, title: "Ownership", val: "Independent", sub: "Ownership" },
           ].map((item, idx) => (
             <div key={idx} className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
               <div className="text-gray-600"><item.icon size={40} strokeWidth={1.2} /></div>
               <div className="flex flex-col">
                 <span className="font-bold text-xs text-gray-800">{item.title}</span>
                 <span className="font-black text-[15px]" style={{ color: themeColor }}>{item.val}</span>
                 <span className="text-xs font-semibold text-gray-500">{item.sub}</span>
               </div>
             </div>
           ))}
        </div>

        {/* HIGHLIGHTS vs USAGE POTENTIAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Highlights */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
              <h3 className="text-lg font-black text-center" style={{ color: themeColor }}>HIGHLIGHTS</h3>
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
            </div>
            
            <ul className="space-y-5">
              {[
                "Prime Location at Ranipokhri",
                "Just 30 meters walking distance from\nDehradun-Rishikesh 4-Lane State Highway",
                "Excellent highway connectivity",
                "Peaceful & green surroundings",
                "Vastu-compliant plot",
                "Safe & high-return investment",
                "Rapidly developing zone"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: themeColor }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-bold text-[14px] whitespace-pre-line" style={{ color: themeColor }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage Potential */}
          <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: themeColor }}>
            <div className="text-center py-4 font-bold text-lg" style={{ color: accentColor, borderBottom: `1px solid ${accentColor}` }}>
              USAGE POTENTIAL
            </div>
            <div className="p-8 flex flex-col gap-8">
              {[
                { icon: Home, title: "Ideal For Second Home /\nFarmhouse / Villas" },
                { icon: Building2, title: "Commercial Projects – Hotel,\nHomestay, Institute, School, etc." },
                { icon: HandCoins, title: "Safe & High-Return\nInvestment" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 border-b border-white/20 pb-6 last:border-0 last:pb-0">
                  <div style={{ color: accentColor }}>
                    <item.icon size={48} strokeWidth={1} />
                  </div>
                  <div>
                    <div className="font-bold text-base whitespace-pre-line leading-tight text-white">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* NEARBY LANDMARKS & KEY BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-200 rounded-2xl bg-white">
          
          {/* Landmarks */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
              <h3 className="text-lg font-black text-center" style={{ color: themeColor }}>NEARBY LANDMARKS</h3>
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
            </div>
            
            <ul className="space-y-6">
              {[
                { icon: Plane, title: "Jolly Grant Airport, Dehradun", dist: "4 km" },
                { icon: MapPin, title: "Rishikesh", dist: "11 km" },
                { icon: Building2, title: "Dehradun City", dist: "20 km" },
                { icon: MapPin, title: "Bhaniyawala Chowk", dist: "7 km" },
                { icon: GraduationCap, title: "Schools & Hospitals", dist: "Within 4 km" },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <item.icon size={22} strokeWidth={1.5} className="text-gray-500" />
                    <span className="font-bold text-[14px]" style={{ color: themeColor }}>{item.title}</span>
                  </div>
                  <span className="font-bold text-[14px] text-gray-800 whitespace-nowrap">{item.dist}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="p-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
              <h3 className="text-lg font-black text-center" style={{ color: themeColor }}>KEY BENEFITS</h3>
              <div className="h-px w-8" style={{ backgroundColor: accentColor }}></div>
            </div>
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
                  <div className="rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: themeColor }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-bold text-[14px]" style={{ color: themeColor }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* DREAM PROJECT PHOTOS */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-12 py-12 bg-white">
        <div className="flex justify-center mb-10">
          <div className="font-black text-xl md:text-2xl uppercase tracking-widest text-center" style={{ color: themeColor }}>
            Perfect Location For Your Dream Investment
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", label: "30 MTR FROM 4-LANE HIGHWAY" },
            { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", label: "PEACEFUL & GREEN SURROUNDINGS" },
            { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", label: "IDEAL FOR VILLA / FARMHOUSE / HOTEL" },
          ].map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg h-[300px] group border-4 border-white">
              <Image src={item.img} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={item.label} className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 inset-x-0 py-3 text-center text-white font-bold text-xs" style={{ backgroundColor: "rgba(15, 35, 67, 0.9)" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-16 pb-8 px-8 border-t border-white/10 text-white">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={180} height={70} className="object-contain" style={{ width: "auto", height: "auto" }} />
          <p className="text-gray-500 text-sm">© 2026 Badri Kedar Developers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
