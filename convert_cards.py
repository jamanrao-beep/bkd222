import re

filepath = 'app/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_top_properties = False
for i, line in enumerate(lines):
    if 'OUR TOP PROPERTIES' in line:
        in_top_properties = True
    
    if in_top_properties and 'id="gallery"' in line: # or some other section marker to stop
        pass

    if in_top_properties:
        # Check for card start
        if '{/* Card' in line:
            # the next line should be the div
            j = i + 1
            if '<div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">' in lines[j]:
                lines[j] = lines[j].replace('<div ', '<Link href="/properties" ').replace('flex flex-col', 'block group flex flex-col')
                
                # Now find the matching closing div
                # We know the structure:
                # </div>
                #
                # {/* Card X */}
                # So we look forward until the next card or the end of the grid
                k = j + 1
                open_divs = 1
                while k < len(lines) and open_divs > 0:
                    open_divs += lines[k].count('<div')
                    open_divs -= lines[k].count('</div')
                    
                    if open_divs == 0:
                        lines[k] = lines[k].replace('</div>', '</Link>')
                        break
                    k += 1

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Converted cards to Links")
