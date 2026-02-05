# Fusion26 Architecture Overview

## System Architecture (Supabase Only)

```
┌─────────────────────────────────────────────────────────────┐
│                     FUSION26 WEB APP                        │
│                  (React + TypeScript)                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Direct API Calls
                            │ (No Backend Server)
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    SUPABASE BACKEND                         │
│  https://nrgunuzhzlvjkujclrqf.supabase.co                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────┐  ┌──────────────────┐               │
│  │   PostgreSQL DB  │  │  Storage Buckets │               │
│  ├──────────────────┤  ├──────────────────┤               │
│  │ • events         │  │ • event-images   │               │
│  │ • committee      │  │ • committee-imgs │               │
│  │ • coordinators   │  │ • gallery-images │               │
│  │ • gallery        │  │ • sponsor-logos  │               │
│  │ • about_us       │  └──────────────────┘               │
│  │ • contact        │                                      │
│  │ • admin_passkey  │  ┌──────────────────┐               │
│  │ • header_settings│  │   Row Level      │               │
│  │ • theme_settings │  │   Security (RLS) │               │
│  │ • pages          │  │   Policies       │               │
│  │ • page_sections  │  └──────────────────┘               │
│  │ • footer         │                                      │
│  │ • sponsors       │                                      │
│  └──────────────────┘                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. User Views Website
```
User Browser
    ↓
React Components (HomePage, Events, Committee, Gallery)
    ↓
API Functions (src/db/api.ts)
    ↓
Supabase Client (src/db/supabase.ts)
    ↓
Supabase Database
    ↓
Data Returned to UI
```

### 2. Admin Manages Content
```
Admin clicks Chatbot
    ↓
Enters Passkey
    ↓
Validates against admin_passkey table
    ↓
Opens Admin Dashboard
    ↓
Admin makes changes (Add/Edit/Delete)
    ↓
API Functions (src/db/api.ts)
    ↓
Supabase Database Updated
    ↓
UI Refreshes Automatically
```

### 3. File Upload Flow
```
Admin selects image
    ↓
useSupabaseUpload hook
    ↓
Validates file (size, type)
    ↓
Uploads to Supabase Storage
    ↓
Returns public URL
    ↓
URL saved in database table
    ↓
Image displays on website
```

## Component Structure

```
src/
├── components/
│   ├── AdminDashboard.tsx          # Main admin interface
│   ├── Events.tsx                  # Events display
│   ├── Committee.tsx               # Committee members
│   ├── Gallery.tsx                 # Image gallery
│   ├── Chatbot.tsx                 # Admin authentication
│   ├── FlexibleHeader.tsx          # Dynamic header
│   ├── EnhancedFooter.tsx          # Dynamic footer
│   └── admin/
│       ├── EventManagement.tsx     # Event CRUD
│       ├── CommitteeManagement.tsx # Committee CRUD
│       ├── GalleryManagement.tsx   # Gallery CRUD
│       ├── ThemeManagement.tsx     # Theme settings
│       └── ...
├── db/
│   ├── supabase.ts                 # Supabase client
│   └── api.ts                      # All API functions
├── hooks/
│   └── use-supabase-upload.ts      # File upload hook
└── pages/
    ├── HomePage.tsx                # Main landing page
    └── EventDetailPage.tsx         # Event details
```

## API Organization (src/db/api.ts)

```typescript
// All APIs use Supabase client

eventsApi {
  getAll()           // Fetch all events
  getById(id)        // Fetch single event
  getByType(type)    // Fetch by Technical/Cultural
  create(data)       // Add new event
  update(id, data)   // Update event
  delete(id)         // Delete event
}

committeeApi {
  getAll()           // Fetch all members
  create(data)       // Add member
  update(id, data)   // Update member
  delete(id)         // Delete member
}

galleryApi {
  getAll()           // Fetch all images
  create(data)       // Add image
  delete(id)         // Delete image
}

// ... and more for other entities
```

## Database Tables

### Core Content Tables
- **events**: Event information and coordinators
- **committee_members**: Committee member profiles
- **overall_coordinators**: Event coordinators
- **gallery_images**: Gallery image URLs

### Configuration Tables
- **about_us**: About section content
- **contact**: Contact info and social links
- **admin_passkey**: Admin authentication
- **header_settings**: Header configuration
- **theme_settings**: Theme colors and styles
- **footer_settings**: Footer content

### Dynamic Content Tables
- **pages**: Custom page definitions
- **page_sections**: Page section components
- **sponsor_logos**: Sponsor images

## Storage Buckets

```
Supabase Storage
├── event-images/
│   ├── event-1.jpg
│   ├── event-2.jpg
│   └── poster-1.jpg
├── committee-images/
│   ├── member-1.jpg
│   └── member-2.jpg
├── gallery-images/
│   ├── gallery-1.jpg
│   └── gallery-2.jpg
└── sponsor-logos/
    ├── sponsor-1.png
    └── sponsor-2.png
```

## Security Model

### Row Level Security (RLS)
```
Public Access (anon role):
  ✅ SELECT on all tables (read-only)
  ❌ INSERT, UPDATE, DELETE (blocked)

Admin Access (authenticated):
  ✅ Full CRUD on all tables
  ✅ File upload/delete
  ✅ Schema modifications
```

### Authentication Flow
```
1. User enters passkey in chatbot
2. Query admin_passkey table
3. Compare entered passkey with stored passkey
4. If match → Grant admin access
5. If no match → Show error
```

## Environment Configuration

```env
# Supabase Connection
VITE_SUPABASE_URL=https://nrgunuzhzlvjkujclrqf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Application ID
VITE_APP_ID=app-9dfi9jpj51xd
```

## Key Features

### ✅ No Backend Server Required
- Direct client-to-Supabase communication
- No Express.js or Node.js server
- Reduced complexity and hosting costs

### ✅ Real-time Capabilities
- Supabase provides real-time subscriptions
- Can listen to database changes
- Instant UI updates possible

### ✅ Secure File Storage
- Files stored in Supabase Storage
- Public URLs for images
- Automatic CDN distribution

### ✅ Scalable Architecture
- PostgreSQL database (production-ready)
- Automatic backups
- High availability

## Deployment

```
Build Process:
  npm run build
    ↓
  Static files generated
    ↓
  Deploy to hosting (Vercel, Netlify, etc.)
    ↓
  Set environment variables
    ↓
  Application connects to Supabase
    ↓
  Ready to use!
```

## Monitoring

### Supabase Dashboard
- View real-time database activity
- Monitor API usage
- Check storage usage
- View logs and errors

### Application Logs
- Browser console for client-side errors
- Supabase logs for database queries
- Network tab for API calls

## Summary

```
┌─────────────────────────────────────┐
│   SINGLE DATABASE ARCHITECTURE      │
├─────────────────────────────────────┤
│                                     │
│  Frontend: React + TypeScript       │
│  Backend: Supabase (PostgreSQL)     │
│  Storage: Supabase Storage          │
│  Auth: Custom Passkey System        │
│                                     │
│  ✅ No MongoDB                      │
│  ✅ No Express Server               │
│  ✅ No Confusion                    │
│  ✅ Clean & Simple                  │
│                                     │
└─────────────────────────────────────┘
```

---

**Architecture**: Modern JAMstack
**Database**: Supabase PostgreSQL
**Status**: Production Ready
**Complexity**: Low (Single Backend)
