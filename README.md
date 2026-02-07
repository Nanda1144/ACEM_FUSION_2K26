# Welcome to Your Miaoda Project
Miaoda Application Link URL
    URL:https://medo.dev/projects/app-9dfi9jpj51xd

# Fusion26 - College Fest Web Application

A cinematic, immersive web application for ACEM's college fest with admin dashboard for content management.

## 🚀 Database: Supabase Only

This application uses **ONLY Supabase** as the database. MongoDB has been completely removed.

**Status**: ✅ Migration Complete | **Database**: Supabase PostgreSQL | **Storage**: Supabase Storage

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run client
```

Open browser: **http://localhost:5173**

## Admin Access

1. Click chatbot icon (bottom-right)
2. Enter passkey: `acemadmin@fusion`
3. Access admin dashboard

## Features

- **Public Interface**: Events, Committee, Gallery, About, Contact
- **Admin Dashboard**: Manage all content via chatbot authentication
- **Responsive Design**: Works on all devices
- **Cinematic UI**: Dark theme with smooth animations
- **Supabase Backend**: PostgreSQL database + file storage

## Tech Stack

- React + TypeScript
- Tailwind CSS + shadcn/ui
- **Supabase** (Database + Storage)
- Vite (Build tool)

## Header Colors

- **ACEM FUSION 2K26**: Cyan (#00D9FF)
- **ADITYA COLLEGE OF ENGINEERING**: Gold (#D4AF37)
- **Madanapalle**: White (#FFFFFF)
- **UGC Autonomous**: White (#FFFFFF)

## Project Structure

```
src/
├── components/     # UI components
├── pages/          # Page components
├── db/             # Supabase API
│   ├── supabase.ts # Supabase client
│   └── api.ts      # All API functions
├── types/          # TypeScript types
└── lib/            # Utilities
```

## Database Documentation

📚 **Comprehensive Documentation Available**:

- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Complete Supabase setup guide
- **[DATABASE_STATUS.md](./DATABASE_STATUS.md)** - Quick reference for database status
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture overview
- **[MIGRATION_COMPLETE.md](./MIGRATION_COMPLETE.md)** - Migration details
- **[CHECKLIST.md](./CHECKLIST.md)** - Verification checklist

## Development

```bash
# Run linter
npm run lint

# Build for production
npm run build
```

## Environment Variables

Required in `.env` file:

```env
VITE_SUPABASE_URL=https://nrgunuzhzlvjkujclrqf.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_ID=app-9dfi9jpj51xd
```

## Supabase Dashboard

Access your data at: https://supabase.com/dashboard
Project ID: `nrgunuzhzlvjkujclrqf`

## Support

- **Project Progress**: Check TODO.md
- **Database Setup**: Check SUPABASE_SETUP.md
- **Architecture**: Check ARCHITECTURE.md
- **Quick Reference**: Check DATABASE_STATUS.md

---

**Database**: Supabase Only ✅ | **Status**: Production Ready 🚀
