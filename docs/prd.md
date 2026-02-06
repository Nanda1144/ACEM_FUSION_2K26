# Fusion26 College Fest Web Application Requirements Document

## 1. Application Overview

### 1.1 Application Name
Fusion26

### 1.2 Application Description
A cinematic, immersive multi-page web application for a college fest that delivers a premium, dramatic, and visually powerful experience inspired by modern event websites like ashv2k.in. The platform features a public user interface for event browsing and registration, alongside a secure admin dashboard with real-time live preview functionality accessible via enhanced chatbot authentication for comprehensive content management. The application supports multiple web pages with flexible responsive design across all screen sizes, and provides admins with complete control over all sections including dual header system with animated FUSION 2k26 background image slideshow (up to 5 images with 5-second dissolve transitions), footer, and body content with drag-and-drop text box placement capabilities. The system connects to Supabase cloud database with manual configuration support. The application includes a splash screen that displays for 2 seconds on initial load before automatically opening the main application. A pop-up image feature displays on initial page load with default 6-second display duration, interactive hold-to-freeze functionality, click-to-dismiss capability, and background glow effects, automatically disappearing based on admin-set duration or when user releases/clicks the image. All image uploads support up to 50MB file size limit.

### 1.3 Application Type
Web Application (College Fest Management Platform)

## 2. Core Features

### 2.1 Splash Screen

#### 2.1.1 Initial Load Splash Screen
- Display splash screen image immediately when user opens the application
- Splash screen duration: 2 seconds (fixed)
- Automatic transition to main application after 2 seconds
- No user interaction required for transition
- Full-screen splash screen display
- Responsive splash screen image scaling across all screen sizes:
  - Desktop: Full-size display with optimal positioning
  - Tablet: Proportional scaling maintaining aspect ratio
  - Mobile: Responsive scaling ensuring visibility and proper fit
- Smooth fade-in animation for splash screen appearance
- Smooth fade-out animation for splash screen disappearance
- Admin-configurable splash screen image upload (up to 50MB)
- Admin can enable/disable splash screen functionality

### 2.2 Pop-up Image Feature

#### 2.2.1 Pop-up Image Display
- Display pop-up image on initial page load after splash screen
- Pop-up image appears automatically when main application loads
- Pop-up image overlays the main content
- Background glow effects applied to pop-up image for enhanced visual appeal
- Responsive pop-up image scaling across all screen sizes:
  - Desktop: Optimal size with centered positioning
  - Tablet: Proportional scaling maintaining aspect ratio
  - Mobile: Responsive scaling ensuring visibility and proper fit
- Admin-configurable pop-up image upload and storage in database (up to 50MB)
- Admin can add/delete pop-up images through admin dashboard
- Pop-up images stored in Supabase database with proper image URL storage
- Admin can enable/disable pop-up image functionality
- Admin can configure default display duration for pop-up image (default: 6 seconds)

#### 2.2.2 Pop-up Image Display Duration and Interaction
- Default display duration: 6 seconds (admin-configurable)
- Interactive hold-to-freeze functionality:
  - When user holds/touches the pop-up image: Timer freezes, animation pauses, image remains visible
  - When user releases the image: Timer resumes, image continues countdown and disappears when duration completes
- Click-to-dismiss functionality:
  - When user clicks/taps the pop-up image: Image disappears immediately
- If user does not interact with pop-up image: Image automatically disappears after admin-configured default duration (6 seconds default)
- Background glow effects enhance visual presentation during display
- Smooth fade-out animation for pop-up disappearance
- Pop-up does not reappear during the same session after dismissal
- Display duration configuration available in admin dashboard

#### 2.2.3 Pop-up Image Database Storage
- Pop-up images uploaded by admin stored in Supabase Storage
- Image URLs stored in popup_images database table
- Admin can add multiple pop-up images
- Admin can delete pop-up images from database
- System retrieves and displays pop-up images from database to users
- Proper image recognition and display implementation ensuring images are visible to users

#### 2.2.4 Pop-up Image Background Glow Effects
- Background glow effects automatically applied to pop-up image
- Configurable glow color, intensity, and spread
- Glow effects enhance visual appeal and draw user attention
- Admin can configure glow effect settings:
  - Glow color customization
  - Glow intensity adjustment
  - Glow spread configuration
- Glow effects responsive across all screen sizes
- Smooth glow transitions during pop-up appearance and disappearance

### 2.3 Public User Interface

#### 2.3.1 Total Body Background Image
- Full application body background image support
- Background image automatically adjusts and scales to fit all screen sizes:
  - Desktop: Full-size display with optimal positioning
  - Tablet: Proportional scaling maintaining aspect ratio
  - Mobile: Responsive scaling ensuring visibility and proper fit
- Flexible background image positioning adapting to different screen dimensions
- Admin-configurable total body background image upload (up to 50MB)
- Admin-configurable background image responsive scaling settings:
  - Desktop scaling configuration
  - Tablet scaling configuration
  - Mobile scaling configuration
- Background image covers entire application body area
- Background image remains fixed during scrolling (optional configuration)

#### 2.3.2 Primary Header Section (Top Header)
- Navigation menu positioned at top-right corner with links:
  - Home
  - Committee
  - Gallery
  - Events
  - Contact Us
  - About Us
- Mobile view navigation menu enhancement:
  - Remove background from menu icon lines only
  - Menu icon lines display without background
  - Transparent background for menu icon in mobile view
- Sticky header with smooth scroll behavior
- Responsive menu for mobile devices
- Fully responsive across all screen sizes for easy access
- Admin-editable header structure and content
- Admin-configurable animated background image slideshow for FUSION 2k26:
  - Support up to 5 background images (each up to 50MB)
  - Automatic slideshow with dissolve transition effect
  - Display duration: 5 seconds per image
  - Smooth dissolve animation between images
  - Continuous loop through all uploaded images
  - Admin can upload, delete, and reorder slideshow images
- Background images automatically adjust and scale to fit all screen sizes:
  - Desktop: Full-size display with optimal positioning
  - Tablet: Proportional scaling maintaining aspect ratio
  - Mobile: Responsive scaling ensuring visibility and proper fit
- Flexible background image positioning adapting to different screen dimensions

#### 2.3.3 Secondary Header Section (Logo and College Information Header)
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

#### 2.3.4 Mobile Logo Scrolling Section (Homepage Only)
- Positioned within secondary header area on mobile view only
- Displays on homepage exclusively, not on other pages
- Positioned below main header with transparent background
- Automatic horizontal scrolling animation (left to right)
- Logo specifications for mobile scrolling:
  - Logo shape: Semi-square
  - Logo height: 20px
  - Logos scroll continuously in horizontal direction
  - Glow effect automatically applied around each logo
- Continuous loop animation for logo display
- Smooth transitions between logos
- Admin can add or remove mobile scrolling logos through admin dashboard (up to 50MB per logo)
- Mobile scrolling logos stored in Supabase database with proper image URL storage
- Admin can delete mobile scrolling logos from database
- System retrieves and displays mobile scrolling logos from database to users
- Proper image recognition and display implementation ensuring mobile logos are visible to users
- Admin can configure logo display order
- Scrolling animation settings configurable by admin:
  - Scrolling speed adjustment
  - Animation direction (left to right)
  - Loop settings
- Mobile-only feature: Does not display on desktop or tablet views
- Homepage-only feature: Does not display on other pages (Committee, Gallery, Events, Contact Us, About Us)

#### 2.3.5 FUSION 2k26 Text Section
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

#### 2.3.6 Homepage
- Cinematic hero section with parallax scrolling
- Smooth transitions and motion-based micro-interactions
- Dark theme with neon/gradient accents
- Bold modern typography
- Glow effects, animated cards, hover transitions
- Animated loading states
- Admin-configurable layout for header sections
- Admin-configurable animated FUSION 2k26 background image slideshow (up to 5 images, 5-second dissolve transitions) with responsive scaling
- Admin-configurable total body background image with responsive scaling
- Admin-configurable FUSION 2k26 text with responsive sizing and animations
- Admin-configurable logo arrangement (add/delete logos with shape options)
- Admin-editable body content with flexible text box placement
- Mobile logo scrolling section (mobile view only, homepage only) displaying semi-square logos (20px height) with automatic left-to-right scrolling animation and glow effect around logos on transparent background
- Pop-up image displays on initial page load with default 6-second display duration, hold-to-freeze functionality, click-to-dismiss capability, and background glow effects

#### 2.3.7 Event Poster Section
- Positioned after Gallery Section and before About Us Section
- Automatic horizontal scrolling animation (left to right)
- Display event poster images uploaded by admin (up to 50MB per poster)
- Event posters stored in Supabase database with proper image URL storage
- Admin can add or remove event posters through admin dashboard
- Admin can delete event posters from database
- System retrieves and displays event posters from database to users
- Proper image recognition and display implementation ensuring event posters are visible to users
- Continuous loop animation for poster display
- Smooth transitions between posters
- Interactive hold-to-freeze functionality:
  - When user holds/touches event poster: Animation freezes, poster displays as pop-up to user
  - When user releases poster: Animation resumes and continues left-to-right scrolling
- Admin can configure scrolling animation duration
- Admin can upload multiple event poster images
- Admin can add, edit, or delete event posters
- Rearrange poster display order
- Cinematic layout with smooth animations

#### 2.3.8 Events Section
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

#### 2.3.9 Event Detail Page
- Display complete event information:
  - Event Name
  - Event Type
  - Full Event Description with enhanced formatting:
    - Description text automatically justified for professional appearance
    - Support for bullet point lists within description
    - Support for numbered lists within description
    - Admin can select specific content and convert to list format (bullet or numbered)
    - Admin can change text color for selected content
    - Admin can apply bold formatting to selected text
    - All content formatting options available for all events
  - Event Rules with enhanced formatting:
    - Rules text automatically justified for professional appearance
    - Support for bullet point lists within rules
    - Support for numbered lists within rules
    - Admin can select specific content and convert to list format (bullet or numbered)
    - Admin can change text color for selected content
    - Admin can apply bold formatting to selected text
  - Event Instructions with enhanced formatting:
    - Instructions text automatically justified for professional appearance
    - Support for bullet point lists within instructions
    - Support for numbered lists within instructions
    - Admin can select specific content and convert to list format (bullet or numbered)
    - Admin can change text color for selected content
    - Admin can apply bold formatting to selected text
  - Event Images (multiple images support, up to 50MB per image)
  - Event-Specific Staff Coordinators:
    - Staff Name
    - Staff Role
    - Staff Photo (optional, round or semi-circle shape, up to 50MB)
  - Event-Specific Student Coordinators:
    - Student Name
    - Student Contact Number
    - Student Photo (optional, round or semi-circle shape, up to 50MB)
  - Registration button linking to Google Form (admin-provided link)
- Photo display control for event-specific coordinators:
  - Admin can enable/disable photo display option per event
  - When photo option enabled: Display coordinator photos in round or semi-circle shape
  - When photo option disabled: Display only text details
- Clicking registration button opens Google Form in new tab or embedded view
- Cinematic layout with smooth transitions
- Back navigation to Events Section

