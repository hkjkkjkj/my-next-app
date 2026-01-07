import { query } from './db';
import {
    HeroBanner,
    SidebarGame,
    DiscoverItem,
    News,
    DealItem,
    FreeItem,
    TopNewReleases,
    PromosItem,
    GameItem,
    FeaturedGame,
    TrendingItem,
    EpicFirstRun,
    NowOn,
    StorePromotionItem
} from './data';

// Helper to safely parse JSON
function parseJSON<T>(jsonString: string | object | null | undefined): T | undefined {
    if (!jsonString) return undefined;
    if (typeof jsonString === 'object') return jsonString as T;
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return undefined;
    }
}

// Convert "1" or 1 to true, others to false (for tinyint)
function toBoolean(val: any): boolean {
    return val === 1 || val === '1' || val === true;
}

export async function getHeroBanners(): Promise<HeroBanner[]> {
    const sql = `
    SELECT 
      hb.id, hb.game_id, hb.title, hb.date_text as date, hb.description, hb.button_text, 
      hb.image_url, hb.logo_url, hb.show_wishlist as show_wishlist_button, hb.show_preview as show_preview_button,
      g.slug, g.hero_image, g.developer, g.publisher, g.release_date, 
      g.specs_json, g.gallery_json, g.languages_json
    FROM hero_banners hb
    LEFT JOIN games g ON hb.game_id = g.id
  `;

    const rows = (await query(sql)) as any[];

    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        date: row.date,
        description: row.description,
        buttonText: row.button_text,
        imageUrl: row.image_url,
        logoUrl: row.logo_url,
        showWishlistButton: toBoolean(row.show_wishlist_button),
        showPreviewButton: toBoolean(row.show_preview_button),

        // GameDetailsMixin
        slug: row.slug,
        heroImage: row.hero_image,
        developer: row.developer,
        publisher: row.publisher,
        releaseDate: row.release_date,
        specs: parseJSON(row.specs_json),
        gallery: parseJSON(row.gallery_json),
        languages: parseJSON(row.languages_json),
    }));
}

export async function getSidebarGames(): Promise<SidebarGame[]> {
    const sql = `
    SELECT 
      sg.id, sg.game_id, sg.title, sg.extra_label as extra, sg.thumbnail_url as image_url,
      g.slug, g.hero_image, g.developer, g.publisher, g.release_date, 
      g.specs_json, g.gallery_json, g.languages_json
    FROM sidebar_games sg
    LEFT JOIN games g ON sg.game_id = g.id
    ORDER BY sg.id ASC
  `;

    const rows = (await query(sql)) as any[];

    return rows.map((row) => ({
        id: String(row.id),
        title: row.title,
        extra: row.extra,
        imageUrl: row.image_url,

        // GameDetailsMixin
        slug: row.slug,
        heroImage: row.hero_image,
        developer: row.developer,
        publisher: row.publisher,
        releaseDate: row.release_date,
        specs: parseJSON(row.specs_json),
        gallery: parseJSON(row.gallery_json),
        languages: parseJSON(row.languages_json),
    }));
}

export async function getDiscoverItems(): Promise<DiscoverItem[]> {
    const sql = `
    SELECT 
      di.id, di.title, di.image_url, di.category, di.price as current_price, di.original_price, di.discount, di.logo_url,
      
      -- Missing columns in DB, setting to NULL or empty for now to match interface
      NULL as age_rating, NULL as age_image, NULL as desc_rating, NULL as interact_rating,
      NULL as epic_rewards, NULL as refund_type, 
      CAST('[]' AS JSON) as genre_json, CAST('[]' AS JSON) as features_json, 
      CAST('{}' AS JSON) as achievements_json, CAST('{}' AS JSON) as follow_json,

      g.slug, g.hero_image, g.developer, g.publisher, g.release_date, 
      g.specs_json, g.gallery_json, g.languages_json
    FROM discover_items di
    LEFT JOIN games g ON di.game_id = g.id
  `;

    const rows = (await query(sql)) as any[];

    return rows.map((row) => ({
        id: String(row.id),
        title: row.title,
        imageUrl: row.image_url,
        category: row.category,
        currentPrice: formatPrice(row.current_price),
        originalPrice: formatPrice(row.original_price),
        discount: row.discount,
        logoUrl: row.logo_url,
        ageRating: row.age_rating,
        ageImage: row.age_image,
        descRating: row.desc_rating,
        interactRating: row.interact_rating,
        epicRewards: row.epic_rewards,
        refundType: row.refund_type,

        genre: parseJSON(row.genre_json),
        features: parseJSON(row.features_json),
        achievementsSection: parseJSON(row.achievements_json),
        followSection: parseJSON(row.follow_json),

        // GameDetailsMixin from joined games table
        slug: row.slug,
        heroImage: row.hero_image,
        developer: row.developer,
        publisher: row.publisher,
        releaseDate: row.release_date,
        specs: parseJSON(row.specs_json),
        gallery: parseJSON(row.gallery_json),
        languages: parseJSON(row.languages_json),
    }));
}

