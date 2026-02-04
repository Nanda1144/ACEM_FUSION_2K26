-- Add new header fields to theme_settings table

-- Add header subtitle field
ALTER TABLE theme_settings 
ADD COLUMN IF NOT EXISTS header_subtitle TEXT;

-- Add header tagline field
ALTER TABLE theme_settings 
ADD COLUMN IF NOT EXISTS header_tagline TEXT;

-- Add show subtitle toggle
ALTER TABLE theme_settings 
ADD COLUMN IF NOT EXISTS show_header_subtitle BOOLEAN DEFAULT false;

-- Add show tagline toggle
ALTER TABLE theme_settings 
ADD COLUMN IF NOT EXISTS show_header_tagline BOOLEAN DEFAULT false;

-- Update existing record with default values (if exists)
UPDATE theme_settings 
SET 
  header_subtitle = 'College of Engineering & Technology',
  header_tagline = 'Excellence in Education',
  show_header_subtitle = false,
  show_header_tagline = false
WHERE header_subtitle IS NULL;

-- Verify the changes
SELECT 
  id,
  header_title,
  header_subtitle,
  header_tagline,
  show_header_subtitle,
  show_header_tagline
FROM theme_settings;