#### 2.3.10 Committee Section
- Display committee groups (not individual persons) with details:
  - Technical Committee
  - Cultural Committee
  - Other committees
- Each committee card displays:
  - Committee Name
  - Committee Image (optional, up to 50MB)
  - Committee Description preview
- Clickable committee cards:
  - Clicking on any committee card opens detailed view
  - Purple glow effect applied when user clicks the card
  - Detailed view displays complete committee information:
    - Full-size committee image (if provided)
    - Committee name
    - Complete committee description
    - Committee Role details
    - Staff details:
      - Staff Name
      - Staff Role
      - Staff Photo (optional, round or semi-circle shape, up to 50MB)
      - Staff Contact (optional)
    - Student details:
      - Student Name
      - Student Role
      - Student Photo (optional, round or semi-circle shape, up to 50MB)
      - Student Contact (optional)
  - Modal or dedicated detail page for committee details
  - Close/back button to return to Committee Section
- Photo display control for committee coordinators:
  - Admin can enable/disable photo display option per committee
  - When photo option enabled: Display coordinator photos in round or semi-circle shape
  - When photo option disabled: Display only text details
- Admin can add, edit, delete committees
- Admin can configure committee image (optional)
- Admin can add, edit, delete committee staff and student details
- Cinematic layout with smooth transitions
- Smooth animations for card click and detail view opening
- Purple glow effect on card click for enhanced visual feedback

#### 2.3.11 Gallery Section
- Cinematic grid/masonry layout displaying uploaded images (up to 50MB per image)
- Enhanced frame styling with gold color and glow effect:
  - Frame color: Gold (unified color for all frames)
  - Glow effect applied to all frames for enhanced attractiveness
  - Consistent gold glow effect creating cohesive visual presentation
  - Smooth glow transitions for dynamic visual appeal
- Image frame width increased by 1-2px for enhanced visual presentation
- Lazy loading implementation
- Smooth transitions between images
- Display images uploaded by admin through Gallery Management

#### 2.3.12 About Us Section
- Editable text content displaying fest information

#### 2.3.13 Contact Us Section
- Display contact details
- Contact form or contact information display

#### 2.3.14 Footer Section
- Display contact details
- Social media links (Instagram, LinkedIn, WhatsApp, Email)
- Admin-editable footer structure and content
- Improved layout with enhanced visual presentation

### 2.4 Enhanced Chatbot-Based Admin Authentication

#### 2.4.1 Chatbot Interface
- Floating chatbot fixed at bottom-right corner
- Enhanced chatbot functionality providing:
  - Website information and details
  - Interactive guidance and support
- Chatbot does not display admin access option or admin passkey information
- Admin authentication handled automatically through passkey recognition

#### 2.4.2 Chatbot Information Features
- Provide comprehensive website details including:
  - Website purpose and overview
  - Available features and sections
  - Navigation guidance
  - Event information summary
  - Committee structure overview
  - Gallery highlights
  - Contact information
  - About the fest details
- No display of admin passkey information in chatbot interface
- No admin access option shown in chatbot menu

#### 2.4.3 Admin Authentication Flow
- Admin enters passkey directly in chatbot input field
- System automatically recognizes passkey format and validates against database
- No explicit admin access button or option required
- Correct passkey automatically opens Admin Dashboard without additional confirmation
- Seamless authentication experience without manual mode selection
- Enhanced chatbot provides contextual help during authentication process

### 2.5 Admin Dashboard

#### 2.5.1 Real-Time Live Preview
- Split-screen interface:
  - Left panel: Admin editing controls
  - Right panel: Live preview of public website
- All changes reflect instantly in live preview panel
- Preview updates automatically as admin edits content
- Preview shows exact appearance of public website across multiple web pages

#### 2.5.2 Splash Screen Management
- Upload splash screen image (up to 50MB)
- Configure splash screen display duration (default: 2 seconds)
- Enable/disable splash screen functionality
- Preview splash screen appearance and animation
- Configure splash screen responsive scaling:
  - Desktop scaling settings
  - Tablet scaling settings
  - Mobile scaling settings
- Configure fade-in and fade-out animation settings
- All changes update automatically in database and reflect in live preview

#### 2.5.3 Pop-up Image Management
- Upload pop-up image with proper database storage (up to 50MB)
- Add multiple pop-up images through admin interface
- Delete pop-up images from database
- Pop-up images stored in Supabase Storage with URLs saved in database
- Enable/disable pop-up image functionality
- Configure pop-up image responsive scaling:
  - Desktop scaling settings
  - Tablet scaling settings
  - Mobile scaling settings
- Configure pop-up image positioning for different screen sizes
- Configure default display duration for pop-up image (default: 6 seconds)
- Display duration configuration interface in admin dashboard
- Configure hold-to-freeze functionality:
  - Enable/disable hold-to-freeze feature
  - Configure timer pause behavior when user holds image
  - Configure timer resume behavior when user releases image
- Configure click-to-dismiss functionality:
  - Enable/disable click-to-dismiss feature
  - Configure immediate dismissal behavior on click
- Configure background glow effects:
  - Glow color customization
  - Glow intensity adjustment
  - Glow spread configuration
- Preview pop-up image appearance across all screen sizes
- Preview hold-to-freeze functionality behavior
- Preview click-to-dismiss functionality behavior
- Preview background glow effects
- All changes update automatically in database and reflect in live preview
- Proper image recognition implementation ensuring pop-up images display correctly to users

#### 2.5.4 Total Body Background Management
- Upload total body background image (up to 50MB)
- Configure background image responsive scaling:
  - Desktop scaling settings
  - Tablet scaling settings
  - Mobile scaling settings
- Configure background image positioning for different screen sizes
- Configure background image fixed/scroll behavior
- Preview background image appearance across all screen sizes
- All changes update automatically in database and reflect in live preview

#### 2.5.5 Primary Header Management
- Configure navigation menu positioning (top-right corner)
- Edit navigation menu items
- Mobile view menu icon enhancement:
  - Configure transparent background for menu icon lines
  - Remove background from menu icon lines only in mobile view
  - Menu icon lines display without background
- Text styling controls:
  - Font selection
  - Font size adjustment
  - Text color customization
- Background customization:
  - Background color changing
  - Animated background image slideshow upload and management for FUSION 2k26:
    - Upload up to 5 background images (each up to 50MB)
    - Configure dissolve transition effect between images
    - Set display duration: 5 seconds per image
    - Reorder slideshow images with drag-and-drop interface
    - Delete individual slideshow images
    - Preview slideshow animation in live preview
  - Responsive background image scaling configuration:
    - Set image scaling behavior for desktop view
    - Set image scaling behavior for tablet view
    - Set image scaling behavior for mobile view
  - Background image positioning controls for different screen sizes
  - Default background color configuration
- Edit header structure and layout
- Changes reflect immediately on public UI header and live preview with responsive background image scaling and animated slideshow

#### 2.5.6 Secondary Header (Logo and College Information Header) Management
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
- Upload multiple college logos (up to 50MB per logo)
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

#### 2.5.7 Mobile Logo Scrolling Management (Homepage Only)
- Add or remove logos for mobile scrolling section with proper database storage (up to 50MB per logo)
- Upload mobile scrolling logo images through admin interface
- Delete mobile scrolling logos from database
- Mobile scrolling logos stored in Supabase Storage with URLs saved in database
- Configure logo display order with drag-and-drop interface
- Logo specifications configuration:
  - Logo shape: Semi-square (fixed)
  - Logo height: 20px (fixed)
- Configure scrolling animation settings:
  - Scrolling speed adjustment
  - Animation direction: Left to right (fixed)
  - Loop settings
- Configure glow effect settings:
  - Glow color customization
  - Glow intensity adjustment
  - Automatic glow application around logos
- Configure transparent background for mobile logo section
- Preview mobile logo scrolling animation in live preview
- Mobile-only feature configuration: Applies only to mobile view
- Homepage-only feature configuration: Applies only to homepage, not other pages
- All changes update automatically in database and reflect in live preview
- Proper image recognition implementation ensuring mobile logos display correctly to users

#### 2.5.8 FUSION 2k26 Text Management
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

#### 2.5.9 Body Content Management
- Add text boxes anywhere on the page with drag-and-drop functionality
- Position text boxes freely according to admin preference
- Edit text box content, styling, and positioning
- Delete text boxes as needed
- Rearrange body sections and components
- Customize body layout structure
- All changes update automatically in database and reflect in live preview

#### 2.5.10 Footer Management
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

#### 2.5.11 Homepage Layout Management
- Arrange primary header sections as desired
- Configure animated FUSION 2k26 background image slideshow (up to 5 images, 5-second dissolve transitions) with responsive scaling
- Configure total body background image with responsive scaling
- Configure FUSION 2k26 text with responsive sizing and animations
- Configure secondary logo and college information header layout
- Add or delete logos dynamically with shape configuration
- Configure mobile logo scrolling section (homepage only) with logo order settings and glow effect configuration
- Configure layout elements positioning
- Drag-and-drop interface for section reordering
- All customizations apply across multiple web pages

#### 2.5.12 Event Poster Management
- Upload event poster images with proper database storage (up to 50MB per poster)
- Add multiple event poster images through admin interface
- Delete event posters from database
- Event poster images stored in Supabase Storage with URLs saved in database
- Image upload interface with file selection
- Uploaded poster images stored in Supabase Storage
- Poster image URLs automatically generated and stored in event_posters table
- Configure automatic scrolling animation settings:
  - Scrolling speed adjustment
  - Animation direction (left to right)
  - Loop settings
  - Animation duration configuration
- Configure hold-to-freeze functionality for event posters:
  - Enable/disable hold-to-freeze feature
  - Configure pop-up display behavior when user holds poster
- Add, edit, or delete event posters
- Rearrange poster display order
- Changes visible in live preview immediately
- Proper image recognition implementation ensuring event posters display correctly to users

#### 2.5.13 Event Management
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
    - Select content and convert to list format functionality (bullet or numbered)
    - Select content and change text color functionality
    - Select content and apply bold formatting functionality
    - Preview of formatted description
  - Event Rules with enhanced rich text formatting:
    - Text justification enabled by default
    - Toolbar with formatting options:
      - Bullet list button
      - Numbered list button
      - Text alignment options
      - Text color picker for selected content
      - Bold text button for selected content
    - Select content and convert to list format functionality (bullet or numbered)
    - Select content and change text color functionality
    - Select content and apply bold formatting functionality
    - Preview of formatted rules
  - Event Instructions with enhanced rich text formatting:
    - Text justification enabled by default
    - Toolbar with formatting options:
      - Bullet list button
      - Numbered list button
      - Text alignment options
      - Text color picker for selected content
      - Bold text button for selected content
    - Select content and convert to list format functionality (bullet or numbered)
    - Select content and change text color functionality
    - Select content and apply bold formatting functionality
    - Preview of formatted instructions
  - Event Images upload (multiple images support, up to 50MB per image)
  - Event-Specific Staff Coordinators:
    - Staff Name
    - Staff Role
    - Staff Photo upload (optional, up to 50MB)
    - Photo shape configuration (round or semi-circle)
  - Event-Specific Student Coordinators:
    - Student Name
    - Student Contact Number
    - Student Photo upload (optional, up to 50MB)
    - Photo shape configuration (round or semi-circle)
  - Photo display enable/disable option per event
  - Google Form registration link
