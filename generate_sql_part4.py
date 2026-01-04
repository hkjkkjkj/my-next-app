
# generate_sql_part4.py

sql_output = ""

# -----------------
# HELPERS
# -----------------
def slugify(title):
    return title.lower().replace(" ", "-").replace(":", "").replace("'", "").replace("®", "").replace("™", "").replace("+", "").replace("...", "")

# -----------------
# COMING SOON
# -----------------
sql_output += """
-- Table: coming_soon
DROP TABLE IF EXISTS `coming_soon`;
CREATE TABLE `coming_soon` (
  `id` varchar(100) NOT NULL,
  `game_id` varchar(100) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `availability` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `coming_soon` (`id`, `game_id`, `slug`, `title`, `image_url`, `availability`, `price`) VALUES
('cs-1', 'project-motor-racing', 'project-motor-racing', 'Project Motor Racing', '/new-releases-list/motor.png', 'Available 11/25/25', '₫860,000'),
('cs-2', 'subnautica-2', 'subnautica-2', 'Subnautica 2', '/new-releases-list/subnautica2.png', 'Available 11/26/25', NULL),
('cs-3', 'slay-the-spire-2', 'slay-the-spire-2', 'Slay the Spire 2', '/new-releases-list/slay.jpg', 'Available 11/27/25', NULL),
('cs-4', 'lost-ember', 'lost-ember', 'Lost Ember: Rekindled Edition', '/new-releases-list/lostember.png', 'Available 11/27/25', NULL),
('cs-5', 'pubg-blindspot', 'pubg-blindspot', 'PUBG: BLINDSPOT', '/new-releases-list/blur.png', 'Available Nov 2025', NULL);
"""

# -----------------
# DEAL ITEMS
# -----------------
sql_output += """
-- Table: deal_items
DROP TABLE IF EXISTS `deal_items`;
CREATE TABLE `deal_items` (
  `id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `tag` varchar(50) DEFAULT NULL,
  `type` enum('game','promo') DEFAULT 'game',
  `discount` varchar(20) DEFAULT NULL,
  `original_price` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `button_text` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `deal_items` (`id`, `title`, `slug`, `image_url`, `tag`, `type`, `discount`, `original_price`, `price`, `button_text`) VALUES
('holiday-sale', 'Mega Holiday Sale', NULL, '/images/where-winds-meet.png', 'Event', 'promo', NULL, NULL, NULL, 'Browse All'),
('cyberpunk-deal', 'Cyberpunk 2077', 'cyberpunk-2077', '/images/anno-117-pax-romana.jpg', '-50%', 'game', '-50%', '₫899,000', '₫449,500', NULL),
('black-ops-deal', 'Call of Duty®: Black Ops 7', 'black-ops-7', '/images/cronos-the-new-dawn.jpg', NULL, 'game', '-20%', '₫1,999,000', '₫1,599,200', NULL);
"""

# -----------------
# NEW RELEASES (List)
# -----------------
sql_output += """
-- Table: new_releases
DROP TABLE IF EXISTS `new_releases`;
CREATE TABLE `new_releases` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `badge` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `discount` varchar(50) DEFAULT NULL,
  `original_price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `new_releases` (`id`, `title`, `slug`, `image`, `badge`, `price`) VALUES
(1, 'INAZUMA ELEVEN: Victory Road', 'inazuma-eleven-victory-road', '/new-releases-list/inazuma.jpg', 'Now On Epic', '₫1,200,000'),
(2, 'Constance', 'constance', '/new-releases-list/constance.png', 'Now On Epic', 'Free'),
(3, 'Dispatch', 'dispatch', '/new-releases-list/dispatch.jpg', NULL, '₫300,000'),
(4, 'DOOM: The Dark Ages', 'doom-the-dark-ages', '/new-releases-list/doom.png', 'Now On Epic', '₫1,200,000'),
(5, 'Mouthwashing', 'mouthwashing', '/new-releases-list/mouthwashing.png', 'Now On Epic', 'Free');
"""

