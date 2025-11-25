// lib/data.ts

import PromosSection from "@/app/components/PromosSection/PromosSection";

// --- ĐỊNH NGHĨA CÁC KIỂU DỮ LIỆU ---

// Định nghĩa cho một game trong sidebar (hoặc danh sách game nhỏ)
export interface SidebarGame {
  id: string;
  title: string;
  extra: string;      // "Base Game", "Event", v.v.
  imageUrl: string;
}

// Định nghĩa cho banner Hero chính
export interface HeroBanner {
  id: string;
  title: string;
  date: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  showWishlistButton: boolean;
  showPreviewButton: boolean;
  logoUrl: string;
}

// Định nghĩa cho một Discover Section
export interface DiscoverItem {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  currentPrice: string;
  originalPrice?: string;
  discountPercentage?: string;
}

// Định nghĩa cho một tin tức (dùng cho trang /news sau này)
export interface News {
  id: string;
  title: string;
  date: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  hasIcon?: boolean;
}

// Đinh nghĩa cho một Deals of the Week
export interface DealItem {
  id: string;
  title: string;
  image: string;
  tag?: string;
  type: 'game' | 'promo';
  discount?: string;
  originalPrice?: string;
  price?: string;
  buttonText?: string;
}

// Định nghĩa cho một Free games
export interface FreeItem {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  hasIcon?: boolean;
}

// Định nghĩa cho một Promos
export interface PromosItem {
  id: string;
  title: string;
  image: string;
  tag?: string;
  type: 'game' | 'promo';
  buttonText?: string;
  description: string;
}


