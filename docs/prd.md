# Fusion26 College Fest Web Application Requirements Document

## 1. Application Overview

### 1.1 Application Name
Fusion26

### 1.2 Application Description
A cinematic, immersive multi-page web application for a college fest that delivers a premium, dramatic, and visually powerful experience inspired by modern event websites like ashv2k.in. The platform features a public user interface for event browsing and registration, alongside a secure admin dashboard with real-time live preview functionality accessible via enhanced chatbot authentication for comprehensive content management. The application supports multiple web pages with flexible responsive design across all screen sizes, and provides admins with complete control over all sections including dual header system with FUSION 2k26 background image, footer, and body content with drag-and-drop text box placement capabilities. The system connects to Supabase cloud database with manual configuration support.

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
- Admin-configurable background image for FUSION 2k26
- Background image automatically adjusts and scales to fit all screen sizes:
  - Desktop: Full-size display with optimal positioning
  - Tablet: Proportional scaling maintaining aspect ratio
  - Mobile: Responsive scaling ensuring visibility and proper fit
- Flexible background image positioning adapting to different screen dimensions

#### 2.1.2 Secondary Header Section (Logo and College Information Header)
- Positioned below the primary header section
- Fully responsive and flexible layout adapting to all screen sizes
- Enhanced visibility requirements for mobile view:
  - Minimum two logos must be visible on mobile screens
  - One logo positioned on left side
  - One logo positioned on right side
  - Automatic logo arrangement adjustment for mobile view
- Display college name: ADITYA College of Engineering Madanapalle
  - Styling: Golden color with black border and glowing background effect
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
  - Mobile view: Logos resize to fit mobile screen width while maintaining aspect ratio and visibility, with minimum two logos displayed (left and right positioning)
- Support for multiple college logos with configurable shapes:
  - Circle shape option
  - Semi-square shape option
- Responsive logo arrangement:
  - Logos reposition automatically for optimal display on different screen sizes
  - Mobile view: Minimum two logos displayed with left-right positioning
  - Maintains visual hierarchy across all devices
- Admin-configurable logo arrangement and positioning
- Static data display capabilities managed by admin
- Header details fully updatable through admin dashboard
- All text elements (college name, location, institution status) use responsive font sizing with golden color, black border, and glowing background
- Flexible layout ensures readability and visual appeal across all devices
- Admin can add, edit, or delete logos
- Admin can configure logo shapes individually

#### 2.1.3 Mobile Logo Scrolling Section (Homepage Only)
- Positioned within secondary header area on mobile view only
- Displays on homepage exclusively, not on other pages
- Automatic horizontal scrolling animation (left to right)
- Logo specifications for mobile scrolling:
  - Logo shape: Semi-square
  - Logo height: 20px
  - Logos scroll continuously in horizontal direction
- Continuous loop animation for logo display
- Smooth transitions between logos
- Admin can add or remove logos for mobile scrolling section
- Admin can configure logo display order
- Scrolling animation settings configurable by admin:
  - Scrolling speed adjustment
  - Animation direction (left to right)
  - Loop settings
- Mobile-only feature: Does not display on desktop or tablet views
- Homepage-only feature: Does not display on other pages (Committee, Gallery, Events, Contact Us, About Us)

#### 2.1.4 FUSION 2k26 Text Section
- Positioned within header area
- Flexible text display with responsive behavior:
  - Font size automatically adjusts based on screen size
  - Desktop: Large font size for prominence
  - Tablet: Medium font size for readability
  - Mobile: Smaller font size optimized for mobile view
- Text alignment automatically adjusts for different screen sizes
- Animated text effects:
  - Smooth entrance animations
  - Continuous subtle motion effects
  - Glow and fade animations
  - Admin-configurable animation styles
- Admin can customize FUSION 2k26 text styling and animation settings

#### 2.1.5 Homepage
- Cinematic hero section with parallax scrolling
- Smooth transitions and motion-based micro-interactions
- Dark theme with neon/gradient accents
- Bold modern typography
- Glow effects, animated cards, hover transitions
- Animated loading states
- Admin-configurable layout for header sections
- Admin-configurable FUSION 2k26 background image with responsive scaling
- Admin-configurable logo arrangement (add/delete logos with shape options)
- Admin-editable body content with flexible text box placement
- Background image removed, admin can update background settings
- Mobile logo scrolling section (homepage only) with semi-square logos (20px height) and left-to-right animation

#### 2.1.6 Event Poster Section
- Positioned above Events Section on homepage
- Automatic horizontal scrolling animation (left to right)
- Display event poster images uploaded by admin
- Continuous loop animation for poster display
- Smooth transitions between posters
- Admin can upload multiple event poster images
- Admin can add, edit, or delete event posters
- Cinematic layout with smooth animations

#### 2.1.7 Events Section
- Display events categorized by type (Technical/Cultural)
- Category selection buttons:
  - Technical button
  - Cultural button
- Each event card shows:
  - Event Name
  - Event Type
  - Event Image
  - Brief description preview
- Clicking on event card navigates to dedicated event detail page

#### 2.1.8 Event Type Coordinators Section
- Positioned below Technical and Cultural selection buttons on homepage
- Dynamic display based on event type selection:
  - When Technical button is selected: Display staff coordinators and student coordinators for Technical events
  - When Cultural button is selected: Display staff coordinators and student coordinators for Cultural events
- Display staff coordinator details:
  - Staff Name
  - Staff Role
  - Staff Photo (optional, round or semi-circle shape)
  - Associated Event Type (Technical/Cultural) - optional display
- Display student coordinator details:
  - Student Name
  - Student Contact Number
  - Student Photo (optional, round or semi-circle shape)
  - Associated Event Type (Technical/Cultural) - optional display
- Photo display control:
  - Admin can enable/disable photo display option
  - When photo option enabled: Display coordinator photos in round or semi-circle shape
  - When photo option disabled: Display only text details (name, role/contact)
- Admin-editable coordinator information through Event Type Coordinators Management
- Admin can add, edit, delete staff coordinator details (name, role, photo, event type)
- Admin can add, edit, delete student coordinator details (name, contact number, photo, event type)
- Admin can configure photo shape (round or semi-circle)
- Admin can configure whether to display event type field
- Cinematic layout with smooth transitions

#### 2.1.9 Event Detail Page
- Display complete event information:
  - Event Name
  - Event Type
  - Full Event Description with enhanced formatting:
    - Description text automatically justified for professional appearance
    - Support for bullet point lists within description
    - Support for numbered lists within description
    - Admin can select specific content and convert to list format
    - Admin can change text color for selected content
    - Admin can apply bold formatting to selected text
  - Event Rules
  - Event Instructions
  - Event Images (multiple images support)
  - Event-Specific Staff Coordinators:
    - Staff Name
    - Staff Role
    - Staff Photo (optional, round or semi-circle shape)
  - Event-Specific Student Coordinators:
    - Student Name
    - Student Contact Number
    - Student Photo (optional, round or semi-circle shape)
  - Registration button linking to Google Form (admin-provided link)
- Photo display control for event-specific coordinators:
  - Admin can enable/disable photo display option per event
  - When photo option enabled: Display coordinator photos in round or semi-circle shape
  - When photo option disabled: Display only text details
- Clicking registration button opens Google Form in new tab or embedded view
- Cinematic layout with smooth transitions
- Back navigation to Events Section

#### 2.1.10 Committee Section
- Display committee groups (not individual persons) with details:
  - Technical Committee
  - Cultural Committee
  - Other committees
- Each committee card displays:
  - Committee Image (optional)
  - Committee Title
  - Committee Description
  - Committee Coordinators Details:
    - Coordinator Name
    - Coordinator Role
    - Coordinator Photo (optional, round or semi-circle shape)
    - Coordinator Contact (optional)
- Clickable committee cards:
  - Clicking on any committee card opens detailed view
  - Purple glow effect applied when user clicks the card
  - Detailed view displays complete committee information:
    - Full-size committee image (if provided)
    - Committee title
    - Complete committee description
    - Complete coordinators details with photos (if enabled)
  - Modal or dedicated detail page for committee details
  - Close/back button to return to Committee Section
- Photo display control for committee coordinators:
  - Admin can enable/disable photo display option per committee
  - When photo option enabled: Display coordinator photos in round or semi-circle shape
  - When photo option disabled: Display only text details
- Admin can add, edit, delete committees
- Admin can configure committee image (optional)
- Admin can add, edit, delete committee coordinator details
- Cinematic layout with smooth transitions
- Smooth animations for card click and detail view opening
- Purple glow effect on card click for enhanced visual feedback

#### 2.1.11 Gallery Section
- Cinematic grid/masonry layout displaying uploaded images
- Image frame width increased by 1-2px for enhanced visual presentation
- Lazy loading implementation
- Smooth transitions between images
- Display images uploaded by admin through Gallery Management

#### 2.1.12 About Us Section
- Editable text content displaying fest information

#### 2.1.13 Contact Us Section
- Display contact details
- Contact form or contact information display

#### 2.1.14 Footer Section
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
  - Background image upload and changing for FUSION 2k26
  - Responsive background image scaling configuration:
    - Set image scaling behavior for desktop view
    - Set image scaling behavior for tablet view
    - Set image scaling behavior for mobile view
  - Background image positioning controls for different screen sizes
  - Default background color configuration
- Edit header structure and layout
- Changes reflect immediately on public UI header and live preview with responsive background image scaling

#### 2.3.3 Secondary Header (Logo and College Information Header) Management
- Update college name (default: ADITYA College of Engineering Madanapalle)
- Configure college name styling:
  - Golden color with black border and glowing background effect
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
  - Set logo sizes for mobile view with minimum two logos visible (left-right positioning)
- Configure responsive logo positioning:
  - Desktop layout configuration
  - Tablet layout configuration
  - Mobile layout configuration with minimum two logos displayed (left and right positioning)
- Add or delete logos dynamically
- Configure logo positioning and arrangement for all screen sizes
- Update static data displayed in logo header
- Edit header details and content
- Customize logo header styling:
  - Background color/image
  - Spacing and layout
  - Border and shadow effects
  - Glowing background effect configuration
- Configure responsive breakpoints for automatic font and logo adjustments
- All changes update automatically in database and reflect in live preview across all screen sizes

#### 2.3.4 Mobile Logo Scrolling Management (Homepage Only)
- Add or remove logos for mobile scrolling section
- Configure logo display order with drag-and-drop interface
- Logo specifications configuration:
  - Logo shape: Semi-square (fixed)
  - Logo height: 20px (fixed)
