
import json

def escape_sql(value):
    if value is None:
        return "NULL"
    return "'" + str(value).replace("'", "''") + "'"

def json_sql(value):
    if value is None:
        return "NULL"
    return "'" + json.dumps(value).replace("'", "''") + "'"

more_games = [
    {
        "id": "the-wolf-among-us-2",
        "slug": "the-wolf-among-us-2",
        "title": "The Wolf Among Us 2",
        "hero_image": "/images/the-wolf-among-us-2.png",
        "developer": "Unknown Worlds",
        "publisher": "Unknown Worlds",
        "release_date": "2022-01-01",
        "description": "The Wolf Among Us 2 description...",
        "specs_json": {"minimum": {"os": "Windows 10/11"}, "recommended": {"os": "Windows 10/11"}},
        "gallery_json": ["/video-for-discover-game/the-wolf-among-us-2/video.mp4"]
    },
    {
        "id": "arknights-endfield",
        "slug": "arknights-endfield",
        "title": "Arknights Endfield",
        "hero_image": "/images/arknights-endfield.png",
        "developer": "Unknown Worlds",
        "publisher": "Unknown Worlds",
        "release_date": "2022-01-01", 
        "description": "Arknights Endfield description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/arknights-endfield/video.mp4"]
    },
    {
        "id": "hell-is-us",
        "slug": "hell-is-us",
        "title": "Hell is Us", 
        "hero_image": "/images/hell-is-us.png",
        "developer": "Unknown Worlds", 
        "publisher": "Unknown Worlds",
        "release_date": "2022-01-01",
        "description": "Hell is Us description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/hell-is-us/video.mp4"]
    },
    {
        "id": "once-human",
        "slug": "once-human",
        "title": "Once Human",
        "hero_image": "/images/once-human.png",
        "developer": "Maddy Makes Games Inc.",
        "publisher": "Maddy Makes Games Inc.",
        "release_date": "2022-01-01",
        "description": "Once Human description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/once-human/video.mp4"]
    },
    {
        "id": "octopath-traveler",
        "slug": "octopath-traveler",
        "title": "Octopath Traveler II",
        "hero_image": "/images/octopath-traveler.png",
        "developer": "Rusty Lake",
        "publisher": "Rusty Lake",
        "release_date": "2025-12-25",
        "description": "Octopath Traveler II description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/octopath-traveler/video.mp4"]
    },
    {
        "id": "reanimal",
        "slug": "reanimal",
        "title": "Reanimal",
        "hero_image": "/images/reanimal.png",
        "developer": "Mojiken",
        "publisher": "Toge Production",
        "release_date": "2022-01-01",
        "description": "Reanimal description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/reanimal/video.mp4"]
    },
    {
        "id": "vampire-the-masquerade",
        "slug": "vampire-the-masquerade",
        "title": "Vampire: The Masquerade",
        "hero_image": "/images/vampire-the-masquerade.png",
        "developer": "Expansive Worlds",
        "publisher": "Avalanche Studios",
        "release_date": "2022-01-01",
        "description": "Vampire: The Masquerade description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/vampire-the-masquerade/video.mp4"]
    },
    {
        "id": "doom-the-dark-ages",
        "slug": "doom-the-dark-ages",
        "title": "DOOM: The Dark Ages",
        "hero_image": "/images/doom-the-dark-ages.png",
        "developer": "Mountains",
        "publisher": "Annapurna Interactive",
        "release_date": "2025-12-25",
        "description": "DOOM: The Dark Ages description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/doom-the-dark-ages/video.mp4"]
    },
     {
        "id": "clair-obscur",
        "slug": "clair-obscur",
        "title": "Clair Obscur: Expedition 33",
        "hero_image": "/images/clair-obscur.png",
        "developer": "BlueTwelve Studio",
        "publisher": "Annapurna Interactive",
        "release_date": "2022-01-01",
        "description": "Clair Obscur description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/clair-obscur/video.mp4"]
    },
    {
        "id": "kingdom-come-deliverance-ii",
        "slug": "kingdom-come-deliverance-ii",
        "title": "Kingdom Come: Deliverance II",
        "hero_image": "/now-on/kingdom-come-deliverance-ii.png", # Correction from lib/data.ts
        "developer": "The Fun Pimps",
        "publisher": "The Fun Pimps",
        "release_date": "2022-01-01",
        "description": "Kingdom Come: Deliverance II description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/kingdom-come-deliverance-ii/video.mp4"]
    },
    {
        "id": "persona-5-royal",
        "slug": "persona-5-royal",
        "title": "Persona 5 Royal",
        "hero_image": "/now-on/persona-5-royal.png",
        "developer": "Atlus",
        "publisher": "Sega",
        "release_date": "2022-01-01",
        "description": "Persona 5 Royal description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/persona-5-royal/video.mp4"]
    },
    {
        "id": "baldurs-gate-3",
        "slug": "baldurs-gate-3",
        "title": "Baldur's Gate 3",
        "hero_image": "/now-on/baldurs-gate-3.png",
        "developer": "Larian Studios",
        "publisher": "CD Projekt Red",
        "release_date": "2022-01-01",
        "description": "Baldur's Gate 3 description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/baldurs-gate-3/video.mp4"]
    },
    {
        "id": "dead-island-2",
        "slug": "dead-island-2",
        "title": "Dead Island 2",
        "hero_image": "/now-on/dead-island-2.png",
        "developer": "Larian Studios",
        "publisher": "CD Projekt Red",
        "release_date": "2022-01-01", 
        "description": "Dead Island 2 description...",
        "specs_json": {},
        "gallery_json": ["/video-for-discover-game/dead-island-2/video.mp4"]
    },
    {
         "id": "hades-ii",
         "slug": "hades-ii",
         "title": "Hades II",
         "hero_image": "/now-on/hades-ii.png",
         "developer": "Larian Studios",
         "publisher": "CD Projekt Red",
         "release_date": "2022-01-01",
         "description": "Hades II description...",
         "specs_json": {},
         "gallery_json": ["/video-for-discover-game/hades-ii/video.mp4"]
    },
    {
         "id": "final-fantasy-xvi",
         "slug": "final-fantasy-xvi",
         "title": "Final Fantasy XVI",
         "hero_image": "/now-on/final-fantasy-xvi.png",
         "developer": "Square Enix",
         "publisher": "Square Enix",
         "release_date": "2022-01-01",
         "description": "Final Fantasy XVI description...",
         "specs_json": {},
         "gallery_json": ["/video-for-discover-game/final-fantasy-xvi/video.mp4"]
    },
    {
         "id": "the-hundred-line-last-defense-academy",
         "slug": "the-hundred-line-last-defense-academy",
         "title": "The Hundred: Line Last Defense Academy",
         "hero_image": "/now-on/the-hundred-line-last-defense-academy.png",
         "developer": "Square Enix",
         "publisher": "Square Enix",
         "release_date": "2022-01-01",
         "description": "The Hundred description...",
          "specs_json": {},
         "gallery_json": ["/video-for-discover-game/the-hundred-line-last-defense-academy/video.mp4"]
    },
     {
         "id": "monster-hunter-wilds",
         "slug": "monster-hunter-wilds",
         "title": "Monster Hunter: Wilds",
         "hero_image": "/now-on/monster-hunter-wilds.png",
         "developer": "Square Enix",
         "publisher": "Square Enix",
         "release_date": "2022-01-01",
         "description": "Monster Hunter: Wilds description...",
         "specs_json": {},
         "gallery_json": ["/video-for-discover-game/monster-hunter-wilds/video.mp4"]
    },
     {
         "id": "red-dead-redemption-2",
         "slug": "red-dead-redemption-2",
         "title": "Red Dead Redemption 2",
         "hero_image": "/now-on/red-dead-redemption-2.png",
         "developer": "Rockstar Games",
         "publisher": "Rockstar Games",
         "release_date": "2022-01-01",
         "description": "Red Dead Redemption 2 description...",
         "specs_json": {},
         "gallery_json": ["/video-for-discover-game/red-dead-redemption-2/video.mp4"]
    },
      {
         "id": "persona-3-reloaded",
         "slug": "persona-3-reloaded",
         "title": "Persona 3 Reloaded",
         "hero_image": "/now-on/persona-3-reloaded.png",
         "developer": "Rockstar Games",
         "publisher": "Rockstar Games",
         "release_date": "2022-01-01",
         "description": "Persona 3 Reloaded description...",
         "specs_json": {},
         "gallery_json": ["/video-for-discover-game/persona-3-reloaded/video.mp4"]
    },
     {
         "id": "back-4-blood",
         "slug": "back-4-blood",
         "title": "Back 4 Blood: Standard Edition",
         "hero_image": "/images/back-4-blood.jpg",
         "developer": "Unknown Worlds",
         "publisher": "Unknown Worlds",
         "release_date": "2022-01-01",
         "description": "Back 4 Blood description...",
         "specs_json": {},
         "gallery_json": ["/video-for-discover-game/back-4-blood/video.mp4"]
    },
    {
         "id": "batman-arkham-knight",
         "slug": "batman-arkham-knight",
         "title": "Batman Arkham Knight",
         "hero_image": "/images/batman-arkham-knight.png",
         "developer": "",
         "publisher": "",
         "release_date": "2022-01-01",
         "description": "Batman Arkham Knight description...",
         "specs_json": {},
         "gallery_json": ["/video-for-discover-game/batman-arkham-knight/video.mp4"]
    },
     {
         "id": "felix-the-reaper",
         "slug": "felix-the-reaper",
         "title": "Felix The Reaper",
         "hero_image": "/images/felix-the-reaper.png",
         "developer": "Ubisoft",
         "publisher": "Ubisoft",
         "release_date": "2022-01-01",
         "description": "Felix The Reaper description...",
         "specs_json": {},
         "gallery_json": ["/video-for-discover-game/felix-the-reaper/video.mp4"]
    }
]

