
# generate_sql_part3.py

sql_output = ""

# ----------------------------
# TRENDING ITEMS
# ----------------------------
sql_output += """
-- Table: trending_items
DROP TABLE IF EXISTS `trending_items`;
CREATE TABLE `trending_items` (
  `id` varchar(100) NOT NULL,
  `game_id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `discount` varchar(20) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `trending_items` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `discount`, `logo_url`) VALUES
('lords-of-the-fallen-ii', 'lords-of-the-fallen-ii', 'lords-of-the-fallen-ii', 'Lords of the Fallen II', 'Lords of the Fallen II...', '/top-new-releases/lords-of-the-fallen-ii.png', 'Base Game', 'Coming soon', '', '/logos/lords-of-the-fallen.png'),
('the-wolf-among-us-2', 'the-wolf-among-us-2', 'the-wolf-among-us-2', 'The Wolf Among Us 2', 'The Wolf Among Us 2...', '/trending/the-wolf-among-us-2.png', 'Base Game', 'Coming soon', '', '/logos/the-wolf-among-us-2.png'),
('arknights-endfield', 'arknights-endfield', 'arknights-endfield', 'Arknights Endfield', 'Arknights Endfield...', '/trending/arknights-endfield.png', 'Base Game', 'Coming soon', '', '/logos/arknights-endfield.png'),
('assassins-creed-valhalla', 'assassins-creed-valhalla', 'assassins-creed-valhalla', "Assassin''s Creed Valhalla", "Assassin''s Creed Valhalla...", '/trending/assassins-creed-valhalla.png', 'Base Game', '₫599,900', '55%', '/logos/assassins-creed-valhalla.png');
"""

# ----------------------------
# TOP NEW RELEASES
# ----------------------------
sql_output += """
-- Table: top_new_releases
DROP TABLE IF EXISTS `top_new_releases`;
CREATE TABLE `top_new_releases` (
  `id` varchar(100) NOT NULL,
  `game_id` varchar(100) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `discount` varchar(20) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `top_new_releases` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `discount`, `logo_url`) VALUES
('lords-of-the-fallen-ii', 'lords-of-the-fallen-ii', 'lords-of-the-fallen-ii', 'Lords of the Fallen II', 'Description...', '/top-new-releases/lords-of-the-fallen-ii.png', 'Base Game', 'Coming soon', '', '/logos/lords-of-the-fallen.png'),
('lies-of-p', 'lies-of-p', 'lies-of-p', 'Lies of P', 'Description...', '/top-new-releases/lies-of-p.png', 'Base Game', '₫599,900', '55%', '/logos/lies-of-p.png'),
('assassins-creed-valhalla', 'assassins-creed-valhalla', 'assassins-creed-valhalla', "Assassin''s Creed Valhalla", 'Description...', '/top-new-releases/assassins-creed-valhalla.png', 'Base Game', '₫599,900', '55%', '/logos/assassins-creed-valhalla.png'),
('crystal-of-atlantean', 'crystal-of-atlantean', 'crystal-of-atlantean', 'Crystal of Atlantean', 'Description...', '/top-new-releases/crystal-of-atlantean.png', 'Base Game', 'Free', '', '/logos/crystal-of-atlantean.png'),
('celeste', 'celeste', 'celeste', 'Celeste', 'Description...', '/top-new-releases/celeste.png', 'Base Game', '₫299,900', '50%', '/logos/celeste.png'),
('rusty-lake-hotel', 'rusty-lake-hotel', 'rusty-lake-hotel', 'Rusty Lake Hotel', 'Description...', '/top-new-releases/rusty-lake-hotel.png', 'Base Game', '₫129,900', '70%', '/logos/rusty-lake-hotel.png'),
('when-the-past-was-around', 'when-the-past-was-around', 'when-the-past-was-around', 'When the Past Was Around', 'Description...', '/top-new-releases/when-the-past-was-around.png', 'Base Game', '₫69,900', '50%', '/logos/when-the-past-was-around.png'),
('the-hunter-call-of-the-wild', 'the-hunter-call-of-the-wild', 'the-hunter-call-of-the-wild', 'The Hunter: Call of the Wild', 'Description...', '/top-new-releases/the-hunter-call-of-the-wild.png', 'Base Game', '₫26,000', '-90%', '/logos/the-hunter-call-of-the-wild.png'),
('florence', 'florence', 'florence', 'Florence', 'Description...', '/top-new-releases/florence.png', 'Base Game', 'Free', '', '/logos/florence.png'),
('stray', 'stray', 'stray', 'Stray', 'Description...', '/top-new-releases/stray.jpg', 'Base Game', '₫227.500', '-40%', '/logos/stray.png');
"""

