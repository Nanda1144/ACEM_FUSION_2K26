# 🎯 ADMIN DASHBOARD ACCESS - COMPLETE GUIDE

## 🚨 Quick Fix for Admin Access Issues

If you cannot access the admin dashboard, follow these steps:

---

## ⚡ Quick Start (Recommended)

### Option 1: Automated Start Script
```bash
./start.sh
```

This script will:
- Check your configuration
- Verify MongoDB connection
- Install dependencies if needed
- Clean up ports
- Start both servers automatically

### Option 2: Manual Start
```bash
# Terminal 1: Start backend
npm run server

# Terminal 2: Start frontend  
npm run client
```

---

## 🔍 Diagnostic Tools

### 1. Run Database Diagnostic
```bash
npm run diagnostic
```

This will:
- Check MongoDB connection
- Verify admin passkey exists
- Show database status
- Create passkey if missing
- Display all collections

### 2. Test Backend API
```bash
npm run test:backend
```

This will:
- Test all API endpoints
- Verify passkey verification works
- Check database connectivity
- Show what's working and what's not

---

## 📋 Step-by-Step Setup

### Step 1: Configure MongoDB Atlas

1. **Create MongoDB Atlas Account**
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Sign up and verify email

2. **Create Free Cluster**
   - Click "Build a Database"
   - Select "M0 FREE" tier
   - Choose cloud provider and region
   - Click "Create"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Username: `acem_admin`
   - Click "Autogenerate Secure Password"
   - **SAVE THIS PASSWORD!**
   - Select "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database"
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Add database name `acem_db` before the `?`

**Example:**
```
mongodb+srv://acem_admin:MyPassword123@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
```

### Step 2: Configure Application

1. **Create .env file**
```bash
cp .env.example .env
```

2. **Edit .env file**
```bash
nano .env  # or use any text editor
```

3. **Add your MongoDB connection string**
```env
# Backend MongoDB Connection
MONGODB_URI=mongodb+srv://acem_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
MONGODB_DB_NAME=acem_db

# Frontend API Configuration
VITE_API_URL=http://localhost:5000/api

# Server Port
PORT=5000
```

**IMPORTANT:** Replace `YOUR_PASSWORD` and `cluster0.xxxxx.mongodb.net` with your actual values!

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Run Diagnostic
```bash
npm run diagnostic
```

**Expected Output:**
```
✅ MONGODB_URI found
✅ Successfully connected to MongoDB Atlas
✅ Admin passkey found
✅ Default passkey is correct!
```

If passkey is missing, the script will create it automatically.

### Step 5: Start Application
```bash
npm run dev:full
```

**Expected Output:**

Backend terminal:
```
✅ Connected to MongoDB Atlas
✅ Database indexes created
✅ Default admin passkey created
✅ Database initialized successfully
🚀 Server running on http://localhost:5000
```

Frontend terminal:
```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### Step 6: Access Admin Dashboard

1. **Open Application**
   ```
   http://localhost:5173
   ```

2. **Click Chatbot Icon**
   - Look for the chatbot icon in the bottom-right corner
   - Click it to open the admin access dialog

3. **Enter Passkey**
   - Type: `acemadmin@fusion`
   - Click "Submit"

4. **Admin Dashboard Opens**
   - You should see a success message
   - Admin dashboard will open
   - You can now manage events, committee, gallery, etc.

---

## 🐛 Troubleshooting

### Issue 1: "Backend is not running"

**Symptoms:**
- Cannot access http://localhost:5000/api/health
- Frontend shows "Failed to fetch"

**Fix:**
```bash
# Start backend
npm run server
```

**Verify:**
```bash
curl http://localhost:5000/api/health
# Should return: {"status":"ok","message":"Server is running"}
```

---

### Issue 2: "MongoDB connection error"

**Symptoms:**
- Backend shows "Failed to connect to MongoDB Atlas"
- Diagnostic script fails

**Fix:**

1. **Check .env file exists:**
```bash
ls -la .env
```

2. **Check MongoDB URI:**
```bash
cat .env | grep MONGODB_URI
```

3. **Verify:**
   - Password is correct (no special characters or URL encoded)
   - Cluster is running (green status in MongoDB Atlas)
   - IP 0.0.0.0/0 is whitelisted
   - Database name is in the connection string

4. **Test connection:**
```bash
npm run diagnostic
```

---

### Issue 3: "Invalid passkey"

**Symptoms:**
- Chatbot shows "Invalid passkey" error
- Cannot access admin dashboard

**Fix:**

**Option A: Check passkey in database**
```bash
npm run diagnostic
```

Look for the passkey value. It should be: `acemadmin@fusion`

**Option B: Reset passkey via MongoDB Atlas**
1. Go to MongoDB Atlas Dashboard
2. Click "Browse Collections"
3. Select database: `acem_db`
4. Select collection: `admin_passkey`
5. Edit the document
6. Change `passkey` to: `acemadmin@fusion`
7. Save

**Option C: Delete and recreate**
1. Delete all documents in `admin_passkey` collection
2. Restart backend server
3. It will create the default passkey automatically

---

### Issue 4: "Chatbot not visible"

**Symptoms:**
- Cannot see chatbot icon on the page
- No way to access admin

**Fix:**

1. **Check frontend is running:**
```bash
lsof -i:5173
```

2. **Check browser console for errors:**
   - Open DevTools (F12)
   - Look for errors in Console tab

3. **Restart frontend:**
```bash
npm run client
```

4. **Clear browser cache:**
   - Press Ctrl+Shift+R (or Cmd+Shift+R on Mac)

---

### Issue 5: "Port already in use"

**Symptoms:**
- Error: "Port 5000 is already in use"
- Error: "Port 5173 is already in use"

**Fix:**
```bash
# Kill processes on ports
lsof -ti:5000 | xargs kill -9
lsof -ti:5173 | xargs kill -9

