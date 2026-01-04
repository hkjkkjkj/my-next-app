-- Cleanup script to remove old image references
-- This will reset hero_image in games table to NULL if it points to images-discover-game

UPDATE games 
SET hero_image = NULL 
WHERE hero_image LIKE '/images-discover-game/%';

-- Also clean up discover_items table
UPDATE discover_items 
SET image_url = NULL 
WHERE image_url LIKE '/images-discover-game/%';

-- Clean up other tables that might have these references
UPDATE hero_banners 
SET image_url = NULL 
WHERE image_url LIKE '/images-discover-game/%';

UPDATE sidebar_games 
SET thumbnail_url = NULL 
WHERE thumbnail_url LIKE '/images-discover-game/%';

UPDATE trending_items 
SET image_url = NULL 
WHERE image_url LIKE '/images-discover-game/%';

UPDATE top_new_releases 
SET image_url = NULL 
WHERE image_url LIKE '/images-discover-game/%';

UPDATE epic_first_run 
SET image_url = NULL 
WHERE image_url LIKE '/images-discover-game/%';

UPDATE now_on 
SET image_url = NULL 
WHERE image_url LIKE '/images-discover-game/%';
