import os
import re

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            
            # Remove the top bar phone span
            content = re.sub(r'<span[^>]*>\s*<Phone[^>]*/>\s*\+91 92580 02814\s*</span>\s*', '', content)
            
            # Remove the footer phone span
            content = re.sub(r'<li[^>]*>\s*<Phone[^>]*/>\s*<span>\+91 92580 02814</span>\s*</li>\s*', '', content)
            
            # Remove the contact page Phone block (lines 120-131 in contact/page.tsx)
            # Match from {/* Phone Number */} down to </div> before {/* Email Address */}
            content = re.sub(r'\{\/\*\s*Phone Number\s*\*\/\}.*?</div>\s*</div>\s*', '', content, flags=re.DOTALL)
            
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")
