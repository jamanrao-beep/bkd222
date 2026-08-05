import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Phone, Mail, ChevronRight, ShieldCheck, Map, TrendingUp,
  Check, Building2, Trees, Droplets, Mountain, Store, Users, Award, Compass, Car,
  CheckCircle2, FileText, Target, Eye, Handshake, Headphones, Calendar, ArrowRight
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import handshakeImg from "../../assets/handshake.png";


export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#F7A300] selection:text-white overflow-x-hidden">
      {/* 1. Header (Navbar) */}
      <header className="absolute top-0 w-full z-50 bg-black border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={440} height={140} className="h-24 w-auto object-contain" />
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-white border-b-2 border-[#F7A300] pb-1 text-sm font-medium">About Us</Link>
            <Link href="/properties" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Properties</Link>
            <Link href="/learn" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Read &amp; Learn More</Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#F7A300] text-sm font-medium transition-colors">Contact Us</Link>
          </nav>

          {/* Enquire Now Button */}
          <Link href="/contact" className="bg-[#F7A300] text-black px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
            Enquire Now <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center mt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
          <Image src="/universal_hero.jpg" alt="Premium Plots" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" priority />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center h-full pt-10">
          <div className="max-w-2xl text-white">
            <p className="text-[#F7A300] font-bold tracking-[0.15em] text-xs uppercase mb-4">ABOUT US</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Building <span className="text-[#F7A300]">Trust.</span><br />
              Creating <span className="text-[#F7A300]">Value.</span>
            </h1>
            <p className="text-gray-200 text-base md:text-lg max-w-lg leading-relaxed font-medium">
              We are committed to helping you invest in premium land assets that offer long term value, security and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Who We Are Section */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
            <div className="lg:w-[45%]">
              <p className="text-[#F7A300] font-bold text-xs tracking-widest uppercase mb-4">WHO WE ARE</p>
              <h2 className="font-serif text-4xl lg:text-[40px] font-bold mb-6 text-gray-900 leading-tight">
                Your <span className="text-[#F7A300]">Trusted Partner</span> in Land Investment
              </h2>
              <p className="text-gray-600 mb-8 text-[15px] leading-relaxed">
                Badri Kedar Developers is a trusted name in real estate investment across Uttarakhand. We specialize in premium land parcels that offer not just ownership, but long term value and peace of mind.
              </p>
              <ul className="space-y-4">
                {['Clear Titles & Documentation', 'High Appreciation Potential', 'Best Locations in Uttarakhand', 'Hassle Free Buying Process'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-[#F7A300] rounded-full p-0.5">
                      <Check size={16} className="text-white stroke-[3]" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[55%] w-full pt-4">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/universal_hero.jpg" alt="Scenic land" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
            </div>
          </div>

          {/* 4. Mission & Vision Box */}
          <div className="bg-[#fafafa] rounded-2xl p-10 md:p-14 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Mission */}
              <div className="flex-1 flex flex-col items-center text-center pb-8 md:pb-0 md:pr-12">
                <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center mb-6">
                  <Target className="text-[#F7A300] w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  To provide genuine land investment opportunities with complete transparency, clear documentation and excellent customer service.
                </p>
              </div>

              {/* Vision */}
              <div className="flex-1 flex flex-col items-center text-center pt-8 md:pt-0 md:pl-12">
                <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center mb-6">
                  <Eye className="text-[#F7A300] w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  To be the most trusted and preferred land investment company in Uttarakhand, known for integrity, reliability and value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Core Values Section */}
      <section className="bg-[#0f1115] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-[#F7A300] font-bold text-xs tracking-widest uppercase mb-12 text-center">OUR CORE VALUES</p>

          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {[
              { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "Transparency", desc: "We believe in complete clarity in every deal." },
              { icon: <Handshake size={32} strokeWidth={1.5} />, title: "Integrity", desc: "Honest practices and ethical commitment." },
              { icon: <TrendingUp size={32} strokeWidth={1.5} />, title: "Growth", desc: "Delivering high value and long term growth." },
              { icon: <FileText size={32} strokeWidth={1.5} />, title: "Legal Safety", desc: "All our properties are legally verified and secure." },
              { icon: <Users size={32} strokeWidth={1.5} />, title: "Customer First", desc: "Your satisfaction and trust are our top priorities." },
              { icon: <Headphones size={32} strokeWidth={1.5} />, title: "End to End Support", desc: "From search to settlement, we are with you." }
            ].map((value, i) => (
              <div key={i} className={`flex flex-col items-center text-center flex-1 ${i !== 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}>
                <div className="text-[#F7A300] mb-4">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold text-[15px] mb-3">{value.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partnership Module Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image src={handshakeImg} alt="Partnership" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 w-full pt-4">
              <h2 className="font-serif text-[34px] font-bold mb-8 text-gray-900 leading-tight">
                <span className="text-[#F7A300]">Partnership</span> Module
              </h2>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">1. JV model - shared investment/shared profit</h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                  <li>50-50% in investment</li>
                  <li>50-50% in profit.</li>
                </ul>
              </div>

              <div className="w-full border-t border-dashed border-gray-300 my-6"></div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 text-base mb-2">2. Developers exclusive model -</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  We offer land support on just 10% token money with a 10 - 14 months for construction and sale.<br />
                  With your investment in construction, you get to keep the profits.<br />
                  We settle the remaining amount on sale.
                </p>
              </div>

              <p className="text-gray-700 text-sm italic font-medium bg-gray-50 p-4 rounded-lg border border-gray-100">
                Each model can be customized depending on mutual agreement and project scale.
              </p>
            </div>
          </div>

          {/* 7. Stats Bar */}
          <div className="mt-20 bg-[#fafafa] rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="w-12 h-12 flex items-center justify-center text-[#F7A300]">
                <Calendar size={36} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-gray-900">10+</h4>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wide">Years of<br />Experience</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-gray-200"></div>

            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="w-12 h-12 flex items-center justify-center text-[#F7A300]">
                <MapPin size={36} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-gray-900">100+</h4>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wide">Premium<br />Locations</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-gray-200"></div>

            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="w-12 h-12 flex items-center justify-center text-[#F7A300]">
                <Building2 size={36} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-gray-900">57+</h4>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wide">Projects<br />Delivered</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-gray-200"></div>

            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="w-12 h-12 flex items-center justify-center text-[#F7A300]">
                <Users size={36} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-gray-900">500+</h4>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wide">Happy<br />Investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call To Action Strip */}
      <section className="bg-[#2c3138] border-t border-white/5 py-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-[28px] font-serif text-white mb-2 leading-tight">Ready to Invest in Your Future?</h2>
            <p className="text-gray-400 text-sm">Connect with our experts today and explore the best land opportunities.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-[#F7A300] text-black px-6 py-3 rounded text-sm font-bold flex items-center gap-2 hover:bg-[#e59800] transition-colors">
              Enquire Now <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link href="tel:+919756580000" className="bg-transparent border border-white/30 text-white px-6 py-3 rounded text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Phone size={16} fill="transparent" /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-[#0a0a0a] text-gray-400 pt-16 pb-8 text-[13px]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={200} height={60} className="mb-6 h-12 w-auto object-contain" />
            <p className="mb-6 leading-relaxed">
              Premium land opportunities across Uttarakhand for a better tomorrow.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaFacebookF size={13} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaInstagram size={13} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaYoutube size={13} /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#F7A300] hover:border-[#F7A300] transition-colors"><FaLinkedinIn size={13} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-xs uppercase">QUICK LINKS</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/" className="hover:text-[#F7A300] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#F7A300] transition-colors">About Us</Link></li>
              <li><Link href="/properties" className="hover:text-[#F7A300] transition-colors">Properties</Link></li>
              <li><Link href="/learn" className="hover:text-[#F7A300] transition-colors">Read &amp; Learn More</Link></li>
              <li><Link href="/contact" className="hover:text-[#F7A300] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-xs uppercase">CONTACT US</h4>
            <ul className="space-y-3 mb-8 font-medium">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#F7A300]" />
                <span>+91 9756580000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#F7A300]" />
                <span>info@badrikedardevelopers.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#F7A300] shrink-0 mt-0.5" />
                <span>Dehradun, Uttarakhand, India</span>
              </li>
            </ul>
            <h4 className="text-white font-bold mb-4 tracking-wider text-xs uppercase">OUR LOCATION</h4>
            <div className="w-full h-24 bg-gray-800 rounded overflow-hidden relative border border-gray-700">
              <iframe
                src="https://maps.google.com/maps?q=Dehradun,+Uttarakhand,+India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 pt-6 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-medium">
          <p>© 2026 Badri Kedar Developers. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