# Start again
npm run dev:full
```

---

## 🧪 Testing Checklist

Use this checklist to verify everything is working:

### Backend Tests
```bash
# Test 1: Health check
curl http://localhost:5000/api/health
# Expected: {"status":"ok","message":"Server is running"}

# Test 2: Get passkey
curl http://localhost:5000/api/passkey
# Expected: {"id":"...","passkey":"acemadmin@fusion",...}

# Test 3: Verify passkey
curl -X POST http://localhost:5000/api/passkey/verify \
  -H "Content-Type: application/json" \
  -d '{"passkey":"acemadmin@fusion"}'
# Expected: {"valid":true}

# Test 4: Get events
curl http://localhost:5000/api/events
# Expected: [] or array of events

# Test 5: Get theme
curl http://localhost:5000/api/theme
# Expected: {"id":"...","header_title":"ACEM",...}
```

### Frontend Tests
1. Open http://localhost:5173
2. Check no errors in browser console (F12)
3. Look for chatbot icon (bottom-right)
4. Click chatbot icon
5. Dialog should open
6. Type passkey: `acemadmin@fusion`
7. Click Submit
8. Should see success message
9. Admin dashboard should open

---

## 📊 Default Configuration

### Default Admin Passkey
```
acemadmin@fusion
```

### Default Ports
- Backend: `5000`
- Frontend: `5173`

### Default Database
- Name: `acem_db`
- Collections: 12 (events, committee, gallery, etc.)

### Default Theme
- Header title: "ACEM"
- Primary color: #00D9FF (cyan)
- Background: #0A0F1E (dark blue)

---

## 🔧 Useful Commands

```bash
# Start everything
npm run dev:full

# Start backend only
npm run server

# Start frontend only
npm run client

# Run diagnostic
npm run diagnostic

# Test backend API
npm run test:backend

# Use automated start script
./start.sh

# Check code quality
npm run lint

# Kill processes on ports
lsof -ti:5000 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

---

## 📁 Important Files

```
.env                      # Your configuration (CREATE THIS)
.env.example              # Template
server/index.js           # Backend server
src/db/api.ts             # Frontend API client
src/components/Chatbot.tsx           # Admin access chatbot
src/components/AdminDashboard.tsx    # Admin dashboard
diagnostic.js             # Database diagnostic script
test-backend.sh           # Backend test script
start.sh                  # Automated start script
ADMIN_ACCESS_FIX.md       # Detailed troubleshooting guide
```

---

## 🎯 Success Indicators

When everything is working correctly:

✅ **Backend Console:**
```
✅ Connected to MongoDB Atlas
✅ Database indexes created
✅ Default admin passkey created
✅ Database initialized successfully
🚀 Server running on http://localhost:5000
📊 API available at http://localhost:5000/api
```

✅ **Diagnostic Output:**
```
✅ MONGODB_URI found
✅ Successfully connected to MongoDB Atlas
✅ Admin passkey found
✅ Default passkey is correct!
```

✅ **Test Backend Output:**
```
✅ Backend is running
✅ Passkey endpoint working
✅ Default passkey is valid!
✅ Events endpoint working
✅ Theme endpoint working
```

✅ **Frontend:**
- Application loads at http://localhost:5173
- No errors in browser console
- Chatbot icon visible
- Can open chatbot dialog
- Can enter passkey
- Admin dashboard opens after authentication

---

## 🆘 Still Having Issues?

### 1. Run Complete Diagnostic
```bash
# Run diagnostic and save output
npm run diagnostic > diagnostic-output.txt

# Run backend tests and save output
npm run test:backend > test-output.txt

# Check backend logs
npm run server 2>&1 | tee backend.log
```

### 2. Check MongoDB Atlas
1. Go to https://cloud.mongodb.com
2. Verify cluster is running (green status)
3. Check Database Access → User exists
4. Check Network Access → 0.0.0.0/0 is listed
5. Browse Collections → Verify `admin_passkey` exists

### 3. Complete Reset
```bash
# Stop all servers (Ctrl+C)

# Clean ports
lsof -ti:5000 | xargs kill -9
lsof -ti:5173 | xargs kill -9

# Remove node_modules
rm -rf node_modules

# Reinstall
npm install

# Run diagnostic
npm run diagnostic

# Start fresh
npm run dev:full
```

---

## 📚 Additional Documentation

- **ADMIN_ACCESS_FIX.md** - Detailed troubleshooting guide
- **ERROR_FIXED.md** - MongoDB integration error fix
- **MONGODB_ARCHITECTURE.md** - Architecture details
- **QUICK_REFERENCE.md** - One-page reference
- **README_COMPLETE.md** - Complete setup guide

---

## ✅ Summary

**To access admin dashboard:**

1. **Setup MongoDB Atlas** (one-time)
2. **Configure .env file** (one-time)
3. **Run diagnostic:** `npm run diagnostic`
4. **Start application:** `npm run dev:full`
5. **Open:** http://localhost:5173
6. **Click chatbot** (bottom-right)
7. **Enter passkey:** `acemadmin@fusion`
8. **Admin dashboard opens!**

**Default Passkey:** `acemadmin@fusion`

**Need help?** Run `npm run diagnostic` and `npm run test:backend` to see what's wrong.

---

**Good luck!** 🚀 Follow these steps and you'll have admin access working perfectly.
