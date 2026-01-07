"use client";

import React from 'react';
import { useHeroSlider } from '@/lib/hooks/useHeroSlider';

import HeroSection from '../components/HeroSection/HeroSection';
import Sidebar from '../components/Sidebar/Sidebar';
import DiscoverSection from '../components/DiscoverSection/DiscoverSection';
import NewsSection from '../components/NewsSection/NewsSection';
import DealsSection from '../components/DealsSection/DealsSection';
import FreeGamesSection from '../components/FreeGamesSection/FreeGamesSection';
import TopNewReleases from '../components/TopNewReleases/TopNewReleases';
import PromosSection from '../components/PromosSection/PromosSection';
import FeaturedLists from '../components/FeaturedLists/FeaturedLists';
import FeaturedGameBanner from '../components/FeaturedGameBanner/FeaturedGameBanner';
import TrendingSection from '../components/TrendingSection/TrendingSection';
import NewReleasesList from '../components/NewReleasesList/NewReleasesList';
import EpicFirstRunSection from '../components/EpicFirstRunSection/EpicFirstRunSection';
import TopListsSection from '../components/TopListsSection/TopListsSection';
import NowOnSection from '../components/NowOnSection/NowOnSection';
import StorePromotionsSection from '../components/StorePromotionsSection/StorePromotionsSection';
import FilterSidebar from '../components/FilterSidebar/FilterSidebar';
import styles from './HomePage.module.css';

import {
    HeroBanner,
    SidebarGame,
    DiscoverItem,
    News,
    DealItem,
    FreeItem,
    TopNewReleases as TopNewReleasesType,
    PromosItem,
    GameItem,
    FeaturedGame,
    TrendingItem,
    EpicFirstRun,
    NowOn,
    StorePromotionItem
} from '@/lib/data';

interface HomeClientProps {
    heroBanners: HeroBanner[];
    sidebarGames: SidebarGame[];
    discoverItems: DiscoverItem[];
    news: News[];
    deals: DealItem[];
    freeGames: FreeItem[];
    topNewReleases: TopNewReleasesType[];
    promos: PromosItem[];
    topSellers: GameItem[];
    mostPlayed: GameItem[];
    topUpcoming: GameItem[];
    featuredGameBanner: FeaturedGame | null;
    trendingGames: TrendingItem[];
    newReleases: GameItem[];
    topRated: GameItem[];
    comingSoon: GameItem[];
    epicFirstRun: EpicFirstRun[];
    topAddOns: GameItem[];
    topFreeToPlay: GameItem[];
    topDemos: GameItem[];
    nowOn: NowOn[];

    storePromotions: StorePromotionItem[];
    storeGames: GameItem[];
}

export default function HomeClient({
    heroBanners,
    sidebarGames,
    discoverItems,
    news,
    deals,
    freeGames,
    topNewReleases,
    promos,
    topSellers,
    mostPlayed,
    topUpcoming,
    featuredGameBanner,
    trendingGames,
    newReleases,
    topRated,
    comingSoon,
    epicFirstRun,
    topAddOns,
    topFreeToPlay,
    topDemos,
    nowOn,
    storePromotions
}: HomeClientProps) {
    const { currentSlide, handleNext, handlePrev, handleThumbnailClick } = useHeroSlider(heroBanners.length);


    return (
        <div className={styles.appContainer}>
            <div className={styles.mainContent}>
                <div className={styles.topSection}>
                    <div className={styles.heroSectionWrapper}>
                        <HeroSection
                            heroData={heroBanners}
                            currentSlide={currentSlide}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            handleThumbnailClick={handleThumbnailClick}
                        />
                    </div>
                    <aside className={styles.sidebarWrapper}>
                        <Sidebar
                            sidebarGames={sidebarGames}
                            currentSlide={currentSlide}
                            handleThumbnailClick={handleThumbnailClick}
                        />
                    </aside>
                </div>

                <div className={styles.contentGrid}>



                    <div className={styles.feedWrapper}>
                        <DiscoverSection discoverItems={discoverItems} />
                        <NewsSection news={news} />
                        <DealsSection deals={deals} />
                        <FreeGamesSection games={freeGames} />
                        <TopNewReleases games={topNewReleases} />
                        <PromosSection promos={promos} />
                        <FeaturedLists
                            topSellers={topSellers}
                            mostPlayed={mostPlayed}
                            topUpcoming={topUpcoming}
                        />
                        <FeaturedGameBanner game={featuredGameBanner} />
                        <TrendingSection games={trendingGames} />
                        <NewReleasesList
                            newReleases={newReleases}
                            topRated={topRated}
                            comingSoon={comingSoon}
                        />
                        <EpicFirstRunSection games={epicFirstRun} />
                        <TopListsSection
                            topAddOns={topAddOns}
                            topFreeToPlay={topFreeToPlay}
                            topDemos={topDemos}
                        />
                        <NowOnSection games={nowOn} />
                        <StorePromotionsSection promotions={storePromotions} />
                    </div>
                </div>
            </div>
        </div>
    );
}
