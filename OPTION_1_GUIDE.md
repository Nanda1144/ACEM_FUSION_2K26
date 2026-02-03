# 🚀 OPTION 1: AUTOMATED START - STEP BY STEP

## What Option 1 Does

The automated start script (`./start.sh`) will:
- ✅ Check if .env file exists
- ✅ Verify MongoDB URI is configured
- ✅ Install dependencies if needed
- ✅ Clean up any processes on ports 5000 and 5173
- ✅ Start both backend and frontend servers automatically
- ✅ Show you the admin passkey

---

## 📋 Prerequisites (One-Time Setup)

### Step 1: Setup MongoDB Atlas (5 minutes)

**If you haven't done this yet:**

1. **Create MongoDB Atlas Account**
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Sign up with email or Google
   - Verify your email

2. **Create Free Cluster**
   - Click "Build a Database"
   - Select "M0 FREE" tier
   - Choose cloud provider (AWS recommended)
   - Choose region closest to you
   - Click "Create"
   - Wait 3-5 minutes for cluster creation

3. **Create Database User**
   - Go to "Database Access" (left sidebar)
   - Click "Add New Database User"
   - Username: `acem_admin`
   - Click "Autogenerate Secure Password"
   - **COPY AND SAVE THIS PASSWORD!** (You'll need it)
   - Select "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access**
   - Go to "Network Access" (left sidebar)
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" (left sidebar)
   - Click "Connect" button on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://acem_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

6. **Modify Connection String**
   - Replace `<password>` with your actual password
   - Add database name `acem_db` before the `?`
   - Final format: `mongodb+srv://acem_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority`

**Example:**
```
Original:
mongodb+srv://acem_admin:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority

Modified:
mongodb+srv://acem_admin:MySecurePass123@cluster0.abc123.mongodb.net/acem_db?retryWrites=true&w=majority
                         ↑ Your password              ↑ Add this!
```

### Step 2: Configure .env File (1 minute)

1. **Create .env file**
```bash
cp .env.example .env
```

2. **Edit .env file**
```bash
nano .env
# Or use any text editor you prefer
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

4. **Save the file** (Ctrl+O, Enter, Ctrl+X in nano)

---

## 🚀 Running Option 1

### Command
```bash
./start.sh
```

### What You'll See

**If .env is not configured:**
```
❌ ERROR: MongoDB URI not configured!

Please edit .env file and add your actual MongoDB Atlas connection string
```
→ Go back and complete Step 2 above

**If everything is configured correctly:**
```
🚀 Fusion26 - Starting Application Setup
========================================

✅ Configuration file found
✅ MongoDB URI configured

📦 Installing dependencies...
✅ Dependencies installed

🧹 Cleaning up existing processes...
✅ Ports cleaned

🚀 Starting Fusion26 Application...

Backend will start on: http://localhost:5000
Frontend will start on: http://localhost:5173

Default Admin Passkey: acemadmin@fusion

Press Ctrl+C to stop all servers

========================================
```

Then you'll see both servers starting:

**Backend Output:**
```
✅ Connected to MongoDB Atlas
✅ Database indexes created
✅ Default admin passkey created
✅ Default theme settings created
✅ Default footer settings created
✅ Default about us content created
✅ Default contact information created
✅ Default component templates created
✅ Default pages created
✅ Database initialized successfully
🚀 Server running on http://localhost:5000
📊 API available at http://localhost:5000/api
```

**Frontend Output:**
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

---

## 🎯 Access Your Application

### 1. Open Browser
```
http://localhost:5173
```

You should see your Fusion26 website homepage!

### 2. Access Admin Dashboard

**Step 1:** Look for the chatbot icon (💬) in the **bottom-right corner**

**Step 2:** Click the chatbot icon

**Step 3:** A dialog will appear asking for passkey

**Step 4:** Enter the passkey:
```
acemadmin@fusion
```

**Step 5:** Click "Submit"

**Step 6:** Success! Admin dashboard opens

---

## ✅ Verification Checklist

After running `./start.sh`, verify:

- [ ] Backend console shows "✅ Connected to MongoDB Atlas"
- [ ] Backend console shows "🚀 Server running on http://localhost:5000"
- [ ] Frontend console shows "Local: http://localhost:5173/"
- [ ] Opening http://localhost:5173 shows the website
- [ ] Chatbot icon is visible (bottom-right corner)
- [ ] Clicking chatbot opens a dialog
- [ ] Entering "acemadmin@fusion" and clicking Submit opens admin dashboard

---

## 🐛 Troubleshooting

### Issue: "MongoDB URI not configured"

**Solution:**
1. Check .env file exists: `ls -la .env`
2. Edit .env file: `nano .env`
3. Add your MongoDB connection string
4. Save and run `./start.sh` again

### Issue: "Failed to connect to MongoDB Atlas"

**Solution:**
1. Verify your MongoDB password is correct
2. Check cluster is running (green status in MongoDB Atlas)
3. Verify IP 0.0.0.0/0 is whitelisted
4. Wait 1-2 minutes after creating user (propagation delay)

### Issue: "Port already in use"

**Solution:**
The script automatically cleans ports, but if it fails:
```bash
lsof -ti:5000 | xargs kill -9
lsof -ti:5173 | xargs kill -9
./start.sh
```

### Issue: "Cannot see chatbot icon"

**Solution:**
1. Refresh the page (Ctrl+R)
2. Check browser console for errors (F12)
3. Verify frontend is running
4. Clear browser cache (Ctrl+Shift+R)

### Issue: "Invalid passkey"

**Solution:**
1. Make sure you typed: `acemadmin@fusion` (exactly)
2. Check for extra spaces
3. Run diagnostic: `npm run diagnostic`

---

## 🔄 Stopping the Application

To stop both servers:
```
Press Ctrl+C in the terminal
```

This will gracefully shut down both backend and frontend.

---

## 🔄 Restarting the Application

To restart:
```bash
./start.sh
```

The script will:
- Clean up ports
- Restart both servers
- Everything will be ready again

---

## 📊 What Happens Behind the Scenes

When you run `./start.sh`:

1. **Checks Configuration**
   - Verifies .env file exists
   - Checks MongoDB URI is set

2. **Installs Dependencies**
   - Runs `npm install` if node_modules missing
   - Ensures all packages are installed

3. **Cleans Ports**
   - Kills any processes on port 5000 (backend)
   - Kills any processes on port 5173 (frontend)

4. **Starts Backend**
   - Connects to MongoDB Atlas
   - Creates default data if needed
   - Starts Express server on port 5000

5. **Starts Frontend**
   - Starts Vite dev server on port 5173
   - Enables hot reload for development

6. **Ready to Use**
   - Both servers running
   - Database initialized
   - Admin passkey ready

---

## 🎯 Next Steps After Starting

### 1. Explore the Website
- Browse the homepage
- Check out the Events section
- View the Committee section
- Look at the Gallery

### 2. Access Admin Dashboard
- Click chatbot icon
- Enter passkey: `acemadmin@fusion`
- Explore admin features

### 3. Add Your Content
- Add events for your college fest
- Upload committee member photos
- Add gallery images
- Edit About Us content
- Update contact information

### 4. Customize Theme
- Change colors
- Update header title
- Customize footer
- Adjust styling

---

## 💡 Pro Tips

1. **Keep terminal open:** Don't close the terminal where servers are running
2. **Use two terminals:** One for backend logs, one for frontend logs (if not using ./start.sh)
3. **Check backend logs:** See all database operations in real-time
4. **Use browser DevTools:** F12 to see frontend logs and network requests
5. **Save your passkey:** Write down the admin passkey somewhere safe
6. **Backup data:** Regularly export data from MongoDB Atlas

---

## 📚 Additional Resources

### Quick Commands
```bash
# Start application (Option 1)
./start.sh

# Run diagnostic
npm run diagnostic

# Test backend
npm run test:backend

# Check backend health
curl http://localhost:5000/api/health
```

### Documentation
- **ADMIN_PASSKEY.md** - Visual guide to admin access
- **ADMIN_ACCESS_GUIDE.md** - Complete troubleshooting
- **SETUP_SUMMARY.md** - Project overview
- **README.md** - Quick start guide

---

## ✅ Success!

If you see:
- ✅ Backend running on port 5000
- ✅ Frontend running on port 5173
- ✅ Website loads at http://localhost:5173
- ✅ Chatbot icon visible
- ✅ Can access admin dashboard

**You're all set!** 🎉

---

## 🆘 Still Need Help?

### Run Diagnostics
```bash
npm run diagnostic
```

### Test Backend
```bash
npm run test:backend
```

### Check Logs
- Backend logs: Check terminal where ./start.sh is running
- Frontend logs: Open browser DevTools (F12) → Console tab

### Documentation
- See **ADMIN_ACCESS_FIX.md** for detailed troubleshooting
- See **MONGODB_STEP_BY_STEP.md** for MongoDB setup help

---

**Admin Passkey:** `acemadmin@fusion`

**Ready to start?** Run `./start.sh` and follow the steps above!
