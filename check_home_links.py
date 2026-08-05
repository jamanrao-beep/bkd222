with open('app/page.tsx', 'r', encoding='utf-8') as f:
    for line in f:
        if 'projects/' in line:
            print(line.strip())
