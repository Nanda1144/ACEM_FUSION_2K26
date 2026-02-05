# Fusion26 College Fest Web Application Requirements Document

## 1. Application Overview

### 1.1 Application Name
Fusion26

### 1.2 Application Description
A cinematic, immersive multi-page web application for a college fest that delivers a premium, dramatic, and visually powerful experience inspired by modern event websites like ashv2k.in. The platform features a public user interface for event browsing and registration, alongside a secure admin dashboard with real-time live preview functionality accessible via enhanced chatbot authentication for comprehensive content management. The application supports multiple web pages with flexible responsive design across all screen sizes, and provides admins with complete control over all sections including dual header system, footer, and body content with drag-and-drop text box placement capabilities. The system connects to Supabase cloud database with manual configuration support.

### 1.3 Application Type
Web Application (College Fest Management Platform)

## 2. Core Features

### 2.1 Public User Interface

#### 2.1.1 Primary Header Section (Top Header)
- Navigation menu positioned at top-right corner with links:
  - Home
  - Committee
  - Gallery
  - Events
  - Contact Us
  - About Us
- Sticky header with smooth scroll behavior
- Responsive menu for mobile devices
- Fully responsive across all screen sizes for easy access
- Admin-editable header structure and content

#### 2.1.2 Secondary Header Section (Logo and College Information Header)
- Positioned below the primary header section
- Fully responsive and flexible layout adapting to all screen sizes
- Display college name: ADITYA College of Engineering Madanapalle
  - Styling: Golden dark color with black border for attractiveness
  - Prominent display with enhanced visual appeal
  - Font size automatically adjusts based on screen size:
    - Desktop: Large font size for prominence
    - Tablet: Medium font size for readability
    - Mobile: Smaller font size optimized for mobile view
- Display location: MADANAPALLE
  - Font size: Responsive sizing (adjusts from 12px-14px based on screen size)
  - Positioned below college name
- Display institution status: UGC - Autonomous Institution
  - Font size: Responsive sizing (adjusts from 12px-14px based on screen size)
  - Positioned below location on next line
- Dedicated section for logo display with flexible responsive behavior:
  - Logos automatically adjust size and positioning based on screen size
  - Desktop view: Logos display in optimal size with full spacing
  - Tablet view: Logos scale proportionally with adjusted spacing
  - Mobile view: Logos resize to fit mobile screen width while maintaining aspect ratio and visibility
- Support for multiple college logos with configurable shapes:
  - Circle shape option
  - Semi-square shape option
- Responsive logo arrangement:
  - Logos reposition automatically for optimal display on different screen sizes
  - Mobile view: Logos stack or arrange in mobile-friendly layout
  - Maintains visual hierarchy across all devices
- Admin-configurable logo arrangement and positioning
- Static data display capabilities managed by admin
- Header details fully updatable through admin dashboard
- All text elements (college name, location, institution status) use responsive font sizing
- Flexible layout ensures readability and visual appeal across all devices
- Admin can add, edit, or delete logos
- Admin can configure logo shapes individually

#### 2.1.3 Homepage
- Cinematic hero section with parallax scrolling
- Smooth transitions and motion-based micro-interactions
- Dark theme with neon/gradient accents
- Bold modern typography
- Glow effects, animated cards, hover transitions
- Animated loading states
- Admin-configurable layout for header sections
- Admin-configurable logo arrangement (add/delete logos with shape options)
- Admin-editable body content with flexible text box placement
- Background image removed, admin can update background settings

#### 2.1.4 Events Section
- Display events categorized by type (Technical/Cultural)
- Each event card shows:
  - Event Name
  - Event Type
  - Event Image
  - Brief description preview
- Clicking on event card navigates to dedicated event detail page

#### 2.1.5 Event Detail Page
- Display complete event information:
  - Event Name
  - Event Type
  - Full Event Description
  - Event Rules
  - Event Instructions
  - Event Images (multiple images support)
  - Staff Coordinators (Name, Contact)
  - Student Coordinators (Name, Contact)
  - Registration button linking to Google Form (admin-provided link)
- Clicking registration button opens Google Form in new tab or embedded view
- Cinematic layout with smooth transitions
- Back navigation to Events Section

#### 2.1.6 Staff and Student Coordinators Section
- Positioned below Technical and Cultural events sections
- Dynamic display based on event type selection:
  - When Technical event is selected: Display staff coordinators and student coordinators associated with Technical events
  - When Cultural event is selected: Display staff coordinators and student coordinators associated with Cultural events
- Display staff coordinator details:
  - Staff Name
  - Staff Contact
  - Associated Event Type (Technical/Cultural)
