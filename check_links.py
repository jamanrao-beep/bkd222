with open('app/properties/page.tsx', 'r', encoding='utf-8') as f:
    for line in f:
        if 'href="/projects/' in line:
            print(line.strip())