- Edit existing events including event-specific coordinator details and all content formatting
- Delete events
- Admin can add, edit, or delete event-specific staff coordinator details directly in Events Section
- Admin can add, edit, or delete event-specific student coordinator details directly in Events Section
- Admin can upload coordinator photos and configure photo shapes
- Admin can format event description, rules, and instructions with justification, lists, text colors, and bold formatting for all events
- Events auto-display on public UI based on event type
- Event cards link to dedicated event detail pages
- Changes visible in live preview immediately

#### 2.5.14 Committee Management
- Add committees (groups) with fields:
  - Committee Name
  - Committee Description
  - Committee Image upload (optional, up to 50MB)
  - Committee Role details
  - Staff details:
    - Staff Name
    - Staff Role
    - Staff Photo upload (optional, up to 50MB)
    - Photo shape configuration (round or semi-circle)
    - Staff Contact (optional)
  - Student details:
    - Student Name
    - Student Role
    - Student Photo upload (optional, up to 50MB)
    - Photo shape configuration (round or semi-circle)
    - Student Contact (optional)
  - Photo display enable/disable option per committee
- Edit committee information including name, description, image, role details, and staff/student details
- Delete committees
- Admin can upload committee images and staff/student photos
- Admin can configure photo shapes for staff and students
- Automatic display on public Committee Section
- Changes display dynamically on website and live preview

#### 2.5.15 Gallery Management
- Upload multiple images to gallery (up to 50MB per image)
- Image upload interface with file selection
- Uploaded images stored in Supabase Storage
- Image URLs automatically generated and stored in gallery_images table
- Images appear in cinematic gallery layout on public UI Gallery Section
- Live preview shows gallery updates instantly
- Delete images from gallery
- Rearrange image display order
- Configure image frame width (increased by 1-2px for enhanced visual presentation)
- Configure gold frame color with glow effect:
  - Unified gold color for all frames
  - Glow effect applied to all frames for enhanced attractiveness
  - Configure glow intensity and spread
  - Preview gold glow effect in live preview

#### 2.5.16 About Us Management
- Edit About Us section text content
- Updates reflect immediately on public UI and live preview

#### 2.5.17 Contact & Social Media Management
- Update contact details
- Update social media links (Instagram, LinkedIn, WhatsApp, Email)
- Changes reflect instantly on public UI and live preview

#### 2.5.18 Passkey Management
- Change passkey functionality with validation:
  - Enter old passkey
  - Enter new passkey
  - Confirm new passkey
- Validation rules:
  - Old passkey must match database value
  - New passkey and confirm passkey must match
- Passkey update stored securely in Supabase

#### 2.5.19 Complete Application Editing
- Admin has full control to edit entire application:
  - Splash screen configuration with responsive scaling
  - Pop-up image configuration with responsive scaling, default 6-second display duration settings, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects
  - Total body background image with responsive scaling
  - Primary header sections with animated FUSION 2k26 background image slideshow (up to 5 images, 5-second dissolve transitions) and responsive scaling
  - Mobile view navigation menu icon with transparent background (no background on menu lines)
  - FUSION 2k26 text with responsive sizing and animations
  - Secondary logo and college information header sections with responsive configurations and glowing background
  - Mobile logo scrolling section (homepage only) with logo order settings, glow effect configuration, and transparent background
  - Event poster section with automatic scrolling animations, hold-to-freeze functionality, and animation duration configuration
  - Footer sections
  - Body parts
  - All content areas
  - Event-specific coordinator details with photo management and role field
  - Committee information including name, description, image, role details, and staff/student details with photo management and role field
  - Event descriptions, rules, and instructions with justified text, list formatting (bullet and numbered), text color customization, and bold text formatting for all events
  - Gallery image frame width configuration and gold frame color with glow effect for enhanced attractiveness
  - Committee card purple glow effect on click
- Flexible editing interface allowing customization of any component
- All edits automatically update database
- All changes reflect instantly on public website and live preview
- Image upload size limit: 50MB for all image types

#### 2.5.20 Supabase Connection Management
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
- Splash screen with 2-second display duration and smooth fade animations
- Pop-up image with responsive scaling, default 6-second display duration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects
- Total body background image with responsive scaling across all screen sizes
- Default background color with admin override capability
- Enhanced footer design with improved visual hierarchy
- Primary header with navigation menu positioned at top-right corner
- Primary header with admin-configurable animated FUSION 2k26 background image slideshow (up to 5 images with 5-second dissolve transitions) that scales responsively across all screen sizes
- Mobile view navigation menu icon with transparent background (no background on menu lines only)
- FUSION 2k26 text with responsive sizing and animated effects
- Secondary header with golden color college name styling, black border, and glowing background effect for enhanced attractiveness, positioned below primary header
- Secondary header includes configurable logo shapes (circle/semi-square) with minimum two logos visible on mobile (left-right positioning)
- Fully responsive secondary header with flexible logo sizing and text scaling across all devices
- Mobile logo scrolling section (homepage only) with semi-square logos (20px height), automatic left-to-right scrolling animation, glow effect around logos, and transparent background
- Event poster section positioned after Gallery and before About Us with automatic horizontal scrolling animation (left to right) and hold-to-freeze functionality displaying poster as pop-up
- Event descriptions, rules, and instructions displayed with justified text alignment, list formatting support (bullet and numbered), text color customization, and bold text formatting for all events
- Committee section displaying committee groups with optional images, descriptions, role details, and staff/student details with role field
- Committee staff and student photos with configurable shapes (round or semi-circle)
- Clickable committee cards with smooth animations opening detailed committee view
- Committee cards with purple glow effect on click for enhanced visual feedback
- Committee detail view with modal or dedicated page displaying complete committee information including role details and staff/student details
- Gallery section with unified gold frame color and glow effect:
  - All frames display in gold color for cohesive visual presentation
  - Glow effect applied to all frames for enhanced attractiveness
  - Consistent gold glow creating elegant and premium appearance
- Gallery section with increased image frame width (1-2px more) for enhanced visual presentation
- Image upload size limit: 50MB for all image types (splash screen, pop-up, backgrounds, logos, event posters, event images, coordinator photos, committee images, gallery images, mobile scrolling logos)

### 3.2 Responsive Design
- Fully responsive across mobile, tablet, and desktop devices
- Flexible layout adapting to all screen sizes for easy access
- Smooth page transitions and animated loading states
- Splash screen responsive scaling across all screen sizes with automatic transition
- Pop-up image responsive scaling across all screen sizes with default 6-second display duration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects
- Total body background image automatically scales and adjusts to fit all screen sizes:
  - Desktop: Full-size display with optimal aspect ratio
  - Tablet: Proportional scaling maintaining visual quality
  - Mobile: Responsive scaling ensuring proper fit and visibility
- Responsive dual header system with mobile-friendly navigation menu positioned at top-right
- Mobile view navigation menu icon with transparent background (no background on menu lines only)
- Animated FUSION 2k26 background image slideshow automatically scales and adjusts to fit all screen sizes:
  - Desktop: Full-size display with optimal aspect ratio
  - Tablet: Proportional scaling maintaining visual quality
  - Mobile: Responsive scaling ensuring proper fit and visibility
  - Dissolve transition effect maintains smooth animation across all screen sizes
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
  - Glow effect around logos
  - Transparent background
- Event poster section responsive across all screen sizes with automatic scrolling animation and hold-to-freeze functionality
- Multiple web pages with consistent responsive behavior
- Admin dashboard optimized for desktop editing experience
- Event descriptions, rules, and instructions maintain justified alignment, list formatting (bullet and numbered), text colors, and bold formatting across all screen sizes for all events
- Committee detail view responsive across all devices
- Committee cards with purple glow effect on click responsive across all devices
- Staff and student photos display responsively in round or semi-circle shapes
- Gallery images with unified gold frame color and glow effect responsive across all screen sizes

### 3.3 Performance Optimization
- Optimized animations and images
- Fast loading times
- Lazy loading for gallery images
- High performance rendering
- Efficient live preview updates without page reload
- Optimized splash screen loading with minimal delay
- Optimized pop-up image loading with responsive image sizing, efficient hold-to-freeze interaction handling, click-to-dismiss functionality, and background glow effects rendering
- Optimized total body background image loading with responsive image sizing
- Optimized animated FUSION 2k26 background image slideshow loading with efficient dissolve transitions
- Efficient modal/detail view loading for committee details
- Optimized event poster scrolling animation with hold-to-freeze functionality
- Efficient staff and student photo loading with lazy loading
- Optimized mobile logo scrolling animation (homepage only) with glow effect rendering
- Efficient purple glow effect rendering on committee card click
- Efficient database queries for retrieving pop-up images, event posters, and mobile logos
- Optimized gold glow effect rendering for gallery frames
- Image compression and optimization for 50MB file size limit support
- Optimized background glow effects rendering for pop-up image

## 4. Technical Requirements

### 4.1 Database
- Supabase cloud database for data storage
- Manual connection configuration support
- Tables for:
  - Splash screen content (id, image_url, display_duration, enabled, responsive_scaling_settings, animation_settings, created_at, updated_at)
  - Pop-up image content (id, image_url, enabled, responsive_scaling_settings, positioning_settings, default_display_duration (default: 6 seconds), hold_to_freeze_enabled, click_to_dismiss_enabled, background_glow_settings, created_at, updated_at)
  - Total body background content (background_image_url, responsive_scaling_settings, positioning_settings, fixed_scroll_behavior, created_at, updated_at)
  - Primary header content (navigation_menu, navigation_position, mobile_menu_icon_transparent_background, styling configurations, background_slideshow_images (array of up to 5 image URLs), slideshow_display_duration (5 seconds), slideshow_transition_effect (dissolve), responsive_scaling_settings, created_at, updated_at)
  - FUSION 2k26 text content (text_content, font_settings, responsive_sizing_configurations, alignment_settings, animation_settings, created_at, updated_at)
  - Secondary header content (college_name: ADITYA College of Engineering Madanapalle, location: MADANAPALLE, institution_status: UGC - Autonomous Institution, logos with shape configurations: circle/semi-square, responsive_sizing_configurations, positioning_data including mobile left-right positioning, static_data, styling with golden color, black border, glowing background)
  - Mobile logo scrolling content (homepage only: logo_urls, logo_order, scrolling_animation_settings, semi-square shape, 20px height, glow_effect_settings, transparent_background_enabled)
  - Responsive configuration (breakpoints, font_size_mappings, logo_size_mappings for different screen sizes, background_image_scaling_settings, text_alignment_mappings)
  - Text styling configurations (font, size, color)
  - Background settings (color, image, responsive_scaling_parameters)
  - Body content (text_boxes with positioning_data)
  - Footer content and styling
  - Event posters (image_urls, display_order, animation_settings, animation_duration, hold_to_freeze_enabled)
  - Events (including rules with formatting, instructions with formatting, multiple images, event-specific staff coordinators with photos and role field, event-specific student coordinators with photos, Google Form links, description formatting data with text color and bold formatting, rules formatting data with text color and bold formatting, instructions formatting data with text color and bold formatting, photo display settings, photo shape configurations)
  - Committees (committee_name, description, image, role_details, staff_details with name, role, photo, contact, student_details with name, role, photo, contact, photo_display_settings, photo_shape_configurations, purple_glow_effect_settings)
  - Gallery images (storing image URLs from Supabase Storage, frame_width_configuration, frame_color (gold), glow_effect_settings)
  - About Us content
  - Contact information
  - Admin passkey
  - Database connection configuration
  - Chatbot information content
