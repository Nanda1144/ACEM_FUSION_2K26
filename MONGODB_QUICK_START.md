# 🚀 Quick Start: MongoDB Atlas Setup

## ⚡ 5-Minute Setup Guide

### Step 1: Create MongoDB Atlas Account (2 minutes)
1. Visit: https://www.mongodb.com/cloud/atlas/register
2. Sign up with email or Google account
3. Verify your email

### Step 2: Create Free Cluster (1 minute)
1. Click **"Build a Database"**
2. Select **"M0 FREE"** tier
3. Choose your cloud provider (AWS recommended)
4. Select region closest to you
5. Click **"Create"** (wait 3-5 minutes for cluster creation)

### Step 3: Create Database User (1 minute)
1. Go to **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Username: `acem_admin`
4. Click **"Autogenerate Secure Password"** 
5. **IMPORTANT**: Copy and save this password!
6. Select **"Read and write to any database"**
7. Click **"Add User"**

### Step 4: Allow Network Access (30 seconds)
1. Go to **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### Step 5: Get Connection String (30 seconds)
1. Go to **"Database"** (left sidebar)
2. Click **"Connect"** button on your cluster
3. Select **"Connect your application"**
4. Copy the connection string
5. Replace `<password>` with your actual password
6. Add database name `acem_db` before the `?`

**Example:**
```
mongodb+srv://acem_admin:MyPassword123@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
```

### Step 6: Configure Application (30 seconds)
1. Create `.env` file in project root:
```bash
cp .env.example .env
```

2. Edit `.env` and add your connection string:
```env
VITE_MONGODB_URI=mongodb+srv://acem_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
VITE_MONGODB_DB_NAME=acem_db
```

3. Save the file

### Step 7: Start Application
```bash
npm run dev
```

## ✅ Verification

The application will automatically:
- ✅ Connect to MongoDB Atlas
- ✅ Create all required collections
- ✅ Insert default data (admin passkey, theme settings, etc.)
- ✅ Create database indexes

Check the browser console for:
```
✅ Connected to MongoDB Atlas
✅ Database indexes created
✅ Default admin passkey created
✅ Default theme settings created
✅ Database initialized successfully
✅ Application initialized successfully
```

## 🔐 Default Admin Credentials

**Passkey:** `acemadmin@fusion`

Use this to access the admin dashboard via the chatbot.

## 📊 MongoDB Atlas Dashboard

View your data:
1. Go to MongoDB Atlas Dashboard
2. Click **"Browse Collections"**
3. Select database: `acem_db`
4. You'll see collections:
   - `events` - Event data
   - `committee` - Committee members
   - `gallery` - Gallery images
   - `about_us` - About us content
   - `contact` - Contact information
   - `admin_passkey` - Admin authentication
   - `theme_settings` - Theme configuration
   - `pages` - Custom pages
   - `page_sections` - Page sections
   - `footer_settings` - Footer configuration
   - `component_templates` - Component templates
   - `images` - Uploaded images

## 🛠️ Troubleshooting

### Connection Error
**Problem:** "Failed to connect to MongoDB Atlas"

**Solutions:**
1. Check connection string is correct
2. Verify password doesn't have special characters (or URL encode them)
3. Ensure IP address 0.0.0.0/0 is whitelisted
4. Check cluster is running (green status in Atlas)
5. Verify database name is in connection string

### Authentication Error
**Problem:** "Authentication failed"

**Solutions:**
1. Verify username is `acem_admin`
2. Check password is correct
3. Ensure database user has "Read and write" permissions
4. Wait 1-2 minutes after creating user (propagation delay)

### Network Error
**Problem:** "Network timeout"

**Solutions:**
1. Check internet connection
2. Verify firewall isn't blocking MongoDB ports
3. Try different network (mobile hotspot)
4. Check MongoDB Atlas status page

## 🔒 Security Best Practices

### For Development
- ✅ Use 0.0.0.0/0 IP whitelist (convenient)
- ✅ Use strong password for database user
- ✅ Keep .env file in .gitignore

### For Production
- ✅ Whitelist specific IP addresses only
- ✅ Use environment variables (not .env file)
- ✅ Enable MongoDB Atlas encryption
- ✅ Set up automated backups
- ✅ Use MongoDB Atlas monitoring

## 📈 Free Tier Limits

**M0 FREE Cluster:**
- Storage: 512 MB
- RAM: Shared
- vCPU: Shared
- Connections: 500 max
- Perfect for: Development, small applications, testing

**Upgrade when:**
- Storage exceeds 400 MB
- Need dedicated resources
- Require automated backups
- Need advanced monitoring

## 🆘 Need Help?

1. **MongoDB Atlas Docs:** https://docs.atlas.mongodb.com/
2. **MongoDB Node.js Driver:** https://mongodb.github.io/node-mongodb-native/
3. **Connection String Format:** https://docs.mongodb.com/manual/reference/connection-string/
4. **MongoDB University (Free):** https://university.mongodb.com/

## 🎯 Next Steps

After successful setup:
1. ✅ Test admin login (chatbot with passkey)
2. ✅ Add events via admin dashboard
3. ✅ Upload committee member images
4. ✅ Add gallery images
5. ✅ Customize theme settings
6. ✅ Update contact information
7. ✅ Test event registration flow

## 💡 Pro Tips

1. **Backup Connection String:** Save it in a password manager
2. **Monitor Usage:** Check Atlas dashboard regularly
3. **Test Locally First:** Verify everything works before deploying
4. **Use Indexes:** Already created automatically for performance
5. **Regular Backups:** Export data periodically (free tier has no auto-backup)

---

**Ready to go!** 🚀 Your application is now connected to MongoDB Atlas and ready for use.
