import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import {
  Map, Users, Navigation, TreePine, Home,
  Lightbulb, Zap, Gamepad2, Store, FileText,
  HandCoins, TrendingUp, Leaf, ShieldCheck, MapPin,
  ArrowLeft, Building2, Compass, Landmark,
  CheckCircle2, Building, Plane, Stethoscope, CarFront, Ruler,
  GraduationCap, ChevronRight, Clock, Mail, Sun, Briefcase, Bus, Train, PlusSquare, HeartPulse
} from "lucide-react";
import { IndianRupee } from "lucide-react";

export default function Plot181() {
  const themeColor = "#000000";
  const accentColor = "#f59e0b"; // brand gold

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-4 bg-black">
        <Link href="/">
          <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={160} height={60} className="object-contain" style={{ width: "auto", height: "auto" }} />
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
          <Link href="/about" className="text-white hover:text-brand-gold transition-colors">About Us</Link>
          <Link href="/projects" className="text-brand-gold transition-colors">Projects</Link>
          <Link href="/blogs" className="text-white hover:text-brand-gold transition-colors">Blogs</Link>
          <Link href="/partners" className="text-white hover:text-brand-gold transition-colors">Our Partners</Link>
          <Link href="/contact" className="text-white hover:text-brand-gold transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Top Hero Section */}
      <section className="relative w-full h-[600px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/181_sqyard_plot.png"
            alt="New Defence Colony"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          {/* Gradient Overlay from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 max-w-4xl text-white">
          <div className="flex items-center gap-2 text-sm text-brand-gold font-semibold mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/projects" className="hover:text-white transition-colors">Properties</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">New Defence Colony, Sahastradhara</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
            New Defence Colony,<br />Sahastradhara<br />
            <span className="text-brand-gold">Dehradun</span>
          </h1>

          <div className="flex items-center gap-2 font-semibold text-sm mb-6">
            <MapPin size={18} className="text-brand-gold" />
            <span>East Facing</span>
          </div>

          <p className="text-gray-300 text-base max-w-lg leading-relaxed mb-10">
            181 Gaj east-facing plot in fast-developing New Defence Colony. Ideal for residential or commercial investment.
          </p>

          <div className="flex flex-wrap gap-8 items-center border-t border-white/20 pt-6">
            <div className="flex items-center gap-3">
              <Map size={32} strokeWidth={1} className="text-brand-gold" />
              <div>
                <p className="text-xs text-gray-400">Plot Size</p>
                <p className="font-semibold text-sm">181 Gaj</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <Navigation size={32} strokeWidth={1} className="text-brand-gold" />
              <div>
                <p className="text-xs text-gray-400">Road Access</p>
                <p className="font-semibold text-sm">4-Lane Highway</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <Compass size={32} strokeWidth={1} className="text-brand-gold" />
              <div>
                <p className="text-xs text-gray-400">Facing</p>
                <p className="font-semibold text-sm">East</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative h-[400px] rounded-xl overflow-hidden group">
            <Image src="/181_sqyard_plot.png" alt="Property View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[192px] rounded-xl overflow-hidden group">
              <Image src="/181_sqyard_plot.png" alt="Property View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-[192px] rounded-xl overflow-hidden group">
              <Image src="/181_sqyard_plot.png" alt="Property View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-[192px] rounded-xl overflow-hidden group">
              <Image src="/181_sqyard_plot.png" alt="Property View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-[192px] rounded-xl overflow-hidden group">
              <Image src="/181_sqyard_plot.png" alt="Property View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-10 bg-white border-y border-gray-100">
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-brand-gold inline-block pb-1">
            Property <span className="text-brand-gold">Highlights</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: MapPin, title: "Prime Location", desc: "Located in New Defence Colony, Sahastradhara - a premium & peaceful area." },
            { icon: Sun, title: "East Facing", desc: "Plot is east-facing, ensuring positivity and natural light." },
            { icon: Navigation, title: "4-Lane Highway Access", desc: "Direct access to 4-Lane Highway for smooth connectivity." },
            { icon: FileText, title: "Ideal for Investment", desc: "Perfect for residential or commercial development." },
            { icon: TrendingUp, title: "High Appreciation", desc: "Located in a fast-developing area with high growth potential." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mb-4">
                <item.icon size={32} strokeWidth={1.2} className="text-brand-gold" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Property Details */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 bg-[#fafafa]">
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-brand-gold inline-block pb-1">
            Property <span className="text-brand-gold">Details</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 text-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <Map size={18} className="text-brand-gold" /> Plot Size
              </div>
              <span className="font-bold text-gray-900">181 Gaj</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <Compass size={18} className="text-brand-gold" /> Facing
              </div>
              <span className="font-bold text-gray-900">East</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <Building2 size={18} className="text-brand-gold" /> Road Access
              </div>
              <span className="font-bold text-gray-900">4-Lane Highway</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <Navigation size={18} className="text-brand-gold" /> Distance from Highway
              </div>
              <span className="font-bold text-gray-900">Adjacent</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <ShieldCheck size={18} className="text-brand-gold" /> Vastu Compliant
              </div>
              <span className="font-bold text-gray-900">Yes</span>
            </div>
          </div>
          
          <div className="space-y-4 mt-4 md:mt-0">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <MapPin size={18} className="text-brand-gold" /> Location
              </div>
              <span className="font-bold text-gray-900 text-right">New Defence Colony, Sahastradhara, Dehradun</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <Home size={18} className="text-brand-gold" /> Property Type
              </div>
              <span className="font-bold text-gray-900">Residential / Commercial Plot</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <Users size={18} className="text-brand-gold" /> Ownership
              </div>
              <span className="font-bold text-gray-900">Freehold</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <FileText size={18} className="text-brand-gold" /> Approved By
              </div>
              <span className="font-bold text-gray-900">MDDA Approved Area</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 text-gray-600 font-semibold">
                <IndianRupee size={18} className="text-brand-gold" /> Price
              </div>
              <span className="font-bold text-gray-900">₹70,000 / Gaj</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 bg-white">
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-brand-gold inline-block pb-1">
            Location <span className="text-brand-gold">Advantages</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {[
            { icon: Landmark, title: "Sahastradhara Road", dist: "2 mins drive" },
            { icon: Building, title: "Dehradun City", dist: "20 mins drive" },
            { icon: Plane, title: "Doon University", dist: "10 mins drive" },
            { icon: Train, title: "Railway Station", dist: "25 mins drive" },
            { icon: Bus, title: "ISBT Dehradun", dist: "20 mins drive" },
            { icon: GraduationCap, title: "School & College", dist: "10-15 mins drive" },
            { icon: HeartPulse, title: "Hospital", dist: "10 mins drive" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100 last:border-0 pb-6 md:pb-0 px-2">
              <item.icon size={36} strokeWidth={1.2} className="text-brand-gold mb-4" />
              <h4 className="font-bold text-gray-900 text-xs mb-1 whitespace-pre-line">{item.title}</h4>
              <p className="text-gray-500 text-[10px]">{item.dist}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Invest Here */}
      <section className="w-full bg-[#0a0b0f] py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white border-b-2 border-brand-gold inline-block pb-2">
              Why <span className="text-brand-gold">Invest</span> Here?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Rapid Development", desc: "New Defence Colony is one of the fastest developing areas in Dehradun with modern infrastructure." },
              { icon: ShieldCheck, title: "Excellent Connectivity", desc: "Direct access to Sahastradhara Road and 4-Lane Highway ensures easy and smooth travel." },
              { icon: Home, title: "Safe & Secure Area", desc: "Gated community with wide roads and a peaceful environment for living & investment." },
              { icon: IndianRupee, title: "Great Returns", desc: "High rental demand and future value appreciation make it a smart investment choice." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 pb-8 lg:pb-0 px-4">
                <div className="w-16 h-16 border border-brand-gold/30 rounded-full flex items-center justify-center mb-6 text-brand-gold">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-white text-sm mb-4">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-16 pb-8 px-8 border-t border-white/10 text-white mt-auto">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={180} height={70} className="object-contain mb-6" style={{ width: "auto", height: "auto" }} />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium land opportunities across Uttarakhand for a better tomorrow.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://www.facebook.com/badrikedardevelopers" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaFacebookF size={14} /></Link>
              <Link href="https://www.instagram.com/badrikedardevelopers?igsh=dHNsMnZoazh6N3Bj" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaInstagram size={14} /></Link>
              <Link href="https://youtube.com/@badrikedardevelopers?si=Sgf_tHWd8wQ4JJnx" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaYoutube size={14} /></Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-colors"><FaWhatsapp size={14} /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Properties', 'Read & Learn More', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-6 uppercase tracking-wider">Important Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400 items-center">
                <MapPin size={16} className="text-brand-gold shrink-0" />
                <span>+91 9756580000</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 items-center">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <span>info@badrikedardevelopers.com</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 items-center">
                <MapPin size={16} className="text-brand-gold shrink-0" />
                <span>Dehradun, Uttarakhand, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-6 border-t border-white/10 flex items-center justify-center text-xs text-gray-500">
          <p>© 2026 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