- Automatic data updates on admin changes
- Connection credentials stored securely
- Supabase Storage for image uploads including splash screen images, pop-up images, total body background images, animated FUSION 2k26 background slideshow images (up to 5 images), event posters, staff/student photos, committee images, mobile scrolling logos
- Event-specific coordinator details stored within events table
- Committee details stored in committees table with role field, staff details, student details, and purple glow effect settings
- Event description, rules, and instructions formatting metadata including text color, bold formatting, and list formatting (bullet and numbered) stored within events table for all events
- Mobile logo scrolling data stored in mobile_logo_scrolling table (homepage only) with glow effect settings and transparent background configuration
- Splash screen data stored in splash_screen_content table
- Pop-up image data stored in popup_image_content table with default_display_duration (default: 6 seconds), hold_to_freeze_enabled, click_to_dismiss_enabled, and background_glow_settings fields
- Total body background data stored in total_body_background_content table
- Animated FUSION 2k26 background slideshow data stored in primary_header_content table with background_slideshow_images array (up to 5 image URLs), slideshow_display_duration (5 seconds), and slideshow_transition_effect (dissolve)
- Event poster data stored in event_posters table with proper image URL storage, animation duration, and hold_to_freeze_enabled fields
- Mobile logo data stored in mobile_logo_scrolling table with proper image URL storage, glow effect settings, and transparent background configuration
- Gallery frame color and glow effect data stored in gallery_images table with frame_color (gold) and glow_effect_settings
- Image size limit: 50MB for all image uploads

### 4.2 Backend Architecture
- Backend: Node.js + Express
- Supabase connection using @supabase/supabase-js client library
- Secure authentication logic for admin access with automatic passkey recognition
- Clean REST API structure
- Real-time data synchronization for live preview using Supabase Realtime
- All admin changes must:
  - Store automatically in Supabase
  - Reflect instantly on user interface
  - Update live preview in real-time
- API endpoints for:
  - Splash screen management (upload, retrieve, update settings, responsive scaling configuration)
  - Pop-up image management (upload, retrieve, update settings, responsive scaling configuration, default 6-second display duration configuration, hold-to-freeze functionality, click-to-dismiss functionality, background glow effects configuration, add/delete images with database storage)
  - Total body background management (upload, retrieve, update settings, responsive scaling configuration)
  - Database connection management
  - Primary header management (navigation menu, positioning, mobile menu icon transparent background configuration, animated FUSION 2k26 background slideshow upload with up to 5 images, slideshow image reordering, slideshow image deletion, dissolve transition configuration, 5-second display duration, responsive scaling configuration)
  - FUSION 2k26 text management (text content, font settings, responsive sizing, alignment, animation settings)
  - Secondary header management (college name, location, institution status styling with golden color, black border, glowing background, logo upload, shape configuration, responsive sizing configuration, positioning including mobile left-right positioning)
  - Mobile logo scrolling management (homepage only: logo upload, logo order configuration, scrolling animation settings, semi-square shape, 20px height, glow effect configuration, transparent background configuration, add/delete logos with database storage)
  - Responsive configuration management (breakpoints, font size mappings, logo size mappings, background image scaling settings, text alignment mappings)
  - Text styling updates
  - Background customization with responsive image scaling
  - Text box positioning and content
  - Footer management
  - Event poster management (upload, retrieve, delete, animation settings, animation duration configuration, hold-to-freeze functionality, add/delete posters with database storage)
  - Event detail page data (including event-specific coordinator management with photo upload and role field, description formatting with text color, bold formatting, and list formatting for bullet and numbered lists, rules formatting with text color, bold formatting, and list formatting, instructions formatting with text color, bold formatting, and list formatting, photo display settings, photo shape configuration)
  - Committee management (add, edit, delete committees with name, description, image, role details, staff details with photo upload and role field, student details with photo upload and role field, photo display settings, photo shape configuration, purple glow effect settings)
  - Committee detail retrieval for detailed view
  - Gallery image management (upload, retrieve, delete, frame width configuration, gold frame color configuration, glow effect configuration)
  - Complete application editing
  - Chatbot information retrieval (excluding admin passkey information)
  - Image upload to Supabase Storage (including splash screen images, pop-up images, total body background images, animated FUSION 2k26 background slideshow images, event posters, staff/student photos, committee images, mobile scrolling logos) with 50MB size limit support
- Environment variable support for connection credentials storage
- Error handling for database connection failures
- Automatic passkey recognition logic without explicit admin access option
- Proper image URL storage and retrieval for pop-up images, event posters, mobile logos, and animated background slideshow images
- Database query optimization for efficient image retrieval and display
- Image upload validation for 50MB file size limit

### 4.3 Image Upload Implementation
- Splash screen image upload flow:
  - Admin uploads splash screen image through Splash Screen Management interface (up to 50MB)
  - Frontend sends image file to backend API endpoint
  - Backend uploads image to Supabase Storage splash_screens bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL and responsive scaling settings in splash_screen_content table
  - Frontend retrieves splash screen image URL and displays for 2 seconds on initial load
  - Public UI displays splash screen with automatic transition to main application
- Pop-up image upload flow:
  - Admin uploads pop-up image through Pop-up Image Management interface (up to 50MB)
  - Frontend sends image file to backend API endpoint
  - Backend uploads image to Supabase Storage popup_images bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL, responsive scaling settings, default 6-second display duration, hold-to-freeze settings, click-to-dismiss settings, and background glow settings in popup_image_content table
  - Admin can add multiple pop-up images
  - Admin can delete pop-up images from database
  - Frontend retrieves pop-up image URL and displays on initial page load with default 6-second duration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects
  - Public UI displays pop-up image with proper image recognition ensuring visibility to users
- Total body background image upload flow:
  - Admin uploads total body background image through Total Body Background Management interface (up to 50MB)
  - Frontend sends image file to backend API endpoint
  - Backend uploads image to Supabase Storage total_backgrounds bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL and responsive scaling settings in total_body_background_content table
  - Frontend retrieves background image URL and applies responsive scaling
  - Public UI displays background image across entire application body with automatic scaling across all screen sizes
- Gallery image upload flow:
  - Admin selects images through Gallery Management interface (up to 50MB per image)
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage gallery bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL, frame width, gold frame color, and glow effect settings in gallery_images table
  - Frontend retrieves image URLs from gallery_images table
  - Public UI Gallery Section displays images using stored URLs with increased frame width (1-2px more) and unified gold frame color with glow effect
- Animated FUSION 2k26 background slideshow image upload flow:
  - Admin uploads background slideshow images through Primary Header Management interface (up to 5 images, each up to 50MB)
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage backgrounds bucket
  - Backend receives public URLs from Supabase Storage
  - Backend stores image URLs array (up to 5 URLs), slideshow display duration (5 seconds), and dissolve transition effect in primary_header_content table
  - Admin can reorder slideshow images with drag-and-drop interface
  - Admin can delete individual slideshow images
  - Frontend retrieves background slideshow image URLs and applies animated slideshow with dissolve transitions
  - Public UI displays animated background slideshow with 5-second display duration per image and smooth dissolve transitions
- Event poster image upload flow:
  - Admin uploads poster images through Event Poster Management interface (up to 50MB per poster)
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage event_posters bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL, display order, animation duration, and hold-to-freeze settings in event_posters table
  - Admin can add multiple event posters
  - Admin can delete event posters from database
  - Frontend retrieves poster image URLs and displays with automatic scrolling animation and hold-to-freeze functionality
  - Public UI displays event posters with proper image recognition ensuring visibility to users
- Staff/Student photo upload flow:
  - Admin uploads staff/student photos through Event Management interface (up to 50MB per photo)
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage coordinator_photos bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL in events table (event-specific)
  - Frontend retrieves photo URLs and displays in round or semi-circle shape based on configuration
- Committee image and staff/student photo upload flow:
  - Admin uploads committee images and staff/student photos through Committee Management interface (up to 50MB per image)
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage committees bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URLs in committees table
  - Frontend retrieves image URLs and displays committee images and staff/student photos
- Mobile logo scrolling image upload flow (homepage only):
  - Admin uploads logo images through Mobile Logo Scrolling Management interface (up to 50MB per logo)
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage mobile_logos bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL, display order, glow effect settings, and transparent background configuration in mobile_logo_scrolling table
  - Admin can add multiple mobile logos
  - Admin can delete mobile logos from database
  - Frontend retrieves logo image URLs and displays with automatic left-to-right scrolling animation, glow effect, and transparent background on mobile homepage only
  - Public UI displays mobile logos with proper image recognition ensuring visibility to users
- File update locations for splash screen image upload:
  - Backend API file: Create/update splash screen upload endpoint (e.g., /api/splash-screen/upload) with 50MB size limit validation
  - Admin Dashboard component: Add splash screen image upload interface in Splash Screen Management section
  - Public Splash Screen component: Fetch and display splash screen image with 2-second duration and automatic transition
  - Supabase Storage configuration: Create splash_screens bucket with public access and 50MB size limit
- File update locations for pop-up image upload:
  - Backend API file: Create/update pop-up image upload endpoint (e.g., /api/popup-image/upload) with 50MB size limit validation
  - Admin Dashboard component: Add pop-up image upload interface in Pop-up Image Management section with add/delete functionality, default 6-second display duration configuration, hold-to-freeze configuration, click-to-dismiss configuration, and background glow effects configuration
  - Public Pop-up Image component: Fetch and display pop-up image with default 6-second display duration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects
  - Supabase Storage configuration: Create popup_images bucket with public access and 50MB size limit
  - Database schema: Update popup_image_content table with default_display_duration (default: 6 seconds), hold_to_freeze_enabled, click_to_dismiss_enabled, and background_glow_settings fields
- File update locations for total body background image upload:
  - Backend API file: Create/update total body background upload endpoint (e.g., /api/total-background/upload) with 50MB size limit validation
  - Admin Dashboard component: Add total body background image upload interface in Total Body Background Management section
  - Public Body component: Fetch and display total body background image with responsive scaling
  - Supabase Storage configuration: Create total_backgrounds bucket with public access and 50MB size limit
- File update locations for gallery image upload:
  - Backend API file: Create/update gallery upload endpoint (e.g., /api/gallery/upload) with 50MB size limit validation
  - Admin Dashboard component: Add image upload interface in Gallery Management section with gold frame color and glow effect configuration
  - Public Gallery component: Fetch and display images from gallery_images table with increased frame width and unified gold frame color with glow effect
  - Supabase Storage configuration: Create gallery bucket with public access and 50MB size limit
