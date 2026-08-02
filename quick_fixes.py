import os

directories = ['app', 'app/about', 'app/contact', 'app/projects', 'app/projects/[id]', 'app/blogs']
files_to_check = ['page.tsx', 'FunValley.tsx', 'Plot480.tsx', 'Plot530.tsx', 'Plot620.tsx']

for directory in directories:
    for file in files_to_check:
        filepath = os.path.join(directory, file)
        if not os.path.exists(filepath): continue
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        content = content.replace('style={{ width: "auto", height: "auto" }} style={{ width: "auto", height: "auto" }}', 'style={{ width: "auto", height: "auto" }}')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
print('Fixed duplicate styles')
