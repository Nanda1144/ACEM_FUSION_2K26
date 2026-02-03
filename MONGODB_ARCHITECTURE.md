# 🚀 MongoDB Atlas Setup - Updated Architecture

## Architecture Overview

The application now uses a **client-server architecture**:

```
┌─────────────────┐         HTTP/REST API        ┌─────────────────┐
│                 │ ◄──────────────────────────► │                 │
│  React Frontend │                              │  Express Server │
│  (Port 5173)    │                              │  (Port 5000)    │
│                 │                              │                 │
└─────────────────┘                              └────────┬────────┘
                                                          │
                                                          │ MongoDB Driver
                                                          │
                                                          ▼
                                                  ┌─────────────────┐
                                                  │                 │
                                                  │  MongoDB Atlas  │
                                                  │   (Cloud DB)    │
                                                  │                 │
                                                  └─────────────────┘
```

**Why this architecture?**
- MongoDB driver requires Node.js (cannot run in browser)
- Backend server handles all database operations
- Frontend makes HTTP requests to backend API
- Secure and scalable architecture

## Quick Setup (5 Minutes)

### Step 1: MongoDB Atlas Setup (3 minutes)
Follow the same steps as before:
1. Create MongoDB Atlas account
2. Create M0 FREE cluster
3. Create database user: `acem_admin`
4. Whitelist IP: `0.0.0.0/0`
5. Get connection string

### Step 2: Configure Environment (1 minute)
Create `.env` file in project root:

```bash
cp .env.example .env
```

Edit `.env` file:
```env
# MongoDB Connection (used by backend server)
MONGODB_URI=mongodb+srv://acem_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
MONGODB_DB_NAME=acem_db

# Frontend also needs these (for display purposes)
VITE_MONGODB_URI=mongodb+srv://acem_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
VITE_MONGODB_DB_NAME=acem_db

# API Configuration
VITE_API_URL=http://localhost:5000/api
PORT=5000
```

**Important:** Replace `YOUR_PASSWORD` and `cluster0.xxxxx.mongodb.net` with your actual values!

### Step 3: Start Application (1 minute)

**Option A: Start both servers together (Recommended)**
```bash
npm run dev:full
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend on `http://localhost:5173`

**Option B: Start servers separately**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run client
```

### Step 4: Verify Setup

1. **Check Backend:**
   - Open: http://localhost:5000/api/health
   - Should see: `{"status":"ok","message":"Server is running"}`

2. **Check Frontend:**
   - Open: http://localhost:5173
   - Application should load normally

3. **Check Console:**
   Backend terminal should show:
   ```
   ✅ Connected to MongoDB Atlas
   ✅ Database indexes created
   ✅ Default admin passkey created
   ✅ Default theme settings created
   ✅ Database initialized successfully
   🚀 Server running on http://localhost:5000
   📊 API available at http://localhost:5000/api
   ```

## API Endpoints

### Events
- `GET /api/events` - Get all events
- `GET /api/events?type=Technical` - Get events by type
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Committee
- `GET /api/committee` - Get all members
- `POST /api/committee` - Create member
- `PUT /api/committee/:id` - Update member
- `DELETE /api/committee/:id` - Delete member

### Gallery
- `GET /api/gallery` - Get all images
- `POST /api/gallery` - Create image
- `DELETE /api/gallery/:id` - Delete image

### About Us
- `GET /api/about` - Get content
- `PUT /api/about/:id` - Update content

### Contact
- `GET /api/contact` - Get contact info
- `PUT /api/contact/:id` - Update contact

### Admin
- `POST /api/passkey/verify` - Verify passkey
- `GET /api/passkey` - Get passkey data
- `PUT /api/passkey/:id` - Update passkey

### Theme
- `GET /api/theme` - Get theme settings
- `PUT /api/theme/:id` - Update theme

### Pages
- `GET /api/pages` - Get all pages
- `GET /api/pages?published=true` - Get published pages
- `GET /api/pages/slug/:slug` - Get page by slug
- `POST /api/pages` - Create page
- `PUT /api/pages/:id` - Update page
- `DELETE /api/pages/:id` - Delete page

### Images
- `POST /api/images/upload` - Upload image
- `GET /api/images/:id` - Get image

## How It Works

### Data Flow Example: Adding an Event

1. **Admin fills form** in frontend
2. **Frontend sends POST request** to `http://localhost:5000/api/events`
3. **Backend receives request**, validates data
4. **Backend saves to MongoDB Atlas**
5. **Backend returns saved event** to frontend
6. **Frontend updates UI** with new event

### Code Example