- File update locations for animated FUSION 2k26 background slideshow image upload:
  - Backend API file: Create/update background slideshow upload endpoint (e.g., /api/header/background-slideshow) with 50MB size limit validation and support for up to 5 images
  - Admin Dashboard component: Add background slideshow image upload interface in Primary Header Management section with drag-and-drop reordering, individual image deletion, and dissolve transition preview
  - Public Header component: Fetch and display animated background slideshow with 5-second display duration per image and dissolve transitions
  - Supabase Storage configuration: Create backgrounds bucket with public access and 50MB size limit
  - Database schema: Update primary_header_content table with background_slideshow_images array (up to 5 URLs), slideshow_display_duration (5 seconds), and slideshow_transition_effect (dissolve)
- File update locations for event poster image upload:
  - Backend API file: Create/update event poster upload endpoint (e.g., /api/event-posters/upload) with 50MB size limit validation
  - Admin Dashboard component: Add poster image upload interface in Event Poster Management section with add/delete functionality and hold-to-freeze configuration
  - Public Event Poster Section component: Fetch and display posters with automatic scrolling animation and hold-to-freeze functionality
  - Supabase Storage configuration: Create event_posters bucket with public access and 50MB size limit
  - Database schema: Update event_posters table with proper image URL storage, animation_duration, and hold_to_freeze_enabled fields
- File update locations for staff/student photo upload:
  - Backend API file: Create/update staff/student photo upload endpoint (e.g., /api/coordinators/photo) with 50MB size limit validation
  - Admin Dashboard component: Add photo upload interface in Event Management sections
  - Public Event Detail Page components: Fetch and display staff/student photos
  - Supabase Storage configuration: Create coordinator_photos bucket with public access and 50MB size limit
- File update locations for committee image and staff/student photo upload:
  - Backend API file: Create/update committee image upload endpoint (e.g., /api/committees/image) with 50MB size limit validation
  - Admin Dashboard component: Add image upload interface in Committee Management section
  - Public Committee Section component: Fetch and display committee images and staff/student photos
  - Supabase Storage configuration: Create committees bucket with public access and 50MB size limit
- File update locations for mobile logo scrolling image upload (homepage only):
  - Backend API file: Create/update mobile logo upload endpoint (e.g., /api/mobile-logos/upload) with 50MB size limit validation
  - Admin Dashboard component: Add logo upload interface in Mobile Logo Scrolling Management section with add/delete functionality, glow effect configuration, and transparent background configuration
  - Public Mobile Logo Scrolling Section component: Fetch and display logos with automatic left-to-right scrolling animation, glow effect, and transparent background on mobile homepage only
  - Supabase Storage configuration: Create mobile_logos bucket with public access and 50MB size limit
  - Database schema: Update mobile_logo_scrolling table with proper image URL storage, glow_effect_settings, and transparent_background_enabled fields

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
  - Content selection and list conversion functionality (bullet or numbered)
  - Content selection and text color change functionality
  - Content selection and bold formatting functionality
  - HTML output storage in events table
  - Frontend rendering of formatted HTML content with text colors and bold formatting
- Event rules rich text editor:
  - Implement rich text editor component with same features as description editor
  - Toolbar features:
    - Text justification button (default enabled)
    - Bullet list button
    - Numbered list button
    - Text alignment options (left, center, right, justify)
    - Text color picker for selected content
    - Bold text button for selected content
  - Content selection and list conversion functionality (bullet or numbered)
  - Content selection and text color change functionality
  - Content selection and bold formatting functionality
  - HTML output storage in events table rules field
  - Frontend rendering of formatted HTML content with text colors and bold formatting
- Event instructions rich text editor:
  - Implement rich text editor component with same features as description editor
  - Toolbar features:
    - Text justification button (default enabled)
    - Bullet list button
    - Numbered list button
    - Text alignment options (left, center, right, justify)
    - Text color picker for selected content
    - Bold text button for selected content
  - Content selection and list conversion functionality (bullet or numbered)
  - Content selection and text color change functionality
  - Content selection and bold formatting functionality
  - HTML output storage in events table instructions field
  - Frontend rendering of formatted HTML content with text colors and bold formatting
- File update locations for rich text editor:
  - Admin Dashboard Event Management component: Integrate rich text editor with text color and bold formatting options for description, rules, and instructions fields
  - Backend API: Store formatted HTML content with text color, bold formatting, and list formatting in events table description, rules, and instructions fields
  - Public Event Detail Page component: Render formatted HTML with proper styling including text colors, bold formatting, and list formatting for description, rules, and instructions

### 4.5 Committee Detail View Implementation
- Committee detail view functionality:
  - Implement clickable committee cards in Committee Section
  - Create modal component or dedicated detail page for committee details
  - Display complete committee information:
    - Full-size committee image (if provided)
    - Committee name
    - Complete committee description
    - Committee role details
    - Complete staff details with photos (if enabled), role field, and contact
    - Complete student details with photos (if enabled), role field, and contact
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
  - Configurable animation duration
  - Interactive hold-to-freeze functionality:
    - When user holds/touches poster: Animation freezes, poster displays as pop-up
    - When user releases poster: Animation resumes and continues left-to-right scrolling
  - Responsive behavior across all screen sizes
  - Proper image retrieval from database ensuring posters display correctly to users
- File update locations for event poster scrolling:
  - Public Event Poster Section component: Implement scrolling animation logic with hold-to-freeze functionality and database image retrieval
  - CSS/Animation file: Add scrolling animation styles and keyframes
  - Admin Dashboard Event Poster Management component: Add animation speed configuration interface and animation duration configuration
  - Backend API: Implement proper image URL retrieval from event_posters table with animation_duration and hold_to_freeze_enabled fields

### 4.7 FUSION 2k26 Animated Background Slideshow Implementation
- Animated background slideshow functionality:
  - Support up to 5 background images
  - Automatic slideshow with dissolve transition effect
  - Display duration: 5 seconds per image
  - Continuous loop through all uploaded images
  - Smooth dissolve animation between images
  - Responsive scaling across all screen sizes
  - Admin can upload, delete, and reorder slideshow images
- File update locations for animated background slideshow:
  - Public Header component: Implement slideshow animation logic with dissolve transitions
  - CSS/Animation file: Add dissolve transition styles and keyframes
  - Admin Dashboard Primary Header Management component: Add slideshow image upload interface with drag-and-drop reordering and individual image deletion
  - Backend API: Implement slideshow image upload, deletion, and reordering endpoints with proper image URL array storage (up to 5 URLs)
  - Database schema: Update primary_header_content table with background_slideshow_images array, slideshow_display_duration (5 seconds), and slideshow_transition_effect (dissolve)

### 4.8 FUSION 2k26 Text Animation Implementation
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

### 4.9 Staff/Student Photo Display Implementation
- Staff/Student photo display functionality:
  - Support round and semi-circle photo shapes
  - Photo display enable/disable option
  - Responsive photo sizing
  - Lazy loading for performance
- File update locations for staff/student photo display:
  - Public Event Detail Page component: Implement photo display with shape configuration
  - Public Committee Section component: Implement staff/student photo display with shape configuration
  - CSS file: Add photo shape styles (round and semi-circle)
  - Admin Dashboard components: Add photo upload and shape configuration interfaces

### 4.10 Mobile Logo Scrolling Implementation (Homepage Only)
- Mobile logo scrolling functionality:
  - Implement horizontal scrolling animation (left to right)
  - Continuous loop animation
  - Semi-square logo shape (fixed)
  - Logo height: 20px (fixed)
  - Configurable scrolling speed
  - Glow effect automatically applied around each logo
  - Transparent background for mobile logo section
  - Mobile-only display: Does not display on desktop or tablet
  - Homepage-only display: Does not display on other pages
  - Admin can add/remove logos and configure display order
  - Proper image retrieval from database ensuring mobile logos display correctly to users
- File update locations for mobile logo scrolling:
  - Public Mobile Logo Scrolling Section component: Implement scrolling animation logic with mobile and homepage detection, glow effect rendering, transparent background, and database image retrieval
  - CSS/Animation file: Add scrolling animation styles and keyframes for mobile view only, glow effect styles, and transparent background styles
  - Admin Dashboard Mobile Logo Scrolling Management component: Add logo upload, order configuration, glow effect configuration, transparent background configuration, and animation settings interface with add/delete functionality
  - Backend API: Create endpoints for mobile logo management (upload, retrieve, delete, order configuration, glow effect configuration, transparent background configuration) with proper image URL storage

### 4.11 Committee Card Purple Glow Effect Implementation
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

### 4.12 Gallery Gold Frame with Glow Effect Implementation
- Gallery gold frame with glow effect functionality:
  - Implement unified gold frame color for all gallery images
  - Implement glow effect applied to all frames
  - Configurable glow intensity and spread
  - Consistent gold glow creating elegant and premium appearance
  - Admin can configure glow effect settings
  - Responsive gold glow effect across all screen sizes
- File update locations for gallery gold frame with glow effect:
  - Admin Dashboard Gallery Management component: Add gold frame color configuration and glow effect configuration interface
  - Public Gallery Section component: Apply gold frame color and glow effect to all images
  - CSS/Animation file: Add gold frame color styles and glow effect styles using box-shadow or similar CSS properties
  - Backend API: Store gold frame color and glow effect configuration in gallery_images table
  - Example CSS:
    ```css
    .gallery-frame {
      border: 2px solid gold;
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.8),
                  0 0 30px rgba(255, 215, 0, 0.6),
                  0 0 45px rgba(255, 215, 0, 0.4);
    }
    ```

### 4.13 Mobile View Navigation Menu Icon Transparent Background Implementation
- Mobile view navigation menu icon enhancement:
  - Remove background from menu icon lines only in mobile view
  - Menu icon lines display without background
  - Transparent background for menu icon in mobile view
  - Desktop and tablet views remain unchanged
- File update locations for mobile view navigation menu icon:
  - Public Header component: Add mobile-specific CSS for menu icon transparent background
  - CSS/Animation file: Add mobile view media query for menu icon transparent background
  - Example CSS:
    ```css
    @media (max-width: 768px) {
      .menu-icon-lines {
        background: transparent;
      }
    }
    ```

### 4.14 Splash Screen Implementation
- Splash screen functionality:
  - Display splash screen image on initial application load
  - 2-second display duration (fixed)
  - Automatic transition to main application after 2 seconds
  - Smooth fade-in and fade-out animations
  - Responsive image scaling across all screen sizes
  - Admin can upload and configure splash screen image (up to 50MB)
  - Admin can enable/disable splash screen functionality
- File update locations for splash screen:
  - Public Splash Screen component: Create new component for splash screen display
  - Main App component: Add splash screen logic to initial load sequence
  - Admin Dashboard Splash Screen Management component: Add splash screen configuration interface
  - CSS/Animation file: Add fade-in and fade-out animation styles
  - Backend API: Create endpoints for splash screen management (upload, retrieve, update settings) with 50MB size limit validation

