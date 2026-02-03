# 🚀 Quick Reference Card - MongoDB Integration

## ⚡ 3-Step Setup

### 1️⃣ MongoDB Atlas (3 min)
```
→ Go to: mongodb.com/cloud/atlas/register
→ Create M0 FREE cluster
→ User: acem_admin
→ IP: 0.0.0.0/0
→ Copy connection string
```

### 2️⃣ Configure (1 min)
```bash
cp .env.example .env
# Edit .env and add your connection string
```

### 3️⃣ Start (1 min)
```bash
npm run dev:full
```

**Done!** Open http://localhost:5173

---

## 🎯 Architecture

```
React Frontend  →  Express Backend  →  MongoDB Atlas
(Port 5173)        (Port 5000)         (Cloud)
```

---

## 📝 Environment Variables

```env
# Backend needs this
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/acem_db

# Frontend needs this
VITE_API_URL=http://localhost:5000/api
```

---

## 🔧 Commands

```bash
# Start both (recommended)
npm run dev:full

# Start separately
npm run server    # Backend only
npm run client    # Frontend only

# Check code
npm run lint
```

---

## ✅ Verify Setup

### Backend Running?
```bash
curl http://localhost:5000/api/health
# Should return: {"status":"ok"}
```

### Frontend Running?
```
Open: http://localhost:5173
Should see homepage
```

### Database Connected?
```
Backend console shows:
✅ Connected to MongoDB Atlas
✅ Database initialized successfully
🚀 Server running on http://localhost:5000
```

---

## 🔐 Default Credentials

**Admin Passkey:** `acemadmin@fusion`

Use in chatbot to access admin dashboard.

---

## 🐛 Quick Fixes

### Backend won't start?
```bash
# Check .env file exists
ls -la .env

# Verify MongoDB URI is correct
cat .env | grep MONGODB_URI
```

### Frontend can't connect?
```bash
# Ensure backend is running
curl http://localhost:5000/api/health

# Check VITE_API_URL in .env
cat .env | grep VITE_API_URL
```

### Port already in use?
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port in .env
PORT=5001
```

---

## 📡 API Endpoints

```
GET    /api/events           # List events
POST   /api/events           # Create event
PUT    /api/events/:id       # Update event
DELETE /api/events/:id       # Delete event

GET    /api/committee        # List members
POST   /api/committee        # Create member

GET    /api/gallery          # List images
POST   /api/gallery          # Upload image

POST   /api/passkey/verify   # Verify passkey
GET    /api/theme            # Get theme
PUT    /api/theme/:id        # Update theme
```

---

## 📁 Key Files

```
server/index.js              # Backend server
src/db/api.ts                # Frontend API client
.env                         # Your configuration
package.json                 # Scripts
```

---

## 🎓 How It Works

```
1. Admin adds event in frontend
2. Frontend calls: eventsApi.create(...)
3. HTTP POST to backend: /api/events
4. Backend saves to MongoDB Atlas
5. Backend returns saved event
6. Frontend updates UI
```

**All automatic!**

---

## 📚 Documentation

- **MONGODB_FIXED.md** - Complete summary (START HERE)
- **MONGODB_ARCHITECTURE.md** - Architecture details
- **MONGODB_QUICK_START.md** - 5-minute guide
- **MONGODB_STEP_BY_STEP.md** - Detailed steps

---

## 💡 Pro Tips

1. Always use `npm run dev:full`
2. Check backend console for errors
3. Use browser DevTools Network tab
4. Test API with curl
5. View data in MongoDB Atlas dashboard

---

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| "MongoDB connection error" | Check .env file, verify connection string |
| "Failed to fetch" | Ensure backend is running on port 5000 |
| "Port already in use" | Kill process: `lsof -ti:5000 \| xargs kill -9` |
| "Authentication failed" | Check MongoDB user exists and password is correct |
| Data not updating | Check backend console, verify API calls in browser |

---

## ✨ Features

- ✅ Automatic database initialization
- ✅ Default data creation
- ✅ Hot reload (frontend & backend)
- ✅ Type-safe API calls
- ✅ Image upload support
- ✅ Error handling
- ✅ CORS enabled

---

## 🎯 Checklist

- [ ] MongoDB Atlas account created
- [ ] Cluster created (M0 FREE)
- [ ] Database user created
- [ ] IP whitelisted (0.0.0.0/0)
- [ ] Connection string copied
- [ ] .env file created
- [ ] Connection string added to .env
- [ ] `npm run dev:full` executed
- [ ] Backend running (port 5000)
- [ ] Frontend running (port 5173)
- [ ] Admin login tested
- [ ] Event creation tested

---

**All set!** 🚀 Start building your college fest website!
