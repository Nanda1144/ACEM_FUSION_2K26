# ACEM College Fest Web Application

## Overview
A fully customizable, multi-page college fest management platform with advanced theme customization, flexible header layouts, and comprehensive admin controls.

## Key Features

### 🎨 Advanced Theme Management
- **Full Style Control**: Customize fonts, sizes, and colors for all elements
- **Background Customization**: Set custom colors or upload background images for header and pages
- **Color Picker**: Visual color selection for all theme elements
- **Font Selection**: Choose from multiple font families
- **Responsive Design**: Optimized for all screen sizes

### 🖼️ Flexible Logo System
- **Up to Unlimited Logos**: Add, remove, and manage multiple logos
- **Position Control**: Place logos on left or right side of header
- **Order Management**: Reorder logos with up/down controls
- **Easy Upload**: Drag-and-drop logo image upload with automatic compression

### 📄 Multi-Page Management
- **Create Custom Pages**: Add unlimited pages with custom content
- **Page Settings**: Control visibility, menu display, and order
- **Slug Management**: Custom URL slugs for each page
- **Publish Control**: Draft and publish pages as needed

### 🎯 Header Customization
- **Dynamic Title**: Change header title (default: ACEM)
- **Font Styling**: Customize font family, size, and color
- **Background Options**: Solid colors or custom images
- **Navigation Styling**: Customize menu text and hover colors
- **Responsive Layout**: 2 logos left, 2 logos right (customizable)

### 📱 Responsive Design
- **Mobile-First**: Optimized for all devices
- **Flexible Layouts**: Adapts to any screen size
- **Touch-Friendly**: Mobile menu with smooth animations
- **Cross-Browser**: Works on all modern browsers

## Admin Dashboard

### Access
- Click the floating chatbot button (bottom-right)
- Enter admin passkey: `acemadmin@fusion`
- Dashboard opens with full management controls

### Admin Sections

#### 1. Theme Management
- **Header Style Tab**:
  - Header title text
  - Font family selection
  - Font size control
  - Text color picker
  - Background color picker
  - Background image upload

- **Logos Tab**:
  - Add new logos
  - Upload logo images
  - Set position (left/right)
  - Reorder logos
  - Delete logos

- **Navigation Tab**:
  - Font size selection
  - Text color
  - Hover color

- **Background Tab**:
  - Page background color
  - Page background image

#### 2. Page Management
- Create new pages
- Edit page content
- Set display order
- Toggle published status
- Show/hide in menu
- Custom URL slugs

#### 3. Event Management
- Add technical/cultural events
- Upload event images
- Add coordinators (staff/student)
- Set registration links
- Edit/delete events

#### 4. Committee Management
- Add committee members
- Upload member photos
- Assign roles
- Set display order
- Edit/delete members

#### 5. Gallery Management
- Upload multiple images
- Delete images
- Automatic image compression

#### 6. About Us Management
- Edit about section content
- Rich text support

#### 7. Contact Management
- Update social media links
- Set contact information

#### 8. Passkey Management
- Change admin passkey
- Secure validation

## Default Configuration

### Header
- **Title**: ACEM
- **Font**: Inter, 2XL
- **Text Color**: #00D9FF (Cyan)
- **Background**: Transparent
- **Logos**: 4 placeholder logos (2 left, 2 right)

### Navigation
- **Font Size**: Base
- **Text Color**: #FFFFFF (White)
- **Hover Color**: #00D9FF (Cyan)

### Page Background
- **Color**: #0A0F1E (Dark Blue)
- **Image**: None (default)

### Default Pages
1. Home
2. Events
3. Committee
4. Gallery
5. About Us
6. Contact Us

## Customization Guide

### Changing Header Title
1. Go to Admin Dashboard → Theme → Header Style
2. Update "Header Title" field
3. Click "Save All Changes"

### Adding Logos
1. Go to Admin Dashboard → Theme → Logos
2. Click "Add New Logo"
3. Upload image file
4. Select position (Left/Right)
5. Use up/down arrows to reorder
6. Click "Save All Changes"

### Changing Colors
1. Go to Admin Dashboard → Theme
2. Navigate to appropriate tab
3. Click color picker or enter hex code
4. Preview changes
5. Click "Save All Changes"

### Adding Background Image
1. Go to Admin Dashboard → Theme → Background
2. Click "Choose File" under desired section
3. Select image (auto-compressed to <1MB)
4. Click "Save All Changes"

### Creating New Pages
1. Go to Admin Dashboard → Pages
2. Click "Add Page"
3. Fill in page details:
   - Title
   - Slug (URL)
   - Content
   - Display order
   - Published status
   - Show in menu
4. Click "Create Page"

## Technical Details

### Technology Stack
- **Frontend**: React + TypeScript
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Backend**: Supabase
- **Animations**: Motion (Framer Motion)
- **Routing**: React Router
- **Forms**: React Hook Form + Zod

### Database Tables
- `theme_settings`: Theme and style configuration
- `pages`: Multi-page content management
- `events`: Event information
- `committee`: Committee members
- `gallery`: Gallery images
- `about_us`: About section content
- `contact`: Contact information
- `admin_passkey`: Admin authentication

### Image Storage
- **Buckets**: 
  - `events_images`
  - `committee_images`
  - `gallery_images`
- **Auto-Compression**: Images >1MB compressed to WebP
- **Max Resolution**: 1080p
- **Quality**: 0.8

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**Version**: 2.0.0  
**Last Updated**: 2026-02-03  
**License**: MIT
