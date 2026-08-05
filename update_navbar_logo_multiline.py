import os
import re

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            
            # The multiline logo looks like:
            #             <Image 
            #               src="/BKD_Logo.png" 
            #               alt="Badri Kedar Developers" 
            #               width={160} 
            #               height={60} 
            #               className="object-contain"
            #              style={{ width: "auto", height: "auto" }} />
            
            # Use regex to find it and replace it.
            pattern = re.compile(r'<Image\s+src="/BKD_Logo\.png"\s+alt="Badri Kedar Developers"\s+width=\{160\}\s+height=\{60\}\s+className="object-contain"\s+style=\{\{\s*width:\s*"auto",\s*height:\s*"auto"\s*\}\}\s*/>', re.DOTALL)
            
            replacement = '<Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={440} height={140} className="h-24 w-auto object-contain" />'
            
            content = pattern.sub(replacement, content)
            
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated multiline logo in {path}")
