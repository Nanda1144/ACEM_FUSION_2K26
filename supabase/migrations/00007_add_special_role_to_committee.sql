-- Add special_role column to committee table
ALTER TABLE committee 
ADD COLUMN IF NOT EXISTS special_role TEXT CHECK (special_role IN ('Chief Patron', 'Patron', 'Convener', 'Co-Convener'));