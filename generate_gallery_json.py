import os
import json

# Paths
PROJECT_ROOT = r"c:\Users\pykeo\my-next-app"
PUBLIC_DIR = os.path.join(PROJECT_ROOT, "public")
IMAGES_DIR = os.path.join(PUBLIC_DIR, "images-discover-game")
VIDEOS_DIR = os.path.join(PUBLIC_DIR, "video-for-discover-game")
OUTPUT_SQL = os.path.join(PROJECT_ROOT, "update_gallery.sql")

def slugify(text):
    """Convert directory name to slug"""
    return text.lower().replace('_', '-').replace(' ', '-')

def scan_media_galleries():
    """Scan images-discover-game and video-for-discover-game directories"""
    galleries = {}
    
    # Scan images
    if os.path.exists(IMAGES_DIR):
        for game_dir in os.listdir(IMAGES_DIR):
            game_path = os.path.join(IMAGES_DIR, game_dir)
            if os.path.isdir(game_path):
                slug = slugify(game_dir)
                if slug not in galleries:
                    galleries[slug] = []
                
                # Get all images in this game directory
                images = []
                for file in sorted(os.listdir(game_path)):
                    if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                        images.append(f"/images-discover-game/{game_dir}/{file}")
                
                galleries[slug].extend(images)
    
    # Scan videos and prepend to gallery (video should be first)
    if os.path.exists(VIDEOS_DIR):
        for game_dir in os.listdir(VIDEOS_DIR):
            game_path = os.path.join(VIDEOS_DIR, game_dir)
            if os.path.isdir(game_path):
                slug = slugify(game_dir)
                if slug not in galleries:
                    galleries[slug] = []
                
                # Get video file
                for file in os.listdir(game_path):
                    if file.lower().endswith(('.mp4', '.webm')):
                        # Insert video at the beginning
                        galleries[slug].insert(0, f"/video-for-discover-game/{game_dir}/{file}")
                        break  # Only take first video
    
    return galleries

def generate_sql(galleries):
    """Generate UPDATE statements for gallery_json"""
    sql_lines = []
    sql_lines.append("-- Auto-generated SQL to update gallery_json for games")
    sql_lines.append("-- Run this in phpMyAdmin to add image galleries\n")
    
    for slug, media_list in galleries.items():
        if not media_list:
            continue
        
        # Convert to JSON array string
        gallery_json = json.dumps(media_list)
        
        # Escape single quotes for SQL
        gallery_json_escaped = gallery_json.replace("'", "''")
        
        # Generate UPDATE statement
        sql_lines.append(f"UPDATE games SET gallery_json = '{gallery_json_escaped}' WHERE slug = '{slug}';")
    
    return '\n'.join(sql_lines)

# Main execution
print("Scanning media directories...")
galleries = scan_media_galleries()

print(f"Found {len(galleries)} games with galleries")

# Print summary
total_media = sum(len(media) for media in galleries.values())
print(f"Total media files: {total_media}")

print("\nGenerating SQL...")
sql_output = generate_sql(galleries)

# Write to file
with open(OUTPUT_SQL, 'w', encoding='utf-8') as f:
    f.write(sql_output)

print(f"\nSQL file generated: {OUTPUT_SQL}")
print("Import this file in phpMyAdmin to update game galleries!")

# Show some examples
print("\n--- Sample Galleries ---")
for i, (slug, media) in enumerate(list(galleries.items())[:5]):
    print(f"{slug}: {len(media)} files")
