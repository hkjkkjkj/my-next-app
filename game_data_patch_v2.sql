
-- game_data_patch_v2.sql
-- Run this file to insert the REMAINING missing games into the 'games' table.
-- This fixes 404 errors for Doom, Hades II, Subnautica 2, etc.

USE `game_data`;

INSERT INTO `games` (`id`, `slug`, `title`, `hero_image`, `developer`, `publisher`, `release_date`, `description`, `specs_json`, `gallery_json`, `login_accounts`, `languages_json`) VALUES

-- Missing from New Releases
('doom-the-dark-ages', 'doom-the-dark-ages', 'DOOM: The Dark Ages', '/new-releases-list/doom.png', 'id Software', 'Bethesda', '2025-01-01', 'Description for DOOM: The Dark Ages...', '{}', '["/new-releases-list/doom.png"]', NULL, NULL),

-- Missing from Top Rated
('hades-ii', 'hades-ii', 'Hades II', '/new-releases-list/hades2.jpg', 'Supergiant Games', 'Supergiant Games', '2025-01-01', 'Description for Hades II...', '{}', '["/new-releases-list/hades2.jpg"]', NULL, NULL),
('clair-obscur', 'clair-obscur', 'Clair Obscur: Expedition 33', '/new-releases-list/clair.png', 'Sandfall Interactive', 'Kepler Interactive', '2025-01-01', 'Description for Clair Obscur...', '{}', '["/new-releases-list/clair.png"]', NULL, NULL),

-- Missing from Top Upcoming
('subnautica-2', 'subnautica-2', 'Subnautica 2', '/thumbnails/subnautica2.png', 'Unknown Worlds', 'Unknown Worlds', '2025-11-26', 'Description for Subnautica 2...', '{}', '["/thumbnails/subnautica2.png"]', NULL, NULL),
('resident-evil-requiem', 'resident-evil-requiem', 'Resident Evil Requiem', '/thumbnails/re.jpg', 'Capcom', 'Capcom', '2026-02-27', 'Description for Resident Evil Requiem...', '{}', '["/thumbnails/re.jpg"]', NULL, NULL),

-- Missing from Top Sellers (Just in case, though usually present)
('arc-raiders', 'arc-raiders', 'ARC RAIDERS', '/thumbnails/arc-raiders.png', 'Embark Studios', 'Embark Studios', '2025-01-01', 'Description for ARC RAIDERS...', '{}', '["/thumbnails/arc-raiders.png"]', NULL, NULL),
('battlefield-6', 'battlefield-6', 'Battlefield 6', '/thumbnails/battlefield.png', 'DICE', 'Electronic Arts', '2025-01-01', 'Description for Battlefield 6...', '{}', '["/thumbnails/battlefield.png"]', NULL, NULL),
('rematch', 'rematch', 'REMATCH', '/thumbnails/rematch.png', 'Unknown', 'Unknown', '2025-01-01', 'Description for REMATCH...', '{}', '["/thumbnails/rematch.png"]', NULL, NULL)

ON DUPLICATE KEY UPDATE title=VALUES(title);
