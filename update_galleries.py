import os
import glob
import re

files_to_check = glob.glob('app/projects/[id]/*.tsx')

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # We will use regex to find all variations of propX_gal_Y.jpg
    
    # Replace main
    if re.search(r'prop\d_gal_main\.jpg', content):
        content = re.sub(r'prop\d_gal_main\.jpg', 'gal_new_main.png', content)
        modified = True
        
    # Replace 1, 2, 3, 4
    for i in range(1, 5):
        pattern = r'prop\d_gal_' + str(i) + r'\.jpg'
        if re.search(pattern, content):
            content = re.sub(pattern, f'gal_new_{i}.png', content)
            modified = True
            
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated galleries in ' + filepath)