### 4.15 Pop-up Image Implementation
- Pop-up image functionality:
  - Display pop-up image on initial page load after splash screen
  - Pop-up image overlays main content
  - Responsive image scaling across all screen sizes
  - Default display duration: 6 seconds (admin-configurable)
  - Interactive hold-to-freeze functionality:
    - When user holds/touches image: Timer freezes, animation pauses, image remains visible
    - When user releases image: Timer resumes, image continues countdown and disappears when duration completes
  - Click-to-dismiss functionality:
    - When user clicks/taps image: Image disappears immediately
  - If user does not interact: Image disappears after admin-configured default duration (6 seconds default)
  - Background glow effects enhance visual presentation
  - Smooth fade-out animation for dismissal
  - Pop-up does not reappear during same session after dismissal
  - Admin can upload and configure pop-up image with database storage (up to 50MB)
  - Admin can add/delete pop-up images
  - Admin can enable/disable pop-up image functionality
  - Admin can configure default display duration (default: 6 seconds)
  - Admin can configure background glow effects (color, intensity, spread)
- File update locations for pop-up image:
  - Public Pop-up Image component: Create new component for pop-up image display with hold-to-freeze functionality, click-to-dismiss functionality, background glow effects, and database image retrieval
  - Main App component: Add pop-up image logic to initial load sequence
  - Admin Dashboard Pop-up Image Management component: Add pop-up image configuration interface with default 6-second display duration settings, hold-to-freeze configuration, click-to-dismiss configuration, background glow effects configuration, and add/delete functionality
  - CSS/Animation file: Add fade-out animation styles, overlay styles, and background glow effect styles
  - Backend API: Create endpoints for pop-up image management (upload, retrieve, update settings, add/delete images) with proper image URL storage and 50MB size limit validation
  - Database schema: Update popup_image_content table with default_display_duration (default: 6 seconds), hold_to_freeze_enabled, click_to_dismiss_enabled, and background_glow_settings fields

### 4.16 Total Body Background Implementation
- Total body background functionality:
  - Display background image across entire application body
  - Responsive image scaling across all screen sizes
  - Configurable background positioning
  - Configurable fixed/scroll behavior
  - Admin can upload and configure total body background image (up to 50MB)
- File update locations for total body background:
  - Public Body component: Apply total body background image with responsive scaling
  - Admin Dashboard Total Body Background Management component: Add background configuration interface
  - CSS file: Add total body background styles with responsive scaling
  - Backend API: Create endpoints for total body background management (upload, retrieve, update settings) with 50MB size limit validation

### 4.17 Chatbot Authentication Enhancement
- Enhanced chatbot authentication functionality:
  - Remove admin access option from chatbot interface
  - Remove admin passkey information display from chatbot
  - Implement automatic passkey recognition logic
  - Admin enters passkey directly in chatbot input field
  - System automatically validates passkey and opens admin dashboard
  - No explicit admin mode selection required
- File update locations for chatbot authentication enhancement:
  - Chatbot component: Remove admin access option and passkey information display
  - Backend authentication API: Implement automatic passkey recognition logic
  - Admin Dashboard component: Update authentication flow to support automatic passkey recognition

### 4.18 Pop-up Image Background Glow Effects Implementation
- Pop-up image background glow effects functionality:
  - Implement background glow effects for pop-up image
  - Configurable glow color, intensity, and spread
  - Glow effects enhance visual appeal and draw user attention
  - Admin can configure glow effect settings through admin dashboard
  - Glow effects responsive across all screen sizes
  - Smooth glow transitions during pop-up appearance and disappearance
- File update locations for pop-up image background glow effects:
  - Public Pop-up Image component: Apply background glow effects to pop-up image
  - CSS/Animation file: Add background glow effect styles using box-shadow, backdrop-filter, or similar CSS properties
  - Admin Dashboard Pop-up Image Management component: Add glow effect configuration interface (color, intensity, spread)
  - Backend API: Store glow effect configuration in popup_image_content table background_glow_settings field
  - Example CSS:
    ```css
    .popup-image-container {
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
                  0 0 60px rgba(255, 255, 255, 0.3),
                  0 0 90px rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
    }
    ```

### 4.19 Code Quality
- Clean, modular, scalable codebase
- Maintainable UI component structure
- Optimized for production deployment
- Support for multiple web pages architecture
- Efficient real-time update mechanism
- Secure connection credentials handling
- Responsive design implementation using CSS media queries and flexible layouts
- Responsive image scaling implementation for splash screen, pop-up image, total body background, and animated FUSION 2k26 background slideshow images
- Rich text editor integration with proper sanitization and text color/bold formatting support for description, rules, and instructions
- Modal/detail view component with proper state management
- Automatic scrolling animation implementation for event posters with hold-to-freeze functionality
- Animated background slideshow implementation with dissolve transitions for FUSION 2k26 header
- Text animation implementation for FUSION 2k26 text
- Photo display implementation with shape configuration and lazy loading
- Mobile logo scrolling implementation (homepage only) with semi-square shape, 20px height, glow effect, and transparent background
- Committee card purple glow effect implementation
- Gallery gold frame with glow effect implementation
- Mobile view navigation menu icon transparent background implementation
- Splash screen implementation with 2-second duration and automatic transition
- Pop-up image implementation with default 6-second display duration, hold-to-freeze functionality, click-to-dismiss functionality, background glow effects, and database storage
- Total body background implementation with responsive scaling
- Enhanced chatbot authentication with automatic passkey recognition
- Proper database integration for pop-up images, event posters, mobile logos, and animated background slideshow images with image URL storage and retrieval
- Image recognition implementation ensuring all admin-uploaded images display correctly to users
- Image upload validation and handling for 50MB file size limit across all image types
- Background glow effects implementation for pop-up image with configurable settings

## 5. User Flow

### 5.1 Public User Flow
1. User opens application and sees splash screen for 2 seconds
2. Splash screen automatically transitions to main application
3. Pop-up image displays automatically on initial page load with default 6-second display duration and background glow effects
4. User can interact with pop-up image:
   - Hold/touch image: Timer freezes, animation pauses, image remains visible
   - Release image: Timer resumes, image continues countdown and disappears when duration completes
   - Click/tap image: Image disappears immediately
   - No interaction: Image disappears after admin-configured default duration (6 seconds default)
5. User lands on cinematic homepage with total body background image and dual header system:
   - Total body background image automatically scales to fit screen size
   - Primary header displaying navigation menu at top-right corner (Home, Events, Committee, Gallery, About Us, Contact Us) with animated FUSION 2k26 background slideshow (up to 5 images with 5-second dissolve transitions) that automatically scales to fit screen size
   - Mobile view: Navigation menu icon displays with transparent background (no background on menu lines only)
   - FUSION 2k26 text with responsive sizing and animated effects
   - Secondary header positioned below primary header displaying ADITYA College of Engineering Madanapalle (golden color with black border and glowing background, responsive font sizing), MADANAPALLE (responsive font 12/14), UGC - Autonomous Institution (responsive font 12/14), and college logos with configured shapes (circle/semi-square) that automatically adjust size based on screen size with minimum two logos visible on mobile (left-right positioning)
   - Mobile logo scrolling section (mobile view only, homepage only) displaying semi-square logos (20px height) with automatic left-to-right scrolling animation, glow effect around logos, and transparent background
6. User navigates through multiple web pages using top-right navigation menu
7. User experiences consistent responsive design across all screen sizes with automatic font and logo adjustments, responsive total body background image scaling, responsive animated FUSION 2k26 background slideshow scaling with dissolve transitions, and animated FUSION 2k26 text
8. User views Gallery Section with unified gold frame color and glow effect for all frames creating elegant and premium appearance
9. User views Event Poster Section positioned after Gallery and before About Us with automatic horizontal scrolling animation (left to right)
10. User can interact with event posters:
   - Hold/touch poster: Animation freezes, poster displays as pop-up
   - Release poster: Animation resumes and continues scrolling
11. User views events by category (Technical/Cultural) on Events page
12. User clicks on event card and navigates to dedicated event detail page
13. User views complete event information including:
   - Full description with justified text alignment, list formatting (bullet and numbered), text color customization, and bold text formatting
   - Rules with justified text alignment, list formatting (bullet and numbered), text color customization, and bold text formatting
   - Instructions with justified text alignment, list formatting (bullet and numbered), text color customization, and bold text formatting
   - Event images
   - Event-specific staff coordinator details (name, role, photo if enabled in round or semi-circle shape)
   - Event-specific student coordinator details (name, contact number, photo if enabled in round or semi-circle shape)
14. User clicks registration button on event detail page
15. Google Form opens (link provided by admin)
16. User explores committee section and views committee groups (Technical Committee, Cultural Committee, etc.) with committee cards displaying name, description preview, and image
17. User clicks on committee card to view complete committee details
18. Purple glow effect applied to committee card on click
19. Detailed view opens (modal or dedicated page) displaying:
    - Full-size committee image (if provided)
    - Committee name
    - Complete committee description
    - Committee role details
    - Complete staff details with photos (if enabled, round or semi-circle shape), role field, and contact
    - Complete student details with photos (if enabled, round or semi-circle shape), role field, and contact
20. User closes detail view and returns to Committee Section
21. User views improved footer section with contact details and social media links
22. User can interact with chatbot to get website information and details (no admin passkey information displayed)
23. User experiences optimal viewing on mobile devices with properly scaled logos (minimum two visible with left-right positioning), text with golden color, black border, and glowing background, responsive total body background image, responsive animated FUSION 2k26 background slideshow with dissolve transitions, animated FUSION 2k26 text in secondary header, mobile logo scrolling section (homepage only) with semi-square logos (20px height), automatic left-to-right scrolling animation, glow effect around logos, transparent background, and navigation menu icon with transparent background (no background on menu lines only)

### 5.2 Admin Flow
1. Admin clicks floating chatbot at bottom-right corner
2. Admin can request website details from chatbot (no admin passkey information displayed)
3. Chatbot provides comprehensive website information
4. Admin enters passkey directly in chatbot input field
5. System automatically recognizes passkey format and validates passkey
6. Upon successful validation, Admin Dashboard opens automatically with split-screen interface
7. Admin sees live preview panel on right side showing real-time website appearance
8. Admin configures Supabase connection (first-time setup):
   - Views step-by-step connection guide in chatbot
   - Enters Supabase Project URL
   - Enters Supabase API key
   - Tests connection
   - Confirms successful connection
   - System automatically creates required tables and storage buckets
