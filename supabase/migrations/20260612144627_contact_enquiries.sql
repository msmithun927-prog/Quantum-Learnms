-- Create contact_enquiries table
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  institution TEXT,
  inquiry_type TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

-- Enable RLS
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for contact form
CREATE POLICY "Allow anonymous contact inserts" ON contact_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read enquiries
CREATE POLICY "Allow authenticated read enquiries" ON contact_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS contact_enquiries_created_at_idx ON contact_enquiries(created_at DESC);