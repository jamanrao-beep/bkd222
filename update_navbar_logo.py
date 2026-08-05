import os
import re

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
            
            # Use regex to find the logo in the header and replace its height and width class.
            # Usually it's width={220} height={70} className="h-12 w-auto object-contain"
            # It could also have priority
            
            content = re.sub(
                r'(<Image src="/BKD_Logo\.png" alt="Badri Kedar Developers" width=)\{220\} (height=)\{70\} (className=")h-12( w-auto object-contain")',
                r'\g<1>{440} \g<2>{140} \g<3>h-24\g<4>',
                content
            )
            
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")