- Configure scrolling animation settings:
  - Scrolling speed adjustment
  - Animation direction: Left to right (fixed)
  - Loop settings
- Preview mobile logo scrolling animation in live preview
- Mobile-only feature configuration: Applies only to mobile view
- Homepage-only feature configuration: Applies only to homepage, not other pages
- All changes update automatically in database and reflect in live preview

#### 2.3.5 FUSION 2k26 Text Management
- Configure FUSION 2k26 text styling:
  - Font selection
  - Responsive font size adjustment for different screen sizes
  - Text color customization
- Configure text alignment for different screen sizes
- Configure animation settings:
  - Animation type selection (fade, glow, slide, etc.)
  - Animation speed adjustment
  - Animation loop settings
- All changes update automatically in database and reflect in live preview

#### 2.3.6 Body Content Management
- Add text boxes anywhere on the page with drag-and-drop functionality
- Position text boxes freely according to admin preference
- Edit text box content, styling, and positioning
- Delete text boxes as needed
- Rearrange body sections and components
- Customize body layout structure
- All changes update automatically in database and reflect in live preview

#### 2.3.7 Footer Management
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

#### 2.3.8 Homepage Layout Management
- Arrange primary header sections as desired
- Configure FUSION 2k26 background image with responsive scaling
- Configure FUSION 2k26 text with responsive sizing and animations
- Configure secondary logo and college information header layout
- Add or delete logos dynamically with shape configuration
- Configure mobile logo scrolling section (homepage only) with logo order settings
- Configure layout elements positioning
- Drag-and-drop interface for section reordering
- All customizations apply across multiple web pages

#### 2.3.9 Event Poster Management
- Upload event poster images
- Image upload interface with file selection
- Uploaded poster images stored in Supabase Storage
- Poster image URLs automatically generated and stored in event_posters table
- Configure automatic scrolling animation settings:
  - Scrolling speed adjustment
  - Animation direction (left to right)
  - Loop settings
- Add, edit, or delete event posters
- Rearrange poster display order
- Changes visible in live preview immediately

#### 2.3.10 Event Management
- Add new events with fields:
  - Event Name
  - Event Type (Technical/Cultural)
  - Event Description with enhanced rich text formatting:
    - Text justification enabled by default
    - Toolbar with formatting options:
      - Bullet list button
      - Numbered list button
      - Text alignment options
      - Text color picker for selected content
      - Bold text button for selected content
    - Select content and convert to list format functionality
    - Select content and change text color functionality
    - Select content and apply bold formatting functionality
    - Preview of formatted description
  - Event Rules
  - Event Instructions
  - Event Images upload (multiple images support)
  - Event-Specific Staff Coordinators:
    - Staff Name
    - Staff Role
    - Staff Photo upload (optional)
    - Photo shape configuration (round or semi-circle)
  - Event-Specific Student Coordinators:
    - Student Name
    - Student Contact Number
    - Student Photo upload (optional)
    - Photo shape configuration (round or semi-circle)
  - Photo display enable/disable option per event
  - Google Form registration link
- Edit existing events including event-specific coordinator details
- Delete events
- Admin can add, edit, or delete event-specific staff coordinator details directly in Events Section
- Admin can add, edit, or delete event-specific student coordinator details directly in Events Section
- Admin can upload coordinator photos and configure photo shapes
- Events auto-display on public UI based on event type
- Event cards link to dedicated event detail pages
- Changes visible in live preview immediately

#### 2.3.11 Event Type Coordinators Management
- Add staff coordinators with fields:
  - Staff Name
  - Staff Role
  - Staff Photo upload (optional)
  - Photo shape configuration (round or semi-circle)
  - Associated Event Type (Technical/Cultural)
  - Event Type display toggle (optional display on public UI)
- Add student coordinators with fields:
  - Student Name
  - Student Contact Number
  - Student Photo upload (optional)
  - Photo shape configuration (round or semi-circle)
  - Associated Event Type (Technical/Cultural)
  - Event Type display toggle (optional display on public UI)
- Photo display enable/disable option for coordinators
- Edit existing coordinator details including name, role/contact, photo, event type
- Delete coordinators
- Admin can upload coordinator photos and configure photo shapes
- Admin can configure whether event type field is displayed on public UI
- Coordinators display dynamically on homepage below Technical and Cultural selection buttons based on event type selection
- Changes visible in live preview immediately

#### 2.3.12 Committee Management
- Add committees (groups) with fields:
  - Committee Title
  - Committee Description
  - Committee Image upload (optional)
  - Committee Coordinators:
    - Coordinator Name
    - Coordinator Role
    - Coordinator Photo upload (optional)
    - Photo shape configuration (round or semi-circle)
    - Coordinator Contact (optional)
  - Photo display enable/disable option per committee
- Edit committee information including title, description, image, and coordinator details
- Delete committees
- Admin can upload committee images and coordinator photos
- Admin can configure photo shapes for coordinators
- Automatic display on public Committee Section
- Changes display dynamically on website and live preview

#### 2.3.13 Gallery Management
- Upload multiple images to gallery
- Image upload interface with file selection
- Uploaded images stored in Supabase Storage
- Image URLs automatically generated and stored in gallery_images table
- Images appear in cinematic gallery layout on public UI Gallery Section
- Live preview shows gallery updates instantly
- Delete images from gallery
- Rearrange image display order
- Configure image frame width (increased by 1-2px for enhanced visual presentation)

#### 2.3.14 About Us Management
- Edit About Us section text content
- Updates reflect immediately on public UI and live preview

#### 2.3.15 Contact & Social Media Management
- Update contact details
- Update social media links (Instagram, LinkedIn, WhatsApp, Email)
- Changes reflect instantly on public UI and live preview

#### 2.3.16 Passkey Management
- Change passkey functionality with validation:
  - Enter old passkey
  - Enter new passkey
  - Confirm new passkey
- Validation rules:
  - Old passkey must match database value
  - New passkey and confirm passkey must match
- Passkey update stored securely in Supabase

#### 2.3.17 Complete Application Editing
- Admin has full control to edit entire application:
  - Primary header sections with FUSION 2k26 background image and responsive scaling
  - FUSION 2k26 text with responsive sizing and animations
  - Secondary logo and college information header sections with responsive configurations and glowing background
  - Mobile logo scrolling section (homepage only) with logo order settings
  - Event poster section with automatic scrolling animations
  - Footer sections
  - Body parts
  - All content areas
  - Event type coordinator details with photo management and role field
  - Event-specific coordinator details with photo management and role field
  - Committee information including title, description, image, and coordinator details with photo management and role field
  - Event descriptions with justified text, list formatting, text color customization, and bold text formatting
  - Gallery image frame width configuration
  - Committee card purple glow effect on click
- Flexible editing interface allowing customization of any component
- All edits automatically update database
- All changes reflect instantly on public website and live preview

#### 2.3.18 Supabase Connection Management
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
- Primary header with admin-configurable FUSION 2k26 background image that scales responsively across all screen sizes
- FUSION 2k26 text with responsive sizing and animated effects
- Secondary header with golden color college name styling, black border, and glowing background effect for enhanced attractiveness, positioned below primary header
- Secondary header includes configurable logo shapes (circle/semi-square) with minimum two logos visible on mobile (left-right positioning)
- Fully responsive secondary header with flexible logo sizing and text scaling across all devices
- Mobile logo scrolling section (homepage only) with semi-square logos (20px height) and automatic left-to-right scrolling animation
- Event poster section with automatic horizontal scrolling animation (left to right)
- Event type coordinators section with photo display options (round or semi-circle shapes) and optional event type display
- Event descriptions displayed with justified text alignment, list formatting support, text color customization, and bold text formatting
- Committee section displaying committee groups with optional images, descriptions, and coordinator details with role field
- Committee coordinator photos with configurable shapes (round or semi-circle)
- Clickable committee cards with smooth animations opening detailed committee view
- Committee cards with purple glow effect on click for enhanced visual feedback
- Committee detail view with modal or dedicated page displaying complete committee information
- Gallery section with increased image frame width (1-2px more) for enhanced visual presentation

### 3.2 Responsive Design
- Fully responsive across mobile, tablet, and desktop devices
- Flexible layout adapting to all screen sizes for easy access
- Smooth page transitions and animated loading states
- Responsive dual header system with mobile-friendly navigation menu positioned at top-right
- FUSION 2k26 background image automatically scales and adjusts to fit all screen sizes:
  - Desktop: Full-size display with optimal aspect ratio
  - Tablet: Proportional scaling maintaining visual quality
  - Mobile: Responsive scaling ensuring proper fit and visibility
- FUSION 2k26 text with responsive font sizing and alignment adjustment:
  - Desktop: Large font size with optimal alignment
  - Tablet: Medium font size with adjusted alignment
  - Mobile: Smaller font size with mobile-optimized alignment
- Secondary header with intelligent responsive behavior:
  - College name, location, and institution status text automatically resize based on screen size with golden color, black border, and glowing background
  - Logos automatically adjust size and positioning for optimal display on all devices
  - Mobile view: Minimum two logos displayed (left and right positioning) with appropriate scaling
  - Tablet view: Proportional scaling for tablet displays
  - Desktop view: Full-size display with optimal spacing
- Mobile logo scrolling section (homepage only):
  - Displays only on mobile view
  - Displays only on homepage, not on other pages
  - Semi-square logos with 20px height
  - Automatic left-to-right scrolling animation
- Event poster section responsive across all screen sizes with automatic scrolling animation
- Event type coordinators section responsive with photo display options and optional event type display
- Multiple web pages with consistent responsive behavior
- Admin dashboard optimized for desktop editing experience
- Event descriptions maintain justified alignment, list formatting, text colors, and bold formatting across all screen sizes
- Committee detail view responsive across all devices
- Committee cards with purple glow effect on click responsive across all devices
- Coordinator photos display responsively in round or semi-circle shapes
- Gallery images with increased frame width (1-2px more) responsive across all screen sizes

### 3.3 Performance Optimization
- Optimized animations and images
- Fast loading times
- Lazy loading for gallery images
- High performance rendering
- Efficient live preview updates without page reload
- Optimized background image loading with responsive image sizing
- Efficient modal/detail view loading for committee details
- Optimized event poster scrolling animation
- Efficient coordinator photo loading with lazy loading
- Optimized mobile logo scrolling animation (homepage only)
- Efficient purple glow effect rendering on committee card click

