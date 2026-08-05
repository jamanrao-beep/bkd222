import os

filepath = 'app/projects/[id]/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace projectImage generation
old_logic = "const projectImage = \/Proj\.png\;"
new_logic = """const projectImage = projectId === 1 ? '/new_prop_4.jpg' : 
                       projectId === 2 ? '/new_prop_1.jpg' : 
                       projectId === 3 ? '/new_prop_2.jpg' : '/new_prop_3.jpg';"""
                       
content = content.replace(old_logic, new_logic)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

