# Fusion26 College Fest Web Application Requirements Document

## 1. Application Overview

### 1.1 Application Name
Fusion26

### 1.2 Application Description
A cinematic, immersive web application for a college fest that delivers a premium, dramatic, and visually powerful experience inspired by modern event websites like ashv2k.in. The platform features a public user interface for event browsing and registration, alongside a secure admin dashboard accessible via chatbot authentication for comprehensive content management. The application supports multiple web pages with flexible responsive design across all screen sizes.

### 1.3 Application Type
Web Application (College Fest Management Platform)

## 2. Core Features

### 2.1 Public User Interface

#### 2.1.1 Header Section
- Display college name: ACEM (replacing Fusion26)
- Display up to 4 college logos with specific positioning:
  - Two logos positioned on the left side
  - Two logos positioned on the right side
- Navigation menu with links:
  - Home
  - Committee
  - Gallery
  - Events
  - Contact Us
  - About Us
- Sticky header with smooth scroll behavior
- Responsive menu for mobile devices
- Fully responsive across all screen sizes for easy access

#### 2.1.2 Homepage
- Cinematic hero section with parallax scrolling
- Smooth transitions and motion-based micro-interactions
- Dark theme with neon/gradient accents
- Bold modern typography
- Glow effects, animated cards, hover transitions
- Animated loading states
- Admin-configurable layout for header sections
- Admin-configurable logo arrangement (add/delete logos)

#### 2.1.3 Events Section
- Display events categorized by type (Technical/Cultural)
- Each event card shows:
  - Event Name
  - Event Type
  - Event Description
  - Event Image
  - Staff Coordinators (Name, Contact)
  - Student Coordinators (Name, Contact)
  - Registration button linking to Google Form

#### 2.1.4 Committee Section
- Display committee members with:
  - Member images
  - Names
  - Assigned roles
- Cinematic layout with smooth transitions

#### 2.1.5 Gallery Section
- Cinematic grid/masonry layout displaying uploaded images
- Lazy loading implementation
- Smooth transitions between images

#### 2.1.6 About Us Section
- Editable text content displaying fest information

#### 2.1.7 Contact Section
- Display contact details
- Social media links (Instagram, LinkedIn, WhatsApp, Email)

### 2.2 Chatbot-Based Admin Authentication

#### 2.2.1 Chatbot Interface
- Floating chatbot fixed at bottom-right corner
- Admin authentication flow:
  - Admin enters passkey in chatbot
  - System validates passkey against database
  - Correct passkey opens Admin Dashboard
- Default passkey: acemadmin@fusion

### 2.3 Admin Dashboard

#### 2.3.1 Header Management
- Update college name (default: ACEM)
- Upload up to 4 college logos
- Configure logo positioning:
  - Replace logo positions (left/right arrangement)
  - Add or delete logos
- Text styling controls:
  - Font selection
  - Font size adjustment
  - Text color customization
- Background customization:
  - Background color changing
  - Background image upload and changing
  - Default background color configuration
- Changes reflect immediately on public UI header

#### 2.3.2 Homepage Layout Management
- Arrange header sections as desired
- Add or delete logos dynamically
- Configure layout elements positioning
- All customizations apply across multiple web pages

#### 2.3.3 Event Management
- Add new events with fields:
  - Event Name
  - Event Type (Technical/Cultural)
  - Event Description
  - Event Image upload
  - Staff Coordinators (Name, Contact)
  - Student Coordinators (Name, Contact)
  - Google Form registration link
- Edit existing events
- Delete events
- Events auto-display on public UI based on event type

#### 2.3.4 Committee Management
- Add committee members
- Assign roles to members
- Upload member images
- Changes display dynamically on website

#### 2.3.5 Gallery Management
- Upload multiple images
- Images appear in cinematic gallery layout on public UI

#### 2.3.6 About Us Management
- Edit About Us section text content
- Updates reflect immediately on public UI

#### 2.3.7 Contact & Social Media Management
- Update contact details
- Update social media links (Instagram, LinkedIn, WhatsApp, Email)
- Changes reflect instantly on public UI

#### 2.3.8 Passkey Management
- Change passkey functionality with validation:
  - Enter old passkey
  - Enter new passkey
  - Confirm new passkey
- Validation rules:
  - Old passkey must match database value
  - New passkey and confirm passkey must match
- Passkey update stored securely in MongoDB

## 3. Design Requirements

### 3.1 Visual Style
- Cinematic hero sections with smooth transitions
- Parallax scrolling effects
- Motion-based micro-interactions throughout
- Bold modern typography
- Dark theme with neon/gradient accents
- Glow effects on key elements
- Animated cards with hover transitions
- Minimal but powerful layout
- Default background color with admin override capability

### 3.2 Responsive Design
- Fully responsive across mobile, tablet, and desktop devices
- Flexible layout adapting to all screen sizes for easy access
- Smooth page transitions and animated loading states
- Responsive header with mobile-friendly navigation menu
- Multiple web pages with consistent responsive behavior

### 3.3 Performance Optimization
- Optimized animations and images
- Fast loading times
- Lazy loading for gallery images
- High performance rendering

## 4. Technical Requirements

### 4.1 Database
- MongoDB for data storage
- Collections for:
  - Header content (college name: ACEM, logos with positioning data)
  - Text styling configurations (font, size, color)
  - Background settings (color, image)
  - Events
  - Committee members
  - Gallery images
  - About Us content
  - Contact information
  - Admin passkey

### 4.2 Backend Architecture
- Backend: Node.js + Express
- Secure authentication logic for admin access
- Clean REST API structure
- All admin changes must:
  - Store automatically in database
  - Reflect instantly on user interface
- API endpoints for:
  - Logo positioning management
  - Text styling updates
  - Background customization

### 4.3 Code Quality
- Clean, modular, scalable codebase
- Maintainable UI component structure
- Optimized for production deployment
- Support for multiple web pages architecture

## 5. User Flow

### 5.1 Public User Flow
1. User lands on cinematic homepage with header displaying ACEM, logos (2 left, 2 right), and navigation menu
2. User navigates through multiple web pages using header menu (Home, Events, Committee, Gallery, About Us, Contact Us)
3. User experiences consistent responsive design across all screen sizes
4. User views events by category (Technical/Cultural)
5. User clicks registration button to access Google Form
6. User explores gallery and committee sections with smooth cinematic navigation

### 5.2 Admin Flow
1. Admin clicks floating chatbot at bottom-right corner
2. Admin enters passkey in chatbot
3. System validates passkey
4. Upon successful validation, Admin Dashboard opens
5. Admin manages content:
   - Header: Update ACEM text, configure logo positions (left/right), add/delete logos
   - Text Styling: Adjust font, size, color
   - Background: Change color or upload background image
   - Events, Committee, Gallery, About Us, Contact management
6. Admin arranges homepage layout and header sections as desired
7. Admin can change passkey through Passkey Management
8. All changes save to MongoDB and reflect immediately across all web pages on public UI