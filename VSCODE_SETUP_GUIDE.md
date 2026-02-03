# 💻 VS CODE COMPLETE SETUP GUIDE

## 📋 Prerequisites

- VS Code installed (Download from: https://code.visualstudio.com/)
- Node.js installed (v16 or higher)
- Git installed (optional but recommended)

---

## 🚀 STEP-BY-STEP SETUP

### Step 1: Open Project in VS Code

#### Method A: From Terminal
```bash
# Navigate to project directory
cd /workspace/app-9dfi9jpj51xd

# Open in VS Code
code .
```

#### Method B: From VS Code
1. Open VS Code
2. Click `File` → `Open Folder`
3. Navigate to `/workspace/app-9dfi9jpj51xd`
4. Click `Select Folder`

### Step 2: Install Recommended Extensions

#### Essential Extensions:
1. **ES7+ React/Redux/React-Native snippets**
   - Publisher: dsznajder
   - Provides React code snippets

2. **Tailwind CSS IntelliSense**
   - Publisher: Tailwind Labs
   - Auto-completion for Tailwind classes

3. **TypeScript Vue Plugin (Volar)**
   - Publisher: Vue
   - Better TypeScript support

4. **Prettier - Code formatter**
   - Publisher: Prettier
   - Auto-format code

5. **ESLint**
   - Publisher: Microsoft
   - Code linting

#### How to Install:
1. Click Extensions icon (Ctrl+Shift+X)
2. Search for extension name
3. Click "Install"
4. Repeat for all extensions

### Step 3: Configure VS Code Settings

#### Create Settings File:
1. Press `Ctrl+Shift+P` (Cmd+Shift+P on Mac)
2. Type "Preferences: Open Settings (JSON)"
3. Press Enter

#### Add These Settings:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### Step 4: Open Integrated Terminal

#### Open Terminal:
- Press `Ctrl+` ` (backtick)
- Or: `View` → `Terminal`

#### You should see:
```bash
user@machine:/workspace/app-9dfi9jpj51xd$
```

### Step 5: Install Dependencies

```bash
npm install
```

**Wait for installation to complete** (2-3 minutes)

You should see:
```
added 500+ packages in 2m
```

### Step 6: Start Development Server

#### For Current MongoDB Version:
```bash
npm run dev:full
```

This starts:
- Backend server on port 5000
- Frontend server on port 5173

#### For Supabase Version (after conversion):
```bash
npm run dev
```

This starts:
- Frontend server on port 5173 only

### Step 7: Open in Browser

#### Automatic:
- VS Code may show a popup: "Open in Browser"
- Click it

#### Manual:
- Open browser
- Go to: `http://localhost:5173`

#### From Terminal:
- `Ctrl+Click` (or `Cmd+Click`) on the URL in terminal

---

## 🎯 VS CODE WORKSPACE LAYOUT

### Recommended Layout:

```
┌─────────────────────────────────────────────┐
│  File Explorer  │  Editor                   │
│                 │                           │
│  📁 src         │  import { ... }           │
│    📁 components│  export default ...       │
│    📁 pages     │                           │
│    📁 db        │  [Your code here]         │
│    📄 App.tsx   │                           │
│                 │                           │
│  📁 server      │                           │
│  📄 package.json│                           │
│                 │                           │
├─────────────────┴───────────────────────────┤
│  Terminal                                   │
│  $ npm run dev:full                         │
│  ✓ Backend running on port 5000            │
│  ✓ Frontend running on port 5173           │
└─────────────────────────────────────────────┘
```

### How to Arrange:
1. **File Explorer**: Already visible on left
2. **Editor**: Center area (opens when you click files)
3. **Terminal**: Press `Ctrl+` ` to toggle

---

## 📁 PROJECT STRUCTURE IN VS CODE

### Key Folders:

```
app-9dfi9jpj51xd/
├── 📁 src/                    # Frontend source code
│   ├── 📁 components/         # React components
│   │   ├── Chatbot.tsx       # Enhanced chatbot
│   │   ├── AdminDashboard.tsx
│   │   ├── Events.tsx
│   │   ├── Committee.tsx
│   │   ├── Gallery.tsx
│   │   └── ui/               # shadcn/ui components
│   ├── 📁 pages/             # Page components
│   │   └── HomePage.tsx
│   ├── 📁 db/                # Database/API layer
│   │   └── api.ts
│   ├── 📁 lib/               # Utilities
│   ├── 📁 hooks/             # Custom React hooks
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── 📁 server/                # Backend (MongoDB version)
│   └── index.js              # Express server
├── 📁 public/                # Static assets
├── 📄 package.json           # Dependencies
├── 📄 tsconfig.json          # TypeScript config
├── 📄 vite.config.ts         # Vite config
├── 📄 tailwind.config.js     # Tailwind config
├── 📄 .env                   # Environment variables
└── 📄 README.md              # Documentation
```

### Files to Edit Frequently:
- `src/components/*.tsx` - UI components
- `src/pages/*.tsx` - Page layouts
- `src/db/api.ts` - API calls
- `src/index.css` - Styles
- `.env` - Configuration

---

## ⌨️ USEFUL VS CODE SHORTCUTS

### General:
- `Ctrl+P` - Quick file open
- `Ctrl+Shift+P` - Command palette
- `Ctrl+B` - Toggle sidebar
- `Ctrl+` ` - Toggle terminal
- `Ctrl+W` - Close current tab
- `Ctrl+Shift+T` - Reopen closed tab

### Editing:
- `Ctrl+D` - Select next occurrence
- `Ctrl+Shift+L` - Select all occurrences
- `Alt+Up/Down` - Move line up/down
- `Ctrl+/` - Toggle comment
- `Ctrl+Space` - Trigger suggestions
- `F2` - Rename symbol

### Navigation:
- `Ctrl+Click` - Go to definition
- `Alt+Left/Right` - Navigate back/forward
- `Ctrl+Shift+O` - Go to symbol
- `Ctrl+G` - Go to line

### Terminal:
- `Ctrl+C` - Stop running process
- `Ctrl+L` - Clear terminal
- `Ctrl+Shift+` ` - New terminal

---

## 🔧 DEVELOPMENT WORKFLOW IN VS CODE

### Daily Workflow:

#### 1. Open Project
```bash
code /workspace/app-9dfi9jpj51xd
```

#### 2. Start Servers
```bash
# In terminal (Ctrl+`)
npm run dev:full
```

#### 3. Make Changes
- Edit files in `src/`
- Save (Ctrl+S)
- Browser auto-reloads

#### 4. Test Changes
- Open `http://localhost:5173`
- Test functionality
- Check browser console (F12)

#### 5. Check for Errors
- Look at terminal for backend errors
- Look at browser console for frontend errors
- VS Code shows TypeScript errors inline

#### 6. Format Code
- Save file (auto-formats if configured)
- Or: Right-click → Format Document
- Or: `Shift+Alt+F`

#### 7. Commit Changes (if using Git)
```bash
git add .
git commit -m "Description of changes"
git push
```

---

## 🐛 DEBUGGING IN VS CODE

### View Errors:

#### TypeScript Errors:
- Red squiggly lines in editor
- Hover over them to see error
- Click "Problems" tab at bottom

#### Runtime Errors:
- Check terminal for backend errors
- Check browser console (F12) for frontend errors

### Debug Console:

#### Add Console Logs:
```typescript
console.log('Debug info:', variable);
```

#### View Logs:
- Backend logs: VS Code terminal
- Frontend logs: Browser console (F12)

### Breakpoints:
1. Click left of line number (red dot appears)
2. Run debugger (F5)
3. Code pauses at breakpoint
4. Inspect variables

---

## 📦 PACKAGE MANAGEMENT IN VS CODE

### Install New Package:
```bash
npm install package-name
```

### Remove Package:
```bash
npm uninstall package-name
```

### Update Packages:
```bash
npm update
```

### Check for Outdated:
```bash
npm outdated
```

---

## 🎨 CUSTOMIZING VS CODE

### Color Theme:
1. `Ctrl+K` then `Ctrl+T`
2. Choose theme
3. Recommended: "Dark+ (default dark)"

### Font Size:
1. `Ctrl+,` (Settings)
2. Search "font size"
3. Change "Editor: Font Size"

### Icon Theme:
1. `Ctrl+Shift+P`
2. Type "File Icon Theme"
3. Choose theme
4. Recommended: "Material Icon Theme"

---

## 🚀 RUNNING DIFFERENT COMMANDS

### Development:
```bash
# Start both servers (MongoDB version)
npm run dev:full

# Start frontend only (Supabase version)
npm run dev

# Start backend only
npm run server

# Start frontend only
npm run client
```

### Testing:
```bash
# Run diagnostic
npm run diagnostic

# Test backend
npm run test:backend

# Check code quality
npm run lint
```

### Building:
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 MONITORING IN VS CODE

### Watch for Changes:
- Files auto-save (if configured)
- Vite auto-reloads browser
- TypeScript auto-checks code

### Terminal Output:
```
Backend Terminal:
✅ Connected to MongoDB Atlas
🚀 Server running on http://localhost:5000

Frontend Terminal:
VITE v5.x.x  ready in 500 ms
➜  Local:   http://localhost:5173/
```

### Status Bar (Bottom):
- Shows current Git branch
- Shows TypeScript version
- Shows errors/warnings count
- Shows line/column number

---

## 🔍 SEARCH AND REPLACE

### Search in Files:
1. `Ctrl+Shift+F`
2. Type search term
3. See all occurrences

### Replace in Files:
1. `Ctrl+Shift+H`
2. Type search term
3. Type replacement
4. Click "Replace All"

### Search in Current File:
1. `Ctrl+F`
2. Type search term
3. Use arrows to navigate

---

## 📝 CODE SNIPPETS

### React Component:
Type `rafce` then Tab:
```typescript
import React from 'react'

const ComponentName = () => {
  return (
    <div>ComponentName</div>
  )
}

export default ComponentName
```

### useState:
Type `useState` then Tab:
```typescript
const [state, setState] = useState(initialValue)
```

### useEffect:
Type `useEffect` then Tab:
```typescript
useEffect(() => {
  // effect
  return () => {
    // cleanup
  }
}, [dependencies])
```

---

## 🎯 PRODUCTIVITY TIPS

### 1. Multi-Cursor Editing
- `Alt+Click` - Add cursor
- `Ctrl+Alt+Up/Down` - Add cursor above/below
- Type to edit all at once

### 2. Quick File Switching
- `Ctrl+P` - Type filename
- Start typing, press Enter

### 3. Split Editor
- `Ctrl+\` - Split editor
- View multiple files side-by-side

### 4. Zen Mode
- `Ctrl+K` then `Z`
- Distraction-free coding
- Press `Esc` twice to exit

### 5. Command Palette
- `Ctrl+Shift+P`
- Access all VS Code commands
- Type what you want to do

---

## ✅ CHECKLIST: VS CODE SETUP COMPLETE

- [ ] VS Code installed
- [ ] Project opened in VS Code
- [ ] Extensions installed
- [ ] Settings configured
- [ ] Terminal opened
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev:full`)
- [ ] Browser opened to `http://localhost:5173`
- [ ] Can see website
- [ ] Can edit files and see changes
- [ ] No errors in terminal or browser console

---

## 🆘 TROUBLESHOOTING

### VS Code Won't Open Project
```bash
# Try from terminal
cd /workspace/app-9dfi9jpj51xd
code .
```

### Terminal Not Working
- Press `Ctrl+` ` to toggle
- Or: View → Terminal
- Or: Ctrl+Shift+P → "Terminal: Create New Terminal"

### Extensions Not Working
- Reload VS Code: Ctrl+Shift+P → "Reload Window"
- Reinstall extension
- Check extension is enabled

### Auto-Format Not Working
- Check Prettier is installed
- Check settings.json has formatOnSave
- Try manual format: Shift+Alt+F

### TypeScript Errors Everywhere
- Run: `npm install`
- Reload VS Code
- Check tsconfig.json exists

---

## 📚 ADDITIONAL RESOURCES

### VS Code Documentation:
- https://code.visualstudio.com/docs

### Keyboard Shortcuts:
- Help → Keyboard Shortcuts Reference
- Or: `Ctrl+K` then `Ctrl+R`

### VS Code Tips:
- https://code.visualstudio.com/docs/getstarted/tips-and-tricks

---

**You're all set! Happy coding in VS Code!** 🎉

**Next Steps:**
1. Follow SUPABASE_MIGRATION_GUIDE.md to convert to Supabase
2. Or continue with current MongoDB setup
3. Deploy when ready!
