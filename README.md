# Fusion26 - College Fest Web Application

A cinematic, immersive web application for ACEM's college fest, featuring an integrated admin dashboard for dynamic content management.

## 🚀 Modern Evolution: MongoDB & Vercel
This application has been migrated from Supabase to a custom **Node.js/Express** backend using **MongoDB Atlas**, optimized for deployment on **Vercel**.

**Status**: ✅ Migration Complete | **Database**: MongoDB Atlas | **Deployment**: Vercel Serverless

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Configure Environment
# Copy .env.example to .env.local and fill in your MongoDB URI

# 3. Start Frontend & Backend together
npm run dev:full
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api
- **Database Health**: http://localhost:5000/api/health

---

## 🔑 Admin Access

1. Click the **Chatbot Icon** (bottom-right of the homepage)
2. Enter the admin passkey: `acemadmin@fusion`
3. The Admin Dashboard will open, allowing you to manage events, gallery, committees, and themes.

---

## 🛠️ Project Structure

- `api/`: Backend logic designed for Vercel Serverless Functions.
  - `index.js`: Main Express entry point with Generic CRUD Factory.
  - `mongodb.js`: MongoDB connection and auto-initialization.
- `src/`: Frontend React application.
  - `db/api.ts`: API client layer communicating with the Express backend.
  - `components/`: UI components including the new dynamic sponsor carousel.
- `public/uploads/`: Local storage for images (Note: Vercel uses /tmp for temporary uploads).

---

## 🎨 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion.
- **Backend**: Express, MongoDB (via `mongodb` driver), Multer (image handling).
- **Deployment**: Vercel (Configured via `vercel.json`).

---

## 📦 Deployment to Vercel

1. Push your code to GitHub.
2. Link the repository to your Vercel project.
3. Configure the following **Environment Variables** in Vercel:
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
   - `MONGODB_DB_NAME`: `acem_db`
4. Deploy! Vercel will build the frontend and serve the `api/` folder as serverless routes.

---

**Last Updated**: 2026-02-16
**Status**: Production Ready 🚀
