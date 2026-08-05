import re

filepath = 'app/properties/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to be careful with the replacements.
# Let's split by Card 1, Card 2, Card 3, Card 4 comments.
parts = content.split('{/* Card ')
new_parts = [parts[0]]

for part in parts[1:]:
    card_num = int(part[0])
    if card_num == 1: # Ranipokhari
        # replace href="/projects/1" with href="/projects/2"
        part = part.replace('href="/projects/1"', 'href="/projects/2"')
    elif card_num == 2: # Thano
        # replace href="/projects/2" with href="/projects/3"
        part = part.replace('href="/projects/2"', 'href="/projects/3"')
    elif card_num == 3: # New Defence Colony
        # replace href="/projects/3" with href="/projects/4"
        part = part.replace('href="/projects/3"', 'href="/projects/4"')
    elif card_num == 4: # Fun Valley
        # replace href="/projects/4" with href="/projects/1"
        part = part.replace('href="/projects/4"', 'href="/projects/1"')
    
    new_parts.append(part)
    
new_content = '{/* Card '.join(new_parts)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Updated properties page links")
