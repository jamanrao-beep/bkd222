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
        
        # 1. Remove top-[-80px]
        content = content.replace('top-[-80px]', '')
        
        # 2. Add mt-[80px] to learn page hero section if missing
        if 'learn/page.tsx' in filepath:
            # We know the section is: <section className="relative w-full h-[60vh] min-h-[450px] overflow-hidden flex flex-col justify-end pb-[10vh]">
            if 'mt-[80px]' not in content:
                content = content.replace('<section className="relative w-full h-[60vh]', '<section className="relative w-full mt-[80px] h-[60vh]')

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Fixed image overlap in ' + filepath)
