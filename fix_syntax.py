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
        
        fixed_content = content.replace('src="/universal_hero.jpg/BKD_Logo.png alt=', 'src="/BKD_Logo.png" alt=')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print('Fixed syntax in ' + filepath)
