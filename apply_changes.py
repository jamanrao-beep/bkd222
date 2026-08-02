import os
import re
import shutil

# Copy project.png to public
if os.path.exists('assets/project.png'):
    shutil.copy('assets/project.png', 'public/project.png')
    print("Copied project.png to public/")

# 1. Update Home Page
page_tsx_path = 'app/page.tsx'
with open(page_tsx_path, 'r', encoding='utf-8') as f:
    page_content = f.read()

# Change heading to "Together We Build Opportunities Not Just Structure"
# Original: A Legacy Built on Trust,<br/>\n              Quality & <span className="text-brand-gold">Commitment</span>
page_content = re.sub(
    r'A Legacy Built on Trust,<br/>\s*Quality & <span className="text-brand-gold">Commitment</span>',
    r'Together We Build Opportunities Not Just Structure',
    page_content, flags=re.DOTALL
)

# Remove "Know More About Us" section and the image next to it
# The structure is:
# <Link href="/about" className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold px-8 py-4 font-semibold hover:bg-brand-gold hover:text-white transition-all">
#   Know More About Us <ChevronRight size={18} />
# </Link>
page_content = re.sub(
    r'<Link href="/about"[^>]*>\s*Know More About Us <ChevronRight size=\{18\} />\s*</Link>',
    '',
    page_content, flags=re.DOTALL
)

# The image to remove:
# <div className="relative h-[600px] rounded-2xl overflow-hidden group">
# ...
# </div>
page_content = re.sub(
    r'<div className="relative h-\[600px\] rounded-2xl overflow-hidden group">.*?</div>\s*</div>\s*</section>',
    r'</div>\n      </section>',
    page_content, flags=re.DOTALL
)

# Use project.png in home page instead of "this image" and link it to /projects
# I will replace the 4 premium developments cards with a single image `project.png` wrapped in a link?
# Or replace the hero image? The text says "Home page instead of this image use project.png... On that image when anyone click redirect them to project page".
# I'll replace the grid in "Our Premium Developments" with a single large Link containing project.png.
premium_dev_regex = r'<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">.*?</div>\s*</section>'
replacement_premium = """<div className="max-w-7xl mx-auto flex justify-center">
          <Link href="/projects" className="block relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
            <Image src="/project.png" alt="Our Projects" width={1200} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="bg-brand-gold text-white px-8 py-4 rounded font-bold text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">Explore All Projects</span>
            </div>
          </Link>
        </div>
      </section>"""
page_content = re.sub(premium_dev_regex, replacement_premium, page_content, flags=re.DOTALL)

with open(page_tsx_path, 'w', encoding='utf-8') as f:
    f.write(page_content)
print("Updated Home Page")

# 2. Update About Us Page
about_tsx_path = 'app/about/page.tsx'
with open(about_tsx_path, 'r', encoding='utf-8') as f:
    about_content = f.read()

# Remove Monu Singh
about_content = re.sub(
    r'\{\/\*\s*Leader 2\s*\*\/\}.*?</div>\s*</div>\s*</div>\s*</section>',
    r'</div>\n        </div>\n      </section>',
    about_content, flags=re.DOTALL
)

# Change "Building Excellence Together" to "Kailash Constructions Company"
about_content = about_content.replace(
    'Building Excellence Together',
    'Kailash Constructions Company'
)

# Replace testimonials with GMB link
testimonial_regex = r'\{\/\*\s*Testimonial \(Right\)\s*\*\/\}.*?</div>\s*</div>\s*</section>'
gmb_replacement = """{/* Testimonial (Right) replaced with GMB */}
          <div className="py-24 px-8 lg:px-16 flex flex-col justify-center items-center bg-white relative">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide text-center">CHECK OUR GOOGLE REVIEWS</h2>
            <Link href="https://share.google/ftjiKC7wvTx2g4uvT" target="_blank" rel="noopener noreferrer" className="bg-white p-10 md:p-14 rounded-2xl shadow-2xl border border-gray-100 max-w-lg w-full relative group hover:border-brand-gold transition-colors flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star size={40} className="text-brand-gold" fill="currentColor" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4">See what our clients say on Google</h3>
              <p className="text-gray-500 mb-8">We pride ourselves on delivering excellent service and quality. Click here to read our Google My Business reviews.</p>
              <span className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 font-semibold hover:bg-brand-gold-hover transition-all rounded shadow-lg">
                View on Google
              </span>
            </Link>
          </div>
        </div>
      </section>"""
about_content = re.sub(testimonial_regex, gmb_replacement, about_content, flags=re.DOTALL)

with open(about_tsx_path, 'w', encoding='utf-8') as f:
    f.write(about_content)
print("Updated About Us Page")

# 3. Remove "Services" and "Gallery" from Quick Links everywhere
for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            content = content.replace("'Services', 'Gallery', ", "")
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Removed Services/Gallery from {path}")

# 4. Update Projects Page
proj_tsx_path = 'app/projects/page.tsx'
with open(proj_tsx_path, 'r', encoding='utf-8') as f:
    proj_content = f.read()

# Make project images use project.png and wrap in Link to /projects/1 etc.
# Find the mapping of projects
proj_content = re.sub(
    r'src=\{project\.img\}',
    r'src="/project.png"',
    proj_content
)
# Wrap the project card in a Link
proj_content = re.sub(
    r'<div key=\{i\} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">',
    r'<Link href={`/projects/${i+1}`} key={i} className="block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">',
    proj_content
)
proj_content = re.sub(
    r'</div>\s*\}\)\}\s*</div>\s*</section>',
    r'</Link>\n            ))}\n          </div>\n        </section>',
    proj_content
)

with open(proj_tsx_path, 'w', encoding='utf-8') as f:
    f.write(proj_content)
print("Updated Projects Page")

# 5. Update Contact Page
cont_tsx_path = 'app/contact/page.tsx'
with open(cont_tsx_path, 'r', encoding='utf-8') as f:
    cont_content = f.read()

# Add Map
map_embed = """          {/* Map */}
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 h-96 relative overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.344400588662!2d78.0777519151221!3d30.341103781775798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909299be12a02ad%3A0xc6a87c1264c1da56!2sIT%20Park%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1689239847123!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>"""
cont_content = re.sub(r'\{\/\*\s*Map\s*\*\/\}.*?</div>', map_embed, cont_content, flags=re.DOTALL)

# Add Dropdown to form
form_regex = r'<div className="grid md:grid-cols-2 gap-6 mb-6">.*?</div>'
replacement_form = """<div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-gray-50 focus:bg-white" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                    <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-gray-50 focus:bg-white" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Are you a?</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-gray-50 focus:bg-white text-gray-700">
                    <option value="" disabled selected>Select an option</option>
                    <option value="buyer">Buyer</option>
                    <option value="channel-partner">Channel Partner / Real Estate Professional</option>
                  </select>
                </div>"""
cont_content = re.sub(form_regex, replacement_form, cont_content, flags=re.DOTALL)

with open(cont_tsx_path, 'w', encoding='utf-8') as f:
    f.write(cont_content)
print("Updated Contact Page")