// Định nghĩa cho Featured Game Banner
export interface FeaturedGame {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

// Định nghĩa cho một Trending
export interface TrendingItem {
  id: string,
  title: string,
  category: string,
  price: string,
  image: string
}

// Định nghĩa cho GameItem (dùng chung cho FeaturedLists và NewReleasesList)
export interface GameItem {
  id: number;
  title: string;
  image: string;
  price?: string;
  originalPrice?: string;
  discount?: string;
  badge?: string;
  availability?: string;
}

// Định nghĩa cho Top New Releases
export interface TopNewReleases {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
}


// --- DỮ LIỆU GIẢ CỦA BẠN ---

// Dữ liệu cho Hero Section (Epic Savings)
export const heroData: HeroBanner[] = [
  {
    id: 'where-winds-meet',
    title: "WHERE<br/>WINDS MEET",
    date: "OUT NOW",
    description: "Write your own Wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.",
    buttonText: "Save Now",
    imageUrl: "/images/where-winds-meet.png",
    showWishlistButton: true,
    showPreviewButton: false,
    logoUrl: "/logos/where-winds-meet.png",
  },
  {
    id: 'arc-raiders',
    title: "ARC<br/>RAIDERS",
    date: "AVAILABLE NOW",
    description: "THE SURFACE IS CALLING. YOUR ADVENTURE <br/> STARTS NOW. Survival is an option, but <br/> thriving? That takes courage.",
    buttonText: "Buy Now",
    imageUrl: "/images/arc-raiders.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/arc-raiders.png",
  },
  {
    id: 'marvel-rivals',
    title: "MARVEL<br/>RAIDERS",
    date: "AVAILABLE NOW",
    description: "THE SURFACE IS CALLING. YOUR ADVENTURE <br/> STARTS NOW. Survival is an option, but <br/> thriving? That takes courage.",
    buttonText: "Buy Now",
    imageUrl: "/images/marvel-rivals.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/marvel-rivals.jpg",
  },
  {
    id: 'cronos-the-new-dawn',
    title: "CRONOS<br/>THE NEW DAWN",
    date: "AVAILABLE NOW",
    description: "A whole new breed of survival horror emerges with Cronos: The New Dawn.",
    buttonText: "Buy Now",
    imageUrl: "/images/cronos-the-new-dawn.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/cronos-the-new-dawn.png",
  },
  {
    id: 'anno-117-pax-romana',
    title: "ANNO 117: PAX ROMANA",
    date: "AVAILABLE NOW",
    description: "The world is on the brink of collapse. Only you can save it.",
    buttonText: "Buy Now",
    imageUrl: "/images/anno-117-pax-romana.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/anno-117-pax-romana.png",
  }
];

// Dữ liệu cho Sidebar
export const sidebarGames: SidebarGame[] = [
  {
    id: 'where-winds-meet',
    title: 'WHERE WINDS MEET',
    extra: 'Coming Soon',
    imageUrl: '/thumbnails/where-winds-meet.png',
  },
  {
    id: 'arc-raiders',
    title: 'ARC RAIDERS',
    extra: 'Base Game',
    imageUrl: '/thumbnails/arc-raiders.png',
  },
  {
    id: 'marvel-rivals',
    title: 'Marvel Rivals',
    extra: 'Play Now',
    imageUrl: '/thumbnails/marvel-rivals.jpg',
  },
  {
    id: 'cronos-the-new-dawn',
    title: 'Cronos: The New Dawn',
    extra: 'Coming Soon',
    imageUrl: '/thumbnails/cronos-the-new-dawn.png',
  },
  {
    id: 'anno-117-pax-romana',
    title: 'Anno 117: Pax Romana',
    extra: 'Coming Soon',
    imageUrl: '/thumbnails/anno-117-pax-romana.jpg',
  }
];


// Dữ liệu cho trang /games (danh sách game chính)
export const mainGameList: DiscoverItem[] = [
  {
    id: 'mouse-p-i-for-hire',
    name: 'Mouse: P.I. for Hire',
    imageUrl: "/game-covers/mouse-p-i-for-hire.png",
    category: "Base Game",
    currentPrice: "Free",
  },
  {
    id: 'arc-raiders-main',
    name: 'ARC Raiders',
    imageUrl: "/game-covers/arc-raiders.jpg",
    category: "Base Game",
    currentPrice: "₫745,944",
  },
  {
    id: 'where-winds-meet-main',
    name: 'Where Winds Meet',
    imageUrl: "/game-covers/where-winds-meet.png",
    category: "Base Game",
    currentPrice: "Free",
  },
  {
    id: 'jurassic-world-3',
    name: 'Jurassic World Evolution 3',
    imageUrl: "/game-covers/jurassic-world-3.jpg",
    category: "Base Game",
    currentPrice: "₫980,000",
    originalPrice: "₫1,299,000",
    discountPercentage: "-25%",
  },
  {
    id: 'the-midnight-walkers',
    name: 'The Midnight Walkers',
    imageUrl: "/game-covers/the-midnight-walkers.png",
    category: "Base Game",
    currentPrice: "Free",
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    imageUrl: "/game-covers/cyberpunk.png",
    category: "Base Game",
    currentPrice: "₫899,000",
  },
  {
    id: 'black-ops-7',
    name: 'Call of Duty®: Black Ops 7',
    imageUrl: "/game-covers/black-ops-7.png",
    category: "Base Game",
    currentPrice: "₫1,999,000",
  },
  {
    id: 'dying-light-the-beast',
    name: 'Dying Light: The Beast',
    imageUrl: '/game-covers/dying-light-the-beast.png',
    category: 'Base Game',
    currentPrice: '₫1,999,000',
  },
  {
    id: 'resident-evil-requiem',
    name: 'Resident Evil Requiem',
    imageUrl: '/game-covers/resident-evil-requiem.jpg',
    category: 'Base Game',
    currentPrice: '₫1,999,000',
  },
  {
    id: 'subnautica-2',
    name: 'Subnautica 2',
    imageUrl: '/game-covers/subnautica-2.png',
    category: 'Base Game',
    currentPrice: '₫1,999,000',
  }
];

// Dữ liệu cho trang /news (danh sách tin tức)
export const newsList: News[] = [
  {
    id: 'mouse-p-i-for-hire',
    title: 'Mouse: P.I. for Hire',
    date: '2025-11-20',
    description: 'Mouse: P.I. for Hire is a new game that will be released on 2025-11-20.',
    buttonText: 'See In Shop',
    imageUrl: "/game-covers/mouse-p-i-for-hire.png",
  },
  {
    id: 'arc-raiders-main',
    title: 'ARC Raiders',
    date: '2025-11-20',
    description: 'ARC Raiders is a new game that will be released on 2025-11-20.',
    buttonText: 'See In Shop',
    imageUrl: "/game-covers/arc-raiders.jpg",
  },
  {
    id: 'where-winds-meet-main',
    title: 'Where Winds Meet',
    date: '2025-11-20',
    description: 'Where Winds Meet is a new game that will be released on 2025-11-20.',
    buttonText: 'See In Shop',
    imageUrl: "/game-covers/where-winds-meet.png",

  },
];

// Dữ liệu cho trang/deals (ưu đãi trong tuần)

export const dealsData: DealItem[] = [
  {
    id: 'holiday-sale',
    title: 'Mega Holiday Sale',
    image: '/images/where-winds-meet.png',
    tag: 'Event',
    type: 'promo',
    buttonText: 'Browse All'
  },
  {
    id: 'cyberpunk-deal',
    title: 'Cyberpunk 2077',
    image: '/images/anno-117-pax-romana.jpg',
    tag: '-50%',
    type: 'game',
    discount: '-50%',
    originalPrice: '₫899,000',
    price: '₫449,500'
  },
  {
    id: 'black-ops-deal',
    title: 'Call of Duty®: Black Ops 7',
    image: '/images/cronos-the-new-dawn.jpg',
    type: 'game',
    discount: '-20%',
    originalPrice: '₫1,999,000',
    price: '₫1,599,200'
  }
];

// Dữ liệu trang/free (game miễn phí)

export const freeData: FreeItem[] = [
  {
    id: 'mouse-p-i-for-hire',
    title: 'Mouse: P.I. for Hire',
    date: '2025-11-20',
    description: 'Mouse: P.I. for Hire is a new game that will be released on 2025-11-20.',
    buttonText: 'See In Shop',
    imageUrl: "/game-covers/mouse-p-i-for-hire.png",
  },
  {
    id: 'arc-raiders-main',
    title: 'ARC Raiders',
    date: '2025-11-20',
    description: 'ARC Raiders is a new game that will be released on 2025-11-20.',
    buttonText: 'See In Shop',
    imageUrl: "/game-covers/arc-raiders.jpg",
  },
  {
    id: 'where-winds-meet-main',
    title: 'Where Winds Meet',
    date: '2025-11-20',
    description: 'Where Winds Meet is a new game that will be released on 2025-11-20.',
    buttonText: 'See In Shop',
    imageUrl: "/game-covers/where-winds-meet.png",

  },
]

// Dữ liệu cho trang/promos
export const promoData: PromosItem[] = [
  {
    id: 'holiday-sale-2025',
    title: 'Holiday Sale 2025',
    image: '/images/holiday-sale.jpg',
    type: 'promo',
    description: 'Save up to 75% on selected titles this holiday season.',
    buttonText: 'Learn More'
  },
  {
    id: 'free-game-week',
    title: 'Free Game of the Week',
    image: '/images/free-game.jpg',
    type: 'promo',
    description: 'Claim your free game now before it expires.',
    buttonText: 'Claim Now'
  },
]

// Dữ liệu cho Featured Lists
export const topSellers: GameItem[] = [
  { id: 1, title: "ARC Raiders", price: "₫745,944", image: "/thumbnails/arc-raiders.png" }, // Thay ảnh thật
  { id: 2, title: "Cyberpunk 2077", price: "₫971,000", image: "/thumbnails/cyberpunk.png" },
  { id: 3, title: "Battlefield™ 6", price: "₫1,299,000", image: "/thumbnails/battlefield.png" },
  { id: 4, title: "Red Dead Redemption 2", price: "₫1,359,000", image: "/thumbnails/red-dead-redemption-2.png" },
  { id: 5, title: "REMATCH", price: "₫385,000", image: "/thumbnails/rematch.png" },
];

// Dữ liệu Cột 2: Most Played
export const mostPlayed: GameItem[] = [
  { id: 1, title: "Fortnite", price: "Free", image: "/thumbnails/fortnite.png" },
  { id: 2, title: "Rocket League®", price: "Free", image: "/thumbnails/rocket-league.png" },
  { id: 3, title: "Grand Theft Auto V Enhanced", price: "₫683,000", image: "/thumbnails/gta5.png" },
  { id: 4, title: "Genshin Impact", price: "Free", image: "/thumbnails/genshin.png" },
  { id: 5, title: "Crosshair X", price: "₫52,000", image: "/thumbnails/crosshair.png" },
];

// Dữ liệu Cột 3: Top Upcoming
export const topUpcoming: GameItem[] = [
  { id: 1, title: "Subnautica 2", availability: "Coming Soon", image: "/thumbnails/subnautica2.png" },
  { id: 2, title: "Hogwarts Legacy", price: "₫1.299.000", image: "/thumbnails/hogwarts-legacy.jpg" },
  { id: 3, title: "Split Fiction", availability: "Coming Soon", image: "/thumbnails/split-fiction.png" },
  { id: 4, title: "Jurassic Park: Survival", availability: "Coming Soon", image: "/thumbnails/jurassic.png" },
  { id: 5, title: "Resident Evil Requiem", availability: "Available 02/27/26", image: "/thumbnails/re.jpg" },
];

// Dữ liệu cho Featured Game Banner
export const featuredGame: FeaturedGame[] = [
  {
    id: 'cronos-the-new-dawn',
    title: "CRONOS: The New Dawn",
    description: "A whole new breed of survival horror emerges with Cronos: The New Dawn.",
    price: "₫970,000",
    image: "/images/cronos-the-new-dawn.jpg", // Bạn thay link ảnh thật vào đây
    ctaPrimary: "Buy Now",
    ctaSecondary: "Add to Wishlist"
  },
];

// Dữ liệu cho Trending Section
export const trendingGames: TrendingItem[] = [
  {
    id: 'lords-of-the-fallen-ii',
    title: 'Lords of the Fallen II',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/trending/lords-of-the-fallen-ii.png',
  },
  {
    id: 'the-wolf-among-us-2',
    title: 'The Wolf Among Us 2',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/trending/the-wolf-among-us-2.png',
  },
  {
    id: 'arknights-endfield',
    title: 'Arknights: Endfield',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/trending/arknights-endfield.png',
  },
  {
    id: 'assassins-creed-valhalla',
    title: 'Assassin\'s Creed® Valhalla',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/trending/assassins-creed-valhalla.png',
  },
  {
    id: 'the-legend-of-zelda-tears-of-the-kingdom',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    category: 'DLC',
    price: 'Coming Soon',
    image: '/trending/the-legend-of-zelda-tears-of-the-kingdom.png',
  },
  {
    id: 'the-legend-of-zelda-tears-of-the-kingdom',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/trending/the-legend-of-zelda-tears-of-the-kingdom.jpg',
  },
];

// Dữ liệu cho trang/new-releases-list
// CỘT 1: NEW RELEASES
export const newReleases: GameItem[] = [
  { id: 1, title: "INAZUMA ELEVEN: Victory Road", image: "/new-releases-list/inazuma.jpg", badge: "Now On Epic", price: "₫1,200,000" },
  { id: 2, title: "Constance", image: "/new-releases-list/constance.png", badge: "Now On Epic", price: "Free" },
  { id: 3, title: "Dispatch", image: "/new-releases-list/dispatch.jpg", price: "₫300,000" },
  { id: 4, title: "DOOM: The Dark Ages", image: "/new-releases-list/doom.png", badge: "Now On Epic", price: "₫1,200,000" },
  { id: 5, title: "Mouthwashing", image: "/new-releases-list/mouthwashing.png", badge: "Now On Epic", price: "Free" },
];

// CỘT 2: TOP PLAYER RATED
export const topRated: GameItem[] = [
  { id: 1, title: "KINGDOM HEARTS III + Re Mind...", image: "/new-releases-list/kh3.png", price: "₫1,250,000" },
  { id: 2, title: "Goat Simulator 3", image: "/new-releases-list/goat3.png", discount: "-60%", originalPrice: "₫385,000", price: "₫154,000" },
  { id: 3, title: "Hades II", image: "/new-releases-list/hades2.jpg", price: "₫385,000" },
  { id: 4, title: "Clair Obscur: Expedition 33", image: "/new-releases-list/clair.png", price: "₫770,000" },
  { id: 5, title: "Titanfall® 2: Ultimate Edition", image: "/new-releases-list/titanfall2.png", discount: "-85%", originalPrice: "₫700,000", price: "₫105,000" },
];

// CỘT 3: COMING SOON
export const comingSoon: GameItem[] = [
  { id: 1, title: "Project Motor Racing", image: "/new-releases-list/motor.png", availability: "Available 11/25/25", price: "₫860,000" },
  { id: 2, title: "Subnautica 2", image: "/new-releases-list/subnautica2.png", availability: "Available 11/26/25" },
  { id: 3, title: "Slay the Spire 2", image: "/new-releases-list/slay.jpg", availability: "Available 11/27/25" },
  { id: 4, title: "Lost Ember: Rekindled Edition", image: "/new-releases-list/lostember.png", availability: "Available 11/27/25" },
  { id: 5, title: "PUBG: BLINDSPOT", image: "/new-releases-list/blur.png", availability: "Available Nov 2025" },
];

// Dữ liệu cho trang/top-new-releases
export const topNewReleases: TopNewReleases[] = [
  {
    id: 'lords-of-the-fallen-ii',
    title: 'Lords of the Fallen II',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/trending/lords-of-the-fallen-ii.png',
  },
  {
    id: 'the-legend-of-zelda-tears-of-the-kingdom',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/top-new-releases/the-legend-of-zelda-tears-of-the-kingdom.png',
  },
  {
    id: 'assassins-creed-valhalla',
    title: 'Assassin\'s Creed® Valhalla',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/trending/assassins-creed-valhalla.png',
  },
  {
    id: 'crystal-of-atlantean',
    title: 'Crystal of Atlantean',
    category: 'Base Game',
    price: 'Coming Soon',
    image: '/top-new-releases/crystal-of-atlantean.png',
  },
  {
    id: 'celeste-1',
    title: 'Celeste',
    category: 'Base Game',
    price: 'Free',
    image: '/top-new-releases/celeste.png',
  },
  {
    id: 'rusty-lake-hotel',
    title: 'Rusty Lake Hotel',
    category: 'Base Game',
    price: 'Free',
    image: '/top-new-releases/rusty-lake-hotel.png',
  },
  {
    id: 'when-the-past-was-around',
    title: 'When The Past Was Around',
    category: 'Base Game',
    price: 'Free',
    image: '/top-new-releases/when-the-past-was-around.png',
  },
  {
    id: 'the-hunter-call-of-the-wild',
    title: 'theHunter: Call of the Wild™',
    category: 'Base Game',
    price: 'Free',
    image: '/top-new-releases/the-hunter-call-of-the-wild.png',
  },
  {
    id: 'florence',
    title: 'Florence',
    category: 'Base Game',
    price: 'Free',
    image: '/top-new-releases/florence.png',
  },
  {
    id: 'stray',
    title: 'Stray',
    category: 'Base Game',
    price: 'Free',
    image: '/top-new-releases/stray.jpg',
  },

];
