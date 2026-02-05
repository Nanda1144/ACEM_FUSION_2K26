-- Create sponsor_logos table for mobile logo carousel
CREATE TABLE IF NOT EXISTS sponsor_logos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  order_number INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE sponsor_logos ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can view sponsor logos"
  ON sponsor_logos FOR SELECT
  TO anon, authenticated
  USING (true);

-- Admin full access
CREATE POLICY "Admins can manage sponsor logos"
  ON sponsor_logos FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);