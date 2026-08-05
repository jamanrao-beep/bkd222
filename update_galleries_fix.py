import glob

# Escape the brackets for glob
files_to_check = glob.glob('app/projects/[[]id[]]/*.tsx')

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    for i in range(1, 5):
        # main
        old_main = f'/prop{i}_gal_main.jpg'
        if old_main in content:
            content = content.replace(old_main, '/gal_new_main.png')
            modified = True
            
        # 1 to 4
        for j in range(1, 5):
            old_sub = f'/prop{i}_gal_{j}.jpg'
            if old_sub in content:
                content = content.replace(old_sub, f'/gal_new_{j}.png')
                modified = True
                
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated ' + filepath)
