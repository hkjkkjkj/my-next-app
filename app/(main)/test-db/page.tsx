import { getHeroBanners, getSidebarGames, getDiscoverItems } from '@/lib/data-db';
import { HeroBanner, SidebarGame, DiscoverItem } from '@/lib/data';

export default async function TestDBPage() {
    let heroBanners: HeroBanner[] = [];
    let sidebarGames: SidebarGame[] = [];
    let discoverItems: DiscoverItem[] = [];
    let error = null;

    try {
        heroBanners = await getHeroBanners();
        sidebarGames = await getSidebarGames();
        discoverItems = await getDiscoverItems();
    } catch (e: any) {
        console.error(e);
        error = e.message;
    }

    return (
        <div className="p-8 font-sans">
            <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p><strong>Error:</strong> {error}</p>
                    <p className="text-sm mt-2">Make sure your database is running and .env.local is configured correctly.</p>
                </div>
            )}

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Hero Banners ({heroBanners.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {heroBanners.map(item => (
                        <div key={item.id} className="border p-4 rounded shadow">
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                            <p className="text-xs text-gray-500 mt-2">ID: {item.id}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Sidebar Games ({sidebarGames.length})</h2>
                <ul className="list-disc pl-5">
                    {sidebarGames.map(item => (
                        <li key={item.id}>{item.title} - <span className="text-gray-600">{item.extra}</span></li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Discover Items ({discoverItems.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {discoverItems.slice(0, 6).map(item => (
                        <div key={item.id} className="border p-4 rounded bg-gray-50">
                            <h3 className="font-bold truncate">{item.title}</h3>
                            <p className="text-sm">Price: {item.currentPrice}</p>
                        </div>
                    ))}
                </div>
                {discoverItems.length > 6 && <p className="mt-2 text-gray-500">...and {discoverItems.length - 6} more.</p>}
            </section>
        </div>
    );
}
