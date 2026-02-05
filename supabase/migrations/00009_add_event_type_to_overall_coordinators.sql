
-- Add event_type column to overall_coordinators table
ALTER TABLE overall_coordinators 
ADD COLUMN IF NOT EXISTS event_type TEXT CHECK (event_type IN ('Technical', 'Cultural', 'Both'));

-- Set default value for existing records
UPDATE overall_coordinators 
SET event_type = 'Both' 
WHERE event_type IS NULL;

-- Create index for faster filtering
CREATE INDEX IF NOT EXISTS idx_overall_coordinators_event_type 
ON overall_coordinators(event_type);

-- Create index for type and event_type combination
CREATE INDEX IF NOT EXISTS idx_overall_coordinators_type_event_type 
ON overall_coordinators(type, event_type);
