import os

project_files = ['FunValley.tsx', 'Plot480.tsx', 'Plot530.tsx', 'Plot620.tsx']
for p in project_files:
    filepath = os.path.join('app', 'projects', '[id]', p)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace min-h-screen with min-h-[950px] lg:min-h-screen
        content = content.replace('min-h-screen flex flex-col pt-12', 'min-h-[950px] lg:min-h-screen flex flex-col pt-12')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
print("Done")
