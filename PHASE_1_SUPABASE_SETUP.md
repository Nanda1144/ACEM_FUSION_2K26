# 🚀 PATH A: SUPABASE MIGRATION - IN PROGRESS

## ✅ Your Choice: Supabase (Recommended)

Great decision! This will give you:
- ✅ Simpler architecture (no backend server)
- ✅ Easier deployment (one service instead of two)
- ✅ Better features (built-in auth, storage, real-time)
- ✅ Lower maintenance
- ✅ Faster development

---

## 📋 PHASE 1: SUPABASE SETUP (You Do This - 15 minutes)

### Step 1: Create Supabase Account (2 minutes)

1. **Go to Supabase website:**
   ```
   https://supabase.com
   ```

2. **Click "Start your project"** (top right)

3. **Sign up with GitHub** (recommended) or email
   - If GitHub: Click "Continue with GitHub"
   - Authorize Supabase to access your GitHub account
   - If Email: Enter email and create password

4. **Verify your email** (check inbox)

5. **You'll see the Supabase dashboard**

✅ **Checkpoint:** You should now be logged into Supabase dashboard

---

### Step 2: Create New Project (3 minutes)

1. **Click "New Project"** (green button)

2. **Fill in project details:**
   ```
   Organization: [Your organization or create new]
   Project Name: fusion26
   Database Password: [Create a STRONG password]
   Region: [Choose closest to you - e.g., "Southeast Asia (Singapore)"]
   Pricing Plan: Free
   ```

   **IMPORTANT:** 
   - **SAVE YOUR DATABASE PASSWORD!** Write it down somewhere safe!
   - You'll need this password later
   - Can't recover it if you lose it

3. **Click "Create new project"**

4. **Wait 2-3 minutes** for project setup
   - You'll see a progress indicator
   - Don't close the page
   - Project will be ready when you see the dashboard

✅ **Checkpoint:** Project created, dashboard visible

---

### Step 3: Get Project Credentials (2 minutes)

1. **Click the "Settings" icon** (gear icon, bottom left)

2. **Click "API"** in the left sidebar

3. **You'll see two important values:**

   **Project URL:**
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```
   
   **anon public key:**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHh4eHh4eHh4eHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4ODg4ODgsImV4cCI6MTk5NDQ2NDg4OH0.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
   (This is a long string starting with "eyJ...")

4. **Copy both values** and save them in a text file temporarily
   - You'll need these in a moment

✅ **Checkpoint:** You have Project URL and anon key saved

---

### Step 4: Create Database Tables (5 minutes)

1. **Click "SQL Editor"** in the left sidebar

2. **Click "New query"** button

3. **Copy and paste this ENTIRE SQL script:**

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Events table
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Technical', 'Cultural')),
  description TEXT,
  image_url TEXT,
  staff_coordinators JSONB DEFAULT '[]',
  student_coordinators JSONB DEFAULT '[]',
  registration_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Committee table
CREATE TABLE committee (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gallery table
CREATE TABLE gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  image_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- About Us table
CREATE TABLE about_us (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact table
CREATE TABLE contact (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  instagram TEXT,
  linkedin TEXT,
  whatsapp TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin Passkey table
CREATE TABLE admin_passkey (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  passkey TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Theme Settings table
CREATE TABLE theme_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  header_title TEXT DEFAULT 'ACEM',
  primary_color TEXT DEFAULT '#00D9FF',
  background_color TEXT DEFAULT '#0A0F1E',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default data
INSERT INTO admin_passkey (passkey) VALUES ('acemadmin@fusion');
INSERT INTO about_us (content) VALUES ('Welcome to Fusion26! ACEM''s annual college fest - a spectacular celebration of talent, creativity, and innovation. Join us for an unforgettable experience filled with competitions, performances, workshops, and fun activities.');
INSERT INTO contact (instagram, linkedin, whatsapp, email) VALUES 
  ('https://instagram.com/fusion26', 'https://linkedin.com/company/fusion26', 'https://wa.me/1234567890', 'contact@fusion26.com');
INSERT INTO theme_settings DEFAULT VALUES;

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE committee ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_us ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_passkey ENABLE ROW LEVEL SECURITY;
ALTER TABLE theme_settings ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all operations for now - we handle auth in frontend)
CREATE POLICY "Allow all for events" ON events FOR ALL USING (true);
CREATE POLICY "Allow all for committee" ON committee FOR ALL USING (true);
CREATE POLICY "Allow all for gallery" ON gallery FOR ALL USING (true);
CREATE POLICY "Allow all for about_us" ON about_us FOR ALL USING (true);
CREATE POLICY "Allow all for contact" ON contact FOR ALL USING (true);
CREATE POLICY "Allow all for admin_passkey" ON admin_passkey FOR ALL USING (true);
CREATE POLICY "Allow all for theme_settings" ON theme_settings FOR ALL USING (true);
```

