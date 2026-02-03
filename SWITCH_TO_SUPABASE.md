# 🔄 SWITCH TO SUPABASE API

## Current Situation

Your project has TWO API files:
1. **src/db/api.ts** - MongoDB version (currently active)
2. **src/db/api.supabase.ts** - Supabase version (not active)

We need to switch to the Supabase version!

---

## 🚀 QUICK SWITCH (2 minutes)

### Option A: Rename Files (Recommended)

```bash
# In your terminal (VS Code or system terminal)
cd /workspace/app-9dfi9jpj51xd

# Backup MongoDB version
mv src/db/api.ts src/db/api.mongodb.ts

# Activate Supabase version
mv src/db/api.supabase.ts src/db/api.ts
```

### Option B: Manual in VS Code

1. Open VS Code
2. Go to `src/db/` folder
3. Rename `api.ts` to `api.mongodb.ts`
4. Rename `api.supabase.ts` to `api.ts`

---

## 📝 UPDATE ENVIRONMENT VARIABLES

### Step 1: Open .env file

### Step 2: Replace MongoDB variables with Supabase

**Remove these:**
```env
MONGODB_URI=...
VITE_API_URL=http://localhost:5000/api
PORT=5000
```

**Add these:**
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...your-anon-key...
```

Replace with YOUR actual Supabase credentials!

---

## 🔧 INSTALL SUPABASE CLIENT

```bash
npm install @supabase/supabase-js
```

---

## 🗑️ REMOVE EXPRESS BACKEND (Optional)

Since you're using Supabase, you don't need the Express server anymore!

```bash
# Remove server directory
rm -rf server/

# Remove MongoDB dependencies
npm uninstall mongodb express cors dotenv nodemon concurrently
```

---

## 📦 UPDATE PACKAGE.JSON SCRIPTS

### Open package.json

### Replace scripts section:

**Old (MongoDB):**
```json
"scripts": {
  "dev": "echo 'Do not use this command, only use lint to check'",
  "dev:full": "concurrently \"npm run server\" \"npm run client\"",
  "client": "vite",
  "server": "nodemon server/index.js",
  "diagnostic": "node diagnostic.js",
  "test:backend": "./test-backend.sh",
  "start:all": "./start.sh",
  "build": "echo 'Do not use this command, only use lint to check'",
  "lint": "..."
}
```

**New (Supabase):**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "tsgo -p tsconfig.check.json; npx biome lint; .rules/check.sh;npx tailwindcss -i ./src/index.css -o /dev/null 2>&1 | grep -E '^(CssSyntaxError|Error):.*' || true;.rules/testBuild.sh"
}
```

---

## ✅ VERIFICATION

### Step 1: Check Files

```bash
# Should exist
ls src/db/api.ts

# Should exist
ls src/db/supabase.ts

# Should NOT exist (renamed)
ls src/db/api.supabase.ts
```

### Step 2: Check .env

```bash
cat .env | grep SUPABASE
```

Should show:
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

### Step 3: Start Development

```bash
npm run dev
```

Should start on port 5173 (no backend server needed!)

---

## 🧪 TEST EVERYTHING

### Test 1: Application Loads
- Open http://localhost:5173
- No console errors
- Page loads correctly

### Test 2: Chatbot Works
- Click chatbot icon
- Dialog opens
- Can type messages

### Test 3: Admin Access
- Click "Admin Access" in chatbot
- Enter: `acemadmin@fusion`
- Admin dashboard opens

### Test 4: Data Operations
- Try adding an event
- Try uploading an image
- Try editing content

---

## 🐛 COMMON ISSUES

### Error: "Cannot find module '@supabase/supabase-js'"
**Solution:**
```bash
npm install @supabase/supabase-js
```

### Error: "supabase is not defined"
**Solution:** Check .env has correct Supabase credentials

### Error: "Failed to fetch"
**Solution:** 
1. Check Supabase project is running
2. Check credentials are correct
3. Run the policy fix script

### Application won't start
**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📊 BEFORE vs AFTER

### Before (MongoDB):
```
┌─────────────┐
│  Frontend   │ → http://localhost:5173
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Backend    │ → http://localhost:5000
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  MongoDB    │ → Cloud
└─────────────┘

Need to run: npm run dev:full
Two servers running
```

### After (Supabase):
```
┌─────────────┐
│  Frontend   │ → http://localhost:5173
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Supabase   │ → Cloud (API + Database)
└─────────────┘

Need to run: npm run dev
One server only!
```

---

## ✅ CHECKLIST

Complete these steps:

- [ ] Rename api.ts to api.mongodb.ts
- [ ] Rename api.supabase.ts to api.ts
- [ ] Update .env with Supabase credentials
- [ ] Install @supabase/supabase-js
- [ ] Update package.json scripts
- [ ] Remove server/ directory (optional)
- [ ] Run npm install
- [ ] Run npm run dev
- [ ] Test application
- [ ] Test admin access
- [ ] No console errors

---

## 🎯 QUICK COMMANDS

Run these in order:

```bash
# 1. Switch API files
cd /workspace/app-9dfi9jpj51xd
mv src/db/api.ts src/db/api.mongodb.ts
mv src/db/api.supabase.ts src/db/api.ts

# 2. Install Supabase
npm install @supabase/supabase-js

# 3. Update .env (do this manually in editor)
# Add your Supabase credentials

# 4. Start development
npm run dev

# 5. Open browser
# http://localhost:5173
```

---

**Follow these steps and your app will use Supabase!** 🚀

**After switching, run the policy fix if you see errors!**
