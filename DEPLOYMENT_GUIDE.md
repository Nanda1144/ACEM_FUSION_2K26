# 🌐 COMPLETE DEPLOYMENT GUIDE - PUBLISH YOUR WEBSITE

## 📋 Overview

This guide covers deploying your Fusion26 website to make it accessible on the internet.

---

## 🎯 DEPLOYMENT OPTIONS

### Comparison Table

| Platform | Difficulty | Cost | Best For | Deploy Time |
|----------|-----------|------|----------|-------------|
| **Vercel** | ⭐ Easy | Free | React apps | 2 min |
| **Netlify** | ⭐ Easy | Free | Static sites | 3 min |
| **GitHub Pages** | ⭐⭐ Medium | Free | Open source | 5 min |
| **Railway** | ⭐⭐⭐ Hard | Free tier | Full-stack | 10 min |

### Recommended: Vercel (Easiest & Best)

---

## 🚀 OPTION 1: DEPLOY TO VERCEL (RECOMMENDED)

### Why Vercel?
- ✅ Easiest deployment
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deploy on Git push
- ✅ Free custom domain
- ✅ Excellent performance
- ✅ Built for React/Vite

### Prerequisites:
- GitHub account
- Code pushed to GitHub repository

---

### STEP-BY-STEP: VERCEL DEPLOYMENT

#### Step 1: Prepare Your Code

##### A. Create GitHub Repository (if not done)
1. Go to: https://github.com
2. Click "New repository"
3. Name: `fusion26-website`
4. Click "Create repository"

##### B. Push Code to GitHub
```bash
# In VS Code terminal
cd /workspace/app-9dfi9jpj51xd

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Fusion26 website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/fusion26-website.git

# Push
git push -u origin main
```

#### Step 2: Sign Up for Vercel
1. Go to: https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access GitHub

#### Step 3: Import Project
1. Click "Add New..." → "Project"
2. You'll see your GitHub repositories
3. Find "fusion26-website"
4. Click "Import"

#### Step 4: Configure Project

##### Framework Preset:
- Should auto-detect: **Vite**
- If not, select "Vite" from dropdown

##### Build Settings:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

##### Root Directory:
- Leave as `.` (root)

#### Step 5: Add Environment Variables

**IMPORTANT:** Add your Supabase credentials

Click "Environment Variables" section:

**For Supabase Version:**
```
Name: VITE_SUPABASE_URL
Value: https://xxxxx.supabase.co

Name: VITE_SUPABASE_ANON_KEY
Value: eyJhbGc...your-anon-key...
```

**For MongoDB Version:**
```
Name: VITE_API_URL
Value: https://your-backend-url.com/api

(You'll need to deploy backend separately)
```

#### Step 6: Deploy!
1. Click "Deploy"
2. Wait 2-3 minutes
3. You'll see build logs
4. Success! 🎉

#### Step 7: Access Your Website
- Vercel gives you a URL: `https://fusion26-website.vercel.app`
- Click "Visit" to see your live site!

#### Step 8: Test Admin Access
1. Open your live site
2. Click chatbot icon
3. Enter passkey: `acemadmin@fusion`
4. Verify admin dashboard works

---

### VERCEL: CUSTOM DOMAIN

#### Add Your Own Domain (Optional)

##### Step 1: Buy Domain
- Namecheap: https://namecheap.com
- GoDaddy: https://godaddy.com
- Google Domains: https://domains.google

##### Step 2: Add to Vercel
1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Enter your domain: `fusion26.com`
4. Click "Add"

##### Step 3: Configure DNS
Vercel will show you DNS records to add:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

##### Step 4: Add Records to Domain Provider
1. Go to your domain provider
2. Find DNS settings
3. Add the records Vercel showed
4. Save

##### Step 5: Wait for Propagation
- Takes 1-48 hours
- Usually works in 1-2 hours
- Vercel will auto-configure HTTPS

---

### VERCEL: AUTO-DEPLOY ON PUSH

