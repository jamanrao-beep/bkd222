import os
import glob
import re

files_to_check = glob.glob('app/**/*.tsx', recursive=True)

old_block = r'''<div className="w-full h-24 bg-gray-800 rounded overflow-hidden relative border border-gray-700">
               <Image src="/home.jpeg" alt="Map Location" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin size={24} className="text-\[#ea4335\] drop-shadow-md" />
               </div>
            </div>'''

new_block = '''<div className="w-full h-24 bg-gray-800 rounded overflow-hidden relative border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74617267597!2d77.94709420067305!3d30.32540979207907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1715612345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={False}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>'''

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We will just do a loose replacement finding the start and end since whitespace can vary
    pattern = r'<div className="w-full h-24 bg-gray-800 rounded overflow-hidden relative border border-gray-700">\s*<Image src="/home\.jpeg" [^>]+>\s*<div className="absolute inset-0 flex items-center justify-center">\s*<MapPin size=\{24\} className="text-\[#ea4335\] drop-shadow-md" />\s*</div>\s*</div>'
    
    if re.search(pattern, content):
        content = re.sub(pattern, new_block, content)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated map in ' + filepath)
