-- Add additional fields to events table for detailed pages
ALTER TABLE events ADD COLUMN IF NOT EXISTS rules TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS instructions TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS additional_images JSONB DEFAULT '[]'::jsonb;
ALTER TABLE events ADD COLUMN IF NOT EXISTS venue TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS event_date TIMESTAMPTZ;
ALTER TABLE events ADD COLUMN IF NOT EXISTS duration TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS prize_details TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS team_size TEXT;

-- Update theme_settings to remove default background images
UPDATE theme_settings SET page_bg_image = NULL WHERE page_bg_image IS NOT NULL;
UPDATE theme_settings SET header_bg_image = NULL WHERE header_bg_image IS NOT NULL;