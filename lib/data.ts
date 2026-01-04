// lib/data.ts

import PromosSection from "@/app/components/PromosSection/PromosSection";

// --- ĐỊNH NGHĨA CÁC KIỂU DỮ LIỆU ---

export interface SpecDetail {
  os: string;
  cpu: string;
  memory: string;
  gpu: string;
  dx?: string;
  storage: string;
  notes?: string;
}

export interface GameSpecs {
  minimum: SpecDetail;
  recommended: SpecDetail;
}

export interface GameDetailsMixin {
  slug?: string;          // URL thân thiện (quan trọng để link chạy)
  heroImage?: string;     // Ảnh banner ngang lớn
  developer?: string;
  publisher?: string;
  releaseDate?: string;
  description?: string;
  specs?: GameSpecs;
  gallery?: string[];
  loginAccounts?: string;
  languages?: {
    audio?: string;
    text?: string;
  };
}

export interface AchievementsSection {
  isShow: boolean;
  title: string;
  items?: string[];
  viewAllLink?: string;
  imageAchievements?: string[];
}

export interface SocialLink {
  platform: string; // "Facebook", "Twitter", "Instagram", "Youtube", "Website", "Discord", "Reddit"
  url: string;
}

export interface FollowSection {
  isShow: boolean;
  title: string;
  links?: SocialLink[];
}
// Định nghĩa cho một game trong sidebar (hoặc danh sách game nhỏ) và kế thừa từ GameDetailsMixin
export interface SidebarGame extends GameDetailsMixin {
  id: string;
  title: string;
  extra: string;      // "Base Game", "Event", v.v.
  imageUrl: string;
}

// Định nghĩa cho banner Hero chính và kế thừa từ GameDetailsMixin
export interface HeroBanner extends GameDetailsMixin {
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

// Định nghĩa cho một Discover Section và kế thừa từ GameDetailsMixin
export interface DiscoverItem extends GameDetailsMixin {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  currentPrice: string;
  originalPrice?: string;
  discount?: string;
  logoUrl?: string;
  ageRating?: string;
  descRating?: string;
  interactRating?: string;
  epicRewards?: string;
  refundType?: string;
  genre?: string[];
  features?: string[];
  achievementsSection?: AchievementsSection;
  followSection?: FollowSection;
  ageImage?: string;
}

// Định nghĩa cho một tin tức (dùng cho trang /news sau này) và kế thừa từ GameDetailsMixin
export interface News extends GameDetailsMixin {
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

// Định nghĩa cho một Free games và kế thừa từ GameDetailsMixin
export interface FreeItem extends GameDetailsMixin {
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


// Định nghĩa cho Featured Game Banner và kế thừa từ GameDetailsMixin
export interface FeaturedGame extends GameDetailsMixin {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

// Định nghĩa cho một Trending và kế thừa từ GameDetailsMixin
export interface TrendingItem extends GameDetailsMixin {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  currentPrice: string;
  originalPrice?: string;
  discount?: string;
  logoUrl?: string;
  ageRating?: string;
  ageImage?: string;
  descRating?: string;
  interactRating?: string;
  epicRewards?: string;
  refundType?: string;
  genre?: string[];
  features?: string[];
  achievementsSection?: AchievementsSection;
  followSection?: FollowSection;
}

// Định nghĩa cho GameItem (dùng chung cho FeaturedLists và NewReleasesList và TopLists) và kế thừa từ GameDetailsMixin
export interface GameItem extends GameDetailsMixin {
  id: number;
  title: string;
  image: string;
  imageUrl?: string; // Add imageUrl for compatibility
  price?: string;
  currentPrice?: string; // Add currentPrice for compatibility
  originalPrice?: string;
  discount?: string;
  badge?: string;
  availability?: string;

