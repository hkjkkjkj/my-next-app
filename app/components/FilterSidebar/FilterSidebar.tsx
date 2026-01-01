"use client";

import styles from './FilterSidebar.module.css';
import { FaSearch, FaChevronDown, FaCheck, FaFistRaised, FaUserShield, FaChess, FaCrosshairs, FaCity, FaGhost, FaCube, FaUsers, FaGamepad } from 'react-icons/fa';
import { GiSwordman, GiPunch } from 'react-icons/gi';
import { useFilterSidebarLogic } from './useFilterSidebarLogic';

// Icon Mapping
const GENRE_ICONS: Record<string, React.ReactNode> = {
    "Action": <FaFistRaised />,
    "Adventure": <GiSwordman />,
    "RPG": <FaUserShield />,
    "Strategy": <FaChess />,
    "Shooter": <FaCrosshairs />,
    "Simulation": <FaCity />,
    "Indie": <FaGamepad />,
    "Horror": <FaGhost />,
    "Platformer": <FaCube />,
    "Fighting": <GiPunch />,
    "Open World": <FaUsers />,
    "Survival": <FaUsers />,
};

// Helper for price formatting (Client-side usage mainly)
const formatPrice = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export interface FilterSection {
    id: string;
    title: string;
    items: string[];
    counts: Record<string, number>;
    hasIcons: boolean;
    hasShowMore: boolean;
    hasSlider: boolean;
}

interface FilterSidebarProps {
    openSections: Record<string, boolean>;
    toggleSection: (id: string) => void;
    selectedFilters: Record<string, string[]>;
    toggleFilter: (sectionId: string, item: string) => void;
    resetFilters: () => void;
    expandedLists: Record<string, boolean>;
    toggleShowMore: (id: string) => void;
    maxPrice: number;
    setMaxPrice: (val: number) => void;
    sections: FilterSection[];
}

export default function FilterSidebar({
    openSections,
    toggleSection,
    selectedFilters,
    toggleFilter,
    resetFilters,
    expandedLists,
    toggleShowMore,
    maxPrice,
    setMaxPrice,
    sections
}: FilterSidebarProps) {

    // Hook removed, using props

    return (
        <aside className={styles.sidebarContainer}>
            <div className={styles.filtersParamsHeader}>
                <span className={styles.filtersLabel}>Filters</span>
                {Object.keys(selectedFilters).some(k => selectedFilters[k].length > 0) && (
                    <button className={styles.resetBtn} onClick={resetFilters}>RESET</button>
                )}
            </div>

            <div className={styles.searchWrapper}>
                <FaSearch className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Keywords"
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.filterList}>
                {sections.map(group => (
                    <div key={group.id} className={styles.filterSection}>
                        <div className={styles.filterHeader} onClick={() => toggleSection(group.id)}>
                            <span className={styles.filterTitle}>{group.title}</span>
                            <FaChevronDown className={`${styles.chevron} ${openSections[group.id] ? styles.open : ''}`} />
                        </div>

                        {openSections[group.id] && (
                            <div className={styles.filterContent}>
                                {/* Price Slider Special */}
                                {group.hasSlider && (
                                    <div className={styles.priceSliderContainer}>
                                        <span className={styles.priceSliderValue}>Max Price: ₫{formatPrice(maxPrice)}</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="2000000"
                                            step="50000"
                                            value={maxPrice}
                                            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                            className={styles.priceSlider}
                                        />
                                        <div className={styles.divider}></div>
                                    </div>
                                )}

                                {group.items.slice(0, expandedLists[group.id] || !group.hasShowMore ? undefined : 5).map(item => {
                                    const count = group.counts[item] || 0;
                                    const isChecked = selectedFilters[group.id]?.includes(item);
                                    const isDisabled = count === 0;

                                    if (isDisabled) {
                                        return (
                                            <div key={item} className={styles.disabledItem}>
                                                <div className={`${styles.checkbox} ${styles.disabled}`}></div>
                                                {group.hasIcons && <span className={styles.genreIcon}>{GENRE_ICONS[item] || <FaGamepad />}</span>}
                                                <span>{item}</span>
                                                <span className={styles.countBadge}>({count})</span>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div
                                            key={item}
                                            className={styles.filterItem}
                                            onClick={() => toggleFilter(group.id, item)}
                                        >
                                            <div className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`}>
                                                {isChecked && <FaCheck size={10} color="#fff" />}
                                            </div>
                                            {group.hasIcons && <span className={styles.genreIcon}>{GENRE_ICONS[item] || <FaGamepad />}</span>}
                                            <span>{item}</span>
                                            <span className={styles.countBadge}>({count})</span>
                                        </div>
                                    );
                                })}

                                {group.hasShowMore && group.items.length > 5 && (
                                    <button
                                        className={styles.showMoreBtn}
                                        onClick={(e) => { e.stopPropagation(); toggleShowMore(group.id); }}
                                    >
                                        {expandedLists[group.id] ? "Show Less" : `Show More (+${group.items.length - 5})`}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
}