9. Admin manages content with instant live preview updates:
   - Splash Screen: Upload splash screen image (up to 50MB), configure display duration, enable/disable functionality, configure responsive scaling
   - Pop-up Image: Upload pop-up image with database storage (up to 50MB), add/delete images, enable/disable functionality, configure responsive scaling, configure default 6-second display duration, configure hold-to-freeze functionality, configure click-to-dismiss functionality, configure background glow effects (color, intensity, spread), preview hold-to-freeze functionality, preview click-to-dismiss functionality, preview background glow effects
   - Total Body Background: Upload total body background image (up to 50MB), configure responsive scaling for different screen sizes, configure positioning, configure fixed/scroll behavior
   - Primary Header: Position navigation menu at top-right, configure mobile menu icon transparent background (no background on menu lines only), configure styling, upload animated FUSION 2k26 background slideshow images (up to 5 images, each up to 50MB), reorder slideshow images with drag-and-drop, delete individual slideshow images, configure 5-second display duration and dissolve transition effect, configure responsive scaling for background slideshow across different screen sizes
   - FUSION 2k26 Text: Configure text content, font settings, responsive sizing, alignment, animation settings
   - Secondary Header: Update college name (ADITYA College of Engineering Madanapalle), location (MADANAPALLE), institution status (UGC - Autonomous Institution), configure golden color styling with black border and glowing background, upload logos (up to 50MB per logo), configure logo shapes (circle/semi-square), configure responsive sizing for logos and text across different screen sizes with minimum two logos visible on mobile (left-right positioning), manage positioning, update static data
   - Mobile Logo Scrolling (homepage only): Add/remove logos with database storage (up to 50MB per logo), configure logo display order, configure scrolling animation settings (semi-square shape, 20px height, left-to-right animation), configure glow effect settings, configure transparent background
   - Responsive Configuration: Set breakpoints, configure font size mappings for different screen sizes, configure logo size mappings for desktop/tablet/mobile views with mobile left-right positioning, configure background image scaling behavior, configure text alignment mappings
   - Text Styling: Adjust font, size, color
   - Background: Change color or upload background image (admin-controlled) with responsive scaling configuration
   - Body Content: Add text boxes anywhere with drag-and-drop, edit positioning and content
   - Footer: Edit structure, update contact details, customize styling
   - Event Posters: Upload event poster images with database storage (up to 50MB per poster), add/delete posters, configure automatic scrolling animation settings, configure animation duration, configure hold-to-freeze functionality, rearrange poster display order
   - Events: Add event details including rules with rich text formatting, instructions with rich text formatting, multiple images (up to 50MB per image), event-specific staff coordinator details (name, role, photo with shape configuration up to 50MB), event-specific student coordinator details (name, contact number, photo with shape configuration up to 50MB), Google Form link; Use rich text editor for event description, rules, and instructions with text justification, list formatting options (bullet and numbered), text color picker, and bold text button; Edit event-specific coordinator details directly within Events Section; Configure photo display enable/disable option per event
   - Committees: Add committees with name, description, image (optional, up to 50MB), role details, staff details (name, role, photo with shape configuration up to 50MB, contact), student details (name, role, photo with shape configuration up to 50MB, contact); Edit committee information; Configure photo display enable/disable option per committee; Configure purple glow effect settings
   - Gallery: Upload images through Gallery Management interface (up to 50MB per image), images stored in Supabase Storage and displayed in public Gallery Section; Configure image frame width (increased by 1-2px for enhanced visual presentation); Configure unified gold frame color; Configure glow effect intensity and spread for all frames
   - About Us, Contact management
   - Chatbot information content management (excluding admin passkey information)
10. Admin arranges homepage layout and dual header sections as desired
11. Admin uploads and configures splash screen image with responsive scaling settings (up to 50MB)
12. Admin uploads and configures pop-up image with responsive scaling settings, default 6-second display duration configuration, hold-to-freeze functionality configuration, click-to-dismiss functionality configuration, and background glow effects configuration (up to 50MB)
13. Admin uploads and configures total body background image with responsive scaling settings for different devices (up to 50MB)
14. Admin uploads and configures animated FUSION 2k26 background slideshow images (up to 5 images, each up to 50MB) with 5-second display duration, dissolve transition effect, drag-and-drop reordering, and individual image deletion
15. Admin configures mobile view navigation menu icon with transparent background (no background on menu lines only)
16. Admin configures FUSION 2k26 text with responsive sizing and animation settings
17. Admin configures responsive behavior for secondary header including logo sizing (minimum two visible on mobile with left-right positioning) and text scaling with golden color, black border, and glowing background for different devices
18. Admin configures mobile logo scrolling section (homepage only) with logo upload (up to 50MB per logo), order settings, animation configuration (semi-square shape, 20px height, left-to-right animation), glow effect configuration, and transparent background configuration
19. Admin uploads event poster images (up to 50MB per poster), configures automatic scrolling animation, configures animation duration, and configures hold-to-freeze functionality
20. Admin configures gallery with unified gold frame color and glow effect for all frames
21. Admin edits entire application including splash screen, pop-up image with default 6-second display duration settings, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects, total body background, primary header with animated FUSION 2k26 background slideshow (up to 5 images with dissolve transitions), mobile menu icon transparent background, FUSION 2k26 text with animations, secondary header with responsive configurations and glowing background, mobile logo scrolling section (homepage only) with glow effect and transparent background, event poster section with scrolling animation and hold-to-freeze functionality, footer, body sections, event-specific coordinator details with photo management and role field, committee information including name, description, image, role details, and staff/student details with photo management and role field, event descriptions, rules, and instructions with rich text formatting including justified text, list formatting (bullet and numbered), text color customization, and bold text formatting for all events, gallery with unified gold frame color and glow effect, and committee card purple glow effect settings
22. Admin can change passkey through Passkey Management
23. All changes save to Supabase automatically and reflect immediately across all web pages on public UI and live preview with proper responsive behavior including splash screen display, pop-up image display with default 6-second duration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects, total body background image scaling, animated FUSION 2k26 background slideshow scaling with dissolve transitions, mobile menu icon transparent background, text animations, poster scrolling with hold-to-freeze functionality, photo display, mobile logo scrolling (homepage only) with glow effect and transparent background, committee card purple glow effect, gallery unified gold frame color with glow effect, and event content formatting with justified text, lists (bullet and numbered), text colors, and bold formatting
24. Admin can access and edit multiple web pages with consistent editing interface
25. All image uploads support up to 50MB file size limit

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
1. Test splash screen display on initial load with 2-second duration and automatic transition
2. Test pop-up image display on initial page load with default 6-second display duration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects
3. Test total body background image display and responsive scaling across different screen sizes
4. Test public user interface with dual header system
5. Test animated FUSION 2k26 background slideshow display (up to 5 images with 5-second dissolve transitions) and responsive scaling across different screen sizes
6. Test mobile view navigation menu icon with transparent background (no background on menu lines only)
7. Test FUSION 2k26 text display with responsive sizing and animations
8. Test responsive behavior of secondary header across different screen sizes with golden color, black border, and glowing background
9. Verify logo sizing adjustments on mobile, tablet, and desktop views with minimum two logos visible on mobile (left-right positioning)
10. Verify text scaling for college name, location, and institution status across devices
11. Test mobile logo scrolling section (homepage only) with semi-square logos (20px height), automatic left-to-right scrolling animation, glow effect around logos, and transparent background on mobile devices
12. Verify mobile logo scrolling section does not display on desktop or tablet views
13. Verify mobile logo scrolling section displays only on homepage, not on other pages
14. Test gallery section display with unified gold frame color and glow effect for all frames
15. Test event poster section display positioned after Gallery and before About Us with automatic scrolling animation and hold-to-freeze functionality
16. Test chatbot functionality (verify no admin access option or passkey information displayed)
17. Test admin authentication with automatic passkey recognition
18. Test admin dashboard functionality
19. Test database connection
20. Verify live preview updates
21. Test gallery image upload and display with increased frame width (1-2px more) and unified gold frame color with glow effect
22. Test splash screen image upload and responsive scaling configuration (up to 50MB)
23. Test pop-up image upload, add/delete functionality, responsive scaling configuration, default 6-second display duration configuration, hold-to-freeze functionality configuration, click-to-dismiss functionality configuration, and background glow effects configuration (up to 50MB)
24. Test pop-up image hold-to-freeze functionality
25. Test pop-up image click-to-dismiss functionality
26. Test pop-up image background glow effects
27. Test total body background image upload and responsive scaling configuration (up to 50MB)
28. Test animated FUSION 2k26 background slideshow image upload (up to 5 images, each up to 50MB), reordering with drag-and-drop, individual image deletion, dissolve transition configuration, and responsive scaling configuration
29. Test mobile view navigation menu icon transparent background configuration
30. Test FUSION 2k26 text configuration with responsive sizing and animation settings
31. Test event poster image upload, add/delete functionality, scrolling animation configuration, animation duration configuration, and hold-to-freeze functionality configuration (up to 50MB per poster)
32. Test primary and secondary header management including responsive configurations with glowing background
33. Test mobile logo scrolling management (homepage only) with logo upload (up to 50MB per logo), add/delete functionality, order configuration, animation settings, glow effect configuration, and transparent background configuration
34. Test event-specific coordinator details display and photo management (up to 50MB per photo)
35. Test event-specific coordinator editing within Events Section with photo upload, shape configuration, and role field
36. Test committee management with name, description, image (up to 50MB), role details, and staff/student details including role field
37. Test committee card click functionality and detail view opening
38. Test committee card purple glow effect on click
39. Test committee detail view display with complete committee information including role details and staff/student details with role field
40. Test committee detail view close/back functionality
41. Test event description rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
42. Test event rules rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
43. Test event instructions rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
44. Test event description, rules, and instructions display with formatted content including text colors, bold formatting, and list formatting (bullet and numbered) for all events
45. Test gallery unified gold frame color and glow effect configuration
46. Verify proper image recognition and display for pop-up images, event posters, mobile logos, and animated background slideshow images
47. Test image upload validation for 50MB file size limit across all image types

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
2. Test splash screen display on initial load with 2-second duration and automatic transition on actual devices
3. Test pop-up image display on initial page load with default 6-second display duration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects on actual devices
4. Test total body background image display and responsive scaling on actual devices
5. Test all public user features including dual header system
6. Test animated FUSION 2k26 background slideshow display (up to 5 images with 5-second dissolve transitions) and responsive scaling on actual devices
7. Test mobile view navigation menu icon with transparent background (no background on menu lines only) on actual mobile devices
8. Test FUSION 2k26 text display with responsive sizing and animations on actual devices
9. Test responsive behavior of secondary header on actual mobile devices with golden color, black border, and glowing background
10. Verify logo and text scaling across different screen sizes with minimum two logos visible on mobile (left-right positioning)
11. Test mobile logo scrolling section (homepage only) on actual mobile devices with semi-square logos (20px height), automatic left-to-right scrolling animation, glow effect around logos, and transparent background
12. Verify mobile logo scrolling section does not display on desktop or tablet devices
13. Verify mobile logo scrolling section displays only on homepage, not on other pages
14. Test gallery section display with unified gold frame color and glow effect for all frames on actual devices
15. Test event poster section display positioned after Gallery and before About Us with automatic scrolling animation and hold-to-freeze functionality on actual devices
16. Test chatbot functionality (verify no admin access option or passkey information displayed)
17. Test admin authentication with automatic passkey recognition
18. Test admin dashboard
19. Verify database connectivity
20. Test live preview functionality
21. Verify image uploads to Supabase Storage
22. Test gallery image display on public UI with increased frame width (1-2px more) and unified gold frame color with glow effect
23. Test splash screen image upload and responsive scaling configuration (up to 50MB)
24. Test pop-up image upload, add/delete functionality, responsive scaling configuration, default 6-second display duration configuration, hold-to-freeze functionality configuration, click-to-dismiss functionality configuration, and background glow effects configuration (up to 50MB)
25. Test pop-up image hold-to-freeze functionality on actual devices
26. Test pop-up image click-to-dismiss functionality on actual devices
27. Test pop-up image background glow effects on actual devices
28. Test total body background image upload and responsive scaling configuration (up to 50MB)
29. Test animated FUSION 2k26 background slideshow image upload (up to 5 images, each up to 50MB), reordering, deletion, dissolve transition, and responsive scaling configuration
30. Test mobile view navigation menu icon transparent background on actual mobile devices
31. Test FUSION 2k26 text configuration with responsive sizing and animation settings
32. Test event poster image upload, add/delete functionality, scrolling animation configuration, animation duration configuration, and hold-to-freeze functionality configuration (up to 50MB per poster)
33. Test primary and secondary header display and management with responsive configurations and glowing background
34. Test mobile logo scrolling management (homepage only) with logo upload (up to 50MB per logo), add/delete functionality, order configuration, animation settings, glow effect configuration, and transparent background configuration
35. Test event-specific coordinator details display and photo management functionality (up to 50MB per photo)
36. Test event-specific coordinator editing within Events Section with photo upload, shape configuration, and role field
37. Test committee management with name, description, image (up to 50MB), role details, and staff/student details functionality including role field
38. Test committee card click functionality and detail view opening on actual devices
39. Test committee card purple glow effect on click on actual devices
40. Test committee detail view responsiveness across different screen sizes
41. Test committee detail view close/back functionality
42. Test event description rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
43. Test event rules rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
44. Test event instructions rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
45. Test event description, rules, and instructions display with justified and listified formatting including text colors, bold formatting, and list formatting (bullet and numbered) for all events
46. Test gallery unified gold frame color and glow effect on actual devices
47. Verify proper image recognition and display for pop-up images, event posters, mobile logos, and animated background slideshow images on actual devices
48. Test image upload validation for 50MB file size limit across all image types

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
5. Add splash screen management endpoint
6. Add pop-up image management endpoint with add/delete functionality, default 6-second display duration configuration, hold-to-freeze functionality configuration, click-to-dismiss functionality configuration, and background glow effects configuration
7. Add total body background management endpoint
8. Add gallery image upload endpoint with gold frame color and glow effect configuration
9. Add animated FUSION 2k26 background slideshow upload endpoint with support for up to 5 images, reordering, deletion, and dissolve transition configuration
10. Add mobile view navigation menu icon transparent background configuration endpoint
11. Add FUSION 2k26 text management endpoint
12. Add event poster image upload endpoint with add/delete functionality, animation duration configuration, and hold-to-freeze functionality configuration
13. Add primary and secondary header management endpoints
14. Add responsive configuration management endpoints
15. Add mobile logo scrolling management endpoints (homepage only) with add/delete functionality, glow effect configuration, and transparent background configuration
16. Add event-specific coordinator management endpoints with photo upload and role field within Events Section
17. Add committee management endpoints with image and staff/student photo upload including role field and purple glow effect settings
18. Add committee detail retrieval endpoint
19. Add event description, rules, and instructions formatting endpoints with text color, bold formatting, and list formatting (bullet and numbered)
20. Add gallery gold frame color and glow effect configuration endpoints
21. Update chatbot endpoints to remove admin passkey information display
22. Add proper image URL storage and retrieval endpoints for pop-up images, event posters, mobile logos, and animated background slideshow images
23. Add image upload validation for 50MB file size limit

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
6. Test splash screen display and configuration
7. Test pop-up image display, add/delete functionality, default 6-second display duration configuration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects
8. Test total body background image upload and responsive scaling
9. Test gallery image upload and display with increased frame width and unified gold frame color with glow effect
10. Test animated FUSION 2k26 background slideshow image upload (up to 5 images), reordering, deletion, dissolve transition, and responsive scaling
11. Test mobile view navigation menu icon transparent background configuration
12. Test FUSION 2k26 text configuration with responsive sizing and animations
13. Test event poster image upload, add/delete functionality, scrolling animation, animation duration configuration, and hold-to-freeze functionality
14. Test dual header system management
15. Test responsive configuration management for secondary header with glowing background
16. Test mobile logo scrolling management (homepage only) with logo upload, add/delete functionality, order configuration, animation settings, glow effect configuration, and transparent background configuration
17. Test event-specific coordinator management and photo upload with shape configuration and role field within Events Section
18. Test committee management with name, description, image, role details, and staff/student photo upload including role field and purple glow effect settings
19. Test committee card click and detail view functionality with purple glow effect
20. Test event description, rules, and instructions rich text editor with text color, bold formatting, and list formatting (bullet and numbered)
21. Test gallery unified gold frame color and glow effect configuration
22. Test chatbot functionality (verify no admin access option or passkey information displayed)
23. Test admin authentication with automatic passkey recognition
24. Verify proper image recognition and display for pop-up images, event posters, mobile logos, and animated background slideshow images
25. Test image upload validation for 50MB file size limit across all image types

