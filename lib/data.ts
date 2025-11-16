// lib/data.ts

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

// Định nghĩa cho một game đầy đủ (dùng cho trang /games sau này)
export interface Game {
  id: string;
  name: string;
  imageUrl: string;
  category: string; // <-- THÊM MỚI
  currentPrice: string; // <-- THAY ĐỔI (ví dụ: "Free" hoặc "₫314,100")
  originalPrice?: string; // <-- THÊM MỚI (tùy chọn)
  discountPercentage?: string; // <-- THÊM MỚI (tùy chọn, vd: "-10%")
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
    imageUrl: '/thumbnails/arc-raiders.jpg', 
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
// Dữ liệu cho trang /games (danh sách game chính)
export const mainGameList: Game[] = [
  { 
    id: 'mouse-p-i-for-hire', 
    name: 'Mouse: P.I. for Hire', 
    imageUrl: "/game-covers/mouse-p-i-for-hire.png", // (Bạn cần thêm ảnh này)
    category: "Base Game",
    currentPrice: "Free",
  },
  { 
    id: 'arc-raiders-main', 
    name: 'ARC Raiders', 
    imageUrl: "/game-covers/arc-raiders.jpg", // (Bạn cần thêm ảnh này)
    category: "Base Game",
    currentPrice: "₫745,944",
  },
  { 
    id: 'where-winds-meet-main', 
    name: 'Where Winds Meet', 
    imageUrl: "/game-covers/where-winds-meet.png", // (Bạn cần thêm ảnh này)
    category: "Base Game",
    currentPrice: "Free",
  },
  { 
    id: 'jurassic-world-3', 
    name: 'Jurassic World Evolution 3', 
    imageUrl: "/game-covers/jurassic-world-3.jpg", // (Bạn cần thêm ảnh này)
    category: "Base Game",
    currentPrice: "₫980,000",
    originalPrice: "₫1,299,000",
    discountPercentage: "-25%",
  },
  { 
    id: 'the-midnight-walkers', 
    name: 'The Midnight Walkers', 
    imageUrl: "/game-covers/the-midnight-walkers.png", // (Bạn cần thêm ảnh này)
    category: "Base Game",
    currentPrice: "Free",
  },
  // Thêm 1 game nữa để thấy hiệu ứng cuộn
  { 
    id: 'cyberpunk', 
    name: 'Cyberpunk 2077', 
    imageUrl: "/game-covers/cyberpunk.png", // (Bạn cần thêm ảnh này)
    category: "Base Game",
    currentPrice: "₫899,000",
  },
];