export async function getNews(): Promise<News[]> {
    const sql = `SELECT * FROM news`;
    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        date: row.date,
        description: row.description,
        buttonText: row.button_text,
        imageUrl: row.image_url,
        hasIcon: toBoolean(row.has_icon),
    }));
}

export async function getDealsData(): Promise<DealItem[]> {
    const sql = `SELECT * FROM deal_items`;
    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        image: row.image_url,
        tag: row.tag,
        type: row.type,
        discount: row.discount,
        originalPrice: row.original_price,
        price: row.price,
        buttonText: row.button_text
    }));
}

export async function getFreeItems(): Promise<FreeItem[]> {
    const sql = `SELECT * FROM free_items`;
    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        date: row.date,
        description: row.description,
        imageUrl: row.image_url,
        buttonText: row.button_text,
        hasIcon: toBoolean(row.has_icon)
    }));
}

// Helper to format price from DB (string or number)
function formatPrice(val: string | number | null | undefined): string {
    if (val === null || val === undefined || val === '') return '';

    // If it's a number, format it with ₫
    if (typeof val === 'number') {
        return `₫${Math.floor(val).toLocaleString('vi-VN')}`;
    }

    // If it's a string
    if (typeof val === 'string') {
        const trimmed = val.trim();
        // User Rule: If it looks like a pure number (integers), format it.
        // If it has any non-digit chars (like '₫', '$', '.', ','), keep it EXACTLY as is.
        if (/^\d+$/.test(trimmed)) {
            return `₫${Math.floor(parseFloat(trimmed)).toLocaleString('vi-VN')}`;
        }
        return val;
    }

    return '';
}

export async function getTopNewReleases(): Promise<TopNewReleases[]> {
    const sql = `
        SELECT t.*, g.slug 
        FROM top_new_releases t
        LEFT JOIN games g ON t.game_id = g.id
    `;
    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        imageUrl: row.image_url,
        category: row.category,

        // Map from DB columns
        currentPrice: formatPrice(row.price),
        originalPrice: formatPrice(row.original_price),
        discount: row.discount, // Assume discount stored as string like "-20%" or number

        logoUrl: row.logo_url,
        ageRating: row.age_rating,
        ageImage: row.age_image,
        descRating: row.desc_rating,
        interactRating: row.interact_rating,
        epicRewards: row.epic_rewards,
        refundType: row.refund_type,
        slug: row.slug,

        genre: parseJSON(row.genre_json),
        features: parseJSON(row.features_json),
        achievementsSection: parseJSON(row.achievements_json),
        followSection: parseJSON(row.follow_json)
    }));
}

export async function getPromosItems(): Promise<PromosItem[]> {
    const sql = `SELECT * FROM promos_items`;
    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        image: row.image_url,
        tag: row.tag,
        type: row.type,
        buttonText: row.button_text,
        description: row.description
    }));
}

export async function getFeaturedLists() {
    const topSellers = (await query(`
        SELECT ts.* 
        FROM top_sellers ts
        -- No game_id column in top_sellers, referencing by slug if needed but currently just raw data
    `)) as any[];
    const mostPlayed = (await query(`
        SELECT mp.* 
        FROM most_played mp
        -- No game_id column in most_played
    `)) as any[];
    const topUpcoming = (await query(`
        SELECT tup.* 
        FROM top_upcoming tup
        -- No game_id column in top_upcoming
    `)) as any[];

    // Helper to map DB row to GameItem for featured lists
    const mapItem = (row: any): GameItem => ({
        id: row.id,
        title: row.title,
        image: row.image_url || row.image,
        price: row.price,
        availability: row.availability, // for topUpcoming
        slug: row.slug
    });

    return {
        topSellers: Array.isArray(topSellers) ? topSellers.map(mapItem) : [],
        mostPlayed: Array.isArray(mostPlayed) ? mostPlayed.map(mapItem) : [],
        topUpcoming: Array.isArray(topUpcoming) ? topUpcoming.map(mapItem) : []
    };
}