## 4. Technical Requirements

### 4.1 Database
- Supabase cloud database for data storage
- Manual connection configuration support
- Tables for:
  - Primary header content (navigation menu, positioning, styling configurations, background image URL, responsive scaling settings)
  - FUSION 2k26 text content (text content, font settings, responsive sizing configurations, alignment settings, animation settings)
  - Secondary header content (college name: ADITYA College of Engineering Madanapalle, location: MADANAPALLE, institution status: UGC - Autonomous Institution, logos with shape configurations: circle/semi-square, responsive sizing configurations, positioning data including mobile left-right positioning, static data, styling with golden color, black border, glowing background)
  - Mobile logo scrolling content (homepage only: logo URLs, logo order, scrolling animation settings, semi-square shape, 20px height)
  - Responsive configuration (breakpoints, font size mappings, logo size mappings for different screen sizes, background image scaling settings, text alignment mappings)
  - Text styling configurations (font, size, color)
  - Background settings (color, image, responsive scaling parameters)
  - Body content (text boxes with positioning data)
  - Footer content and styling
  - Event posters (image URLs, display order, animation settings)
  - Events (including rules, instructions, multiple images, event-specific staff coordinators with photos and role field, event-specific student coordinators with photos, Google Form links, description formatting data with text color and bold formatting, photo display settings, photo shape configurations)
  - Event type coordinators (staff coordinators with name, role, photo, event type, event type display toggle; student coordinators with name, contact number, photo, event type, event type display toggle; photo display settings, photo shape configurations)
  - Committees (committee title, description, image, coordinators with name, role, photo, contact, photo display settings, photo shape configurations, purple glow effect settings)
  - Gallery images (storing image URLs from Supabase Storage, frame width configuration)
  - About Us content
  - Contact information
  - Admin passkey
  - Database connection configuration
  - Chatbot information content
- Automatic data updates on admin changes
- Connection credentials stored securely
- Supabase Storage for image uploads including FUSION 2k26 background images, event posters, coordinator photos, committee images, mobile scrolling logos
- Event-specific coordinator details stored within events table
- Event type coordinator details stored in separate event_type_coordinators table with role field and event type display toggle
- Committee details stored in committees table with coordinator role field and purple glow effect settings
- Event description formatting metadata including text color and bold formatting stored within events table
- Mobile logo scrolling data stored in mobile_logo_scrolling table (homepage only)

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
  - Primary header management (navigation menu, positioning, FUSION 2k26 background image upload, responsive scaling configuration)
  - FUSION 2k26 text management (text content, font settings, responsive sizing, alignment, animation settings)
  - Secondary header management (college name, location, institution status styling with golden color, black border, glowing background, logo upload, shape configuration, responsive sizing configuration, positioning including mobile left-right positioning)
  - Mobile logo scrolling management (homepage only: logo upload, logo order configuration, scrolling animation settings, semi-square shape, 20px height)
  - Responsive configuration management (breakpoints, font size mappings, logo size mappings, background image scaling settings, text alignment mappings)
  - Text styling updates
  - Background customization with responsive image scaling
  - Text box positioning and content
  - Footer management
  - Event poster management (upload, retrieve, delete, animation settings)
  - Event detail page data (including event-specific coordinator management with photo upload and role field, description formatting with text color and bold formatting, photo display settings, photo shape configuration)
  - Event type coordinators management (add, edit, delete staff and student coordinators with photo upload, role field, event type display toggle, photo display settings, photo shape configuration)
  - Committee management (add, edit, delete committees with title, description, image, coordinator details with photo upload and role field, photo display settings, photo shape configuration, purple glow effect settings)
  - Committee detail retrieval for detailed view
  - Gallery image management (upload, retrieve, delete, frame width configuration)
  - Complete application editing
  - Chatbot information retrieval
  - Image upload to Supabase Storage (including FUSION 2k26 background images, event posters, coordinator photos, committee images, mobile scrolling logos)
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
  - Public UI Gallery Section displays images using stored URLs with increased frame width (1-2px more)
- FUSION 2k26 background image upload flow:
  - Admin uploads background image through Primary Header Management interface
  - Frontend sends image file to backend API endpoint
  - Backend uploads image to Supabase Storage backgrounds bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL and responsive scaling settings in primary_header_content table
  - Frontend retrieves background image URL and applies responsive scaling
  - Public UI displays background image with automatic scaling across all screen sizes
- Event poster image upload flow:
  - Admin uploads poster images through Event Poster Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage event_posters bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL and display order in event_posters table
  - Frontend retrieves poster image URLs and displays with automatic scrolling animation
- Coordinator photo upload flow:
  - Admin uploads coordinator photos through Event Management or Event Type Coordinators Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage coordinator_photos bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL in events table (event-specific) or event_type_coordinators table (event type coordinators)
  - Frontend retrieves photo URLs and displays in round or semi-circle shape based on configuration
- Committee image and coordinator photo upload flow:
  - Admin uploads committee images and coordinator photos through Committee Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage committees bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URLs in committees table
  - Frontend retrieves image URLs and displays committee images and coordinator photos
- Mobile logo scrolling image upload flow (homepage only):
  - Admin uploads logo images through Mobile Logo Scrolling Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage mobile_logos bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL and display order in mobile_logo_scrolling table
  - Frontend retrieves logo image URLs and displays with automatic left-to-right scrolling animation on mobile homepage only
- File update locations for gallery image upload:
  - Backend API file: Create/update gallery upload endpoint (e.g., /api/gallery/upload)
  - Admin Dashboard component: Add image upload interface in Gallery Management section
  - Public Gallery component: Fetch and display images from gallery_images table with increased frame width
  - Supabase Storage configuration: Create gallery bucket with public access
- File update locations for FUSION 2k26 background image upload:
  - Backend API file: Create/update background upload endpoint (e.g., /api/header/background)
  - Admin Dashboard component: Add background image upload interface in Primary Header Management section
  - Public Header component: Fetch and display background image with responsive scaling
  - Supabase Storage configuration: Create backgrounds bucket with public access
- File update locations for event poster image upload:
  - Backend API file: Create/update event poster upload endpoint (e.g., /api/event-posters/upload)
  - Admin Dashboard component: Add poster image upload interface in Event Poster Management section
  - Public Event Poster Section component: Fetch and display posters with automatic scrolling animation
  - Supabase Storage configuration: Create event_posters bucket with public access
- File update locations for coordinator photo upload:
  - Backend API file: Create/update coordinator photo upload endpoint (e.g., /api/coordinators/photo)
  - Admin Dashboard component: Add photo upload interface in Event Management and Event Type Coordinators Management sections
  - Public Event Detail Page and Event Type Coordinators Section components: Fetch and display coordinator photos
  - Supabase Storage configuration: Create coordinator_photos bucket with public access
- File update locations for committee image and coordinator photo upload:
  - Backend API file: Create/update committee image upload endpoint (e.g., /api/committees/image)
  - Admin Dashboard component: Add image upload interface in Committee Management section
  - Public Committee Section component: Fetch and display committee images and coordinator photos
  - Supabase Storage configuration: Create committees bucket with public access
- File update locations for mobile logo scrolling image upload (homepage only):
  - Backend API file: Create/update mobile logo upload endpoint (e.g., /api/mobile-logos/upload)
  - Admin Dashboard component: Add logo upload interface in Mobile Logo Scrolling Management section
  - Public Mobile Logo Scrolling Section component: Fetch and display logos with automatic left-to-right scrolling animation on mobile homepage only
  - Supabase Storage configuration: Create mobile_logos bucket with public access

### 4.4 Rich Text Editor Implementation
- Event description rich text editor:
  - Implement rich text editor component (e.g., Quill, TinyMCE, or Draft.js)
  - Toolbar features:
    - Text justification button (default enabled)
    - Bullet list button
    - Numbered list button
    - Text alignment options (left, center, right, justify)
    - Text color picker for selected content
    - Bold text button for selected content
  - Content selection and list conversion functionality
  - Content selection and text color change functionality
  - Content selection and bold formatting functionality
  - HTML output storage in events table
  - Frontend rendering of formatted HTML content with text colors and bold formatting
- File update locations for rich text editor:
  - Admin Dashboard Event Management component: Integrate rich text editor with text color and bold formatting options
  - Backend API: Store formatted HTML content with text color and bold formatting in events table description field
  - Public Event Detail Page component: Render formatted HTML with proper styling including text colors and bold formatting

### 4.5 Committee Detail View Implementation
- Committee detail view functionality:
  - Implement clickable committee cards in Committee Section
  - Create modal component or dedicated detail page for committee details
  - Display complete committee information:
    - Full-size committee image (if provided)
    - Committee title
    - Complete committee description
    - Complete coordinators details with photos (if enabled) and role field
  - Add close/back button functionality
  - Implement smooth animations for opening and closing detail view
  - Implement purple glow effect on committee card click
- File update locations for committee detail view:
  - Public Committee Section component: Add click event handlers to committee cards with purple glow effect
  - Committee Detail Modal/Page component: Create new component for detailed view
  - Backend API: Create endpoint for retrieving individual committee details (e.g., GET /api/committees/:id)
  - CSS/Animation file: Add transition and animation styles for detail view and purple glow effect

### 4.6 Event Poster Scrolling Animation Implementation
- Event poster automatic scrolling:
  - Implement horizontal scrolling animation (left to right)
  - Continuous loop animation
  - Smooth transitions between posters
  - Configurable scrolling speed
  - Responsive behavior across all screen sizes
- File update locations for event poster scrolling:
  - Public Event Poster Section component: Implement scrolling animation logic
  - CSS/Animation file: Add scrolling animation styles and keyframes
  - Admin Dashboard Event Poster Management component: Add animation speed configuration interface

### 4.7 FUSION 2k26 Text Animation Implementation
- FUSION 2k26 text animations:
  - Implement entrance animations (fade, slide, etc.)
  - Implement continuous motion effects
  - Implement glow and fade animations
  - Configurable animation types and speeds
  - Responsive text sizing and alignment
- File update locations for FUSION 2k26 text animation:
  - Public FUSION 2k26 Text component: Implement animation logic
  - CSS/Animation file: Add text animation styles and keyframes
  - Admin Dashboard FUSION 2k26 Text Management component: Add animation configuration interface

### 4.8 Coordinator Photo Display Implementation
- Coordinator photo display functionality:
  - Support round and semi-circle photo shapes
  - Photo display enable/disable option
  - Responsive photo sizing
  - Lazy loading for performance
