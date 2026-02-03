# 🎓 FUSION26 - College Fest Website

A cinematic, immersive web application for college fest management with MongoDB Atlas integration and secure admin dashboard.

---

## ✨ Features

### Public Features
- 🎨 Cinematic homepage with parallax scrolling
- 📅 Events section (Technical/Cultural categories)
- 👥 Committee member showcase
- 🖼️ Image gallery with lazy loading
- 📖 About us section
- 📞 Contact section with social links
- 📱 Fully responsive design
- 🌙 Dark theme with neon accents

### Admin Features
- 🔐 Secure chatbot authentication
- ✏️ Event management (add, edit, delete)
- 👤 Committee management
- 📸 Gallery management
- 📝 Content editing
- 🎨 Theme customization
- 🔑 Passkey management

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (free tier)
- 10 minutes of time

### 1. Clone and Install
```bash
cd /workspace/app-9dfi9jpj51xd
npm install
```

### 2. Setup MongoDB Atlas
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create M0 FREE cluster
3. Create database user: `acem_admin`
4. Whitelist IP: `0.0.0.0/0`
5. Get connection string

### 3. Configure Environment
```bash
cp .env.example .env
```

Edit `.env`:
```env
MONGODB_URI=mongodb+srv://acem_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/acem_db?retryWrites=true&w=majority
VITE_API_URL=http://localhost:5000/api
PORT=5000
```

### 4. Start Application
```bash
npm run dev:full
```

### 5. Access Admin Dashboard
1. Open http://localhost:5173
2. Click chatbot icon (bottom-right)
3. Enter passkey: **`acemadmin@fusion`**
4. Admin dashboard opens!

---

## 🔑 Admin Access

### Default Credentials
```
Passkey: acemadmin@fusion
```

### How to Access
1. Click the chatbot icon (💬) in the bottom-right corner
2. Enter the passkey
3. Click Submit
4. Admin dashboard opens

**See ADMIN_PASSKEY.md for detailed visual guide**

---

## 🛠️ Available Commands

```bash
# Start both frontend and backend
npm run dev:full

# Start backend only
npm run server

# Start frontend only
npm run client

# Run database diagnostic
npm run diagnostic

# Test backend API
npm run test:backend

# Automated start script
./start.sh

# Check code quality
npm run lint
```

---

## 📁 Project Structure

```
/workspace/app-9dfi9jpj51xd/
├── server/
│   └── index.js              # Express backend
├── src/
│   ├── components/           # React components
│   │   ├── Chatbot.tsx       # Admin authentication
│   │   ├── AdminDashboard.tsx
│   │   ├── Events.tsx
│   │   ├── Committee.tsx
│   │   ├── Gallery.tsx
│   │   └── ...
│   ├── db/
│   │   └── api.ts            # API client
│   └── pages/
│       └── HomePage.tsx      # Main page
├── .env                      # Configuration (create this)
├── .env.example              # Template
├── package.json              # Dependencies
└── Documentation/
    ├── ADMIN_PASSKEY.md      # Admin access guide ⭐
    ├── ADMIN_ACCESS_GUIDE.md # Complete guide
    ├── SETUP_SUMMARY.md      # Project overview
    └── ...
```

---

## 🏗️ Architecture

```
React Frontend (Port 5173)
    ↓ HTTP REST API
Express Backend (Port 5000)
    ↓ MongoDB Driver
MongoDB Atlas (Cloud)
```

---

## 📊 Database Collections

- **events** - Event data
- **committee** - Committee members
- **gallery** - Gallery images
- **about_us** - About content
- **contact** - Contact info
- **admin_passkey** - Authentication
- **theme_settings** - Theme config
- **pages** - Custom pages
- **footer_settings** - Footer config
- **component_templates** - Templates
- **images** - Uploaded images

---

## 🧪 Testing

### Quick Health Check
```bash
curl http://localhost:5000/api/health
```

### Test Passkey Verification
```bash
curl -X POST http://localhost:5000/api/passkey/verify \
  -H "Content-Type: application/json" \
  -d '{"passkey":"acemadmin@fusion"}'
```

### Run Full Diagnostic
```bash
npm run diagnostic
```

### Test All Endpoints
```bash
npm run test:backend
```

---

## 🐛 Troubleshooting

