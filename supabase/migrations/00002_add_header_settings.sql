-- Create header_settings table
CREATE TABLE IF NOT EXISTS header_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  college_name TEXT NOT NULL DEFAULT 'FUSION26',
  logo_1_url TEXT,
  logo_2_url TEXT,
  logo_3_url TEXT,
  logo_4_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default header settings
INSERT INTO header_settings (college_name, logo_1_url, logo_2_url, logo_3_url, logo_4_url) 
VALUES ('FUSION26', 'https://via.placeholder.com/60x60/00D9FF/FFFFFF?text=Logo1', 'https://via.placeholder.com/60x60/FF00E5/FFFFFF?text=Logo2', 'https://via.placeholder.com/60x60/A855F7/FFFFFF?text=Logo3', 'https://via.placeholder.com/60x60/00D9FF/FFFFFF?text=Logo4');

-- RLS policies for header_settings table
ALTER TABLE header_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for header_settings"
ON header_settings FOR SELECT
USING (true);

CREATE POLICY "Public update access for header_settings"
ON header_settings FOR UPDATE
USING (true);