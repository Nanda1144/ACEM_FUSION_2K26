# ✅ QUICK FIX CHECKLIST

## 🎯 Follow These Steps in Order

### □ STEP 1: Fix Policies (5 min)
```
1. Open Supabase → SQL Editor
2. Copy policy script from COMPLETE_FIX_GUIDE.md
3. Paste and click "Run"
4. See "Success" message
5. Check Authentication → Policies (should see 7 policies)
```

### □ STEP 2: Switch API (3 min)
```bash
cd /workspace/app-9dfi9jpj51xd
mv src/db/api.ts src/db/api.mongodb.ts
mv src/db/api.supabase.ts src/db/api.ts
npm install @supabase/supabase-js
```

### □ STEP 3: Update .env (2 min)
```
1. Open .env in VS Code
2. Replace with:
   VITE_SUPABASE_URL=your-url
   VITE_SUPABASE_ANON_KEY=your-key
3. Get credentials from Supabase Settings → API
4. Save file (Ctrl+S)
```

### □ STEP 4: Start App (1 min)
```bash
npm run dev
```

### □ STEP 5: Test (2 min)
```
1. Open http://localhost:5173
2. Press F12 - check no errors
3. Click chatbot
4. Enter: acemadmin@fusion
5. Should work!
```

---

## ✅ SUCCESS = All Green

- ✅ Policies visible in Supabase
- ✅ Files renamed correctly
- ✅ .env has Supabase credentials
- ✅ npm run dev starts successfully
- ✅ No console errors
- ✅ Chatbot works
- ✅ Admin access works

---

## 📚 Detailed Guides

- **COMPLETE_FIX_GUIDE.md** - Full instructions
- **FIX_SUPABASE_POLICIES.md** - Policy fix details
- **SWITCH_TO_SUPABASE.md** - API switch details

---

**Total Time: ~13 minutes** ⏱️