- Display student coordinator details:
  - Student Name
  - Student Contact
  - Associated Event Type (Technical/Cultural)
- Admin-editable staff and student coordinator information through Events Section management
- Cinematic layout with smooth transitions

#### 2.1.7 Committee Section
- Display committee members with:
  - Member images
  - Names
  - Assigned roles
  - Info section about each person
- Cinematic layout with smooth transitions

#### 2.1.8 Gallery Section
- Cinematic grid/masonry layout displaying uploaded images
- Lazy loading implementation
- Smooth transitions between images
- Display images uploaded by admin through Gallery Management

#### 2.1.9 About Us Section
- Editable text content displaying fest information

#### 2.1.10 Contact Us Section
- Display contact details
- Contact form or contact information display

#### 2.1.11 Footer Section
- Display contact details
- Social media links (Instagram, LinkedIn, WhatsApp, Email)
- Admin-editable footer structure and content
- Improved layout with enhanced visual presentation

### 2.2 Enhanced Chatbot-Based Admin Authentication

#### 2.2.1 Chatbot Interface
- Floating chatbot fixed at bottom-right corner
- Enhanced chatbot functionality providing:
  - Website information and details
  - Admin passkey information
  - Interactive guidance and support

#### 2.2.2 Chatbot Information Features
- Provide comprehensive website details including:
  - Website purpose and overview
  - Available features and sections
  - Navigation guidance
  - Event information summary
  - Committee structure overview
  - Gallery highlights
  - Contact information
  - About the fest details
- Display admin passkey information:
  - Default passkey: acemadmin@fusion
  - Instructions for admin access
  - Passkey usage guidelines

#### 2.2.3 Admin Authentication Flow
- Admin enters passkey in chatbot
- System validates passkey against database
- Correct passkey opens Admin Dashboard
- Enhanced chatbot provides contextual help during authentication process

### 2.3 Admin Dashboard

#### 2.3.1 Real-Time Live Preview
- Split-screen interface:
  - Left panel: Admin editing controls
  - Right panel: Live preview of public website
- All changes reflect instantly in live preview panel
- Preview updates automatically as admin edits content
- Preview shows exact appearance of public website across multiple web pages

#### 2.3.2 Primary Header Management
- Configure navigation menu positioning (top-right corner)
- Edit navigation menu items
- Text styling controls:
  - Font selection
  - Font size adjustment
  - Text color customization
- Background customization:
  - Background color changing
  - Background image upload and changing (admin-controlled)
  - Default background color configuration
- Edit header structure and layout
- Changes reflect immediately on public UI header and live preview

#### 2.3.3 Secondary Header (Logo and College Information Header) Management
- Update college name (default: ADITYA College of Engineering Madanapalle)
- Configure college name styling:
  - Golden dark color with black border
  - Font selection
  - Responsive font size adjustment for different screen sizes
  - Enhanced visual styling for attractiveness
- Update location text (default: MADANAPALLE)
  - Responsive font size configuration (12px-14px range)
- Update institution status (default: UGC - Autonomous Institution)
  - Responsive font size configuration (12px-14px range)
- Upload multiple college logos
- Configure individual logo shapes:
  - Circle shape option
  - Semi-square shape option
- Configure responsive logo sizing:
  - Set logo sizes for desktop view
  - Set logo sizes for tablet view
  - Set logo sizes for mobile view
- Configure responsive logo positioning:
  - Desktop layout configuration
  - Tablet layout configuration
  - Mobile layout configuration (stacking or mobile-friendly arrangement)
- Add or delete logos dynamically
- Configure logo positioning and arrangement for all screen sizes
- Update static data displayed in logo header
- Edit header details and content
- Customize logo header styling:
  - Background color/image
  - Spacing and layout
  - Border and shadow effects
- Configure responsive breakpoints for automatic font and logo adjustments
- All changes update automatically in database and reflect in live preview across all screen sizes

#### 2.3.4 Body Content Management
- Add text boxes anywhere on the page with drag-and-drop functionality
- Position text boxes freely according to admin preference
- Edit text box content, styling, and positioning
- Delete text boxes as needed
- Rearrange body sections and components
- Customize body layout structure
- All changes update automatically in database and reflect in live preview

#### 2.3.5 Footer Management
- Edit footer structure and layout
- Update contact details:
  - Phone numbers
  - Email addresses
  - Physical address
  - Office hours
- Update social media links (Instagram, LinkedIn, WhatsApp, Email)
- Customize footer styling:
  - Font selection
  - Font size adjustment
  - Text color customization
  - Background color/image
- Add or remove footer sections
- Changes reflect instantly on public UI and live preview

