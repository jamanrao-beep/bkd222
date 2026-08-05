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
        
        # We want to find the <header ...> or <nav ...> that has the absolute positioning and make its background black.
        # We can replace 'bg-[#161616]/95 backdrop-blur-sm' with 'bg-black'
        # And in learn/page.tsx, replace 'bg-transparent' in the <nav> with 'bg-black'
        
        # Replace the class
        content = content.replace('bg-[#161616]/95 backdrop-blur-sm', 'bg-black')
        content = content.replace('bg-transparent border-b border-white/10', 'bg-black border-b border-white/10')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated navbar bg in ' + filepath)
