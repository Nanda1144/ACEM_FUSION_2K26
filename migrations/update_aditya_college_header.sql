-- Add logo shape field and update default header values

-- Note: For Supabase, logos are stored as JSONB array in theme_settings table
-- The shape field will be added to each logo object in the array

-- Update default header values for ADITYA College
UPDATE theme_settings 
SET 
  header_title = 'ADITYA College of Engineering Madanapalle',
  header_subtitle = 'MADANAPALLE',
  header_tagline = 'UGC - Autonomous Institution',
  header_text_color = '#D4AF37',
  show_header_subtitle = true,
  show_header_tagline = true
WHERE id IS NOT NULL;

-- Note: Logo shape field is handled in the application layer
-- Each logo object in the logos JSONB array should have structure:
-- {
--   "id": number,
--   "url": "string",
--   "position": "left" | "right",
--   "order": number,
--   "shape": "circle" | "semi-square"
-- }

-- Verify the changes
SELECT 
  id,
  header_title,
  header_subtitle,
  header_tagline,
  header_text_color,
  show_header_subtitle,
  show_header_tagline,
  logos
FROM theme_settings;