#### 2.3.6 Homepage Layout Management
- Arrange primary header sections as desired
- Configure secondary logo and college information header layout
- Add or delete logos dynamically with shape configuration
- Configure layout elements positioning
- Drag-and-drop interface for section reordering
- All customizations apply across multiple web pages

#### 2.3.7 Event Management
- Add new events with fields:
  - Event Name
  - Event Type (Technical/Cultural)
  - Event Description
  - Event Rules
  - Event Instructions
  - Event Images upload (multiple images support)
  - Staff Coordinators (Name, Contact) - editable within Events Section
  - Student Coordinators (Name, Contact) - editable within Events Section
  - Google Form registration link
- Edit existing events including staff and student coordinator details
- Delete events
- Admin can add, edit, or delete staff coordinator details directly in Events Section
- Admin can add, edit, or delete student coordinator details directly in Events Section
- Events auto-display on public UI based on event type
- Event cards link to dedicated event detail pages
- Staff and student coordinators display dynamically below Technical and Cultural events based on event type selection
- Changes visible in live preview immediately

#### 2.3.8 Committee Management
- Add committee members
- Assign roles to members
- Upload member images
- Add info section about each person
- Edit member information including personal info section
- Delete committee members
- Changes display dynamically on website and live preview

#### 2.3.9 Gallery Management
- Upload multiple images to gallery
- Image upload interface with file selection
- Uploaded images stored in Supabase Storage
- Image URLs automatically generated and stored in gallery_images table
- Images appear in cinematic gallery layout on public UI Gallery Section
- Live preview shows gallery updates instantly
- Delete images from gallery
- Rearrange image display order

#### 2.3.10 About Us Management
- Edit About Us section text content
- Updates reflect immediately on public UI and live preview

#### 2.3.11 Contact & Social Media Management
- Update contact details
- Update social media links (Instagram, LinkedIn, WhatsApp, Email)
- Changes reflect instantly on public UI and live preview

#### 2.3.12 Passkey Management
- Change passkey functionality with validation:
  - Enter old passkey
  - Enter new passkey
  - Confirm new passkey
- Validation rules:
  - Old passkey must match database value
  - New passkey and confirm passkey must match
- Passkey update stored securely in Supabase

#### 2.3.13 Complete Application Editing
- Admin has full control to edit entire application:
  - Primary header sections
  - Secondary logo and college information header sections with responsive configurations
  - Footer sections
  - Body parts
  - All content areas
  - Staff and student coordinator details through Events Section
  - Committee member information including personal info sections
- Flexible editing interface allowing customization of any component
- All edits automatically update database
- All changes reflect instantly on public website and live preview

#### 2.3.14 Supabase Connection Management
- Manual database connection configuration interface
- Step-by-step connection setup guide displayed in chatbot:
  - Step 1: Create Supabase account at supabase.com
  - Step 2: Create a new project (free tier available)
  - Step 3: Navigate to Project Settings > API
  - Step 4: Copy Project URL and anon/public API key
  - Step 5: Enter Project URL in admin dashboard
  - Step 6: Enter API key in admin dashboard
  - Step 7: Click Connect button to establish connection
  - Step 8: System will automatically create required tables
- Project URL input field in admin dashboard
- API key input field in admin dashboard
- Test connection functionality
- Connection status indicator (Connected/Disconnected)
- Automatic reconnection on connection failure
- Connection credentials validation before attempting connection
- Automatic table schema creation on first connection

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
- Enhanced footer design with improved visual hierarchy
- Background image removed by default, admin can upload and update background
- Primary header with navigation menu positioned at top-right corner
- Secondary header with golden dark college name styling and black border for enhanced attractiveness, positioned below primary header
- Secondary header includes configurable logo shapes (circle/semi-square)
- Fully responsive secondary header with flexible logo sizing and text scaling across all devices

### 3.2 Responsive Design
- Fully responsive across mobile, tablet, and desktop devices
- Flexible layout adapting to all screen sizes for easy access
- Smooth page transitions and animated loading states
- Responsive dual header system with mobile-friendly navigation menu positioned at top-right
- Secondary header with intelligent responsive behavior:
  - College name, location, and institution status text automatically resize based on screen size
  - Logos automatically adjust size and positioning for optimal display on all devices
  - Mobile view: Logos and text scale appropriately for mobile screens
  - Tablet view: Proportional scaling for tablet displays
  - Desktop view: Full-size display with optimal spacing
- Multiple web pages with consistent responsive behavior
- Admin dashboard optimized for desktop editing experience

### 3.3 Performance Optimization
- Optimized animations and images
- Fast loading times
- Lazy loading for gallery images
- High performance rendering
- Efficient live preview updates without page reload

