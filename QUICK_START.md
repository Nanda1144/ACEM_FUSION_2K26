# Fusion26 - Quick Start Guide (Supabase Only)

## ✅ Current Status
Your application is **fully configured** to use Supabase as the backend. No MongoDB or Express server is needed.

## 🗄️ Database Backend: Supabase

### What's Already Set Up
✅ Supabase client configured (`src/db/supabase.ts`)
✅ Complete API layer for all operations (`src/db/api.ts`)
✅ Database schema with 14 tables
✅ Storage buckets for images (events, committee, gallery)
✅ Row Level Security (RLS) policies
✅ Default admin passkey: `acemadmin@fusion`

### Environment Variables
Your `.env` file contains:
```env
VITE_SUPABASE_URL=https://nrgunuzhzlvjkujclrqf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_APP_ID=app-9dfi9jpj51xd
```

## 🚀 How to Run

### Start the Application
```bash
npm run client
```

This starts the Vite development server. The frontend connects directly to Supabase.

### Lint/Check Code
```bash
npm run lint
```

## 📁 Key Files

### Backend Configuration
- `src/db/supabase.ts` - Supabase client
- `src/db/api.ts` - All API functions (860 lines)
- `supabase/migrations/` - Database schema

### Frontend Components
- `src/components/Chatbot.tsx` - Admin authentication via passkey
- `src/components/AdminDashboard.tsx` - Admin panel
- `src/components/admin/` - All admin management components
- `src/pages/HomePage.tsx` - Main landing page

## 🔐 Admin Access

1. Click the chatbot icon (bottom-right corner)
2. Enter passkey: `acemadmin@fusion`
3. Admin dashboard opens

### Change Passkey
1. Open Admin Dashboard
2. Go to "Passkey" tab
3. Enter old passkey, new passkey, and confirm

## 📊 Database Tables

| Table | Purpose |
|-------|---------|
| events | Event information (Technical/Cultural) |
| committee | Committee members |
| gallery | Gallery images |
| about_us | About us content |
| contact | Contact info & social media |
| admin_passkey | Admin authentication |
| theme_settings | Theme customization |
| pages | Dynamic pages |
| page_sections | Page builder sections |
| footer_settings | Footer configuration |
| component_templates | Page builder templates |
| overall_coordinators | Event coordinators |
| sponsor_logos | Sponsor logos |
| event_posters | Event poster images |

## 🖼️ Image Storage

### Storage Buckets
1. `app-9dfi9jpj51xd_events_images`
2. `app-9dfi9jpj51xd_committee_images`
3. `app-9dfi9jpj51xd_gallery_images`

### Upload Images
All admin forms have image upload functionality. Images are automatically uploaded to the appropriate Supabase storage bucket.

## 🔧 API Usage Examples

### Get All Events
```typescript
import { eventsApi } from '@/db/api';
const events = await eventsApi.getAll();
```

### Create Event
```typescript
import { eventsApi } from '@/db/api';
await eventsApi.create({
  name: 'Hackathon',
  type: 'Technical',
  description: 'Coding competition',
  image_url: 'https://...',
  staff_coordinators: [{ name: 'Dr. Smith', contact: '1234567890' }],
  student_coordinators: [{ name: 'John', contact: '9876543210' }],
  registration_link: 'https://forms.google.com/...'
});
```

### Upload Image
```typescript
import { uploadImage } from '@/db/api';
const imageUrl = await uploadImage(file, 'events_images');
```

## 🗑️ Old MongoDB Server

The old MongoDB/Express server has been **disabled** and backed up to:
- `server/index.js.mongodb.backup`

This file is not used and can be safely ignored.

## 📚 Documentation

- **Full Architecture**: See `SUPABASE_ARCHITECTURE.md`
- **Server Info**: See `server/README.md`
- **Supabase Docs**: https://supabase.com/docs

## ✨ Features

### Public Features
- Cinematic hero section with parallax scrolling
- Events section (Technical/Cultural)
- Committee members display
- Gallery with lazy loading
- About Us section
- Contact section with social media links

### Admin Features (via Chatbot)
- Event management (CRUD)
- Committee management (CRUD)
- Gallery management (upload/delete)
- About Us editing
- Contact & social media editing
- Passkey management
- Theme customization
- Page builder
- Header/Footer settings
- Overall coordinators management
- Sponsor logos management

## 🎨 Design

- Dark theme with neon/gradient accents
- Cinematic animations and transitions
- Parallax scrolling effects
- Responsive design (mobile, tablet, desktop)
- Motion-based micro-interactions

## 🔒 Security Notes

**Current Setup**: Public read/write access (for development)

**For Production**:
1. Implement Supabase Auth
2. Restrict RLS policies to authenticated admins
3. Add input validation
4. Implement rate limiting
5. Add error logging

## 🐛 Troubleshooting

### Issue: Can't connect to database
**Solution**: Check `.env` file has correct Supabase credentials

### Issue: Images not uploading
**Solution**: Verify storage buckets exist in Supabase dashboard

### Issue: Admin passkey not working
**Solution**: Check `admin_passkey` table in Supabase has the correct passkey

### Issue: Data not updating
**Solution**: Check browser console for errors, verify RLS policies

## 📞 Support

For issues or questions:
1. Check `SUPABASE_ARCHITECTURE.md` for detailed documentation
2. Review Supabase dashboard for database state
3. Check browser console for errors
4. Review `src/db/api.ts` for API functions

---

**Last Updated**: 2026-02-03
**Backend**: Supabase (PostgreSQL + Storage)
**Frontend**: React + TypeScript + Vite + shadcn/ui
