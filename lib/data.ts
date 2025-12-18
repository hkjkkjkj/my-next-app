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
  discountPercentage?: string;
  logoUrl?: string;
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
  id: string,
  title: string,
  category: string,
  price: string,
  image: string
}

// Định nghĩa cho GameItem (dùng chung cho FeaturedLists và NewReleasesList và TopLists) và kế thừa từ GameDetailsMixin
export interface GameItem extends GameDetailsMixin {
  id: number;
  title: string;
  image: string;
  price?: string;
  originalPrice?: string;
  discount?: string;
  badge?: string;
  availability?: string;
}

// Định nghĩa cho Top New Releases và kế thừa từ GameDetailsMixin
export interface TopNewReleases extends GameDetailsMixin {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
}

// Định nghĩa cho EpicFirstRun và kế thừa từ GameDetailsMixin
export interface EpicFirstRun extends GameDetailsMixin {
  id: string;
  title: string;
  image: string;
  price: string;
  category: string;
}

// Định nghĩa cho NowOn và kế thừa từ GameDetailsMixin
export interface NowOn extends GameDetailsMixin {
  id: string;
  title: string;
  image: string;
  price: string;
  category: string;
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
    description: "Mouse: P.I. for Hire is a first-person action-adventure game where players take on the role of a private investigator in a futuristic city.",
    imageUrl: "/images/mouse-p-i-for-hire.png",
    category: "Base Game",
    currentPrice: "Free",
    logoUrl: "/logos/mouse-p-i-for-hire.png",
    // chi tiết bổ sung
    heroImage: "/images/mouse-p-i-for-hire.png",
    developer: "Mouse: P.I. for Hire",
    publisher: "Mouse: P.I. for Hire",
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
    gallery: ["/images/mouse-p-i-for-hire.png", "/images/mouse-p-i-for-hire.png", "/images/mouse-p-i-for-hire.png"],
  },
  {
    id: 'arc-raiders',
    slug: 'arc-raiders',
    title: "ARC RAIDERS",
    description: "ARC Raiders is an action-packed first-person shooter where players take on the role of a space explorer in a futuristic city.",
    imageUrl: "/images/arc-raiders.png",
    category: "Base Game",
    currentPrice: "Free",
    logoUrl: "/logos/arc-raiders.png",
    // chi tiết bổ sung
    heroImage: "/images/arc-raiders.png",
    developer: "ARC Raiders",
    publisher: "ARC Raiders",
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
    gallery: ["/images/arc-raiders.png", "/images/arc-raiders.png", "/images/arc-raiders.png"],
  },
  {
    id: 'where-winds-meet',
    slug: 'where-winds-meet-main',
    title: "WHERE WINDS MEET",
    description: "Write your own Wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.",
    imageUrl: "/images/where-winds-meet.png",
    category: "Base Game",
    currentPrice: "Free",
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
    id: 'jurassic-world-3',
    slug: 'jurassic-world-evolution-3',
    title: 'Jurassic World Evolution 3',
    imageUrl: "/game-covers/jurassic-world-3.jpg",
    logoUrl: '/logos/jurassic-world-3.png',
    category: "Base Game",
    currentPrice: "₫980,000",
    originalPrice: "₫1,299,000",
    discountPercentage: "-25%",
    developer: "Frontier Developments",
    publisher: "Frontier Developments",
    releaseDate: "Coming Soon",
    specs: {
      minimum: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" },
      recommended: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" }
    }
  },
  {
    id: 'the-midnight-walkers',
    slug: 'the-midnight-walkers',
    title: 'The Midnight Walkers',
    imageUrl: "/game-covers/the-midnight-walkers.png",
    category: "Base Game",
    logoUrl: '/logos/the-midnight-walkers.png',
    currentPrice: "Free",
    developer: "PlaySide",
    publisher: "PlaySide",
    releaseDate: "Coming Soon",
    specs: {
      minimum: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" },
      recommended: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" }
    }
  },
  {
    id: 'cyberpunk',
    slug: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    imageUrl: "/game-covers/cyberpunk.png",
    category: "Base Game",
    logoUrl: '/logos/cyberpunk.png',
    currentPrice: "₫899,000",
    developer: "CD Projekt Red",
    publisher: "CD Projekt Red",
    releaseDate: "Coming Soon",
    specs: {
      minimum: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" },
      recommended: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" }
    }
  },
  {
    id: 'black-ops-7',
    slug: 'black-ops-7',
    title: 'Call of Duty®: Black Ops 7',
    imageUrl: "/game-covers/black-ops-7.png",
    logoUrl: '/logos/black-ops-7.png',
    category: "Base Game",
    currentPrice: "₫1,999,000",
    developer: "Activision",
    publisher: "Activision",
    releaseDate: "Coming Soon",
    specs: {
      minimum: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" },
      recommended: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" }
    }
  },
  {
    id: 'dying-light-the-beast',
    slug: 'dying-light-the-beast',
    title: 'Dying Light: The Beast',
    imageUrl: '/game-covers/dying-light-the-beast.png',
    category: 'Base Game',
    currentPrice: '₫1,999,000',
    developer: 'Techland',
    publisher: 'Techland',
    releaseDate: 'Coming Soon',
    specs: {
      minimum: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" },
      recommended: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" }
    }
  },
  {
    id: 'resident-evil-requiem',
    slug: 'resident-evil-requiem',
    title: 'Resident Evil Requiem',
    imageUrl: '/game-covers/resident-evil-requiem.jpg',
    logoUrl: '/logos/resident-evil-requiem.png',
    category: 'Base Game',
    currentPrice: '₫1,999,000',
    developer: 'Techland',
    publisher: 'Techland',
    releaseDate: 'Coming Soon',
    specs: {
      minimum: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" },
      recommended: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" }
    }
  },
  {
    id: 'subnautica-2',
    slug: 'subnautica-2',
    title: 'Subnautica 2',
    imageUrl: '/game-covers/subnautica-2.png',
    logoUrl: '/logos/subnautica-2.png',
    category: 'Base Game',
    currentPrice: '₫1,999,000',
    developer: 'Techland',
    publisher: 'Techland',
    releaseDate: 'Coming Soon',
    specs: {
      minimum: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" },
      recommended: { os: "Win 10", cpu: "i7", memory: "16GB", gpu: "RTX 2070", storage: "80GB" }
    }
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

// Dữ liệu cho trang/top-lists (Top Add-Ons, Top Free to Play, Top Demos)

// CỘT 1: TOP ADD-ONS
export const topAddOns: GameItem[] = [
  { id: 1, title: "Oneiric Shard x6480", image: "/top-lists/oneiric.png", price: "₫2,199,000" },
  { id: 2, title: "The Diamond Diva Pack", image: "/top-lists/diva.png", price: "₫78,000" },
  { id: 3, title: "Polar Legends Pack", image: "/top-lists/polar.png", price: "₫389,000" },
  { id: 4, title: "Agency Renegades Pack", image: "/top-lists/agency.png", price: "₫354,200" },
  { id: 5, title: "Rocket League® - Season 20...", image: "/top-lists/rocket-season.png", price: "₫347,000" },
];

// CỘT 2: TOP FREE TO PLAY
export const topFreeToPlay: GameItem[] = [
  { id: 1, title: "Fortnite", image: "/top-lists/fortnite.png", price: "Free" },
  { id: 2, title: "Rocket League®", image: "/top-lists/rocket-league.png", price: "Free" },
  { id: 3, title: "Genshin Impact", image: "/top-lists/genshin.png", price: "Free" },
  { id: 4, title: "Honkai: Star Rail", image: "/top-lists/honkai.png", price: "Free" },
  { id: 5, title: "Zenless Zone Zero", image: "/top-lists/zenless.png", price: "Free" },
];

// CỘT 3: TOP DEMOS
export const topDemos: GameItem[] = [
  { id: 1, title: "Half Sword Demo", image: "/top-lists/half-sword.png", price: "" }, // Demo thường không để giá hoặc Free
  { id: 2, title: "Cloudheim Demo", image: "/top-lists/cloudheim.png", price: "" },
  { id: 3, title: "XOCIETY Playtest", image: "/top-lists/xociety.png", price: "" },
  { id: 4, title: "Truck World: Driving School", image: "/top-lists/truck-world.png", price: "" },
  { id: 5, title: "Wilder World - Super Early...", image: "/top-lists/wilder-world.png", price: "" },
];

// Dữ liệu cho EpicFirstRunSection
export const epicFirstRun: EpicFirstRun[] = [
  { id: "reanimal", title: "Reanimal", category: "Base Game", price: "Free", image: "/epic-form-epic-first-run/reanimal.png" },
  { id: "felix-the-reaper", title: "Felix The Reaper", category: "Base Game", price: "₫209,000", image: "/epic-form-epic-first-run/felix-the-reaper.png" },
  { id: "vampire-the-masquerade-bloodlines-2", title: "Vampire: The Masquerade® - Bloodlines™ 2", category: "Base Game", price: "₫1,375,000", image: "/epic-form-epic-first-run/vampire-the-masquerade.jpg" },
  { id: "hell-is-us", title: "Hell is Us", category: "Base Game", price: "₫1,190,000", image: "/epic-form-epic-first-run/hell-is-us.png" },
  { id: "batman-arkham-knight", title: "Batman™ Arkham Knight", category: "Base Game", price: "Free", image: "/epic-form-epic-first-run/batman-arkham-knight.png" },
  { id: "octopath-traveler", title: "OCTOPATH TRAVELER™", category: "Base Game", price: "₫1,200,000", image: "/epic-form-epic-first-run/octopath-traveler.jpg" },
  { id: "back-4-blood-standard-edition", title: "Back 4 Blood: Standard Edition", category: "Base Game", price: "₫1,470,000", image: "/epic-form-epic-first-run/back-4-blood.jpg" },
  { id: "naraka-bladepoint", title: "NARAKA: BLADEPOINT", category: "Base Game", price: "Free", image: "/epic-form-epic-first-run/naraka-bladepoint.jpg" },
];

// Dữ liệu cho NowOnSection
export const nowOn: NowOn[] = [
  { id: "reanimal", title: "Reanimal", category: "Base Game", price: "Free", image: "/now-on/reanimal.png" },
  { id: "felix-the-reaper", title: "Felix The Reaper", category: "Base Game", price: "₫209,000", image: "/now-on/felix-the-reaper.png" },
  { id: "vampire-the-masquerade-bloodlines-2", title: "Vampire: The Masquerade® - Bloodlines™ 2", category: "Base Game", price: "₫1,375,000", image: "/now-on/vampire-the-masquerade.jpg" },
  { id: "hell-is-us", title: "Hell is Us", category: "Base Game", price: "₫1,190,000", image: "/now-on/hell-is-us.png" },
  { id: "batman-arkham-knight", title: "Batman™ Arkham Knight", category: "Base Game", price: "Free", image: "/now-on/batman-arkham-knight.png" },
  { id: "octopath-traveler", title: "OCTOPATH TRAVELER™", category: "Base Game", price: "₫1,200,000", image: "/now-on/octopath-traveler.jpg" },
  { id: "back-4-blood-standard-edition", title: "Back 4 Blood: Standard Edition", category: "Base Game", price: "₫1,470,000", image: "/now-on/back-4-blood.jpg" },
  { id: "naraka-bladepoint", title: "NARAKA: BLADEPOINT", category: "Base Game", price: "Free", image: "/now-on/naraka-bladepoint.jpg" },
];

// Định nghĩa cho Store Promotions Section
export interface StorePromotionItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

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
    image: "/store-promotions/free-games.jpg", // Placeholder
  },
  {
    id: "apps",
    title: "Apps",
    description: "Enjoy some of the best Apps for music, gaming, creating, and more!",
    buttonText: "Browse",
    image: "/store-promotions/apps.jpg", // Placeholder
  },
];

// Hàm tìm kiếm game theo slug
export function getGameBySlug(slug: string): any {

  // Tìm trong heroData trước
  const heroGame = heroData.find((g) => g.slug === slug);
  if (heroGame) return heroGame;

  // Tìm trong mainGameList trước
  const mainGame = mainGameList.find((g) => g.slug === slug);
  if (mainGame) return mainGame;

  // Nếu không tìm thấy ở đâu
  return null;
}