# 🔧 Admin Dashboard Access - Troubleshooting Guide

## Problem: Cannot Access Admin Dashboard

If you're unable to access the admin dashboard, follow these steps to diagnose and fix the issue.

---

## Quick Diagnosis

### Step 1: Check if Backend is Running

```bash
curl http://localhost:5000/api/health
```

**Expected Response:**
```json
{"status":"ok","message":"Server is running"}
```

**If you get an error:**
- Backend is not running
- Go to "Fix 1: Start Backend Server"

---

### Step 2: Check if Passkey Exists

```bash
curl http://localhost:5000/api/passkey
```

**Expected Response:**
```json
{"id":"...","passkey":"acemadmin@fusion","created_at":"...","updated_at":"..."}
```

**If you get null or error:**
- Database not initialized
- Go to "Fix 2: Initialize Database"

---

### Step 3: Test Passkey Verification

```bash
curl -X POST http://localhost:5000/api/passkey/verify \
  -H "Content-Type: application/json" \
  -d '{"passkey":"acemadmin@fusion"}'
```

**Expected Response:**
```json
{"valid":true}
```

**If you get {"valid":false}:**
- Passkey doesn't match
- Go to "Fix 3: Reset Passkey"

---

## Automated Testing

Run the test script:
```bash
./test-backend.sh
```

This will automatically test all backend endpoints and show you what's working and what's not.

---

## Common Fixes

### Fix 1: Start Backend Server

**Problem:** Backend is not running

**Solution:**
```bash
# Option A: Start both frontend and backend
npm run dev:full

# Option B: Start backend only
npm run server
```

**Verify it's running:**
```bash
curl http://localhost:5000/api/health
```

---

### Fix 2: Initialize Database

**Problem:** Database is not initialized or passkey doesn't exist

**Solution:**

1. **Stop the backend** (Ctrl+C)

2. **Check .env file:**
```bash
cat .env | grep MONGODB_URI
```

Make sure it has your actual MongoDB connection string, not the example one.

3. **Restart backend:**
```bash
npm run server
```

4. **Check console output:**
Look for these messages:
```
✅ Connected to MongoDB Atlas
✅ Database indexes created
✅ Default admin passkey created
✅ Database initialized successfully
```

If you see errors, check:
- MongoDB URI is correct
- Password is correct
- Cluster is running
- IP 0.0.0.0/0 is whitelisted

---

### Fix 3: Reset Passkey

**Problem:** Passkey doesn't match or was changed

**Solution:**

**Option A: Reset via MongoDB Atlas**

1. Go to MongoDB Atlas Dashboard
2. Click "Browse Collections"
3. Select database: `acem_db`
4. Select collection: `admin_passkey`
5. Find the document
6. Click "Edit"
7. Change `passkey` field to: `acemadmin@fusion`
8. Click "Update"

**Option B: Delete and Recreate**

1. Go to MongoDB Atlas Dashboard
2. Browse Collections → `acem_db` → `admin_passkey`
3. Delete all documents
4. Restart backend server
5. It will recreate the default passkey

---

### Fix 4: Frontend Can't Connect to Backend

**Problem:** Frontend shows "Failed to fetch" or network errors

**Solution:**

1. **Check VITE_API_URL in .env:**
```bash
cat .env | grep VITE_API_URL
```

Should be:
```
VITE_API_URL=http://localhost:5000/api
```

2. **Restart frontend:**
```bash
# Stop frontend (Ctrl+C)
# Start again
npm run client
```

3. **Check browser console:**
- Open DevTools (F12)
- Look for errors in Console tab
- Check Network tab for failed requests

---

### Fix 5: CORS Errors

**Problem:** Browser shows CORS policy errors

**Solution:**

The backend already has CORS enabled. If you still see CORS errors:

1. **Check backend is running on port 5000:**
```bash
lsof -i:5000
```

2. **Check frontend is running on port 5173:**
```bash
lsof -i:5173
```

3. **Restart both servers:**
```bash
npm run dev:full
```

---

## Step-by-Step Admin Access Test

### 1. Start Backend
```bash
npm run server
```

Wait for:
```
✅ Connected to MongoDB Atlas
✅ Database initialized successfully
🚀 Server running on http://localhost:5000
```

### 2. Test Backend
```bash
./test-backend.sh
```

All tests should pass.

### 3. Start Frontend
```bash
# In a new terminal
npm run client
```

### 4. Open Application
```
http://localhost:5173
```

