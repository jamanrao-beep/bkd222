import os
import re

def fix_images_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = re.sub(r'fill className=', r'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className=', content)
    new_content = re.sub(r'fill priority className=', r'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className=', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed images in {filepath}')

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            fix_images_in_file(os.path.join(root, file))
