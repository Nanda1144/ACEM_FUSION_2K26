-- Add description_format column to events table
ALTER TABLE events 
ADD COLUMN IF NOT EXISTS description_format TEXT DEFAULT 'paragraph' CHECK (description_format IN ('paragraph', 'list'));

-- Update existing events to have paragraph format
UPDATE events SET description_format = 'paragraph' WHERE description_format IS NULL;