#### How It Works:
1. You make changes locally
2. Commit and push to GitHub
3. Vercel automatically detects push
4. Builds and deploys new version
5. Live site updates in 2-3 minutes!

#### Example Workflow:
```bash
# Make changes in VS Code
# Save files

# Commit changes
git add .
git commit -m "Updated homepage design"
git push

# Vercel automatically deploys!
# Check deployment status on Vercel dashboard
```

---

## 🚀 OPTION 2: DEPLOY TO NETLIFY

### Step 1: Sign Up
1. Go to: https://netlify.com
2. Click "Sign up"
3. Choose "GitHub"
4. Authorize Netlify

### Step 2: New Site
1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Select your repository

### Step 3: Configure
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Branch**: `main`

### Step 4: Environment Variables
Click "Show advanced" → "New variable"

Add:
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

### Step 5: Deploy
1. Click "Deploy site"
2. Wait 2-3 minutes
3. Your site is live!

**URL**: `https://random-name-12345.netlify.app`

### Netlify: Custom Domain
1. Click "Domain settings"
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS instructions

---

## 🚀 OPTION 3: DEPLOY TO GITHUB PAGES

### Step 1: Update vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/fusion26-website/',  // Add this line (your repo name)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Step 2: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3: Add Deploy Script
Edit `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Configure GitHub Pages
1. Go to your GitHub repository
2. Click "Settings"
3. Click "Pages" (left sidebar)
4. Source: Select `gh-pages` branch
5. Click "Save"

**URL**: `https://YOUR_USERNAME.github.io/fusion26-website/`

### GitHub Pages: Custom Domain
1. Add file `public/CNAME` with your domain:
```
fusion26.com
```

2. In GitHub Settings → Pages:
   - Enter custom domain
   - Check "Enforce HTTPS"

3. Configure DNS at domain provider:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

---

## 🚀 OPTION 4: DEPLOY FULL-STACK (MongoDB Version)

### For MongoDB Version, You Need to Deploy:
1. **Backend** (Express server)
2. **Frontend** (React app)

### Backend Deployment Options:

#### Option A: Railway
1. Go to: https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables:
   ```
   MONGODB_URI=your-mongodb-connection-string
   PORT=5000
   ```
6. Railway gives you a URL: `https://your-app.railway.app`

#### Option B: Render
1. Go to: https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect repository
5. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
6. Add environment variables
7. Deploy

#### Option C: Heroku
1. Go to: https://heroku.com
2. Create account
3. Install Heroku CLI
4. Deploy:
```bash
heroku login
heroku create fusion26-backend
git push heroku main
heroku config:set MONGODB_URI=your-connection-string
```

### Frontend Deployment:
1. Deploy frontend to Vercel/Netlify (as above)
2. Update environment variable:
   ```
   VITE_API_URL=https://your-backend-url.railway.app/api
   ```
3. Redeploy frontend

---

## 🎯 RECOMMENDED ARCHITECTURE

### For Supabase Version (Simplest):
```
┌─────────────────┐
│  Vercel/Netlify │  ← Deploy frontend here
│  (React App)    │
└────────┬────────┘
         │
         ↓
┌────────────────┐
│  Supabase      │  ← Database (already hosted)
│  (Database)    │
└────────────────┘
```

**Steps:**
1. Setup Supabase (cloud-hosted)
2. Deploy frontend to Vercel
3. Done! ✅

### For MongoDB Version (Complex):
```
┌─────────────────┐
│  Vercel/Netlify │  ← Deploy frontend here
│  (React App)    │
└────────┬────────┘
         │
         ↓
┌────────────────┐
│  Railway/Render│  ← Deploy backend here
│  (Express API) │
└────────┬───────┘
         │
         ↓
┌────────────────┐
│  MongoDB Atlas │  ← Database (already hosted)
│  (Database)    │
└────────────────┘
```

**Steps:**
1. Deploy backend to Railway
2. Deploy frontend to Vercel
3. Connect them with environment variables
4. Done! ✅

---

## 📊 DEPLOYMENT CHECKLIST