# ----------------------------
# EPIC FIRST RUN
# ----------------------------
sql_output += """
-- Table: epic_first_run
DROP TABLE IF EXISTS `epic_first_run`;
CREATE TABLE `epic_first_run` (
  `id` varchar(100) NOT NULL,
  `game_id` varchar(100) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `epic_first_run` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `logo_url`) VALUES
('back-4-blood', 'back-4-blood', 'back-4-blood', 'Back 4 Blood: Standard Edition', 'Description...', '/epic-form-epic-first-run/back-4-blood.jpg', 'Base Game', 'Coming soon', '/logos/back-4-blood.png'),
('batman-arkham-knight', 'batman-arkham-knight', 'batman-arkham-knight', 'Batman Arkham Knight', 'Description...', '/epic-form-epic-first-run/batman-arkham-knight.png', 'Base Game', 'Coming soon', '/logos/batman-arkham-knight.png'),
('felix-the-reaper', 'felix-the-reaper', 'felix-the-reaper', 'Felix The Reaper', 'Description...', '/epic-form-epic-first-run/felix-the-reaper.png', 'Base Game', 'Coming soon', '/logos/felix-the-reaper.png'),
('hell-is-us', 'hell-is-us', 'hell-is-us', 'Hell is Us', 'Description...', '/epic-form-epic-first-run/hell-is-us.png', 'Base Game', 'Free', '/logos/hell-is-us.png'),
('once-human', 'once-human', 'once-human', 'Once Human', 'Description...', '/epic-form-epic-first-run/once-human.png', 'Base Game', 'Coming soon', '/logos/once-human.png'),
('octopath-traveler', 'octopath-traveler', 'octopath-traveler', 'Octopath Traveler II', 'Description...', '/epic-form-epic-first-run/octopath-traveler.jpg', 'Base Game', 'Coming soon', '/logos/octopath-traveler.png'),
('reanimal', 'reanimal', 'reanimal', 'Reanimal', 'Description...', '/epic-form-epic-first-run/reanimal.png', 'Base Game', 'Coming soon', '/logos/reanimal.png'),
('vampire-the-masquerade', 'vampire-the-masquerade', 'vampire-the-masquerade', 'Vampire: The Masquerade', 'Description...', '/epic-form-epic-first-run/vampire-the-masquerade.jpg', 'Base Game', 'Coming soon', '/logos/vampire-the-masquerade.png'),
('doom-the-dark-ages', 'doom-the-dark-ages', 'doom-the-dark-ages', 'DOOM: The Dark Ages', 'Description...', '/epic-form-epic-first-run/doom-the-dark-ages.png', 'Base Game', 'Coming soon', '/logos/doom-the-dark-ages.png'),
('clair-obscur', 'clair-obscur', 'clair-obscur', 'Clair Obscur: Expedition 33', 'Description...', '/epic-form-epic-first-run/clair-obscur.png', 'Base Game', 'Coming soon', '/logos/clair-obscur.png');
"""

# ----------------------------
# NOW ON
# ----------------------------
sql_output += """
-- Table: now_on
DROP TABLE IF EXISTS `now_on`;
CREATE TABLE `now_on` (
  `id` varchar(100) NOT NULL,
  `game_id` varchar(100) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `now_on` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `logo_url`) VALUES
('kingdom-come-deliverance-ii', 'kingdom-come-deliverance-ii', 'kingdom-come-deliverance-ii', 'Kingdom Come: Deliverance II', 'Description...', '/now-on/kingdom-come-deliverance-ii.png', 'Base Game', '₫499,500', '/logos/kingdom-come-deliverance-ii.png'),
('persona-5-royal', 'persona-5-royal', 'persona-5-royal', 'Persona 5 Royal', 'Description...', '/now-on/persona-5-royal.png', 'Base Game', '₫414,000', '/logos/persona-5-royal.png'),
('baldurs-gate-3', 'baldurs-gate-3', 'baldurs-gate-3', "Baldur''s Gate 3", 'Description...', '/now-on/baldurs-gate-3.png', 'Base Game', '₫414,000', '/logos/baldurs-gate-3.png'),
('dead-island-2', 'dead-island-2', 'dead-island-2', 'Dead Island 2', 'Description...', '/now-on/dead-island-2.png', 'Base Game', '₫414,000', '/logos/dead-island-2.png'),
('hades-ii', 'hades-ii', 'hades-ii', 'Hades II', 'Description...', '/now-on/hades-ii.png', 'Base Game', '₫414,000', '/logos/hades-ii.png'),
('final-fantasy-xvi', 'final-fantasy-xvi', 'final-fantasy-xvi', 'Final Fantasy XVI', 'Description...', '/now-on/final-fantasy-xvi.png', 'Base Game', '₫1,249,000', '/logos/final-fantasy-xvi.png'),
('the-hundred-line-last-defense-academy', 'the-hundred-line-last-defense-academy', 'the-hundred-line-last-defense-academy', 'The Hundred: Line Last Defense Academy', 'Description...', '/now-on/the-hundred-line-last-defense-academy.png', 'Base Game', '₫1,249,000', '/logos/the-hundred-line-last-defense-academy.png'),
('monster-hunter-wilds', 'monster-hunter-wilds', 'monster-hunter-wilds', 'Monster Hunter: Wilds', 'Description...', '/now-on/monster-hunter-wilds.png', 'Base Game', '₫1,249,000', '/logos/monster-hunter-wilds.png'),
('red-dead-redemption-2', 'red-dead-redemption-2', 'red-dead-redemption-2', 'Red Dead Redemption 2', 'Description...', '/now-on/red-dead-redemption-2.png', 'Base Game', '₫1,249,000', '/logos/red-dead-redemption-2.png'),
('persona-3-reloaded', 'persona-3-reloaded', 'persona-3-reloaded', 'Persona 3 Reloaded', 'Description...', '/now-on/persona-3-reloaded.png', 'Base Game', '₫1,249,000', '/logos/persona-3-reloaded.png');
"""

# Append to file
with open("c:/Users/pykeo/my-next-app/game_data.sql", "a", encoding="utf-8") as f:
    f.write(sql_output)

print("game_data.sql part 3 append successful.")
