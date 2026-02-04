-- Update header with new ACEM FUSION 2k26 branding

-- Update default header values
UPDATE theme_settings 
SET 
  header_title = 'ACEM FUSION 2k26',
  header_subtitle = 'Aditya College of Engineering',
  header_tagline = '(UGC - Autonomous Institution)',
  header_text_color = '#D4AF37',
  show_header_subtitle = true,
  show_header_tagline = true
WHERE id IS NOT NULL;

-- Verify the changes
SELECT 
  id,
  header_title,
  header_subtitle,
  header_tagline,
  header_text_color,
  show_header_subtitle,
  show_header_tagline
FROM theme_settings;