- File update locations for coordinator photo display:
  - Public Event Detail Page component: Implement photo display with shape configuration
  - Public Event Type Coordinators Section component: Implement photo display with shape configuration
  - Public Committee Section component: Implement coordinator photo display with shape configuration
  - CSS file: Add photo shape styles (round and semi-circle)
  - Admin Dashboard components: Add photo upload and shape configuration interfaces

### 4.9 Mobile Logo Scrolling Implementation (Homepage Only)
- Mobile logo scrolling functionality:
  - Implement horizontal scrolling animation (left to right)
  - Continuous loop animation
  - Semi-square logo shape (fixed)
  - Logo height: 20px (fixed)
  - Configurable scrolling speed
  - Mobile-only display: Does not display on desktop or tablet
  - Homepage-only display: Does not display on other pages
  - Admin can add/remove logos and configure display order
- File update locations for mobile logo scrolling:
  - Public Mobile Logo Scrolling Section component: Implement scrolling animation logic with mobile and homepage detection
  - CSS/Animation file: Add scrolling animation styles and keyframes for mobile view only
  - Admin Dashboard Mobile Logo Scrolling Management component: Add logo upload, order configuration, and animation settings interface
  - Backend API: Create endpoints for mobile logo management (upload, retrieve, delete, order configuration)

### 4.10 Committee Card Purple Glow Effect Implementation
- Committee card purple glow effect functionality:
  - Implement purple glow effect on card click
  - Smooth transition for glow effect
  - Responsive behavior across all devices
  - Glow effect applied when user clicks committee card
- File update locations for committee card purple glow effect:
  - Public Committee Section component: Add click event handler with purple glow effect
  - CSS/Animation file: Add purple glow effect styles using box-shadow or similar CSS properties
  - Example CSS:
    ```css
    .committee-card.clicked {
      box-shadow: 0 0 20px rgba(128, 0, 128, 0.8),
                  0 0 40px rgba(128, 0, 128, 0.6),
                  0 0 60px rgba(128, 0, 128, 0.4);
      transition: box-shadow 0.3s ease;
    }
    ```

### 4.11 Gallery Frame Width Configuration Implementation
- Gallery frame width configuration functionality:
  - Increase image frame width by 1-2px for enhanced visual presentation
  - Admin can configure frame width
  - Responsive frame width across all screen sizes
- File update locations for gallery frame width configuration:
  - Admin Dashboard Gallery Management component: Add frame width configuration interface
  - Public Gallery Section component: Apply configured frame width to images
  - CSS file: Add frame width styles
  - Backend API: Store frame width configuration in gallery_images table or separate configuration table

### 4.12 Code Quality
- Clean, modular, scalable codebase
- Maintainable UI component structure
- Optimized for production deployment
- Support for multiple web pages architecture
- Efficient real-time update mechanism
- Secure connection credentials handling
- Responsive design implementation using CSS media queries and flexible layouts
- Responsive image scaling implementation for background images
- Rich text editor integration with proper sanitization and text color/bold formatting support
- Modal/detail view component with proper state management
- Automatic scrolling animation implementation for event posters
- Text animation implementation for FUSION 2k26 text
- Photo display implementation with shape configuration and lazy loading
- Mobile logo scrolling implementation (homepage only) with semi-square shape and 20px height
- Committee card purple glow effect implementation
- Gallery frame width configuration implementation

## 5. User Flow

### 5.1 Public User Flow
1. User lands on cinematic homepage with dual header system:
   - Primary header displaying navigation menu at top-right corner (Home, Events, Committee, Gallery, About Us, Contact Us) with FUSION 2k26 background image that automatically scales to fit screen size
   - FUSION 2k26 text with responsive sizing and animated effects
   - Secondary header positioned below primary header displaying ADITYA College of Engineering Madanapalle (golden color with black border and glowing background, responsive font sizing), MADANAPALLE (responsive font 12/14), UGC - Autonomous Institution (responsive font 12/14), and college logos with configured shapes (circle/semi-square) that automatically adjust size based on screen size with minimum two logos visible on mobile (left-right positioning)
   - Mobile logo scrolling section (mobile view only, homepage only) displaying semi-square logos (20px height) with automatic left-to-right scrolling animation
2. User navigates through multiple web pages using top-right navigation menu
3. User experiences consistent responsive design across all screen sizes with automatic font and logo adjustments, responsive FUSION 2k26 background image scaling, and animated FUSION 2k26 text
4. User views Event Poster Section above Events Section with automatic horizontal scrolling animation (left to right)
5. User views events by category (Technical/Cultural) on Events page
6. User clicks Technical or Cultural selection button
7. User views Event Type Coordinators Section below selection buttons:
   - When Technical button selected: System displays staff coordinators (name, role, photo if enabled) and student coordinators (name, contact number, photo if enabled) for Technical events
   - When Cultural button selected: System displays staff coordinators (name, role, photo if enabled) and student coordinators (name, contact number, photo if enabled) for Cultural events
   - Event type field displayed optionally based on admin configuration
8. User clicks on event card to navigate to dedicated event detail page
9. User views complete event information including:
   - Full description with justified text alignment, list formatting, text color customization, and bold text formatting
   - Rules and instructions
   - Event images
   - Event-specific staff coordinator details (name, role, photo if enabled in round or semi-circle shape)
   - Event-specific student coordinator details (name, contact number, photo if enabled in round or semi-circle shape)
10. User clicks registration button on event detail page
11. Google Form opens (link provided by admin)
12. User explores committee section and views committee groups (Technical Committee, Cultural Committee, etc.) with committee cards displaying title, description preview, and coordinator details (name, role, photo if enabled, contact)
13. User clicks on committee card to view complete committee details
14. Purple glow effect applied to committee card on click
15. Detailed view opens (modal or dedicated page) displaying:
    - Full-size committee image (if provided)
    - Committee title
    - Complete committee description
    - Complete coordinators details with photos (if enabled, round or semi-circle shape) and role field
16. User closes detail view and returns to Committee Section
17. User explores gallery section and views images uploaded by admin with increased frame width (1-2px more) for enhanced visual presentation
18. User views improved footer section with contact details and social media links
19. User can interact with chatbot to get website information and details
20. User experiences optimal viewing on mobile devices with properly scaled logos (minimum two visible with left-right positioning), text with golden color, black border, and glowing background, responsive FUSION 2k26 background image, animated FUSION 2k26 text in secondary header, and mobile logo scrolling section (homepage only) with semi-square logos (20px height) and automatic left-to-right scrolling animation

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
   - Primary Header: Position navigation menu at top-right, configure styling, upload FUSION 2k26 background image, configure responsive scaling for background image across different screen sizes
   - FUSION 2k26 Text: Configure text content, font settings, responsive sizing, alignment, animation settings
   - Secondary Header: Update college name (ADITYA College of Engineering Madanapalle), location (MADANAPALLE), institution status (UGC - Autonomous Institution), configure golden color styling with black border and glowing background, upload logos, configure logo shapes (circle/semi-square), configure responsive sizing for logos and text across different screen sizes with minimum two logos visible on mobile (left-right positioning), manage positioning, update static data
   - Mobile Logo Scrolling (homepage only): Add/remove logos, configure logo display order, configure scrolling animation settings (semi-square shape, 20px height, left-to-right animation)
   - Responsive Configuration: Set breakpoints, configure font size mappings for different screen sizes, configure logo size mappings for desktop/tablet/mobile views with mobile left-right positioning, configure background image scaling behavior, configure text alignment mappings
   - Text Styling: Adjust font, size, color
   - Background: Change color or upload background image (admin-controlled) with responsive scaling configuration
   - Body Content: Add text boxes anywhere with drag-and-drop, edit positioning and content
   - Footer: Edit structure, update contact details, customize styling
   - Event Posters: Upload event poster images, configure automatic scrolling animation settings, rearrange poster display order
   - Events: Add event details including rules, instructions, multiple images, event-specific staff coordinator details (name, role, photo with shape configuration), event-specific student coordinator details (name, contact number, photo with shape configuration), Google Form link; Use rich text editor for event description with text justification, list formatting options, text color picker, and bold text button; Edit event-specific coordinator details directly within Events Section; Configure photo display enable/disable option per event
   - Event Type Coordinators: Add staff coordinator details (name, role, photo with shape configuration, event type, event type display toggle), add student coordinator details (name, contact number, photo with shape configuration, event type, event type display toggle); Configure photo display enable/disable option for coordinators; Edit coordinator details including name, role/contact, photo, event type
   - Committees: Add committees with title, description, image (optional), coordinator details (name, role, photo with shape configuration, contact); Edit committee information; Configure photo display enable/disable option per committee; Configure purple glow effect settings
   - Gallery: Upload images through Gallery Management interface, images stored in Supabase Storage and displayed in public Gallery Section; Configure image frame width (increased by 1-2px for enhanced visual presentation)
   - About Us, Contact management
   - Chatbot information content management
