# Fusion26 - Supabase Backend Architecture

## Overview
This application uses **Supabase** as the complete backend solution. No separate Express/MongoDB server is required.

## Architecture

### Frontend → Supabase (Direct Connection)
```
React Components
    ↓
src/db/api.ts (API Layer)
    ↓
src/db/supabase.ts (Supabase Client)
    ↓
Supabase Cloud (PostgreSQL + Storage + Auth)
```

## Key Files

### 1. Supabase Configuration
**File**: `src/db/supabase.ts`
```typescript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 2. API Layer
**File**: `src/db/api.ts`

Contains all CRUD operations for:
- **Events** (eventsApi)
- **Committee** (committeeApi)
- **Gallery** (galleryApi)
- **About Us** (aboutUsApi)
- **Contact** (contactApi)
- **Admin Passkey** (passkeyApi)
- **Theme Settings** (themeSettingsApi)
- **Pages** (pagesApi)
- **Page Sections** (pageSectionsApi)
- **Footer Settings** (footerSettingsApi)
- **Component Templates** (componentTemplatesApi)
- **Overall Coordinators** (overallCoordinatorsApi)
- **Sponsor Logos** (sponsorLogosApi)
- **Image Upload** (uploadImage)

### 3. Database Schema
**Location**: `supabase/migrations/`

All database tables, policies, and storage buckets are defined in migration files:
- `00001_create_fusion26_schema.sql` - Core tables (events, committee, gallery, about_us, contact, admin_passkey)
- `00002_add_header_settings.sql` - Header configuration
- `00003_add_pages_and_theme_system.sql` - Theme and pages system
- `00004_add_page_builder_system.sql` - Page builder functionality
- `00005_enhance_events_for_details.sql` - Enhanced event details
- `00006_add_info_to_committee.sql` - Committee enhancements
- `00007_add_special_role_to_committee.sql` - Special roles
- `00008_add_event_posters_and_coordinators_v2.sql` - Event posters and coordinators
- `00009_add_event_type_to_overall_coordinators.sql` - Coordinator event types
- `00010_add_sponsor_logos_table.sql` - Sponsor logos
- `00011_add_event_description_format.sql` - Event description formatting

## Database Tables

### Core Tables
1. **events** - Event information (name, type, description, image, coordinators, registration link)
2. **committee** - Committee members (name, role, image, display order)
3. **gallery** - Gallery images
4. **about_us** - About us content
5. **contact** - Contact information and social media links
6. **admin_passkey** - Admin authentication passkey

### Extended Tables
7. **theme_settings** - Theme customization
8. **pages** - Dynamic pages
9. **page_sections** - Page sections for page builder
10. **footer_settings** - Footer configuration
11. **component_templates** - Component templates for page builder
12. **overall_coordinators** - Overall event coordinators
13. **sponsor_logos** - Sponsor logo management
14. **event_posters** - Event poster images

## Storage Buckets

1. **app-9dfi9jpj51xd_events_images** - Event images
2. **app-9dfi9jpj51xd_committee_images** - Committee member images
3. **app-9dfi9jpj51xd_gallery_images** - Gallery images

All buckets have public read/write access configured via RLS policies.

## Security

### Row Level Security (RLS)
All tables have RLS enabled with public access policies:
- Public read access (SELECT)
- Public write access (INSERT, UPDATE, DELETE)

**Note**: For production, you should implement proper authentication and restrict write access to authenticated admin users only.

### Admin Authentication
Currently uses a simple passkey system:
- Default passkey: `acemadmin@fusion`
- Stored in `admin_passkey` table
- Validated via `passkeyApi.validate(passkey)`

## Environment Variables

Required in `.env` file:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_ID=your_app_id
```

## Usage Examples

### Fetching Events
```typescript
import { eventsApi } from '@/db/api';

// Get all events
const events = await eventsApi.getAll();

// Get events by type
const technicalEvents = await eventsApi.getByType('Technical');

// Get single event
const event = await eventsApi.getById(eventId);
```

### Creating an Event
```typescript
import { eventsApi } from '@/db/api';

const newEvent = await eventsApi.create({
  name: 'Hackathon 2026',
  type: 'Technical',
  description: 'A 24-hour coding competition',
  image_url: 'https://...',
  staff_coordinators: [{ name: 'Dr. Smith', contact: '1234567890' }],
  student_coordinators: [{ name: 'John Doe', contact: '9876543210' }],
  registration_link: 'https://forms.google.com/...'
});
```

### Uploading Images
```typescript
import { uploadImage } from '@/db/api';

const file = event.target.files[0];
const imageUrl = await uploadImage(file, 'events_images');
```

### Validating Admin Passkey
```typescript
import { passkeyApi } from '@/db/api';

const isValid = await passkeyApi.validate(userInput);
if (isValid) {
  // Open admin dashboard
}
```

## Components Using Supabase API

### Admin Components
- `EventManagement.tsx` → eventsApi
- `CommitteeManagement.tsx` → committeeApi
- `GalleryManagement.tsx` → galleryApi
- `AboutManagement.tsx` → aboutUsApi
- `ContactManagement.tsx` → contactApi
- `PasskeyManagement.tsx` → passkeyApi
- `ThemeManagement.tsx` → themeSettingsApi
- `PageManagement.tsx` → pagesApi
- `PageBuilder.tsx` → pageSectionsApi, componentTemplatesApi
- `FooterManagement.tsx` → footerSettingsApi
- `HeaderSettings.tsx` → themeSettingsApi
- `OverallCoordinatorManagement.tsx` → overallCoordinatorsApi
- `SponsorLogoManagement.tsx` → sponsorLogosApi

### Public Components
- `Chatbot.tsx` → passkeyApi (for admin authentication)
- `Events.tsx` → eventsApi
- `Committee.tsx` → committeeApi
- `Gallery.tsx` → galleryApi
- `AboutUs.tsx` → aboutUsApi
- `Contact.tsx` → contactApi

## Migration from MongoDB

The old MongoDB/Express server has been backed up to:
- `server/index.js.mongodb.backup`

This file is kept for reference only and is **not used** in the application.

All MongoDB dependencies in `package.json` can be safely ignored as they are not used by the Supabase implementation.

## Development

### Running the Application
```bash
npm run client
```

### Linting
```bash
npm run lint
```

### Database Migrations
All migrations are automatically applied when the Supabase project is initialized. To view the current database state, use the Supabase dashboard or SQL editor.

## Production Considerations

1. **Implement proper authentication**: Replace the simple passkey system with Supabase Auth
2. **Restrict RLS policies**: Limit write access to authenticated admin users
3. **Add input validation**: Validate all user inputs before database operations
4. **Implement rate limiting**: Protect against abuse
5. **Add error logging**: Track errors for debugging
6. **Optimize images**: Compress images before upload
7. **Add caching**: Cache frequently accessed data
8. **Implement backup strategy**: Regular database backups

## Support

For Supabase documentation, visit: https://supabase.com/docs
