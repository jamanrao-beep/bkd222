import os
import re

privacy_regex = r'<div className="flex items-center gap-6">\s*<Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>\s*<div className="w-px h-3 bg-gray-600" />\s*<Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>\s*</div>'

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            
            # Remove Privacy/Terms from footer
            content = re.sub(privacy_regex, '', content, flags=re.DOTALL)
            
            # Also replace justify-between with justify-center in the footer bottom bar if we removed it
            content = content.replace(
                'justify-between gap-4 text-xs text-gray-500">\n          <p>© 2024 <span className="text-brand-gold">Badri Kedar Developers</span>. All Rights Reserved.</p>\n        </div>\n      </footer>',
                'justify-center text-xs text-gray-500">\n          <p>© 2024 <span className="text-brand-gold">Badri Kedar Developers</span>. All Rights Reserved.</p>\n        </div>\n      </footer>'
            )
            
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")
