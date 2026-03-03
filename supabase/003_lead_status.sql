-- Add status column to leads
ALTER TABLE leads ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'nove';
COMMENT ON COLUMN leads.status IS 'Lead status: nove, v_reseni, podpis_smlouvy, dokonceno, zruseno';
