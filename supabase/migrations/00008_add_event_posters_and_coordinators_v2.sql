-- Create event_posters table for auto-scrolling carousel
CREATE TABLE IF NOT EXISTS event_posters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create overall_coordinators table for homepage display
CREATE TABLE IF NOT EXISTS overall_coordinators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('staff', 'student')),
  name TEXT NOT NULL,
  position TEXT,
  contact TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  show_photo BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add photo fields to events table for coordinator photos
ALTER TABLE events 
ADD COLUMN IF NOT EXISTS description_html TEXT,
ADD COLUMN IF NOT EXISTS staff_coordinator_photos JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS student_coordinator_photos JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS show_coordinator_photos BOOLEAN DEFAULT false;

-- Rename committee_members to committees_old if it exists
DO $$ 
BEGIN
  IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'committee_members') THEN
    ALTER TABLE committee_members RENAME TO committees_old;
  END IF;
END $$;

-- Create new committees table for groups
CREATE TABLE IF NOT EXISTS committees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create committee_coordinators table
CREATE TABLE IF NOT EXISTS committee_coordinators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  committee_id UUID REFERENCES committees(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  position TEXT,
  contact TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE event_posters ENABLE ROW LEVEL SECURITY;
ALTER TABLE overall_coordinators ENABLE ROW LEVEL SECURITY;
ALTER TABLE committees ENABLE ROW LEVEL SECURITY;
ALTER TABLE committee_coordinators ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to event_posters"
  ON event_posters FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to overall_coordinators"
  ON overall_coordinators FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to committees"
  ON committees FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to committee_coordinators"
  ON committee_coordinators FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for authenticated users (admin) full access
CREATE POLICY "Allow authenticated full access to event_posters"
  ON event_posters FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to overall_coordinators"
  ON overall_coordinators FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to committees"
  ON committees FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to committee_coordinators"
  ON committee_coordinators FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_event_posters_order ON event_posters(display_order);
CREATE INDEX IF NOT EXISTS idx_overall_coordinators_type ON overall_coordinators(type, display_order);
CREATE INDEX IF NOT EXISTS idx_committees_order ON committees(display_order);
CREATE INDEX IF NOT EXISTS idx_committee_coordinators_committee ON committee_coordinators(committee_id, display_order);