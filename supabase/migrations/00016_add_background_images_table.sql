-- Create background_images table for admin-managed background carousel
CREATE TABLE IF NOT EXISTS background_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 1,
  display_duration INTEGER DEFAULT 5000,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE background_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view background images"
  ON background_images FOR SELECT
  USING (true);

CREATE POLICY "Service role can manage background images"
  ON background_images FOR ALL
  USING (auth.role() = 'service_role');

-- Add constraint to limit to 5 images
CREATE OR REPLACE FUNCTION check_background_images_limit()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM background_images) >= 5 THEN
    RAISE EXCEPTION 'Maximum 5 background images allowed';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER background_images_limit_trigger
  BEFORE INSERT ON background_images
  FOR EACH ROW
  EXECUTE FUNCTION check_background_images_limit();

COMMENT ON TABLE background_images IS 'Background images for homepage carousel with dissolve animation';
COMMENT ON COLUMN background_images.display_duration IS 'Duration in milliseconds to display each image (default 5000ms = 5 seconds)';