  // Filtering props
  genre?: string[];
  features?: string[];
  category?: string;
}

// Định nghĩa cho Top New Releases và kế thừa từ GameDetailsMixin
export interface TopNewReleases extends GameDetailsMixin {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  currentPrice: string;
  originalPrice?: string;
  discount?: string;
  logoUrl?: string;
  ageRating?: string;
  ageImage?: string;
  descRating?: string;
  interactRating?: string;
  epicRewards?: string;
  refundType?: string;
  genre?: string[];
  features?: string[];
  achievementsSection?: AchievementsSection;
  followSection?: FollowSection;
}

// Định nghĩa cho EpicFirstRun và kế thừa từ GameDetailsMixin
export interface EpicFirstRun extends GameDetailsMixin {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  currentPrice: string;
  originalPrice?: string;
  discount?: string;
  logoUrl?: string;
  ageRating?: string;
  ageImage?: string;
  descRating?: string;
  interactRating?: string;
  epicRewards?: string;
  refundType?: string;
  genre?: string[];
  features?: string[];
  achievementsSection?: AchievementsSection;
  followSection?: FollowSection;
}

// Định nghĩa cho NowOn và kế thừa từ GameDetailsMixin
export interface NowOn extends GameDetailsMixin {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  currentPrice: string;
  originalPrice?: string;
  discount?: string;
  logoUrl?: string;
  ageRating?: string;
  ageImage?: string;
  descRating?: string;
  interactRating?: string;
  epicRewards?: string;
  refundType?: string;
  genre?: string[];
  features?: string[];
  achievementsSection?: AchievementsSection;
  followSection?: FollowSection;
}

// Định nghĩa cho Store Promotions Section
export interface StorePromotionItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}




// --- DỮ LIỆU GIẢ CỦA BẠN ---

// Sửa lại Dữ liệu cho Hero Section (Epic Savings) 
export const heroData: HeroBanner[] = [
  {
    id: 'where-winds-meet',
    slug: 'where-winds-meet-main',
    title: "WHERE WINDS MEET",
    date: "OUT NOW",
    description: "Write your own Wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.",
    buttonText: "Save Now",
    imageUrl: "/images/where-winds-meet.png",
    showWishlistButton: true,
    showPreviewButton: false,
    logoUrl: "/logos/where-winds-meet.png",
    // chi tiết bổ sung
    heroImage: "/images/where-winds-meet.png",
    developer: "Where Winds Meet",
    publisher: "Where Winds Meet",
    releaseDate: "2022-01-01",
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    gallery: ["/images/where-winds-meet.png", "/images/where-winds-meet.png", "/images/where-winds-meet.png"],

  },
  {
    id: 'arc-raiders',
    slug: 'arc-raiders-main',
    title: "ARC<br/>RAIDERS",
    date: "AVAILABLE NOW",
    description: "THE SURFACE IS CALLING. YOUR ADVENTURE <br/> STARTS NOW. Survival is an option, but <br/> thriving? That takes courage.",
    buttonText: "Buy Now",
    imageUrl: "/images/arc-raiders.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/arc-raiders.png",
    // chi tiết bổ sung
    heroImage: "/images/arc-raiders.jpg",
    developer: "Arc Raiders",
    publisher: "Arc Raiders",
    releaseDate: "2022-01-01",
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    gallery: ["/images/arc-raiders.jpg", "/images/arc-raiders.jpg", "/images/arc-raiders.jpg"],

  },
  {
    id: 'marvel-rivals',
    slug: 'marvel-rivals',
    title: "MARVEL<br/>RAIDERS",
    date: "AVAILABLE NOW",
    description: "THE SURFACE IS CALLING. YOUR ADVENTURE <br/> STARTS NOW. Survival is an option, but <br/> thriving? That takes courage.",
    buttonText: "Buy Now",
    imageUrl: "/images/marvel-rivals.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/marvel-rivals.jpg",
    // chi tiết bổ sung
    heroImage: "/images/marvel-rivals.jpg",
    developer: "Marvel Rivals",
    publisher: "Marvel Rivals",
    releaseDate: "2022-01-01",
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    gallery: ["/images/marvel-rivals.jpg", "/images/marvel-rivals.jpg", "/images/marvel-rivals.jpg"],

  },
  {
    id: 'cronos-the-new-dawn',
    slug: 'cronos-the-new-dawn',
    title: "CRONOS<br/>THE NEW DAWN",
    date: "AVAILABLE NOW",
    description: "A whole new breed of survival horror emerges with Cronos: The New Dawn.",
    buttonText: "Buy Now",
    imageUrl: "/images/cronos-the-new-dawn.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/cronos-the-new-dawn.png",
    // chi tiết bổ sung
    heroImage: "/images/cronos-the-new-dawn.jpg",
    developer: "Cronos The New Dawn",
    publisher: "Cronos The New Dawn",
    releaseDate: "2022-01-01",
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    gallery: ["/images/cronos-the-new-dawn.jpg", "/images/cronos-the-new-dawn.jpg", "/images/cronos-the-new-dawn.jpg"],
  },
  {
    id: 'anno-117-pax-romana',
    slug: 'anno-117-pax-romana',
    title: "ANNO 117: PAX ROMANA",
    date: "AVAILABLE NOW",
    description: "The world is on the brink of collapse. Only you can save it.",
    buttonText: "Buy Now",
    imageUrl: "/images/anno-117-pax-romana.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/anno-117-pax-romana.png",
    // chi tiết bổ sung
    heroImage: "/images/anno-117-pax-romana.jpg",
    developer: "Anno 117: Pax Romana",
    publisher: "Anno 117: Pax Romana",
    releaseDate: "2022-01-01",
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    gallery: ["/images/anno-117-pax-romana.jpg", "/images/anno-117-pax-romana.jpg", "/images/anno-117-pax-romana.jpg"],
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


// Dữ liệu cho trang /games (danh sách game chính) thêm slug và chi tiết
export const mainGameList: DiscoverItem[] = [
  {
    id: 'mouse-p-i-for-hire',
    slug: 'mouse-p-i-for-hire',
    title: "Mouse: P.I. for Hire",
    description: "Join private investigator Jack Pepper on a guns blazing, jazz-fueled adventure in MOUSE: P.I. For Hire. MOUSE combines the charm of hand-drawn rubber hose animation inspired by the classic cartoons of the 1930’s with the adrenaline and action of an explosive first person shooter.",
    imageUrl: "/game-covers/mouse-p-i-for-hire.png",
    category: "Base Game",
    currentPrice: "₫261,000",
    originalPrice: "₫361,000",
    discount: "23%",
    logoUrl: "/logos/mouse-p-i-for-hire.png",
    // chi tiết bổ sung
    heroImage: "/images/mouse-p-i-for-hire.png",
    developer: "Fumi Games",
    publisher: "PlaySide",
    releaseDate: "2022-01-01",
    epicRewards: "Earn 23% Back",
    refundType: "Self-Refundable",
    ageRating: "16+",
    ageImage: "/ageimage/IARC_16.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Available Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/mouse-p-i-for-hire.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://facebook.com/mousethegame" },
        { platform: "Twitter", url: "https://twitter.com/mousethegame" },
        { platform: "Instagram", url: "https://instagram.com/mousethegame" },
        { platform: "Youtube", url: "https://youtube.com/@mousethegame" },
        { platform: "Website", url: "https://mousethegame.com/" },
        { platform: "Discord", url: "https://discord.com/mousethegame" },
        { platform: "Reddit", url: "https://www.reddit.com/mousethegame" }
      ]
    },
    gallery: ["/video-for-discover-game/mouse-p-i-for-hire/video.mp4", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-1.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-2.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-3.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-4.jpg", "/images-discover-game/mouse-p-i-for-hire/mouse-p-i-for-hire-5.jpg"],
  },
  {
    id: 'arc-raiders',
    slug: 'arc-raiders',
    title: "ARC RAIDERS",
    description: "ARC Raiders is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/game-covers/arc-raiders.png",
    category: "Base Game",
    currentPrice: "₫596,755",
    originalPrice: "₫745,944",
    discount: "-20%",
    logoUrl: "/logos/arc-raiders.png",
    // chi tiết bổ sung
    heroImage: "/images/arc-raiders.jpg",
    developer: "Embark Studios",
    publisher: "Embark Studios",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: true,
      title: "Achievements",
      items: ["Scavenger", "Escape Artist", "For Science!", "Heart of Gold"],
      viewAllLink: "",
      imageAchievements: ["/achievements/arc-raiders/arc-raiders-1.png", "/achievements/arc-raiders/arc-raiders-2.png", "/achievements/arc-raiders/arc-raiders-3.png", "/achievements/arc-raiders/arc-raiders-4.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/arcraiders" },
        { platform: "Twitter", url: "https://twitter.com/ARCRaidersGame" },
        { platform: "Instagram", url: "https://www.instagram.com/arcraidersnews/" },
        { platform: "Youtube", url: "https://youtube.com/arcraiders" },
        { platform: "Website", url: "https://arcraiders.com/" },
        { platform: "Discord", url: "https://discord.com/invite/arcraiders" },
        { platform: "Reddit", url: "https://www.reddit.com/r/ArcRaiders/" }
      ]
    },
    gallery: ["/video-for-discover-game/arc-raiders/video.mp4", "/images-discover-game/arc-raiders/arc-raiders-1.jpg", "/images-discover-game/arc-raiders/arc-raiders-2.jpg", "/images-discover-game/arc-raiders/arc-raiders-3.jpg", "/images-discover-game/arc-raiders/arc-raiders-4.jpg", "/images-discover-game/arc-raiders/arc-raiders-5.jpg"],
  },
  {
    id: 'where-winds-meet',
    slug: 'where-winds-meet',
    title: "WHERE WINDS MEET",
    description: "Write your own Wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.",
    imageUrl: "/game-covers/where-winds-meet.png",
    category: "Base Game",
    currentPrice: "Free",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/where-winds-meet.png",
    // chi tiết bổ sung
    heroImage: "/images/where-winds-meet.png",
    developer: "Everstone Studio",
    publisher: "NetEase Games",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: true,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/achievements/where-winds-meet/where-winds-meet-1.png", "/achievements/where-winds-meet/where-winds-meet-2.png", "/achievements/where-winds-meet/where-winds-meet-3.png", "/achievements/where-winds-meet/where-winds-meet-4.png", "/achievements/where-winds-meet/where-winds-meet-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/wherewindsmeet" },
        { platform: "Twitter", url: "https://x.com/WhereWindsMeet_" },
        { platform: "Instagram", url: "https://www.instagram.com/where_winds_meet/" },
        { platform: "Youtube", url: "https://www.youtube.com/@WhereWindsMeet" },
        { platform: "Website", url: "https://www.wherewindsmeetgame.com/" },
        { platform: "Discord", url: "https://discord.com/invite/xWwyeFNRVe" },
        { platform: "Reddit", url: "https://www.reddit.com/r/wherewindsmeet_/" }
      ]
    },
    gallery: ["/video-for-discover-game/where-winds-meet-main/video.mp4", "/images-discover-game/where-winds-meet-main/where-winds-meet-main-1.jpg", "/images-discover-game/where-winds-meet-main/where-winds-meet-main-2.jpg", "/images-discover-game/where-winds-meet-main/where-winds-meet-main-3.jpg", "/images-discover-game/where-winds-meet-main/where-winds-meet-main-4.jpg", "/images-discover-game/where-winds-meet-main/where-winds-meet-main-5.jpg"],

  },
  {
    id: 'jurassic-world-3',
    slug: 'jurassic-world-3',
    title: "Jurassic World: Evolution 3",
    description: "Jurassic World: Evolution 3 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/game-covers/jurassic-world-3.jpg",
    category: "Base Game",
    currentPrice: "₫784,000",
    originalPrice: "₫980,000",
    discount: "-20%",
    logoUrl: "/logos/jurassic-world-3.png",
    // chi tiết bổ sung
    heroImage: "/images/jurassic-world-3.png",
    developer: "Frontier Developments",
    publisher: "Frontier Developments",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "16+",
    ageImage: "/ageimage/IARC_16.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: true,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/achievements/jurassic-world-3/jurassic-world-3-1.png", "/achievements/jurassic-world-3/jurassic-world-3-2.png", "/achievements/jurassic-world-3/jurassic-world-3-3.png", "/achievements/jurassic-world-3/jurassic-world-3-4.png", "/achievements/jurassic-world-3/jurassic-world-3-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/JurassicWorldEvolution" },
        { platform: "Twitter", url: "https://x.com/JW_Evolution" },
        { platform: "Instagram", url: "https://www.instagram.com/jurassicworldevolution/" },
        { platform: "Youtube", url: "https://www.youtube.com/@JurassicWorldEvolution" },
        { platform: "Website", url: "https://www.jurassicworldevolution.com/" },
        { platform: "Discord", url: "https://discord.com/invite/frontierunlocked" },
        { platform: "Reddit", url: "https://www.reddit.com/r/jurassicworldevo/" }
      ]
    },
    gallery: ["/video-for-discover-game/jurassic-world-3/video.mp4", "/images-discover-game/jurassic-world-3/jurassic-world-3-1.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-2.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-3.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-4.jpg", "/images-discover-game/jurassic-world-3/jurassic-world-3-5.jpg"],
  },
  {
    id: 'the-midnight-walkers',
    slug: 'the-midnight-walkers',
    title: "The Midnight Walkers",
    description: "The Midnight Walkers is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/game-covers/the-midnight-walkers.png",
    category: "Base Game",
    currentPrice: "Coming Soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/the-midnight-walkers.png",
    // chi tiết bổ sung
    heroImage: "/images/the-midnight-walkers.png",
    developer: "Oneway Ticket Studio",
    publisher: "Oneway Ticket Studio",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/the-midnight-walkers.png", "/images/achievements/the-midnight-walkers.png", "/images/achievements/the-midnight-walkers.png", "/images/achievements/the-midnight-walkers.png", "/images/achievements/the-midnight-walkers.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/TheMidnightWalkersDev" },
        { platform: "Twitter", url: "https://x.com/TheMidnightWalkersDev" },
        { platform: "Instagram", url: "https://www.instagram.com/themidnightwalkers/" },
        { platform: "Youtube", url: "https://www.youtube.com/@TheMidnightWalkersDev" },
        { platform: "Website", url: "https://www.onewayticketstudio.com/" },
        { platform: "Discord", url: "https://discord.com/invite/Themidnightwalkers" },
        { platform: "Reddit", url: "https://www.reddit.com/r/themidnightwalkers/" }
      ]
    },
    gallery: ["/video-for-discover-game/the-midnight-walkers/video.mp4", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-1.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-2.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-3.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-4.jpg", "/images-discover-game/the-midnight-walkers/the-midnight-walkers-5.jpg"],
  },
  {
    id: 'cyberpunk',
    slug: 'cyberpunk-2077',
    title: "Cyberpunk 2077",
    description: "Cyberpunk 2077 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/game-covers/cyberpunk-2077.png",
    category: "Base Game",
    currentPrice: "₫339,850",
    originalPrice: "₫971,000",
    discount: "-65%",
    logoUrl: "/logos/cyberpunk-2077.png",
    // chi tiết bổ sung
    heroImage: "/images/cyberpunk-2077.png",
    developer: "CD Projekt Red",
    publisher: "CD Projekt Red",
    epicRewards: "Earn 65% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: true,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/achievements/cyberpunk-2077/cyberpunk-2077-1.png", "/achievements/cyberpunk-2077/cyberpunk-2077-2.png", "/achievements/cyberpunk-2077/cyberpunk-2077-3.png", "/achievements/cyberpunk-2077/cyberpunk-2077-4.png", "/achievements/cyberpunk-2077/cyberpunk-2077-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/CDProjectRed" },
        { platform: "Twitter", url: "https://x.com/CyberpunkGame" },
        { platform: "Instagram", url: "https://www.instagram.com/CyberpunkGame" },
        { platform: "Youtube", url: "https://www.youtube.com/@CyberpunkGame" },
        { platform: "Website", url: "https://www.cyberpunk.net/vn/en/" },
        { platform: "Discord", url: "https://discord.com/invite/CyberpunkGame" },
        { platform: "Reddit", url: "https://www.reddit.com/r/CyberpunkTheGame/" }
      ]
    },
    gallery: ["/video-for-discover-game/cyberpunk-2077/video.mp4", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-1.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-2.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-3.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-4.jpg", "/images-discover-game/cyberpunk-2077/cyberpunk-2077-5.jpg"],
  },
  {
    id: 'black-ops-7',
    slug: 'black-ops-7',
    title: "Black Ops 7",
    description: "Black Ops 7 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/game-covers/black-ops-7.png",
    category: "Base Game",
    currentPrice: "₫979,650",
    originalPrice: "₫1,399,500",
    discount: "-30%",
    logoUrl: "/logos/black-ops-7.png",
    // chi tiết bổ sung
    heroImage: "/images/black-ops-7.png",
    developer: " Treyarch",
    publisher: "Activision",
    epicRewards: "Earn 30% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/black-ops-7.png", "/images/achievements/black-ops-7.png", "/images/achievements/black-ops-7.png", "/images/achievements/black-ops-7.png", "/images/achievements/black-ops-7.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/CallofDuty" },
        { platform: "Twitter", url: "https://x.com/callofduty" },
        { platform: "Instagram", url: "https://www.instagram.com/callofduty" },
        { platform: "Youtube", url: "https://www.youtube.com/@CallofDuty" },
        { platform: "Website", url: "https://www.callofduty.com/blackops7" },
        { platform: "Discord", url: "https://discord.com/invite/callofdutyofficial" },
        { platform: "Reddit", url: "https://www.reddit.com/r/CODBlackOps7/" }
      ]
    },
    gallery: ["/video-for-discover-game/black-ops-7/video.mp4", "/images-discover-game/black-ops-7/black-ops-7-1.jpg", "/images-discover-game/black-ops-7/black-ops-7-2.jpg", "/images-discover-game/black-ops-7/black-ops-7-3.jpg", "/images-discover-game/black-ops-7/black-ops-7-4.jpg", "/images-discover-game/black-ops-7/black-ops-7-5.jpg"],
  },
  {
    id: 'dying-light-the-beast',
    slug: 'dying-light-the-beast',
    title: "Dying Light: The Beast",
    description: "Dying Light: The Beast is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/game-covers/dying-light-the-beast.png",
    category: "Base Game",
    currentPrice: "₫792,000",
    originalPrice: "₫990,000",
    discount: "-20%",
    logoUrl: "/logos/dying-light-the-beast.png",
    // chi tiết bổ sung
    heroImage: "/images/dying-light-the-beast.png",
    developer: "Techland",
    publisher: "Techland",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: true,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/achievements/dying-light-the-beast/dying-light-the-beast-1.png", "/achievements/dying-light-the-beast/dying-light-the-beast-2.png", "/achievements/dying-light-the-beast/dying-light-the-beast-3.png", "/achievements/dying-light-the-beast/dying-light-the-beast-4.png", "/achievements/dying-light-the-beast/dying-light-the-beast-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/DyingLightGame/" },
        { platform: "Twitter", url: "https://x.com/dyinglightgame" },
        { platform: "Instagram", url: "https://www.instagram.com/dyinglightgame" },
        { platform: "Youtube", url: "https://www.youtube.com/@DyingLightGameOfficial" },
        { platform: "Website", url: "https://dyinglightgame.com/the-beast" },
        { platform: "Discord", url: "https://discord.com/invite/dyinglight" },
        { platform: "Reddit", url: "https://www.reddit.com/r/dyinglight/" }
      ]
    },
    gallery: ["/video-for-discover-game/dying-light-the-beast/video.mp4", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-1.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-2.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-3.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-4.jpg", "/images-discover-game/dying-light-the-beast/dying-light-the-beast-5.jpg"],
  },
  {
    id: 'resident-evil-requiem',
    slug: 'resident-evil-requiem',
    title: "Resident Evil Requiem",
    description: "Resident Evil Requiem is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/game-covers/resident-evil-requiem.jpg",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/resident-evil-requiem.png",
    // chi tiết bổ sung
    heroImage: "/images/resident-evil-requiem.png",
    developer: "Capcom",
    publisher: "Capcom",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/resident-evil-requiem.png", "/images/achievements/resident-evil-requiem.png", "/images/achievements/resident-evil-requiem.png", "/images/achievements/resident-evil-requiem.png", "/images/achievements/resident-evil-requiem.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/residentevil" },
        { platform: "Twitter", url: "https://x.com/RE_games" },
        { platform: "Instagram", url: "https://www.instagram.com/re_games/" },
        { platform: "Youtube", url: "https://www.youtube.com/@residentevil" },
        { platform: "Website", url: "https://www.residentevil.com/" },
        { platform: "Discord", url: "https://discord.com/invite/residentevil" },
        { platform: "Reddit", url: "https://www.reddit.com/r/residentevil/" }
      ]
    },
    gallery: ["/video-for-discover-game/resident-evil-requiem/video.mp4", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-1.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-2.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-3.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-4.jpg", "/images-discover-game/resident-evil-requiem/resident-evil-requiem-5.jpg"],
  },
  {
    id: 'subnautica-2',
    slug: 'subnautica-2',
    title: "Subnautica 2",
    description: "Subnautica 2 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/game-covers/subnautica-2.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/subnautica-2.png",
    // chi tiết bổ sung
    heroImage: "/images/subnautica-2.png",
    developer: "Unknown Worlds",
    publisher: "Unknown Worlds",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "16+",
    ageImage: "/ageimage/IARC_16.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/subnautica-2/video.mp4", "/images-discover-game/subnautica-2/subnautica-2-1.jpg", "/images-discover-game/subnautica-2/subnautica-2-2.jpg", "/images-discover-game/subnautica-2/subnautica-2-3.jpg", "/images-discover-game/subnautica-2/subnautica-2-4.jpg", "/images-discover-game/subnautica-2/subnautica-2-5.jpg"],
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
    imageUrl: "/game-covers/arc-raiders.png",
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
    image: '/promos/holiday-sale.png',
    type: 'promo',
    description: 'Save up to 75% on selected titles this holiday season.',
    buttonText: 'Learn More'
  },
  {
    id: 'free-game-week',
    title: 'Free Game of the Week',
    image: '/promos/free-game.png',
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
    slug: 'lords-of-the-fallen-ii',
    title: "Lords of the Fallen II",
    description: "Lords of the Fallen II is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/lords-of-the-fallen-ii.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/lords-of-the-fallen.png",
    // chi tiết bổ sung
    heroImage: "/images/lords-of-the-fallen-ii.png",
    developer: "Unknown Worlds",
    publisher: "Unknown Worlds",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/lords-of-the-fallen-ii/video.mp4", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-1.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-2.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-3.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-4.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-5.jpg"],
  },
  {
    id: 'the-wolf-among-us-2',
    slug: 'the-wolf-among-us-2',
    title: "The Wolf Among Us 2",
    description: "The Wolf Among Us 2 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/trending/the-wolf-among-us-2.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/the-wolf-among-us-2.png",
    // chi tiết bổ sung
    heroImage: "/images/the-wolf-among-us-2.png",
    developer: "Unknown Worlds",
    publisher: "Unknown Worlds",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/the-wolf-among-us-2/video.mp4", "/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-1.jpg", "/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-2.jpg", "/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-3.jpg", "/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-4.jpg", "/images-discover-game/the-wolf-among-us-2/the-wolf-among-us-2-5.jpg"],
  },
  {
    id: 'arknights-endfield',
    slug: 'arknights-endfield',
    title: "Arknights Endfield",
    description: "Arknights Endfield is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/trending/arknights-endfield.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/arknights-endfield.png",
    // chi tiết bổ sung
    heroImage: "/images/arknights-endfield.png",
    developer: "Unknown Worlds",
    publisher: "Unknown Worlds",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/arknights-endfield/video.mp4", "/images-discover-game/arknights-endfield/arknights-endfield-1.jpg", "/images-discover-game/arknights-endfield/arknights-endfield-2.jpg", "/images-discover-game/arknights-endfield/arknights-endfield-3.jpg", "/images-discover-game/arknights-endfield/arknights-endfield-4.jpg", "/images-discover-game/arknights-endfield/arknights-endfield-5.jpg"],
  },
  {
    id: 'assassins-creed-valhalla',
    slug: 'assassins-creed-valhalla',
    title: "Assassin's Creed Valhalla",
    description: "Assassin's Creed Valhalla is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/trending/assassins-creed-valhalla.png",
    category: "Base Game",
    currentPrice: "₫599,900",
    originalPrice: "₫1,299,900",
    discount: "55%",
    logoUrl: "/logos/assassins-creed-valhalla.png",
    // chi tiết bổ sung
    heroImage: "/images/assassins-creed-valhalla.png",
    developer: "Ubisoft",
    publisher: "Ubisoft",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/assassins-creed-valhalla/video.mp4", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-1.jpg", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-2.jpg", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-3.jpg", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-4.jpg", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-5.jpg"],
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
    slug: 'lords-of-the-fallen-ii',
    title: "Lords of the Fallen II",
    description: "Lords of the Fallen II is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/lords-of-the-fallen-ii.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/lords-of-the-fallen.png",
    // chi tiết bổ sung
    heroImage: "/images/lords-of-the-fallen-ii.png",
    developer: "Unknown Worlds",
    publisher: "Unknown Worlds",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/lords-of-the-fallen-ii/video.mp4", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-1.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-2.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-3.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-4.jpg", "/images-discover-game/lords-of-the-fallen-ii/lords-of-the-fallen-ii-5.jpg"],
  },
  {
    id: 'lies-of-p',
    slug: 'lies-of-p',
    title: "Lies of P",
    description: "Lies of P is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/lies-of-p.png",
    category: "Base Game",
    currentPrice: "₫599,900",
    originalPrice: "₫1,299,900",
    discount: "55%",
    logoUrl: "/logos/lies-of-p.png",
    // chi tiết bổ sung
    heroImage: "/images/lies-of-p.png",
    developer: "",
    publisher: "",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/lies-of-p/video.mp4", "/images-discover-game/lies-of-p/lies-of-p-1.jpg", "/images-discover-game/lies-of-p/lies-of-p-2.jpg", "/images-discover-game/lies-of-p/lies-of-p-3.jpg", "/images-discover-game/lies-of-p/lies-of-p-4.jpg", "/images-discover-game/lies-of-p/lies-of-p-5.jpg"],
  },
  {
    id: 'assassins-creed-valhalla',
    slug: 'assassins-creed-valhalla',
    title: "Assassin's Creed Valhalla",
    description: "Assassin's Creed Valhalla is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/assassins-creed-valhalla.png",
    category: "Base Game",
    currentPrice: "₫599,900",
    originalPrice: "₫1,299,900",
    discount: "55%",
    logoUrl: "/logos/assassins-creed-valhalla.png",
    // chi tiết bổ sung
    heroImage: "/images/assassins-creed-valhalla.png",
    developer: "Ubisoft",
    publisher: "Ubisoft",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/assassins-creed-valhalla/video.mp4", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-1.jpg", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-2.jpg", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-3.jpg", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-4.jpg", "/images-discover-game/assassins-creed-valhalla/assassins-creed-valhalla-5.jpg"],
  },
  {
    id: 'crystal-of-atlantean',
    slug: 'crystal-of-atlantean',
    title: "Crystal of Atlantean",
    description: "Crystal of Atlantean is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/crystal-of-atlantean.png",
    category: "Base Game",
    currentPrice: "Free",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/crystal-of-atlantean.png",
    // chi tiết bổ sung
    heroImage: "/images/crystal-of-atlantean.png",
    developer: "Unknown Worlds",
    publisher: "Unknown Worlds",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "16+",
    ageImage: "/ageimage/IARC_16.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/crystal-of-atlantean/video.mp4", "/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-1.jpg", "/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-2.jpg", "/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-3.jpg", "/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-4.jpg", "/images-discover-game/crystal-of-atlantean/crystal-of-atlantean-5.jpg"],
  },
  {
    id: 'celeste',
    slug: 'celeste',
    title: "Celeste",
    description: "Celeste is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/celeste.png",
    category: "Base Game",
    currentPrice: "₫299,900",
    originalPrice: "₫599,900",
    discount: "50%",
    logoUrl: "/logos/celeste.png",
    // chi tiết bổ sung
    heroImage: "/images/celeste.png",
    developer: "Maddy Makes Games Inc., Extremely OK Games, Ltd.",
    publisher: "Maddy Makes Games Inc.",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "7+",
    ageImage: "/ageimage/IARC_7.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/celeste/video.mp4", "/images-discover-game/celeste/celeste-1.jpg", "/images-discover-game/celeste/celeste-2.jpg", "/images-discover-game/celeste/celeste-3.jpg", "/images-discover-game/celeste/celeste-4.jpg", "/images-discover-game/celeste/celeste-5.jpg"],
  },
  {
    id: 'rusty-lake-hotel',
    slug: 'rusty-lake-hotel',
    title: "Rusty Lake Hotel",
    description: "Rusty Lake Hotel is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/rusty-lake-hotel.png",
    category: "Base Game",
    currentPrice: "₫129,900",
    originalPrice: "₫399,900",
    discount: "70%",
    logoUrl: "/logos/rusty-lake-hotel.png",
    // chi tiết bổ sung
    heroImage: "/images/rusty-lake-hotel.png",
    developer: "Rusty Lake",
    publisher: "Rusty Lake",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2025-12-25",
    ageRating: "7+",
    ageImage: "/ageimage/IARC_7.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/rusty-lake-hotel/video.mp4", "/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-1.jpg", "/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-2.jpg", "/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-3.jpg", "/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-4.jpg", "/images-discover-game/rusty-lake-hotel/rusty-lake-hotel-5.jpg"],
  },
  {
    id: 'when-the-past-was-around',
    slug: 'when-the-past-was-around',
    title: "When the Past Was Around",
    description: "When the Past Was Around is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/when-the-past-was-around.png",
    category: "Base Game",
    currentPrice: "₫69,900",
    originalPrice: "₫129,900",
    discount: "50%",
    logoUrl: "/logos/when-the-past-was-around.png",
    // chi tiết bổ sung
    heroImage: "/images/when-the-past-was-around.png",
    developer: "Mojiken",
    publisher: "Toge Production",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_12.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/when-the-past-was-around/video.mp4", "/images-discover-game/when-the-past-was-around/when-the-past-was-around-1.jpg", "/images-discover-game/when-the-past-was-around/when-the-past-was-around-2.jpg", "/images-discover-game/when-the-past-was-around/when-the-past-was-around-3.jpg", "/images-discover-game/when-the-past-was-around/when-the-past-was-around-4.jpg", "/images-discover-game/when-the-past-was-around/when-the-past-was-around-5.jpg"],
  },
  {
    id: 'the-hunter-call-of-the-wild',
    slug: 'the-hunter-call-of-the-wild',
    title: "The Hunter: Call of the Wild",
    description: "The Hunter: Call of the Wild is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/the-hunter-call-of-the-wild.png",
    category: "Base Game",
    currentPrice: "₫26,000",
    originalPrice: "₫260,000",
    discount: "-90%",
    logoUrl: "/logos/the-hunter-call-of-the-wild.png",
    // chi tiết bổ sung
    heroImage: "/images/the-hunter-call-of-the-wild.png",
    developer: "Expansive Worlds",
    publisher: "Avalanche Studios",
    epicRewards: "Earn 25% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_12.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/the-hunter-call-of-the-wild/video.mp4", "/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-1.jpg", "/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-2.jpg", "/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-3.jpg", "/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-4.jpg", "/images-discover-game/the-hunter-call-of-the-wild/the-hunter-call-of-the-wild-5.jpg"],
  },
  {
    id: 'florence',
    slug: 'florence',
    title: "Florence",
    description: "Florence Yeoh feels a little... stuck. Her life is an endless routine of work, sleep, and spending too much time on social media. Then one day, she meets a cello player named Krish who changes everything about how she sees the world and herself.",
    imageUrl: "/top-new-releases/florence.png",
    category: "Base Game",
    currentPrice: "Free",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/florence.png",
    // chi tiết bổ sung
    heroImage: "/images/florence.png",
    developer: "Mountains",
    publisher: "Annapurna Interactive",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2025-12-25",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_16.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/florence/video.mp4", "/images-discover-game/florence/florence-1.jpg", "/images-discover-game/florence/florence-2.jpg", "/images-discover-game/florence/florence-3.jpg", "/images-discover-game/florence/florence-4.jpg", "/images-discover-game/florence/florence-5.jpg"],
  },
  {
    id: 'stray',
    slug: 'stray',
    title: "Stray",
    description: "Stray is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/top-new-releases/stray.jpg",
    category: "Base Game",
    currentPrice: "₫227.500",
    originalPrice: "₫379.000",
    discount: "-40%",
    logoUrl: "/logos/stray.png",
    // chi tiết bổ sung
    heroImage: "/images/stray.jpg",
    developer: "BlueTwelve Studio",
    publisher: "Annapurna Interactive",
    epicRewards: "Earn 30% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_16.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/stray/video.mp4", "/images-discover-game/stray/stray-1.jpg", "/images-discover-game/stray/stray-2.jpg", "/images-discover-game/stray/stray-3.jpg", "/images-discover-game/stray/stray-4.jpg", "/images-discover-game/stray/stray-5.jpg"],
  },

];

