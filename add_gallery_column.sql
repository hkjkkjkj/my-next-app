-- Add gallery_json column to games table
ALTER TABLE games ADD COLUMN gallery_json JSON NULL;

-- Update existing games to have empty gallery
UPDATE games SET gallery_json = NULL WHERE gallery_json IS NULL;
