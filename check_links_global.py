import glob
files = glob.glob('app/**/*.tsx', recursive=True)
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        for line in f:
            if 'projects/' in line and 'href' in line:
                print(f'{file}: {line.strip()}')
