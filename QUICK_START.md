# Fusion26 - Quick Start Guide (MongoDB & Vercel)

## ✅ Current Status
The application is fully migrated to a **MongoDB + Express** architecture. It is ready for both local development and Vercel deployment.

---

## 💻 Local Development

### 1. Prerequisites
- Node.js installed.
- Access to a MongoDB database (Local or Atlas).

### 2. Environment Setup
Create a `.env` file in the root with:
```env
MONGODB_URI=mongodb+srv://your_connection_string
MONGODB_DB_NAME=acem_db
VITE_API_URL=http://localhost:5000/api
```

### 3. Running the App
Run the following command to start both the Vite dev server and the Express backend:
```bash
npm run dev:full
```

---

## ☁️ Vercel Deployment

1. **Vercel Config**: The `vercel.json` and `api/` directory are already configured for serverless deployment.
2. **Environment Variables**: Add `MONGODB_URI` and `MONGODB_DB_NAME` in the Vercel dashboard.
3. **Internal Routing**: The app is configured to use `/api` internal routing, so no external API URL is needed in production.

---

## 🗄️ Database Schema (Collections)

| Collection | Purpose |
| :--- | :--- |
| `admin_passkey` | Admin authentication key (Default: `acemadmin@fusion`) |
| `events` | Fest events (Technical/Cultural) |
| `sponsor_logos` | Animated logos for the homepage |
| `gallery` | Event gallery images |
| `theme_settings` | Dynamic titles, colors, and logos |
| `pages` | Dynamic page content |

---

## 🖼️ File Uploads
Images are handled by `multer`. In local development, they are stored in `public/uploads`. On Vercel, they are stored in `/tmp` (ephemeral). 

*Tip: For persistent production image storage, consider migrating the `uploadImage` function in `src/db/api.ts` to use a cloud provider like Cloudinary.*

---

## 🛠️ API Layer
All frontend communication is centralized in `src/db/api.ts`. It uses `axios` to talk to the new backend endpoints.

**Example**:
```typescript
import { eventsApi } from '@/db/api';
const events = await eventsApi.getAll();
```

---

**Last Updated**: 2026-02-16
**Backend**: MongoDB Atlas
**Deployment**: Vercel
