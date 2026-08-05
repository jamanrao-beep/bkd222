import os

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '/new_prop_4.jpg' in content:
                new_content = content.replace('/new_prop_4.jpg', '/funvalley_thumbnail.jpg')
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated thumbnail in {path}")
