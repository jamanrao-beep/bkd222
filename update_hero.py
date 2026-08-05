import os
import re

files_to_update = [
    'app/page.tsx',
    'app/about/page.tsx',
    'app/contact/page.tsx',
    'app/learn/page.tsx',
    'app/properties/page.tsx'
]

for filepath in files_to_update:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        def repl(match):
            return match.group(1) + '/universal_hero.jpg' + match.group(2)
            
        new_content = re.sub(r'(<Image[^>]*?src=\")([^\"]+)(\")', repl, content, count=1)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Updated ' + filepath)
