-- Create storage buckets for coordinator images, theme images, and poster images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('app-9dfi9jpj51xd_coordinator_images', 'app-9dfi9jpj51xd_coordinator_images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('app-9dfi9jpj51xd_theme_images', 'app-9dfi9jpj51xd_theme_images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('app-9dfi9jpj51xd_poster_images', 'app-9dfi9jpj51xd_poster_images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for coordinator_images bucket
CREATE POLICY "Public read access for coordinator images"
ON storage.objects FOR SELECT
USING (bucket_id = 'app-9dfi9jpj51xd_coordinator_images');

CREATE POLICY "Authenticated users can upload coordinator images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_coordinator_images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update coordinator images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_coordinator_images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete coordinator images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_coordinator_images' AND auth.role() = 'authenticated');

-- Storage policies for theme_images bucket
CREATE POLICY "Public read access for theme images"
ON storage.objects FOR SELECT
USING (bucket_id = 'app-9dfi9jpj51xd_theme_images');

CREATE POLICY "Authenticated users can upload theme images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_theme_images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update theme images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_theme_images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete theme images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_theme_images' AND auth.role() = 'authenticated');

-- Storage policies for poster_images bucket
CREATE POLICY "Public read access for poster images"
ON storage.objects FOR SELECT
USING (bucket_id = 'app-9dfi9jpj51xd_poster_images');

CREATE POLICY "Authenticated users can upload poster images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'app-9dfi9jpj51xd_poster_images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update poster images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'app-9dfi9jpj51xd_poster_images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete poster images"
ON storage.objects FOR DELETE
USING (bucket_id = 'app-9dfi9jpj51xd_poster_images' AND auth.role() = 'authenticated');