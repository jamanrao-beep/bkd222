import os
import re

files = ['app/page.tsx', 'app/about/page.tsx', 'app/properties/page.tsx']
for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        new_content = re.sub(r'fill className=', r'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className=', content)
        new_content = re.sub(r'fill priority className=', r'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className=', new_content)

        if new_content != content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f'Updated {f}')
