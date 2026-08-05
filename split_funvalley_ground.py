import os
from PIL import Image

def process_funvalley_image():
    input_path = "public/funvalley_thumbnail.jpg"
    try:
        img = Image.open(input_path)
        w, h = img.size
        
        # Crop out the sky! Keep the bottom 70% of the image where the ground is.
        top_crop = int(h * 0.3)  # Start at 30% from the top
        ground_img = img.crop((0, top_crop, w, h))
        
        gw, gh = ground_img.size
        
        # Now split this ground image into 4 quadrants (2x2 grid)
        mid_w = gw // 2
        mid_h = gh // 2
        
        img1 = ground_img.crop((0, 0, mid_w, mid_h))
        img2 = ground_img.crop((mid_w, 0, gw, mid_h))
        img3 = ground_img.crop((0, mid_h, mid_w, gh))
        img4 = ground_img.crop((mid_w, mid_h, gw, gh))
        
        # Save as new filenames to bypass browser cache
        img1.save("public/fv_ground_1.jpg")
        img2.save("public/fv_ground_2.jpg")
        img3.save("public/fv_ground_3.jpg")
        img4.save("public/fv_ground_4.jpg")
        
        print("Successfully cropped sky and split the ground into 4 pieces.")
    except Exception as e:
        print(f"Error processing image: {e}")

process_funvalley_image()
