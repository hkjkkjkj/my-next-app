SELECT id, title, price FROM top_new_releases;
-- SQL cập nhật giá game Top New Releases (Giá tham khảo thực tế)
-- 1. Assassin's Creed Valhalla (Giảm sâu 90% như Epic/Steam sale)
UPDATE top_new_releases 
SET price = '157000', original_price = '1570000', discount = '-90%' 
WHERE id = 'assassins-creed-valhalla';
-- 2. Celeste (Giá indie tiêu chuẩn)
UPDATE top_new_releases 
SET price = '65000', original_price = '260000', discount = '-75%' 
WHERE id = 'celeste';
-- 3. Crystal of Atlantean (Giả lập giá game indie mới)
UPDATE top_new_releases 
SET price = '240000', original_price = '300000', discount = '-20%' 
WHERE id = 'crystal-of-atlantean';
-- 4. Florence (Game ngắn, giá rẻ)
UPDATE top_new_releases 
SET price = '20500', original_price = '82000', discount = '-75%' 
WHERE id = 'florence';
-- 5. Lies of P (Game AAA mới)
UPDATE top_new_releases 
SET price = '750000', original_price = '1500000', discount = '-50%' 
WHERE id = 'lies-of-p';
-- 6. Lords of the Fallen II (Giá game AAA)
UPDATE top_new_releases 
SET price = '600000', original_price = '1200000', discount = '-50%' 
WHERE id = 'lords-of-the-fallen-ii';
-- 7. Rusty Lake Hotel (Game giải đố giá rẻ)
UPDATE top_new_releases 
SET price = '24000', original_price = '43000', discount = '-44%' 
WHERE id = 'rusty-lake-hotel';
-- 8. Stray (Game mèo)
UPDATE top_new_releases 
SET price = '250000', original_price = '379000', discount = '-34%' 
WHERE id = 'stray';
-- 9. The Hunter: Call of the Wild
UPDATE top_new_releases 
SET price = '56000', original_price = '280000', discount = '-80%' 
WHERE id = 'the-hunter-call-of-the-wild';
-- 10. When The Past Was Around
UPDATE top_new_releases 
SET price = '60000', original_price = '120000', discount = '-50%' 
WHERE id = 'when-the-past-was-around';
-- Đảm bảo Trending Items cũng có giá
UPDATE trending_items 
SET price = '250000', original_price = '500000', discount = '-50%';