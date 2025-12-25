"use client";

import React, { use, useState } from 'react';
import styles from './GameDetail.module.css';
import { getGameBySlug } from '@/lib/data';
// Import đầy đủ các icon cần thiết
import {
    FaWindows, FaStar, FaShareAlt, FaFlag,
    FaTrophy, FaArrowRight,
    FaGlobe, FaFacebookF, FaInstagram, FaDiscord,
    FaYoutube, FaRedditAlien, FaTwitter,
    FaRegBookmark,
    FaExternalLinkAlt
} from 'react-icons/fa';
import { TbShoppingCartHeart } from 'react-icons/tb';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function GameDetailPage({ params }: PageProps) {
    // 1. Giải nén slug từ params
    const { slug } = use(params);

    // 2. Lấy dữ liệu game
    const game = getGameBySlug(slug);

    // 3. Helper: Kiểm tra xem URL có phải là video không
    const isVideo = (url: string | undefined) => {
        if (!url) return false;
        return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
    };

    // 4. Xác định media ban đầu (Ưu tiên Video đầu tiên trong Gallery nếu có)
    const initialMedia = (() => {
        if (!game) return "";

        // Tìm video đầu tiên trong gallery
        const firstVideo = game.gallery?.find((item: string) => isVideo(item));

        if (firstVideo) return firstVideo;
        return game.heroImage || game.image;
    })();

    // 5. State quản lý ảnh/video đang hiển thị chính
    const [activeMedia, setActiveMedia] = useState(initialMedia);

    // 6. Xử lý trường hợp không tìm thấy game
    if (!game) {
        return (
            <div className={styles.container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <h1>Game not found</h1>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>

                {/* === HEADER: Title & Rating === */}
                <div className={styles.header}>
                    <h1 className={styles.title}>{game.title}</h1>
                    <div className={styles.ratingRow}>
                        <div className={styles.ratingStars}>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={styles.starIcon} size={14} />
                            ))}
                            <span className={styles.ratingScore}>4.7</span>
                        </div>
                        <div className={styles.tagList}>
                            <span className={styles.tag}>Character Customization</span>
                            <span className={styles.tag}>Great Boss Battles</span>
                        </div>
                    </div>
                </div>

                {/* === TAB MENU === */}
                <div className={styles.tabMenu}>
                    <div className={`${styles.tabItem} ${styles.active}`}>Overview</div>
                    <div className={styles.tabItem}>FAQ</div>
                    <div className={styles.tabItem}>Achievements</div>
                </div>

                {/* === GRID LAYOUT (2 Cột) === */}
                <div className={styles.grid}>

                    {/* --- CỘT TRÁI (Nội dung chính) --- */}
                    <div className={styles.leftColumn}>

                        {/* 1. Media Player (Ảnh/Video lớn) */}
                        <div className={styles.mediaWrapper}>
                            {isVideo(activeMedia) ? (
                                <video
                                    src={activeMedia || undefined}
                                    className={styles.mainMedia}
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                />
                            ) : (
                                <img
                                    src={activeMedia || undefined}
                                    alt={game.title}
                                    className={styles.mainMedia}
                                    onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/1200x675?text=No+Image"; }}
                                />
                            )}
                        </div>

                        {/* 2. Gallery Thumbnails (Ảnh nhỏ) */}
                        {game.gallery && game.gallery.length > 0 && (
                            <div className={styles.galleryThumbnails}>
                                {/* Các ảnh trong gallery */}
                                {game.gallery.map((item: string, index: number) => (
                                    <div
                                        key={index}
                                        className={`${styles.thumbnail} ${activeMedia === item ? styles.active : ''}`}
                                        onClick={() => setActiveMedia(item)}
                                    >
                                        {isVideo(item) ? (
                                            <video src={item || undefined} className={styles.mainMedia} muted style={{ objectFit: 'cover' }} /> // Thumbnail video
                                        ) : (
                                            <img src={item || undefined} alt={`Gallery ${index}`} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* 3. Mô tả ngắn */}
                        <div className={styles.description}>
                            <p>{game.description || "No description provided for this game."}</p>
                        </div>

                        {/* 4. Genres & Features */}
                        <div className={styles.featuresSection}>
                            <div className={styles.featureColumn}>
                                <h3>Genres</h3>
                                <div className={styles.featureTags}>
                                    {game.genre?.map((genre: string, index: number) => (
                                        <span key={index} className={styles.featureTag}>{genre}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.featureColumn}>
                                <h3>Features</h3>
                                <div className={styles.featureTags}>
                                    {game.features?.map((feature: string, index: number) => (
                                        <span key={index} className={styles.featureTag}>{feature}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 5. ABOUT / STORY (Phần mới thêm) */}
                        <div className={styles.aboutSection}>
                            <h2 className={styles.aboutTitle}>An Era on the Brink. A Hero on the Rise</h2>
                            <p className={styles.aboutText}>
                                Immerse yourself in the captivating Five Dynasties and Ten Kingdoms period of China, where epic battles and legendary tales come to life. From the bustling imperial capital to the hidden wilderness, every path is filled with secrets and adventures.
                            </p>
                            <p className={styles.aboutText}>
                                In this world, freedom carries weight. Stir up mischief and face challenges, or take the noble route: befriend villagers, forge alliances, and carve your legacy as a Wuxia hero.
                            </p>
                        </div>

                        {/* 6. ACHIEVEMENTS (Phần mới thêm) */}
                        {game.achievementsSection?.isShow && (
                            <div className={styles.achievementsSection}>
                                <h2 className={styles.sectionTitle}>{game.achievementsSection?.title}</h2>
                                <p className={styles.sectionDescription}>{game.achievementsSection?.description}</p>

                                <div className={styles.achievementGrid}>
                                    {game.achievementsSection?.items?.map((achievement: string, index: number) => (
                                        <div key={index} className={styles.achievementItem}>
                                            <div className={styles.achievementIconWrapper}>
                                                <img
                                                    src={game.achievementsSection?.imageAchievements?.[index] || "https://via.placeholder.com/64"}
                                                    alt="Icon"
                                                    className={styles.achievementIcon}
                                                />
                                            </div>
                                            <div className={styles.achievementName}>{achievement}</div>
                                            <div className={styles.achievementXp}><FaTrophy color="#dcb35d" /> {achievement} XP</div>
                                        </div>
                                    ))}
                                </div>

                                <a href={game.achievementsSection?.viewAllLink} className={styles.viewAllLink}>
                                    See all {game.achievementsSection?.items?.length} achievements <FaArrowRight size={12} />
                                </a>
                            </div>
                        )}

                        <div className={styles.followUsSection}>
                            <h2 className={styles.sectionTitle}>Follow Us</h2>
                            {game.followSection?.isShow && game.followSection.links && (
                                <div className={styles.socialBox}>
                                    {game.followSection.links.map((link: any, index: number) => {
                                        let Icon = FaGlobe;
                                        switch (link.platform) {
                                            case 'Facebook': Icon = FaFacebookF; break;
                                            case 'Twitter': Icon = FaTwitter; break;
                                            case 'Instagram': Icon = FaInstagram; break;
                                            case 'Youtube': Icon = FaYoutube; break;
                                            case 'Discord': Icon = FaDiscord; break;
                                            case 'Reddit': Icon = FaRedditAlien; break;
                                            case 'Website': Icon = FaGlobe; break;
                                        }
                                        return (
                                            <a key={index} href={link.url} className={styles.socialLink} aria-label={link.platform} target="_blank" rel="noopener noreferrer">
                                                <Icon />
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {game.specs && (
                            <div className={styles.reqSection}>
                                <h2 className={styles.reqTitle}>{game.title} System Requirements</h2>

                                <div className={styles.reqContainer}>
                                    {/* Tabs */}
                                    <div className={styles.reqTabs}>
                                        <div className={styles.reqTab}>Windows</div>
                                    </div>

                                    {/* Grid Cấu hình */}
                                    <div className={styles.reqGrid}>

                                        {/* Cột Minimum */}
                                        <div className={styles.reqColumn}>
                                            <div className={styles.reqHeader}>Minimum</div>

                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>OS version</span>
                                                <span className={styles.reqValue}>{game.specs.minimum.os}</span>
                                            </div>
                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>CPU</span>
                                                <span className={styles.reqValue}>{game.specs.minimum.cpu}</span>
                                            </div>
                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>Memory</span>
                                                <span className={styles.reqValue}>{game.specs.minimum.memory}</span>
                                            </div>
                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>GPU</span>
                                                <span className={styles.reqValue}>{game.specs.minimum.gpu}</span>
                                            </div>
                                            {game.specs.minimum.dx && (
                                                <div className={styles.reqRow}>
                                                    <span className={styles.reqLabel}>DirectX</span>
                                                    <span className={styles.reqValue}>{game.specs.minimum.dx}</span>
                                                </div>
                                            )}
                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>Storage</span>
                                                <span className={styles.reqValue}>{game.specs.minimum.storage}</span>
                                            </div>
                                            {/* Notes riêng cho Minimum */}
                                            {game.specs.minimum.notes && (
                                                <div className={styles.reqRow}>
                                                    <span className={styles.reqLabel}>Additional Notes</span>
                                                    <span className={styles.reqValue}>{game.specs.minimum.notes}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Cột Recommended */}
                                        <div className={styles.reqColumn}>
                                            <div className={styles.reqHeader}>Recommended</div>

                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>OS version</span>
                                                <span className={styles.reqValue}>{game.specs.recommended.os}</span>
                                            </div>
                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>CPU</span>
                                                <span className={styles.reqValue}>{game.specs.recommended.cpu}</span>
                                            </div>
                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>Memory</span>
                                                <span className={styles.reqValue}>{game.specs.recommended.memory}</span>
                                            </div>
                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>GPU</span>
                                                <span className={styles.reqValue}>{game.specs.recommended.gpu}</span>
                                            </div>
                                            {game.specs.recommended.dx && (
                                                <div className={styles.reqRow}>
                                                    <span className={styles.reqLabel}>DirectX</span>
                                                    <span className={styles.reqValue}>{game.specs.recommended.dx}</span>
                                                </div>
                                            )}
                                            <div className={styles.reqRow}>
                                                <span className={styles.reqLabel}>Storage</span>
                                                <span className={styles.reqValue}>{game.specs.recommended.storage}</span>
                                            </div>
                                            {game.specs.recommended.notes && (
                                                <div className={styles.reqRow}>
                                                    <span className={styles.reqLabel}>Additional Notes</span>
                                                    <span className={styles.reqValue}>{game.specs.recommended.notes}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Thông tin Footer (Login, Languages...) */}
                                    <div className={styles.reqFooter}>

                                        {/* Login Accounts */}
                                        {game.loginAccounts && (
                                            <div className={styles.reqFooterBlock}>
                                                <span className={styles.reqFooterTitle}>Login Accounts Required</span>
                                                <span className={styles.reqFooterText}>{game.loginAccounts}</span>
                                            </div>
                                        )}

                                        {/* Languages */}
                                        {game.languages && (
                                            <div className={styles.reqFooterBlock}>
                                                <span className={styles.reqFooterTitle}>Languages Supported</span>
                                                {game.languages.audio && game.languages.audio !== "N/A" && (
                                                    <span className={styles.reqFooterText}>Audio: {game.languages.audio}</span>
                                                )}
                                                {game.languages.text && (
                                                    <span className={styles.reqFooterText}>Text: {game.languages.text}</span>
                                                )}
                                            </div>
                                        )}

                                        {/* Copyright & Privacy */}
                                        <div>
                                            <div className={styles.copyrightText}>
                                                {`© 2025 ${game.developer || "Developer"}, All Rights Reserved.`}
                                            </div>
                                            <a href="#" className={styles.privacyLink}>
                                                Privacy Policy <FaExternalLinkAlt size={10} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* --- CỘT PHẢI (SIDEBAR - Cố định) --- */}
                    <div className={styles.rightColumn}>
                        <div className={styles.sidebar}>

                            {/* 1. CHỖ CHÈN LOGO */}
                            <div className={styles.logoContainer}>
                                {game.logoUrl ? (
                                    <img src={game.logoUrl || undefined} alt="Game Logo" className={styles.gameLogo} />
                                ) : (
                                    // Placeholder nếu chưa có logo
                                    <h2 style={{ fontSize: '24px', fontWeight: '800', textAlign: 'center' }}>{game.title}</h2>
                                )}
                            </div>

                            {/* 2. Hộp Đánh Giá (IARC Rating) */}
                            <div className={styles.ratingCard}>
                                {/* Icon 12+ (Bạn có thể thay bằng ảnh thật) */}
                                <img
                                    src={game.ageImage}
                                    alt="12+"
                                    className={styles.ratingIcon}
                                />
                                <div className={styles.ratingInfo}>
                                    <span className={styles.ratingAge}>{game.ageRating}</span>
                                    <span className={styles.ratingDesc}>{game.descRating}</span>
                                    <div className={styles.ratingDivider}></div>
                                    <span className={styles.ratingInteract}>{game.interactRating}</span>
                                </div>
                            </div>

                            {/* 3. Badge "Base Game" */}
                            <div className={styles.baseGameBadge}>Base Game</div>

                            {/* 4. Giá tiền */}
                            <div className={styles.priceSection}>
                                <div className={styles.priceContainer}>
                                    {(game.discount && game.originalPrice) ? (
                                        <>
                                            {/* Hiển thị Badge giảm giá (tự động thêm dấu - nếu thiếu) */}
                                            <span className={styles.discountBadge}>
                                                {game.discount.startsWith('-') ? game.discount : `-${game.discount}`}
                                            </span>

                                            {/* Giá gốc bị gạch ngang */}
                                            <span className={styles.originalPrice}>
                                                {game.originalPrice}
                                            </span>

                                            {/* Giá hiện tại */}
                                            <span className={styles.discountedPrice}>
                                                {game.currentPrice || game.price}
                                            </span>
                                        </>
                                    ) : (
                                        /* Trường hợp không giảm giá */
                                        <span className={styles.finalPrice}>
                                            {game.currentPrice || game.price || "Free"}
                                        </span>
                                    )}
                                </div>
                                <div className={styles.inAppNote}>May include in-app purchases</div>
                            </div>

                            {/* 5. Nút Get & Cart */}
                            <div className={styles.primaryActions}>
                                <button className={styles.btnGet}>
                                    {game.price === game.currentPrice ? "Get" : "Buy Now"}
                                </button>
                                <button className={styles.btnCart} title="Add to Cart">
                                    <TbShoppingCartHeart size={16} />
                                </button>
                            </div>

                            {/* 6. Nút Wishlist */}
                            <button className={styles.btnWishlist}>
                                <FaRegBookmark size={14} /> <span>Add to Wishlist</span>
                            </button>

                            {/* 7. Thông tin Meta */}
                            <div className={styles.metaList}>
                                {game.currentPrice !== "Free" && (
                                    <>
                                        <div className={styles.metaRow}>
                                            <span className={styles.metaLabel}>Epic Rewards</span>
                                            <span className={styles.metaValue}>{game.epicRewards || "-"}</span>
                                        </div>
                                        <div className={styles.metaRow}>
                                            <span className={styles.metaLabel}>Refund Type</span>
                                            <span className={styles.metaValue}>{game.refundType || "-"}</span>
                                        </div>
                                    </>
                                )}
                                <div className={styles.metaRow}>
                                    <span className={styles.metaLabel}>Developer</span>
                                    <span className={styles.metaValue}>{game.developer || "-"}</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className={styles.metaLabel}>Publisher</span>
                                    <span className={styles.metaValue}>{game.publisher || "-"}</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className={styles.metaLabel}>Release Date</span>
                                    <span className={styles.metaValue}>{game.releaseDate || "-"}</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className={styles.metaLabel}>Platform</span>
                                    <span className={styles.metaValue} style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                                        <FaWindows />
                                    </span>
                                </div>
                            </div>

                            {/* 8. Nút Share & Report */}
                            <div className={styles.secondaryActions}>
                                <button className={styles.btnSecondary}>
                                    <FaShareAlt /> Share
                                </button>
                                <button className={styles.btnSecondary}>
                                    <FaFlag /> Report
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}