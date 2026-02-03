-- Create pages table for multi-page support
CREATE TABLE IF NOT EXISTS pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  is_published BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  show_in_menu BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create theme_settings table for advanced styling
CREATE TABLE IF NOT EXISTS theme_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Header settings
  header_title TEXT DEFAULT 'ACEM',
  header_font_family TEXT DEFAULT 'Inter',
  header_font_size TEXT DEFAULT '2xl',
  header_text_color TEXT DEFAULT '#00D9FF',
  header_bg_color TEXT DEFAULT 'transparent',
  header_bg_image TEXT,
  
  -- Logo settings (JSON array with position info)
  logos JSONB DEFAULT '[]'::jsonb,
  
  -- Background settings
  page_bg_color TEXT DEFAULT '#0A0F1E',
  page_bg_image TEXT,
  
  -- Navigation settings
  nav_font_size TEXT DEFAULT 'base',
  nav_text_color TEXT DEFAULT '#FFFFFF',
  nav_hover_color TEXT DEFAULT '#00D9FF',
  
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default theme settings
INSERT INTO theme_settings (header_title, logos) 
VALUES (
  'ACEM',
  '[
    {"id": 1, "url": "https://via.placeholder.com/60x60/00D9FF/FFFFFF?text=Logo1", "position": "left", "order": 1},
    {"id": 2, "url": "https://via.placeholder.com/60x60/FF00E5/FFFFFF?text=Logo2", "position": "left", "order": 2},
    {"id": 3, "url": "https://via.placeholder.com/60x60/A855F7/FFFFFF?text=Logo3", "position": "right", "order": 1},
    {"id": 4, "url": "https://via.placeholder.com/60x60/00D9FF/FFFFFF?text=Logo4", "position": "right", "order": 2}
  ]'::jsonb
);

-- Insert default pages
INSERT INTO pages (title, slug, content, display_order, show_in_menu) VALUES
('Home', 'home', 'Welcome to ACEM College Fest', 1, true),
('Events', 'events', 'Explore our exciting events', 2, true),
('Committee', 'committee', 'Meet our organizing committee', 3, true),
('Gallery', 'gallery', 'View our photo gallery', 4, true),
('About Us', 'about', 'Learn more about us', 5, true),
('Contact Us', 'contact', 'Get in touch with us', 6, true);

-- RLS policies for pages
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for pages"
ON pages FOR SELECT
USING (true);

CREATE POLICY "Public insert access for pages"
ON pages FOR INSERT
WITH CHECK (true);

CREATE POLICY "Public update access for pages"
ON pages FOR UPDATE
USING (true);

CREATE POLICY "Public delete access for pages"
ON pages FOR DELETE
USING (true);

-- RLS policies for theme_settings
ALTER TABLE theme_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for theme_settings"
ON theme_settings FOR SELECT
USING (true);

CREATE POLICY "Public update access for theme_settings"
ON theme_settings FOR UPDATE
USING (true);

-- Update header_settings default college name to ACEM
UPDATE header_settings SET college_name = 'ACEM' WHERE id = (SELECT id FROM header_settings LIMIT 1);