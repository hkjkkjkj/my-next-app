-- Delete games with title ending in file extensions (.jpg, .png, .jpeg, .webp)
-- These were auto-generated from filenames and don't have proper titles

DELETE FROM games 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

-- Also clean up discover_items that might reference these games
DELETE FROM discover_items 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

-- Clean up other tables
DELETE FROM hero_banners 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

DELETE FROM sidebar_games 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

DELETE FROM trending_items 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

DELETE FROM top_new_releases 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

DELETE FROM epic_first_run 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

DELETE FROM now_on 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

DELETE FROM new_releases 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';

DELETE FROM coming_soon 
WHERE title REGEXP '\\.(jpg|jpeg|png|webp|Jpg|Jpeg|Png|Webp)$';
