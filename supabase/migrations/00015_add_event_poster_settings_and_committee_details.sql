-- Add scroll_duration to event_posters table for admin control
ALTER TABLE event_posters 
ADD COLUMN IF NOT EXISTS scroll_duration INTEGER DEFAULT 30000;

-- Add staff and student details to committees table
ALTER TABLE committees
ADD COLUMN IF NOT EXISTS role TEXT,
ADD COLUMN IF NOT EXISTS staff_details JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS student_details JSONB DEFAULT '[]'::jsonb;

-- Update existing records
UPDATE event_posters SET scroll_duration = 30000 WHERE scroll_duration IS NULL;

COMMENT ON COLUMN committees.staff_details IS 'Array of staff objects with name, contact, role fields';
COMMENT ON COLUMN committees.student_details IS 'Array of student objects with name, contact, role fields';