// Dữ liệu cho trang/top-lists (Top Add-Ons, Top Free to Play, Top Demos)

// CỘT 1: TOP ADD-ONS
export const topAddOns: GameItem[] = [
  { id: 1, title: "INAZUMA ELEVEN: Victory Road", image: "/new-releases-list/inazuma.jpg", badge: "Now On Epic", price: "₫1,200,000" },
  { id: 2, title: "Constance", image: "/new-releases-list/constance.png", badge: "Now On Epic", price: "Free" },
  { id: 3, title: "Dispatch", image: "/new-releases-list/dispatch.jpg", price: "₫300,000" },
  { id: 4, title: "DOOM: The Dark Ages", image: "/new-releases-list/doom.png", badge: "Now On Epic", price: "₫1,200,000" },
  { id: 5, title: "Mouthwashing", image: "/new-releases-list/mouthwashing.png", badge: "Now On Epic", price: "Free" },
];

// CỘT 2: TOP FREE TO PLAY
export const topFreeToPlay: GameItem[] = [
  { id: 1, title: "KINGDOM HEARTS III + Re Mind...", image: "/new-releases-list/kh3.png", price: "₫1,250,000" },
  { id: 2, title: "Goat Simulator 3", image: "/new-releases-list/goat3.png", discount: "-60%", originalPrice: "₫385,000", price: "₫154,000" },
  { id: 3, title: "Hades II", image: "/new-releases-list/hades2.jpg", price: "₫385,000" },
  { id: 4, title: "Clair Obscur: Expedition 33", image: "/new-releases-list/clair.png", price: "₫770,000" },
  { id: 5, title: "Titanfall® 2: Ultimate Edition", image: "/new-releases-list/titanfall2.png", discount: "-85%", originalPrice: "₫700,000", price: "₫105,000" },
];

