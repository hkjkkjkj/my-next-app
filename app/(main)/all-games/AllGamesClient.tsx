"use client";

import { useState, useEffect } from 'react';
import styles from './AllGames.module.css';
import { useFilterSidebarLogic } from '@/app/components/FilterSidebar/useFilterSidebarLogic';
import FilterSidebar from '@/app/components/FilterSidebar/FilterSidebar';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GameItem } from '@/lib/data';

interface AllGamesClientProps {
    games: GameItem[];
}

export default function AllGamesClient({ games: initialGames }: AllGamesClientProps) {

    // Use the Logic Hook here to lift state
    const {
        filteredGames,
        // Sidebar Props
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
    } = useFilterSidebarLogic(initialGames);

    // --- Pagination State & Logic ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // 4 columns x 3 rows

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filteredGames.length, selectedFilters, maxPrice]); // Dependency on "items" or filter states

    // Calculcations
    const totalPages = Math.ceil(filteredGames.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedGames = filteredGames.slice(startIndex, startIndex + itemsPerPage);

    // Dynamic Page Numbers generator
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, '...', totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number') {
            setCurrentPage(page);
            // Scroll to top of grid
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) handlePageChange(currentPage - 1);
    };

    return (
        <div className={styles.container}>

            {/* Popular Genres Section */}
            <section className={styles.genresSection}>
                <div className={styles.genreList}>
                    {/* Genres... */}
                </div>
            </section>

            {/* Main Layout */}
            <div className={styles.mainLayout}>

                {/* Games Grid Column */}
                <div className={styles.gamesColumn}>

                    <div className={styles.topBar}>
                        <span className={styles.sortLabel}>Show:</span>
                        <select className={styles.sortSelect}>
                            <option>New Release</option>
                            <option>Coming Soon</option>
                            <option>Alphabetical</option>
                            <option>Price: High to Low</option>
                            <option>Price: Low to High</option>
                        </select>
                        <span style={{ marginLeft: 'auto', fontSize: '14px', color: '#888' }}>
                            Showing {filteredGames.length > 0 ? startIndex + 1 : 0}-{Math.min(startIndex + itemsPerPage, filteredGames.length)} of {filteredGames.length} games
                        </span>
                    </div>

                    <div className={styles.gameGrid}>
                        {paginatedGames.length === 0 ? (
                            <div style={{ padding: '40px', textAlign: 'center', color: '#888', gridColumn: '1/-1' }}>
                                No games match your filters. <button onClick={resetFilters} style={{ color: '#0078f2', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Reset Filters</button>
                            </div>
                        ) : (
                            paginatedGames.map((game, index) => (
                                <Link href={game.slug ? `/p/${game.slug}` : '#'} key={`${game.id}-${index}`} className={styles.gameCard}>
                                    <div className={styles.cardImageWrapper}>
                                        <img
                                            src={game.imageUrl || game.image}
                                            alt={game.title}
                                            className={styles.cardImage}
                                            onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x400?text=Game"; }}
                                        />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <span className={styles.baseGameLabel}>{game.category || 'BASE GAME'}</span>
                                        <h3 className={styles.gameTitle}>{game.title}</h3>

                                        <div className={styles.priceContainer}>
                                            {game.discount && <span className={styles.discountBadge}>{game.discount}</span>}
                                            {game.originalPrice && <span className={styles.originalPrice}>{game.originalPrice}</span>}
                                            <span className={styles.currentPrice}>{game.currentPrice || (game.price ? game.price : 'Free')}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className={styles.pagination}>
                            <button
                                className={styles.navBtn}
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                style={{ opacity: currentPage === 1 ? 0.5 : 1, marginRight: 8 }}
                            >
                                <FaChevronLeft size={12} />
                            </button>

                            {getPageNumbers().map((page, idx) => (
                                <span
                                    key={idx}
                                    className={`${styles.pageNumber} ${page === currentPage ? styles.activePage : ''} ${page === '...' ? styles.ellipsis : ''}`}
                                    onClick={() => handlePageChange(page)}
                                    style={{ cursor: page === '...' ? 'default' : 'pointer' }}
                                >
                                    {page}
                                </span>
                            ))}

                            <button
                                className={styles.nextBtn}
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                            >
                                <FaChevronRight size={12} />
                            </button>
                        </div>
                    )}

                    {/* Disclaimer */}
                    <div className={styles.disclaimer}>
                        * The lowest price offered on The Epic Games Store in the last 30 days before discount
                    </div>

                </div>

                {/* Sidebar Column */}
                <FilterSidebar
                    openSections={openSections}
                    toggleSection={toggleSection}
                    selectedFilters={selectedFilters}
                    toggleFilter={toggleFilter}
                    resetFilters={resetFilters}
                    expandedLists={expandedLists}
                    toggleShowMore={toggleShowMore}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                    sections={sections}
                />

            </div>
        </div>
    );
}
