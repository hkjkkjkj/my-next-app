
import os
import re

# Paths to check
PROJECT_ROOT = r"c:\Users\pykeo\my-next-app"
PUBLIC_DIR = os.path.join(PROJECT_ROOT, "public")

# Files containing game data with image paths
DATA_FILES = [
    "generate_sql_part1.py",
    "generate_sql_part2.py",
    "generate_sql_part4.py" # Simple lists often have paths too
]

# Regex to find image paths (starts with /images, /game-covers, /thumbnails, /now-on)
# Captures strings like "/images/foo.png"
IMAGE_PATTERN = r"['\"](/((images|game-covers|thumbnails|now-on|logos|new-releases-list)/[^'\"]+\.(png|jpg|jpeg|webp)))['\"]"

missing_files = set()
found_files = set()

print(f"Scanning for missing images in {PROJECT_ROOT}...")

for filename in DATA_FILES:
    file_path = os.path.join(PROJECT_ROOT, filename)
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        matches = re.findall(IMAGE_PATTERN, content)
        
        for match in matches:
            # match[0] is the full path e.g., /images/foo.png
            relative_path = match[0]
            # Convert to local path (remove leading /)
            local_path = relative_path.lstrip('/').replace('/', os.sep)
            full_path = os.path.join(PUBLIC_DIR, local_path)
            
            if os.path.exists(full_path):
                found_files.add(relative_path)
            else:
                missing_files.add(relative_path)

print(f"\n--- Summary ---")
print(f"Found {len(found_files)} existing images.")
print(f"Found {len(missing_files)} MISSING images.\n")

if missing_files:
    print("The following images are referenced in the database but MISSING from disk:")
    for path in sorted(list(missing_files)):
        print(f" - {path}")
else:
    print("All referenced images exist!")
