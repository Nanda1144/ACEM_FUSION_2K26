# 🖼️ HOW TO ADD IMAGE TO HERO SECTION

## 📋 Options for Adding Images

You have 3 options:

### Option 1: Background Image (Full Screen)
- Image covers entire hero section
- Text overlays on top
- Most dramatic effect

### Option 2: Side Image (Split Layout)
- Image on one side, text on other
- Modern, clean look
- Good for showcasing event photos

### Option 3: Decorative Image (Floating)
- Image floats alongside text
- Maintains current design
- Adds visual interest

---

## 🎨 OPTION 1: Background Image (Recommended)

### Step 1: Prepare Your Image

**Image Requirements:**
- Format: JPG, PNG, or WebP
- Size: 1920x1080px or larger
- File size: Under 500KB (compress if needed)
- Content: College fest related, high quality

**Where to Get Images:**
- Your own college fest photos
- Free stock photos: unsplash.com, pexels.com
- AI generated: midjourney, dall-e

### Step 2: Add Image to Project

**Option A: Use URL (Easiest)**
- Upload image to image hosting (imgur, cloudinary, etc.)
- Get direct URL
- Use in code

**Option B: Add to Project**
```bash
# Create images folder
mkdir -p /workspace/app-9dfi9jpj51xd/public/images

# Copy your image there
# Name it: hero-bg.jpg
```

### Step 3: Update Hero.tsx

**Replace lines 12-20 with this:**

```tsx
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="/images/hero-bg.jpg"
      alt="Fusion26 Background"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/50" />
  </div>
  
  {/* Animated gradient overlay (optional) */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 text-center">
```

**If using URL instead of local file:**
```tsx
<img 
  src="https://your-image-url.com/hero-bg.jpg"
  alt="Fusion26 Background"
  className="w-full h-full object-cover"
/>
```

---

## 🎨 OPTION 2: Split Layout with Image

### Update Hero.tsx

**Replace the entire Hero component with:**

```tsx
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    eventsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Fusion26
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Where Innovation Meets Celebration
            </p>
            <Button
              size="lg"
              onClick={scrollToEvents}
              className="glow-cyan hover:scale-105 transition-transform duration-300"
            >
              Explore Events
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl glow-cyan">
              <img 
                src="/images/hero-image.jpg"
                alt="Fusion26 Event"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </motion.div>
    </section>
  );
}
```

---

## 🎨 OPTION 3: Floating Decorative Image

### Update Hero.tsx

**Add this after line 19 (after the gradient blobs):**

```tsx
{/* Decorative floating image */}
<motion.div
  className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl"
  animate={{ 
    y: [0, -20, 0],
    rotate: [0, 5, 0]
  }}
  transition={{ 
    repeat: Number.POSITIVE_INFINITY, 
    duration: 6,
    ease: "easeInOut"
  }}
>
  <img 
    src="/images/hero-decoration.jpg"
    alt="Fusion26"
    className="w-full h-full object-cover"
  />
</motion.div>
```

---

## 📁 FILE STRUCTURE

After adding images, your structure should be:

```
/workspace/app-9dfi9jpj51xd/
├── public/
│   └── images/
│       ├── hero-bg.jpg          (for Option 1)
│       ├── hero-image.jpg       (for Option 2)
│       └── hero-decoration.jpg  (for Option 3)
├── src/
│   └── components/
│       └── Hero.tsx             (file to edit)
```

---

## 🖼️ IMAGE RECOMMENDATIONS

### For Background (Option 1):
- **Size**: 1920x1080px or larger
- **Style**: Dark or dramatic
- **Content**: College campus, event crowd, stage
- **Example searches**: "college fest concert", "tech event", "cultural festival"

### For Side Image (Option 2):
- **Size**: 800x600px or larger
- **Style**: Bright, energetic
- **Content**: Students, activities, performances
- **Orientation**: Portrait or square works best

### For Floating Image (Option 3):
- **Size**: 500x500px (square)
- **Style**: Logo, mascot, or iconic moment
- **Content**: College logo, fest logo, or key visual

---

## 🎨 STYLING OPTIONS

### Make Image Darker (Better Text Contrast)
```tsx
<div className="absolute inset-0 bg-black/60" />
```
Change `/60` to `/70` or `/80` for darker

