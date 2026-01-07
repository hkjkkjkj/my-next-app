-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 07, 2026 at 06:58 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` timestamp NULL DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`id`, `email`, `password_hash`, `full_name`, `created_at`, `last_login`, `is_active`) VALUES
(3, 'admin2@example.com', '$2b$10$i9Iw5CGn8MEnkKDkWggssOCzXGewchLgQvgIibqYN9QoJXGcCHawa', 'Admin 2', '2026-01-07 10:13:04', '2026-01-07 17:52:40', 1);

-- --------------------------------------------------------

--
-- Table structure for table `coming_soon`
--

CREATE TABLE `coming_soon` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `availability` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coming_soon`
--

INSERT INTO `coming_soon` (`id`, `game_id`, `slug`, `title`, `image_url`, `availability`, `price`) VALUES
('cs-1', '20', 'project-motor-racing', 'Project Motor Racing', '/new-releases-list/motor.png', 'Available 11/25/25', '₫860,000'),
('cs-2', '48', 'subnautica-2', 'Subnautica 2', '/game-covers/subnautica-2.png', 'Available 11/26/25', NULL),
('cs-3', '60', 'slay-the-spire-2', 'Slay the Spire 2', '/new-releases-list/slay.jpg', 'Available 11/27/25', NULL),
('cs-4', '59', 'lost-ember', 'Lost Ember: Rekindled Edition', '/new-releases-list/lostember.png', 'Available 11/27/25', NULL),
('cs-5', '21', 'pubg-blindspot', 'PUBG: BLINDSPOT', '/new-releases-list/blur.png', 'Available Nov 2025', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `deal_items`
--

CREATE TABLE `deal_items` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tag` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('game','promo') COLLATE utf8mb4_unicode_ci DEFAULT 'game',
  `discount` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_text` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `deal_items`
--

INSERT INTO `deal_items` (`id`, `title`, `slug`, `image_url`, `tag`, `type`, `discount`, `original_price`, `price`, `button_text`) VALUES
('black-ops-deal', 'CRONOS THE NEW DAWN', 'black-ops-7', '/images/cronos-the-new-dawn.jpg', NULL, 'game', '-20%', '₫1,999,000', '₫1,599,200', NULL),
('cyberpunk-deal', 'ANNO 117: PAX ROMANA', 'cyberpunk-2077', '/images/anno-117-pax-romana.jpg', '-50%', 'game', '-50%', '₫899,000', '₫449,500', NULL),
('holiday-sale', 'WHERE WINDS MEET', NULL, '/images/where-winds-meet.png', 'Event', 'promo', NULL, NULL, NULL, 'Browse All');

-- --------------------------------------------------------

--
-- Table structure for table `discover_items`
--

CREATE TABLE `discover_items` (
  `id` int NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discover_items`
--

INSERT INTO `discover_items` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `original_price`, `discount`, `logo_url`) VALUES
(1, '3', 'arc-raiders', 'ARC RAIDERS', 'ARC Raiders is an action-packed...', '/game-covers/arc-raiders.png', 'Base Game', '₫596,755', '₫745,944', '-20%', '/logos/arc-raiders.png'),
(2, '25', 'black-ops-7', 'Black Ops 7', 'Black Ops 7...', '/game-covers/black-ops-7.png', 'Base Game', '₫979,650', '₫1,399,500', '-30%', '/logos/black-ops-7.png'),
(3, '11', 'cyberpunk-2077', 'Cyberpunk 2077', 'Cyberpunk 2077...', '/game-covers/cyberpunk-2077.png', 'Base Game', '₫339,850', '₫971,000', '-65%', '/logos/cyberpunk-2077.png'),
(4, '15', 'dying-light-the-beast', 'Dying Light: The Beast', 'Dying Light: The Beast...', '/game-covers/dying-light-the-beast.png', 'Base Game', '₫792,000', '₫990,000', '-20%', '/logos/dying-light-the-beast.png'),
(5, '49', 'jurassic-world-3', 'Jurassic World: Evolution 3', 'Jurassic World: Evolution 3...', '/game-covers/jurassic-world-3.jpg', 'Base Game', '₫784,000', '₫980,000', '-20%', '/logos/jurassic-world-3.png'),
(6, '64', 'mouse-p-i-for-hire', 'Mouse: P.I. for Hire', 'Join private investigator Jack Pepper...', '/game-covers/mouse-p-i-for-hire.png', 'Base Game', '₫261,000', '₫361,000', '23%', '/logos/mouse-p-i-for-hire.png'),
(7, '36', 'resident-evil-requiem', 'Resident Evil Requiem', 'Resident Evil Requiem...', '/game-covers/resident-evil-requiem.jpg', 'Base Game', 'Coming soon', '', '', '/logos/resident-evil-requiem.png'),
(8, '48', 'subnautica-2', 'Subnautica 2', 'Subnautica 2...', '/game-covers/subnautica-2.png', 'Base Game', 'Coming soon', '', '', '/logos/subnautica-2.png'),
(9, '55', 'the-midnight-walkers', 'The Midnight Walkers', 'The Midnight Walkers...', '/game-covers/the-midnight-walkers.png', 'Base Game', 'Coming Soon', '', '', '/logos/the-midnight-walkers.png'),
(18, '72', 'f1-25', 'F1® 25', NULL, 'https://res.cloudinary.com/dzwpfwvyc/image/upload/v1767810026/hvesvxxlg2of1eyufk19.jpg', 'Base Game', '₫499,500', '₫999,000', '-50%', '');

-- --------------------------------------------------------

--
-- Table structure for table `epic_first_run`
--

CREATE TABLE `epic_first_run` (
  `id` int NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `epic_first_run`
--

INSERT INTO `epic_first_run` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `original_price`, `discount`, `logo_url`) VALUES
(1, '7', 'back-4-blood', 'Back 4 Blood: Standard Edition', 'Description...', '/epic-form-epic-first-run/back-4-blood.jpg', 'Base Game', 'Coming soon', NULL, NULL, '/logos/back-4-blood.png'),
(2, '10', 'batman-arkham-knight', 'Batman Arkham Knight', 'Description...', '/epic-form-epic-first-run/batman-arkham-knight.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/batman-arkham-knight.png'),
(3, '27', 'clair-obscur', 'Clair Obscur: Expedition 33', 'Description...', '/epic-form-epic-first-run/clair-obscur.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/clair-obscur.png'),
(4, '14', 'doom-the-dark-ages', 'DOOM: The Dark Ages', 'Description...', '/epic-form-epic-first-run/doom-the-dark-ages.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/doom-the-dark-ages.png'),
(5, '30', 'felix-the-reaper', 'Felix The Reaper', 'Description...', '/epic-form-epic-first-run/felix-the-reaper.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/felix-the-reaper.png'),
(6, '41', 'hell-is-us', 'Hell is Us', 'Description...', '/epic-form-epic-first-run/hell-is-us.png', 'Base Game', 'Free', NULL, NULL, '/logos/hell-is-us.png'),
(7, '16', 'octopath-traveler', 'Octopath Traveler II', 'Description...', '/epic-form-epic-first-run/octopath-traveler.jpg', 'Base Game', 'Coming soon', NULL, NULL, '/logos/octopath-traveler.png'),
(8, '17', 'once-human', 'Once Human', 'Description...', '/epic-form-epic-first-run/once-human.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/once-human.png'),
(9, '22', 'reanimal', 'Reanimal', 'Description...', '/epic-form-epic-first-run/reanimal.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/reanimal.png'),
(10, '60', 'vampire-the-masquerade', 'Vampire: The Masquerade', 'Description...', '/epic-form-epic-first-run/vampire-the-masquerade.jpg', 'Base Game', 'Coming soon', '', '', '/logos/vampire-the-masquerade.png');

-- --------------------------------------------------------

--
-- Table structure for table `featured_game_banner`
--

CREATE TABLE `featured_game_banner` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cta_primary` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cta_secondary` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `free_items`
--

CREATE TABLE `free_items` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_range` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_text` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `free_items`
--

INSERT INTO `free_items` (`id`, `title`, `slug`, `description`, `image_url`, `date_range`, `button_text`) VALUES
('forza-horizon-5', 'Forza Horizon 5', 'forza-horizon-5', 'ARC Raiders is a new game...', '/free/forza-horizon-5.jpg', '2025-11-20', 'See In Shop'),
('no-mans-sky', 'No Mans Sky', 'no-mans-sky', 'Where Winds Meet is a new game...', '/free/no-mans-sky.jpg', '2025-11-20', 'See In Shop'),
('the-witcher-3', 'The Witcher 3: Wild Hunt', 'the-witcher-3', 'Mouse: P.I. for Hire is a new game...', '/free/the-witcher-3.jpg', '2025-11-20', 'See In Shop');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hero_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `developer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publisher` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `release_date` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `specs_json` json DEFAULT NULL,
  `gallery_json` json DEFAULT NULL,
  `login_accounts` text COLLATE utf8mb4_unicode_ci,
  `languages_json` json DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `slug`, `title`, `hero_image`, `developer`, `publisher`, `release_date`, `description`, `specs_json`, `gallery_json`, `login_accounts`, `languages_json`, `price`, `original_price`, `discount`) VALUES
(1, 'anno-117-pax-romana', 'ANNO 117: PAX ROMANA', '/images/anno-117-pax-romana.jpg', 'Anno 117: Pax Romana', 'Anno 117: Pax Romana', '2022-01-01', 'The world is on the brink of collapse. Only you can save it.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/images/anno-117-pax-romana.jpg\", \"/images/anno-117-pax-romana.jpg\", \"/images/anno-117-pax-romana.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(2, 'crosshair-x', 'Crosshair X', '/thumbnails/crosshair.png', 'CenterPoint Gaming', 'CenterPoint Gaming', '2020-01-01', 'Crosshair X description...', '{}', '[\"/thumbnails/crosshair.png\"]', NULL, NULL, NULL, NULL, NULL),
(3, 'arc-raiders', 'ARC RAIDERS', '/images/arc-raiders.jpg', 'Embark Studios', 'Embark Studios', '2022-01-01', 'ARC Raiders is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/arc-raiders/video.mp4\", \"/images-discover-game/arc-raiders/arc-raiders-1.jpg\", \"/images-discover-game/arc-raiders/arc-raiders-2.jpg\", \"/images-discover-game/arc-raiders/arc-raiders-3.jpg\", \"/images-discover-game/arc-raiders/arc-raiders-4.jpg\", \"/images-discover-game/arc-raiders/arc-raiders-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(4, 'arknights-endfield', 'Arknights Endfield', '/trending/arknights-endfield.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Arknights Endfield description...', '{}', '[\"/video-for-discover-game/arknights-endfield/video.mp4\", \"/images-discover-game/arknights-endfield/arknights-endfield-1.jpg\", \"/images-discover-game/arknights-endfield/arknights-endfield-2.jpg\", \"/images-discover-game/arknights-endfield/arknights-endfield-3.jpg\", \"/images-discover-game/arknights-endfield/arknights-endfield-4.jpg\", \"/images-discover-game/arknights-endfield/arknights-endfield-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(5, 'assassins-creed-valhalla', 'Assassin\'s Creed Valhalla', '/trending/assassins-creed-valhalla.png', 'Ubisoft', 'Ubisoft', '2022-01-01', 'Assassin\'s Creed Valhalla is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}}', '[\"/video-for-discover-game/assassins-creed-valhalla/video.mp4\", \"/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-1.jpg\", \"/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-2.jpg\", \"/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-3.jpg\", \"/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-4.jpg\", \"/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(6, 'mouthwashing', 'Mouthwashing', '/new-releases-list/mouthwashing.png', 'Wrong Organ', 'Critical Reflex', '2025-01-01', 'Description for Mouthwashing...', '{}', '[\"/new-releases-list/mouthwashing.png\"]', NULL, NULL, NULL, NULL, NULL),
(7, 'back-4-blood', 'Back 4 Blood: Standard Edition', '/epic-form-epic-first-run/back-4-blood.jpg', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Back 4 Blood description...', '{}', '[\"/video-for-discover-game/back-4-blood/video.mp4\", \"/images-discover-game/back-4-blood/back-4-blood-1.jpg\", \"/images-discover-game/back-4-blood/back-4-blood-2.jpg\", \"/images-discover-game/back-4-blood/back-4-blood-3.jpg\", \"/images-discover-game/back-4-blood/back-4-blood-4.jpg\", \"/images-discover-game/back-4-blood/back-4-blood-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(8, 'baldurs-gate-3', 'Baldur\'s Gate 3', '/now-on/baldurs-gate-3.png', 'Larian Studios', 'CD Projekt Red', '2022-01-01', 'Baldur\'s Gate 3 description...', '{}', '[\"/video-for-discover-game/baldurs-gate-3/video.mp4\", \"/images-discover-game/baldurs-gate-3/baldurs-gate-3-1.jpg\", \"/images-discover-game/baldurs-gate-3/baldurs-gate-3-2.jpg\", \"/images-discover-game/baldurs-gate-3/baldurs-gate-3-3.jpg\", \"/images-discover-game/baldurs-gate-3/baldurs-gate-3-4.jpg\", \"/images-discover-game/baldurs-gate-3/baldurs-gate-3-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(9, 'crystal-of-atlantean', 'Crystal of Atlantean', '/top-new-releases/crystal-of-atlantean.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Crystal of Atlantean is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}}', '[\"/video-for-discover-game/crystal-of-atlantean/video.mp4\", \"/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-1.jpg\", \"/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-2.jpg\", \"/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-3.jpg\", \"/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-4.jpg\", \"/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(10, 'batman-arkham-knight', 'Batman Arkham Knight', '/epic-form-epic-first-run/batman-arkham-knight.png', '', '', '2022-01-01', 'Batman Arkham Knight description...', '{}', '[\"/video-for-discover-game/batman-arkham-knight/video.mp4\", \"/images-discover-game/batman-arkham-knight/batman-arkham-knight-1.jpg\", \"/images-discover-game/batman-arkham-knight/batman-arkham-knight-2.jpg\", \"/images-discover-game/batman-arkham-knight/batman-arkham-knight-3.jpg\", \"/images-discover-game/batman-arkham-knight/batman-arkham-knight-4.jpg\", \"/images-discover-game/batman-arkham-knight/batman-arkham-knight-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(11, 'cyberpunk-2077', 'Cyberpunk 2077', '/game-covers/cyberpunk-2077.png', 'CD Projekt Red', 'CD Projekt Red', '2022-01-01', 'Cyberpunk 2077 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/cyberpunk-2077/video.mp4\", \"/images-discover-game/cyberpunk-2077/cyberpunk-2077-1.jpg\", \"/images-discover-game/cyberpunk-2077/cyberpunk-2077-2.jpg\", \"/images-discover-game/cyberpunk-2077/cyberpunk-2077-3.jpg\", \"/images-discover-game/cyberpunk-2077/cyberpunk-2077-4.jpg\", \"/images-discover-game/cyberpunk-2077/cyberpunk-2077-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(12, 'dead-island-2', 'Dead Island 2', '/now-on/dead-island-2.png', 'Larian Studios', 'CD Projekt Red', '2022-01-01', 'Dead Island 2 description...', '{}', '[\"/video-for-discover-game/dead-island-2/video.mp4\", \"/images-discover-game/dead-island-2/dead-island-2-1.jpg\", \"/images-discover-game/dead-island-2/dead-island-2-2.jpg\", \"/images-discover-game/dead-island-2/dead-island-2-3.jpg\", \"/images-discover-game/dead-island-2/dead-island-2-4.jpg\", \"/images-discover-game/dead-island-2/dead-island-2-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(13, 'dispatch', 'Dispatch', '/new-releases-list/dispatch.jpg', 'Unknown', 'Unknown', '2025-01-01', 'Description for Dispatch...', '{}', '[\"/new-releases-list/dispatch.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(14, 'doom-the-dark-ages', 'DOOM: The Dark Ages', '/epic-form-epic-first-run/doom-the-dark-ages.png', 'Mountains', 'Annapurna Interactive', '2025-12-25', 'DOOM: The Dark Ages description...', '{}', '[\"/video-for-discover-game/doom-the-dark-ages/video.mp4\", \"/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-1.jpg\", \"/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-2.jpg\", \"/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-3.jpg\", \"/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-4.jpg\", \"/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(15, 'dying-light-the-beast', 'Dying Light: The Beast', '/game-covers/dying-light-the-beast.png', 'Techland', 'Techland', '2022-01-01', 'Dying Light: The Beast is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/dying-light-the-beast/video.mp4\", \"/images-discover-game/dying-light-the-beast/dying-light-the-beast-1.jpg\", \"/images-discover-game/dying-light-the-beast/dying-light-the-beast-2.jpg\", \"/images-discover-game/dying-light-the-beast/dying-light-the-beast-3.jpg\", \"/images-discover-game/dying-light-the-beast/dying-light-the-beast-4.jpg\", \"/images-discover-game/dying-light-the-beast/dying-light-the-beast-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(16, 'octopath-traveler', 'Octopath Traveler II', '/epic-form-epic-first-run/octopath-traveler.jpg', 'Rusty Lake', 'Rusty Lake', '2025-12-25', 'Octopath Traveler II description...', '{}', '[\"/video-for-discover-game/octopath-traveler/video.mp4\", \"/images-discover-game/octopath-traveler/octopath-traveler-1.jpg\", \"/images-discover-game/octopath-traveler/octopath-traveler-2.jpg\", \"/images-discover-game/octopath-traveler/octopath-traveler-3.jpg\", \"/images-discover-game/octopath-traveler/octopath-traveler-4.jpg\", \"/images-discover-game/octopath-traveler/octopath-traveler-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(17, 'once-human', 'Once Human', '/epic-form-epic-first-run/once-human.png', 'Maddy Makes Games Inc.', 'Maddy Makes Games Inc.', '2022-01-01', 'Once Human description...', '{}', '[\"/video-for-discover-game/once-human/video.mp4\", \"/images-discover-game/once-human/once-human-1.jpg\", \"/images-discover-game/once-human/once-human-2.jpg\", \"/images-discover-game/once-human/once-human-3.jpg\", \"/images-discover-game/once-human/once-human-4.jpg\", \"/images-discover-game/once-human/once-human-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(18, 'persona-3-reloaded', 'Persona 3 Reloaded', '/now-on/persona-3-reloaded.png', 'Rockstar Games', 'Rockstar Games', '2022-01-01', 'Persona 3 Reloaded description...', '{}', '[\"/video-for-discover-game/persona-3-reloaded/video.mp4\", \"/images-discover-game/persona-3-reloaded/persona-3-reloaded-1.jpg\", \"/images-discover-game/persona-3-reloaded/persona-3-reloaded-2.jpg\", \"/images-discover-game/persona-3-reloaded/persona-3-reloaded-3.jpg\", \"/images-discover-game/persona-3-reloaded/persona-3-reloaded-4.jpg\", \"/images-discover-game/persona-3-reloaded/persona-3-reloaded-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(19, 'persona-5-royal', 'Persona 5 Royal', '/now-on/persona-5-royal.png', 'Atlus', 'Sega', '2022-01-01', 'Persona 5 Royal description...', '{}', '[\"/video-for-discover-game/persona-5-royal/video.mp4\", \"/images-discover-game/persona-5-royal/persona-5-royal-1.jpg\", \"/images-discover-game/persona-5-royal/persona-5-royal-2.jpg\", \"/images-discover-game/persona-5-royal/persona-5-royal-3.jpg\", \"/images-discover-game/persona-5-royal/persona-5-royal-4.jpg\", \"/images-discover-game/persona-5-royal/persona-5-royal-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(20, 'project-motor-racing', 'Project Motor Racing', '/new-releases-list/motor.png', 'Unknown', 'Unknown', '2025-11-25', 'Description for Project Motor Racing...', '{}', '[\"/new-releases-list/motor.png\"]', NULL, NULL, NULL, NULL, NULL),
(21, 'pubg-blindspot', 'PUBG: BLINDSPOT', '/new-releases-list/blur.png', 'KRAFTON', 'KRAFTON', '2025-11-01', 'Description for PUBG: BLINDSPOT...', '{}', '[\"/new-releases-list/blur.png\"]', NULL, NULL, NULL, NULL, NULL),
(22, 'reanimal', 'Reanimal', '/epic-form-epic-first-run/reanimal.png', 'Mojiken', 'Toge Production', '2022-01-01', 'Reanimal description...', '{}', '[\"/video-for-discover-game/reanimal/video.mp4\", \"/images-discover-game/reanimal/reanimal-1.jpg\", \"/images-discover-game/reanimal/reanimal-2.jpg\", \"/images-discover-game/reanimal/reanimal-3.jpg\", \"/images-discover-game/reanimal/reanimal-4.jpg\", \"/images-discover-game/reanimal/reanimal-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(23, 'red-dead-redemption-2', 'Red Dead Redemption 2', '/now-on/red-dead-redemption-2.png', 'Rockstar Games', 'Rockstar Games', '2022-01-01', 'Red Dead Redemption 2 description...', '{}', '[\"/video-for-discover-game/red-dead-redemption-2/video.mp4\", \"/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-1.jpg\", \"/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-2.jpg\", \"/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-3.jpg\", \"/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-4.jpg\", \"/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(24, 'battlefield-6', 'Battlefield 6', '/thumbnails/battlefield.png', 'DICE', 'Electronic Arts', '2025-01-01', 'Battlefield 6 description...', '{}', '[\"/thumbnails/battlefield.png\"]', NULL, NULL, NULL, NULL, NULL),
(25, 'black-ops-7', 'Black Ops 7', '/game-covers/black-ops-7.png', 'Treyarch', 'Activision', '2022-01-01', 'Black Ops 7 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/black-ops-7/video.mp4\", \"/images-discover-game/black-ops-7/black-ops-7-1.jpg\", \"/images-discover-game/black-ops-7/black-ops-7-2.jpg\", \"/images-discover-game/black-ops-7/black-ops-7-3.jpg\", \"/images-discover-game/black-ops-7/black-ops-7-4.jpg\", \"/images-discover-game/black-ops-7/black-ops-7-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(26, 'celeste', 'Celeste', '/top-new-releases/celeste.png', 'Maddy Makes Games Inc.', 'Maddy Makes Games Inc.', '2022-01-01', 'Celeste is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}}', '[\"/video-for-discover-game/celeste/video.mp4\", \"/images-discover-game/celeste/celeste-1.jpg\", \"/images-discover-game/celeste/celeste-2.jpg\", \"/images-discover-game/celeste/celeste-3.jpg\", \"/images-discover-game/celeste/celeste-4.jpg\", \"/images-discover-game/celeste/celeste-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(27, 'clair-obscur', 'Clair Obscur: Expedition 33', '/epic-form-epic-first-run/clair-obscur.png', 'BlueTwelve Studio', 'Annapurna Interactive', '2022-01-01', 'Clair Obscur description...', '{}', '[\"/video-for-discover-game/clair-obscur/video.mp4\", \"/images-discover-game/clair-obscur/clair-obscur-1.jpg\", \"/images-discover-game/clair-obscur/clair-obscur-2.jpg\", \"/images-discover-game/clair-obscur/clair-obscur-3.jpg\", \"/images-discover-game/clair-obscur/clair-obscur-4.jpg\", \"/images-discover-game/clair-obscur/clair-obscur-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(28, 'constance', 'Constance', '/new-releases-list/constance.png', 'Billete', 'Billete', '2025-01-01', 'Description for Constance...', '{}', '[\"/new-releases-list/constance.png\"]', NULL, NULL, NULL, NULL, NULL),
(29, 'cronos-the-new-dawn', 'CRONOS THE NEW DAWN', '/images/cronos-the-new-dawn.jpg', 'Cronos The New Dawn', 'Cronos The New Dawn', '2022-01-01', 'A whole new breed of survival horror emerges with Cronos: The New Dawn.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/images/cronos-the-new-dawn.jpg\", \"/images/cronos-the-new-dawn.jpg\", \"/images/cronos-the-new-dawn.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(30, 'felix-the-reaper', 'Felix The Reaper', '/epic-form-epic-first-run/felix-the-reaper.png', 'Ubisoft', 'Ubisoft', '2022-01-01', 'Felix The Reaper description...', '{}', '[\"/video-for-discover-game/felix-the-reaper/video.mp4\", \"/images-discover-game/felix-the-reaper/felix-the-reaper-1.jpg\", \"/images-discover-game/felix-the-reaper/felix-the-reaper-2.jpg\", \"/images-discover-game/felix-the-reaper/felix-the-reaper-3.jpg\", \"/images-discover-game/felix-the-reaper/felix-the-reaper-4.jpg\", \"/images-discover-game/felix-the-reaper/felix-the-reaper-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(31, 'final-fantasy-xvi', 'Final Fantasy XVI', '/now-on/final-fantasy-xvi.png', 'Square Enix', 'Square Enix', '2022-01-01', 'Final Fantasy XVI description...', '{}', '[\"/video-for-discover-game/final-fantasy-xvi/video.mp4\", \"/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-1.jpg\", \"/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-2.jpg\", \"/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-3.jpg\", \"/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-4.jpg\", \"/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(32, 'florence', 'Florence', '/top-new-releases/florence.png', 'Mountains', 'Annapurna Interactive', '2025-12-25', 'Florence Yeoh feels a little... stuck.', '{\"minimum\": {\"os\": \"Windows 10/11\"}, \"recommended\": {\"os\": \"Windows 10/11\"}}', '[\"/video-for-discover-game/florence/video.mp4\", \"/images-discover-game/florence/florence-1.jpg\", \"/images-discover-game/florence/florence-2.jpg\", \"/images-discover-game/florence/florence-3.jpg\", \"/images-discover-game/florence/florence-4.jpg\", \"/images-discover-game/florence/florence-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(33, 'fortnite', 'Fortnite', '/thumbnails/fortnite.png', 'Epic Games', 'Epic Games', '2017-07-21', 'Fortnite description...', '{}', '[\"/thumbnails/fortnite.png\"]', NULL, NULL, NULL, NULL, NULL),
(34, 'rematch', 'REMATCH', '/thumbnails/rematch.png', 'Unknown', 'Unknown', '2025-01-01', 'REMATCH description...', '{}', '[\"/thumbnails/rematch.png\"]', NULL, NULL, NULL, NULL, NULL),
(35, 'genshin-impact', 'Genshin Impact', '/thumbnails/genshin.png', 'miHoYo', 'miHoYo', '2020-09-28', 'Genshin Impact description...', '{}', '[\"/thumbnails/genshin.png\"]', NULL, NULL, NULL, NULL, NULL),
(36, 'resident-evil-requiem', 'Resident Evil Requiem', '/game-covers/resident-evil-requiem.jpg', 'Capcom', 'Capcom', '2022-01-01', 'Resident Evil Requiem is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/resident-evil-requiem/video.mp4\", \"/images-discover-game/resident-evil-requiem/resident-evil-requiem-1.jpg\", \"/images-discover-game/resident-evil-requiem/resident-evil-requiem-2.jpg\", \"/images-discover-game/resident-evil-requiem/resident-evil-requiem-3.jpg\", \"/images-discover-game/resident-evil-requiem/resident-evil-requiem-4.jpg\", \"/images-discover-game/resident-evil-requiem/resident-evil-requiem-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(37, 'goat-simulator-3', 'Goat Simulator 3', '/new-releases-list/goat3.png', 'Coffee Stain North', 'Coffee Stain Publishing', '2025-01-01', 'Description for Goat Simulator 3...', '{}', '[\"/new-releases-list/goat3.png\"]', NULL, NULL, NULL, NULL, NULL),
(38, 'gta-v', 'Grand Theft Auto V', '/thumbnails/gta5.png', 'Rockstar North', 'Rockstar Games', '2013-09-17', 'GTA V description...', '{}', '[\"/thumbnails/gta5.png\"]', NULL, NULL, NULL, NULL, NULL),
(39, 'hades-ii', 'Hades II', '/now-on/hades-ii.png', 'Larian Studios', 'CD Projekt Red', '2022-01-01', 'Hades II description...', '{}', '[\"/video-for-discover-game/hades-ii/video.mp4\", \"/images-discover-game/hades-ii/hades-ii-1.jpg\", \"/images-discover-game/hades-ii/hades-ii-2.jpg\", \"/images-discover-game/hades-ii/hades-ii-3.jpg\", \"/images-discover-game/hades-ii/hades-ii-4.jpg\", \"/images-discover-game/hades-ii/hades-ii-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(40, 'rocket-league', 'Rocket League', '/thumbnails/rocket-league.png', 'Psyonix', 'Psyonix', '2015-07-07', 'Rocket League description...', '{}', '[\"/thumbnails/rocket-league.png\"]', NULL, NULL, NULL, NULL, NULL),
(41, 'hell-is-us', 'Hell is Us', '/epic-form-epic-first-run/hell-is-us.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Hell is Us description...', '{}', '[\"/video-for-discover-game/hell-is-us/video.mp4\", \"/images-discover-game/hell-is-us/hell-is-us-1.jpg\", \"/images-discover-game/hell-is-us/hell-is-us-2.jpg\", \"/images-discover-game/hell-is-us/hell-is-us-3.jpg\", \"/images-discover-game/hell-is-us/hell-is-us-4.jpg\", \"/images-discover-game/hell-is-us/hell-is-us-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(42, 'hogwarts-legacy', 'Hogwarts Legacy', '/thumbnails/hogwarts-legacy.jpg', 'Avalanche Software', 'Warner Bros. Games', '2023-02-10', 'Hogwarts Legacy description...', '{}', '[\"/thumbnails/hogwarts-legacy.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(43, 'rusty-lake-hotel', 'Rusty Lake Hotel', '/top-new-releases/rusty-lake-hotel.png', 'Rusty Lake', 'Rusty Lake', '2025-12-25', 'Rusty Lake Hotel is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}}', '[\"/video-for-discover-game/rusty-lake-hotel/video.mp4\", \"/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-1.jpg\", \"/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-2.jpg\", \"/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-3.jpg\", \"/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-4.jpg\", \"/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(44, 'split-fiction', 'Split Fiction', '/thumbnails/split-fiction.png', 'Unknown', 'Unknown', '2025-01-01', 'Split Fiction description...', '{}', '[\"/thumbnails/split-fiction.png\"]', NULL, NULL, NULL, NULL, NULL),
(45, 'inazuma-eleven-victory-road', 'INAZUMA ELEVEN: Victory Road', '/new-releases-list/inazuma.jpg', 'Level-5', 'Level-5', '2025-01-01', 'Description for INAZUMA ELEVEN: Victory Road...', '{}', '[\"/new-releases-list/inazuma.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(46, 'stray', 'Stray', '/top-new-releases/stray.jpg', 'BlueTwelve Studio', 'Annapurna Interactive', '2022-01-01', 'Stray is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\"}, \"recommended\": {\"os\": \"Windows 10/11\"}}', '[\"/video-for-discover-game/stray/video.mp4\", \"/images-discover-game/stray/stray-1.jpg\", \"/images-discover-game/stray/stray-2.jpg\", \"/images-discover-game/stray/stray-3.jpg\", \"/images-discover-game/stray/stray-4.jpg\", \"/images-discover-game/stray/stray-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(47, 'jurassic-park-survival', 'Jurassic Park: Survival', '/thumbnails/jurassic.png', 'Saber Interactive', 'Saber Interactive', '2025-01-01', 'Jurassic Park: Survival description...', '{}', '[\"/thumbnails/jurassic.png\"]', NULL, NULL, NULL, NULL, NULL),
(48, 'subnautica-2', 'Subnautica 2', '/game-covers/subnautica-2.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Subnautica 2 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/subnautica-2/video.mp4\", \"/images-discover-game/subnautica-2/subnautica-2-1.jpg\", \"/images-discover-game/subnautica-2/subnautica-2-2.jpg\", \"/images-discover-game/subnautica-2/subnautica-2-3.jpg\", \"/images-discover-game/subnautica-2/subnautica-2-4.jpg\", \"/images-discover-game/subnautica-2/subnautica-2-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(49, 'jurassic-world-3', 'Jurassic World: Evolution 3', '/game-covers/jurassic-world-3.jpg', 'Frontier Developments', 'Frontier Developments', '2022-01-01', 'Jurassic World: Evolution 3 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/jurassic-world-3/video.mp4\", \"/images-discover-game/jurassic-world-3/jurassic-world-3-1.jpg\", \"/images-discover-game/jurassic-world-3/jurassic-world-3-2.jpg\", \"/images-discover-game/jurassic-world-3/jurassic-world-3-3.jpg\", \"/images-discover-game/jurassic-world-3/jurassic-world-3-4.jpg\", \"/images-discover-game/jurassic-world-3/jurassic-world-3-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(50, 'the-hundred-line-last-defense-academy', 'The Hundred: Line Last Defense Academy', '/now-on/the-hundred-line-last-defense-academy.png', 'Square Enix', 'Square Enix', '2022-01-01', 'The Hundred description...', '{}', '[\"/video-for-discover-game/the-hundred-line-last-defense-academy/video.mp4\", \"/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-1.jpg\", \"/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-2.jpg\", \"/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-3.jpg\", \"/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-4.jpg\", \"/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(51, 'kingdom-come-deliverance-ii', 'Kingdom Come: Deliverance II', '/now-on/kingdom-come-deliverance-ii.png', 'The Fun Pimps', 'The Fun Pimps', '2022-01-01', 'Kingdom Come: Deliverance II description...', '{}', '[\"/video-for-discover-game/kingdom-come-deliverance-ii/video.mp4\", \"/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-1.jpg\", \"/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-2.jpg\", \"/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-3.jpg\", \"/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-4.jpg\", \"/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(52, 'kingdom-hearts-iii', 'KINGDOM HEARTS III + Re Mind', '/new-releases-list/kh3.png', 'Square Enix', 'Square Enix', '2025-01-01', 'Description for KINGDOM HEARTS III...', '{}', '[\"/new-releases-list/kh3.png\"]', NULL, NULL, NULL, NULL, NULL),
(53, 'lies-of-p', 'Lies of P', '/top-new-releases/lies-of-p.png', '', '', '2022-01-01', 'Lies of P is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}}', '[\"/video-for-discover-game/lies-of-p/video.mp4\", \"/images-discover-game/lies-of-p/lies-of-p-1.jpg\", \"/images-discover-game/lies-of-p/lies-of-p-2.jpg\", \"/images-discover-game/lies-of-p/lies-of-p-3.jpg\", \"/images-discover-game/lies-of-p/lies-of-p-4.jpg\", \"/images-discover-game/lies-of-p/lies-of-p-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(54, 'the-hunter-call-of-the-wild', 'The Hunter: Call of the Wild', '/top-new-releases/the-hunter-call-of-the-wild.png', 'Expansive Worlds', 'Avalanche Studios', '2022-01-01', 'The Hunter: Call of the Wild is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K\"}, \"recommended\": {\"os\": \"Windows 10/11\"}}', '[\"/video-for-discover-game/the-hunter-call-of-the-wild/video.mp4\", \"/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-1.jpg\", \"/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-2.jpg\", \"/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-3.jpg\", \"/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-4.jpg\", \"/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(55, 'the-midnight-walkers', 'The Midnight Walkers', '/game-covers/the-midnight-walkers.png', 'Oneway Ticket Studio', 'Oneway Ticket Studio', '2022-01-01', 'The Midnight Walkers is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/the-midnight-walkers/video.mp4\", \"/images-discover-game/the-midnight-walkers/the-midnight-walkers-1.jpg\", \"/images-discover-game/the-midnight-walkers/the-midnight-walkers-2.jpg\", \"/images-discover-game/the-midnight-walkers/the-midnight-walkers-3.jpg\", \"/images-discover-game/the-midnight-walkers/the-midnight-walkers-4.jpg\", \"/images-discover-game/the-midnight-walkers/the-midnight-walkers-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(56, 'lords-of-the-fallen-ii', 'Lords of the Fallen II', '/top-new-releases/lords-of-the-fallen-ii.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Lords of the Fallen II is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"memory\": \"8 GB RAM\"}}', '[\"/video-for-discover-game/lords-of-the-fallen-ii/video.mp4\", \"/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-1.jpg\", \"/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-2.jpg\", \"/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-3.jpg\", \"/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-4.jpg\", \"/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(57, 'the-wolf-among-us-2', 'The Wolf Among Us 2', '/trending/the-wolf-among-us-2.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'The Wolf Among Us 2 description...', '{\"minimum\": {\"os\": \"Windows 10/11\"}, \"recommended\": {\"os\": \"Windows 10/11\"}}', '{\"video\": null, \"images\": [\"/video-for-discover-game/the-wolf-among-us-2/video.mp4\", \"/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-1.jpg\", \"/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-2.jpg\", \"/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-3.jpg\", \"/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-4.jpg\", \"/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-5.jpg\"]}', NULL, NULL, NULL, NULL, NULL),
(58, 'titanfall-2', 'Titanfall 2', '/new-releases-list/titanfall2.png', 'Respawn Entertainment', 'Electronic Arts', '2025-01-01', 'Description for Titanfall 2...', '{}', '[\"/new-releases-list/titanfall2.png\"]', NULL, NULL, NULL, NULL, NULL),
(59, 'lost-ember', 'Lost Ember: Rekindled', '/new-releases-list/lostember.png', 'Mooneye Studios', 'Mooneye Studios', '2025-11-27', 'Description for Lost Ember...', '{}', '[\"/new-releases-list/lostember.png\"]', NULL, NULL, NULL, NULL, NULL),
(60, 'vampire-the-masquerade', 'Vampire: The Masquerade', '/epic-form-epic-first-run/vampire-the-masquerade.jpg', 'Expansive Worlds', 'Avalanche Studios', '2022-01-01', 'Vampire: The Masquerade description...', '{\"minimum\": {\"os\": \"\", \"cpu\": \"\", \"gpu\": \"\", \"memory\": \"\", \"storage\": \"\"}, \"recommended\": {\"os\": \"\", \"cpu\": \"\", \"gpu\": \"\", \"memory\": \"\", \"storage\": \"\"}}', '{\"video\": null, \"images\": [\"/video-for-discover-game/vampire-the-masquerade/video.mp4\", \"/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-1.jpg\", \"/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-2.jpg\", \"/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-3.jpg\", \"/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-4.jpg\", \"/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-5.jpg\"]}', NULL, NULL, NULL, NULL, NULL),
(61, 'marvel-rivals', 'MARVEL RIVALS', '/images/marvel-rivals.jpg', 'Marvel Rivals', 'Marvel Rivals', '2022-01-01', 'THE SURFACE IS CALLING. YOUR ADVENTURE STARTS NOW.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/images/marvel-rivals.jpg\", \"/images/marvel-rivals.jpg\", \"/images/marvel-rivals.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(62, 'when-the-past-was-around', 'When the Past Was Around', '/top-new-releases/when-the-past-was-around.png', 'Mojiken', 'Toge Production', '2022-01-01', 'When the Past Was Around is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\"}}', '[\"/video-for-discover-game/when-the-past-was-around/video.mp4\", \"/images-discover-game/when-the-past-was-around/when-the-past-was-around-1.jpg\", \"/images-discover-game/when-the-past-was-around/when-the-past-was-around-2.jpg\", \"/images-discover-game/when-the-past-was-around/when-the-past-was-around-3.jpg\", \"/images-discover-game/when-the-past-was-around/when-the-past-was-around-4.jpg\", \"/images-discover-game/when-the-past-was-around/when-the-past-was-around-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(63, 'monster-hunter-wilds', 'Monster Hunter: Wilds', '/now-on/monster-hunter-wilds.png', 'Square Enix', 'Square Enix', '2022-01-01', 'Monster Hunter: Wilds description...', '{}', '[\"/video-for-discover-game/monster-hunter-wilds/video.mp4\", \"/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-1.jpg\", \"/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-2.jpg\", \"/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-3.jpg\", \"/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-4.jpg\", \"/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(64, 'mouse-p-i-for-hire', 'Mouse: P.I. for Hire', '/game-covers/mouse-p-i-for-hire.png', 'Fumi Games', 'PlaySide', '2022-01-01', 'Join private investigator Jack Pepper on a guns blazing, jazz-fueled adventure in MOUSE: P.I. For Hire.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/mouse-p-i-for-hire/video.mp4\", \"/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-1.jpg\", \"/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-2.jpg\", \"/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-3.jpg\", \"/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-4.jpg\", \"/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-5.jpg\", \"/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-6.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(65, 'where-winds-meet-main', 'WHERE WINDS MEET', '/images/where-winds-meet.png', 'Where Winds Meet', 'Where Winds Meet', '2022-01-01', 'Write your own Wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.', '{\"minimum\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}, \"recommended\": {\"os\": \"Windows 10/11\", \"cpu\": \"Intel Core i5-6600K or AMD Ryzen 5 1600\", \"gpu\": \"NVIDIA GeForce GTX 1060 or AMD Radeon RX 580\", \"memory\": \"8 GB RAM\", \"storage\": \"50 GB available space\"}}', '[\"/video-for-discover-game/where-winds-meet-main/video.mp4\", \"/images-discover-game/where-winds-meet-main/where-winds-meet-main-1.jpg\", \"/images-discover-game/where-winds-meet-main/where-winds-meet-main-2.jpg\", \"/images-discover-game/where-winds-meet-main/where-winds-meet-main-3.jpg\", \"/images-discover-game/where-winds-meet-main/where-winds-meet-main-4.jpg\", \"/images-discover-game/where-winds-meet-main/where-winds-meet-main-5.jpg\"]', NULL, NULL, NULL, NULL, NULL),
(72, 'f1-25', 'F1® 25', 'https://res.cloudinary.com/dzwpfwvyc/image/upload/v1767810026/hvesvxxlg2of1eyufk19.jpg', 'Codemasters', ' Electronic Arts', '2025-01-30', 'Leave your mark on the world of racing in F1® 25, the official video game of the 2025 FIA Formula One World Championship™, featuring a revamped My Team mode, the thrilling third chapter of Braking Point, and more!', '{\"minimum\": {\"os\": \"Windows 10 64-bit Version 21H1 or newer\", \"cpu\": \" Intel Core i5-6400 | Core i5-9600k\", \"gpu\": \"NVIDIA GTX 1060 (6GB) | GTX 1660Ti\", \"memory\": \"8 GB RAM\", \"storage\": \"100 GB available space\"}, \"recommended\": {\"os\": \" Windows 10 64-bit Version 21H1 or newer\", \"cpu\": \" Intel Core i5-9600k or AMD Ryzen 5 2600X\", \"gpu\": \" NVIDIA RTX 2070 (+VR) | RTX 3070 (RT)\", \"memory\": \"16 GB RAM\", \"storage\": \"100 GB available space\"}}', '{\"video\": \"https://res.cloudinary.com/dzwpfwvyc/video/upload/v1767810098/mk8efronst7f51snaj2x.mp4\", \"images\": [\"https://res.cloudinary.com/dzwpfwvyc/image/upload/v1767810067/zmkvpkgatmqwvfbkuui3.jpg\", \"https://res.cloudinary.com/dzwpfwvyc/image/upload/v1767810072/sqyipypd6ie1xiosjacg.jpg\", \"https://res.cloudinary.com/dzwpfwvyc/image/upload/v1767810075/snqcemswyqi7ibosioxj.jpg\", \"https://res.cloudinary.com/dzwpfwvyc/image/upload/v1767810078/ci2cfrz281awsayb8zxf.jpg\", \"https://res.cloudinary.com/dzwpfwvyc/image/upload/v1767810081/d2cbys9teumrtt8snqys.jpg\"]}', NULL, NULL, '₫499,500', '₫999,000', '-50%');

-- --------------------------------------------------------

--
-- Table structure for table `hero_banners`
--

CREATE TABLE `hero_banners` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `date_text` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_text` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_wishlist` tinyint(1) DEFAULT '0',
  `show_preview` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hero_banners`
--

INSERT INTO `hero_banners` (`id`, `game_id`, `title`, `slug`, `description`, `date_text`, `button_text`, `image_url`, `logo_url`, `show_wishlist`, `show_preview`) VALUES
('hb-1', '65', 'WHERE WINDS MEET', 'where-winds-meet-main', 'Write your own Wuxia legend...', 'OUT NOW', 'Save Now', '/images/where-winds-meet.png', '/logos/where-winds-meet.png', 1, 0),
('hb-2', '3', 'ARC RAIDERS', 'arc-raiders', 'THE SURFACE IS CALLING...', 'AVAILABLE NOW', 'Buy Now', '/images/arc-raiders.jpg', '/logos/arc-raiders.png', 0, 1),
('hb-3', '61', 'MARVEL RIVALS', 'marvel-rivals', 'THE SURFACE IS CALLING...', 'AVAILABLE NOW', 'Buy Now', '/images/marvel-rivals.jpg', '/logos/marvel-rivals.jpg', 0, 1),
('hb-4', '29', 'CRONOS THE NEW DAWN', 'cronos-the-new-dawn', 'A whole new breed of survival horror...', 'AVAILABLE NOW', 'Buy Now', '/images/cronos-the-new-dawn.jpg', '/logos/cronos-the-new-dawn.png', 0, 1),
('hb-5', '1', 'ANNO 117: PAX ROMANA', 'anno-117-pax-romana', 'The world is on the brink...', 'AVAILABLE NOW', 'Buy Now', '/images/anno-117-pax-romana.jpg', '/logos/anno-117-pax-romana.png', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `most_played`
--

CREATE TABLE `most_played` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `most_played`
--

INSERT INTO `most_played` (`id`, `title`, `slug`, `image`, `price`) VALUES
(1, 'Fortnite', 'fortnite', '/thumbnails/fortnite.png', 'Free'),
(2, 'Rocket League®', 'rocket-league', '/thumbnails/rocket-league.png', 'Free'),
(3, 'Grand Theft Auto V Enhanced', 'gta-v', '/thumbnails/gta5.png', '₫683,000'),
(4, 'Genshin Impact', 'genshin-impact', '/thumbnails/genshin.png', 'Free'),
(5, 'Crosshair X', 'crosshair-x', '/thumbnails/crosshair.png', '₫52,000');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_text` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `date`, `description`, `image_url`, `button_text`) VALUES
('call-of-duty-black', 'Call of Duty: Black Ops 7', '2025-11-20', 'Call of Duty: Black Ops 7 is a new game...', '/new/call-of-duty-black.jpg', 'See In Shop'),
('diablo-iv', 'Diablo IV', '2025-11-20', 'Diablo IV is a new game...', '/new/diablo-iv.jpg', 'See In Shop'),
('dispatch', 'Dispatch', '2025-11-20', 'Dispatch is a new game...', '/new/dispatch.jpg', 'See In Shop');

-- --------------------------------------------------------

--
-- Table structure for table `new_releases`
--

CREATE TABLE `new_releases` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `new_releases`
--

INSERT INTO `new_releases` (`id`, `title`, `slug`, `image`, `badge`, `price`, `discount`, `original_price`) VALUES
(1, 'INAZUMA ELEVEN: Victory Road', 'inazuma-eleven-victory-road', '/new-releases-list/inazuma.jpg', 'Now On Epic', '₫1,200,000', NULL, NULL),
(2, 'Constance', 'constance', '/new-releases-list/constance.png', 'Now On Epic', 'Free', NULL, NULL),
(3, 'Dispatch', 'dispatch', '/new-releases-list/dispatch.jpg', NULL, '₫300,000', NULL, NULL),
(4, 'DOOM: The Dark Ages', 'doom-the-dark-ages', '/new-releases-list/doom.png', 'Now On Epic', '₫1,200,000', NULL, NULL),
(5, 'Mouthwashing', 'mouthwashing', '/new-releases-list/mouthwashing.png', 'Now On Epic', 'Free', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `now_on`
--

CREATE TABLE `now_on` (
  `id` int NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `now_on`
--

INSERT INTO `now_on` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `original_price`, `discount`, `logo_url`) VALUES
(1, '8', 'baldurs-gate-3', 'Baldur\'\'s Gate 3', 'Description...', '/now-on/baldurs-gate-3.png', 'Base Game', '₫414,000', NULL, NULL, '/logos/baldurs-gate-3.png'),
(2, '12', 'dead-island-2', 'Dead Island 2', 'Description...', '/now-on/dead-island-2.png', 'Base Game', '₫414,000', NULL, NULL, '/logos/dead-island-2.png'),
(3, '31', 'final-fantasy-xvi', 'Final Fantasy XVI', 'Description...', '/now-on/final-fantasy-xvi.png', 'Base Game', '₫1,249,000', NULL, NULL, '/logos/final-fantasy-xvi.png'),
(4, '39', 'hades-ii', 'Hades II', 'Description...', '/now-on/hades-ii.png', 'Base Game', '₫414,000', NULL, NULL, '/logos/hades-ii.png'),
(5, '51', 'kingdom-come-deliverance-ii', 'Kingdom Come: Deliverance II', 'Description...', '/now-on/kingdom-come-deliverance-ii.png', 'Base Game', '₫499,500', NULL, NULL, '/logos/kingdom-come-deliverance-ii.png'),
(6, '63', 'monster-hunter-wilds', 'Monster Hunter: Wilds', 'Description...', '/now-on/monster-hunter-wilds.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/monster-hunter-wilds.png'),
(7, '18', 'persona-3-reloaded', 'Persona 3 Reloaded', 'Description...', '/now-on/persona-3-reloaded.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/persona-3-reloaded.png'),
(8, '19', 'persona-5-royal', 'Persona 5 Royal', 'Description...', '/now-on/persona-5-royal.png', 'Base Game', '₫414,000', NULL, NULL, '/logos/persona-5-royal.png'),
(9, '23', 'red-dead-redemption-2', 'Red Dead Redemption 2', 'Description...', '/now-on/red-dead-redemption-2.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/red-dead-redemption-2.png'),
(10, '50', 'the-hundred-line-last-defense-academy', 'The Hundred: Line Last Defense Academy', 'Description...', '/now-on/the-hundred-line-last-defense-academy.png', 'Base Game', 'Coming soon', NULL, NULL, '/logos/the-hundred-line-last-defense-academy.png');

-- --------------------------------------------------------

--
-- Table structure for table `promos_items`
--

CREATE TABLE `promos_items` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('game','promo') COLLATE utf8mb4_unicode_ci DEFAULT 'promo',
  `description` text COLLATE utf8mb4_unicode_ci,
  `button_text` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `promos_items`
--

INSERT INTO `promos_items` (`id`, `title`, `image_url`, `type`, `description`, `button_text`) VALUES
('free-game-week', 'Free Game of the Week', '/promos/free-game.png', 'promo', 'Claim your free game now...', 'Claim Now'),
('holiday-sale-2025', 'Holiday Sale 2025', '/promos/holiday-sale.png', 'promo', 'Save up to 75% on selected titles...', 'Learn More');

-- --------------------------------------------------------

--
-- Table structure for table `sidebar_games`
--

CREATE TABLE `sidebar_games` (
  `id` int NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extra_label` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sidebar_games`
--

INSERT INTO `sidebar_games` (`id`, `game_id`, `title`, `extra_label`, `thumbnail_url`) VALUES
(8, '65', 'WHERE WINDS MEET', 'Base Game', '/thumbnails/where-winds-meet.png'),
(9, '3', 'ARC RAIDERS', 'Base Game', '/thumbnails/arc-raiders.png'),
(10, '61', 'MARVEL RIVALS', 'Base Game', '/thumbnails/marvel-rivals.jpg'),
(11, '29', 'CRONOS THE NEW DAWN', 'Base Game', '/thumbnails/cronos-the-new-dawn.png'),
(12, '1', 'ANNO 117: PAX ROMANA', 'Base Game', '/thumbnails/anno-117-pax-romana.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `store_promotions`
--

CREATE TABLE `store_promotions` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `button_text` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `store_promotions`
--

INSERT INTO `store_promotions` (`id`, `title`, `description`, `button_text`, `image`) VALUES
('apps', 'Apps', 'Enjoy some of the best Apps...', 'Browse', '/store-promotions/apps.png'),
('free-games', 'Free Games', 'Explore free and free-to-play games...', 'Play Now', '/store-promotions/free-games.png'),
('sales-specials', 'Sales & Specials', 'Save big on hit titles...', 'Browse', '/store-promotions/sales-specials.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `top_add_ons`
--

CREATE TABLE `top_add_ons` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `top_add_ons`
--

INSERT INTO `top_add_ons` (`id`, `title`, `slug`, `image`, `price`, `badge`) VALUES
(1, 'INAZUMA ELEVEN: Victory Road', 'inazuma-eleven', '/new-releases-list/inazuma.jpg', '₫1,200,000', 'Now On Epic'),
(2, 'Constance', 'constance', '/new-releases-list/constance.png', 'Free', 'Now On Epic'),
(3, 'Dispatch', 'dispatch', '/new-releases-list/dispatch.jpg', '₫300,000', NULL),
(4, 'DOOM: The Dark Ages', 'doom-the-dark-ages', '/new-releases-list/doom.png', '₫1,200,000', 'Now On Epic'),
(5, 'Mouthwashing', 'mouthwashing', '/new-releases-list/mouthwashing.png', 'Free', 'Now On Epic');

-- --------------------------------------------------------

--
-- Table structure for table `top_demos`
--

CREATE TABLE `top_demos` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `availability` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `top_demos`
--

INSERT INTO `top_demos` (`id`, `title`, `slug`, `image`, `availability`, `price`) VALUES
(1, 'Project Motor Racing', 'project-motor-racing', '/new-releases-list/motor.png', 'Available 11/25/25', '₫860,000'),
(2, 'Subnautica 2', 'subnautica-2', '/new-releases-list/subnautica2.png', 'Available 11/26/25', NULL),
(3, 'Slay the Spire 2', 'slay-the-spire-2', '/new-releases-list/slay.jpg', 'Available 11/27/25', NULL),
(4, 'Lost Ember: Rekindled', 'lost-ember', '/new-releases-list/lostember.png', 'Available 11/27/25', NULL),
(5, 'PUBG: BLINDSPOT', 'pubg-blindspot', '/new-releases-list/blur.png', 'Available Nov 2025', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `top_free_to_play`
--

CREATE TABLE `top_free_to_play` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `top_free_to_play`
--

INSERT INTO `top_free_to_play` (`id`, `title`, `slug`, `image`, `price`, `original_price`, `discount`) VALUES
(1, 'KINGDOM HEARTS III', 'kingdom-hearts-iii', '/new-releases-list/kh3.png', '₫1,250,000', NULL, NULL),
(2, 'Goat Simulator 3', 'goat-simulator-3', '/new-releases-list/goat3.png', '₫154,000', '₫385,000', '-60%'),
(3, 'Hades II', 'hades-ii', '/new-releases-list/hades2.jpg', '₫385,000', NULL, NULL),
(4, 'Clair Obscur', 'clair-obscur', '/new-releases-list/clair.png', '₫770,000', NULL, NULL),
(5, 'Titanfall 2', 'titanfall-2', '/new-releases-list/titanfall2.png', '₫105,000', '₫700,000', '-85%');

-- --------------------------------------------------------

--
-- Table structure for table `top_new_releases`
--

CREATE TABLE `top_new_releases` (
  `id` int NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `top_new_releases`
--

INSERT INTO `top_new_releases` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `original_price`, `discount`, `logo_url`) VALUES
(1, '5', 'assassins-creed-valhalla', 'Assassin\'\'s Creed Valhalla', 'Description...', '/top-new-releases/assassins-creed-valhalla.png', 'Base Game', '₫599,900', NULL, '55%', '/logos/assassins-creed-valhalla.png'),
(2, '26', 'celeste', 'Celeste', 'Description...', '/top-new-releases/celeste.png', 'Base Game', '₫299,900', NULL, '50%', '/logos/celeste.png'),
(3, '9', 'crystal-of-atlantean', 'Crystal of Atlantean', 'Description...', '/top-new-releases/crystal-of-atlantean.png', 'Base Game', 'Free', NULL, '', '/logos/crystal-of-atlantean.png'),
(4, '32', 'florence', 'Florence', 'Description...', '/top-new-releases/florence.png', 'Base Game', 'Free', NULL, '', '/logos/florence.png'),
(5, '53', 'lies-of-p', 'Lies of P', 'Description...', '/top-new-releases/lies-of-p.png', 'Base Game', '₫599,900', NULL, '55%', '/logos/lies-of-p.png'),
(6, '56', 'lords-of-the-fallen-ii', 'Lords of the Fallen II', 'Description...', '/top-new-releases/lords-of-the-fallen-ii.png', 'Base Game', 'Coming soon', NULL, '', '/logos/lords-of-the-fallen.png'),
(7, '43', 'rusty-lake-hotel', 'Rusty Lake Hotel', 'Description...', '/top-new-releases/rusty-lake-hotel.png', 'Base Game', '₫129,900', NULL, '70%', '/logos/rusty-lake-hotel.png'),
(8, '46', 'stray', 'Stray', 'Description...', '/top-new-releases/stray.jpg', 'Base Game', '₫227.500', NULL, '-40%', '/logos/stray.png'),
(9, '54', 'the-hunter-call-of-the-wild', 'The Hunter: Call of the Wild', 'Description...', '/top-new-releases/the-hunter-call-of-the-wild.png', 'Base Game', '₫26,000', NULL, '-90%', '/logos/the-hunter-call-of-the-wild.png'),
(10, '62', 'when-the-past-was-around', 'When the Past Was Around', 'Description...', '/top-new-releases/when-the-past-was-around.png', 'Base Game', '₫69,900', NULL, '50%', '/logos/when-the-past-was-around.png');

-- --------------------------------------------------------

--
-- Table structure for table `top_rated`
--

CREATE TABLE `top_rated` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `top_rated`
--

INSERT INTO `top_rated` (`id`, `title`, `slug`, `image`, `discount`, `original_price`, `price`) VALUES
(1, 'KINGDOM HEARTS III + Re Mind...', 'kingdom-hearts-iii', '/new-releases-list/kh3.png', NULL, NULL, '₫1,250,000'),
(2, 'Goat Simulator 3', 'goat-simulator-3', '/new-releases-list/goat3.png', '-60%', '₫385,000', '₫154,000'),
(3, 'Hades II', 'hades-ii', '/new-releases-list/hades2.jpg', NULL, NULL, '₫385,000'),
(4, 'Clair Obscur: Expedition 33', 'clair-obscur', '/new-releases-list/clair.png', NULL, NULL, '₫770,000'),
(5, 'Titanfall® 2: Ultimate Edition', 'titanfall-2', '/new-releases-list/titanfall2.png', '-85%', '₫700,000', '₫105,000');

-- --------------------------------------------------------

--
-- Table structure for table `top_sellers`
--

CREATE TABLE `top_sellers` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `top_sellers`
--

INSERT INTO `top_sellers` (`id`, `title`, `slug`, `image`, `price`) VALUES
(1, 'ARC RAIDERS', 'arc-raiders', '/thumbnails/arc-raiders.png', '₫745,944'),
(2, 'Cyberpunk 2077', 'cyberpunk-2077', '/thumbnails/cyberpunk.png', '₫971,000'),
(3, 'Battlefield™ 6', 'battlefield-6', '/thumbnails/battlefield.png', '₫1,299,000'),
(4, 'Red Dead Redemption 2', 'red-dead-redemption-2', '/thumbnails/red-dead-redemption-2.png', '₫1,359,000'),
(5, 'REMATCH', 'rematch', '/thumbnails/rematch.png', '₫385,000');

-- --------------------------------------------------------

--
-- Table structure for table `top_upcoming`
--

CREATE TABLE `top_upcoming` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `availability` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `top_upcoming`
--

INSERT INTO `top_upcoming` (`id`, `title`, `slug`, `availability`, `image`, `price`) VALUES
(1, 'Subnautica 2', 'subnautica-2', 'Coming Soon', '/thumbnails/subnautica2.png', NULL),
(2, 'Hogwarts Legacy', 'hogwarts-legacy', NULL, '/thumbnails/hogwarts-legacy.jpg', '₫1.299.000'),
(3, 'Split Fiction', 'split-fiction', 'Coming Soon', '/thumbnails/split-fiction.png', NULL),
(4, 'Jurassic Park: Survival', 'jurassic-park-survival', 'Coming Soon', '/thumbnails/jurassic.png', NULL),
(5, 'Resident Evil Requiem', 'resident-evil-requiem', 'Available 02/27/26', '/thumbnails/re.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trending_items`
--

CREATE TABLE `trending_items` (
  `id` int NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_price` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trending_items`
--

INSERT INTO `trending_items` (`id`, `game_id`, `title`, `slug`, `description`, `image_url`, `category`, `price`, `original_price`, `discount`, `logo_url`) VALUES
(1, '4', 'Arknights Endfield', 'arknights-endfield', 'Arknights Endfield...', '/trending/arknights-endfield.png', 'Base Game', 'Coming soon', NULL, '', '/logos/arknights-endfield.png'),
(2, '5', 'Assassin\'\'s Creed Valhalla', 'assassins-creed-valhalla', 'Assassin\'\'s Creed Valhalla...', '/trending/assassins-creed-valhalla.png', 'Base Game', '₫599,900', NULL, '55%', '/logos/assassins-creed-valhalla.png'),
(3, '56', 'Lords of the Fallen II', 'lords-of-the-fallen-ii', 'Lords of the Fallen II...', '/top-new-releases/lords-of-the-fallen-ii.png', 'Base Game', 'Coming soon', NULL, '', '/logos/lords-of-the-fallen.png'),
(4, '57', 'The Wolf Among Us 2', 'the-wolf-among-us-2', 'The Wolf Among Us 2...', '/trending/the-wolf-among-us-2.png', 'Base Game', 'Coming soon', '', '', '/logos/the-wolf-among-us-2.png'),
(5, '67', 'Delete Me', 'delete-me', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` timestamp NULL DEFAULT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT '0',
  `verification_code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `verification_expires` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_library`
--

CREATE TABLE `user_library` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchase_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `game_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `added_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_email` (`email`);

--
-- Indexes for table `coming_soon`
--
ALTER TABLE `coming_soon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deal_items`
--
ALTER TABLE `deal_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discover_items`
--
ALTER TABLE `discover_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `epic_first_run`
--
ALTER TABLE `epic_first_run`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `featured_game_banner`
--
ALTER TABLE `featured_game_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `free_items`
--
ALTER TABLE `free_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hero_banners`
--
ALTER TABLE `hero_banners`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_hero_games` (`game_id`);

--
-- Indexes for table `most_played`
--
ALTER TABLE `most_played`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_releases`
--
ALTER TABLE `new_releases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `now_on`
--
ALTER TABLE `now_on`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promos_items`
--
ALTER TABLE `promos_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sidebar_games`
--
ALTER TABLE `sidebar_games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sidebar_games_fk` (`game_id`);

--
-- Indexes for table `store_promotions`
--
ALTER TABLE `store_promotions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_add_ons`
--
ALTER TABLE `top_add_ons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_demos`
--
ALTER TABLE `top_demos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_free_to_play`
--
ALTER TABLE `top_free_to_play`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_new_releases`
--
ALTER TABLE `top_new_releases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_rated`
--
ALTER TABLE `top_rated`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_sellers`
--
ALTER TABLE `top_sellers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_upcoming`
--
ALTER TABLE `top_upcoming`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trending_items`
--
ALTER TABLE `trending_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `google_id` (`google_id`);

--
-- Indexes for table `user_library`
--
ALTER TABLE `user_library`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_ownership` (`user_id`,`game_id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_wishlist` (`user_id`,`game_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `discover_items`
--
ALTER TABLE `discover_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `epic_first_run`
--
ALTER TABLE `epic_first_run`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `now_on`
--
ALTER TABLE `now_on`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `sidebar_games`
--
ALTER TABLE `sidebar_games`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `top_new_releases`
--
ALTER TABLE `top_new_releases`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `trending_items`
--
ALTER TABLE `trending_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_library`
--
ALTER TABLE `user_library`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_library`
--
ALTER TABLE `user_library`
  ADD CONSTRAINT `user_library_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