## 4. Technical Requirements

### 4.1 Database
- Supabase cloud database for data storage
- Manual connection configuration support
- Tables for:
  - Primary header content (navigation menu, positioning, styling configurations)
  - Secondary header content (college name: ADITYA College of Engineering Madanapalle, location: MADANAPALLE, institution status: UGC - Autonomous Institution, logos with shape configurations: circle/semi-square, responsive sizing configurations, positioning data, static data, styling)
  - Responsive configuration (breakpoints, font size mappings, logo size mappings for different screen sizes)
  - Text styling configurations (font, size, color)
  - Background settings (color, image)
  - Body content (text boxes with positioning data)
  - Footer content and styling
  - Events (including rules, instructions, multiple images, staff coordinators, student coordinators, Google Form links)
  - Committee members (including name, role, image, info section)
  - Gallery images (storing image URLs from Supabase Storage)
  - About Us content
  - Contact information
  - Admin passkey
  - Database connection configuration
  - Chatbot information content
- Automatic data updates on admin changes
- Connection credentials stored securely
- Supabase Storage for image uploads
- Staff and student coordinator details stored within events table
- Committee member info section stored within committee_members table

### 4.2 Backend Architecture
- Backend: Node.js + Express
- Supabase connection using @supabase/supabase-js client library
- Secure authentication logic for admin access
- Clean REST API structure
- Real-time data synchronization for live preview using Supabase Realtime
- All admin changes must:
  - Store automatically in Supabase
  - Reflect instantly on user interface
  - Update live preview in real-time
- API endpoints for:
  - Database connection management
  - Primary header management (navigation menu, positioning)
  - Secondary header management (college name, location, institution status styling, logo upload, shape configuration, responsive sizing configuration, positioning)
  - Responsive configuration management (breakpoints, font size mappings, logo size mappings)
  - Text styling updates
  - Background customization
  - Text box positioning and content
  - Footer management
  - Event detail page data (including staff and student coordinator management)
  - Committee management (including member info section)
  - Complete application editing
  - Chatbot information retrieval
  - Image upload to Supabase Storage
  - Gallery image management (upload, retrieve, delete)
- Environment variable support for connection credentials storage
- Error handling for database connection failures

### 4.3 Image Upload Implementation
- Gallery image upload flow:
  - Admin selects images through Gallery Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage gallery bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL in gallery_images table
  - Frontend retrieves image URLs from gallery_images table
  - Public UI Gallery Section displays images using stored URLs
- File update locations for gallery image upload:
  - Backend API file: Create/update gallery upload endpoint (e.g., /api/gallery/upload)
  - Admin Dashboard component: Add image upload interface in Gallery Management section
  - Public Gallery component: Fetch and display images from gallery_images table
  - Supabase Storage configuration: Create gallery bucket with public access

### 4.4 Code Quality
- Clean, modular, scalable codebase
- Maintainable UI component structure
- Optimized for production deployment
- Support for multiple web pages architecture
- Efficient real-time update mechanism
- Secure connection credentials handling
- Responsive design implementation using CSS media queries and flexible layouts

## 5. User Flow

### 5.1 Public User Flow
1. User lands on cinematic homepage with dual header system:
   - Primary header displaying navigation menu at top-right corner (Home, Events, Committee, Gallery, About Us, Contact Us)
   - Secondary header positioned below primary header displaying ADITYA College of Engineering Madanapalle (golden dark with black border, responsive font sizing), MADANAPALLE (responsive font 12/14), UGC - Autonomous Institution (responsive font 12/14), and college logos with configured shapes (circle/semi-square) that automatically adjust size based on screen size
2. User navigates through multiple web pages using top-right navigation menu
3. User experiences consistent responsive design across all screen sizes with automatic font and logo adjustments
4. User views events by category (Technical/Cultural) on Events page
5. User clicks on event card to navigate to dedicated event detail page
6. User views complete event information including:
   - Full description
   - Rules and instructions
   - Event images
   - Staff coordinator contact details
   - Student coordinator contact details
7. User clicks registration button on event detail page
8. Google Form opens (link provided by admin)
9. User views Staff and Student Coordinators Section below Technical and Cultural events
10. When user selects Technical event: System displays staff coordinators and student coordinators associated with Technical events
11. When user selects Cultural event: System displays staff coordinators and student coordinators associated with Cultural events
12. User explores committee section and views member details including personal info sections
13. User explores gallery section and views images uploaded by admin
14. User views improved footer section with contact details and social media links
15. User can interact with chatbot to get website information and details
16. User experiences optimal viewing on mobile devices with properly scaled logos and text in secondary header