10. Admin arranges homepage layout and dual header sections as desired
11. Admin uploads and configures FUSION 2k26 background image with responsive scaling settings for different devices
12. Admin configures FUSION 2k26 text with responsive sizing and animation settings
13. Admin configures responsive behavior for secondary header including logo sizing (minimum two visible on mobile with left-right positioning) and text scaling with golden color, black border, and glowing background for different devices
14. Admin configures mobile logo scrolling section (homepage only) with logo upload, order settings, and animation configuration (semi-square shape, 20px height, left-to-right animation)
15. Admin uploads event poster images and configures automatic scrolling animation
16. Admin edits entire application including primary header with FUSION 2k26 background image, FUSION 2k26 text with animations, secondary header with responsive configurations and glowing background, mobile logo scrolling section (homepage only), event poster section with scrolling animation, footer, body sections, event type coordinator details with photo management and role field, event-specific coordinator details with photo management and role field, committee information including title, description, image, and coordinator details with photo management and role field, event descriptions with rich text formatting including text color and bold formatting, gallery image frame width configuration, and committee card purple glow effect settings
17. Admin can change passkey through Passkey Management
18. All changes save to Supabase automatically and reflect immediately across all web pages on public UI and live preview with proper responsive behavior including background image scaling, text animations, poster scrolling, photo display, mobile logo scrolling (homepage only), committee card purple glow effect, and gallery frame width configuration
19. Admin can access and edit multiple web pages with consistent editing interface

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
2. Test FUSION 2k26 background image display and responsive scaling across different screen sizes
3. Test FUSION 2k26 text display with responsive sizing and animations
4. Test responsive behavior of secondary header across different screen sizes with golden color, black border, and glowing background
5. Verify logo sizing adjustments on mobile, tablet, and desktop views with minimum two logos visible on mobile (left-right positioning)
6. Verify text scaling for college name, location, and institution status across devices
7. Test mobile logo scrolling section (homepage only) with semi-square logos (20px height) and automatic left-to-right scrolling animation on mobile devices
8. Verify mobile logo scrolling section does not display on desktop or tablet views
9. Verify mobile logo scrolling section displays only on homepage, not on other pages
10. Test event poster section display and automatic scrolling animation
11. Test event type coordinators section display and filtering based on event type selection
12. Test coordinator photo display with round and semi-circle shapes
13. Test coordinator role field display for staff coordinators
14. Test event type display toggle functionality
15. Test chatbot authentication
16. Test admin dashboard functionality
17. Test database connection
18. Verify live preview updates
19. Test gallery image upload and display with increased frame width (1-2px more)
20. Test FUSION 2k26 background image upload and responsive scaling configuration
21. Test FUSION 2k26 text configuration with responsive sizing and animation settings
22. Test event poster image upload and scrolling animation configuration
23. Test primary and secondary header management including responsive configurations with glowing background
24. Test mobile logo scrolling management (homepage only) with logo upload, order configuration, and animation settings
25. Test event type coordinator details display, filtering, and photo management
26. Test event type coordinator editing with photo upload, shape configuration, role field, and event type display toggle
27. Test event-specific coordinator details display and photo management
28. Test event-specific coordinator editing within Events Section with photo upload, shape configuration, and role field
29. Test committee management with title, description, image, and coordinator details including role field
30. Test committee card click functionality and detail view opening
31. Test committee card purple glow effect on click
32. Test committee detail view display with complete committee information including coordinator role field
33. Test committee detail view close/back functionality
34. Test event description rich text editor with justification, list formatting, text color picker, and bold text button
35. Test event description display with formatted content including text colors and bold formatting

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
3. Test FUSION 2k26 background image display and responsive scaling on actual devices
4. Test FUSION 2k26 text display with responsive sizing and animations on actual devices
5. Test responsive behavior of secondary header on actual mobile devices with golden color, black border, and glowing background
6. Verify logo and text scaling across different screen sizes with minimum two logos visible on mobile (left-right positioning)
7. Test mobile logo scrolling section (homepage only) on actual mobile devices with semi-square logos (20px height) and automatic left-to-right scrolling animation
8. Verify mobile logo scrolling section does not display on desktop or tablet devices
9. Verify mobile logo scrolling section displays only on homepage, not on other pages
10. Test event poster section display and automatic scrolling animation on actual devices
11. Test event type coordinators section display, filtering, and photo display on actual devices
12. Test coordinator photo display with round and semi-circle shapes on actual devices
13. Test coordinator role field display for staff coordinators
14. Test event type display toggle functionality
15. Test admin authentication and dashboard
16. Verify database connectivity
17. Test live preview functionality
18. Verify image uploads to Supabase Storage
19. Test gallery image display on public UI with increased frame width (1-2px more)
20. Test FUSION 2k26 background image upload and responsive scaling configuration
21. Test FUSION 2k26 text configuration with responsive sizing and animation settings
22. Test event poster image upload and scrolling animation configuration
23. Test primary and secondary header display and management with responsive configurations and glowing background
24. Test mobile logo scrolling management (homepage only) with logo upload, order configuration, and animation settings
25. Test event type coordinator details display, filtering, and photo management functionality
26. Test event type coordinator editing with photo upload, shape configuration, role field, and event type display toggle
27. Test event-specific coordinator details display and photo management functionality
28. Test event-specific coordinator editing within Events Section with photo upload, shape configuration, and role field
29. Test committee management with title, description, image, and coordinator details functionality including role field
30. Test committee card click functionality and detail view opening on actual devices
31. Test committee card purple glow effect on click on actual devices
32. Test committee detail view responsiveness across different screen sizes
33. Test committee detail view close/back functionality
34. Test event description rich text editor functionality with text color and bold formatting
35. Test event description display with justified and listified formatting including text colors and bold formatting

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
6. Add FUSION 2k26 background image upload endpoint
7. Add FUSION 2k26 text management endpoint
8. Add event poster image upload endpoint
9. Add primary and secondary header management endpoints
10. Add responsive configuration management endpoints
11. Add mobile logo scrolling management endpoints (homepage only)
12. Add event type coordinator management endpoints with photo upload, role field, and event type display toggle
13. Add event-specific coordinator management endpoints with photo upload and role field within Events Section
14. Add committee management endpoints with image and coordinator photo upload including role field and purple glow effect settings
15. Add committee detail retrieval endpoint
16. Add event description formatting endpoints with text color and bold formatting
17. Add gallery frame width configuration endpoint

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
6. Test gallery image upload and display with increased frame width
7. Test FUSION 2k26 background image upload and responsive scaling
8. Test FUSION 2k26 text configuration with responsive sizing and animations
9. Test event poster image upload and scrolling animation
10. Test dual header system management
11. Test responsive configuration management for secondary header with glowing background
12. Test mobile logo scrolling management (homepage only) with logo upload, order configuration, and animation settings
13. Test event type coordinator management, filtering, and photo upload with shape configuration, role field, and event type display toggle
14. Test event-specific coordinator management and photo upload with shape configuration and role field within Events Section
15. Test committee management with title, description, image, and coordinator photo upload including role field and purple glow effect settings
16. Test committee card click and detail view functionality with purple glow effect
17. Test event description rich text editor with text color and bold formatting
18. Test gallery frame width configuration

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

4. Create gallery frame width configuration API endpoint:
   - Endpoint: PUT /api/gallery/frame-width
   - Implementation: Update frame width configuration in gallery_images table or separate configuration table

#### Frontend Implementation
1. Admin Dashboard Gallery Management component:
   - File location: frontend/components/admin/GalleryManagement.jsx or similar
   - Add image upload interface:
     - File input for selecting multiple images
     - Upload button triggering API call to /api/gallery/upload
     - Display uploaded images with delete option
     - Show upload progress indicator
   - Add frame width configuration interface:
     - Input field or slider for frame width adjustment (1-2px increase)
     - Preview of frame width changes

2. Public Gallery Section component:
   - File location: frontend/components/public/Gallery.jsx or similar
   - Implementation:
     - Fetch image URLs from /api/gallery/images endpoint
     - Display images in cinematic grid/masonry layout
     - Apply configured frame width (increased by 1-2px)
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
6. CSS file for gallery frame width styles (e.g., frontend/styles/gallery.css)

### 6.6 FUSION 2k26 Background Image Implementation Guide

#### Backend Implementation
1. Create background image upload API endpoint:
   - File location: backend/routes/header.js or backend/api/header.js
   - Endpoint: POST /api/header/background
   - Implementation steps:
     - Accept multipart/form-data image file
     - Validate image file type (jpg, png, gif, webp)
     - Upload image to Supabase Storage backgrounds bucket
     - Retrieve public URL from Supabase Storage
     - Update primary_header_content table with image URL and responsive scaling settings
     - Return success response with image URL

2. Create background image retrieval API endpoint:
   - Endpoint: GET /api/header/background
   - Implementation: Fetch background image URL and responsive scaling settings from primary_header_content table

3. Create responsive scaling configuration API endpoint:
   - Endpoint: PUT /api/header/background/scaling
   - Implementation: Update responsive scaling settings for background image

#### Frontend Implementation
1. Admin Dashboard Primary Header Management component:
   - File location: frontend/components/admin/PrimaryHeaderManagement.jsx or similar
   - Add background image upload interface:
     - File input for selecting background image
     - Upload button triggering API call to /api/header/background
     - Preview of uploaded background image
     - Responsive scaling configuration controls:
       - Desktop scaling settings
       - Tablet scaling settings
       - Mobile scaling settings
     - Background positioning controls

2. Public Primary Header component:
   - File location: frontend/components/public/PrimaryHeader.jsx or similar
   - Implementation:
     - Fetch background image URL and scaling settings from /api/header/background endpoint
     - Apply background image with CSS
     - Implement responsive scaling using CSS media queries:
       - Desktop: background-size and background-position for desktop view
       - Tablet: background-size and background-position for tablet view
       - Mobile: background-size and background-position for mobile view
     - Ensure smooth transitions between breakpoints

#### CSS Implementation
1. Create responsive background styles:
   - File location: frontend/styles/header-background.css or similar
   - Implementation:
     - Define media queries for mobile, tablet, desktop
     - Create background-size classes for different screen sizes
     - Create background-position classes for different screen sizes
     - Implement smooth transitions for background scaling
     - Ensure background covers header area properly on all devices

#### Supabase Storage Configuration
1. Create backgrounds storage bucket:
   - Bucket name: backgrounds
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for FUSION 2k26 background image:
1. Backend API routes file (e.g., backend/routes/header.js)
2. Admin Dashboard Primary Header Management component (e.g., frontend/components/admin/PrimaryHeaderManagement.jsx)
3. Public Primary Header component (e.g., frontend/components/public/PrimaryHeader.jsx)
4. Responsive background styles file (e.g., frontend/styles/header-background.css)
5. Supabase client configuration file (e.g., backend/config/supabase.js)
6. Database schema file for primary_header_content table with background image fields

### 6.7 FUSION 2k26 Text Animation Implementation Guide

#### Backend Implementation
1. Create FUSION 2k26 text management API endpoints:
   - POST /api/fusion-text - Create FUSION 2k26 text configuration
   - GET /api/fusion-text - Retrieve FUSION 2k26 text configuration
   - PUT /api/fusion-text/:id - Update FUSION 2k26 text configuration including text content, font settings, responsive sizing, alignment, animation settings

#### Frontend Implementation
1. Admin Dashboard FUSION 2k26 Text Management component:
   - File location: frontend/components/admin/FusionTextManagement.jsx or similar
   - Add text configuration interface:
     - Text content input field
     - Font selection dropdown
     - Responsive font size configuration for desktop/tablet/mobile
     - Text alignment configuration for different screen sizes
     - Animation type selection (fade, glow, slide, etc.)
     - Animation speed slider
     - Animation loop settings
     - Preview panel showing text with animations

