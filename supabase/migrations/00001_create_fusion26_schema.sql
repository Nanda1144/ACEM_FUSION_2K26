-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Technical', 'Cultural')),
  description TEXT NOT NULL,
  image_url TEXT,
  staff_coordinators JSONB DEFAULT '[]'::jsonb,
  student_coordinators JSONB DEFAULT '[]'::jsonb,
  registration_link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create committee table
CREATE TABLE IF NOT EXISTS committee (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create about_us table
CREATE TABLE IF NOT EXISTS about_us (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contact table
CREATE TABLE IF NOT EXISTS contact (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  instagram TEXT,
  linkedin TEXT,
  whatsapp TEXT,
  email TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create admin_passkey table
CREATE TABLE IF NOT EXISTS admin_passkey (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  passkey TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default passkey
INSERT INTO admin_passkey (passkey) VALUES ('acemadmin@fusion');

-- Insert default about us content
INSERT INTO about_us (content) VALUES ('Welcome to Fusion26, the ultimate college fest experience! Join us for an unforgettable celebration of talent, creativity, and innovation.');

-- Insert default contact information
INSERT INTO contact (instagram, linkedin, whatsapp, email) VALUES 
('https://instagram.com/fusion26', 'https://linkedin.com/company/fusion26', 'https://wa.me/1234567890', 'contact@fusion26.com');

-- Create storage bucket for event images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('app-9dfi9jpj51xd_events_images', 'app-9dfi9jpj51xd_events_images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage bucket for committee images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('app-9dfi9jpj51xd_committee_images', 'app-9dfi9jpj51xd_committee_images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('app-9dfi9jpj51xd_gallery_images', 'app-9dfi9jpj51xd_gallery_images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for event images
CREATE POLICY "Public read access for event images"
ON storage.objects FOR SELECT
USING (bucket_id = 'app-9dfi9jpj51xd_events_images');

CREATE POLICY "Public upload access for event images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_events_images');

CREATE POLICY "Public update access for event images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_events_images');

CREATE POLICY "Public delete access for event images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_events_images');

-- Storage policies for committee images
CREATE POLICY "Public read access for committee images"
ON storage.objects FOR SELECT
USING (bucket_id = 'app-9dfi9jpj51xd_committee_images');

CREATE POLICY "Public upload access for committee images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_committee_images');

CREATE POLICY "Public update access for committee images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_committee_images');

CREATE POLICY "Public delete access for committee images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_committee_images');

-- Storage policies for gallery images
CREATE POLICY "Public read access for gallery images"
ON storage.objects FOR SELECT
USING (bucket_id = 'app-9dfi9jpj51xd_gallery_images');

CREATE POLICY "Public upload access for gallery images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_gallery_images');

CREATE POLICY "Public update access for gallery images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_gallery_images');

CREATE POLICY "Public delete access for gallery images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_gallery_images');

-- RLS policies for events table
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for events"
ON events FOR SELECT
USING (true);

CREATE POLICY "Public insert access for events"
ON events FOR INSERT
WITH CHECK (true);

CREATE POLICY "Public update access for events"
ON events FOR UPDATE
USING (true);

CREATE POLICY "Public delete access for events"
ON events FOR DELETE
USING (true);

-- RLS policies for committee table
ALTER TABLE committee ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for committee"
ON committee FOR SELECT
USING (true);

CREATE POLICY "Public insert access for committee"
ON committee FOR INSERT
WITH CHECK (true);

CREATE POLICY "Public update access for committee"
ON committee FOR UPDATE
USING (true);

CREATE POLICY "Public delete access for committee"
ON committee FOR DELETE
USING (true);

-- RLS policies for gallery table
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for gallery"
ON gallery FOR SELECT
USING (true);

CREATE POLICY "Public insert access for gallery"
ON gallery FOR INSERT
WITH CHECK (true);

CREATE POLICY "Public delete access for gallery"
ON gallery FOR DELETE
USING (true);

-- RLS policies for about_us table
ALTER TABLE about_us ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for about_us"
ON about_us FOR SELECT
USING (true);

CREATE POLICY "Public update access for about_us"
ON about_us FOR UPDATE
USING (true);

-- RLS policies for contact table
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for contact"
ON contact FOR SELECT
USING (true);

CREATE POLICY "Public update access for contact"
ON contact FOR UPDATE
USING (true);

-- RLS policies for admin_passkey table
ALTER TABLE admin_passkey ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for admin_passkey"
ON admin_passkey FOR SELECT
USING (true);

CREATE POLICY "Public update access for admin_passkey"
ON admin_passkey FOR UPDATE
USING (true);