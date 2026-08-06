import os

# 1. Update Footer Logo and Copyright across all files
app_dir = r"c:\Users\amanr\OneDrive\Desktop\Projects\bkd2\app"

for root, _, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content
            
            # Replace logo Image
            old_logo = '<Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={200} height={60} className="mb-6 h-12 w-auto object-contain" />'
            new_logo = '<Image src="/BKD_Logo.png" alt="Badri Kedar Developers" width={250} height={80} className="mb-6 h-20 md:h-24 w-auto object-contain" />'
            new_content = new_content.replace(old_logo, new_logo)
            
            # Replace <p>© 2026 ...
            new_content = new_content.replace('<p>© 2026 ', '<p className="text-center w-full">© 2026 ')

            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated footer in {file_path}")

# 2. Restore Fun Valley thumbnail
def replace_in_file(file_path, old_str, new_str):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    if old_str in content:
        content = content.replace(old_str, new_str)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Restored in {file_path}")

replace_in_file(os.path.join(app_dir, 'properties/page.tsx'), 'src="/funvalley_thumbnail.jpg"', 'src="/funvalley_new_thumbnail.jpg"')
replace_in_file(os.path.join(app_dir, 'page.tsx'), 'src="/funvalley_thumbnail.jpg"', 'src="/funvalley_new_thumbnail.jpg"')
replace_in_file(os.path.join(app_dir, 'projects/[id]/FunValley.tsx'), 'src="/funvalley_thumbnail.jpg"', 'src="/funvalley_new_thumbnail.jpg"')

# 3. Restore app/about/page.tsx Partnership Alignment
about_file = os.path.join(app_dir, 'about/page.tsx')
with open(about_file, 'r', encoding='utf-8') as f:
    about_content = f.read()

about_content = about_content.replace('<div className="flex flex-col lg:flex-row gap-16 items-start">', '<div className="flex flex-col lg:flex-row gap-16 items-stretch">')
about_content = about_content.replace('<div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">', '<div className="relative w-full h-full min-h-[350px] rounded-xl overflow-hidden shadow-lg">')
about_content = about_content.replace('<div className="lg:w-1/2 w-full pt-4">', '<div className="lg:w-1/2 w-full flex flex-col justify-center">')
about_content = about_content.replace('<p className="text-gray-700 text-sm italic font-medium bg-gray-50 p-4 rounded-lg border border-gray-100">', '<p className="text-gray-700 text-sm italic font-medium">')

with open(about_file, 'w', encoding='utf-8') as f:
    f.write(about_content)
print(f"Restored About page alignment")

# 4. Restore galleries
gallery_template = """        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative h-[420px] rounded-2xl overflow-hidden group shadow-md">
            <Image src="/{prefix}_new_gal_main.{ext_main}" alt="Property View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[202px] rounded-2xl overflow-hidden group shadow-sm">
              <Image src="/{prefix}_new_gal_1.{ext}" alt="Property View 1" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-[202px] rounded-2xl overflow-hidden group shadow-sm">
              <Image src="/{prefix}_new_gal_2.{ext}" alt="Property View 2" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-[202px] rounded-2xl overflow-hidden group shadow-sm">
              <Image src="/{prefix}_new_gal_3.{ext3}" alt="Property View 3" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-[202px] rounded-2xl overflow-hidden group shadow-sm">
              <Image src="/{prefix}_new_gal_4.{ext4}" alt="Property View 4" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>"""

def restore_gallery(file_path, prefix, ext_main, ext, ext3, ext4, search_start, search_end):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_idx = content.find(search_start)
    end_idx = content.find(search_end, start_idx)
    if start_idx != -1 and end_idx != -1:
        new_gallery = gallery_template.format(prefix=prefix, ext_main=ext_main, ext=ext, ext3=ext3, ext4=ext4)
        content = content[:start_idx] + new_gallery + content[end_idx:]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Restored gallery in {file_path}")

# Thano
restore_gallery(os.path.join(app_dir, 'projects/[id]/Plot530.tsx'), 'thano', 'png', 'png', 'png', 'png', '<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">', '</section>')
# RaniPokhri
restore_gallery(os.path.join(app_dir, 'projects/[id]/Plot480.tsx'), 'ranipokhri', 'png', 'png', 'jpg', 'jpg', '<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">', '</section>')
# Fun Valley
restore_gallery(os.path.join(app_dir, 'projects/[id]/FunValley.tsx'), 'funvalley', 'png', 'png', 'png', 'png', '<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">', '</section>')
# Defence
restore_gallery(os.path.join(app_dir, 'projects/[id]/Plot181.tsx'), 'defence', 'png', 'png', 'png', 'png', '<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">', '</section>')
