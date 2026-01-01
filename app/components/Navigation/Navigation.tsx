"use client";

import styles from './Navigation.module.css';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { mainGameList, DiscoverItem, topNewReleases, TopNewReleases, epicFirstRun, EpicFirstRun, trendingGames, TrendingItem, nowOn, NowOn } from '@/lib/data';

export default function Navigation() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<(DiscoverItem | TopNewReleases | EpicFirstRun | TrendingItem | NowOn)[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setResults([]);
      setIsDropdownOpen(false);
      return;
    }

    // Combine all lists
    const allGames = [
      ...mainGameList,
      ...topNewReleases,
      ...epicFirstRun,
      ...trendingGames,
      ...nowOn
    ];

    // Deduplicate by ID
    const uniqueGamesMap = new Map();
    allGames.forEach(game => {
      uniqueGamesMap.set(game.id, game);
    });
    const uniqueGames = Array.from(uniqueGamesMap.values()) as (DiscoverItem | TopNewReleases | EpicFirstRun | TrendingItem | NowOn)[];

    const filtered = uniqueGames.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setIsDropdownOpen(true);
  };

  const handleResultClick = () => {
    setIsDropdownOpen(false);
    setSearchQuery('');
  };

  return (
    <nav className={styles.navContainer}>

      <ul className={styles.navList}>
        <li>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          >
            Discover
          </Link>
        </li>
        <li>
          <Link
            href="/all-games"
            className={`${styles.navLink} ${pathname === '/all-games' ? styles.active : ''}`}
          >
            Browse
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          >
            News
          </Link>
        </li>
      </ul>

      <div className={styles.searchWrapper} ref={searchRef}>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search store"
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => {
              if (searchQuery.trim() !== '') setIsDropdownOpen(true);
            }}
          />
        </div>

        {isDropdownOpen && searchQuery.trim() !== '' && (
          <div className={styles.dropdown}>
            {results.length > 0 ? (
              results.map((game: DiscoverItem | TopNewReleases | EpicFirstRun | TrendingItem | NowOn) => (
                <Link
                  key={game.id}
                  href={`/p/${game.slug}`}
                  className={styles.resultItem}
                  onClick={handleResultClick}
                >
                  <div className={styles.resultImageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={game.imageUrl} alt={game.title} className={styles.resultImage} />
                  </div>
                  <span className={styles.resultTitle}>{game.title}</span>
                </Link>
              ))
            ) : (
              <div className={styles.noResults}>No results found</div>
            )}
          </div>
        )}
      </div>

    </nav>
  );
}