2. Public FUSION 2k26 Text component:
   - File location: frontend/components/public/FusionText.jsx or similar
   - Implementation:
     - Fetch text configuration from /api/fusion-text endpoint
     - Apply responsive font sizing using CSS media queries
     - Apply text alignment based on screen size
     - Implement animations using CSS animations or JavaScript libraries
     - Ensure smooth transitions between breakpoints

#### CSS Implementation
1. Create FUSION 2k26 text animation styles:
   - File location: frontend/styles/fusion-text-animation.css or similar
   - Implementation:
     - Define media queries for responsive font sizing
     - Define media queries for responsive text alignment
     - Create animation keyframes for different animation types (fade, glow, slide, etc.)
     - Implement smooth transitions
     - Add glow effects using text-shadow or box-shadow

#### Code Update Summary
Files requiring updates for FUSION 2k26 text animation:
1. Backend API routes file (e.g., backend/routes/fusion-text.js)
2. Admin Dashboard FUSION 2k26 Text Management component (e.g., frontend/components/admin/FusionTextManagement.jsx)
3. Public FUSION 2k26 Text component (e.g., frontend/components/public/FusionText.jsx)
4. FUSION 2k26 text animation styles file (e.g., frontend/styles/fusion-text-animation.css)
5. Database schema file for fusion_text_content table

### 6.8 Event Poster Scrolling Animation Implementation Guide

#### Backend Implementation
1. Create event poster management API endpoints:
   - POST /api/event-posters/upload - Upload event poster images
   - GET /api/event-posters - Retrieve all event poster images with display order and animation settings
   - PUT /api/event-posters/:id - Update event poster display order or animation settings
   - DELETE /api/event-posters/:id - Delete event poster

#### Frontend Implementation
1. Admin Dashboard Event Poster Management component:
   - File location: frontend/components/admin/EventPosterManagement.jsx or similar
   - Add poster upload interface:
     - File input for selecting multiple poster images
     - Upload button triggering API call to /api/event-posters/upload
     - Display uploaded posters with delete option
     - Drag-and-drop interface for reordering posters
     - Animation speed configuration slider
     - Preview panel showing scrolling animation

2. Public Event Poster Section component:
   - File location: frontend/components/public/EventPosterSection.jsx or similar
   - Implementation:
     - Fetch poster image URLs and animation settings from /api/event-posters endpoint
     - Implement horizontal scrolling animation (left to right)
     - Create continuous loop animation
     - Apply configurable scrolling speed
     - Ensure responsive behavior across all screen sizes
     - Add smooth transitions between posters

#### CSS Implementation
1. Create event poster scrolling animation styles:
   - File location: frontend/styles/event-poster-animation.css or similar
   - Implementation:
     - Define scrolling animation keyframes
     - Create continuous loop animation
     - Implement smooth transitions
     - Add responsive styles for different screen sizes
     - Ensure proper poster sizing and spacing

#### Supabase Storage Configuration
1. Create event_posters storage bucket:
   - Bucket name: event_posters
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for event poster scrolling animation:
1. Backend API routes file (e.g., backend/routes/event-posters.js)
2. Admin Dashboard Event Poster Management component (e.g., frontend/components/admin/EventPosterManagement.jsx)
3. Public Event Poster Section component (e.g., frontend/components/public/EventPosterSection.jsx)
4. Event poster animation styles file (e.g., frontend/styles/event-poster-animation.css)
5. Supabase client configuration file (e.g., backend/config/supabase.js)
6. Database schema file for event_posters table

### 6.9 Event Type Coordinators Management Implementation Guide

#### Backend Implementation
1. Create event type coordinators management API endpoints:
   - POST /api/event-type-coordinators/staff - Add staff coordinator with photo upload and role field
   - POST /api/event-type-coordinators/student - Add student coordinator with photo upload
   - GET /api/event-type-coordinators/staff/:eventType - Retrieve staff coordinators by event type (Technical/Cultural)
   - GET /api/event-type-coordinators/student/:eventType - Retrieve student coordinators by event type (Technical/Cultural)
   - PUT /api/event-type-coordinators/staff/:id - Update staff coordinator including photo and role field
   - PUT /api/event-type-coordinators/student/:id - Update student coordinator including photo
   - DELETE /api/event-type-coordinators/staff/:id - Delete staff coordinator
   - DELETE /api/event-type-coordinators/student/:id - Delete student coordinator

2. API endpoint structure for event type coordinator data:
   - Staff coordinator object: name, role, photo_url, photo_shape (round/semi-circle), event_type (Technical/Cultural), photo_display_enabled, event_type_display_enabled
   - Student coordinator object: name, contact_number, photo_url, photo_shape (round/semi-circle), event_type (Technical/Cultural), photo_display_enabled, event_type_display_enabled

#### Frontend Implementation
1. Admin Dashboard Event Type Coordinators Management component:
   - File location: frontend/components/admin/EventTypeCoordinatorsManagement.jsx or similar
   - Add staff coordinator management interface:
     - Input fields for staff name, role
     - Event type selection (Technical/Cultural)
     - Photo upload interface
     - Photo shape selection (round/semi-circle)
     - Photo display enable/disable toggle
     - Event type display enable/disable toggle
     - Add/Edit/Delete functionality
   - Add student coordinator management interface:
     - Input fields for student name, contact number
     - Event type selection (Technical/Cultural)
     - Photo upload interface
     - Photo shape selection (round/semi-circle)
     - Photo display enable/disable toggle
     - Event type display enable/disable toggle
     - Add/Edit/Delete functionality

2. Public Event Type Coordinators Section component:
   - File location: frontend/components/public/EventTypeCoordinatorsSection.jsx or similar
   - Implementation:
     - Fetch coordinator data from API endpoints based on selected event type
     - Display staff coordinators with name, role, photo (if enabled)
     - Display student coordinators with name, contact number, photo (if enabled)
     - Display event type field optionally based on event_type_display_enabled setting
     - Implement filtering logic based on Technical/Cultural button selection
     - Apply photo shapes (round or semi-circle) based on configuration
     - Responsive display across all screen sizes

#### CSS Implementation
1. Create coordinator photo styles:
   - File location: frontend/styles/coordinator-photos.css or similar
   - Implementation:
     - Define round photo shape styles (border-radius: 50%)
     - Define semi-circle photo shape styles (border-radius: 50% 50% 0 0)
     - Add responsive sizing for photos
     - Implement hover effects
     - Add smooth transitions

#### Supabase Storage Configuration
1. Create coordinator_photos storage bucket:
   - Bucket name: coordinator_photos
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for event type coordinators management:
1. Backend API routes file (e.g., backend/routes/event-type-coordinators.js)
2. Admin Dashboard Event Type Coordinators Management component (e.g., frontend/components/admin/EventTypeCoordinatorsManagement.jsx)
3. Public Event Type Coordinators Section component (e.g., frontend/components/public/EventTypeCoordinatorsSection.jsx)
4. Coordinator photo styles file (e.g., frontend/styles/coordinator-photos.css)
5. Supabase client configuration file (e.g., backend/config/supabase.js)
6. Database schema file for event_type_coordinators table with role field and event_type_display_enabled field

### 6.10 Event-Specific Coordinators Management Implementation Guide

#### Backend Implementation
1. Update event management API endpoints to include event-specific coordinator fields with photo upload and role field:
   - POST /api/events - Add new event with event-specific staff and student coordinators including photos and role field
   - GET /api/events - Retrieve all events with event-specific coordinator details including photos and role field
   - GET /api/events/:id - Retrieve specific event with event-specific coordinator details including photos and role field
   - PUT /api/events/:id - Update event including event-specific staff and student coordinator details with photos and role field
   - DELETE /api/events/:id - Delete event

2. API endpoint structure for event-specific coordinator data:
   - Event-specific staff coordinators stored as array within event record
   - Event-specific student coordinators stored as array within event record
   - Each staff coordinator object contains: name, role, photo_url, photo_shape (round/semi-circle), photo_display_enabled
   - Each student coordinator object contains: name, contact_number, photo_url, photo_shape (round/semi-circle), photo_display_enabled

#### Frontend Implementation
1. Admin Dashboard Event Management component:
   - File location: frontend/components/admin/EventManagement.jsx or similar
   - Add event-specific staff coordinator management interface within event form:
     - Input fields for staff name, role
     - Photo upload interface
     - Photo shape selection (round/semi-circle)
     - Photo display enable/disable toggle per event
     - Add/Edit/Delete functionality for staff coordinators
   - Add event-specific student coordinator management interface within event form:
     - Input fields for student name, contact number
     - Photo upload interface
     - Photo shape selection (round/semi-circle)
     - Photo display enable/disable toggle per event
     - Add/Edit/Delete functionality for student coordinators

2. Public Event Detail Page component:
   - File location: frontend/components/public/EventDetailPage.jsx or similar
   - Implementation:
     - Fetch event data including event-specific coordinator details with photos and role field from API endpoints
     - Display event-specific staff coordinators with name, role, photo (if enabled)
     - Display event-specific student coordinators with name, contact number, photo (if enabled)
     - Apply photo shapes (round or semi-circle) based on configuration
     - Responsive display across all screen sizes

#### Database Schema Update
- Events table structure:
  - id (primary key)
  - name (text)
  - type (text: Technical/Cultural)
  - description (text with HTML formatting including text color and bold formatting)
  - rules (text)
  - instructions (text)
  - images (array)
  - event_specific_staff_coordinators (jsonb array: [{name, role, photo_url, photo_shape, photo_display_enabled}])
  - event_specific_student_coordinators (jsonb array: [{name, contact_number, photo_url, photo_shape, photo_display_enabled}])
  - registration_link (text)
  - created_at (timestamp)
  - updated_at (timestamp)

#### Code Update Summary
Files requiring updates for event-specific coordinators management:
1. Backend API routes file (e.g., backend/routes/events.js)
2. Admin Dashboard Event Management component (e.g., frontend/components/admin/EventManagement.jsx)
3. Public Event Detail Page component (e.g., frontend/components/public/EventDetailPage.jsx)
4. Coordinator photo styles file (e.g., frontend/styles/coordinator-photos.css)
5. Database schema file for events table with event-specific coordinator fields including role field

### 6.11 Committee Management Implementation Guide

