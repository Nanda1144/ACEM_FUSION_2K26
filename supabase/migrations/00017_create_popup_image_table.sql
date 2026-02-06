-- Create popup_image table for managing promotional popup
CREATE TABLE IF NOT EXISTS popup_image (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  duration INTEGER DEFAULT 6,
  is_enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE popup_image ENABLE ROW LEVEL SECURITY;

-- Public can read enabled popup
CREATE POLICY "Anyone can view enabled popup"
  ON popup_image FOR SELECT
  USING (is_enabled = true);

-- Authenticated users can manage popup
CREATE POLICY "Authenticated users can manage popup"
  ON popup_image FOR ALL
  USING (auth.role() = 'authenticated');

-- Create function to ensure only one popup exists
CREATE OR REPLACE FUNCTION ensure_single_popup()
RETURNS TRIGGER AS $$
BEGIN
  -- Delete all existing popups before inserting new one
  IF TG_OP = 'INSERT' THEN
    DELETE FROM popup_image WHERE id != NEW.id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER ensure_single_popup_trigger
  AFTER INSERT ON popup_image
  FOR EACH ROW
  EXECUTE FUNCTION ensure_single_popup();