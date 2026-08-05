from PIL import Image
import sys

img_path = r"C:\Users\amanr\.gemini\antigravity-ide\brain\a15033fd-cba3-4663-9ace-6709c7d3e82e\media__1785937130952.jpg"
try:
    img = Image.open(img_path)
    width, height = img.size
    
    # Split into 4 quadrants
    mid_w, mid_h = width // 2, height // 2
    
    # We might want to crop a little bit of the white border if there is any, but let's just do exact quadrants.
    top_left = img.crop((0, 0, mid_w, mid_h))
    top_right = img.crop((mid_w, 0, width, mid_h))
    bottom_left = img.crop((0, mid_h, mid_w, height))
    bottom_right = img.crop((mid_w, mid_h, width, height))
    
    top_left.save("public/thano_gal_1.jpg")
    top_right.save("public/thano_gal_2.jpg")
    bottom_left.save("public/thano_gal_3.jpg")
    bottom_right.save("public/thano_gal_4.jpg")
    
    print("Collage split successfully!")
except Exception as e:
    print(f"Error: {e}")
