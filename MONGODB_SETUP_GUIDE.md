# MongoDB Atlas Integration Guide

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Verify your email address
4. Log in to MongoDB Atlas

## Step 2: Create a New Cluster

1. Click **"Build a Database"** or **"Create"**
2. Choose **"M0 FREE"** tier (perfect for development)
3. Select your preferred **Cloud Provider** (AWS, Google Cloud, or Azure)
4. Choose a **Region** closest to your users
5. Name your cluster (e.g., "acem-cluster")
6. Click **"Create Cluster"** (takes 3-5 minutes)

## Step 3: Configure Database Access

### Create Database User
1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter username: `acem_admin`
5. Click **"Autogenerate Secure Password"** (save this password!)
6. Under **"Database User Privileges"**, select **"Read and write to any database"**
7. Click **"Add User"**

**IMPORTANT**: Save your credentials:
```
Username: acem_admin
Password: [your-generated-password]
```

## Step 4: Configure Network Access

1. In the left sidebar, click **"Network Access"**
2. Click **"Add IP Address"**
3. For development, click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - For production, add specific IP addresses
4. Click **"Confirm"**

## Step 5: Get Your Connection String

1. Go to **"Database"** in the left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Driver: Node.js"** and **"Version: 5.5 or later"**
5. Copy the connection string (looks like this):
   ```
   mongodb+srv://acem_admin:<password>@acem-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<password>` with your actual password
7. Add database name before the `?`:
   ```
   mongodb+srv://acem_admin:YOUR_PASSWORD@acem-cluster.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
   ```

## Step 6: Create Database and Collections

1. Click **"Browse Collections"** on your cluster
2. Click **"Add My Own Data"**
3. Database name: `acem_db`
4. Collection name: `events`
5. Click **"Create"**

Repeat for other collections:
- `committee`
- `gallery`
- `about_us`
- `contact`
- `admin_passkey`
- `theme_settings`
- `pages`
- `page_sections`
- `footer_settings`
- `component_templates`

## Step 7: Environment Variables

Create a `.env` file in your project root:

```env
VITE_MONGODB_URI=mongodb+srv://acem_admin:YOUR_PASSWORD@acem-cluster.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
VITE_MONGODB_DB_NAME=acem_db
```

**SECURITY NOTE**: Never commit `.env` file to Git!

## Step 8: Install MongoDB Driver

Run this command in your terminal:
```bash
npm install mongodb
```

## Step 9: Code Integration

The code will be automatically updated to use MongoDB instead of Supabase.

## Step 10: Initialize Default Data

After the code is updated, the application will automatically:
1. Connect to MongoDB Atlas
2. Create necessary indexes
3. Insert default data (admin passkey, theme settings, etc.)

## Verification Steps

1. Go to MongoDB Atlas Dashboard
2. Click **"Browse Collections"**
3. You should see your database `acem_db` with all collections
4. Check that default data is inserted

## Troubleshooting

### Connection Issues
- Verify IP address is whitelisted (0.0.0.0/0 for development)
- Check username and password are correct
- Ensure connection string has database name

### Authentication Errors
- Verify database user has correct permissions
- Check password doesn't contain special characters that need URL encoding

### Network Errors
- Check your internet connection
- Verify MongoDB Atlas cluster is running (green status)

## MongoDB Atlas Features

### Free Tier Limits (M0)
- 512 MB storage
- Shared RAM
- Shared vCPU
- Perfect for development and small applications

### Monitoring
- Go to **"Metrics"** tab to see:
  - Database operations
  - Network traffic
  - Storage usage

### Backup (Paid Feature)
- Automatic backups available in paid tiers
- For free tier, export data manually

## Next Steps

After integration:
1. Test all CRUD operations (Create, Read, Update, Delete)
2. Verify image uploads work
3. Test admin dashboard functionality
4. Check event registration flow
5. Verify all pages load correctly

## Support Resources

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [MongoDB Node.js Driver Docs](https://mongodb.github.io/node-mongodb-native/)
- [Connection String Format](https://docs.mongodb.com/manual/reference/connection-string/)

---

**Ready to proceed?** Once you have your MongoDB connection string, I'll update the code automatically!