### 5.2 Admin Flow
1. Admin clicks floating chatbot at bottom-right corner
2. Admin can request website details and admin passkey information from chatbot
3. Chatbot provides comprehensive website information and displays admin passkey
4. Admin enters passkey in chatbot
5. System validates passkey
6. Upon successful validation, Admin Dashboard opens with split-screen interface
7. Admin sees live preview panel on right side showing real-time website appearance
8. Admin configures Supabase connection (first-time setup):
   - Views step-by-step connection guide in chatbot
   - Enters Supabase Project URL
   - Enters Supabase API key
   - Tests connection
   - Confirms successful connection
   - System automatically creates required tables and storage buckets
9. Admin manages content with instant live preview updates:
   - Primary Header: Position navigation menu at top-right, configure styling
   - Secondary Header: Update college name (ADITYA College of Engineering Madanapalle), location (MADANAPALLE), institution status (UGC - Autonomous Institution), configure golden dark styling with black border, upload logos, configure logo shapes (circle/semi-square), configure responsive sizing for logos and text across different screen sizes, manage positioning, update static data
   - Responsive Configuration: Set breakpoints, configure font size mappings for different screen sizes, configure logo size mappings for desktop/tablet/mobile views
   - Text Styling: Adjust font, size, color
   - Background: Change color or upload background image (admin-controlled)
   - Body Content: Add text boxes anywhere with drag-and-drop, edit positioning and content
   - Footer: Edit structure, update contact details, customize styling
   - Events: Add event details including rules, instructions, multiple images, staff coordinator details (name, contact), student coordinator details (name, contact), Google Form link; Edit staff and student coordinator details directly within Events Section
   - Committee: Add members with name, role, image, and info section; Edit member information including personal info sections
   - Gallery: Upload images through Gallery Management interface, images stored in Supabase Storage and displayed in public Gallery Section
   - About Us, Contact management
   - Chatbot information content management
10. Admin arranges homepage layout and dual header sections as desired
11. Admin configures responsive behavior for secondary header including logo sizing and text scaling for different devices
12. Admin edits entire application including primary header, secondary header with responsive configurations, footer, body sections, staff/student coordinator details through Events Section, and committee member info sections
13. Admin can change passkey through Passkey Management
14. All changes save to Supabase automatically and reflect immediately across all web pages on public UI and live preview with proper responsive behavior
15. Admin can access and edit multiple web pages with consistent editing interface

## 6. Development and Deployment Guide

### 6.1 Local Development Setup (VS Code)

#### Step 1: Prerequisites
- Install Node.js (version 16 or higher)
- Install VS Code
- Install Git

