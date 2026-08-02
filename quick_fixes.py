import os
import re

# 1. Update Address globally
old_address = "1st Floor, IT Park, Shop No. 18, Doon Square, Dehradun, Uttarakhand 248013"
new_address = "Bhagirath Enclave, 52, Balbir Rd, Dalanwala, Dehradun, Uttarakhand 248001"

# 2. Update WhatsApp Link in page.tsx (and potentially elsewhere)
wa_link = "https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%2 Media0in%20Darjeeling%3F"

# 3. Privacy Policy / Terms & Conditions section to remove:
privacy_section = r'<div className="max-w-\[1600px\] mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">.*?</div>\s*</footer>'
privacy_replacement = r"""<div className="max-w-[1600px] mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-center text-xs text-gray-500">
          <p>© 2024 <span className="text-brand-gold">Badri Kedar Developers</span>. All Rights Reserved.</p>
        </div>
      </footer>"""

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            
            # Replace address
            content = content.replace(old_address, new_address)
            
            # Remove Privacy/Terms from footer
            content = re.sub(privacy_section, privacy_replacement, content, flags=re.DOTALL)
            
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")

# Specifically update app/page.tsx for Hero Image and WhatsApp Link
page_path = 'app/page.tsx'
with open(page_path, 'r', encoding='utf-8') as f:
    page_content = f.read()

# WhatsApp floating button fix
page_content = page_content.replace(
    '''<Link href='#' className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
          <MessageCircle size={28} />
        </Link>''',
    f'''<Link href="{wa_link}" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
          <MessageCircle size={28} />
        </Link>'''
)

# Also check for `<Link href="#">\n              Chat on WhatsApp`
page_content = page_content.replace(
    '<Link href="#" className="inline-flex items-center gap-2',
    f'<Link href="{wa_link}" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2'
)

# Hero Image fix
page_content = page_content.replace(
    'src="/home.jpeg"',
    'src="/project.png"'
)

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page_content)

print("Updated app/page.tsx for WA and Hero image")
