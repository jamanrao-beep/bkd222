import os
import re

old_map_regex = r'\{\[\s*"[^"]*",\s*"[^"]*",\s*"[^"]*",\s*"[^"]*"\s*\]\.map\(\(img,\s*i\)\s*=>\s*\(\s*<Link href=.*?key=\{i\}.*?</Link>\s*\)\)\}'
replacement = """{[
                "/Proj1.png",
                "/Proj2.png",
                "/Proj3.png",
                "/Proj4.png"
              ].map((img, i) => (
                <Link href={`/projects/${i+1}`} key={i} className="block relative h-20 rounded overflow-hidden group">
                  <Image src={img} alt="Project" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform" />
                </Link>
              ))}"""

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            
            content = re.sub(old_map_regex, replacement, content, flags=re.DOTALL)
            
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")
