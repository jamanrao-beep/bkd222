import os

replacements = {
    'src="/BKD LOGO Official.png"': 'src="/BKD_Logo.png"',
    'src="/BKD.png"': 'src="/BKD_Logo.png"'
}

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            for old, new in replacements.items():
                content = content.replace(old, new)
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")