### Pre-Deployment:
- [ ] Code works locally
- [ ] No errors in console
- [ ] Admin access works
- [ ] All features tested
- [ ] Environment variables ready
- [ ] Code pushed to GitHub

### Deployment:
- [ ] Platform account created
- [ ] Project imported
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] No build errors

### Post-Deployment:
- [ ] Website loads
- [ ] No console errors
- [ ] Admin access works
- [ ] All pages work
- [ ] Images load
- [ ] Forms work
- [ ] Mobile responsive
- [ ] HTTPS enabled

---

## 🐛 TROUBLESHOOTING DEPLOYMENT

### Build Fails

#### Error: "Module not found"
```bash
# Solution: Install missing package
npm install missing-package-name

# Commit and push
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push
```

#### Error: "Build command failed"
```bash
# Solution: Test build locally
npm run build

# Fix any errors shown
# Then commit and push
```

### Site Loads But Broken

#### Images Not Loading
- Check image paths are relative
- Check images are in `public/` folder
- Check `base` in vite.config.ts

#### API Calls Failing
- Check environment variables are set
- Check API URL is correct
- Check CORS is enabled on backend

#### Admin Access Not Working
- Check Supabase credentials
- Check backend is deployed (MongoDB version)
- Check environment variables

### Environment Variables Not Working

#### Vercel/Netlify:
1. Go to project settings
2. Click "Environment Variables"
3. Add/update variables
4. Redeploy (trigger new deployment)

#### Check Variables Are Used:
```typescript
// In code
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
```

---

## 🎯 QUICK START: FASTEST DEPLOYMENT

### 5-Minute Deployment (Supabase + Vercel):

```bash
# 1. Setup Supabase (5 min)
# - Create account
# - Create project
# - Run SQL script
# - Copy credentials

# 2. Update .env (1 min)
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...

# 3. Test locally (2 min)
npm run build
npm run preview

# 4. Push to GitHub (1 min)
git add .
git commit -m "Ready for deployment"
git push

# 5. Deploy to Vercel (2 min)
# - Sign up with GitHub
# - Import project
# - Add environment variables
# - Deploy

# Total: ~11 minutes to live website!
```

---

## 📚 POST-DEPLOYMENT

### Monitor Your Site:

#### Vercel Analytics:
- Go to project → Analytics
- See visitor stats
- Monitor performance

#### Google Analytics (Optional):
1. Create account: https://analytics.google.com
2. Get tracking ID
3. Add to your site
4. Track visitors

### Update Your Site:

#### Make Changes:
```bash
# 1. Edit code in VS Code
# 2. Test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "Updated feature X"
git push

# 4. Auto-deploys! (Vercel/Netlify)
# Check deployment status on dashboard
```

### Backup Your Data:

#### Supabase:
- Go to project → Database
- Click "Backups"
- Download backup

#### MongoDB Atlas:
- Go to cluster
- Click "..." → "Download"
- Save backup file

---

## ✅ SUCCESS CHECKLIST

### Your Website Is Live When:
- [ ] You can access it from any device
- [ ] HTTPS is enabled (🔒 in browser)
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Admin access works
- [ ] Forms submit successfully
- [ ] Mobile version works
- [ ] No console errors
- [ ] Fast loading speed

---

## 🎉 CONGRATULATIONS!

Your Fusion26 website is now live on the internet!

### Share Your Website:
- **URL**: `https://your-site.vercel.app`
- **Admin Passkey**: `acemadmin@fusion`

### Next Steps:
1. Share URL with team
2. Test all features
3. Add content via admin dashboard
4. Promote on social media
5. Monitor analytics

---

## 🆘 NEED HELP?

### Platform Support:
- **Vercel**: https://vercel.com/support
- **Netlify**: https://netlify.com/support
- **Supabase**: https://supabase.com/docs

### Common Issues:
- Check deployment logs
- Verify environment variables
- Test locally first
- Check browser console
- Review documentation

---

**Your website is live! Share it with the world!** 🌐🎉

**Admin Passkey:** `acemadmin@fusion`