### Add Blur Effect
```tsx
<img 
  src="/images/hero-bg.jpg"
  alt="Background"
  className="w-full h-full object-cover blur-sm"
/>
```

### Add Gradient Overlay
```tsx
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
```

### Zoom Animation
```tsx
<motion.img 
  src="/images/hero-bg.jpg"
  alt="Background"
  className="w-full h-full object-cover"
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20 }}
/>
```

---

## 🚀 QUICK START (Option 1 - Background Image)

### 1. Get Your Image
- Find or create an image (1920x1080px)
- Save as `hero-bg.jpg`

### 2. Add to Project
```bash
# Create folder
mkdir -p /workspace/app-9dfi9jpj51xd/public/images

# Copy your image to:
# /workspace/app-9dfi9jpj51xd/public/images/hero-bg.jpg
```

### 3. Update Hero.tsx

Open `/workspace/app-9dfi9jpj51xd/src/components/Hero.tsx`

**Find line 12-20 (the section with gradient blobs)**

**Replace with:**
```tsx
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="/images/hero-bg.jpg"
      alt="Fusion26 Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 text-center">
```

### 4. Save and Test
- Save file (Ctrl+S)
- Check browser (should auto-reload)
- Image should appear as background

---

## 🔧 TROUBLESHOOTING

### Image Not Showing

**Check 1: File Path**
```bash
# Verify file exists
ls /workspace/app-9dfi9jpj51xd/public/images/hero-bg.jpg
```

**Check 2: File Name**
- Must match exactly (case-sensitive)
- Check for typos

**Check 3: Browser Console**
- Press F12
- Look for 404 errors
- Check image URL

### Image Too Large (Slow Loading)

**Compress Image:**
- Use: tinypng.com or squoosh.app
- Target: Under 500KB
- Keep quality above 80%

### Image Looks Stretched

**Fix aspect ratio:**
```tsx
className="w-full h-full object-cover"  // Covers area, may crop
className="w-full h-full object-contain" // Fits entire image, may have gaps
```

### Text Hard to Read

**Increase overlay darkness:**
```tsx
<div className="absolute inset-0 bg-black/70" />
```

---

## 📊 COMPARISON

| Option | Difficulty | Visual Impact | Best For |
|--------|-----------|---------------|----------|
| Option 1: Background | ⭐ Easy | ⭐⭐⭐⭐⭐ High | Dramatic effect |
| Option 2: Split Layout | ⭐⭐ Medium | ⭐⭐⭐⭐ High | Modern look |
| Option 3: Floating | ⭐⭐⭐ Hard | ⭐⭐⭐ Medium | Subtle accent |

---

## ✅ RECOMMENDED APPROACH

**For Fusion26, I recommend Option 1 (Background Image):**

1. **Most dramatic** - Perfect for college fest
2. **Easiest to implement** - Just one image
3. **Professional look** - Like modern event websites
4. **Mobile friendly** - Works on all screen sizes

---

## 🎯 EXAMPLE IMAGES TO USE

### Free Stock Photos:

**Unsplash:**
- Search: "college fest"
- Search: "concert crowd"
- Search: "tech event"
- URL: unsplash.com

**Pexels:**
- Search: "music festival"
- Search: "cultural event"
- URL: pexels.com

### Or Use Your Own:
- Previous Fusion26 photos
- College event photos
- Campus photos

---

## 📝 COMPLETE CODE EXAMPLE

Here's the complete updated Hero.tsx with background image:

```tsx
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    eventsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-bg.jpg"
          alt="Fusion26 Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Fusion26
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Where Innovation Meets Celebration
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={scrollToEvents}
              className="glow-cyan hover:scale-105 transition-transform duration-300"
            >
              Explore Events
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </motion.div>
    </section>
  );
}
```

---

## 🎉 SUMMARY

**To add an image to Hero section:**

1. **Choose option** (Background recommended)
2. **Get image** (1920x1080px, under 500KB)
3. **Add to project** (`public/images/hero-bg.jpg`)
4. **Update Hero.tsx** (replace gradient section)
5. **Save and test**

**Files to modify:**
- `/workspace/app-9dfi9jpj51xd/src/components/Hero.tsx`

**Image location:**
- `/workspace/app-9dfi9jpj51xd/public/images/hero-bg.jpg`

---

**Need help? Follow the Quick Start section above!** 🚀
