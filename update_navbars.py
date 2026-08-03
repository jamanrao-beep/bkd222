import os
import re

nav_links = [
    {"href": "/", "label": "Home", "match": r"page\.tsx$"},
    {"href": "/about", "label": "About Us", "match": r"about[\\/]page\.tsx$"},
    {"href": "/projects", "label": "Projects", "match": r"projects[\\/]page\.tsx$"},
    {"href": "/blogs", "label": "Blogs", "match": r"blogs[\\/]page\.tsx$"},
    {"href": "/partners", "label": "Our Partners", "match": r"partners[\\/]page\.tsx$"},
    {"href": "/contact", "label": "Contact", "match": r"contact[\\/]page\.tsx$"},
]

def generate_nav(filepath):
    active_href = None
    for link in nav_links:
        if re.search(link["match"], filepath.replace("\\", "/")):
            active_href = link["href"]
            break
            
    html = '          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">\n'
    for link in nav_links:
        is_active = (link["href"] == active_href)
        if is_active:
            className = 'text-brand-gold border-b-2 border-brand-gold pb-1'
        else:
            className = 'hover:text-brand-gold transition-colors'
            if filepath.replace("\\", "/") != "app/page.tsx":
                className = 'text-white hover:text-brand-gold transition-colors'
        
        html += f'            <Link href="{link["href"]}" className="{className}">{link["label"]}</Link>\n'
    html += '          </div>'
    return html

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The navbar block now is exactly on one line with literal \n because of previous error.
    # We should match starting from <div className="hidden lg:flex items-center gap-8 text-sm font-medium"> 
    # to </div>
    
    start_pattern = r'<div className="hidden lg:flex items-center gap-8 text-sm font-medium">'
    match_start = re.search(start_pattern, content)
    if not match_start:
        return
        
    start_idx = match_start.start()
    
    # find the next </div>
    end_match = re.search(r'</div>', content[start_idx:])
    if end_match:
        end_idx = start_idx + end_match.end()
        
    if end_idx != -1:
        new_nav = generate_nav(filepath)
        new_content = content[:start_idx] + new_nav + content[end_idx:]
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")

for root, _, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            update_file(filepath)

print("Done")
