import os
import re

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Replace Images
    replacements = {
        '"/Proj1.png"': '"/fun_valley_township.png"',
        '"/Proj2.png"': '"/480_sqyard_plot.png"',
        '"/Proj3.png"': '"/530_sqyard_plot.png"',
        '"/Proj4.png"': '"/181_sqyard_plot.png"'
    }
    
    for old, new in replacements.items():
        content = content.replace(old, new)

    # 2. Remove Back to Projects button blocks
    
    # Pattern for FunValley, Plot480, Plot530, Plot620
    block_pattern = r'<div className="px-8 py-4">\s*<Link href="/projects"[\s\S]*?Back to Projects\s*</Link>\s*</div>'
    content = re.sub(block_pattern, '', content)
    
    # Pattern for page.tsx
    link_pattern = r'<Link href="/projects"[^>]*>\s*<ArrowLeft[^>]*/>\s*Back to Projects\s*</Link>'
    content = re.sub(link_pattern, '', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            update_file(filepath)

print("Done")
