import os

def update_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update Plot480.tsx
update_file('app/projects/[id]/Plot480.tsx', {
    '/gal_new_main.png': '/prop1_gal_main.png',
    '/gal_new_1.png': '/prop1_gal_1.png',
    '/gal_new_2.png': '/prop1_gal_2.png',
    '/gal_new_3.png': '/prop1_gal_3.png',
    '/gal_new_4.png': '/prop1_gal_4.png'
})

# Update Plot530.tsx
update_file('app/projects/[id]/Plot530.tsx', {
    '/gal_new_main.png': '/prop2_gal_main.png',
    '/gal_new_1.png': '/prop2_gal_1.png',
    '/gal_new_2.png': '/prop2_gal_2.png'
})

# Update FunValley.tsx (reverse order so it feels different)
update_file('app/projects/[id]/FunValley.tsx', {
    '/gal_new_1.png': '/gal_new_4.png',
    '/gal_new_2.png': '/gal_new_3.png',
    '/gal_new_3.png': '/gal_new_2.png',
    '/gal_new_4.png': '/gal_new_1.png'
})

print("Applied unique galleries")