#### Step 2: Project Setup
1. Open VS Code
2. Open Terminal in VS Code (View > Terminal or Ctrl+`)
3. Navigate to project directory
4. Install dependencies:
   ```
   npm install
   ```

#### Step 3: Environment Configuration
1. Create .env file in project root directory
2. Add Supabase credentials:
   ```
   SUPABASE_URL=your_project_url
   SUPABASE_ANON_KEY=your_anon_key
   PORT=3000
   ```

#### Step 4: Run Development Server
1. Start backend server:
   ```
   npm run server
   ```
2. Start frontend development server:
   ```
   npm run dev
   ```
3. Open browser and navigate to http://localhost:3000

#### Step 5: Testing
1. Test public user interface with dual header system
2. Test responsive behavior of secondary header across different screen sizes
3. Verify logo sizing adjustments on mobile, tablet, and desktop views
4. Verify text scaling for college name, location, and institution status across devices
5. Test chatbot authentication
6. Test admin dashboard functionality
7. Test database connection
8. Verify live preview updates
9. Test gallery image upload and display
10. Test primary and secondary header management including responsive configurations
11. Test staff and student coordinator details display and filtering
12. Test staff and student coordinator editing within Events Section
13. Test committee member info section display and editing

### 6.2 Publishing on MeDo Platform

#### Step 1: Prepare for Deployment
1. Ensure all code is committed to version control
2. Verify all dependencies are listed in package.json
3. Test application thoroughly in local environment
4. Create production build:
   ```
   npm run build
   ```

#### Step 2: MeDo Platform Deployment
1. Log in to MeDo platform
2. Navigate to deployment section
3. Select project for deployment
4. Configure deployment settings:
   - Set environment variables (SUPABASE_URL, SUPABASE_ANON_KEY)
   - Configure build commands
   - Set start commands
5. Click Deploy button

#### Step 3: Post-Deployment Configuration
1. Verify deployment status
2. Test deployed application URL
3. Configure custom domain (if required)
4. Set up SSL certificate
5. Configure Supabase connection in deployed environment
6. Verify Supabase Storage bucket permissions

#### Step 4: Verification
1. Access deployed website URL
2. Test all public user features including dual header system
3. Test responsive behavior of secondary header on actual mobile devices
4. Verify logo and text scaling across different screen sizes
5. Test admin authentication and dashboard
6. Verify database connectivity
7. Test live preview functionality
8. Verify image uploads to Supabase Storage
9. Test gallery image display on public UI
10. Test primary and secondary header display and management with responsive configurations
11. Test staff and student coordinator details display and filtering functionality
12. Test staff and student coordinator editing within Events Section
13. Test committee member info section display and editing functionality

#### Step 5: Monitoring and Maintenance
1. Monitor application performance
2. Check error logs regularly
3. Update dependencies as needed
4. Backup Supabase database regularly
5. Monitor Supabase usage and quotas
6. Monitor Supabase Storage usage

### 6.3 Version Control (v8 Rollback)

#### Rollback to v8
1. Open Terminal in VS Code
2. Check current branch:
   ```
   git branch
   ```
3. View commit history:
   ```
   git log --oneline
   ```
4. Identify v8 commit hash
5. Create new branch from v8:
   ```
   git checkout -b v8-supabase <v8-commit-hash>
   ```
6. Verify v8 code is loaded
7. Continue with Supabase migration from v8 codebase

#### Alternative: Tag-based Rollback
1. List all tags:
   ```
   git tag
   ```
2. Checkout v8 tag:
   ```
   git checkout v8
   ```
3. Create new branch:
   ```
   git checkout -b v8-supabase
   ```

### 6.4 Supabase Migration from v8

#### Step 1: Install Supabase Client
```
npm install @supabase/supabase-js
```

#### Step 2: Replace MongoDB Code
1. Remove MongoDB dependencies:
   ```
   npm uninstall mongodb mongoose
   ```
2. Update database connection files
3. Replace MongoDB queries with Supabase queries
4. Update API endpoints
5. Add gallery image upload endpoint
6. Add primary and secondary header management endpoints
7. Add responsive configuration management endpoints
8. Add staff and student coordinator management endpoints within Events Section
9. Add committee member info section management endpoints

#### Step 3: Update Environment Variables
1. Remove MongoDB connection string
2. Add Supabase credentials:
   ```
   SUPABASE_URL=your_project_url
   SUPABASE_ANON_KEY=your_anon_key
   ```

#### Step 4: Test Migration
1. Run local development server
2. Test all database operations
3. Verify data persistence
4. Test admin dashboard functionality
5. Verify live preview updates
6. Test gallery image upload and display
7. Test dual header system management
8. Test responsive configuration management for secondary header
9. Test staff and student coordinator management and filtering within Events Section
10. Test committee member info section management

#### Step 5: Deploy Migrated Version
1. Commit changes to version control
2. Follow MeDo deployment steps (Section 6.2)
3. Verify deployed application

### 6.5 Gallery Image Upload Implementation Guide

#### Backend Implementation
1. Create gallery upload API endpoint:
   - File location: backend/routes/gallery.js or backend/api/gallery.js
   - Endpoint: POST /api/gallery/upload
   - Implementation steps:
     - Accept multipart/form-data image files
     - Validate image file types (jpg, png, gif, webp)
     - Upload images to Supabase Storage gallery bucket
     - Retrieve public URL from Supabase Storage
     - Insert image URL into gallery_images table
     - Return success response with image URL

2. Create gallery retrieval API endpoint:
   - Endpoint: GET /api/gallery/images
   - Implementation: Fetch all image URLs from gallery_images table

3. Create gallery delete API endpoint:
   - Endpoint: DELETE /api/gallery/images/:id
   - Implementation: Delete image from Supabase Storage and remove record from gallery_images table

#### Frontend Implementation
1. Admin Dashboard Gallery Management component:
   - File location: frontend/components/admin/GalleryManagement.jsx or similar
   - Add image upload interface:
     - File input for selecting multiple images
     - Upload button triggering API call to /api/gallery/upload
     - Display uploaded images with delete option
     - Show upload progress indicator

2. Public Gallery Section component:
   - File location: frontend/components/public/Gallery.jsx or similar
   - Implementation:
     - Fetch image URLs from /api/gallery/images endpoint
     - Display images in cinematic grid/masonry layout
     - Implement lazy loading for performance
     - Add smooth transitions and hover effects

#### Supabase Storage Configuration
1. Create gallery storage bucket:
   - Bucket name: gallery
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for gallery image upload:
1. Backend API routes file (e.g., backend/routes/gallery.js)
2. Admin Dashboard Gallery Management component (e.g., frontend/components/admin/GalleryManagement.jsx)
3. Public Gallery Section component (e.g., frontend/components/public/Gallery.jsx)
4. Supabase client configuration file (e.g., backend/config/supabase.js)
5. Environment configuration file (.env)

### 6.6 Staff and Student Coordinator Management Implementation Guide

#### Backend Implementation
1. Update event management API endpoints to include staff and student coordinator fields:
   - POST /api/events - Add new event with staff and student coordinators
   - GET /api/events - Retrieve all events with coordinator details
   - GET /api/events/:id - Retrieve specific event with coordinator details
   - GET /api/events/type/:eventType - Retrieve events by type (Technical/Cultural) with coordinators
   - PUT /api/events/:id - Update event including staff and student coordinator details
   - DELETE /api/events/:id - Delete event

2. API endpoint structure for coordinator data:
   - Staff coordinators stored as array within event record
   - Student coordinators stored as array within event record
   - Each coordinator object contains: name, contact, event_type

#### Frontend Implementation
1. Admin Dashboard Event Management component:
   - File location: frontend/components/admin/EventManagement.jsx or similar
   - Add staff coordinator management interface within event form:
     - Input fields for staff name, contact
     - Add/Edit/Delete functionality for staff coordinators
     - Associate staff with event type automatically
   - Add student coordinator management interface within event form:
     - Input fields for student name, contact
     - Add/Edit/Delete functionality for student coordinators
     - Associate students with event type automatically

2. Public Staff and Student Coordinators Section component:
   - File location: frontend/components/public/StaffStudentCoordinators.jsx or similar
   - Implementation:
     - Fetch event data including coordinator details from API endpoints
     - Display staff and student coordinators below Technical and Cultural events
     - Implement filtering logic based on selected event type
     - When Technical event selected: Display staff coordinators and student coordinators for Technical events
     - When Cultural event selected: Display staff coordinators and student coordinators for Cultural events

#### Database Schema Update
- Events table structure:
  - id (primary key)
  - name (text)
  - type (text: Technical/Cultural)
  - description (text)
  - rules (text)
  - instructions (text)
  - images (array)
  - staff_coordinators (jsonb array: [{name, contact}])
  - student_coordinators (jsonb array: [{name, contact}])
  - registration_link (text)
  - created_at (timestamp)
  - updated_at (timestamp)

#### Code Update Summary
Files requiring updates for staff and student coordinator management:
1. Backend API routes file (e.g., backend/routes/events.js)
2. Admin Dashboard Event Management component (e.g., frontend/components/admin/EventManagement.jsx)
3. Public Staff and Student Coordinators Section component (e.g., frontend/components/public/StaffStudentCoordinators.jsx)
4. Database schema file for events table with coordinator fields

### 6.7 Committee Member Info Section Implementation Guide

#### Backend Implementation
1. Update committee management API endpoints to include info section field:
   - POST /api/committee - Add new committee member with info section
   - GET /api/committee - Retrieve all committee members with info sections
   - GET /api/committee/:id - Retrieve specific committee member with info section
   - PUT /api/committee/:id - Update committee member including info section
   - DELETE /api/committee/:id - Delete committee member

2. API endpoint structure for committee member data:
   - Each committee member object contains: name, role, image_url, info_section

#### Frontend Implementation
1. Admin Dashboard Committee Management component:
   - File location: frontend/components/admin/CommitteeManagement.jsx or similar
   - Add info section input field within committee member form:
     - Text area or rich text editor for info section content
     - Character limit indicator (optional)
     - Preview functionality
   - Edit functionality for existing member info sections

2. Public Committee Section component:
   - File location: frontend/components/public/Committee.jsx or similar
   - Implementation:
     - Fetch committee member data including info sections from API endpoints
     - Display member cards with image, name, role, and info section
     - Implement expandable/collapsible info section or modal view
     - Add smooth transitions and cinematic effects

#### Database Schema Update
- Committee members table structure:
  - id (primary key)
  - name (text)
  - role (text)
  - image_url (text)
  - info_section (text)
  - created_at (timestamp)
  - updated_at (timestamp)

#### Code Update Summary
Files requiring updates for committee member info section:
1. Backend API routes file (e.g., backend/routes/committee.js)
2. Admin Dashboard Committee Management component (e.g., frontend/components/admin/CommitteeManagement.jsx)
3. Public Committee Section component (e.g., frontend/components/public/Committee.jsx)
4. Database schema file for committee_members table with info_section field

### 6.8 Responsive Secondary Header Implementation Guide

#### Backend Implementation
1. Create responsive configuration API endpoints:
   - POST /api/responsive-config - Create responsive configuration
   - GET /api/responsive-config - Retrieve responsive configuration
   - PUT /api/responsive-config/:id - Update responsive configuration
   - Implementation includes:
     - Breakpoint definitions (mobile, tablet, desktop)
     - Font size mappings for college name, location, institution status
     - Logo size mappings for different screen sizes
     - Logo positioning configurations

2. Update secondary header management API endpoints:
   - PUT /api/secondary-header/responsive - Update responsive settings
   - GET /api/secondary-header/responsive - Retrieve responsive settings

#### Frontend Implementation
1. Admin Dashboard Responsive Configuration component:
   - File location: frontend/components/admin/ResponsiveConfig.jsx or similar
   - Add responsive configuration interface:
     - Breakpoint configuration inputs
     - Font size sliders/inputs for different screen sizes
     - Logo size configuration for mobile/tablet/desktop
     - Logo positioning controls for different devices
     - Preview panel showing changes across screen sizes

2. Public Secondary Header component:
   - File location: frontend/components/public/SecondaryHeader.jsx or similar
   - Implementation:
     - Fetch responsive configuration from API
     - Apply CSS media queries based on breakpoints
     - Dynamically adjust font sizes based on screen size
     - Dynamically adjust logo sizes based on screen size
     - Implement flexible logo positioning for mobile view
     - Use CSS flexbox or grid for responsive layout

#### CSS Implementation
1. Create responsive styles file:
   - File location: frontend/styles/responsive-header.css or similar
   - Implementation:
     - Define media queries for mobile, tablet, desktop
     - Create font size classes for different screen sizes
     - Create logo size classes for different screen sizes
     - Implement flexible layout using flexbox/grid
     - Add smooth transitions for size changes

#### Database Schema Update
- Responsive configuration table structure:
  - id (primary key)
  - breakpoints (jsonb: {mobile, tablet, desktop})
  - font_size_mappings (jsonb: {college_name: {mobile, tablet, desktop}, location: {mobile, tablet, desktop}, institution_status: {mobile, tablet, desktop}})
  - logo_size_mappings (jsonb: {mobile, tablet, desktop})
  - logo_positioning (jsonb: {mobile, tablet, desktop})
  - created_at (timestamp)
  - updated_at (timestamp)

#### Code Update Summary
Files requiring updates for responsive secondary header:
1. Backend API routes file (e.g., backend/routes/responsive-config.js)
2. Backend secondary header routes file (e.g., backend/routes/secondary-header.js)
3. Admin Dashboard Responsive Configuration component (e.g., frontend/components/admin/ResponsiveConfig.jsx)
4. Public Secondary Header component (e.g., frontend/components/public/SecondaryHeader.jsx)
5. Responsive styles file (e.g., frontend/styles/responsive-header.css)
6. Database schema file for responsive_configuration table

## 7. Other Requirements

### 7.1 Supabase Table Schema
System will automatically create the following tables on first connection:
- primary_header_content (id, navigation_menu, navigation_position, styling, created_at, updated_at)
- secondary_header_content (id, college_name, location, institution_status, logos, logo_shapes, static_data, styling, created_at, updated_at)
- responsive_configuration (id, breakpoints, font_size_mappings, logo_size_mappings, logo_positioning, created_at, updated_at)
- text_styling (id, font_family, font_size, text_color, created_at, updated_at)
- background_settings (id, background_color, background_image_url, created_at, updated_at)
- body_content (id, text_boxes, created_at, updated_at)
- footer_content (id, structure, contact_details, social_links, styling, created_at, updated_at)
- events (id, name, type, description, rules, instructions, images, staff_coordinators, student_coordinators, registration_link, created_at, updated_at)
- committee_members (id, name, role, image_url, info_section, created_at, updated_at)
- gallery_images (id, image_url, created_at, updated_at)
- about_us (id, content, created_at, updated_at)
- contact_info (id, details, created_at, updated_at)
- admin_config (id, passkey, created_at, updated_at)
- chatbot_info (id, content, created_at, updated_at)

### 7.2 Image Storage
- All uploaded images stored in Supabase Storage
- Separate storage buckets for:
  - Logos (including secondary header logos with shape configurations and responsive sizing)
  - Event images
  - Committee member images
  - Gallery images (for Gallery Section display)
  - Background images
- Public access configured for image buckets
- Automatic URL generation for uploaded images
- Gallery bucket specifically configured for admin-uploaded gallery images that display in public Gallery Section
- Logo bucket supports circle and semi-square shape configurations with responsive sizing capabilities