
# generate_sql_part5.py

sql_output = ""

# -----------------
# FREE ITEMS
# -----------------
sql_output += """
-- Table: free_items
DROP TABLE IF EXISTS `free_items`;
CREATE TABLE `free_items` (
  `id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `date_range` varchar(100) DEFAULT NULL,
  `button_text` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `free_items` (`id`, `title`, `slug`, `description`, `image_url`, `date_range`, `button_text`) VALUES
('mouse-p-i-for-hire', 'Mouse: P.I. for Hire', 'mouse-p-i-for-hire', 'Mouse: P.I. for Hire is a new game...', '/game-covers/mouse-p-i-for-hire.png', '2025-11-20', 'See In Shop'),
('arc-raiders-main', 'ARC Raiders', 'arc-raiders', 'ARC Raiders is a new game...', '/game-covers/arc-raiders.jpg', '2025-11-20', 'See In Shop'),
('where-winds-meet-main', 'Where Winds Meet', 'where-winds-meet-main', 'Where Winds Meet is a new game...', '/game-covers/where-winds-meet.png', '2025-11-20', 'See In Shop');
"""

# -----------------
# PROMOS ITEMS (promoData)
# -----------------
sql_output += """
-- Table: promos_items
DROP TABLE IF EXISTS `promos_items`;
CREATE TABLE `promos_items` (
  `id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `type` enum('game','promo') DEFAULT 'promo',
  `description` text,
  `button_text` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `promos_items` (`id`, `title`, `image_url`, `type`, `description`, `button_text`) VALUES
('holiday-sale-2025', 'Holiday Sale 2025', '/promos/holiday-sale.png', 'promo', 'Save up to 75% on selected titles...', 'Learn More'),
('free-game-week', 'Free Game of the Week', '/promos/free-game.png', 'promo', 'Claim your free game now...', 'Claim Now');
"""

# -----------------
# FEATURED GAME BANNER
# -----------------
sql_output += """
-- Table: featured_game_banner
DROP TABLE IF EXISTS `featured_game_banner`;
CREATE TABLE `featured_game_banner` (
  `id` varchar(100) NOT NULL,
  `game_id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `price` varchar(50) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `cta_primary` varchar(50) DEFAULT NULL,
  `cta_secondary` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `featured_game_banner` (`id`, `game_id`, `title`, `description`, `price`, `image_url`, `cta_primary`, `cta_secondary`) VALUES
('cronos-the-new-dawn', 'cronos-the-new-dawn', 'CRONOS: The New Dawn', 'A whole new breed of survival horror...', '₫970,000', '/images/cronos-the-new-dawn.jpg', 'Buy Now', 'Add to Wishlist');
"""

# -----------------
# TOP ADD ONS
# -----------------
sql_output += """
-- Table: top_add_ons
DROP TABLE IF EXISTS `top_add_ons`;
CREATE TABLE `top_add_ons` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `badge` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `top_add_ons` (`id`, `title`, `slug`, `image`, `price`, `badge`) VALUES
(1, 'INAZUMA ELEVEN: Victory Road', 'inazuma-eleven', '/new-releases-list/inazuma.jpg', '₫1,200,000', 'Now On Epic'),
(2, 'Constance', 'constance', '/new-releases-list/constance.png', 'Free', 'Now On Epic'),
(3, 'Dispatch', 'dispatch', '/new-releases-list/dispatch.jpg', '₫300,000', NULL),
(4, 'DOOM: The Dark Ages', 'doom-the-dark-ages', '/new-releases-list/doom.png', '₫1,200,000', 'Now On Epic'),
(5, 'Mouthwashing', 'mouthwashing', '/new-releases-list/mouthwashing.png', 'Free', 'Now On Epic');
"""

# -----------------
# TOP FREE TO PLAY
# -----------------
sql_output += """
-- Table: top_free_to_play
DROP TABLE IF EXISTS `top_free_to_play`;
CREATE TABLE `top_free_to_play` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `original_price` varchar(50) DEFAULT NULL,
  `discount` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `top_free_to_play` (`id`, `title`, `slug`, `image`, `price`, `original_price`, `discount`) VALUES
(1, 'KINGDOM HEARTS III', 'kingdom-hearts-iii', '/new-releases-list/kh3.png', '₫1,250,000', NULL, NULL),
(2, 'Goat Simulator 3', 'goat-simulator-3', '/new-releases-list/goat3.png', '₫154,000', '₫385,000', '-60%'),
(3, 'Hades II', 'hades-ii', '/new-releases-list/hades2.jpg', '₫385,000', NULL, NULL),
(4, 'Clair Obscur', 'clair-obscur', '/new-releases-list/clair.png', '₫770,000', NULL, NULL),
(5, 'Titanfall 2', 'titanfall-2', '/new-releases-list/titanfall2.png', '₫105,000', '₫700,000', '-85%');
"""

# -----------------
# TOP DEMOS
# -----------------
sql_output += """
-- Table: top_demos
DROP TABLE IF EXISTS `top_demos`;
CREATE TABLE `top_demos` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `availability` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `top_demos` (`id`, `title`, `slug`, `image`, `availability`, `price`) VALUES
(1, 'Project Motor Racing', 'project-motor-racing', '/new-releases-list/motor.png', 'Available 11/25/25', '₫860,000'),
(2, 'Subnautica 2', 'subnautica-2', '/new-releases-list/subnautica2.png', 'Available 11/26/25', NULL),
(3, 'Slay the Spire 2', 'slay-the-spire-2', '/new-releases-list/slay.jpg', 'Available 11/27/25', NULL),
(4, 'Lost Ember: Rekindled', 'lost-ember', '/new-releases-list/lostember.png', 'Available 11/27/25', NULL),
(5, 'PUBG: BLINDSPOT', 'pubg-blindspot', '/new-releases-list/blur.png', 'Available Nov 2025', NULL);
"""

# -----------------
# NEWS
# -----------------
sql_output += """
-- Table: news
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` varchar(50) DEFAULT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `button_text` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `news` (`id`, `title`, `date`, `description`, `image_url`, `button_text`) VALUES
('mouse-p-i-for-hire', 'Mouse: P.I. for Hire', '2025-11-20', 'Mouse: P.I. for Hire is a new game...', '/game-covers/mouse-p-i-for-hire.png', 'See In Shop'),
('arc-raiders-main', 'ARC Raiders', '2025-11-20', 'ARC Raiders is a new game...', '/game-covers/arc-raiders.png', 'See In Shop'),
('where-winds-meet-main', 'Where Winds Meet', '2025-11-20', 'Where Winds Meet is a new game...', '/game-covers/where-winds-meet.png', 'See In Shop');
"""

# Append to file
with open("c:/Users/pykeo/my-next-app/game_data.sql", "a", encoding="utf-8") as f:
    f.write(sql_output)

print("game_data.sql part 5 append successful.")
