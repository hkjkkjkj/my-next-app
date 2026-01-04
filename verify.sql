-- 1. Lords of the Fallen
UPDATE trending_items SET price = '600000', original_price = '1200000', discount = '-50%' WHERE id = 'lords-of-the-fallen-ii';

-- 2. The Wolf Among Us 2 (Chưa có giá)
UPDATE trending_items SET price = 'Coming Soon', original_price = NULL, discount = NULL WHERE id = 'the-wolf-among-us-2';

-- 3. Arknights: Endfield (Miễn phí)
UPDATE trending_items SET price = 'Free', original_price = NULL, discount = NULL WHERE id = 'arknights-endfield';

-- 4. Assassin's Creed Valhalla
UPDATE trending_items SET price = '157000', original_price = '1570000', discount = '-90%' WHERE id = 'assassins-creed-valhalla';