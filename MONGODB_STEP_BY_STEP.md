# 📝 MongoDB Atlas Setup - Step-by-Step Instructions

## What You'll Need
- Email address (for MongoDB Atlas account)
- 10 minutes of time
- Internet connection

---

## Part 1: MongoDB Atlas Account Setup

### Step 1.1: Create Account
```
1. Open browser
2. Go to: https://www.mongodb.com/cloud/atlas/register
3. Fill in:
   - Email: your-email@example.com
   - Password: (create a strong password)
4. Click "Sign Up"
5. Check your email for verification link
6. Click verification link
7. Log in to MongoDB Atlas
```

### Step 1.2: Welcome Screen
```
- You'll see "Welcome to Atlas" screen
- Click "Build a Database" button
```

---

## Part 2: Create Free Database Cluster

### Step 2.1: Choose Deployment Type
```
You'll see three options:
1. Serverless (Pay as you go)
2. Dedicated (Paid)
3. Shared (FREE) ← Choose this one!

Click "Create" under "Shared" (M0 FREE)
```

### Step 2.2: Configure Cluster
```
Cloud Provider:
- AWS (recommended)
- Google Cloud
- Azure
Choose any - all work fine!

Region:
- Select region closest to your location
- Example: "US East (N. Virginia)" or "Mumbai"
- Closer region = faster performance

Cluster Name:
- Default: "Cluster0"
- Or rename to: "acem-cluster"

Click "Create Cluster" button
```

### Step 2.3: Wait for Cluster Creation
```
- You'll see "Creating cluster..." message
- This takes 3-5 minutes
- Don't close the browser!
- You'll see a progress indicator
```

---

## Part 3: Security Setup

### Step 3.1: Create Database User

```
While cluster is creating, you'll see:
"Security Quickstart" screen

Under "How would you like to authenticate your connection?"
1. Choose "Username and Password"
2. Fill in:
   Username: acem_admin
   Password: Click "Autogenerate Secure Password"
   
3. IMPORTANT: You'll see a password like:
   MySecurePassword123XYZ
   
4. COPY THIS PASSWORD NOW!
   - Click the "Copy" button
   - Paste it in a text file
   - Save it somewhere safe
   - You'll need this later!

5. Under "Database User Privileges":
   - Select "Read and write to any database"
   
6. Click "Create User" button
```

**⚠️ CRITICAL:** Save your password! You cannot see it again!

### Step 3.2: Configure Network Access

```
Still on "Security Quickstart" screen:

Under "Where would you like to connect from?"
1. You'll see "IP Access List"
2. Click "Add My Current IP Address"
   OR
   Click "Allow Access from Anywhere" (easier for development)
   
3. If you chose "Allow Access from Anywhere":
   - IP Address: 0.0.0.0/0
   - Description: "Development Access"
   
4. Click "Add Entry"
5. Click "Finish and Close" button
```

---

## Part 4: Get Connection String

### Step 4.1: Navigate to Connect
```
1. Wait for cluster to finish creating (green status)
2. You'll see your cluster name (e.g., "Cluster0")
3. Click the "Connect" button
```

### Step 4.2: Choose Connection Method
```
You'll see three options:
1. Connect with MongoDB Shell
2. Connect your application ← Choose this!
3. Connect using MongoDB Compass

Click "Connect your application"
```

### Step 4.3: Copy Connection String
```
1. Driver: Node.js (should be selected)
2. Version: 5.5 or later (should be selected)
3. You'll see a connection string like:

mongodb+srv://acem_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

4. Click "Copy" button
5. Paste it in a text editor
```

### Step 4.4: Modify Connection String
```
Original:
mongodb+srv://acem_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority

You need to:
1. Replace <password> with your actual password
2. Add database name "acem_db" before the "?"

Final result:
mongodb+srv://acem_admin:MySecurePassword123XYZ@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority

                                    ↑ Your password      ↑ Add this!
```

**Example with real values:**
```
If your password is: MyPass123
And your cluster is: cluster0.abc12.mongodb.net

Final string:
mongodb+srv://acem_admin:MyPass123@cluster0.abc12.mongodb.net/acem_db?retryWrites=true&w=majority
```

---

## Part 5: Configure Your Application

### Step 5.1: Create .env File
```
1. Open your project folder in VS Code (or any editor)
2. You should see a file: .env.example
3. Create a new file named: .env (no extension!)
4. Copy everything from .env.example to .env
```

