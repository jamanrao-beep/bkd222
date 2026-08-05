import os
import glob

# The mapping from old image to new image
replacements = {
    '/480_sqyard_plot.png': '/new_prop_1.jpg',
    '/530_sqyard_plot.png': '/new_prop_2.jpg',
    '/181_sqyard_plot.png': '/new_prop_3.jpg',
    '/fun_valley_township.png': '/new_prop_4.jpg'
}

files_to_check = glob.glob('app/**/*.tsx', recursive=True)

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    for old, new in replacements.items():
        if old in content:
            content = content.replace(old, new)
            modified = True
            
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated ' + filepath)
