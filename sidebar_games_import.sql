-- Import Sidebar Games
-- This SQL attempts to link the sidebar items to existing games by their slug.
-- If the game with the specified slug does not exist, the row will NOT be inserted to prevent broken links.

INSERT INTO sidebar_games (game_id, title, extra_label, thumbnail_url)
SELECT id, 'WHERE WINDS MEET', 'Coming Soon', '/thumbnails/where-winds-meet.png'
FROM games WHERE slug = 'where-winds-meet'
UNION ALL
SELECT id, 'ARC RAIDERS', 'Base Game', '/thumbnails/arc-raiders.png'
FROM games WHERE slug = 'arc-raiders'
UNION ALL
SELECT id, 'Marvel Rivals', 'Play Now', '/thumbnails/marvel-rivals.jpg'
FROM games WHERE slug = 'marvel-rivals'
UNION ALL
SELECT id, 'Cronos: The New Dawn', 'Coming Soon', '/thumbnails/cronos-the-new-dawn.png'
FROM games WHERE slug = 'cronos-the-new-dawn'
UNION ALL
SELECT id, 'Anno 117: Pax Romana', 'Coming Soon', '/thumbnails/anno-117-pax-romana.jpg'
FROM games WHERE slug = 'anno-117-pax-romana';

-- Fallback: If you just want to force insert the data even if the games don't exist in the database (NOT RECOMMENDED for joined queries):
-- INSERT INTO sidebar_games (game_id, title, extra_label, thumbnail_url) VALUES
-- ('where-winds-meet', 'WHERE WINDS MEET', 'Coming Soon', '/thumbnails/where-winds-meet.png'),
-- ('arc-raiders', 'ARC RAIDERS', 'Base Game', '/thumbnails/arc-raiders.png'),
-- ('marvel-rivals', 'Marvel Rivals', 'Play Now', '/thumbnails/marvel-rivals.jpg'),
-- ('cronos-the-new-dawn', 'Cronos: The New Dawn', 'Coming Soon', '/thumbnails/cronos-the-new-dawn.png'),
-- ('anno-117-pax-romana', 'Anno 117: Pax Romana', 'Coming Soon', '/thumbnails/anno-117-pax-romana.jpg');