# -----------------
# TOP RATED
# -----------------
sql_output += """
-- Table: top_rated
DROP TABLE IF EXISTS `top_rated`;
CREATE TABLE `top_rated` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `discount` varchar(50) DEFAULT NULL,
  `original_price` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `top_rated` (`id`, `title`, `slug`, `image`, `discount`, `original_price`, `price`) VALUES
(1, 'KINGDOM HEARTS III + Re Mind...', 'kingdom-hearts-iii', '/new-releases-list/kh3.png', NULL, NULL, '₫1,250,000'),
(2, 'Goat Simulator 3', 'goat-simulator-3', '/new-releases-list/goat3.png', '-60%', '₫385,000', '₫154,000'),
(3, 'Hades II', 'hades-ii', '/new-releases-list/hades2.jpg', NULL, NULL, '₫385,000'),
(4, 'Clair Obscur: Expedition 33', 'clair-obscur', '/new-releases-list/clair.png', NULL, NULL, '₫770,000'),
(5, 'Titanfall® 2: Ultimate Edition', 'titanfall-2', '/new-releases-list/titanfall2.png', '-85%', '₫700,000', '₫105,000');
"""

# -----------------
# TOP SELLERS
# -----------------
sql_output += """
-- Table: top_sellers
DROP TABLE IF EXISTS `top_sellers`;
CREATE TABLE `top_sellers` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `top_sellers` (`id`, `title`, `slug`, `image`, `price`) VALUES
(1, 'ARC RAIDERS', 'arc-raiders', '/thumbnails/arc-raiders.png', '₫745,944'),
(2, 'Cyberpunk 2077', 'cyberpunk-2077', '/thumbnails/cyberpunk.png', '₫971,000'),
(3, 'Battlefield™ 6', 'battlefield-6', '/thumbnails/battlefield.png', '₫1,299,000'),
(4, 'Red Dead Redemption 2', 'red-dead-redemption-2', '/thumbnails/red-dead-redemption-2.png', '₫1,359,000'),
(5, 'REMATCH', 'rematch', '/thumbnails/rematch.png', '₫385,000');
"""

# -----------------
# MOST PLAYED
# -----------------
sql_output += """
-- Table: most_played
DROP TABLE IF EXISTS `most_played`;
CREATE TABLE `most_played` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `most_played` (`id`, `title`, `slug`, `image`, `price`) VALUES
(1, 'Fortnite', 'fortnite', '/thumbnails/fortnite.png', 'Free'),
(2, 'Rocket League®', 'rocket-league', '/thumbnails/rocket-league.png', 'Free'),
(3, 'Grand Theft Auto V Enhanced', 'gta-v', '/thumbnails/gta5.png', '₫683,000'),
(4, 'Genshin Impact', 'genshin-impact', '/thumbnails/genshin.png', 'Free'),
(5, 'Crosshair X', 'crosshair-x', '/thumbnails/crosshair.png', '₫52,000');
"""

# -----------------
# TOP UPCOMING
# -----------------
sql_output += """
-- Table: top_upcoming
DROP TABLE IF EXISTS `top_upcoming`;
CREATE TABLE `top_upcoming` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `availability` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `top_upcoming` (`id`, `title`, `slug`, `availability`, `image`, `price`) VALUES
(1, 'Subnautica 2', 'subnautica-2', 'Coming Soon', '/thumbnails/subnautica2.png', NULL),
(2, 'Hogwarts Legacy', 'hogwarts-legacy', NULL, '/thumbnails/hogwarts-legacy.jpg', '₫1.299.000'),
(3, 'Split Fiction', 'split-fiction', 'Coming Soon', '/thumbnails/split-fiction.png', NULL),
(4, 'Jurassic Park: Survival', 'jurassic-park-survival', 'Coming Soon', '/thumbnails/jurassic.png', NULL),
(5, 'Resident Evil Requiem', 'resident-evil-requiem', 'Available 02/27/26', '/thumbnails/re.jpg', NULL);
"""

# -----------------
# STORE PROMOTIONS
# -----------------
sql_output += """
-- Table: store_promotions
DROP TABLE IF EXISTS `store_promotions`;
CREATE TABLE `store_promotions` (
  `id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `button_text` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `store_promotions` (`id`, `title`, `description`, `button_text`, `image`) VALUES
('sales-specials', 'Sales & Specials', 'Save big on hit titles...', 'Browse', '/store-promotions/sales-specials.jpg'),
('free-games', 'Free Games', 'Explore free and free-to-play games...', 'Play Now', '/store-promotions/free-games.png'),
('apps', 'Apps', 'Enjoy some of the best Apps...', 'Browse', '/store-promotions/apps.png');
"""

# Append to file
with open("c:/Users/pykeo/my-next-app/game_data.sql", "a", encoding="utf-8") as f:
    f.write(sql_output)

print("game_data.sql part 4 append successful.")