### Backend not running?
```bash
npm run server
```

### Frontend not loading?
```bash
npm run client
```

### MongoDB connection error?
```bash
# Check .env file
cat .env | grep MONGODB_URI

# Run diagnostic
npm run diagnostic
```

### Can't access admin?
```bash
# Verify passkey
npm run diagnostic

# Test backend
npm run test:backend
```

**See ADMIN_ACCESS_FIX.md for detailed troubleshooting**

---

## 📚 Documentation

### Getting Started
- **README.md** (this file) - Overview and quick start
- **ADMIN_PASSKEY.md** - Admin access guide with visuals ⭐
- **SETUP_SUMMARY.md** - Complete project overview

### Setup Guides
- **ADMIN_ACCESS_GUIDE.md** - Complete admin access guide
- **MONGODB_QUICK_START.md** - 5-minute MongoDB setup
- **MONGODB_STEP_BY_STEP.md** - Detailed instructions

### Technical
- **MONGODB_ARCHITECTURE.md** - Architecture details
- **ERROR_FIXED.md** - Error resolution
- **ADMIN_ACCESS_FIX.md** - Troubleshooting

### Reference
- **QUICK_REFERENCE.md** - One-page command reference
- **README_COMPLETE.md** - Comprehensive guide

---

## 🔐 Security

### Development
- Admin passkey: `acemadmin@fusion`
- IP whitelist: `0.0.0.0/0` (all IPs)
- CORS enabled for localhost

### Production
- Change default passkey
- Whitelist specific IPs only
- Enable HTTPS
- Use environment variables
- Enable rate limiting

---

## 🎯 Default Data

### Admin Credentials
```
Passkey: acemadmin@fusion
```

### Theme
- Header: "ACEM"
- Primary color: #00D9FF (cyan)
- Background: #0A0F1E (dark blue)

### Pages
- Home, Events, Committee, Gallery, About Us, Contact Us

---

## 💡 Tips

1. **Use automated start:** `./start.sh`
2. **Run diagnostics:** `npm run diagnostic`
3. **Test backend:** `npm run test:backend`
4. **Check logs:** Backend console shows all operations
5. **Use DevTools:** Browser console for frontend debugging
6. **Monitor MongoDB:** Check Atlas dashboard
7. **Backup data:** Export from MongoDB Atlas regularly

---

## 🆘 Need Help?

### Quick Checks
```bash
# Is backend running?
curl http://localhost:5000/api/health

# Is passkey correct?
npm run diagnostic

# Are all endpoints working?
npm run test:backend
```

### Documentation
- **ADMIN_PASSKEY.md** - Visual guide to admin access
- **ADMIN_ACCESS_GUIDE.md** - Complete troubleshooting
- **QUICK_REFERENCE.md** - Command reference

### Support Resources
- MongoDB Atlas: https://docs.atlas.mongodb.com/
- Express.js: https://expressjs.com/
- React: https://react.dev/

---

## 📝 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, Motion (Framer Motion)
- **UI Components:** shadcn/ui, Radix UI

---

## ✅ Success Indicators

When everything is working:

✅ Backend console shows:
```
✅ Connected to MongoDB Atlas
✅ Database initialized successfully
🚀 Server running on http://localhost:5000
```

✅ Diagnostic shows:
```
✅ MONGODB_URI found
✅ Successfully connected to MongoDB Atlas
✅ Admin passkey found
✅ Default passkey is correct!
```

✅ Frontend:
- Application loads at http://localhost:5173
- Chatbot icon visible (bottom-right)
- Can enter passkey and access admin dashboard

---

## 🎉 You're Ready!

Your Fusion26 college fest website is fully configured and ready to use!

**To get started:**
1. Setup MongoDB Atlas (5 min)
2. Configure .env file (1 min)
3. Run `npm run dev:full` (1 min)
4. Access admin: Click chatbot → Enter `acemadmin@fusion`
5. Start managing your fest!

**Admin Passkey:** `acemadmin@fusion`

---

## 📄 License

Copyright © 2026 ACEM. All rights reserved.

---

## 🙏 Acknowledgments

Built with modern web technologies for an amazing college fest experience.

---

**For detailed admin access instructions, see ADMIN_PASSKEY.md** ⭐
