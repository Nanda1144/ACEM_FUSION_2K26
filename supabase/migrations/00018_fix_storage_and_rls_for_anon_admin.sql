-- Create missing storage bucket for background images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('app-9dfi9jpj51xd_background_images', 'app-9dfi9jpj51xd_background_images', true)
ON CONFLICT (id) DO NOTHING;

-- Fix Storage Policies to allow public (anonymous) management for all custom buckets
-- This is necessary because the admin dashboard uses a passkey system rather than Supabase Auth

-- 1. background_images bucket policies
CREATE POLICY "Public read access for background images"
ON storage.objects FOR SELECT
USING (bucket_id = 'app-9dfi9jpj51xd_background_images');

CREATE POLICY "Public upload access for background images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_background_images');

CREATE POLICY "Public update access for background images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_background_images');

CREATE POLICY "Public delete access for background images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_background_images');

-- 2. Fix theme_images bucket policies (from 00012)
DROP POLICY IF EXISTS "Authenticated users can upload theme images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update theme images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete theme images" ON storage.objects;

CREATE POLICY "Public upload access for theme images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_theme_images');

CREATE POLICY "Public update access for theme images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_theme_images');

CREATE POLICY "Public delete access for theme images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_theme_images');

-- 3. Fix coordinator_images bucket policies (from 00012)
DROP POLICY IF EXISTS "Authenticated users can upload coordinator images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update coordinator images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete coordinator images" ON storage.objects;

CREATE POLICY "Public upload access for coordinator images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_coordinator_images');

CREATE POLICY "Public update access for coordinator images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_coordinator_images');

CREATE POLICY "Public delete access for coordinator images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_coordinator_images');

-- 4. Fix poster_images bucket policies (from 00012)
DROP POLICY IF EXISTS "Authenticated users can upload poster images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update poster images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete poster images" ON storage.objects;

CREATE POLICY "Public upload access for poster images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_poster_images');

CREATE POLICY "Public update access for poster images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_poster_images');

CREATE POLICY "Public delete access for poster images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_poster_images');

-- 5. Fix table RLS policies that were restricted to 'authenticated'
-- background_images table
DROP POLICY IF EXISTS "Service role can manage background images" ON background_images;
CREATE POLICY "Anyone can manage background images"
  ON background_images FOR ALL
  USING (true)
  WITH CHECK (true);

-- popup_image table
DROP POLICY IF EXISTS "Authenticated users can manage popup" ON popup_image;
CREATE POLICY "Anyone can manage popup"
  ON popup_image FOR ALL
  USING (true)
  WITH CHECK (true);

-- event_posters table
DROP POLICY IF EXISTS "Allow authenticated full access to event_posters" ON event_posters;
CREATE POLICY "Anyone can manage event_posters"
  ON event_posters FOR ALL
  USING (true)
  WITH CHECK (true);

-- overall_coordinators table
DROP POLICY IF EXISTS "Allow authenticated full access to overall_coordinators" ON overall_coordinators;
CREATE POLICY "Anyone can manage overall_coordinators"
  ON overall_coordinators FOR ALL
  USING (true)
  WITH CHECK (true);

-- committees table
DROP POLICY IF EXISTS "Allow authenticated full access to committees" ON committees;
CREATE POLICY "Anyone can manage committees"
  ON committees FOR ALL
  USING (true)
  WITH CHECK (true);

-- committee_coordinators table
DROP POLICY IF EXISTS "Allow authenticated full access to committee_coordinators" ON committee_coordinators;
CREATE POLICY "Anyone can manage committee_coordinators"
  ON committee_coordinators FOR ALL
  USING (true)
  WITH CHECK (true);