export async function getFeaturedGameBanner(): Promise<FeaturedGame | null> {
    const rows = (await query('SELECT * FROM featured_game_banner LIMIT 1')) as any[];
    if (rows.length === 0) return null;
    const row = rows[0];
    return {
        id: row.id,
        title: row.title,
        description: row.description,
        price: row.price,
        image: row.image_url,
        ctaPrimary: row.cta_primary,
        ctaSecondary: row.cta_secondary
    };
}

export async function getTrendingItems(): Promise<TrendingItem[]> {
    const sql = `
        SELECT 
            t.id, t.game_id, t.title, t.image_url, t.category, t.price as current_price, 
            t.original_price, t.discount, t.logo_url, 
            NULL as age_rating, NULL as age_image, 
            NULL as desc_rating, NULL as interact_rating, NULL as epic_rewards, NULL as refund_type, 
            CAST('[]' AS JSON) as genre_json, CAST('[]' AS JSON) as features_json, 
            CAST('{}' AS JSON) as achievements_json, CAST('{}' AS JSON) as follow_json,
            g.slug, g.hero_image, g.developer, g.publisher, g.release_date,
            g.specs_json, g.gallery_json, g.languages_json
        FROM trending_items t
        LEFT JOIN games g ON t.game_id = g.id
    `;
    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        imageUrl: row.image_url,
        category: row.category,

        // Map from DB columns
        currentPrice: formatPrice(row.current_price),
        originalPrice: formatPrice(row.original_price),
        discount: row.discount,

        logoUrl: row.logo_url,
        ageRating: row.age_rating,
        ageImage: row.age_image,
        descRating: row.desc_rating,
        interactRating: row.interact_rating,
        epicRewards: row.epic_rewards,
        refundType: row.refund_type,
        genre: parseJSON(row.genre_json),
        features: parseJSON(row.features_json),
        achievementsSection: parseJSON(row.achievements_json),
        followSection: parseJSON(row.follow_json),
        // GameDetailsMixin
        slug: row.slug,
        heroImage: row.hero_image,
        developer: row.developer,
        publisher: row.publisher,
        releaseDate: row.release_date,
        specs: parseJSON(row.specs_json),
        gallery: parseJSON(row.gallery_json),
        languages: parseJSON(row.languages_json),
    }));
}

export async function getNewReleasesList() {
    const newReleases = (await query(`
        SELECT nr.* 
        FROM new_releases nr
        -- No game_id column in new_releases
    `)) as any[];
    const topRated = (await query(`
        SELECT tpr.*, NULL as game_id 
        FROM top_rated tpr
    `)) as any[]; // Table is top_rated, not top_player_rated. No game_id relation in DB yet for this Simple List.

    const comingSoon = (await query(`
        SELECT cs.*, COALESCE(g.slug, cs.slug) as slug 
        FROM coming_soon cs
        LEFT JOIN games g ON cs.game_id = g.id
    `)) as any[];

    // Define a flexible mapping, potentially casting types if needed
    const mapItem = (row: any): GameItem => ({
        id: row.id,
        title: row.title,
        image: row.image_url || row.image, // Handle both 'image' (DB) and 'image_url' (DB)
        price: row.price,
        originalPrice: row.original_price,
        discount: row.discount,
        badge: row.badge,
        availability: row.availability,
        slug: row.slug
    } as unknown as GameItem);

    return {
        newReleases: Array.isArray(newReleases) ? newReleases.map(mapItem) : [],
        topRated: Array.isArray(topRated) ? topRated.map(mapItem) : [],
        comingSoon: Array.isArray(comingSoon) ? comingSoon.map(mapItem) : []
    };
}

export async function getEpicFirstRun(): Promise<EpicFirstRun[]> {
    const sql = `
        SELECT 
            efr.id, efr.game_id, efr.title, efr.image_url, efr.category, efr.price as current_price,
            efr.original_price, efr.discount, efr.logo_url, 
            NULL as age_rating, NULL as age_image,
            NULL as desc_rating, NULL as interact_rating, NULL as epic_rewards, NULL as refund_type,
            CAST('[]' AS JSON) as genre_json, CAST('[]' AS JSON) as features_json, 
            CAST('{}' AS JSON) as achievements_json, CAST('{}' AS JSON) as follow_json,
            g.slug, g.hero_image, g.developer, g.publisher, g.release_date,
            g.specs_json, g.gallery_json, g.languages_json
        FROM epic_first_run efr
        LEFT JOIN games g ON efr.game_id = g.id
    `;
    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        imageUrl: row.image_url,
        category: row.category,
        currentPrice: formatPrice(row.current_price),
        originalPrice: formatPrice(row.original_price),
        discount: row.discount,
        logoUrl: row.logo_url,
        ageRating: row.age_rating,
        ageImage: row.age_image,
        descRating: row.desc_rating,
        interactRating: row.interact_rating,
        epicRewards: row.epic_rewards,
        refundType: row.refund_type,
        genre: parseJSON(row.genre_json),
        features: parseJSON(row.features_json),
        achievementsSection: parseJSON(row.achievements_json),
        followSection: parseJSON(row.follow_json),
        // GameDetailsMixin
        slug: row.slug,
        heroImage: row.hero_image,
        developer: row.developer,
        publisher: row.publisher,
        releaseDate: row.release_date,
        specs: parseJSON(row.specs_json),
        gallery: parseJSON(row.gallery_json),
        languages: parseJSON(row.languages_json),
    }));
}