#### Step 5: Deploy Migrated Version
1. Commit changes to version control
2. Follow MeDo deployment steps (Section 6.2)
3. Verify deployed application

## 7. Other Requirements

### 7.1 Supabase Table Schema
System will automatically create the following tables on first connection:
- splash_screen_content (id, image_url, display_duration, enabled, responsive_scaling_settings, animation_settings, created_at, updated_at)
- popup_image_content (id, image_url, enabled, responsive_scaling_settings, positioning_settings, default_display_duration (default: 6 seconds), hold_to_freeze_enabled, click_to_dismiss_enabled, background_glow_settings, created_at, updated_at)
- total_body_background_content (id, background_image_url, responsive_scaling_settings, positioning_settings, fixed_scroll_behavior, created_at, updated_at)
- primary_header_content (id, navigation_menu, navigation_position, mobile_menu_icon_transparent_background, styling configurations, background_slideshow_images (array of up to 5 image URLs), slideshow_display_duration (5 seconds), slideshow_transition_effect (dissolve), responsive_scaling_settings, created_at, updated_at)
- fusion_text_content (id, text_content, font_settings, responsive_sizing_settings, alignment_settings, animation_settings, created_at, updated_at)
- secondary_header_content (id, college_name, location, institution_status, logos, logo_shapes, static_data, styling_with_golden_color_black_border_glowing_background, mobile_logo_positioning, created_at, updated_at)
- mobile_logo_scrolling (id, logo_url, display_order, logo_shape (semi-square, fixed), logo_height (20px, fixed), scrolling_speed, animation_direction (left to right, fixed), loop_enabled, glow_effect_settings, transparent_background_enabled, created_at, updated_at)
- responsive_configuration (id, breakpoints, font_size_mappings, logo_size_mappings_with_mobile_left_right_positioning, logo_positioning, background_scaling_mappings, text_alignment_mappings, created_at, updated_at)
- text_styling (id, font_family, font_size, text_color, created_at, updated_at)
- background_settings (id, background_color, background_image_url, responsive_scaling_settings, created_at, updated_at)
- body_content (id, text_boxes, created_at, updated_at)
- footer_content (id, structure, contact_details, social_links, styling, created_at, updated_at)
- event_posters (id, image_url, display_order, animation_settings, animation_duration, hold_to_freeze_enabled, created_at, updated_at)
- events (id, name, type, description_html_with_text_color_bold_formatting_and_list_formatting, rules_html_with_text_color_bold_formatting_and_list_formatting, instructions_html_with_text_color_bold_formatting_and_list_formatting, images, event_specific_staff_coordinators_with_photos_and_role, event_specific_student_coordinators_with_photos, registration_link, photo_display_enabled, created_at, updated_at)
- committees (id, committee_name, description, image_url, role_details, staff_details_with_photos_and_role, student_details_with_photos_and_role, photo_display_enabled, purple_glow_enabled, created_at, updated_at)
- gallery_images (id, image_url, frame_width, frame_color (gold), glow_effect_settings, created_at, updated_at)
- about_us (id, content, created_at, updated_at)
- contact_info (id, details, created_at, updated_at)
- admin_config (id, passkey, created_at, updated_at)
- chatbot_info (id, content, created_at, updated_at)

### 7.2 Image Storage
- All uploaded images stored in Supabase Storage
- Image upload size limit: 50MB for all image types
- Separate storage buckets for:
  - Splash_screens (for splash screen images with responsive scaling support, 50MB limit)
  - Popup_images (for pop-up images with responsive scaling support, default 6-second display duration configuration, hold-to-freeze functionality, click-to-dismiss functionality, and background glow effects, 50MB limit)
  - Total_backgrounds (for total body background images with responsive scaling support, 50MB limit)
  - Backgrounds (including animated FUSION 2k26 header background slideshow images with up to 5 images, dissolve transitions, and responsive scaling support, 50MB limit per image)
  - Logos (including secondary header logos with shape configurations, responsive sizing, and mobile left-right positioning, 50MB limit per logo)
  - Mobile_logos (for mobile logo scrolling section, homepage only, semi-square shape, 20px height, glow effect, transparent background, 50MB limit per logo)
  - Event posters (for Event Poster Section with automatic scrolling animation, hold-to-freeze functionality, and animation duration configuration, 50MB limit per poster)
  - Event images (50MB limit per image)
  - Coordinator photos (for event-specific staff and student coordinators with round and semi-circle shape support, 50MB limit per photo)
  - Committee images and staff/student photos (for committee groups with round and semi-circle shape support, 50MB limit per image)
  - Gallery images (for Gallery Section display with configurable frame width and unified gold frame color with glow effect, 50MB limit per image)
  - Background images (50MB limit per image)
- Public access configured for image buckets
- Automatic URL generation for uploaded images
- Splash_screens bucket specifically configured for splash screen images with responsive scaling capabilities and 50MB size limit
- Popup_images bucket specifically configured for pop-up images with responsive scaling capabilities, default 6-second display duration configuration, hold-to-freeze functionality, click-to-dismiss functionality, background glow effects, and 50MB size limit
- Total_backgrounds bucket specifically configured for total body background images with responsive scaling capabilities and 50MB size limit
- Gallery bucket specifically configured for admin-uploaded gallery images that display in public Gallery Section with increased frame width (1-2px more) and unified gold frame color with glow effect, 50MB size limit per image
- Backgrounds bucket specifically configured for animated FUSION 2k26 header background slideshow images (up to 5 images) with dissolve transitions and responsive scaling capabilities, 50MB size limit per image
- Event_posters bucket specifically configured for event poster images with automatic scrolling animation, hold-to-freeze functionality, animation duration configuration, and 50MB size limit per poster
- Coordinator_photos bucket specifically configured for staff and student photos with round and semi-circle shape configurations and 50MB size limit per photo
- Committees bucket specifically configured for committee images and staff/student photos with round and semi-circle shape configurations and 50MB size limit per image
- Mobile_logos bucket specifically configured for mobile logo scrolling section (homepage only) with semi-square shape, 20px height, glow effect, transparent background, and 50MB size limit per logo
- Logo bucket supports circle and semi-square shape configurations with responsive sizing capabilities, mobile left-right positioning, and 50MB size limit per logo
- Proper image URL storage in database tables for pop-up images, event posters, mobile logos, and animated background slideshow images
- Image recognition implementation ensuring all admin-uploaded images display correctly to users
- Image upload validation for 50MB file size limit across all image types