import re
import os
import json

# Read page.tsx to extract the articles array
with open("app/blogs/page.tsx", "r", encoding="utf-8") as f:
    page_content = f.read()

# Extract articles
# Look for const articles = [ ... ];
start_idx = page_content.find("const articles = [")
end_idx = page_content.find("];", start_idx) + 1
articles_block = page_content[start_idx:end_idx]

# Parse articles block
articles = []
for block in re.split(r'\}\s*,\s*\{', articles_block):
    title_match = re.search(r'title:\s*"([^"]+)"', block)
    excerpt_match = re.search(r'excerpt:\s*"([^"]+)"', block)
    date_match = re.search(r'date:\s*"([^"]+)"', block)
    img_match = re.search(r'img:\s*"([^"]+)"', block)
    if title_match and excerpt_match and date_match and img_match:
        articles.append({
            "title": title_match.group(1),
            "excerpt": excerpt_match.group(1),
            "date": date_match.group(1),
            "img": img_match.group(1)
        })

# Read Darago_Blog_Topics.txt to get the paragraphs
with open("assets/Darago_Blog_Topics.txt", "r", encoding="utf-8") as f:
    topics_content = f.read()

# Split by the numbering pattern "1. ", "2. ", etc.
import re
sections = re.split(r'\n(?=\d+\.\s)', topics_content)

blog_contents = []
for section in sections:
    # First line is title, rest is content
    lines = section.strip().split('\n')
    if len(lines) > 1 and re.match(r'^\d+\.\s', lines[0]):
        title = re.sub(r'^\d+\.\s*', '', lines[0]).strip()
        body = "\n".join(lines[1:]).strip()
        blog_contents.append({"title": title, "body": body})

# Combine
final_articles = []
for i, art in enumerate(articles):
    # Find matching body by looking at index since they are in order, 
    # but let's double check title
    content = ""
    if i < len(blog_contents):
        content = blog_contents[i]["body"]
    
    final_articles.append({
        "id": str(i + 1),
        "title": art["title"],
        "excerpt": art["excerpt"],
        "date": art["date"],
        "img": art["img"],
        "content": content
    })

# Write to app/blogs/data.ts
ts_content = "export const articles = " + json.dumps(final_articles, indent=2) + ";\n"
with open("app/blogs/data.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Generated {len(final_articles)} articles in app/blogs/data.ts")
