-- Create page_sections table for flexible content management
CREATE TABLE IF NOT EXISTS page_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL, -- 'header', 'body', 'footer'
  section_name TEXT NOT NULL,
  components JSONB DEFAULT '[]'::jsonb,
  styles JSONB DEFAULT '{}'::jsonb,
  display_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create footer_settings table for enhanced footer
CREATE TABLE IF NOT EXISTS footer_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  college_name TEXT DEFAULT 'ACEM',
  address TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  social_links JSONB DEFAULT '{}'::jsonb,
  additional_info TEXT,
  layout_style TEXT DEFAULT 'default',
  bg_color TEXT DEFAULT '#0A0F1E',
  text_color TEXT DEFAULT '#FFFFFF',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default footer settings
INSERT INTO footer_settings (
  college_name,
  address,
  phone,
  email,
  website,
  social_links,
  additional_info
) VALUES (
  'ACEM',
  '123 College Street, City, State - 123456',
  '+91 1234567890',
  'info@acem.edu',
  'www.acem.edu',
  '{"instagram": "https://instagram.com/acem", "linkedin": "https://linkedin.com/company/acem", "facebook": "https://facebook.com/acem", "twitter": "https://twitter.com/acem"}'::jsonb,
  'All rights reserved © 2026 ACEM'
);

-- Create component_templates table for reusable components
CREATE TABLE IF NOT EXISTS component_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'text', 'image', 'button', 'card', 'grid', etc.
  default_props JSONB DEFAULT '{}'::jsonb,
  preview_image TEXT,
  category TEXT DEFAULT 'basic',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default component templates
INSERT INTO component_templates (name, type, default_props, category) VALUES
('Text Box', 'text', '{"content": "Enter your text here", "fontSize": "base", "fontWeight": "normal", "color": "#FFFFFF", "align": "left"}'::jsonb, 'basic'),
('Heading', 'heading', '{"content": "Heading Text", "level": "h2", "fontSize": "2xl", "fontWeight": "bold", "color": "#00D9FF", "align": "center"}'::jsonb, 'basic'),
('Image', 'image', '{"src": "", "alt": "Image", "width": "100%", "height": "auto", "objectFit": "cover"}'::jsonb, 'media'),
('Button', 'button', '{"text": "Click Me", "link": "#", "variant": "primary", "size": "md"}'::jsonb, 'interactive'),
('Card', 'card', '{"title": "Card Title", "content": "Card content goes here", "image": "", "link": "#"}'::jsonb, 'layout'),
('Spacer', 'spacer', '{"height": "40px"}'::jsonb, 'layout'),
('Divider', 'divider', '{"color": "#00D9FF", "thickness": "1px", "style": "solid"}'::jsonb, 'layout');

-- RLS policies for page_sections
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for page_sections"
ON page_sections FOR SELECT
USING (true);

CREATE POLICY "Public insert access for page_sections"
ON page_sections FOR INSERT
WITH CHECK (true);

CREATE POLICY "Public update access for page_sections"
ON page_sections FOR UPDATE
USING (true);

CREATE POLICY "Public delete access for page_sections"
ON page_sections FOR DELETE
USING (true);

-- RLS policies for footer_settings
ALTER TABLE footer_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for footer_settings"
ON footer_settings FOR SELECT
USING (true);

CREATE POLICY "Public update access for footer_settings"
ON footer_settings FOR UPDATE
USING (true);

-- RLS policies for component_templates
ALTER TABLE component_templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for component_templates"
ON component_templates FOR SELECT
USING (true);