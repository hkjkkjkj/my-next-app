'use client';

import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';

// Reusable Filter Group Component
const FilterGroup = ({ title, options }: { title: string, options: string[] }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={styles.filterGroup}>
            <div className={styles.filterHeader} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span className={styles.filterArrow} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▲</span>
            </div>

            {isOpen && (
                <div className={styles.filterContent}>
                    {options.map((option, idx) => (
                        <div key={idx} className={styles.filterOption}>
                            <div className={styles.checkbox}></div>
                            <span>{option}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const FilterSidebar: React.FC = () => {
    const genres = ['Action', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Puzzle', 'Simulation'];
    const prices = ['Free', 'Under $10.00', 'Under $20.00', 'Under $30.00', '$14.99 and above'];
    const features = ['Single Player', 'Co-op', 'Multiplayer', 'Controller Support'];
    const events = ['Holiday Sale', 'Weekly Deal', 'First Run'];
    const types = ['Game', 'Game Add-On', 'Game Demo', 'Game Bundle'];
    const platforms = ['Windows', 'Mac OS'];

    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <h3 className={styles.filtersTitle}>Filters (1)</h3>
                <button className={styles.resetButton}>Reset</button>
            </div>

            <div className={styles.searchContainer}>
                <span className={styles.searchIcon}>🔍</span>
                <input type="text" placeholder="Keywords" className={styles.searchInput} />
            </div>

            <FilterGroup title="Events" options={events} />
            <FilterGroup title="Price" options={prices} />
            <FilterGroup title="Genre" options={genres} />
            <FilterGroup title="Features" options={features} />
            <FilterGroup title="Types" options={types} />
            <FilterGroup title="Platform" options={platforms} />
        </div>
    );
};

export default FilterSidebar;
