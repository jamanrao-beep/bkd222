import os
import re

regex = r'\s*<Link href="/privacy"[^>]*>Privacy Policy</Link>\s*<div[^>]*(?:/>|>\s*</div>)\s*<Link href="/terms"[^>]*>Terms & Conditions</Link>'

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = re.sub(regex, '', content)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {path}")