#### Backend Implementation
1. Update committee management API endpoints to include committee group fields:
   - POST /api/committees - Add new committee group with title, description, image, coordinator details with photos and role field
   - GET /api/committees - Retrieve all committee groups with details
   - GET /api/committees/:id - Retrieve specific committee group with complete details
   - PUT /api/committees/:id - Update committee group including title, description, image, coordinator details with photos and role field, purple glow effect settings
   - DELETE /api/committees/:id - Delete committee group

2. API endpoint structure for committee data:
   - Each committee object contains: title, description, image_url, coordinators (array), photo_display_enabled, purple_glow_enabled
   - Each coordinator object contains: name, role, photo_url, photo_shape (round/semi-circle), contact (optional)

#### Frontend Implementation
1. Admin Dashboard Committee Management component:
   - File location: frontend/components/admin/CommitteeManagement.jsx or similar
   - Add committee group management interface:
     - Input field for committee title
     - Text area for committee description
     - Image upload interface for committee image (optional)
     - Coordinator management section:
       - Input fields for coordinator name, role, contact (optional)
       - Photo upload interface
       - Photo shape selection (round/semi-circle)
       - Add/Edit/Delete functionality for coordinators
     - Photo display enable/disable toggle per committee
     - Purple glow effect enable/disable toggle
   - Edit functionality for existing committee groups
   - Delete functionality for committee groups

2. Public Committee Section component:
   - File location: frontend/components/public/Committee.jsx or similar
   - Implementation:
     - Fetch committee group data from API endpoints
     - Display committee cards with title, description preview, coordinator details including role field
     - Add click event handlers to committee cards
     - Implement purple glow effect on card click (if enabled)
     - Implement expandable/collapsible view or modal for complete committee details
     - Display committee image (if provided)
     - Display coordinator photos (if enabled) in round or semi-circle shape
     - Add smooth transitions and cinematic effects

3. Committee Detail Modal/Page component:
   - File location: frontend/components/public/CommitteeDetail.jsx or similar
   - Implementation:
     - Create modal or dedicated page component
     - Display complete committee information:
       - Full-size committee image (if provided)
       - Committee title
       - Complete committee description
       - Complete coordinators details with photos (if enabled) and role field
     - Add close/back button functionality
     - Implement smooth animations for opening and closing
     - Ensure responsive design across all devices

#### Database Schema Update
- Committees table structure:
  - id (primary key)
  - title (text)
  - description (text)
  - image_url (text, optional)
  - coordinators (jsonb array: [{name, role, photo_url, photo_shape, contact}])
  - photo_display_enabled (boolean)
  - purple_glow_enabled (boolean)
  - created_at (timestamp)
  - updated_at (timestamp)

#### Supabase Storage Configuration
1. Create committees storage bucket:
   - Bucket name: committees
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for committee management:
1. Backend API routes file (e.g., backend/routes/committees.js)
2. Admin Dashboard Committee Management component (e.g., frontend/components/admin/CommitteeManagement.jsx)
3. Public Committee Section component (e.g., frontend/components/public/Committee.jsx)
4. Committee Detail Modal/Page component (e.g., frontend/components/public/CommitteeDetail.jsx)
5. Coordinator photo styles file (e.g., frontend/styles/coordinator-photos.css)
6. CSS/Animation file for committee detail view transitions and purple glow effect (e.g., frontend/styles/committee-detail.css)
7. Database schema file for committees table with coordinator role field and purple_glow_enabled field

### 6.12 Event Description Rich Text Editor with Text Color and Bold Formatting Implementation Guide

#### Backend Implementation
1. Update event management API endpoints to support HTML formatted descriptions with text color and bold formatting:
   - POST /api/events - Accept HTML formatted description with text color and bold formatting
   - PUT /api/events/:id - Update event with HTML formatted description with text color and bold formatting
   - GET /api/events/:id - Retrieve event with HTML formatted description with text color and bold formatting

2. Add HTML sanitization middleware:
   - Install sanitization library (e.g., DOMPurify or sanitize-html)
   - Sanitize HTML content before storing in database
   - Allow safe HTML tags: p, ul, ol, li, strong, em, br, span (with style attribute for text color)
   - Allow style attribute for text color (color property only)
   - Remove potentially harmful scripts and attributes

#### Frontend Implementation
1. Install rich text editor library:
   - Options: Quill, TinyMCE, Draft.js, or React-Quill
   - Recommended: React-Quill for React applications
   - Installation command:
     ```
     npm install react-quill
     ```

2. Admin Dashboard Event Management component:
   - File location: frontend/components/admin/EventManagement.jsx or similar
   - Integrate rich text editor:
     - Import rich text editor component
     - Replace plain text area with rich text editor
     - Configure toolbar with options:
       - Text alignment (left, center, right, justify)
       - Bullet list button
       - Numbered list button
       - Bold formatting button
       - Text color picker
     - Set default text alignment to justify
     - Add content selection and list conversion functionality
     - Add content selection and text color change functionality
     - Add content selection and bold formatting functionality
     - Implement preview panel showing formatted output
     - Store HTML output in event description field

3. Public Event Detail Page component:
   - File location: frontend/components/public/EventDetailPage.jsx or similar
   - Implementation:
     - Fetch event data including HTML formatted description with text color and bold formatting
     - Render HTML content using dangerouslySetInnerHTML or safe HTML renderer
     - Apply CSS styling to maintain justified alignment, list formatting, text colors, and bold formatting:
       - Paragraph justification
       - Bullet list styling
       - Numbered list styling
       - Text color preservation
       - Bold text styling
       - Proper spacing and indentation
     - Ensure responsive display across all screen sizes

#### CSS Implementation
1. Create event description styles:
   - File location: frontend/styles/event-description.css or similar
   - Implementation:
     - Define styles for justified text
     - Define styles for bullet lists (ul, li)
     - Define styles for numbered lists (ol, li)
     - Define styles for bold text (strong, b)
     - Preserve inline text color styles
     - Add proper spacing and indentation
     - Ensure responsive behavior
     - Example styles:
       ```css
       .event-description {
         text-align: justify;
       }
       .event-description ul,
       .event-description ol {
         margin-left: 20px;
         margin-bottom: 10px;
       }
       .event-description li {
         margin-bottom: 5px;
       }
       .event-description strong,
       .event-description b {
         font-weight: bold;
       }
       ```

#### Code Update Summary
Files requiring updates for event description rich text editor with text color and bold formatting:
1. Backend API routes file (e.g., backend/routes/events.js)
2. Backend HTML sanitization middleware (e.g., backend/middleware/sanitize.js)
3. Admin Dashboard Event Management component (e.g., frontend/components/admin/EventManagement.jsx)
4. Public Event Detail Page component (e.g., frontend/components/public/EventDetailPage.jsx)
5. Event description styles file (e.g., frontend/styles/event-description.css)
6. Package.json (add rich text editor dependency)

### 6.13 Responsive Secondary Header with Glowing Background Implementation Guide

#### Backend Implementation
1. Update secondary header management API endpoints to include glowing background configuration:
   - PUT /api/secondary-header/styling - Update secondary header styling including golden color, black border, glowing background effect
   - GET /api/secondary-header/styling - Retrieve secondary header styling configuration

2. Update responsive configuration API endpoints:
   - PUT /api/responsive-config/secondary-header - Update responsive configuration for secondary header including minimum two logos visible on mobile with left-right positioning
   - GET /api/responsive-config/secondary-header - Retrieve responsive configuration for secondary header

#### Frontend Implementation
1. Admin Dashboard Secondary Header Management component:
   - File location: frontend/components/admin/SecondaryHeaderManagement.jsx or similar
   - Add styling configuration interface:
     - Golden color picker for college name text
     - Black border width configuration
     - Glowing background effect configuration:
       - Glow color picker
       - Glow intensity slider
       - Glow spread slider
     - Responsive font size configuration for college name, location, institution status
     - Responsive logo sizing configuration with minimum two logos visible on mobile
     - Mobile logo positioning configuration (left-right positioning)

2. Public Secondary Header component:
   - File location: frontend/components/public/SecondaryHeader.jsx or similar
   - Implementation:
     - Fetch styling configuration from API
     - Apply golden color to college name text
     - Apply black border to college name text
     - Apply glowing background effect using CSS box-shadow or text-shadow
     - Implement responsive font sizing using CSS media queries
     - Implement responsive logo sizing with minimum two logos visible on mobile
     - Implement mobile logo positioning (left-right positioning)
     - Ensure smooth transitions between breakpoints

#### CSS Implementation
1. Create secondary header glowing background styles:
   - File location: frontend/styles/secondary-header-glow.css or similar
   - Implementation:
     - Define golden color for college name text
     - Define black border styles
     - Define glowing background effect using box-shadow:
       ```css
       .college-name {
         color: #D4AF37; /* Golden color */
         text-shadow: 0 0 2px #000; /* Black border */
         background: rgba(212, 175, 55, 0.1);
         box-shadow: 0 0 20px rgba(212, 175, 55, 0.5),
                     0 0 40px rgba(212, 175, 55, 0.3),
                     0 0 60px rgba(212, 175, 55, 0.2);
       }
       ```
     - Define responsive font sizes using media queries
     - Define responsive logo sizing with minimum two logos visible on mobile
     - Define mobile logo positioning (left-right positioning)
     - Add smooth transitions

#### Code Update Summary
Files requiring updates for responsive secondary header with glowing background:
1. Backend API routes file (e.g., backend/routes/secondary-header.js)
2. Backend responsive configuration routes file (e.g., backend/routes/responsive-config.js)
3. Admin Dashboard Secondary Header Management component (e.g., frontend/components/admin/SecondaryHeaderManagement.jsx)
4. Public Secondary Header component (e.g., frontend/components/public/SecondaryHeader.jsx)
5. Secondary header glowing background styles file (e.g., frontend/styles/secondary-header-glow.css)
6. Database schema file for secondary_header_content table with glowing background fields

### 6.14 Mobile Logo Scrolling Implementation Guide (Homepage Only)

#### Backend Implementation
1. Create mobile logo scrolling management API endpoints:
   - POST /api/mobile-logos/upload - Upload logo images for mobile scrolling section
   - GET /api/mobile-logos - Retrieve all mobile logo images with display order and animation settings
   - PUT /api/mobile-logos/:id - Update mobile logo display order or animation settings
   - DELETE /api/mobile-logos/:id - Delete mobile logo

2. API endpoint structure for mobile logo scrolling data:
   - Each mobile logo object contains: logo_url, display_order, logo_shape (semi-square, fixed), logo_height (20px, fixed), scrolling_speed, animation_direction (left to right, fixed), loop_enabled

