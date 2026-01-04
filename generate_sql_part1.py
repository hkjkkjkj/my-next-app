
import json
import os

def escape_sql(value):
    if value is None:
        return "NULL"
    return "'" + str(value).replace("'", "''") + "'"

def json_sql(value):
    if value is None:
        return "NULL"
    return "'" + json.dumps(value).replace("'", "''") + "'"

games = [
    # FROM HERO DATA
    {
        "id": "where-winds-meet",
        "slug": "where-winds-meet-main",
        "title": "WHERE WINDS MEET",
        "hero_image": "/images/where-winds-meet.png",
        "developer": "Where Winds Meet",
        "publisher": "Where Winds Meet",
        "release_date": "2022-01-01",
        "description": "Write your own Wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.",
        "specs_json": {
            "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
            "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/images/where-winds-meet.png", "/images/where-winds-meet.png", "/images/where-winds-meet.png"]
    },
    {
        "id": "arc-raiders",
        "slug": "arc-raiders", 
        "title": "ARC RAIDERS",
        "hero_image": "/images/arc-raiders.jpg",
        "developer": "Embark Studios",
        "publisher": "Embark Studios",
        "release_date": "2022-01-01",
        "description": "ARC Raiders is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/video-for-discover-game/arc-raiders/video.mp4", "/images-discover-game/arc-raiders/arc-raiders-1.jpg", "/images-discover-game/arc-raiders/arc-raiders-2.jpg", "/images-discover-game/arc-raiders/arc-raiders-3.jpg", "/images-discover-game/arc-raiders/arc-raiders-4.jpg", "/images-discover-game/arc-raiders/arc-raiders-5.jpg"]
    },
    {
        "id": "marvel-rivals",
        "slug": "marvel-rivals",
        "title": "MARVEL RIVALS",
        "hero_image": "/images/marvel-rivals.jpg",
        "developer": "Marvel Rivals",
        "publisher": "Marvel Rivals",
        "release_date": "2022-01-01",
        "description": "THE SURFACE IS CALLING. YOUR ADVENTURE STARTS NOW.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/images/marvel-rivals.jpg", "/images/marvel-rivals.jpg", "/images/marvel-rivals.jpg"]
    },
    {
        "id": "cronos-the-new-dawn",
        "slug": "cronos-the-new-dawn",
        "title": "CRONOS THE NEW DAWN",
        "hero_image": "/images/cronos-the-new-dawn.jpg",
        "developer": "Cronos The New Dawn",
        "publisher": "Cronos The New Dawn",
        "release_date": "2022-01-01",
        "description": "A whole new breed of survival horror emerges with Cronos: The New Dawn.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/images/cronos-the-new-dawn.jpg", "/images/cronos-the-new-dawn.jpg", "/images/cronos-the-new-dawn.jpg"]
    },
    {
        "id": "anno-117-pax-romana",
        "slug": "anno-117-pax-romana",
        "title": "ANNO 117: PAX ROMANA",
        "hero_image": "/images/anno-117-pax-romana.jpg",
        "developer": "Anno 117: Pax Romana",
        "publisher": "Anno 117: Pax Romana",
        "release_date": "2022-01-01",
        "description": "The world is on the brink of collapse. Only you can save it.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/images/anno-117-pax-romana.jpg", "/images/anno-117-pax-romana.jpg", "/images/anno-117-pax-romana.jpg"]
    },
    # MAIN DISCOVER LIST
    {
        "id": "mouse-p-i-for-hire",
        "slug": "mouse-p-i-for-hire",
        "title": "Mouse: P.I. for Hire",
        "hero_image": "/images/mouse-p-i-for-hire.png",
        "developer": "Fumi Games",
        "publisher": "PlaySide",
        "release_date": "2022-01-01",
        "description": "Join private investigator Jack Pepper on a guns blazing, jazz-fueled adventure in MOUSE: P.I. For Hire.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/video-for-discover-game/mouse-p-i-for-hire/video.mp4", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-1.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-2.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-3.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-4.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-5.jpg"]
    },
    {
        "id": "jurassic-world-3",
        "slug": "jurassic-world-3",
        "title": "Jurassic World: Evolution 3",
        "hero_image": "/images/jurassic-world-3.png",
        "developer": "Frontier Developments",
        "publisher": "Frontier Developments",
        "release_date": "2022-01-01",
        "description": "Jurassic World: Evolution 3 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/video-for-discover-game/jurassic-world-3/video.mp4", "/images-discover-game/jurassic-world-3/jurassic-world-3-1.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-2.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-3.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-4.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-5.jpg"]
    },
    {
        "id": "the-midnight-walkers",
        "slug": "the-midnight-walkers",
        "title": "The Midnight Walkers",
        "hero_image": "/images/the-midnight-walkers.png",
        "developer": "Oneway Ticket Studio",
        "publisher": "Oneway Ticket Studio",
        "release_date": "2022-01-01",
        "description": "The Midnight Walkers is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/video-for-discover-game/the-midnight-walkers/video.mp4", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-1.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-2.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-3.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-4.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-5.jpg"]
    },
    {
        "id": "cyberpunk",
        "slug": "cyberpunk-2077",
        "title": "Cyberpunk 2077",
        "hero_image": "/images/cyberpunk-2077.png",
        "developer": "CD Projekt Red",
        "publisher": "CD Projekt Red",
        "release_date": "2022-01-01",
        "description": "Cyberpunk 2077 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/video-for-discover-game/cyberpunk-2077/video.mp4", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-1.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-2.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-3.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-4.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-5.jpg"]
    },
    {
        "id": "black-ops-7",
        "slug": "black-ops-7",
        "title": "Black Ops 7",
        "hero_image": "/images/black-ops-7.png",
        "developer": "Treyarch",
        "publisher": "Activision",
        "release_date": "2022-01-01",
        "description": "Black Ops 7 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/video-for-discover-game/black-ops-7/video.mp4", "/images-discover-game/black-ops-7/black-ops-7-1.jpg", "/images-discover-game/black-ops-7/black-ops-7-2.jpg", "/images-discover-game/black-ops-7/black-ops-7-3.jpg", "/images-discover-game/black-ops-7/black-ops-7-4.jpg", "/images-discover-game/black-ops-7/black-ops-7-5.jpg"]
    },
    {
        "id": "dying-light-the-beast",
        "slug": "dying-light-the-beast",
        "title": "Dying Light: The Beast",
        "hero_image": "/images/dying-light-the-beast.png",
        "developer": "Techland",
        "publisher": "Techland",
        "release_date": "2022-01-01",
        "description": "Dying Light: The Beast is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json":  ["/video-for-discover-game/dying-light-the-beast/video.mp4", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-1.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-2.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-3.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-4.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-5.jpg"]
    },
    {
        "id": "resident-evil-requiem",
        "slug": "resident-evil-requiem",
        "title": "Resident Evil Requiem",
        "hero_image": "/images/resident-evil-requiem.png",
        "developer": "Capcom",
        "publisher": "Capcom",
        "release_date": "2022-01-01",
        "description": "Resident Evil Requiem is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json":  ["/video-for-discover-game/resident-evil-requiem/video.mp4", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-1.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-2.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-3.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-4.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-5.jpg"]
    },
    {
        "id": "subnautica-2",
        "slug": "subnautica-2",
        "title": "Subnautica 2",
        "hero_image": "/images/subnautica-2.png",
        "developer": "Unknown Worlds",
        "publisher": "Unknown Worlds",
        "release_date": "2022-01-01",
        "description": "Subnautica 2 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
         "specs_json": {
             "minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"},
              "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}
        },
        "gallery_json": ["/video-for-discover-game/subnautica-2/video.mp4", "/images-discover-game/subnautica-2/subnautica-2-1.jpg", "/images-discover-game/subnautica-2/subnautica-2-2.jpg", "/images-discover-game/subnautica-2/subnautica-2-3.jpg", "/images-discover-game/subnautica-2/subnautica-2-4.jpg", "/images-discover-game/subnautica-2/subnautica-2-5.jpg"]
    },
    # TOP NEW RELEASES / TRENDING / OTHER GAMES
    {
        "id": "lords-of-the-fallen-ii",
        "slug": "lords-of-the-fallen-ii",
        "title": "Lords of the Fallen II",
        "hero_image": "/images/lords-of-the-fallen-ii.png",
        "developer": "Unknown Worlds",
        "publisher": "Unknown Worlds",
        "release_date": "2022-01-01",
        "description": "Lords of the Fallen II is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json":  {"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM"}},
        "gallery_json": ["/video-for-discover-game/lords-of-the-fallen-ii/video.mp4", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-1.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-2.jpg"]
    },
    {
        "id": "lies-of-p",
        "slug": "lies-of-p",
        "title": "Lies of P",
        "hero_image": "/images/lies-of-p.png",
        "developer": "",
        "publisher": "",
        "release_date": "2022-01-01",
        "description": "Lies of P is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json":  {"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}},
        "gallery_json": ["/video-for-discover-game/lies-of-p/video.mp4", "/images-discover-game/lies-of-p/lies-of-p-1.jpg", "/images-discover-game/lies-of-p/lies-of-p-2.jpg"]
    },
    {
        "id": "assassins-creed-valhalla",
        "slug": "assassins-creed-valhalla",
        "title": "Assassin's Creed Valhalla",
        "hero_image": "/images/assassins-creed-valhalla.png",
        "developer": "Ubisoft",
        "publisher": "Ubisoft",
        "release_date": "2022-01-01",
        "description": "Assassin's Creed Valhalla is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json":  {"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}},
        "gallery_json": ["/video-for-discover-game/assassins-creed-valhalla/video.mp4", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-1.jpg"]
    },
    {
        "id": "crystal-of-atlantean",
        "slug": "crystal-of-atlantean",
        "title": "Crystal of Atlantean",
        "hero_image": "/images/crystal-of-atlantean.png",
        "developer": "Unknown Worlds",
        "publisher": "Unknown Worlds",
        "release_date": "2022-01-01",
        "description": "Crystal of Atlantean is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json":  {"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}},
        "gallery_json": ["/video-for-discover-game/crystal-of-atlantean/video.mp4", "/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-1.jpg"]
    },
    {
        "id": "celeste",
        "slug": "celeste",
        "title": "Celeste",
        "hero_image": "/images/celeste.png",
        "developer": "Maddy Makes Games Inc.",
        "publisher": "Maddy Makes Games Inc.",
        "release_date": "2022-01-01",
        "description": "Celeste is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json":  {"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}},
        "gallery_json": ["/video-for-discover-game/celeste/video.mp4", "/images-discover-game/celeste/celeste-1.jpg"]
    },
    {
        "id": "rusty-lake-hotel",
        "slug": "rusty-lake-hotel",
        "title": "Rusty Lake Hotel",
        "hero_image": "/images/rusty-lake-hotel.png",
        "developer": "Rusty Lake",
        "publisher": "Rusty Lake",
        "release_date": "2025-12-25",
        "description": "Rusty Lake Hotel is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json":  {"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}},
        "gallery_json": ["/video-for-discover-game/rusty-lake-hotel/video.mp4", "/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-1.jpg"]
    },
    {
        "id": "when-the-past-was-around",
        "slug": "when-the-past-was-around",
        "title": "When the Past Was Around",
        "hero_image": "/images/when-the-past-was-around.png",
        "developer": "Mojiken",
        "publisher": "Toge Production",
        "release_date": "2022-01-01",
        "description": "When the Past Was Around is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json":  {"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600"}},
        "gallery_json": ["/video-for-discover-game/when-the-past-was-around/video.mp4"]
    },
    {
        "id": "the-hunter-call-of-the-wild",
        "slug": "the-hunter-call-of-the-wild",
        "title": "The Hunter: Call of the Wild",
        "hero_image": "/images/the-hunter-call-of-the-wild.png",
        "developer": "Expansive Worlds",
        "publisher": "Avalanche Studios",
        "release_date": "2022-01-01",
        "description": "The Hunter: Call of the Wild is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json": {"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K"}, "recommended": {"os": "Windows 10/11"}},
        "gallery_json": ["/video-for-discover-game/the-hunter-call-of-the-wild/video.mp4"]
    },
    {
        "id": "florence",
        "slug": "florence",
        "title": "Florence",
        "hero_image": "/images/florence.png",
        "developer": "Mountains",
        "publisher": "Annapurna Interactive",
        "release_date": "2025-12-25",
        "description": "Florence Yeoh feels a little... stuck.",
        "specs_json": {"minimum": {"os": "Windows 10/11"}, "recommended": {"os": "Windows 10/11"}},
        "gallery_json": ["/video-for-discover-game/florence/video.mp4"]
    },
     {
        "id": "stray",
        "slug": "stray",
        "title": "Stray",
        "hero_image": "/images/stray.jpg",
        "developer": "BlueTwelve Studio",
        "publisher": "Annapurna Interactive",
        "release_date": "2022-01-01",
        "description": "Stray is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
        "specs_json": {"minimum": {"os": "Windows 10/11"}, "recommended": {"os": "Windows 10/11"}},
         "gallery_json": ["/video-for-discover-game/stray/video.mp4"]
    }
]

# Generate SQL
sql_output = """-- phpMyAdmin SQL Dump
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `slug`, `title`, `hero_image`, `developer`, `publisher`, `release_date`, `description`, `specs_json`, `gallery_json`, `login_accounts`, `languages_json`) VALUES
"""

values_list = []
for game in games:
    values = f"({escape_sql(game['id'])}, {escape_sql(game['slug'])}, {escape_sql(game['title'])}, {escape_sql(game.get('hero_image'))}, {escape_sql(game.get('developer'))}, {escape_sql(game.get('publisher'))}, {escape_sql(game.get('release_date'))}, {escape_sql(game.get('description'))}, {json_sql(game.get('specs_json'))}, {json_sql(game.get('gallery_json'))}, NULL, NULL)"
    values_list.append(values)

sql_output += ",\n".join(values_list) + ";\n"

with open("c:/Users/pykeo/my-next-app/game_data.sql", "w", encoding="utf-8") as f:
    f.write(sql_output)

print("game_data.sql part 1 created successfully.")