export async function getTopLists() {
    const topAddOns = (await query(`
        SELECT tao.* 
        FROM top_add_ons tao
        -- No game_id, use raw data
    `)) as any[];
    const topFreeToPlay = (await query(`
        SELECT tftp.* 
        FROM top_free_to_play tftp
        -- No game_id, use raw data
    `)) as any[];
    const topDemos = (await query(`
        SELECT td.* 
        FROM top_demos td
        -- No game_id, use raw data
    `)) as any[];

    const mapItem = (row: any): GameItem => ({
        id: row.id,
        title: row.title,
        image: row.image_url || row.image, // Handle both 'image' and 'image_url' columns from different tables
        price: row.price,
        originalPrice: row.original_price,
        discount: row.discount,
        badge: row.badge,
        availability: row.availability,
        slug: row.slug
    } as unknown as GameItem);

    return {
        topAddOns: Array.isArray(topAddOns) ? topAddOns.map(mapItem) : [],
        topFreeToPlay: Array.isArray(topFreeToPlay) ? topFreeToPlay.map(mapItem) : [],
        topDemos: Array.isArray(topDemos) ? topDemos.map(mapItem) : []
    };
}

export async function getNowOn(): Promise<NowOn[]> {
    const sql = `
        SELECT 
            n.id, n.game_id, n.title, n.image_url, n.category, n.price as current_price,
            n.original_price, n.discount, n.logo_url, 
            NULL as age_rating, NULL as age_image,
            NULL as desc_rating, NULL as interact_rating, NULL as epic_rewards, NULL as refund_type,
            CAST('[]' AS JSON) as genre_json, CAST('[]' AS JSON) as features_json, 
            CAST('{}' AS JSON) as achievements_json, CAST('{}' AS JSON) as follow_json,
            g.slug, g.hero_image, g.developer, g.publisher, g.release_date,
            g.specs_json, g.gallery_json, g.languages_json
        FROM now_on n
        LEFT JOIN games g ON n.game_id = g.id
    `;
    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        imageUrl: row.image_url,
        category: row.category,
        currentPrice: formatPrice(row.current_price),
        originalPrice: formatPrice(row.original_price),
        discount: row.discount,
        logoUrl: row.logo_url,
        ageRating: row.age_rating,
        ageImage: row.age_image,
        descRating: row.desc_rating,
        interactRating: row.interact_rating,
        epicRewards: row.epic_rewards,
        refundType: row.refund_type,
        genre: parseJSON(row.genre_json),
        features: parseJSON(row.features_json),
        achievementsSection: parseJSON(row.achievements_json),
        followSection: parseJSON(row.follow_json),
        // GameDetailsMixin
        slug: row.slug,
        heroImage: row.hero_image,
        developer: row.developer,
        publisher: row.publisher,
        releaseDate: row.release_date,
        specs: parseJSON(row.specs_json),
        gallery: parseJSON(row.gallery_json),
        languages: parseJSON(row.languages_json),
    }));
}

export async function getStorePromotions(): Promise<StorePromotionItem[]> {
    const rows = (await query('SELECT * FROM store_promotions')) as any[];
    return rows.map((row) => ({
        id: row.id,
        title: row.title,
        description: row.description,
        buttonText: row.button_text,
        image: row.image
    }));
}

