-- Add display_duration column to popup_settings table
ALTER TABLE popup_settings 
ADD COLUMN IF NOT EXISTS display_duration INTEGER DEFAULT 5000;

-- Update existing records to have default value
UPDATE popup_settings 
SET display_duration = 5000 
WHERE display_duration IS NULL;