**Frontend (React):**
```typescript
import { eventsApi } from '@/db/api';

// Create event
const newEvent = await eventsApi.create({
  name: 'Tech Talk',
  type: 'Technical',
  description: 'Amazing tech talk',
  // ... other fields
});

// Event is automatically saved to MongoDB
// UI updates automatically
```

**Backend (Express):**
```javascript
// server/index.js handles the request
app.post('/api/events', async (req, res) => {
  const result = await db.collection('events').insertOne(req.body);
  res.json(result);
});
```

## Troubleshooting

### Backend Won't Start

**Error:** "MongoDB connection error"

**Solution:**
1. Check `.env` file exists
2. Verify `MONGODB_URI` is correct
3. Ensure password doesn't have special characters (or URL encode them)
4. Check network access in MongoDB Atlas (0.0.0.0/0)
5. Verify cluster is running (green status)

### Frontend Can't Connect to Backend

**Error:** "Failed to fetch" or "Network error"

**Solution:**
1. Ensure backend is running (`npm run server`)
2. Check backend is on port 5000
3. Verify `VITE_API_URL=http://localhost:5000/api` in `.env`
4. Check browser console for CORS errors
5. Restart both servers

### Port Already in Use

**Error:** "Port 5000 is already in use"

**Solution:**
```bash
# Option 1: Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Option 2: Use different port
# Edit .env:
PORT=5001
VITE_API_URL=http://localhost:5001/api
```

### Data Not Updating

**Problem:** Changes not appearing

**Solution:**
1. Check backend console for errors
2. Check browser console for API errors
3. Verify MongoDB Atlas connection
4. Check network tab in browser DevTools
5. Restart both servers

## Development Workflow

### Making Changes

**Frontend Changes:**
1. Edit files in `src/`
2. Vite hot-reloads automatically
3. No restart needed

**Backend Changes:**
1. Edit files in `server/`
2. Nodemon restarts automatically
3. No manual restart needed

### Testing API

Use browser or curl:
```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Get all events
curl http://localhost:5000/api/events

# Create event
curl -X POST http://localhost:5000/api/events \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Event","type":"Technical"}'
```

## Production Deployment

### Backend Deployment

1. **Deploy to Heroku/Railway/Render:**
   ```bash
   # Set environment variables
   MONGODB_URI=your_connection_string
   MONGODB_DB_NAME=acem_db
   PORT=5000
   ```

2. **Update frontend `.env`:**
   ```env
   VITE_API_URL=https://your-backend.herokuapp.com/api
   ```

### Frontend Deployment

1. **Build frontend:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel/Netlify:**
   - Set environment variable: `VITE_API_URL`
   - Point to your backend URL

## Security Best Practices

### Development
- ✅ Use `.env` for secrets
- ✅ `.env` is in `.gitignore`
- ✅ Use 0.0.0.0/0 for MongoDB (convenient)

### Production
- ✅ Use environment variables (not `.env`)
- ✅ Whitelist specific IPs in MongoDB Atlas
- ✅ Enable HTTPS for backend
- ✅ Use strong passwords
- ✅ Enable rate limiting
- ✅ Add authentication middleware

## File Structure

```
/workspace/app-9dfi9jpj51xd/
├── server/
│   └── index.js          # Express backend server
├── src/
│   ├── db/
│   │   └── api.ts        # Frontend API client
│   └── ...               # React components
├── .env                  # Environment variables (create this)
├── .env.example          # Template
└── package.json          # Scripts and dependencies
```

## Available Scripts

```bash
# Start both servers (recommended)
npm run dev:full

# Start backend only
npm run server

# Start frontend only
npm run client

# Check code quality
npm run lint
```

## Default Data

The backend automatically creates:
- **Admin passkey:** `acemadmin@fusion`
- **Theme settings:** Cinematic dark theme
- **Default pages:** Home, Events, Committee, Gallery, About, Contact
- **Component templates:** Text, Heading, Image, Button
- **Footer settings:** Default college info

## Next Steps

1. ✅ Setup MongoDB Atlas
2. ✅ Configure `.env` file
3. ✅ Start servers with `npm run dev:full`
4. ✅ Open http://localhost:5173
5. ✅ Test admin login (chatbot with passkey)
6. ✅ Add events, committee members, gallery images
7. ✅ Customize theme and content

## Support

- **MongoDB Atlas:** https://docs.atlas.mongodb.com/
- **Express.js:** https://expressjs.com/
- **React:** https://react.dev/

---

**You're all set!** 🚀 The application now uses a proper client-server architecture with MongoDB Atlas.