4. **Click "Run"** button (bottom right)

5. **You should see:**
   ```
   Success. No rows returned
   ```

6. **Verify tables were created:**
   - Click "Table Editor" in left sidebar
   - You should see 7 tables: events, committee, gallery, about_us, contact, admin_passkey, theme_settings

✅ **Checkpoint:** All tables created successfully

---

### Step 5: Setup Storage for Images (3 minutes)

1. **Click "Storage"** in the left sidebar

2. **Click "Create a new bucket"**

3. **Fill in details:**
   ```
   Name: images
   Public bucket: ✅ YES (check this box)
   ```

4. **Click "Create bucket"**

5. **Setup bucket policy:**
   - Click on the "images" bucket you just created
   - Click "Policies" tab at the top
   - Click "New Policy" button
   - Click "For full customization"
   - Fill in:
     ```
     Policy name: Public Access
     Policy definition: SELECT, INSERT, UPDATE, DELETE
     ```
   - In the SQL editor that appears, paste:
     ```sql
     CREATE POLICY "Public Access"
     ON storage.objects FOR ALL
     TO public
     USING (bucket_id = 'images');
     ```
   - Click "Review"
   - Click "Save policy"

✅ **Checkpoint:** Storage bucket created and configured

---

## 🎉 PHASE 1 COMPLETE!

You now have:
- ✅ Supabase account
- ✅ Project created
- ✅ Database tables created
- ✅ Storage bucket configured
- ✅ Project credentials ready

---

## 📝 WHAT TO DO NEXT

**Please provide me with your Supabase credentials:**

1. **Project URL**: `https://xxxxx.supabase.co`
2. **Anon Key**: `eyJhbGc...` (the long string)

**Reply with:**
```
Project URL: [paste your URL here]
Anon Key: [paste your anon key here]
```

**Once you provide these, I will:**
1. Install Supabase client library
2. Remove Express backend (server/ directory)
3. Update all API calls to use Supabase
4. Update environment configuration
5. Test everything locally
6. Prepare for deployment

---

## ⏱️ Time Spent So Far

- ✅ Phase 1: Supabase Setup - **15 minutes**
- ⏳ Phase 2: Code Conversion - **30 minutes** (I'll do this)
- ⏳ Phase 3: Local Testing - **15 minutes**
- ⏳ Phase 4: Deployment - **5 minutes**

**Total remaining: ~50 minutes to live website!**

---

## 🆘 Need Help?

### Can't find Project URL or Anon Key?
1. Go to Supabase dashboard
2. Click Settings (gear icon)
3. Click "API"
4. Copy "Project URL" and "anon public" key

### SQL Script Failed?
- Make sure you copied the ENTIRE script
- Click "Run" button
- If error, share the error message with me

### Storage Bucket Issues?
- Make sure "Public bucket" is checked
- Policy should allow all operations
- Bucket name must be exactly "images"

---

**Ready! Please share your Supabase credentials and I'll start the conversion!** 🚀
