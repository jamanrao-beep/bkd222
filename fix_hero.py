import os

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
        
        # 1. Fix the logo that was broken
        content = content.replace('src="/universal_hero.jpg/BKD_Logo.png"', 'src="/BKD_Logo.png"')
        
        # 2. Update the actual hero background.
        # Home page hero was usually: src="/hero_high_res.png" or src="/home.jpeg"
        # About, Contact, Learn, Properties was: src="/home.jpeg"
        # The hero image is the one with className="object-cover" right after <section
        
        if 'page.tsx' in filepath and 'app/page.tsx' == filepath:
             content = content.replace('src="/hero_high_res.png"', 'src="/universal_hero.jpg"')
             content = content.replace('src="/home.jpeg"', 'src="/universal_hero.jpg"') # in case it was home.jpeg
        elif 'about' in filepath or 'contact' in filepath or 'learn' in filepath or 'properties' in filepath:
             # The hero image is the one with priority className="object-cover" usually in the top-[-80px] div
             # Let's replace the first /home.jpeg after <section
             # A safer way:
             # We only want to replace the first occurrence of src="/home.jpeg" which is the hero.
             # The footer also has src="/home.jpeg", we want to keep the footer map intact (or we can just leave it as it was if we don't care, but better to target the hero)
             # Let's split by '<footer' and only replace in the first part
             parts = content.split('<footer')
             if len(parts) == 2:
                 parts[0] = parts[0].replace('src="/home.jpeg"', 'src="/universal_hero.jpg"')
                 content = '<footer'.join(parts)
             else:
                 content = content.replace('src="/home.jpeg"', 'src="/universal_hero.jpg"')

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Fixed and updated ' + filepath)
