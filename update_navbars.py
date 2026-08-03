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
    # Determine which link should be active
    active_href = None
    for link in nav_links:
        if re.search(link["match"], filepath.replace("\\", "/")):
            active_href = link["href"]
            break
            
    # For projects sub-pages, etc., just use text-white if not matched
    # Wait, some pages like home page don't use text-white, just hover:text-brand-gold
    # In page.tsx:
    # <Link href="/" className="text-brand-gold border-b-2 border-brand-gold pb-1">Home</Link>
    # In about/page.tsx:
    # <Link href="/" className="text-white hover:text-brand-gold transition-colors">Home</Link>
    # Since text-white is explicit in some, let's just keep text-white for all except when in root page.tsx maybe?
    # Actually, root page.tsx didn't have text-white because it's set on a parent? The parent is text-white. So it's fine.
    
    html = '          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">\\n'
    for link in nav_links:
        is_active = (link["href"] == active_href)
        if is_active:
            className = 'text-brand-gold border-b-2 border-brand-gold pb-1'
        else:
            className = 'hover:text-brand-gold transition-colors'
            if filepath.replace("\\", "/") != "app/page.tsx":
                className = 'text-white hover:text-brand-gold transition-colors'
        
        html += f'            <Link href="{link["href"]}" className="{className}">{link["label"]}</Link>\\n'
    html += '          </div>'
    return html

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the navbar block
    # It starts with: <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
    # And ends with: </div>
    # followed by <Link href="/contact" or something.
    
    start_pattern = r'<div className="hidden lg:flex items-center gap-8 text-sm font-medium">'
    match_start = re.search(start_pattern, content)
    if not match_start:
        return
        
    start_idx = match_start.start()
    
    # find the matching closing div
    idx = start_idx
    div_count = 0
    end_idx = -1
    
    # We can use a simpler approach since it's just a sequence of links.
    # The block ends before the next <Link
    # Actually, let's just find the next </div>
    # Since it's a flat list of Links inside the div:
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
