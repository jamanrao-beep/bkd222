import os
import re

iframe_map = """<div className="w-full h-24 bg-gray-800 rounded overflow-hidden relative border border-gray-700">
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
            </div>"""

pattern = re.compile(r'<div className="w-full h-24 bg-gray-800 rounded overflow-hidden relative border border-gray-700">\s*<Image src="/universal_hero\.jpg".*?Map Location.*?\s*<div className="absolute inset-0 flex items-center justify-center">\s*<MapPin.*?>\s*</div>\s*</div>', re.DOTALL)

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if pattern.search(content):
                new_content = pattern.sub(iframe_map, content)
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated footer map in {path}")
