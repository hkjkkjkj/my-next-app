
# generate_sql_part6.py

sql_output = ""

sql_output += """
-- Inserting missing games from New Releases, Top Rated, etc.
-- These games were in simple lists but not main lists, so they were missed in games table.

INSERT INTO `games` (`id`, `slug`, `title`, `hero_image`, `developer`, `publisher`, `release_date`, `description`, `specs_json`, `gallery_json`, `login_accounts`, `languages_json`) VALUES
-- New Releases
('inazuma-eleven-victory-road', 'inazuma-eleven-victory-road', 'INAZUMA ELEVEN: Victory Road', '/new-releases-list/inazuma.jpg', 'Level-5', 'Level-5', '2025-01-01', 'Description for INAZUMA ELEVEN: Victory Road...', '{}', '["/new-releases-list/inazuma.jpg"]', NULL, NULL),
('constance', 'constance', 'Constance', '/new-releases-list/constance.png', 'Billete', 'Billete', '2025-01-01', 'Description for Constance...', '{}', '["/new-releases-list/constance.png"]', NULL, NULL),
('dispatch', 'dispatch', 'Dispatch', '/new-releases-list/dispatch.jpg', 'Unknown', 'Unknown', '2025-01-01', 'Description for Dispatch...', '{}', '["/new-releases-list/dispatch.jpg"]', NULL, NULL),
('mouthwashing', 'mouthwashing', 'Mouthwashing', '/new-releases-list/mouthwashing.png', 'Wrong Organ', 'Critical Reflex', '2025-01-01', 'Description for Mouthwashing...', '{}', '["/new-releases-list/mouthwashing.png"]', NULL, NULL),

-- Top Rated (some might duplicate but INSERT IGNORE or checking slug is manual here, assuming uniqueness based on observed data)
('kingdom-hearts-iii', 'kingdom-hearts-iii', 'KINGDOM HEARTS III + Re Mind', '/new-releases-list/kh3.png', 'Square Enix', 'Square Enix', '2025-01-01', 'Description for KINGDOM HEARTS III...', '{}', '["/new-releases-list/kh3.png"]', NULL, NULL),
('goat-simulator-3', 'goat-simulator-3', 'Goat Simulator 3', '/new-releases-list/goat3.png', 'Coffee Stain North', 'Coffee Stain Publishing', '2025-01-01', 'Description for Goat Simulator 3...', '{}', '["/new-releases-list/goat3.png"]', NULL, NULL),
('titanfall-2', 'titanfall-2', 'Titanfall 2', '/new-releases-list/titanfall2.png', 'Respawn Entertainment', 'Electronic Arts', '2025-01-01', 'Description for Titanfall 2...', '{}', '["/new-releases-list/titanfall2.png"]', NULL, NULL),

-- Top Demos
('project-motor-racing', 'project-motor-racing', 'Project Motor Racing', '/new-releases-list/motor.png', 'Unknown', 'Unknown', '2025-11-25', 'Description for Project Motor Racing...', '{}', '["/new-releases-list/motor.png"]', NULL, NULL),
('lost-ember', 'lost-ember', 'Lost Ember: Rekindled', '/new-releases-list/lostember.png', 'Mooneye Studios', 'Mooneye Studios', '2025-11-27', 'Description for Lost Ember...', '{}', '["/new-releases-list/lostember.png"]', NULL, NULL),
('pubg-blindspot', 'pubg-blindspot', 'PUBG: BLINDSPOT', '/new-releases-list/blur.png', 'KRAFTON', 'KRAFTON', '2025-11-01', 'Description for PUBG: BLINDSPOT...', '{}', '["/new-releases-list/blur.png"]', NULL, NULL),

-- Most Played
('fortnite', 'fortnite', 'Fortnite', '/thumbnails/fortnite.png', 'Epic Games', 'Epic Games', '2017-07-21', 'Fortnite description...', '{}', '["/thumbnails/fortnite.png"]', NULL, NULL),
('rocket-league', 'rocket-league', 'Rocket League', '/thumbnails/rocket-league.png', 'Psyonix', 'Psyonix', '2015-07-07', 'Rocket League description...', '{}', '["/thumbnails/rocket-league.png"]', NULL, NULL),
('gta-v', 'gta-v', 'Grand Theft Auto V', '/thumbnails/gta5.png', 'Rockstar North', 'Rockstar Games', '2013-09-17', 'GTA V description...', '{}', '["/thumbnails/gta5.png"]', NULL, NULL),
('genshin-impact', 'genshin-impact', 'Genshin Impact', '/thumbnails/genshin.png', 'miHoYo', 'miHoYo', '2020-09-28', 'Genshin Impact description...', '{}', '["/thumbnails/genshin.png"]', NULL, NULL),
('crosshair-x', 'crosshair-x', 'Crosshair X', '/thumbnails/crosshair.png', 'CenterPoint Gaming', 'CenterPoint Gaming', '2020-01-01', 'Crosshair X description...', '{}', '["/thumbnails/crosshair.png"]', NULL, NULL),

-- Top Upcoming
('hogwarts-legacy', 'hogwarts-legacy', 'Hogwarts Legacy', '/thumbnails/hogwarts-legacy.jpg', 'Avalanche Software', 'Warner Bros. Games', '2023-02-10', 'Hogwarts Legacy description...', '{}', '["/thumbnails/hogwarts-legacy.jpg"]', NULL, NULL),
('split-fiction', 'split-fiction', 'Split Fiction', '/thumbnails/split-fiction.png', 'Unknown', 'Unknown', '2025-01-01', 'Split Fiction description...', '{}', '["/thumbnails/split-fiction.png"]', NULL, NULL),
('jurassic-park-survival', 'jurassic-park-survival', 'Jurassic Park: Survival', '/thumbnails/jurassic.png', 'Saber Interactive', 'Saber Interactive', '2025-01-01', 'Jurassic Park: Survival description...', '{}', '["/thumbnails/jurassic.png"]', NULL, NULL),
('battlefield-6', 'battlefield-6', 'Battlefield 6', '/thumbnails/battlefield.png', 'DICE', 'Electronic Arts', '2025-01-01', 'Battlefield 6 description...', '{}', '["/thumbnails/battlefield.png"]', NULL, NULL),
('rematch', 'rematch', 'REMATCH', '/thumbnails/rematch.png', 'Unknown', 'Unknown', '2025-01-01', 'REMATCH description...', '{}', '["/thumbnails/rematch.png"]', NULL, NULL)
ON DUPLICATE KEY UPDATE title=VALUES(title);
"""

# Append to file
with open("c:/Users/pykeo/my-next-app/game_data.sql", "a", encoding="utf-8") as f:
    f.write(sql_output)

print("game_data.sql part 6 append successful.")