// CỘT 3: TOP DEMOS
export const topDemos: GameItem[] = [
  { id: 1, title: "Project Motor Racing", image: "/new-releases-list/motor.png", availability: "Available 11/25/25", price: "₫860,000" },
  { id: 2, title: "Subnautica 2", image: "/new-releases-list/subnautica2.png", availability: "Available 11/26/25" },
  { id: 3, title: "Slay the Spire 2", image: "/new-releases-list/slay.jpg", availability: "Available 11/27/25" },
  { id: 4, title: "Lost Ember: Rekindled Edition", image: "/new-releases-list/lostember.png", availability: "Available 11/27/25" },
  { id: 5, title: "PUBG: BLINDSPOT", image: "/new-releases-list/blur.png", availability: "Available Nov 2025" },
];

// Dữ liệu cho EpicFirstRunSection
export const epicFirstRun: EpicFirstRun[] = [
  {
    id: 'back-4-blood',
    slug: 'back-4-blood',
    title: "Back 4 Blood: Standard Edition",
    description: "Back 4 Blood: Standard Edition is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/back-4-blood.jpg",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/back-4-blood.png",
    // chi tiết bổ sung
    heroImage: "/images/back-4-blood.jpg",
    developer: "Unknown Worlds",
    publisher: "Unknown Worlds",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png", "/images/achievements/lords-of-the-fallen-ii.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/back-4-blood/video.mp4", "/images-discover-game/back-4-blood/back-4-blood-1.jpg", "/images-discover-game/back-4-blood/back-4-blood-2.jpg", "/images-discover-game/back-4-blood/back-4-blood-3.jpg", "/images-discover-game/back-4-blood/back-4-blood-4.jpg", "/images-discover-game/back-4-blood/back-4-blood-5.jpg"],
  },
  {
    id: 'batman-arkham-knight',
    slug: 'batman-arkham-knight',
    title: "Batman Arkham Knight",
    description: "Batman Arkham Knight is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/batman-arkham-knight.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/batman-arkham-knight.png",
    // chi tiết bổ sung
    heroImage: "/images/batman-arkham-knight.png",
    developer: "",
    publisher: "",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/batman-arkham-knight/video.mp4", "/images-discover-game/batman-arkham-knight/batman-arkham-knight-1.jpg", "/images-discover-game/batman-arkham-knight/batman-arkham-knight-2.jpg", "/images-discover-game/batman-arkham-knight/batman-arkham-knight-3.jpg", "/images-discover-game/batman-arkham-knight/batman-arkham-knight-4.jpg", "/images-discover-game/batman-arkham-knight/batman-arkham-knight-5.jpg"],
  },
  {
    id: 'felix-the-reaper',
    slug: 'felix-the-reaper',
    title: "Felix The Reaper",
    description: "Felix The Reaper is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/felix-the-reaper.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/felix-the-reaper.png",
    // chi tiết bổ sung
    heroImage: "/images/felix-the-reaper.png",
    developer: "Ubisoft",
    publisher: "Ubisoft",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "7+",
    ageImage: "/ageimage/IARC_7.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/felix-the-reaper/video.mp4", "/images-discover-game/felix-the-reaper/felix-the-reaper-1.jpg", "/images-discover-game/felix-the-reaper/felix-the-reaper-2.jpg", "/images-discover-game/felix-the-reaper/felix-the-reaper-3.jpg", "/images-discover-game/felix-the-reaper/felix-the-reaper-4.jpg", "/images-discover-game/felix-the-reaper/felix-the-reaper-5.jpg"],
  },
  {
    id: 'hell-is-us',
    slug: 'hell-is-us',
    title: "Hell is Us",
    description: "Hell is Us is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/hell-is-us.png",
    category: "Base Game",
    currentPrice: "Free",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/hell-is-us.png",
    // chi tiết bổ sung
    heroImage: "/images/hell-is-us.png",
    developer: "Unknown Worlds",
    publisher: "Unknown Worlds",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/hell-is-us/video.mp4", "/images-discover-game/hell-is-us/hell-is-us-1.jpg", "/images-discover-game/hell-is-us/hell-is-us-2.jpg", "/images-discover-game/hell-is-us/hell-is-us-3.jpg", "/images-discover-game/hell-is-us/hell-is-us-4.jpg", "/images-discover-game/hell-is-us/hell-is-us-5.jpg"],
  },
  {
    id: 'once-human',
    slug: 'once-human',
    title: "Once Human",
    description: "Once Human is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/once-human.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/once-human.png",
    // chi tiết bổ sung
    heroImage: "/images/once-human.png",
    developer: "Maddy Makes Games Inc., Extremely OK Games, Ltd.",
    publisher: "Maddy Makes Games Inc.",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/once-human/video.mp4", "/images-discover-game/once-human/once-human-1.jpg", "/images-discover-game/once-human/once-human-2.jpg", "/images-discover-game/once-human/once-human-3.jpg", "/images-discover-game/once-human/once-human-4.jpg", "/images-discover-game/once-human/once-human-5.jpg"],
  },
  {
    id: 'octopath-traveler',
    slug: 'octopath-traveler',
    title: "Octopath Traveler II",
    description: "Octopath Traveler II is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/octopath-traveler.jpg",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/octopath-traveler.png",
    // chi tiết bổ sung
    heroImage: "/images/octopath-traveler.png",
    developer: "Rusty Lake",
    publisher: "Rusty Lake",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2025-12-25",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_12.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/octopath-traveler/video.mp4", "/images-discover-game/octopath-traveler/octopath-traveler-1.jpg", "/images-discover-game/octopath-traveler/octopath-traveler-2.jpg", "/images-discover-game/octopath-traveler/octopath-traveler-3.jpg", "/images-discover-game/octopath-traveler/octopath-traveler-4.jpg", "/images-discover-game/octopath-traveler/octopath-traveler-5.jpg"],
  },
  {
    id: 'reanimal',
    slug: 'reanimal',
    title: "Reanimal",
    description: "Reanimal is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/reanimal.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/reanimal.png",
    // chi tiết bổ sung
    heroImage: "/images/reanimal.png",
    developer: "Mojiken",
    publisher: "Toge Production",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "12+",
    ageImage: "/ageimage/IARC_12.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/reanimal/video.mp4", "/images-discover-game/reanimal/reanimal-1.jpg", "/images-discover-game/reanimal/reanimal-2.jpg", "/images-discover-game/reanimal/reanimal-3.jpg", "/images-discover-game/reanimal/reanimal-4.jpg", "/images-discover-game/reanimal/reanimal-5.jpg"],
  },
  {
    id: 'vampire-the-masquerade',
    slug: 'vampire-the-masquerade',
    title: "Vampire: The Masquerade",
    description: "Vampire: The Masquerade is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/vampire-the-masquerade.jpg",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/vampire-the-masquerade.png",
    // chi tiết bổ sung
    heroImage: "/images/vampire-the-masquerade.png",
    developer: "Expansive Worlds",
    publisher: "Avalanche Studios",
    epicRewards: "Earn 25% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/vampire-the-masquerade/video.mp4", "/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-1.jpg", "/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-2.jpg", "/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-3.jpg", "/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-4.jpg", "/images-discover-game/vampire-the-masquerade/vampire-the-masquerade-5.jpg"],
  },
  {
    id: 'doom-the-dark-ages',
    slug: 'doom-the-dark-ages',
    title: "DOOM: The Dark Ages",
    description: "Florence Yeoh feels a little... stuck. Her life is an endless routine of work, sleep, and spending too much time on social media. Then one day, she meets a cello player named Krish who changes everything about how she sees the world and herself.",
    imageUrl: "/epic-form-epic-first-run/doom-the-dark-ages.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/doom-the-dark-ages.png",
    // chi tiết bổ sung
    heroImage: "/images/doom-the-dark-ages.png",
    developer: "Mountains",
    publisher: "Annapurna Interactive",
    epicRewards: "Earn 20% Back",
    refundType: "Self-Refundable",
    releaseDate: "2025-12-25",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/doom-the-dark-ages/video.mp4", "/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-1.jpg", "/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-2.jpg", "/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-3.jpg", "/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-4.jpg", "/images-discover-game/doom-the-dark-ages/doom-the-dark-ages-5.jpg"],
  },
  {
    id: 'clair-obscur',
    slug: 'clair-obscur',
    title: "Clair Obscur: Expedition 33",
    description: "Clair Obscur: Expedition 33 is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/epic-form-epic-first-run/clair-obscur.png",
    category: "Base Game",
    currentPrice: "Coming soon",
    originalPrice: "",
    discount: "",
    logoUrl: "/logos/clair-obscur.png",
    // chi tiết bổ sung
    heroImage: "/images/clair-obscur.png",
    developer: "BlueTwelve Studio",
    publisher: "Annapurna Interactive",
    epicRewards: "Earn 30% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "FPS", "Cartoony", "Detective", "Indie", "Shooter", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png", "/images/achievements/subnautica-2.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/subnautica" },
        { platform: "Twitter", url: "https://x.com/subnautica" },
        { platform: "Instagram", url: "https://www.instagram.com/subnautica" },
        { platform: "Youtube", url: "https://www.youtube.com/@subnautica" },
        { platform: "Website", url: "https://subnautica.com/en" },
        { platform: "Discord", url: "https://discord.com/invite/subnautica" },
        { platform: "Reddit", url: "https://www.reddit.com/r/subnautica/" }
      ]
    },
    gallery: ["/video-for-discover-game/clair-obscur/video.mp4", "/images-discover-game/clair-obscur/clair-obscur-1.jpg", "/images-discover-game/clair-obscur/clair-obscur-2.jpg", "/images-discover-game/clair-obscur/clair-obscur-3.jpg", "/images-discover-game/clair-obscur/clair-obscur-4.jpg", "/images-discover-game/clair-obscur/clair-obscur-5.jpg"],
  },
];

