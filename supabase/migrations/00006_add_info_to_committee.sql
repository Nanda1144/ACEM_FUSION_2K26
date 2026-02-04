-- Add info column to committee table
ALTER TABLE committee 
ADD COLUMN IF NOT EXISTS info TEXT;