import os
import re

big_footer = '''      {/* Footer */}
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
      </footer>'''

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update imports
    # Check if react-icons/fa is imported
    if "react-icons/fa" not in content:
        import_stmt = 'import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";\n'
        content = content.replace('import Link from "next/link";\n', 'import Link from "next/link";\n' + import_stmt)
    
    # Ensure ChevronRight, Clock, Mail are imported from lucide-react
    lucide_imports_match = re.search(r'import\s+\{([^}]+)\}\s+from\s+"lucide-react";', content)
    if lucide_imports_match:
        imports_str = lucide_imports_match.group(1)
        needed = ['ChevronRight', 'Clock', 'Mail']
        to_add = [n for n in needed if n not in imports_str]
        if to_add:
            new_imports_str = imports_str.rstrip() + ', ' + ', '.join(to_add) + '\n'
            content = content.replace(imports_str, new_imports_str)

    # 2. Fix Layout (overlap and zooming out issue)
    # Target: <section className="relative w-full max-w-[1400px] mx-auto min-h-[800px] flex flex-col pt-12 pb-24 overflow-hidden">
    # (min-h-[800px] or min-h-[850px], max-w-[1400px] might be there)
    content = re.sub(
        r'<section className="relative w-full max-w-\[1400px\] mx-auto min-h-\[(\d+)px\]',
        r'<section className="relative w-full min-h-screen',
        content
    )
    
    # Also adjust absolute bottom bar so it doesn't overlap on very small screens.
    # In FunValley: <div className="absolute bottom-8 left-4 right-4 md:left-12 md:right-12 z-20">
    # If we just change 'absolute bottom-8' to 'absolute bottom-4 md:bottom-8', it might still overlap if screen is tiny.
    # A better approach is to wrap it in a div that handles spacing or just trust min-h-screen. We'll trust min-h-screen for now since min-h-screen usually gives enough space (1080px is > 850px).
    # Wait, the user said min-h-[800px] or [850px] wasn't enough? No, they said "on zooming out nothing is filling up". This is caused by `max-w-[1400px] mx-auto`. Removing it solves the zooming out issue.

    # 3. Replace Footer
    # Find existing footer: <footer className="bg-black pt-16 pb-8 px-8 border-t border-white/10 text-white"> ... </footer>
    footer_pattern = r'\{/\*\s*Footer\s*\*/\}\s*<footer.*?</footer\s*>'
    content = re.sub(footer_pattern, big_footer, content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

project_files = ['FunValley.tsx', 'Plot480.tsx', 'Plot530.tsx', 'Plot620.tsx']
for p in project_files:
    filepath = os.path.join('app', 'projects', '[id]', p)
    if os.path.exists(filepath):
        update_file(filepath)

print("Done")