### Step 5.2: Add Your Connection String
```
Open .env file and edit:

VITE_MONGODB_URI=mongodb+srv://acem_admin:MyPass123@cluster0.abc12.mongodb.net/acem_db?retryWrites=true&w=majority
VITE_MONGODB_DB_NAME=acem_db

Replace the connection string with YOUR actual connection string!
```

### Step 5.3: Save the File
```
1. Save .env file (Ctrl+S or Cmd+S)
2. Make sure it's in the project root folder
3. File structure should look like:
   /workspace/app-9dfi9jpj51xd/
   ├── .env ← Your new file
   ├── .env.example
   ├── package.json
   ├── src/
   └── ...
```

---

## Part 6: Start Your Application

### Step 6.1: Open Terminal
```
1. Open terminal in your project folder
2. Or in VS Code: Terminal → New Terminal
```

### Step 6.2: Install Dependencies (if not done)
```bash
npm install
```

### Step 6.3: Start Development Server
```bash
npm run dev
```

### Step 6.4: Check Console Output
```
You should see:
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
✅ Application initialized successfully

VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### Step 6.5: Open Browser
```
1. Open browser
2. Go to: http://localhost:5173/
3. You should see your application!
```

---

## Part 7: Verify Database

### Step 7.1: Check MongoDB Atlas
```
1. Go back to MongoDB Atlas Dashboard
2. Click "Browse Collections" on your cluster
3. You should see database: acem_db
4. Click on it to expand
5. You should see collections:
   - events
   - committee
   - gallery
   - about_us
   - contact
   - admin_passkey
   - theme_settings
   - pages
   - page_sections
   - footer_settings
   - component_templates
   - images
```

### Step 7.2: Check Default Data
```
1. Click on "admin_passkey" collection
2. You should see one document with:
   passkey: "acemadmin@fusion"
   
3. Click on "theme_settings" collection
4. You should see theme configuration data

5. Click on "pages" collection
6. You should see 6 default pages:
   - Home
   - Events
   - Committee
   - Gallery
   - About Us
   - Contact Us
```

---

## Part 8: Test Admin Access

### Step 8.1: Open Chatbot
```
1. In your application (http://localhost:5173/)
2. Look for chatbot icon (bottom-right corner)
3. Click on it
```

### Step 8.2: Enter Passkey
```
1. Chatbot will ask for passkey
2. Type: acemadmin@fusion
3. Press Enter
4. Admin dashboard should open!
```

### Step 8.3: Test Admin Features
```
Try these:
1. Add a new event
2. Upload an image to gallery
3. Add a committee member
4. Update theme settings
5. Change contact information
```

---

## 🎉 Success!

You've successfully:
- ✅ Created MongoDB Atlas account
- ✅ Created free database cluster
- ✅ Configured security (user + network)
- ✅ Got connection string
- ✅ Configured application
- ✅ Started application
- ✅ Verified database
- ✅ Tested admin access

Your application is now fully connected to MongoDB Atlas!

---

## 🆘 Troubleshooting

### Problem: "Failed to connect to MongoDB Atlas"

**Check these:**
1. Is your connection string correct in .env file?
2. Did you replace <password> with actual password?
3. Did you add "acem_db" before the "?"?
4. Is your cluster running (green status in Atlas)?
5. Is 0.0.0.0/0 whitelisted in Network Access?

**Solution:**
```
1. Go to MongoDB Atlas
2. Database Access → Check user exists
3. Network Access → Check 0.0.0.0/0 is listed
4. Database → Check cluster is running
5. Copy connection string again
6. Update .env file
7. Restart application (Ctrl+C, then npm run dev)
```

### Problem: "Authentication failed"

**Solution:**
```
1. Go to MongoDB Atlas
2. Database Access
3. Click "Edit" on your user
4. Click "Edit Password"
5. Autogenerate new password
6. Copy new password
7. Update .env file with new password
8. Restart application
```

### Problem: "Cannot find .env file"

**Solution:**
```
1. Make sure .env is in project root
2. Not in src/ folder
3. File name is exactly: .env (not .env.txt)
4. Check file location:
   /workspace/app-9dfi9jpj51xd/.env
```

### Problem: "Application shows error page"

**Solution:**
```
1. Check browser console (F12)
2. Look for error messages
3. Check terminal for error messages
4. Verify .env file has correct values
5. Restart application
6. Clear browser cache (Ctrl+Shift+R)
```

---

## 📞 Need More Help?

1. Check MONGODB_QUICK_START.md for quick reference
2. Check MONGODB_SETUP_GUIDE.md for detailed guide
3. MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
4. MongoDB Support: https://www.mongodb.com/support

---

**You're all set!** 🚀 Happy coding!