// Dữ liệu cho NowOnSection
export const nowOn: NowOn[] = [
  {
    id: "kingdom-come-deliverance-ii",
    slug: "kingdom-come-deliverance-ii",
    title: "Kingdom Come: Deliverance II",
    description: "A thrilling story-driven action RPG, with a rich open world, set in 15th century Medieval Europe. Experience the ultimate medieval adventure - through the eyes of young Henry - as you embark on a journey of epic proportions.",
    imageUrl: "/now-on/kingdom-come-deliverance-ii.png",
    category: "Base Game",
    currentPrice: "₫499,500",
    originalPrice: "₫999,000",
    discount: "50%",
    logoUrl: "/logos/kingdom-come-deliverance-ii.png",
    // chi tiết bổ sung
    heroImage: "/now-on/kingdom-come-deliverance-ii.png",
    developer: "The Fun Pimps",
    publisher: "The Fun Pimps Entertainment",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Shooter", "Survival", "Zombie"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/kingdom-come-deliverance-ii-1.png", "/images/achievements/kingdom-come-deliverance-ii-2.png", "/images/achievements/kingdom-come-deliverance-ii-3.png", "/images/achievements/kingdom-come-deliverance-ii-4.png", "/images/achievements/kingdom-come-deliverance-ii-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/7DaysToDie" },
        { platform: "Twitter", url: "https://twitter.com/7DaysToDie" },
        { platform: "Instagram", url: "https://www.instagram.com/7daystodie" },
        { platform: "Youtube", url: "https://www.youtube.com/c/7DaysToDie" },
        { platform: "Website", url: "https://7daystodie.com/" },
        { platform: "Discord", url: "https://discord.gg/7DaysToDie" },
        { platform: "Reddit", url: "" }
      ]
    },
    gallery: ["/video-for-discover-game/kingdom-come-deliverance-ii/video.mp4", "/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-1.jpg", "/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-2.jpg", "/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-3.jpg", "/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-4.jpg", "/images-discover-game/kingdom-come-deliverance-ii/kingdom-come-deliverance-ii-5.jpg",]
  },
  {
    id: "persona-5-royal",
    slug: "persona-5-royal",
    title: "Persona 5 Royal",
    description: "Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways!",
    imageUrl: "/now-on/persona-5-royal.png",
    category: "Base Game",
    currentPrice: "₫414,000",
    originalPrice: "₫1,380,000",
    discount: "70%",
    logoUrl: "/logos/persona-5-royal.png",
    heroImage: "/now-on/persona-5-royal.png",
    developer: "Atlus",
    publisher: "Sega",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "16+",
    ageImage: "/ageimage/IARC_16.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/persona-5-royal/video.mp4", "/images-discover-game/persona-5-royal/persona-5-royal-1.jpg", "/images-discover-game/persona-5-royal/persona-5-royal-2.jpg", "/images-discover-game/persona-5-royal/persona-5-royal-3.jpg", "/images-discover-game/persona-5-royal/persona-5-royal-4.jpg", "/images-discover-game/persona-5-royal/persona-5-royal-5.jpg",]
  },
  {
    id: "baldurs-gate-3",
    slug: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    description: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
    imageUrl: "/now-on/baldurs-gate-3.png",
    category: "Base Game",
    currentPrice: "₫414,000",
    originalPrice: "₫1,380,000",
    discount: "70%",
    logoUrl: "/logos/baldurs-gate-3.png",
    heroImage: "/now-on/baldurs-gate-3.png",
    developer: "Larian Studios",
    publisher: "CD Projekt Red",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/baldurs-gate-3/video.mp4", "/images-discover-game/baldurs-gate-3/baldurs-gate-3-1.jpg", "/images-discover-game/baldurs-gate-3/baldurs-gate-3-2.jpg", "/images-discover-game/baldurs-gate-3/baldurs-gate-3-3.jpg", "/images-discover-game/baldurs-gate-3/baldurs-gate-3-4.jpg", "/images-discover-game/baldurs-gate-3/baldurs-gate-3-5.jpg",]
  },
  {
    id: "dead-island-2",
    slug: "dead-island-2",
    title: "Dead Island 2",
    description: "A deadly virus is spreading across Los Angeles, turning its inhabitants into zombies. Bitten, infected, but more than just immune, uncover the truth behind the outbreak and discover who - or what - you are. Survive, evolve and become the ultimate Zombie Slayer.",
    imageUrl: "/now-on/dead-island-2.png",
    category: "Base Game",
    currentPrice: "₫414,000",
    originalPrice: "₫1,380,000",
    discount: "70%",
    logoUrl: "/logos/dead-island-2.png",
    heroImage: "/now-on/dead-island-2.png",
    developer: "Larian Studios",
    publisher: "CD Projekt Red",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/dead-island-2/video.mp4", "/images-discover-game/dead-island-2/dead-island-2-1.jpg", "/images-discover-game/dead-island-2/dead-island-2-2.jpg", "/images-discover-game/dead-island-2/dead-island-2-3.jpg", "/images-discover-game/dead-island-2/dead-island-2-4.jpg", "/images-discover-game/dead-island-2/dead-island-2-5.jpg",]
  },
  {
    id: "hades-ii",
    slug: "hades-ii",
    title: "Hades II",
    description: "",
    imageUrl: "/now-on/hades-ii.png",
    category: "Base Game",
    currentPrice: "₫414,000",
    originalPrice: "₫1,380,000",
    discount: "70%",
    logoUrl: "/logos/hades-ii.png",
    heroImage: "/now-on/hades-ii.png",
    developer: "Larian Studios",
    publisher: "CD Projekt Red",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/hades-ii/video.mp4", "/images-discover-game/hades-ii/hades-ii-1.jpg", "/images-discover-game/hades-ii/hades-ii-2.jpg", "/images-discover-game/hades-ii/hades-ii-3.jpg", "/images-discover-game/hades-ii/hades-ii-4.jpg", "/images-discover-game/hades-ii/hades-ii-5.jpg",]
  },
  {
    id: "final-fantasy-xvi",
    slug: "final-fantasy-xvi",
    title: "Final Fantasy XVI",
    description: "An epic dark fantasy where fates are decided by mighty Eikons and the Dominants who wield them. This is the tale of Clive Rosfield, a tragic warrior who swears revenge on the Dark Eikon Ifrit, a mysterious entity that leaves naught but calamity in its wake.",
    imageUrl: "/now-on/final-fantasy-xvi.png",
    category: "Base Game",
    currentPrice: "₫1.249.000",
    originalPrice: "₫1.249.000",
    discount: "0%",
    logoUrl: "/logos/final-fantasy-xvi.png",
    heroImage: "/now-on/final-fantasy-xvi.png",
    developer: "Square Enix",
    publisher: "Square Enix",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/final-fantasy-xvi/video.mp4", "/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-1.jpg", "/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-2.jpg", "/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-3.jpg", "/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-4.jpg", "/images-discover-game/final-fantasy-xvi/final-fantasy-xvi-5.jpg",]
  },
  {
    id: "the-hundred-line-last-defense-academy",
    slug: "the-hundred-line-last-defense-academy",
    title: "The Hundred: Line Last Defense Academy",
    description: "The Hundred: Line Last Defense Academy is a tactical action game where players control a group of soldiers as they fight against an enemy force. The game features a variety of weapons and equipment, as well as a range of missions and objectives to complete.",
    imageUrl: "/now-on/the-hundred-line-last-defense-academy.png",
    category: "Base Game",
    currentPrice: "₫1.249.000",
    originalPrice: "₫1.249.000",
    discount: "0%",
    logoUrl: "/logos/the-hundred-line-last-defense-academy.png",
    heroImage: "/now-on/the-hundred-line-last-defense-academy.png",
    developer: "Square Enix",
    publisher: "Square Enix",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/the-hundred-line-last-defense-academy/video.mp4", "/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-1.jpg", "/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-2.jpg", "/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-3.jpg", "/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-4.jpg", "/images-discover-game/the-hundred-line-last-defense-academy/the-hundred-line-last-defense-academy-5.jpg",]
  },
  {
    id: "monster-hunter-wilds",
    slug: "monster-hunter-wilds",
    title: "Monster Hunter: Wilds",
    description: "The unbridled force of nature runs wild and relentless, with environments transforming drastically from one moment to the next. This is a story of monsters and humans and their struggles to live in harmony in a world of duality.",
    imageUrl: "/now-on/monster-hunter-wilds.png",
    category: "Base Game",
    currentPrice: "₫1.249.000",
    originalPrice: "₫1.249.000",
    discount: "0%",
    logoUrl: "/logos/monster-hunter-wilds.png",
    heroImage: "/now-on/monster-hunter-wilds.png",
    developer: "Square Enix",
    publisher: "Square Enix",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/monster-hunter-wilds/video.mp4", "/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-1.jpg", "/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-2.jpg", "/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-3.jpg", "/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-4.jpg", "/images-discover-game/monster-hunter-wilds/monster-hunter-wilds-5.jpg",]
  },
  {
    id: "red-dead-redemption-2",
    slug: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    description: "Arthur Morgan and the Van der Linde Gang are outlaws on the run. With federal agents and bounty hunters massing on their heels, the gang must rob, steal, and fight their way across the rugged heartland in order to survive.",
    imageUrl: "/now-on/red-dead-redemption-2.png",
    category: "Base Game",
    currentPrice: "₫1.249.000",
    originalPrice: "₫1.249.000",
    discount: "0%",
    logoUrl: "/logos/red-dead-redemption-2.png",
    heroImage: "/now-on/red-dead-redemption-2.png",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/red-dead-redemption-2/video.mp4", "/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-1.jpg", "/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-2.jpg", "/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-3.jpg", "/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-4.jpg", "/images-discover-game/red-dead-redemption-2/red-dead-redemption-2-5.jpg",]
  },
  {
    id: "persona-3-reloaded",
    slug: "persona-3-reloaded",
    title: "Persona 3 Reloaded",
    description: "Dive into the Dark Hour and awaken the depths of your heart. Persona 3 Reload is a captivating reimagining of the genre-defining RPG, reborn for the modern era with cutting-edge graphics and gameplay.",
    imageUrl: "/now-on/persona-3-reloaded.png",
    category: "Base Game",
    currentPrice: "₫1.249.000",
    originalPrice: "₫1.249.000",
    discount: "0%",
    logoUrl: "/logos/persona-3-reloaded.png",
    heroImage: "/now-on/persona-3-reloaded.png",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    epicRewards: "Earn 10% Back",
    refundType: "Self-Refundable",
    releaseDate: "2022-01-01",
    ageRating: "18+",
    ageImage: "/ageimage/IARC_18.png",
    descRating: "Moderate Violence",
    interactRating: "Users Interact, In-Game Purchases (Includes Random Items)",
    genre: ["Action", "Adventure", "Role-Playing", "Strategy"],
    features: ["Single Player", "Co-op", "Multiplayer", "Co-op"],
    specs: {
      minimum: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        storage: "50 GB available space"
      }
    },
    achievementsSection: {
      isShow: false,
      title: "Achievements",
      items: ["Mighty Wolf", "Broken Spear", "The First Find", "Past Secrets", "The Last Stand", "The Final Showdown", "The Final Showdown"],
      viewAllLink: "",
      imageAchievements: ["/images/achievements/persona-5-royal-1.png", "/images/achievements/persona-5-royal-2.png", "/images/achievements/persona-5-royal-3.png", "/images/achievements/persona-5-royal-4.png", "/images/achievements/persona-5-royal-5.png"]
    },
    followSection: {
      isShow: true,
      title: "Follow Us",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/Persona5Royal" },
        { platform: "Twitter", url: "https://twitter.com/Persona5Royal" },
        { platform: "Instagram", url: "https://www.instagram.com/persona5royal" },
        { platform: "Youtube", url: "https://www.youtube.com/c/Persona5Royal" },
        { platform: "Website", url: "https://persona5royal.com/" },
        { platform: "Discord", url: "https://discord.gg/Persona5Royal" },
        { platform: "Reddit", url: "https://www.reddit.com/r/Persona5Royal/" }
      ]
    },
    gallery: ["/video-for-discover-game/persona-3-reloaded/video.mp4", "/images-discover-game/persona-3-reloaded/persona-3-reloaded-1.jpg", "/images-discover-game/persona-3-reloaded/persona-3-reloaded-2.jpg", "/images-discover-game/persona-3-reloaded/persona-3-reloaded-3.jpg", "/images-discover-game/persona-3-reloaded/persona-3-reloaded-4.jpg", "/images-discover-game/persona-3-reloaded/persona-3-reloaded-5.jpg",]
  }
];

