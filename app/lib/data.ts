// lib/data.ts

// --- ĐỊNH NGHĨA CÁC KIỂU DỮ LIỆU ---

// Định nghĩa cho một game trong sidebar (hoặc danh sách game nhỏ)
export interface SidebarGame {
  id: string;
  title: string;
  extra: string;      // "Base Game", "Event", v.v.
  image: string;
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
  },
];

// Dữ liệu cho Sidebar
export const sidebarGames: SidebarGame[] = [
  {
    id: 'fortnite',
    title: 'Fortnite',
    extra: 'Base Game',
    image: 'images/fortnite.jpg', 
  },
  {
    id: 'savings',
    title: 'Epic Savings',
    extra: 'Event',
    image: 'images/epic-savings.jpg', 
  },
  {
    id: 'anno',
    title: 'ARC RAIDERS',
    extra: 'Base Game',
    image: 'images/arc-raiders.jpg', 
  },
  {
    id: 'marvel-rivals',
    title: 'Marvel Rivals',
    extra: 'Coming Soon',
    image: 'images/marvel-rivals.jpg', 
  },
  {
    id: 'cyberpunk',
    title: 'Cyberpunk 2077',
    extra: 'Coming Soon',
    image: 'images/cyberpunk.jpg', 
  },
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