# Backend Server - Not Required

This application uses **Supabase** as the backend, which provides:

- **Database**: PostgreSQL with Row Level Security (RLS)
- **Storage**: File storage for images (events, committee, gallery)
- **Real-time**: Real-time subscriptions (if needed)
- **Authentication**: Built-in auth system
- **API**: Direct client-side access via Supabase client

## No Express/MongoDB Server Needed

The frontend communicates directly with Supabase using the client library.

All database operations are handled through:
- `src/db/supabase.ts` - Supabase client configuration
- `src/db/api.ts` - API functions for all CRUD operations

## Database Migration Complete

This application has been fully migrated from MongoDB to Supabase. All data is now stored in Supabase PostgreSQL database.

## Environment Variables

Make sure your `.env` file contains:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_ID=your_app_id
```

## Database Schema

All database tables and policies are defined in:
- `supabase/migrations/` directory

To view or modify the database schema, check the migration files.

## Current Supabase Configuration

The application is connected to:
- **Supabase URL**: https://nrgunuzhzlvjkujclrqf.supabase.co
- **Project**: Fusion26 College Fest

All data (events, committee members, gallery images, etc.) is stored in Supabase.