### 5. Click Chatbot
- Look for chatbot icon (bottom-right corner)
- Click it
- Dialog should open

### 6. Enter Passkey
- Type: `acemadmin@fusion`
- Click "Submit"
- Should see success message
- Admin dashboard should open

---

## Debugging Checklist

### Backend Checklist
- [ ] .env file exists
- [ ] MONGODB_URI is configured
- [ ] Backend server is running (port 5000)
- [ ] Health check passes
- [ ] MongoDB connection successful
- [ ] Default data created
- [ ] Passkey exists in database
- [ ] Passkey verification works

### Frontend Checklist
- [ ] VITE_API_URL is configured
- [ ] Frontend is running (port 5173)
- [ ] No errors in browser console
- [ ] Chatbot icon is visible
- [ ] Chatbot dialog opens
- [ ] Can type in passkey field
- [ ] Submit button works

### Network Checklist
- [ ] Backend responds to curl requests
- [ ] Frontend can reach backend
- [ ] No CORS errors
- [ ] No network timeouts

---

## Manual Testing Commands

### Test Health
```bash
curl http://localhost:5000/api/health
```

### Test Passkey Get
```bash
curl http://localhost:5000/api/passkey
```

### Test Passkey Verify
```bash
curl -X POST http://localhost:5000/api/passkey/verify \
  -H "Content-Type: application/json" \
  -d '{"passkey":"acemadmin@fusion"}'
```

### Test Events
```bash
curl http://localhost:5000/api/events
```

### Test Theme
```bash
curl http://localhost:5000/api/theme
```

---

## Common Error Messages

### "Failed to connect to MongoDB Atlas"
**Cause:** MongoDB connection string is wrong or cluster is not running

**Fix:**
1. Check MONGODB_URI in .env
2. Verify password is correct
3. Check cluster is running in MongoDB Atlas
4. Verify IP 0.0.0.0/0 is whitelisted

### "Failed to fetch"
**Cause:** Frontend can't reach backend

**Fix:**
1. Ensure backend is running
2. Check VITE_API_URL in .env
3. Verify no firewall blocking

### "Invalid passkey"
**Cause:** Passkey doesn't match database

**Fix:**
1. Check passkey in MongoDB Atlas
2. Try default: `acemadmin@fusion`
3. Reset passkey if needed

### "Authentication failed"
**Cause:** MongoDB user credentials wrong

**Fix:**
1. Check username and password
2. Verify user exists in MongoDB Atlas
3. Check user has read/write permissions

---

## Still Not Working?

### 1. Complete Reset

```bash
# Stop all servers
# Kill any processes on ports
lsof -ti:5000 | xargs kill -9
lsof -ti:5173 | xargs kill -9

# Remove node_modules
rm -rf node_modules

# Reinstall
npm install

# Start fresh
npm run dev:full
```

### 2. Check Logs

**Backend logs:**
Look at the terminal where backend is running for error messages.

**Frontend logs:**
Open browser DevTools (F12) → Console tab

**MongoDB logs:**
Go to MongoDB Atlas → Metrics → View logs

### 3. Verify MongoDB Atlas

1. Go to https://cloud.mongodb.com
2. Check cluster is running (green status)
3. Database Access → Verify user exists
4. Network Access → Verify 0.0.0.0/0 is listed
5. Browse Collections → Check `admin_passkey` exists

---

## Quick Start Script

Use the automated start script:

```bash
./start.sh
```

This will:
- Check .env configuration
- Verify MongoDB URI
- Install dependencies if needed
- Clean up ports
- Start both servers

---

## Contact Support

If none of these fixes work:

1. Run diagnostic:
```bash
./test-backend.sh > diagnostic.txt
```

2. Check logs:
```bash
# Backend logs
npm run server 2>&1 | tee backend.log

# Frontend logs (browser console)
```

3. Provide:
- diagnostic.txt
- backend.log
- Browser console errors
- MongoDB Atlas cluster status

---

## Success Indicators

When everything is working:

✅ Backend console shows:
```
✅ Connected to MongoDB Atlas
✅ Database initialized successfully
🚀 Server running on http://localhost:5000
```

✅ Test script shows:
```
✅ Backend is running
✅ Passkey endpoint working
✅ Default passkey is valid!
✅ Events endpoint working
✅ Theme endpoint working
```

✅ Frontend shows:
- Chatbot icon visible
- Can open chatbot dialog
- Can enter passkey
- Admin dashboard opens after authentication

---

**Good luck!** 🚀 Follow these steps and you'll get the admin dashboard working.