sql_output = ""
# Insert more games
values_list = []
for game in more_games:
    values = f"({escape_sql(game['id'])}, {escape_sql(game['slug'])}, {escape_sql(game['title'])}, {escape_sql(game.get('hero_image'))}, {escape_sql(game.get('developer'))}, {escape_sql(game.get('publisher'))}, {escape_sql(game.get('release_date'))}, {escape_sql(game.get('description'))}, {json_sql(game.get('specs_json'))}, {json_sql(game.get('gallery_json'))}, NULL, NULL)"
    values_list.append(values)

sql_output += "INSERT INTO `games` (`id`, `slug`, `title`, `hero_image`, `developer`, `publisher`, `release_date`, `description`, `specs_json`, `gallery_json`, `login_accounts`, `languages_json`) VALUES\n"
sql_output += ",\n".join(values_list) + ";\n"

# ----------------------------
# HERO BANNERS
# ----------------------------
sql_output += """
-- Table: hero_banners
DROP TABLE IF EXISTS `hero_banners`;
CREATE TABLE `hero_banners` (
  `id` varchar(100) NOT NULL,
  `game_id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `date_text` varchar(50) DEFAULT NULL,
  `button_text` varchar(50) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  `show_wishlist` tinyint(1) DEFAULT '0',
  `show_preview` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_hero_games` (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `hero_banners` (`id`, `game_id`, `title`, `slug`, `description`, `date_text`, `button_text`, `image_url`, `logo_url`, `show_wishlist`, `show_preview`) VALUES
('hb-1', 'where-winds-meet', 'WHERE WINDS MEET', 'where-winds-meet-main', 'Write your own Wuxia legend...', 'OUT NOW', 'Save Now', '/images/where-winds-meet.png', '/logos/where-winds-meet.png', 1, 0),
('hb-2', 'arc-raiders', 'ARC RAIDERS', 'arc-raiders', 'THE SURFACE IS CALLING...', 'AVAILABLE NOW', 'Buy Now', '/images/arc-raiders.jpg', '/logos/arc-raiders.png', 0, 1),
('hb-3', 'marvel-rivals', 'MARVEL RIVALS', 'marvel-rivals', 'THE SURFACE IS CALLING...', 'AVAILABLE NOW', 'Buy Now', '/images/marvel-rivals.jpg', '/logos/marvel-rivals.jpg', 0, 1),
('hb-4', 'cronos-the-new-dawn', 'CRONOS THE NEW DAWN', 'cronos-the-new-dawn', 'A whole new breed of survival horror...', 'AVAILABLE NOW', 'Buy Now', '/images/cronos-the-new-dawn.jpg', '/logos/cronos-the-new-dawn.png', 0, 1),
('hb-5', 'anno-117-pax-romana', 'ANNO 117: PAX ROMANA', 'anno-117-pax-romana', 'The world is on the brink...', 'AVAILABLE NOW', 'Buy Now', '/images/anno-117-pax-romana.jpg', '/logos/anno-117-pax-romana.png', 0, 1);
"""

