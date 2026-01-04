CREATE DATABASE IF NOT EXISTS game_data;
USE game_data;

-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 03, 2026 at 06:15 AM
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
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
CREATE TABLE `games` (
  `id` varchar(100) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `hero_image` varchar(255) DEFAULT NULL,
  `developer` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `release_date` varchar(50) DEFAULT NULL,
  `description` text,
  `specs_json` json DEFAULT NULL,
  `gallery_json` json DEFAULT NULL,
  `login_accounts` text,
  `languages_json` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `slug`, `title`, `hero_image`, `developer`, `publisher`, `release_date`, `description`, `specs_json`, `gallery_json`, `login_accounts`, `languages_json`) VALUES
('where-winds-meet', 'where-winds-meet-main', 'WHERE WINDS MEET', '/images/where-winds-meet.png', 'Where Winds Meet', 'Where Winds Meet', '2022-01-01', 'Write your own Wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/images/where-winds-meet.png", "/images/where-winds-meet.png", "/images/where-winds-meet.png"]', NULL, NULL),
('arc-raiders', 'arc-raiders', 'ARC RAIDERS', '/images/arc-raiders.jpg', 'Embark Studios', 'Embark Studios', '2022-01-01', 'ARC Raiders is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/arc-raiders/video.mp4", "/images-discover-game/arc-raiders/arc-raiders-1.jpg", "/images-discover-game/arc-raiders/arc-raiders-2.jpg", "/images-discover-game/arc-raiders/arc-raiders-3.jpg", "/images-discover-game/arc-raiders/arc-raiders-4.jpg", "/images-discover-game/arc-raiders/arc-raiders-5.jpg"]', NULL, NULL),
('marvel-rivals', 'marvel-rivals', 'MARVEL RIVALS', '/images/marvel-rivals.jpg', 'Marvel Rivals', 'Marvel Rivals', '2022-01-01', 'THE SURFACE IS CALLING. YOUR ADVENTURE STARTS NOW.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/images/marvel-rivals.jpg", "/images/marvel-rivals.jpg", "/images/marvel-rivals.jpg"]', NULL, NULL),
('cronos-the-new-dawn', 'cronos-the-new-dawn', 'CRONOS THE NEW DAWN', '/images/cronos-the-new-dawn.jpg', 'Cronos The New Dawn', 'Cronos The New Dawn', '2022-01-01', 'A whole new breed of survival horror emerges with Cronos: The New Dawn.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/images/cronos-the-new-dawn.jpg", "/images/cronos-the-new-dawn.jpg", "/images/cronos-the-new-dawn.jpg"]', NULL, NULL),
('anno-117-pax-romana', 'anno-117-pax-romana', 'ANNO 117: PAX ROMANA', '/images/anno-117-pax-romana.jpg', 'Anno 117: Pax Romana', 'Anno 117: Pax Romana', '2022-01-01', 'The world is on the brink of collapse. Only you can save it.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/images/anno-117-pax-romana.jpg", "/images/anno-117-pax-romana.jpg", "/images/anno-117-pax-romana.jpg"]', NULL, NULL),
('mouse-p-i-for-hire', 'mouse-p-i-for-hire', 'Mouse: P.I. for Hire', '/images/mouse-p-i-for-hire.png', 'Fumi Games', 'PlaySide', '2022-01-01', 'Join private investigator Jack Pepper on a guns blazing, jazz-fueled adventure in MOUSE: P.I. For Hire.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/mouse-p-i-for-hire/video.mp4", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-1.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-2.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-3.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-4.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-5.jpg"]', NULL, NULL),
('jurassic-world-3', 'jurassic-world-3', 'Jurassic World: Evolution 3', '/images/jurassic-world-3.png', 'Frontier Developments', 'Frontier Developments', '2022-01-01', 'Jurassic World: Evolution 3 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/jurassic-world-3/video.mp4", "/images-discover-game/jurassic-world-3/jurassic-world-3-1.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-2.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-3.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-4.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-5.jpg"]', NULL, NULL),
('the-midnight-walkers', 'the-midnight-walkers', 'The Midnight Walkers', '/images/the-midnight-walkers.png', 'Oneway Ticket Studio', 'Oneway Ticket Studio', '2022-01-01', 'The Midnight Walkers is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/the-midnight-walkers/video.mp4", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-1.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-2.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-3.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-4.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-5.jpg"]', NULL, NULL),
('cyberpunk', 'cyberpunk-2077', 'Cyberpunk 2077', '/images/cyberpunk-2077.png', 'CD Projekt Red', 'CD Projekt Red', '2022-01-01', 'Cyberpunk 2077 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/cyberpunk-2077/video.mp4", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-1.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-2.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-3.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-4.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-5.jpg"]', NULL, NULL),
('black-ops-7', 'black-ops-7', 'Black Ops 7', '/images/black-ops-7.png', 'Treyarch', 'Activision', '2022-01-01', 'Black Ops 7 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/black-ops-7/video.mp4", "/images-discover-game/black-ops-7/black-ops-7-1.jpg", "/images-discover-game/black-ops-7/black-ops-7-2.jpg", "/images-discover-game/black-ops-7/black-ops-7-3.jpg", "/images-discover-game/black-ops-7/black-ops-7-4.jpg", "/images-discover-game/black-ops-7/black-ops-7-5.jpg"]', NULL, NULL),
('dying-light-the-beast', 'dying-light-the-beast', 'Dying Light: The Beast', '/images/dying-light-the-beast.png', 'Techland', 'Techland', '2022-01-01', 'Dying Light: The Beast is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/dying-light-the-beast/video.mp4", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-1.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-2.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-3.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-4.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-5.jpg"]', NULL, NULL),
('resident-evil-requiem', 'resident-evil-requiem', 'Resident Evil Requiem', '/images/resident-evil-requiem.png', 'Capcom', 'Capcom', '2022-01-01', 'Resident Evil Requiem is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/resident-evil-requiem/video.mp4", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-1.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-2.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-3.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-4.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-5.jpg"]', NULL, NULL),
('subnautica-2', 'subnautica-2', 'Subnautica 2', '/images/subnautica-2.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Subnautica 2 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}}', '["/video-for-discover-game/subnautica-2/video.mp4", "/images-discover-game/subnautica-2/subnautica-2-1.jpg", "/images-discover-game/subnautica-2/subnautica-2-2.jpg", "/images-discover-game/subnautica-2/subnautica-2-3.jpg", "/images-discover-game/subnautica-2/subnautica-2-4.jpg", "/images-discover-game/subnautica-2/subnautica-2-5.jpg"]', NULL, NULL),
('lords-of-the-fallen-ii', 'lords-of-the-fallen-ii', 'Lords of the Fallen II', '/images/lords-of-the-fallen-ii.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Lords of the Fallen II is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM"}}', '["/video-for-discover-game/lords-of-the-fallen-ii/video.mp4", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-1.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-2.jpg"]', NULL, NULL),
('lies-of-p', 'lies-of-p', 'Lies of P', '/images/lies-of-p.png', '', '', '2022-01-01', 'Lies of P is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}}', '["/video-for-discover-game/lies-of-p/video.mp4", "/images-discover-game/lies-of-p/lies-of-p-1.jpg", "/images-discover-game/lies-of-p/lies-of-p-2.jpg"]', NULL, NULL),
('assassins-creed-valhalla', 'assassins-creed-valhalla', 'Assassin''s Creed Valhalla', '/images/assassins-creed-valhalla.png', 'Ubisoft', 'Ubisoft', '2022-01-01', 'Assassin''s Creed Valhalla is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}}', '["/video-for-discover-game/assassins-creed-valhalla/video.mp4", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-1.jpg"]', NULL, NULL),
('crystal-of-atlantean', 'crystal-of-atlantean', 'Crystal of Atlantean', '/images/crystal-of-atlantean.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Crystal of Atlantean is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}}', '["/video-for-discover-game/crystal-of-atlantean/video.mp4", "/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-1.jpg"]', NULL, NULL),
('celeste', 'celeste', 'Celeste', '/images/celeste.png', 'Maddy Makes Games Inc.', 'Maddy Makes Games Inc.', '2022-01-01', 'Celeste is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}}', '["/video-for-discover-game/celeste/video.mp4", "/images-discover-game/celeste/celeste-1.jpg"]', NULL, NULL),
('rusty-lake-hotel', 'rusty-lake-hotel', 'Rusty Lake Hotel', '/images/rusty-lake-hotel.png', 'Rusty Lake', 'Rusty Lake', '2025-12-25', 'Rusty Lake Hotel is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}}', '["/video-for-discover-game/rusty-lake-hotel/video.mp4", "/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-1.jpg"]', NULL, NULL),
('when-the-past-was-around', 'when-the-past-was-around', 'When the Past Was Around', '/images/when-the-past-was-around.png', 'Mojiken', 'Toge Production', '2022-01-01', 'When the Past Was Around is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}}', '["/video-for-discover-game/when-the-past-was-around/video.mp4"]', NULL, NULL),
('the-hunter-call-of-the-wild', 'the-hunter-call-of-the-wild', 'The Hunter: Call of the Wild', '/images/the-hunter-call-of-the-wild.png', 'Expansive Worlds', 'Avalanche Studios', '2022-01-01', 'The Hunter: Call of the Wild is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K"}, "recommended": {"os": "Windows 10/11"}}', '["/video-for-discover-game/the-hunter-call-of-the-wild/video.mp4"]', NULL, NULL),
('florence', 'florence', 'Florence', '/images/florence.png', 'Mountains', 'Annapurna Interactive', '2025-12-25', 'Florence Yeoh feels a little... stuck.', '{"minimum": {"os": "Windows 10/11"}, "recommended": {"os": "Windows 10/11"}}', '["/video-for-discover-game/florence/video.mp4"]', NULL, NULL),
('stray', 'stray', 'Stray', '/images/stray.jpg', 'BlueTwelve Studio', 'Annapurna Interactive', '2022-01-01', 'Stray is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.', '{"minimum": {"os": "Windows 10/11"}, "recommended": {"os": "Windows 10/11"}}', '["/video-for-discover-game/stray/video.mp4"]', NULL, NULL);
INSERT INTO `games` (`id`, `slug`, `title`, `hero_image`, `developer`, `publisher`, `release_date`, `description`, `specs_json`, `gallery_json`, `login_accounts`, `languages_json`) VALUES
('the-wolf-among-us-2', 'the-wolf-among-us-2', 'The Wolf Among Us 2', '/images/the-wolf-among-us-2.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'The Wolf Among Us 2 description...', '{"minimum": {"os": "Windows 10/11"}, "recommended": {"os": "Windows 10/11"}}', '["/video-for-discover-game/the-wolf-among-us-2/video.mp4"]', NULL, NULL),
('arknights-endfield', 'arknights-endfield', 'Arknights Endfield', '/images/arknights-endfield.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Arknights Endfield description...', '{}', '["/video-for-discover-game/arknights-endfield/video.mp4"]', NULL, NULL),
('hell-is-us', 'hell-is-us', 'Hell is Us', '/images/hell-is-us.png', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Hell is Us description...', '{}', '["/video-for-discover-game/hell-is-us/video.mp4"]', NULL, NULL),
('once-human', 'once-human', 'Once Human', '/images/once-human.png', 'Maddy Makes Games Inc.', 'Maddy Makes Games Inc.', '2022-01-01', 'Once Human description...', '{}', '["/video-for-discover-game/once-human/video.mp4"]', NULL, NULL),
('octopath-traveler', 'octopath-traveler', 'Octopath Traveler II', '/images/octopath-traveler.png', 'Rusty Lake', 'Rusty Lake', '2025-12-25', 'Octopath Traveler II description...', '{}', '["/video-for-discover-game/octopath-traveler/video.mp4"]', NULL, NULL),
('reanimal', 'reanimal', 'Reanimal', '/images/reanimal.png', 'Mojiken', 'Toge Production', '2022-01-01', 'Reanimal description...', '{}', '["/video-for-discover-game/reanimal/video.mp4"]', NULL, NULL),
('vampire-the-masquerade', 'vampire-the-masquerade', 'Vampire: The Masquerade', '/images/vampire-the-masquerade.png', 'Expansive Worlds', 'Avalanche Studios', '2022-01-01', 'Vampire: The Masquerade description...', '{}', '["/video-for-discover-game/vampire-the-masquerade/video.mp4"]', NULL, NULL),
('doom-the-dark-ages', 'doom-the-dark-ages', 'DOOM: The Dark Ages', '/images/doom-the-dark-ages.png', 'Mountains', 'Annapurna Interactive', '2025-12-25', 'DOOM: The Dark Ages description...', '{}', '["/video-for-discover-game/doom-the-dark-ages/video.mp4"]', NULL, NULL),
('clair-obscur', 'clair-obscur', 'Clair Obscur: Expedition 33', '/images/clair-obscur.png', 'BlueTwelve Studio', 'Annapurna Interactive', '2022-01-01', 'Clair Obscur description...', '{}', '["/video-for-discover-game/clair-obscur/video.mp4"]', NULL, NULL),
('kingdom-come-deliverance-ii', 'kingdom-come-deliverance-ii', 'Kingdom Come: Deliverance II', '/now-on/kingdom-come-deliverance-ii.png', 'The Fun Pimps', 'The Fun Pimps', '2022-01-01', 'Kingdom Come: Deliverance II description...', '{}', '["/video-for-discover-game/kingdom-come-deliverance-ii/video.mp4"]', NULL, NULL),
('persona-5-royal', 'persona-5-royal', 'Persona 5 Royal', '/now-on/persona-5-royal.png', 'Atlus', 'Sega', '2022-01-01', 'Persona 5 Royal description...', '{}', '["/video-for-discover-game/persona-5-royal/video.mp4"]', NULL, NULL),
('baldurs-gate-3', 'baldurs-gate-3', 'Baldur''s Gate 3', '/now-on/baldurs-gate-3.png', 'Larian Studios', 'CD Projekt Red', '2022-01-01', 'Baldur''s Gate 3 description...', '{}', '["/video-for-discover-game/baldurs-gate-3/video.mp4"]', NULL, NULL),
('dead-island-2', 'dead-island-2', 'Dead Island 2', '/now-on/dead-island-2.png', 'Larian Studios', 'CD Projekt Red', '2022-01-01', 'Dead Island 2 description...', '{}', '["/video-for-discover-game/dead-island-2/video.mp4"]', NULL, NULL),
('hades-ii', 'hades-ii', 'Hades II', '/now-on/hades-ii.png', 'Larian Studios', 'CD Projekt Red', '2022-01-01', 'Hades II description...', '{}', '["/video-for-discover-game/hades-ii/video.mp4"]', NULL, NULL),
('final-fantasy-xvi', 'final-fantasy-xvi', 'Final Fantasy XVI', '/now-on/final-fantasy-xvi.png', 'Square Enix', 'Square Enix', '2022-01-01', 'Final Fantasy XVI description...', '{}', '["/video-for-discover-game/final-fantasy-xvi/video.mp4"]', NULL, NULL),
('the-hundred-line-last-defense-academy', 'the-hundred-line-last-defense-academy', 'The Hundred: Line Last Defense Academy', '/now-on/the-hundred-line-last-defense-academy.png', 'Square Enix', 'Square Enix', '2022-01-01', 'The Hundred description...', '{}', '["/video-for-discover-game/the-hundred-line-last-defense-academy/video.mp4"]', NULL, NULL),
('monster-hunter-wilds', 'monster-hunter-wilds', 'Monster Hunter: Wilds', '/now-on/monster-hunter-wilds.png', 'Square Enix', 'Square Enix', '2022-01-01', 'Monster Hunter: Wilds description...', '{}', '["/video-for-discover-game/monster-hunter-wilds/video.mp4"]', NULL, NULL),
('red-dead-redemption-2', 'red-dead-redemption-2', 'Red Dead Redemption 2', '/now-on/red-dead-redemption-2.png', 'Rockstar Games', 'Rockstar Games', '2022-01-01', 'Red Dead Redemption 2 description...', '{}', '["/video-for-discover-game/red-dead-redemption-2/video.mp4"]', NULL, NULL),
('persona-3-reloaded', 'persona-3-reloaded', 'Persona 3 Reloaded', '/now-on/persona-3-reloaded.png', 'Rockstar Games', 'Rockstar Games', '2022-01-01', 'Persona 3 Reloaded description...', '{}', '["/video-for-discover-game/persona-3-reloaded/video.mp4"]', NULL, NULL),
('back-4-blood', 'back-4-blood', 'Back 4 Blood: Standard Edition', '/images/back-4-blood.jpg', 'Unknown Worlds', 'Unknown Worlds', '2022-01-01', 'Back 4 Blood description...', '{}', '["/video-for-discover-game/back-4-blood/video.mp4"]', NULL, NULL),
('batman-arkham-knight', 'batman-arkham-knight', 'Batman Arkham Knight', '/images/batman-arkham-knight.png', '', '', '2022-01-01', 'Batman Arkham Knight description...', '{}', '["/video-for-discover-game/batman-arkham-knight/video.mp4"]', NULL, NULL),
('felix-the-reaper', 'felix-the-reaper', 'Felix The Reaper', '/images/felix-the-reaper.png', 'Ubisoft', 'Ubisoft', '2022-01-01', 'Felix The Reaper description...', '{}', '["/video-for-discover-game/felix-the-reaper/video.mp4"]', NULL, NULL);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `hero_banners` (`id`, `game_id`, `title`, `slug`, `description`, `date_text`, `button_text`, `image_url`, `logo_url`, `show_wishlist`, `show_preview`) VALUES
('hb-1', 'where-winds-meet', 'WHERE WINDS MEET', 'where-winds-meet-main', 'Write your own Wuxia legend...', 'OUT NOW', 'Save Now', '/images/where-winds-meet.png', '/logos/where-winds-meet.png', 1, 0),
('hb-2', 'arc-raiders', 'ARC RAIDERS', 'arc-raiders', 'THE SURFACE IS CALLING...', 'AVAILABLE NOW', 'Buy Now', '/images/arc-raiders.jpg', '/logos/arc-raiders.png', 0, 1),
('hb-3', 'marvel-rivals', 'MARVEL RIVALS', 'marvel-rivals', 'THE SURFACE IS CALLING...', 'AVAILABLE NOW', 'Buy Now', '/images/marvel-rivals.jpg', '/logos/marvel-rivals.jpg', 0, 1),
('hb-4', 'cronos-the-new-dawn', 'CRONOS THE NEW DAWN', 'cronos-the-new-dawn', 'A whole new breed of survival horror...', 'AVAILABLE NOW', 'Buy Now', '/images/cronos-the-new-dawn.jpg', '/logos/cronos-the-new-dawn.png', 0, 1),
('hb-5', 'anno-117-pax-romana', 'ANNO 117: PAX ROMANA', 'anno-117-pax-romana', 'The world is on the brink...', 'AVAILABLE NOW', 'Buy Now', '/images/anno-117-pax-romana.jpg', '/logos/anno-117-pax-romana.png', 0, 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `sidebar_games` (`game_id`, `title`, `extra_label`, `thumbnail_url`) VALUES
('where-winds-meet', 'WHERE WINDS MEET', 'Coming Soon', '/thumbnails/where-winds-meet.png'),
('arc-raiders', 'ARC RAIDERS', 'Base Game', '/thumbnails/arc-raiders.png'),
('marvel-rivals', 'Marvel Rivals', 'Play Now', '/thumbnails/marvel-rivals.jpg'),
('cronos-the-new-dawn', 'Cronos: The New Dawn', 'Coming Soon', '/thumbnails/cronos-the-new-dawn.png'),
('anno-117-pax-romana', 'Anno 117: Pax Romana', 'Coming Soon', '/thumbnails/anno-117-pax-romana.jpg');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `trending_items` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `discount`, `logo_url`) VALUES
('lords-of-the-fallen-ii', 'lords-of-the-fallen-ii', 'lords-of-the-fallen-ii', 'Lords of the Fallen II', 'Lords of the Fallen II...', '/top-new-releases/lords-of-the-fallen-ii.png', 'Base Game', 'Coming soon', '', '/logos/lords-of-the-fallen.png'),
('the-wolf-among-us-2', 'the-wolf-among-us-2', 'the-wolf-among-us-2', 'The Wolf Among Us 2', 'The Wolf Among Us 2...', '/trending/the-wolf-among-us-2.png', 'Base Game', 'Coming soon', '', '/logos/the-wolf-among-us-2.png'),
('arknights-endfield', 'arknights-endfield', 'arknights-endfield', 'Arknights Endfield', 'Arknights Endfield...', '/trending/arknights-endfield.png', 'Base Game', 'Coming soon', '', '/logos/arknights-endfield.png'),
('assassins-creed-valhalla', 'assassins-creed-valhalla', 'assassins-creed-valhalla', "Assassin''s Creed Valhalla", "Assassin''s Creed Valhalla...", '/trending/assassins-creed-valhalla.png', 'Base Game', '₫599,900', '55%', '/logos/assassins-creed-valhalla.png');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `now_on` (`id`, `game_id`, `slug`, `title`, `description`, `image_url`, `category`, `price`, `logo_url`) VALUES
('kingdom-come-deliverance-ii', 'kingdom-come-deliverance-ii', 'kingdom-come-deliverance-ii', 'Kingdom Come: Deliverance II', 'Description...', '/now-on/kingdom-come-deliverance-ii.png', 'Base Game', '₫499,500', '/logos/kingdom-come-deliverance-ii.png'),
('persona-5-royal', 'persona-5-royal', 'persona-5-royal', 'Persona 5 Royal', 'Description...', '/now-on/persona-5-royal.png', 'Base Game', '₫414,000', '/logos/persona-5-royal.png'),
('baldurs-gate-3', 'baldurs-gate-3', 'baldurs-gate-3', "Baldur''s Gate 3", 'Description...', '/now-on/baldurs-gate-3.png', 'Base Game', '₫414,000', '/logos/baldurs-gate-3.png'),
('dead-island-2', 'dead-island-2', 'dead-island-2', 'Dead Island 2', 'Description...', '/now-on/dead-island-2.png', 'Base Game', '₫414,000', '/logos/dead-island-2.png'),
('hades-ii', 'hades-ii', 'hades-ii', 'Hades II', 'Description...', '/now-on/hades-ii.png', 'Base Game', '₫414,000', '/logos/hades-ii.png'),
('final-fantasy-xvi', 'final-fantasy-xvi', 'final-fantasy-xvi', 'Final Fantasy XVI', 'Description...', '/now-on/final-fantasy-xvi.png', 'Base Game', '₫1,249,000', '/logos/final-fantasy-xvi.png'),
('the-hundred-line-last-defense-academy', 'the-hundred-line-last-defense-academy', 'the-hundred-line-last-defense-academy', 'The Hundred: Line Last Defense Academy', 'Description...', '/now-on/the-hundred-line-last-defense-academy.png', 'Base Game', 'Coming soon', '/logos/the-hundred-line-last-defense-academy.png'),
('monster-hunter-wilds', 'monster-hunter-wilds', 'monster-hunter-wilds', 'Monster Hunter: Wilds', 'Description...', '/now-on/monster-hunter-wilds.png', 'Base Game', 'Coming soon', '/logos/monster-hunter-wilds.png'),
('red-dead-redemption-2', 'red-dead-redemption-2', 'red-dead-redemption-2', 'Red Dead Redemption 2', 'Description...', '/now-on/red-dead-redemption-2.png', 'Base Game', 'Coming soon', '/logos/red-dead-redemption-2.png'),
('persona-3-reloaded', 'persona-3-reloaded', 'persona-3-reloaded', 'Persona 3 Reloaded', 'Description...', '/now-on/persona-3-reloaded.png', 'Base Game', 'Coming soon', '/logos/persona-3-reloaded.png');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `coming_soon` (`id`, `game_id`, `slug`, `title`, `image_url`, `availability`, `price`) VALUES
('cs-1', 'project-motor-racing', 'project-motor-racing', 'Project Motor Racing', '/new-releases-list/motor.png', 'Available 11/25/25', '₫860,000'),
('cs-2', 'subnautica-2', 'subnautica-2', 'Subnautica 2', '/new-releases-list/subnautica2.png', 'Available 11/26/25', NULL),
('cs-3', 'slay-the-spire-2', 'slay-the-spire-2', 'Slay the Spire 2', '/new-releases-list/slay.jpg', 'Available 11/27/25', NULL),
('cs-4', 'lost-ember', 'lost-ember', 'Lost Ember: Rekindled Edition', '/new-releases-list/lostember.png', 'Available 11/27/25', NULL),
('cs-5', 'pubg-blindspot', 'pubg-blindspot', 'PUBG: BLINDSPOT', '/new-releases-list/blur.png', 'Available Nov 2025', NULL);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `deal_items` (`id`, `title`, `slug`, `image_url`, `tag`, `type`, `discount`, `original_price`, `price`, `button_text`) VALUES
('holiday-sale', 'Mega Holiday Sale', NULL, '/images/where-winds-meet.png', 'Event', 'promo', NULL, NULL, NULL, 'Browse All'),
('cyberpunk-deal', 'Cyberpunk 2077', 'cyberpunk-2077', '/images/anno-117-pax-romana.jpg', '-50%', 'game', '-50%', '₫899,000', '₫449,500', NULL),
('black-ops-deal', 'Call of Duty®: Black Ops 7', 'black-ops-7', '/images/cronos-the-new-dawn.jpg', NULL, 'game', '-20%', '₫1,999,000', '₫1,599,200', NULL);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `new_releases` (`id`, `title`, `slug`, `image`, `badge`, `price`) VALUES
(1, 'INAZUMA ELEVEN: Victory Road', 'inazuma-eleven-victory-road', '/new-releases-list/inazuma.jpg', 'Now On Epic', '₫1,200,000'),
(2, 'Constance', 'constance', '/new-releases-list/constance.png', 'Now On Epic', 'Free'),
(3, 'Dispatch', 'dispatch', '/new-releases-list/dispatch.jpg', NULL, '₫300,000'),
(4, 'DOOM: The Dark Ages', 'doom-the-dark-ages', '/new-releases-list/doom.png', 'Now On Epic', '₫1,200,000'),
(5, 'Mouthwashing', 'mouthwashing', '/new-releases-list/mouthwashing.png', 'Now On Epic', 'Free');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `top_rated` (`id`, `title`, `slug`, `image`, `discount`, `original_price`, `price`) VALUES
(1, 'KINGDOM HEARTS III + Re Mind...', 'kingdom-hearts-iii', '/new-releases-list/kh3.png', NULL, NULL, '₫1,250,000'),
(2, 'Goat Simulator 3', 'goat-simulator-3', '/new-releases-list/goat3.png', '-60%', '₫385,000', '₫154,000'),
(3, 'Hades II', 'hades-ii', '/new-releases-list/hades2.jpg', NULL, NULL, '₫385,000'),
(4, 'Clair Obscur: Expedition 33', 'clair-obscur', '/new-releases-list/clair.png', NULL, NULL, '₫770,000'),
(5, 'Titanfall® 2: Ultimate Edition', 'titanfall-2', '/new-releases-list/titanfall2.png', '-85%', '₫700,000', '₫105,000');

-- Table: top_sellers
DROP TABLE IF EXISTS `top_sellers`;
CREATE TABLE `top_sellers` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `top_sellers` (`id`, `title`, `slug`, `image`, `price`) VALUES
(1, 'ARC RAIDERS', 'arc-raiders', '/thumbnails/arc-raiders.png', '₫745,944'),
(2, 'Cyberpunk 2077', 'cyberpunk-2077', '/thumbnails/cyberpunk.png', '₫971,000'),
(3, 'Battlefield™ 6', 'battlefield-6', '/thumbnails/battlefield.png', '₫1,299,000'),
(4, 'Red Dead Redemption 2', 'red-dead-redemption-2', '/thumbnails/red-dead-redemption-2.png', '₫1,359,000'),
(5, 'REMATCH', 'rematch', '/thumbnails/rematch.png', '₫385,000');

-- Table: most_played
DROP TABLE IF EXISTS `most_played`;
CREATE TABLE `most_played` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `most_played` (`id`, `title`, `slug`, `image`, `price`) VALUES
(1, 'Fortnite', 'fortnite', '/thumbnails/fortnite.png', 'Free'),
(2, 'Rocket League®', 'rocket-league', '/thumbnails/rocket-league.png', 'Free'),
(3, 'Grand Theft Auto V Enhanced', 'gta-v', '/thumbnails/gta5.png', '₫683,000'),
(4, 'Genshin Impact', 'genshin-impact', '/thumbnails/genshin.png', 'Free'),
(5, 'Crosshair X', 'crosshair-x', '/thumbnails/crosshair.png', '₫52,000');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `top_upcoming` (`id`, `title`, `slug`, `availability`, `image`, `price`) VALUES
(1, 'Subnautica 2', 'subnautica-2', 'Coming Soon', '/thumbnails/subnautica2.png', NULL),
(2, 'Hogwarts Legacy', 'hogwarts-legacy', NULL, '/thumbnails/hogwarts-legacy.jpg', '₫1.299.000'),
(3, 'Split Fiction', 'split-fiction', 'Coming Soon', '/thumbnails/split-fiction.png', NULL),
(4, 'Jurassic Park: Survival', 'jurassic-park-survival', 'Coming Soon', '/thumbnails/jurassic.png', NULL),
(5, 'Resident Evil Requiem', 'resident-evil-requiem', 'Available 02/27/26', '/thumbnails/re.jpg', NULL);

-- Table: store_promotions
DROP TABLE IF EXISTS `store_promotions`;
CREATE TABLE `store_promotions` (
  `id` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `button_text` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `store_promotions` (`id`, `title`, `description`, `button_text`, `image`) VALUES
('sales-specials', 'Sales & Specials', 'Save big on hit titles...', 'Browse', '/store-promotions/sales-specials.jpg'),
('free-games', 'Free Games', 'Explore free and free-to-play games...', 'Play Now', '/store-promotions/free-games.png'),
('apps', 'Apps', 'Enjoy some of the best Apps...', 'Browse', '/store-promotions/apps.png');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `free_items` (`id`, `title`, `slug`, `description`, `image_url`, `date_range`, `button_text`) VALUES
('mouse-p-i-for-hire', 'Mouse: P.I. for Hire', 'mouse-p-i-for-hire', 'Mouse: P.I. for Hire is a new game...', '/game-covers/mouse-p-i-for-hire.png', '2025-11-20', 'See In Shop'),
('arc-raiders-main', 'ARC Raiders', 'arc-raiders', 'ARC Raiders is a new game...', '/game-covers/arc-raiders.jpg', '2025-11-20', 'See In Shop'),
('where-winds-meet-main', 'Where Winds Meet', 'where-winds-meet-main', 'Where Winds Meet is a new game...', '/game-covers/where-winds-meet.png', '2025-11-20', 'See In Shop');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `promos_items` (`id`, `title`, `image_url`, `type`, `description`, `button_text`) VALUES
('holiday-sale-2025', 'Holiday Sale 2025', '/promos/holiday-sale.png', 'promo', 'Save up to 75% on selected titles...', 'Learn More'),
('free-game-week', 'Free Game of the Week', '/promos/free-game.png', 'promo', 'Claim your free game now...', 'Claim Now');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `featured_game_banner` (`id`, `game_id`, `title`, `description`, `price`, `image_url`, `cta_primary`, `cta_secondary`) VALUES
('cronos-the-new-dawn', 'cronos-the-new-dawn', 'CRONOS: The New Dawn', 'A whole new breed of survival horror...', '₫970,000', '/images/cronos-the-new-dawn.jpg', 'Buy Now', 'Add to Wishlist');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `top_add_ons` (`id`, `title`, `slug`, `image`, `price`, `badge`) VALUES
(1, 'INAZUMA ELEVEN: Victory Road', 'inazuma-eleven', '/new-releases-list/inazuma.jpg', '₫1,200,000', 'Now On Epic'),
(2, 'Constance', 'constance', '/new-releases-list/constance.png', 'Free', 'Now On Epic'),
(3, 'Dispatch', 'dispatch', '/new-releases-list/dispatch.jpg', '₫300,000', NULL),
(4, 'DOOM: The Dark Ages', 'doom-the-dark-ages', '/new-releases-list/doom.png', '₫1,200,000', 'Now On Epic'),
(5, 'Mouthwashing', 'mouthwashing', '/new-releases-list/mouthwashing.png', 'Free', 'Now On Epic');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `top_free_to_play` (`id`, `title`, `slug`, `image`, `price`, `original_price`, `discount`) VALUES
(1, 'KINGDOM HEARTS III', 'kingdom-hearts-iii', '/new-releases-list/kh3.png', '₫1,250,000', NULL, NULL),
(2, 'Goat Simulator 3', 'goat-simulator-3', '/new-releases-list/goat3.png', '₫154,000', '₫385,000', '-60%'),
(3, 'Hades II', 'hades-ii', '/new-releases-list/hades2.jpg', '₫385,000', NULL, NULL),
(4, 'Clair Obscur', 'clair-obscur', '/new-releases-list/clair.png', '₫770,000', NULL, NULL),
(5, 'Titanfall 2', 'titanfall-2', '/new-releases-list/titanfall2.png', '₫105,000', '₫700,000', '-85%');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `top_demos` (`id`, `title`, `slug`, `image`, `availability`, `price`) VALUES
(1, 'Project Motor Racing', 'project-motor-racing', '/new-releases-list/motor.png', 'Available 11/25/25', '₫860,000'),
(2, 'Subnautica 2', 'subnautica-2', '/new-releases-list/subnautica2.png', 'Available 11/26/25', NULL),
(3, 'Slay the Spire 2', 'slay-the-spire-2', '/new-releases-list/slay.jpg', 'Available 11/27/25', NULL),
(4, 'Lost Ember: Rekindled', 'lost-ember', '/new-releases-list/lostember.png', 'Available 11/27/25', NULL),
(5, 'PUBG: BLINDSPOT', 'pubg-blindspot', '/new-releases-list/blur.png', 'Available Nov 2025', NULL);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `news` (`id`, `title`, `date`, `description`, `image_url`, `button_text`) VALUES
('mouse-p-i-for-hire', 'Mouse: P.I. for Hire', '2025-11-20', 'Mouse: P.I. for Hire is a new game...', '/game-covers/mouse-p-i-for-hire.png', 'See In Shop'),
('arc-raiders-main', 'ARC Raiders', '2025-11-20', 'ARC Raiders is a new game...', '/game-covers/arc-raiders.png', 'See In Shop'),
('where-winds-meet-main', 'Where Winds Meet', '2025-11-20', 'Where Winds Meet is a new game...', '/game-covers/where-winds-meet.png', 'See In Shop');

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
