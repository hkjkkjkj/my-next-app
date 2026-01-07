import { Suspense } from 'react';
import HomeClient from './HomeClient';
import {
  getHeroBanners,
  getSidebarGames,
  getDiscoverItems,
  getNews,
  getDealsData,
  getFreeItems,
  getTopNewReleases,
  getPromosItems,
  getFeaturedLists,
  getFeaturedGameBanner,
  getTrendingItems,
  getNewReleasesList,
  getEpicFirstRun,
  getTopLists,
  getNowOn,
  getStorePromotions,
  getAllGames
} from '@/lib/data-db';

export const dynamic = 'force-dynamic';

export default async function Home() {
  console.log('Rendering Home Page', new Date().toISOString());
  const [
    heroBanners,
    sidebarGames,
    discoverItems,
    news,
    deals,
    freeGames,
    topNewReleases,
    promos,
    featuredLists,
    featuredGameBanner,
    trendingGames,
    newReleasesList,
    epicFirstRun,
    topLists,
    nowOn,
    storePromotions,
    storeGames
  ] = await Promise.all([
    getHeroBanners(),
    getSidebarGames(),
    getDiscoverItems(),
    getNews(),
    getDealsData(),
    getFreeItems(),
    getTopNewReleases(),
    getPromosItems(),
    getFeaturedLists(),
    getFeaturedGameBanner(),
    getTrendingItems(),
    getNewReleasesList(),
    getEpicFirstRun(),
    getTopLists(),
    getNowOn(),
    getStorePromotions(),
    getAllGames()
  ]);

  return (
    <main>
      <HomeClient
        heroBanners={heroBanners}
        sidebarGames={sidebarGames}
        discoverItems={discoverItems}
        news={news}
        deals={deals}
        freeGames={freeGames}
        topNewReleases={topNewReleases}
        promos={promos}
        topSellers={featuredLists.topSellers}
        mostPlayed={featuredLists.mostPlayed}
        topUpcoming={featuredLists.topUpcoming}
        featuredGameBanner={featuredGameBanner}
        trendingGames={trendingGames}
        newReleases={newReleasesList.newReleases}
        topRated={newReleasesList.topRated}
        comingSoon={newReleasesList.comingSoon}
        epicFirstRun={epicFirstRun}
        topAddOns={topLists.topAddOns}
        topFreeToPlay={topLists.topFreeToPlay}
        topDemos={topLists.topDemos}
        nowOn={nowOn}
        storePromotions={storePromotions}
        storeGames={storeGames}
      />
    </main>
  );
}