# ----------------------------
# SIDEBAR GAMES
# ----------------------------
sql_output += """
-- Table: sidebar_games
DROP TABLE IF EXISTS `sidebar_games`;
CREATE TABLE `sidebar_games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `game_id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `extra_label` varchar(50) DEFAULT NULL,
  `thumbnail_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sidebar_games_fk` (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `sidebar_games` (`game_id`, `title`, `extra_label`, `thumbnail_url`) VALUES
('where-winds-meet', 'WHERE WINDS MEET', 'Coming Soon', '/thumbnails/where-winds-meet.png'),
('arc-raiders', 'ARC RAIDERS', 'Base Game', '/thumbnails/arc-raiders.png'),
('marvel-rivals', 'Marvel Rivals', 'Play Now', '/thumbnails/marvel-rivals.jpg'),
('cronos-the-new-dawn', 'Cronos: The New Dawn', 'Coming Soon', '/thumbnails/cronos-the-new-dawn.png'),
('anno-117-pax-romana', 'Anno 117: Pax Romana', 'Coming Soon', '/thumbnails/anno-117-pax-romana.jpg');
"""

# ----------------------------
# DISCOVER ITEMS
# ----------------------------
sql_output += """
-- Table: discover_items
DROP TABLE IF EXISTS `discover_items`;
CREATE TABLE `discover_items` (
  `id` varchar(100) NOT NULL,
  `game_id` varchar(100) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `original_price` varchar(50) DEFAULT NULL,
  `discount` varchar(20) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `discover_items` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `original_price`, `discount`, `logo_url`) VALUES
('mouse-p-i-for-hire', 'mouse-p-i-for-hire', 'mouse-p-i-for-hire', 'Mouse: P.I. for Hire', 'Join private investigator Jack Pepper...', '/game-covers/mouse-p-i-for-hire.png', 'Base Game', '₫261,000', '₫361,000', '23%', '/logos/mouse-p-i-for-hire.png'),
('arc-raiders', 'arc-raiders', 'arc-raiders', 'ARC RAIDERS', 'ARC Raiders is an action-packed...', '/game-covers/arc-raiders.png', 'Base Game', '₫596,755', '₫745,944', '-20%', '/logos/arc-raiders.png'),
('where-winds-meet', 'where-winds-meet', 'where-winds-meet', 'WHERE WINDS MEET', 'Write your own Wuxia legend...', '/game-covers/where-winds-meet.png', 'Base Game', 'Free', '', '', '/logos/where-winds-meet.png'),
('jurassic-world-3', 'jurassic-world-3', 'jurassic-world-3', 'Jurassic World: Evolution 3', 'Jurassic World: Evolution 3...', '/game-covers/jurassic-world-3.jpg', 'Base Game', '₫784,000', '₫980,000', '-20%', '/logos/jurassic-world-3.png'),
('the-midnight-walkers', 'the-midnight-walkers', 'the-midnight-walkers', 'The Midnight Walkers', 'The Midnight Walkers...', '/game-covers/the-midnight-walkers.png', 'Base Game', 'Coming Soon', '', '', '/logos/the-midnight-walkers.png'),
('cyberpunk', 'cyberpunk', 'cyberpunk-2077', 'Cyberpunk 2077', 'Cyberpunk 2077...', '/game-covers/cyberpunk-2077.png', 'Base Game', '₫339,850', '₫971,000', '-65%', '/logos/cyberpunk-2077.png'),
('black-ops-7', 'black-ops-7', 'black-ops-7', 'Black Ops 7', 'Black Ops 7...', '/game-covers/black-ops-7.png', 'Base Game', '₫979,650', '₫1,399,500', '-30%', '/logos/black-ops-7.png'),
('dying-light-the-beast', 'dying-light-the-beast', 'dying-light-the-beast', 'Dying Light: The Beast', 'Dying Light: The Beast...', '/game-covers/dying-light-the-beast.png', 'Base Game', '₫792,000', '₫990,000', '-20%', '/logos/dying-light-the-beast.png'),
('resident-evil-requiem', 'resident-evil-requiem', 'resident-evil-requiem', 'Resident Evil Requiem', 'Resident Evil Requiem...', '/game-covers/resident-evil-requiem.jpg', 'Base Game', 'Coming soon', '', '', '/logos/resident-evil-requiem.png'),
('subnautica-2', 'subnautica-2', 'subnautica-2', 'Subnautica 2', 'Subnautica 2...', '/game-covers/subnautica-2.png', 'Base Game', 'Coming soon', '', '', '/logos/subnautica-2.png');
"""

# Append to file
with open("c:/Users/pykeo/my-next-app/game_data.sql", "a", encoding="utf-8") as f:
    f.write(sql_output)

print("game_data.sql part 2 append successful.")
