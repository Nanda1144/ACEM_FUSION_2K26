# 🔑 ADMIN ACCESS - QUICK GUIDE

## Admin Passkey
```
acemadmin@fusion
```

---

## 🚀 How to Access Admin Dashboard

### Step 1: Start the Application
```bash
npm run dev:full
```

Wait for both servers to start:
- Backend: http://localhost:5000
- Frontend: http://localhost:5173

### Step 2: Open the Website
```
http://localhost:5173
```

### Step 3: Click the Chatbot Icon
- Look at the **bottom-right corner** of the page
- You'll see a **blue circular button** with a chat icon
- Click it

### Step 4: Enter the Passkey
- A dialog box will appear
- Type: **`acemadmin@fusion`**
- Click **"Submit"**

### Step 5: Admin Dashboard Opens
- You'll see a success message
- The admin dashboard will open
- You can now manage all content!

---

## 📊 What You Can Do in Admin Dashboard

### Event Management
- ✅ Add new events (Technical/Cultural)
- ✅ Edit existing events
- ✅ Delete events
- ✅ Add coordinator details
- ✅ Set registration links

### Committee Management
- ✅ Add committee members
- ✅ Upload member photos
- ✅ Assign roles
- ✅ Edit member details
- ✅ Delete members

### Gallery Management
- ✅ Upload images
- ✅ Delete images
- ✅ Images appear on public gallery

### Content Management
- ✅ Edit About Us content
- ✅ Update contact information
- ✅ Update social media links
- ✅ Customize theme colors
- ✅ Change header settings

### Security
- ✅ Change admin passkey
- ✅ Logout from admin dashboard

---

## 🧪 Quick Test

### Test 1: Verify Backend is Running
```bash
curl http://localhost:5000/api/health
```
**Expected:** `{"status":"ok","message":"Server is running"}`

### Test 2: Verify Passkey Works
```bash
curl -X POST http://localhost:5000/api/passkey/verify \
  -H "Content-Type: application/json" \
  -d '{"passkey":"acemadmin@fusion"}'
```
**Expected:** `{"valid":true}`

### Test 3: Check Database
```bash
npm run diagnostic
```
**Expected:** All checks pass ✅

---

## 🎯 Visual Guide

```
┌─────────────────────────────────────┐
│                                     │
│         FUSION26 WEBSITE            │
│                                     │
│  [Home] [Events] [Committee]       │
│  [Gallery] [About] [Contact]       │
│                                     │
│                                     │
│         Website Content             │
│                                     │
│                                     │
│                                     │
│                              ┌────┐ │
│                              │ 💬 │ ← Click this chatbot icon
│                              └────┘ │
└─────────────────────────────────────┘

After clicking chatbot:

┌──────────────────────┐
│  Admin Access        │
├──────────────────────┤
│                      │
│ Enter your admin     │
│ passkey to access    │
│ the dashboard        │
│                      │
│ ┌──────────────────┐ │
│ │ acemadmin@fusion │ │ ← Type passkey here
│ └──────────────────┘ │
│                      │
│ [Submit]             │ ← Click Submit
│                      │
└──────────────────────┘

After submitting:

┌─────────────────────────────────────┐
│  ADMIN DASHBOARD                    │
├─────────────────────────────────────┤
│                                     │
│  [Events] [Committee] [Gallery]    │
│  [About] [Contact] [Theme]         │
│  [Passkey] [Logout]                │
│                                     │
│  Manage all your content here!     │
│                                     │
└─────────────────────────────────────┘
```

---

## 🔧 Troubleshooting

### Can't see chatbot icon?
- Refresh the page (Ctrl+R)
- Check browser console for errors (F12)
- Ensure frontend is running on port 5173

### "Invalid passkey" error?
- Make sure you typed: `acemadmin@fusion`
- Check for extra spaces
- Copy-paste from this guide

### Backend not responding?
```bash
# Check if backend is running
curl http://localhost:5000/api/health

# If not, start it
npm run server
```

### Need to reset passkey?
```bash
# Run diagnostic
npm run diagnostic

# It will show current passkey
# Or create default if missing
```

---

## 📝 Important Notes

1. **Passkey is case-sensitive:** Must be exactly `acemadmin@fusion`
2. **Both servers must be running:** Backend (5000) and Frontend (5173)
3. **MongoDB must be configured:** Check .env file has connection string
4. **First time setup:** Backend creates default passkey automatically

---

## ✅ Success Checklist

- [ ] Backend running (port 5000)
- [ ] Frontend running (port 5173)
- [ ] MongoDB connected
- [ ] Opened http://localhost:5173
- [ ] Clicked chatbot icon (bottom-right)
- [ ] Entered passkey: `acemadmin@fusion`
- [ ] Clicked Submit
- [ ] Admin dashboard opened
- [ ] Can see admin controls

---

## 🎉 You're In!

Once you see the admin dashboard, you can:
- Add events for your college fest
- Upload committee member photos
- Add gallery images
- Edit content
- Customize theme
- Manage everything!

**Default Passkey:** `acemadmin@fusion`

**Remember:** You can change this passkey from the admin dashboard for security.

---

**Need more help?** See ADMIN_ACCESS_GUIDE.md for detailed instructions.
