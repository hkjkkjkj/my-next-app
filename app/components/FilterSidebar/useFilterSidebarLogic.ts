import { useState, useMemo } from 'react';
import { GameItem } from '@/lib/data';

// Master lists for "Dim instead of hide"
export const MASTER_GENRES = ["Action", "Adventure", "RPG", "Strategy", "Shooter", "Racing", "Sports", "Simulation", "Indie", "Horror", "Platformer", "Fighting", "Open World", "Survival"];
export const MASTER_FEATURES = ["Single Player", "Multiplayer", "Co-op", "VR", "Controller Support", "Cloud Saves", "Achievements", "Trading Cards"];

// Helper to parse price string to number
const parsePrice = (priceStr: string | undefined): number => {
    if (!priceStr) return -1;
    if (priceStr.toLowerCase() === 'free') return 0;
    // Remove "₫" and "," to parse
    const cleanStr = priceStr.replace(/[₫,.]/g, '');
    const num = parseInt(cleanStr, 10);
    return isNaN(num) ? -1 : num;
};

export const useFilterSidebarLogic = (initialGames: GameItem[]) => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        genre: true,
        features: true,
        price: true,
    });

    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
    const [expandedLists, setExpandedLists] = useState<Record<string, boolean>>({}); // For Show More
    const [maxPrice, setMaxPrice] = useState<number>(2000000); // 2 million VND max default
    const [searchTerm, setSearchTerm] = useState("");

    // Derived Data: Counts
    const counts = useMemo(() => {
        const c: Record<string, Record<string, number>> = {
            genre: {},
            features: {},
            price_group: {}
        };

        initialGames.forEach(game => {
            // Genre
            (game.genre || []).forEach(item => {
                c.genre[item] = (c.genre[item] || 0) + 1;
            });
            // Features
            (game.features || []).forEach(item => {
                c.features[item] = (c.features[item] || 0) + 1;
            });
            // Price Group
            const price = parsePrice(game.currentPrice);
            if (price === 0) c.price_group["Free"] = (c.price_group["Free"] || 0) + 1;
            else if (price > 0 && price < 599900) c.price_group["Under ₫599,900"] = (c.price_group["Under ₫599,900"] || 0) + 1;
            else if (price >= 599900) c.price_group["Over ₫599,900"] = (c.price_group["Over ₫599,900"] || 0) + 1;
        });
        return c;
    }, []);

    // Filter Logic
    const filteredGames = useMemo(() => {
        return initialGames.filter(game => {
            // 1. Search Term
            if (searchTerm && !game.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }

            // 2. Price Logic
            const price = parsePrice(game.currentPrice);
            const hasPriceFilters = selectedFilters['price'] && selectedFilters['price'].length > 0;

            if (hasPriceFilters) {
                // Check against selected buckets
                const inBucket = selectedFilters['price'].some(bucket => {
                    if (bucket === "Free") return price === 0;
                    if (bucket === "Under ₫599,900") return price > 0 && price < 599900;
                    if (bucket === "Over ₫599,900") return price >= 599900;
                    return false;
                });
                if (!inBucket) return false;
            } else {
                // Use Slider only if no groups selected
                // If price is -1 (Coming Soon), display only if logic permits. Let's assume yes unless maxPrice forces it out?
                // Actually if maxPrice is 2M, coming soon (-1) logic: -1 > 2000000 (false) -> ok? 
                // Wait, if price is -1, price > maxPrice comparison: -1 > 2000000 is False. So it passes.
                // It means Coming Soon games always show up filter-wise unless we explicitly exclude them.
                if (price > maxPrice) return false;
            }

            // 3. Genre (OR logic)
            if (selectedFilters['genre'] && selectedFilters['genre'].length > 0) {
                const gameGenres = game.genre || [];
                const hasGenre = selectedFilters['genre'].some(g => gameGenres.includes(g));
                if (!hasGenre) return false;
            }

            // 4. Features (OR logic)
            if (selectedFilters['features'] && selectedFilters['features'].length > 0) {
                const gameFeatures = game.features || [];
                const hasFeature = selectedFilters['features'].some(f => gameFeatures.includes(f));
                if (!hasFeature) return false;
            }

            return true;
        });
    }, [searchTerm, selectedFilters, maxPrice]);

    const toggleSection = (id: string) => {
        setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleFilter = (sectionId: string, item: string) => {
        setSelectedFilters(prev => {
            const currentList = prev[sectionId] || [];
            const exists = currentList.includes(item);
            let newList;
            if (exists) {
                newList = currentList.filter(i => i !== item);
            } else {
                newList = [...currentList, item];
            }
            return { ...prev, [sectionId]: newList };
        });
    };

    const toggleShowMore = (id: string) => {
        setExpandedLists(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const resetFilters = () => {
        setSelectedFilters({});
        setMaxPrice(2000000);
        setSearchTerm("");
    };

    const setMaxPriceSafe = (val: number) => {
        setMaxPrice(val);
        if (selectedFilters.price && selectedFilters.price.length > 0) {
            setSelectedFilters(prev => ({ ...prev, price: [] }));
        }
    };

    // Prepare sections data structure
    const sections = [
        {
            id: 'genre',
            title: 'Genre',
            items: Array.from(new Set([...MASTER_GENRES, ...Object.keys(counts.genre)])).sort(),
            counts: counts.genre,
            hasIcons: true,
            hasShowMore: true,
            hasSlider: false
        },
        {
            id: 'features',
            title: 'Features',
            items: Array.from(new Set([...MASTER_FEATURES, ...Object.keys(counts.features)])).sort(),
            counts: counts.features,
            hasIcons: false,
            hasShowMore: true,
            hasSlider: false
        },
        {
            id: 'price',
            title: 'Price',
            items: ["Free", "Under ₫599,900", "Over ₫599,900"],
            counts: counts.price_group,
            hasIcons: false,
            hasShowMore: false,
            hasSlider: true
        }
    ];

    return {
        openSections,
        toggleSection,
        selectedFilters,
        toggleFilter,
        resetFilters,
        expandedLists,
        toggleShowMore,
        maxPrice,
        setMaxPrice: setMaxPriceSafe,
        searchTerm,
        setSearchTerm,
        sections,
        filteredGames
    };
};