#### Frontend Implementation
1. Admin Dashboard Mobile Logo Scrolling Management component:
   - File location: frontend/components/admin/MobileLogoScrollingManagement.jsx or similar
   - Add logo upload interface:
     - File input for selecting multiple logo images
     - Upload button triggering API call to /api/mobile-logos/upload
     - Display uploaded logos with delete option
     - Drag-and-drop interface for reordering logos
     - Animation speed configuration slider
     - Preview panel showing scrolling animation on mobile view
   - Configuration notes:
     - Logo shape: Semi-square (fixed, not configurable)
     - Logo height: 20px (fixed, not configurable)
     - Animation direction: Left to right (fixed, not configurable)
     - Mobile-only display: Applies only to mobile view
     - Homepage-only display: Applies only to homepage

2. Public Mobile Logo Scrolling Section component:
   - File location: frontend/components/public/MobileLogoScrollingSection.jsx or similar
   - Implementation:
     - Fetch logo image URLs and animation settings from /api/mobile-logos endpoint
     - Implement horizontal scrolling animation (left to right)
     - Create continuous loop animation
     - Apply configurable scrolling speed
     - Apply semi-square logo shape (fixed)
     - Apply 20px logo height (fixed)
     - Implement mobile-only display logic:
       - Display only on mobile view (screen width < 768px or similar breakpoint)
       - Hide on desktop and tablet views
     - Implement homepage-only display logic:
       - Display only on homepage route
       - Hide on other pages (Committee, Gallery, Events, Contact Us, About Us)
     - Add smooth transitions between logos

#### CSS Implementation
1. Create mobile logo scrolling animation styles:
   - File location: frontend/styles/mobile-logo-scrolling.css or similar
   - Implementation:
     - Define scrolling animation keyframes
     - Create continuous loop animation
     - Implement smooth transitions
     - Define semi-square logo shape styles
     - Define 20px logo height
     - Add mobile-only media query:
       ```css
       @media (max-width: 767px) {
         .mobile-logo-scrolling {
           display: block;
         }
       }
       @media (min-width: 768px) {
         .mobile-logo-scrolling {
           display: none;
         }
       }
       ```
     - Ensure proper logo sizing and spacing

#### Supabase Storage Configuration
1. Create mobile_logos storage bucket:
   - Bucket name: mobile_logos
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for mobile logo scrolling (homepage only):
1. Backend API routes file (e.g., backend/routes/mobile-logos.js)
2. Admin Dashboard Mobile Logo Scrolling Management component (e.g., frontend/components/admin/MobileLogoScrollingManagement.jsx)
3. Public Mobile Logo Scrolling Section component (e.g., frontend/components/public/MobileLogoScrollingSection.jsx)
4. Mobile logo scrolling animation styles file (e.g., frontend/styles/mobile-logo-scrolling.css)
5. Supabase client configuration file (e.g., backend/config/supabase.js)
6. Database schema file for mobile_logo_scrolling table
7. Homepage component (e.g., frontend/pages/Home.jsx) - Add mobile logo scrolling section

### 6.15 Committee Card Purple Glow Effect Implementation Guide

#### Backend Implementation
1. Update committee management API endpoints to include purple glow effect settings:
   - PUT /api/committees/:id - Update committee including purple_glow_enabled field
   - GET /api/committees - Retrieve all committees with purple_glow_enabled field

#### Frontend Implementation
1. Admin Dashboard Committee Management component:
   - File location: frontend/components/admin/CommitteeManagement.jsx or similar
   - Add purple glow effect configuration:
     - Purple glow effect enable/disable toggle per committee
     - Preview of purple glow effect on card click

2. Public Committee Section component:
   - File location: frontend/components/public/Committee.jsx or similar
   - Implementation:
     - Fetch committee data including purple_glow_enabled field
     - Add click event handler to committee cards
     - Apply purple glow effect on card click (if enabled)
     - Implement smooth transition for glow effect
     - Ensure responsive behavior across all devices

#### CSS Implementation
1. Create committee card purple glow effect styles:
   - File location: frontend/styles/committee-card-glow.css or similar
   - Implementation:
     - Define purple glow effect using box-shadow:
       ```css
       .committee-card.clicked {
         box-shadow: 0 0 20px rgba(128, 0, 128, 0.8),
                     0 0 40px rgba(128, 0, 128, 0.6),
                     0 0 60px rgba(128, 0, 128, 0.4);
         transition: box-shadow 0.3s ease;
       }
       ```
     - Add smooth transition for glow effect
     - Ensure responsive behavior across all screen sizes

#### Code Update Summary
Files requiring updates for committee card purple glow effect:
1. Backend API routes file (e.g., backend/routes/committees.js)
2. Admin Dashboard Committee Management component (e.g., frontend/components/admin/CommitteeManagement.jsx)
3. Public Committee Section component (e.g., frontend/components/public/Committee.jsx)
4. Committee card purple glow effect styles file (e.g., frontend/styles/committee-card-glow.css)
5. Database schema file for committees table with purple_glow_enabled field

### 6.16 Gallery Frame Width Configuration Implementation Guide

#### Backend Implementation
1. Update gallery management API endpoints to include frame width configuration:
   - PUT /api/gallery/frame-width - Update gallery frame width configuration
   - GET /api/gallery/frame-width - Retrieve gallery frame width configuration

#### Frontend Implementation
1. Admin Dashboard Gallery Management component:
   - File location: frontend/components/admin/GalleryManagement.jsx or similar
   - Add frame width configuration interface:
     - Input field or slider for frame width adjustment (1-2px increase)
     - Preview of frame width changes
     - Default frame width display

2. Public Gallery Section component:
   - File location: frontend/components/public/Gallery.jsx or similar
   - Implementation:
     - Fetch frame width configuration from /api/gallery/frame-width endpoint
     - Apply configured frame width to gallery images
     - Ensure responsive behavior across all screen sizes

#### CSS Implementation
1. Create gallery frame width styles:
   - File location: frontend/styles/gallery-frame.css or similar
   - Implementation:
     - Define frame width styles with configurable width:
       ```css
       .gallery-image {
         border: var(--frame-width, 2px) solid #333;
       }
       ```
     - Add responsive styles for different screen sizes
     - Ensure proper image sizing and spacing

#### Code Update Summary
Files requiring updates for gallery frame width configuration:
1. Backend API routes file (e.g., backend/routes/gallery.js)
2. Admin Dashboard Gallery Management component (e.g., frontend/components/admin/GalleryManagement.jsx)
3. Public Gallery Section component (e.g., frontend/components/public/Gallery.jsx)
4. Gallery frame width styles file (e.g., frontend/styles/gallery-frame.css)
5. Database schema file for gallery_images table or separate configuration table with frame_width field

## 7. Other Requirements

### 7.1 Supabase Table Schema
System will automatically create the following tables on first connection:
- primary_header_content (id, navigation_menu, navigation_position, styling, background_image_url, responsive_scaling_settings, created_at, updated_at)
- fusion_text_content (id, text_content, font_settings, responsive_sizing_settings, alignment_settings, animation_settings, created_at, updated_at)
- secondary_header_content (id, college_name, location, institution_status, logos, logo_shapes, static_data, styling_with_golden_color_black_border_glowing_background, mobile_logo_positioning, created_at, updated_at)
- mobile_logo_scrolling (id, logo_url, display_order, logo_shape (semi-square, fixed), logo_height (20px, fixed), scrolling_speed, animation_direction (left to right, fixed), loop_enabled, created_at, updated_at)
- responsive_configuration (id, breakpoints, font_size_mappings, logo_size_mappings_with_mobile_left_right_positioning, logo_positioning, background_scaling_mappings, text_alignment_mappings, created_at, updated_at)
- text_styling (id, font_family, font_size, text_color, created_at, updated_at)
- background_settings (id, background_color, background_image_url, responsive_scaling_settings, created_at, updated_at)
- body_content (id, text_boxes, created_at, updated_at)
- footer_content (id, structure, contact_details, social_links, styling, created_at, updated_at)
- event_posters (id, image_url, display_order, animation_settings, created_at, updated_at)
- events (id, name, type, description_html_with_text_color_and_bold_formatting, rules, instructions, images, event_specific_staff_coordinators_with_photos_and_role, event_specific_student_coordinators_with_photos, registration_link, photo_display_enabled, created_at, updated_at)
- event_type_coordinators (id, coordinator_type (staff/student), name, role_or_contact, photo_url, photo_shape, event_type, photo_display_enabled, event_type_display_enabled, created_at, updated_at)
- committees (id, title, description, image_url, coordinators_with_photos_and_role, photo_display_enabled, purple_glow_enabled, created_at, updated_at)
- gallery_images (id, image_url, frame_width, created_at, updated_at)
- about_us (id, content, created_at, updated_at)
- contact_info (id, details, created_at, updated_at)
- admin_config (id, passkey, created_at, updated_at)
- chatbot_info (id, content, created_at, updated_at)

### 7.2 Image Storage
- All uploaded images stored in Supabase Storage
- Separate storage buckets for:
  - Backgrounds (including FUSION 2k26 header background images with responsive scaling support)
  - Logos (including secondary header logos with shape configurations, responsive sizing, and mobile left-right positioning)
  - Mobile_logos (for mobile logo scrolling section, homepage only, semi-square shape, 20px height)
  - Event posters (for Event Poster Section with automatic scrolling animation)
  - Event images
  - Coordinator photos (for event type coordinators and event-specific coordinators with round and semi-circle shape support)
  - Committee images and coordinator photos (for committee groups with round and semi-circle shape support)
  - Gallery images (for Gallery Section display with configurable frame width)
  - Background images
- Public access configured for image buckets
- Automatic URL generation for uploaded images
- Gallery bucket specifically configured for admin-uploaded gallery images that display in public Gallery Section with increased frame width (1-2px more)
- Backgrounds bucket specifically configured for FUSION 2k26 header background images with responsive scaling capabilities
- Event_posters bucket specifically configured for event poster images with automatic scrolling animation
- Coordinator_photos bucket specifically configured for coordinator photos with round and semi-circle shape configurations
- Committees bucket specifically configured for committee images and coordinator photos with round and semi-circle shape configurations
- Mobile_logos bucket specifically configured for mobile logo scrolling section (homepage only) with semi-square shape and 20px height
- Logo bucket supports circle and semi-square shape configurations with responsive sizing capabilities and mobile left-right positioning