-- Create popup_settings table for welcome/announcement popup
CREATE TABLE IF NOT EXISTS popup_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enabled BOOLEAN DEFAULT false,
  image_url TEXT,
  link_url TEXT,
  show_once_per_session BOOLEAN DEFAULT true,
  display_delay INTEGER DEFAULT 1000,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default popup settings
INSERT INTO popup_settings (enabled, image_url, show_once_per_session, display_delay)
VALUES (false, '', true, 1000)
ON CONFLICT (id) DO NOTHING;

-- RLS Policies for popup_settings
ALTER TABLE popup_settings ENABLE ROW LEVEL SECURITY;

-- Public can read popup settings
CREATE POLICY "Public can read popup settings"
ON popup_settings FOR SELECT
USING (true);

-- Authenticated users can update popup settings
CREATE POLICY "Authenticated users can update popup settings"
ON popup_settings FOR UPDATE
USING (auth.role() = 'authenticated');

-- Authenticated users can insert popup settings
CREATE POLICY "Authenticated users can insert popup settings"
ON popup_settings FOR INSERT
WITH CHECK (auth.role() = 'authenticated');