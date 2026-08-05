import os
import re

files_and_replacements = {
    'app/projects/[id]/FunValley.tsx': '/new_prop_4.jpg',
    'app/projects/[id]/Plot181.tsx': '/new_prop_3.jpg',
    'app/projects/[id]/Plot480.tsx': '/new_prop_1.jpg',
    'app/projects/[id]/Plot530.tsx': '/new_prop_2.jpg'
}

for filepath, new_src in files_and_replacements.items():
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # The hero image is the first <Image tag that comes after {/* Top Hero Section */}
        # or we can just replace the specific old sources if we know them.
        # Let's see if we can find the src of the first Image.
        # Actually, from grep earlier: 
        # FunValley.tsx: src="/funvalley_hero.jpg"
        # Since we don't know the others exactly, let's just find the first Image src under Top Hero Section.
        
        parts = content.split('{/* Top Hero Section */}')
        if len(parts) > 1:
            hero_part = parts[1]
            # Replace first src="xyz" with src="new_src"
            new_hero_part = re.sub(r'src="[^"]+"', f'src="{new_src}"', hero_part, count=1)
            content = parts[0] + '{/* Top Hero Section */}' + new_hero_part
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print('Updated hero in ' + filepath)
