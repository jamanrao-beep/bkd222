from PIL import Image
import os

def crop_left_white_strip(image_path):
    if not os.path.exists(image_path):
        print(f"File not found: {image_path}")
        return
        
    img = Image.open(image_path).convert("RGB")
    width, height = img.size
    
    # We scan columns from the left
    # Let's consider a pixel "white" if RGB > 240
    crop_x = 0
    for x in range(width):
        white_pixels = 0
        for y in range(height):
            r, g, b = img.getpixel((x, y))
            if r > 240 and g > 240 and b > 240:
                white_pixels += 1
        
        # If this column has less than 90% white pixels, it's the start of the image content
        if white_pixels < height * 0.90:
            crop_x = x
            break
            
    if crop_x > 0:
        # Give a 2-pixel buffer so we don't clip the image itself, if possible
        crop_start = max(0, crop_x - 2)
        cropped_img = img.crop((crop_start, 0, width, height))
        cropped_img.save(image_path)
        print(f"Cropped {crop_start} pixels from the left of {image_path}")
    else:
        print(f"No white strip found on the left of {image_path}")

for i in range(1, 5):
    try:
        crop_left_white_strip(f"public/Proj{i}.png")
    except Exception as e:
        print(f"Error processing Proj{i}.png: {e}")
