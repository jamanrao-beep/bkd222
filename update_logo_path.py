import os

app_dir = r"c:\Users\amanr\OneDrive\Desktop\Projects\bkd2\app"

for root, _, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content.replace('/BKD_Logo.png', '/BKD_Logo_V2.png')

            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")
