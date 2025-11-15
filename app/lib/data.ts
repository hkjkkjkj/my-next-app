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
  title: string;
  date: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  showWishlistButton: boolean;
  showPreviewButton: boolean;
  logoUrl: string;
  thumbnailUrl: string;
}

// Định nghĩa cho một game đầy đủ (dùng cho trang /games sau này)
export interface Game {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string; // Ảnh thumbnail
  largeImageUrl: string; // Ảnh to cho trang chi tiết
}


// --- DỮ LIỆU GIẢ CỦA BẠN ---

// Dữ liệu cho Hero Section (Epic Savings)
export const heroData: HeroBanner[] = [
  { 
    title: "WHERE<br/>WINDS MEET",
    date: "OUT NOW",
    description: "Write your own Wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.",
    buttonText: "Save Now",
    imageUrl: "/images/where-winds-meet.png",
    showWishlistButton: true,
    showPreviewButton: false,
    logoUrl: "/logos/where-winds-meet.png",
    thumbnailUrl: "/thumbnails/where-winds-meet.png",
  },
  { 
    title: "ARC<br/>RAIDERS",
    date: "AVAILABLE NOW",
    description: "THE SURFACE IS CALLING. YOUR ADVENTURE <br/> STARTS NOW. Survival is an option, but <br/> thriving? That takes courage.",
    buttonText: "Buy Now",
    imageUrl: "/images/arc-raiders.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/arc-raiders.png",
    thumbnailUrl: "/thumbnails/arc-raiders.jpg",
  },
  {
    title: "GOG OF WAR: RAGNAROK",
    date: "AVAILABLE NOW",
    description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    buttonText: "Buy Now",
    imageUrl: "/images/god-of-war.jpg",
    showWishlistButton: false,
    showPreviewButton: true,
    logoUrl: "/logos/god-of-war.jpg",
    thumbnailUrl: "/thumbnails/god-of-war.jpg",
  }
];

// Dữ liệu cho Sidebar
export const sidebarGames: SidebarGame[] = [
  {
    id: 'fortnite',
    title: 'Fortnite',
    extra: 'Base Game',
    imageUrl: '/images/fortnite.jpg', 
  },
  {
    id: 'anno',
    title: 'ARC RAIDERS',
    extra: 'Base Game',
    imageUrl: '/thumbnails/arc-raiders.jpg', 
  },
  {
    id: 'marvel-rivals',
    title: 'Marvel Rivals',
    extra: 'Coming Soon',
    imageUrl: '/images/marvel-rivals.jpg', 
  },
  {
    id: 'cyberpunk',
    title: 'Cyberpunk 2077',
    extra: 'Coming Soon',
    imageUrl: '/images/cyberpunk.jpg', 
  },
  {
    id: 'where-winds-meet',
    title: 'WHERE WINDS MEET',
    extra: 'Coming Soon',
    imageUrl: '/images/where-winds-meet.jpg', 
  }
];

// Dữ liệu cho trang /games (danh sách game chính)
export const mainGameList: Game[] = [
  { 
    id: 'cyberpunk', 
    name: 'Cyberpunk 2077', 
    price: '59.99$', 
    description: "Một game hành động...",
    imageUrl: "/images/cyberpunk.jpg", // (Bạn cần thêm ảnh này vào /public/images)
    largeImageUrl: "/images/cyberpunk_large.jpg"
  },
  { 
    id: 'elden-ring', 
    name: 'Elden Ring', 
    price: '69.99$', 
    description: "Một game thế giới mở...",
    imageUrl: "/images/eldenring.jpg",
    largeImageUrl: "/images/eldenring_large.jpg"
  },
  { 
    id: 'stardew', 
    name: 'Stardew Valley', 
    price: '14.99$', 
    description: "Một game nông trại...",
    imageUrl: "/images/stardew.jpg",
    largeImageUrl: "/images/stardew_large.jpg"
  },
];