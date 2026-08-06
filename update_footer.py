import os
import re

app_dir = r"c:\Users\amanr\OneDrive\Desktop\Projects\bkd2\app"

for root, _, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content
            
            # Replace logo Image
            # <Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={200} height={60} className="mb-6 h-12 w-auto object-contain" />
            # We will use regex to find the BKD_Logo Image tag and replace it.
            logo_pattern = r'<Image src="/BKD_Logo\.png".*?className="mb-6 h-12 w-auto object-contain".*?/>'
            new_logo = '<Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={300} height={100} className="mb-6 h-20 md:h-24 w-auto object-contain" />'
            new_content = re.sub(logo_pattern, new_logo, new_content, flags=re.DOTALL)
            
            # Replace <p>© 2026 ...
            # Find <p> and optionally any class, ending with © 2026
            # We just want to ensure it has className="text-center w-full"
            # Some are <p>...
            # Some are <p className="...">...
            # Let's replace `<p>© 2026 ` with `<p className="text-center w-full">© 2026 `
            new_content = new_content.replace('<p>© 2026 ', '<p className="text-center w-full">© 2026 ')

            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")
