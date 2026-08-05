import os
from PIL import Image

def split_collage_4(input_path, output_prefix):
    try:
        img = Image.open(input_path)
        w, h = img.size
        
        mid_w = w // 2
        mid_h = h // 2
        
        img1 = img.crop((0, 0, mid_w, mid_h))
        img2 = img.crop((mid_w, 0, w, mid_h))
        img3 = img.crop((0, mid_h, mid_w, h))
        img4 = img.crop((mid_w, mid_h, w, h))
        
        img1.save(f"public/{output_prefix}_1.jpg")
        img2.save(f"public/{output_prefix}_2.jpg")
        img3.save(f"public/{output_prefix}_3.jpg")
        img4.save(f"public/{output_prefix}_4.jpg")
        
        print(f"Successfully split {input_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

split_collage_4("public/funvalley_gallery.jpg", "funvalley_gal")