// dữ liệu cho store promotions
export const storePromotions: StorePromotionItem[] = [
  {
    id: "sales-specials",
    title: "Sales & Specials",
    description: "Save big on hit titles and hidden gems. There's always something on sale at the Epic Games Store!",
    buttonText: "Browse",
    image: "/store-promotions/sales-specials.jpg", // Placeholder
  },
  {
    id: "free-games",
    title: "Free Games",
    description: "Explore free and free-to-play games from our collection. Come back every Thursday for a new free game!",
    buttonText: "Play Now",
    image: "/store-promotions/free-games.png", // Placeholder
  },
  {
    id: "apps",
    title: "Apps",
    description: "Enjoy some of the best Apps for music, gaming, creating, and more!",
    buttonText: "Browse",
    image: "/store-promotions/apps.png", // Placeholder
  },
];

// Hàm tìm kiếm game theo slug
export function getGameBySlug(slug: string): any {

  // Tìm trong heroData trước
  const heroGame = heroData.find((g) => g.slug === slug);
  if (heroGame) return heroGame;

  // Tìm trong mainGameList (discover game) trước
  const mainGame = mainGameList.find((g) => g.slug === slug);
  if (mainGame) return mainGame;

  // Tìm trong topNewReleases
  const newReleaseGame = topNewReleases.find((g) => g.slug === slug);
  if (newReleaseGame) return newReleaseGame;

  // Tìm trong trendingGames
  const trendingGame = trendingGames.find((g) => g.slug === slug);
  if (trendingGame) return trendingGame;

  // Tìm trong epicFirstRun
  const epicFirstRunGame = epicFirstRun.find((g) => g.slug === slug);
  if (epicFirstRunGame) return epicFirstRunGame;

  // Tìm trong nowOn
  const nowOnGame = nowOn.find((g) => g.slug === slug);
  if (nowOnGame) return nowOnGame;

  // Nếu không tìm thấy ở đâu
  return null;
}


