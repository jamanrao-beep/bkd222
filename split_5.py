import os
from PIL import Image

def split_collage_5(input_path, output_prefix):
    try:
        img = Image.open(input_path)
        w, h = img.size
        
        # We assume top half and bottom half
        mid_h = h // 2
        
        # Top half: 2 images
        top_w = w // 2
        img1 = img.crop((0, 0, top_w, mid_h))
        img2 = img.crop((top_w, 0, w, mid_h))
        
        # Bottom half: 3 images
        bot_w = w // 3
        img3 = img.crop((0, mid_h, bot_w, h))
        img4 = img.crop((bot_w, mid_h, 2*bot_w, h))
        img5 = img.crop((2*bot_w, mid_h, w, h))
        
        img1.save(f"public/{output_prefix}_1.jpg")
        img2.save(f"public/{output_prefix}_2.jpg")
        img3.save(f"public/{output_prefix}_3.jpg")
        img4.save(f"public/{output_prefix}_4.jpg")
        img5.save(f"public/{output_prefix}_main.jpg")
        
        print(f"Successfully split {input_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

split_collage_5("public/defence_colony_gallery.jpg", "defence_colony_gal")
split_collage_5("public/ranipokhri_gallery.jpg", "ranipokhri_gal")
