import styles from './GamesPage.module.css';
import { mainGameList } from '@/lib/data';
import GameCard from './components/GameCard';
import FilterSidebar from './components/FilterSidebar';
import PopularGenres from './components/PopularGenres';

export default function GamesPage() {
  // We use mainGameList directly. In a real app, this would be filtered by state.
  return (
    <main className={styles.pageContainer}>
      <div className={styles.contentWrapper}>

        {/* Top Section: Popular Genres */}
        <PopularGenres />

        {/* Sorting / View Controls can go here */}
        <div className={styles.headerControls}>
          <div className={styles.dropdownLabel}>Show: <b>New Release</b> ▼</div>
        </div>

        <div className={styles.mainLayout}>

          {/* Left Column: Games Grid */}
          <div className={styles.gamesColumn}>
            <div className={styles.gamesGrid}>
              {mainGameList.map((game, index) => (
                <GameCard key={game.id || index} game={game} />
              ))}
            </div>

            <div className={styles.listFooter}>
              {/* Pagination placeholder */}
            </div>
          </div>

          {/* Right Column: Filters */}
          <div className={styles.sidebarWrapper}>
            <FilterSidebar />
          </div>

        </div>
      </div>
    </main>
  );
}