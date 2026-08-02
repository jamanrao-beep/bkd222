import os

replacements = {
    'href="https://facebook.com"': 'href="https://www.facebook.com/badrikedardevelopers" target="_blank" rel="noopener noreferrer"',
    'href="https://instagram.com"': 'href="https://www.instagram.com/badrikedardevelopers?igsh=dHNsMnZoazh6N3Bj" target="_blank" rel="noopener noreferrer"',
    'href="https://youtube.com"': 'href="https://youtube.com/@badrikedardevelopers?si=Sgf_tHWd8wQ4JJnx" target="_blank" rel="noopener noreferrer"',
    'href="https://whatsapp.com"': 'href="https://wa.me/919058571709?text=Hi%2C%20can%20I%20get%20more%20information%20about%20your%20properties%20in%20Darjeeling%3F" target="_blank" rel="noopener noreferrer"',
    'src="/bkd-white-logo.png"': 'src="/BKD LOGO Official.png"',
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