export async function getGameBySlug(slug: string): Promise<any> {
    try {
        const sql = `
            SELECT 
                g.id, g.slug, g.title, g.hero_image, g.developer, g.publisher, g.release_date,
                g.description, g.specs_json, g.gallery_json, g.languages_json,
                -- Prioritize price from discover_items, but fallbacks could be added if needed. 
                -- Current logic only takes price/discount from discover_items. 
                -- We should probably coalesce prices too if we want them to show up for non-discover games, 
                -- but user asked about LOGO specifically. Let's fix LOGO first.
                
                COALESCE(
                    g.price,
                    d.price,
                    ti.price,
                    efr.price,
                    no.price,
                    tnr.price
                ) as current_price,
                
                COALESCE(
                    g.original_price,
                    d.original_price,
                    ti.original_price,
                    tnr.original_price
                ) as original_price,

                 COALESCE(
                    g.discount,
                    d.discount,
                    ti.discount,
                    tnr.discount
                ) as discount,

                COALESCE(
                    d.logo_url,
                    ti.logo_url,
                    efr.logo_url,
                    no.logo_url,
                    tnr.logo_url,
                    hb.logo_url
                ) as logo_url,

                NULL as age_rating, NULL as age_image, -- Fixed: columns do not exist in discover_items
                
                CAST('[]' AS JSON) as genre_json, CAST('[]' AS JSON) as features_json, 
                CAST('{}' AS JSON) as achievements_json, CAST('{}' AS JSON) as follow_json
            FROM games g
            LEFT JOIN discover_items d ON g.id = d.game_id
            LEFT JOIN trending_items ti ON g.id = ti.game_id
            LEFT JOIN epic_first_run efr ON g.id = efr.game_id
            LEFT JOIN now_on no ON g.id = no.game_id
            LEFT JOIN top_new_releases tnr ON g.id = tnr.game_id
            LEFT JOIN hero_banners hb ON g.id = hb.game_id
            WHERE g.slug = ?
        `;
        // console.log('Fetching game with slug:', slug);
        const rows = (await query(sql, [slug])) as any[];
        // console.log('Rows found:', rows ? rows.length : 0);

        if (!rows || rows.length === 0) {
            return null;
        }

        const row = rows[0];
        return {
            ...row,
            // Map database columns to TS interface
            heroImage: row.hero_image,
            releaseDate: row.release_date,
            logoUrl: row.logo_url,
            originalPrice: formatPrice(row.original_price), // Ensure formatting is applied
            currentPrice: formatPrice(row.current_price),   // Ensure formatting is applied
            ageRating: row.age_rating,
            ageImage: row.age_image,

            specs: parseJSON(row.specs_json),
            gallery: parseJSON(row.gallery_json),
            languages: parseJSON(row.languages_json),
            genre: parseJSON(row.genre_json),
            features: parseJSON(row.features_json),
            achievementsSection: parseJSON(row.achievements_json),
            followSection: parseJSON(row.follow_json),
        };
    } catch (error) {
        console.error('Error fetching game by slug:', error);
        return null;
    }
}

export async function getAllGames(): Promise<GameItem[]> {
    const sql = `
        SELECT 
            g.id, g.slug, g.title, g.hero_image, 
            -- Try multiple sources for images in priority order
            COALESCE(
                d.image_url,           -- discover_items
                sg.thumbnail_url,      -- sidebar_games
                hb.image_url,          -- hero_banners
                ti.image_url,          -- trending_items
                tnr.image_url,         -- top_new_releases
                efr.image_url,         -- epic_first_run
                no.image_url,          -- now_on
                nr.image,              -- new_releases (uses 'image' column)
                cs.image_url,          -- coming_soon (uses 'image_url' column)
                g.hero_image           -- games table (last resort)
            ) as final_image,
            COALESCE(g.price, d.price) as current_price, 
            COALESCE(g.original_price, d.original_price) as original_price, 
            COALESCE(g.discount, d.discount) as discount,
            CAST('[]' AS JSON) as genre_json, 
            CAST('[]' AS JSON) as features_json,
            d.category
        FROM games g
        LEFT JOIN discover_items d ON g.id = d.game_id
        LEFT JOIN sidebar_games sg ON g.id = sg.game_id
        LEFT JOIN hero_banners hb ON g.id = hb.game_id
        LEFT JOIN trending_items ti ON g.id = ti.game_id
        LEFT JOIN top_new_releases tnr ON g.id = tnr.game_id
        LEFT JOIN epic_first_run efr ON g.id = efr.game_id
        LEFT JOIN now_on no ON g.id = no.game_id
        LEFT JOIN new_releases nr ON g.slug = nr.slug
        LEFT JOIN coming_soon cs ON g.slug = cs.slug
    `;

    const rows = (await query(sql)) as any[];
    return rows.map((row) => ({
        id: row.id,
        slug: row.slug,
        title: row.title,
        image: row.final_image,
        imageUrl: row.final_image,
        hero_image: row.hero_image, // For GamesList (snake_case)
        heroImage: row.hero_image,  // For GameItem interface (camelCase)
        currentPrice: row.current_price,
        originalPrice: row.original_price,
        discount: row.discount,
        category: row.category || "Base Game",
        genre: parseJSON(row.genre_json),
        features: parseJSON(row.features_json),
    } as unknown as GameItem));
}
