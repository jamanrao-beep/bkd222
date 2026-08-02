import os
import re

privacy_links_regex = r'<Link href="/privacy"[^>]*>Privacy Policy</Link>\s*<div[^>]*w-px[^>]*/>\s*<Link href="/terms"[^>]*>Terms & Conditions</Link>'
privacy_links_regex2 = r'<Link href="/privacy"[^>]*>Privacy Policy</Link>\s*<div[^>]*w-px[^>]*></div>\s*<Link href="/terms"[^>]*>Terms & Conditions</Link>'

# Sometimes the div is <div className="w-px h-4 bg-gray-600"></div> or similar.
# Let's just use a more generic regex:
generic_regex = r'<Link href="/privacy".*?>Privacy Policy</Link>\s*<div className="w-px.*?</div>\s*<Link href="/terms".*?>Terms & Conditions</Link>'
generic_regex_self_closing = r'<Link href="/privacy".*?>Privacy Policy</Link>\s*<div className="w-px.*?/>\s*<Link href="/terms".*?>Terms & Conditions</Link>'

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            
            content = re.sub(generic_regex, '', content, flags=re.DOTALL)
            content = re.sub(generic_regex_self_closing, '', content, flags=re.DOTALL)
            
            # Clean up empty gap-6 divs that just have whitespace
            content = re.sub(r'<div className="flex items-center gap-6">\s*</div>', '', content, flags=re.DOTALL)
            
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")
