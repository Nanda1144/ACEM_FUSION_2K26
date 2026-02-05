# Supabase Database Setup - Fusion26

## Overview

This application uses **Supabase** as the complete backend solution. All data is stored in Supabase PostgreSQL database, and all file uploads (images) are stored in Supabase Storage.

## Current Configuration

### Database Connection
- **Supabase URL**: `https://nrgunuzhzlvjkujclrqf.supabase.co`
- **Project ID**: `nrgunuzhzlvjkujclrqf`
- **Application ID**: `app-9dfi9jpj51xd`

### Environment Variables
The application uses the following environment variables (configured in `.env`):

```env
VITE_SUPABASE_URL=https://nrgunuzhzlvjkujclrqf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_APP_ID=app-9dfi9jpj51xd
```

## Database Schema

All database tables are defined in the `supabase/migrations/` directory. The following tables are available:

### Core Tables

1. **events** - Stores all event information
   - Event name, type (Technical/Cultural), description
   - Event images, registration links
   - Staff and student coordinators
   - Event posters

2. **committee_members** - Committee member information
   - Member name, role, image
   - Contact information
   - Special roles and event types

3. **overall_coordinators** - Overall event coordinators
   - Coordinator name, contact, role
   - Event type assignment

4. **gallery_images** - Gallery image storage
   - Image URLs, titles, descriptions
   - Upload timestamps

5. **about_us** - About section content
   - Editable text content for the About Us section

6. **contact** - Contact information
   - Contact details and social media links
   - Instagram, LinkedIn, WhatsApp, Email

7. **admin_passkey** - Admin authentication
   - Secure passkey storage for admin access

8. **header_settings** - Header configuration
   - College name, subtitle, tagline
   - Logo URLs (left and right)

9. **theme_settings** - Theme customization
   - Color schemes, typography
   - Layout preferences

10. **pages** - Page management
    - Dynamic page creation and ordering

11. **page_sections** - Page section builder
    - Component-based page sections

12. **footer_settings** - Footer configuration
    - Footer content and links

13. **sponsor_logos** - Sponsor logo management
    - Sponsor images and information

## Data Storage

### All Data is in Supabase

✅ **Events** - Stored in `events` table
✅ **Committee Members** - Stored in `committee_members` table
✅ **Gallery Images** - Stored in `gallery_images` table with files in Supabase Storage
✅ **About Us Content** - Stored in `about_us` table
✅ **Contact Information** - Stored in `contact` table
✅ **Admin Passkey** - Stored in `admin_passkey` table
✅ **Theme Settings** - Stored in `theme_settings` table
✅ **Header Settings** - Stored in `header_settings` table

### No MongoDB or Other Databases

❌ MongoDB has been completely removed
❌ No local database files
❌ No Express server required

## API Structure

All database operations are handled through:

### 1. Supabase Client (`src/db/supabase.ts`)
```typescript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 2. API Functions (`src/db/api.ts`)
All CRUD operations are organized by entity:

- `eventsApi` - Event management
- `committeeApi` - Committee member management
- `galleryApi` - Gallery image management
- `aboutUsApi` - About Us content management
- `contactApi` - Contact information management
- `adminApi` - Admin passkey management
- `headerApi` - Header settings management
- `themeApi` - Theme settings management
- `pagesApi` - Page management
- `footerApi` - Footer settings management
- `sponsorApi` - Sponsor logo management

## File Uploads

All file uploads (images) are handled through Supabase Storage:

### Storage Buckets
- `event-images` - Event images and posters
- `committee-images` - Committee member photos
- `gallery-images` - Gallery images
- `sponsor-logos` - Sponsor logos

### Upload Hook
The application uses a custom hook for file uploads:
```typescript
import { useSupabaseUpload } from '@/hooks/use-supabase-upload';
```

## Migration from MongoDB

This application was previously using MongoDB but has been **fully migrated to Supabase**. 

### What Was Removed:
- ❌ MongoDB dependency from `package.json`
- ❌ Express server (`server/index.js`)
- ❌ MongoDB API backup files
- ❌ All MongoDB-related code

### What Remains:
- ✅ Pure Supabase implementation
- ✅ Direct client-side database access
- ✅ Secure Row Level Security (RLS) policies
- ✅ All data migrated to Supabase

## How to Access Your Data

### Option 1: Supabase Dashboard
1. Go to https://supabase.com/dashboard
2. Select your project: `nrgunuzhzlvjkujclrqf`
3. Navigate to "Table Editor" to view/edit data
4. Navigate to "Storage" to view uploaded files

### Option 2: Through the Application
1. Open the application
2. Click the chatbot icon (bottom-right)
3. Enter admin passkey: `acemadmin@fusion`
4. Access the Admin Dashboard to manage all content

## Verifying Supabase Connection

To verify that your application is connected to Supabase:

1. Check the `.env` file for correct credentials
2. Open browser DevTools → Network tab
3. Look for requests to `nrgunuzhzlvjkujclrqf.supabase.co`
4. All API calls should go to Supabase (no MongoDB or local server)

## Troubleshooting

### If data is not loading:
1. Check `.env` file has correct Supabase credentials
2. Verify Supabase project is active at https://supabase.com/dashboard
3. Check browser console for any error messages
4. Ensure RLS policies are properly configured

### If uploads are failing:
1. Check Supabase Storage buckets exist
2. Verify storage policies allow uploads
3. Check file size limits (default: 50MB)
4. Ensure correct bucket names in code

## Summary

✅ **Single Database**: Only Supabase is used
✅ **No Confusion**: MongoDB completely removed
✅ **All Data Stored**: Everything is in Supabase PostgreSQL
✅ **File Storage**: All images in Supabase Storage
✅ **Direct Access**: No backend server needed
✅ **Secure**: Row Level Security policies in place

Your application is now running 100% on Supabase! 🚀
