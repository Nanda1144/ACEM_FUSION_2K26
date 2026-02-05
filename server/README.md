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

## Old MongoDB Server

The previous MongoDB/Express server has been backed up to:
- `server/index.js.mongodb.backup`

This file is kept for reference only and is not used in the application.

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
