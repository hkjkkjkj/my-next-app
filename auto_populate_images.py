import os
import json
import re
from pathlib import Path

# Configuration
PUBLIC_DIR = r"c:\Users\pykeo\my-next-app\public"
OUTPUT_SQL = r"c:\Users\pykeo\my-next-app\image_population.sql"

# Image directories to scan
IMAGE_DIRS = [
    "game-covers",
    "thumbnails",
    "new-releases-list",
    "now-on",
    "top-new-releases",
    "trending",
    "epic-form-epic-first-run"
]

def slugify(text):
    """Convert filename to slug format"""
    # Remove extension
    text = os.path.splitext(text)[0]
    # Convert to lowercase
    text = text.lower()
    # Replace spaces and special chars with hyphens
    text = re.sub(r'[^a-z0-9-]', '-', text)
    # Remove multiple hyphens
    text = re.sub(r'-+', '-', text)
    # Remove leading/trailing hyphens
    text = text.strip('-')
    return text

def scan_directories():
    """Scan all image directories and catalog files"""
    catalog = {}
    
    for dir_name in IMAGE_DIRS:
        dir_path = os.path.join(PUBLIC_DIR, dir_name)
        if not os.path.exists(dir_path):
            print(f"Warning: Directory {dir_path} not found")
            continue
            
        for root, dirs, files in os.walk(dir_path):
            for file in files:
                if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.mp4', '.webm')):
                    # Get relative path from public dir
                    rel_path = os.path.relpath(os.path.join(root, file), PUBLIC_DIR)
                    # Convert to web path
                    web_path = '/' + rel_path.replace('\\', '/')
                    
                    # Extract game identifier from filename
                    slug = slugify(file)
                    
                    if slug not in catalog:
                        catalog[slug] = {
                            'slug': slug,
                            'title': file.replace('-', ' ').replace('_', ' ').title(),
                            'images': []
                        }
                    
                    catalog[slug]['images'].append({
                        'path': web_path,
                        'folder': dir_name,
                        'type': 'video' if file.lower().endswith(('.mp4', '.webm')) else 'image'
                    })
    
    return catalog

def generate_sql_updates(catalog):
    """Generate SQL UPDATE statements for existing games"""
    sql_statements = []
    
    sql_statements.append("-- Auto-generated SQL to populate image paths")
    sql_statements.append("-- Run this in phpMyAdmin to update image references\n")
    
    for slug, data in catalog.items():
        if not data['images']:
            continue
        
        # Prioritize certain folders
        priority_order = ['game-covers', 'images', 'thumbnails', 'images-discover-game']
        primary_image = None
        
        for folder in priority_order:
            matching = [img for img in data['images'] if img['folder'] == folder and img['type'] == 'image']
            if matching:
                primary_image = matching[0]['path']
                break
        
        if not primary_image and data['images']:
            # Fallback to first image
            image_files = [img for img in data['images'] if img['type'] == 'image']
            if image_files:
                primary_image = image_files[0]['path']
        
        if primary_image:
            # Update games table
            sql_statements.append(f"UPDATE games SET hero_image = '{primary_image}' WHERE slug = '{slug}';")
            
            # Try to update discover_items if exists
            sql_statements.append(f"UPDATE discover_items SET image_url = '{primary_image}' WHERE slug = '{slug}';")
    
    return '\n'.join(sql_statements)

def generate_missing_game_inserts(catalog):
    """Generate INSERT statements for games that might not exist"""
    sql_statements = []
    
    sql_statements.append("\n-- Insert missing games (run only if games don't exist)")
    sql_statements.append("-- Check each game before running to avoid duplicates\n")
    
    for slug, data in catalog.items():
        if not data['images']:
            continue
            
        primary_image = None
        image_files = [img for img in data['images'] if img['type'] == 'image']
        if image_files:
            primary_image = image_files[0]['path']
        
        if primary_image:
            title = data['title'].replace("'", "''")
            sql_statements.append(
                f"INSERT IGNORE INTO games (id, slug, title, hero_image, developer, publisher, release_date, description) "
                f"VALUES ('{slug}', '{slug}', '{title}', '{primary_image}', 'Unknown', 'Unknown', '2024-01-01', 'Auto-generated entry');"
            )
    
    return '\n'.join(sql_statements)

# Main execution
print("Scanning directories...")
catalog = scan_directories()

print(f"Found {len(catalog)} unique game identifiers")
print(f"Total media files cataloged: {sum(len(v['images']) for v in catalog.values())}")

print("\nGenerating SQL statements...")
sql_output = generate_sql_updates(catalog)
# sql_output += "\n" + generate_missing_game_inserts(catalog)  # Disabled to prevent auto-generated titles

# Write to file
with open(OUTPUT_SQL, 'w', encoding='utf-8') as f:
    f.write(sql_output)

print(f"\nSQL file generated: {OUTPUT_SQL}")
print("Please review the SQL file and run it in phpMyAdmin to update image references.")

# Print summary
print("\n--- Summary by Folder ---")
for dir_name in IMAGE_DIRS:
    count = sum(1 for v in catalog.values() for img in v['images'] if img['folder'] == dir_name)
    if count > 0:
        print(f"{dir_name}: {count} files")
