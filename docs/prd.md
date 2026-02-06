# Fusion26 College Fest Web Application Requirements Document

## 1. Application Overview

### 1.1 Application Name
Fusion26

### 1.2 Application Description
A cinematic, immersive multi-page web application for a college fest that delivers a premium, dramatic, and visually powerful experience inspired by modern event websites like ashv2k.in. The platform features a public user interface for event browsing and registration, alongside a secure admin dashboard with real-time live preview functionality accessible via enhanced chatbot authentication for comprehensive content management. The application supports multiple web pages with flexible responsive design across all screen sizes, and provides admins with complete control over all sections including dual header system with FUSION 2k26 background image, footer, and body content with drag-and-drop text box placement capabilities. The system connects to Supabase cloud database with manual configuration support. The application includes a splash screen that displays for 2 seconds on initial load before automatically opening the main application. A pop-up image feature displays on initial page load with configurable display duration and interactive hold-to-freeze functionality, automatically disappearing based on admin-set duration or when user releases the image.

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
- Admin-configurable splash screen image upload
- Admin can enable/disable splash screen functionality

### 2.2 Pop-up Image Feature

#### 2.2.1 Pop-up Image Display
- Display pop-up image on initial page load after splash screen
- Pop-up image appears automatically when main application loads
- Pop-up image overlays the main content
- Responsive pop-up image scaling across all screen sizes:
  - Desktop: Optimal size with centered positioning
  - Tablet: Proportional scaling maintaining aspect ratio
  - Mobile: Responsive scaling ensuring visibility and proper fit
- Admin-configurable pop-up image upload and storage in database
- Admin can add/delete pop-up images through admin dashboard
- Pop-up images stored in Supabase database with proper image URL storage
- Admin can enable/disable pop-up image functionality
- Admin can configure default display duration for pop-up image

#### 2.2.2 Pop-up Image Display Duration and Interaction
- Admin sets default display duration for pop-up image (configurable in seconds)
- Interactive hold-to-freeze functionality:
  - When user holds/touches the pop-up image: Timer freezes, image remains visible
  - When user releases the image: Image disappears immediately
- If user does not interact with pop-up image: Image automatically disappears after admin-configured default duration
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

### 2.3 Public User Interface

#### 2.3.1 Total Body Background Image
- Full application body background image support
- Background image automatically adjusts and scales to fit all screen sizes:
  - Desktop: Full-size display with optimal positioning
  - Tablet: Proportional scaling maintaining aspect ratio
  - Mobile: Responsive scaling ensuring visibility and proper fit
- Flexible background image positioning adapting to different screen dimensions
- Admin-configurable total body background image upload
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
- Admin can add or remove mobile scrolling logos through admin dashboard
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
- Admin-configurable FUSION 2k26 background image with responsive scaling
- Admin-configurable total body background image with responsive scaling
- Admin-configurable FUSION 2k26 text with responsive sizing and animations
- Admin-configurable logo arrangement (add/delete logos with shape options)
- Admin-editable body content with flexible text box placement
- Mobile logo scrolling section (mobile view only, homepage only) displaying semi-square logos (20px height) with automatic left-to-right scrolling animation and glow effect around logos on transparent background
- Pop-up image displays on initial page load with configurable display duration and hold-to-freeze functionality

#### 2.3.7 Event Poster Section
- Positioned after Gallery Section and before About Us Section
- Automatic horizontal scrolling animation (left to right)
- Display event poster images uploaded by admin
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

#### 2.3.10 Committee Section
- Display committee groups (not individual persons) with details:
  - Technical Committee
  - Cultural Committee
  - Other committees
- Each committee card displays:
  - Committee Name
  - Committee Image (optional)
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
      - Staff Photo (optional, round or semi-circle shape)
      - Staff Contact (optional)
    - Student details:
      - Student Name
      - Student Role
      - Student Photo (optional, round or semi-circle shape)
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
- Cinematic grid/masonry layout displaying uploaded images
- Enhanced frame styling with animated color effects:
  - Frame colors: Gold, Blue, Sky Blue, Purple, Pink
  - Animated glow effect moving diagonally from left-top corner to right-bottom corner
  - Color glow moves in wave form across all frame colors
  - Glow animation applies automatically to all frames
  - Smooth color transitions creating dynamic visual effect
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
- Upload splash screen image
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
- Upload pop-up image with proper database storage
- Add multiple pop-up images through admin interface
- Delete pop-up images from database
- Pop-up images stored in Supabase Storage with URLs saved in database
- Enable/disable pop-up image functionality
- Configure pop-up image responsive scaling:
  - Desktop scaling settings
  - Tablet scaling settings
  - Mobile scaling settings
- Configure pop-up image positioning for different screen sizes
- Configure default display duration for pop-up image (in seconds)
- Display duration configuration interface in admin dashboard
- Preview pop-up image appearance across all screen sizes
- Preview hold-to-freeze functionality behavior
- All changes update automatically in database and reflect in live preview
- Proper image recognition implementation ensuring pop-up images display correctly to users

#### 2.5.4 Total Body Background Management
- Upload total body background image
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

#### 2.5.7 Mobile Logo Scrolling Management (Homepage Only)
- Add or remove logos for mobile scrolling section with proper database storage
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
- Configure FUSION 2k26 background image with responsive scaling
- Configure total body background image with responsive scaling
- Configure FUSION 2k26 text with responsive sizing and animations
- Configure secondary logo and college information header layout
- Add or delete logos dynamically with shape configuration
- Configure mobile logo scrolling section (homepage only) with logo order settings and glow effect configuration
- Configure layout elements positioning
- Drag-and-drop interface for section reordering
- All customizations apply across multiple web pages

#### 2.5.12 Event Poster Management
- Upload event poster images with proper database storage
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
  - Committee Image upload (optional)
  - Committee Role details
  - Staff details:
    - Staff Name
    - Staff Role
    - Staff Photo upload (optional)
    - Photo shape configuration (round or semi-circle)
    - Staff Contact (optional)
  - Student details:
    - Student Name
    - Student Role
    - Student Photo upload (optional)
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
- Upload multiple images to gallery
- Image upload interface with file selection
- Uploaded images stored in Supabase Storage
- Image URLs automatically generated and stored in gallery_images table
- Images appear in cinematic gallery layout on public UI Gallery Section
- Live preview shows gallery updates instantly
- Delete images from gallery
- Rearrange image display order
- Configure image frame width (increased by 1-2px for enhanced visual presentation)
- Configure animated frame color effects:
  - Select frame colors: Gold, Blue, Sky Blue, Purple, Pink
  - Configure diagonal glow animation (left-top to right-bottom)
  - Configure wave form color transitions
  - Enable/disable automatic glow animation for all frames
  - Preview animated frame effects in live preview

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
  - Pop-up image configuration with responsive scaling, display duration settings, and hold-to-freeze functionality
  - Total body background image with responsive scaling
  - Primary header sections with FUSION 2k26 background image and responsive scaling
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
  - Gallery image frame width configuration and animated frame color effects with diagonal glow animation
  - Committee card purple glow effect on click
- Flexible editing interface allowing customization of any component
- All edits automatically update database
- All changes reflect instantly on public website and live preview

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
- Pop-up image with responsive scaling, configurable display duration, and hold-to-freeze functionality
- Total body background image with responsive scaling across all screen sizes
- Default background color with admin override capability
- Enhanced footer design with improved visual hierarchy
- Primary header with navigation menu positioned at top-right corner
- Primary header with admin-configurable FUSION 2k26 background image that scales responsively across all screen sizes
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
- Gallery section with animated frame color effects:
  - Frame colors: Gold, Blue, Sky Blue, Purple, Pink
  - Diagonal glow animation moving from left-top corner to right-bottom corner
  - Wave form color transitions across all frame colors
  - Automatic glow animation applied to all frames
- Gallery section with increased image frame width (1-2px more) for enhanced visual presentation

### 3.2 Responsive Design
- Fully responsive across mobile, tablet, and desktop devices
- Flexible layout adapting to all screen sizes for easy access
- Smooth page transitions and animated loading states
- Splash screen responsive scaling across all screen sizes with automatic transition
- Pop-up image responsive scaling across all screen sizes with configurable display duration and hold-to-freeze functionality
- Total body background image automatically scales and adjusts to fit all screen sizes:
  - Desktop: Full-size display with optimal aspect ratio
  - Tablet: Proportional scaling maintaining visual quality
  - Mobile: Responsive scaling ensuring proper fit and visibility
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
  - Glow effect around logos
  - Transparent background
- Event poster section responsive across all screen sizes with automatic scrolling animation and hold-to-freeze functionality
- Multiple web pages with consistent responsive behavior
- Admin dashboard optimized for desktop editing experience
- Event descriptions, rules, and instructions maintain justified alignment, list formatting (bullet and numbered), text colors, and bold formatting across all screen sizes for all events
- Committee detail view responsive across all devices
- Committee cards with purple glow effect on click responsive across all devices
- Staff and student photos display responsively in round or semi-circle shapes
- Gallery images with animated frame color effects and increased frame width (1-2px more) responsive across all screen sizes

### 3.3 Performance Optimization
- Optimized animations and images
- Fast loading times
- Lazy loading for gallery images
- High performance rendering
- Efficient live preview updates without page reload
- Optimized splash screen loading with minimal delay
- Optimized pop-up image loading with responsive image sizing and efficient hold-to-freeze interaction handling
- Optimized total body background image loading with responsive image sizing
- Optimized FUSION 2k26 background image loading with responsive image sizing
- Efficient modal/detail view loading for committee details
- Optimized event poster scrolling animation with hold-to-freeze functionality
- Efficient staff and student photo loading with lazy loading
- Optimized mobile logo scrolling animation (homepage only) with glow effect rendering
- Efficient purple glow effect rendering on committee card click
- Efficient database queries for retrieving pop-up images, event posters, and mobile logos
- Optimized animated frame color effects rendering for gallery images

## 4. Technical Requirements

### 4.1 Database
- Supabase cloud database for data storage
- Manual connection configuration support
- Tables for:
  - Splash screen content (id, image_url, display_duration, enabled, responsive_scaling_settings, animation_settings, created_at, updated_at)
  - Pop-up image content (id, image_url, enabled, responsive_scaling_settings, positioning_settings, default_display_duration, hold_to_freeze_enabled, created_at, updated_at)
  - Total body background content (background_image_url, responsive_scaling_settings, positioning_settings, fixed_scroll_behavior, created_at, updated_at)
  - Primary header content (navigation_menu, navigation_position, styling configurations, background_image_url, responsive_scaling_settings, created_at, updated_at)
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
  - Gallery images (storing image URLs from Supabase Storage, frame_width_configuration, frame_color_settings, diagonal_glow_animation_settings, wave_form_color_transition_settings)
  - About Us content
  - Contact information
  - Admin passkey
  - Database connection configuration
  - Chatbot information content
- Automatic data updates on admin changes
- Connection credentials stored securely
- Supabase Storage for image uploads including splash screen images, pop-up images, total body background images, FUSION 2k26 background images, event posters, staff/student photos, committee images, mobile scrolling logos
- Event-specific coordinator details stored within events table
- Committee details stored in committees table with role field, staff details, student details, and purple glow effect settings
- Event description, rules, and instructions formatting metadata including text color, bold formatting, and list formatting (bullet and numbered) stored within events table for all events
- Mobile logo scrolling data stored in mobile_logo_scrolling table (homepage only) with glow effect settings and transparent background configuration
- Splash screen data stored in splash_screen_content table
- Pop-up image data stored in popup_image_content table with default_display_duration and hold_to_freeze_enabled fields
- Total body background data stored in total_body_background_content table
- Event poster data stored in event_posters table with proper image URL storage, animation duration, and hold_to_freeze_enabled fields
- Mobile logo data stored in mobile_logo_scrolling table with proper image URL storage, glow effect settings, and transparent background configuration
- Gallery frame color and animation data stored in gallery_images table

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
  - Pop-up image management (upload, retrieve, update settings, responsive scaling configuration, display duration configuration, hold-to-freeze functionality, add/delete images with database storage)
  - Total body background management (upload, retrieve, update settings, responsive scaling configuration)
  - Database connection management
  - Primary header management (navigation menu, positioning, FUSION 2k26 background image upload, responsive scaling configuration)
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
  - Gallery image management (upload, retrieve, delete, frame width configuration, frame color configuration, diagonal glow animation configuration, wave form color transition configuration)
  - Complete application editing
  - Chatbot information retrieval (excluding admin passkey information)
  - Image upload to Supabase Storage (including splash screen images, pop-up images, total body background images, FUSION 2k26 background images, event posters, staff/student photos, committee images, mobile scrolling logos)
- Environment variable support for connection credentials storage
- Error handling for database connection failures
- Automatic passkey recognition logic without explicit admin access option
- Proper image URL storage and retrieval for pop-up images, event posters, and mobile logos
- Database query optimization for efficient image retrieval and display

### 4.3 Image Upload Implementation
- Splash screen image upload flow:
  - Admin uploads splash screen image through Splash Screen Management interface
  - Frontend sends image file to backend API endpoint
  - Backend uploads image to Supabase Storage splash_screens bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL and responsive scaling settings in splash_screen_content table
  - Frontend retrieves splash screen image URL and displays for 2 seconds on initial load
  - Public UI displays splash screen with automatic transition to main application
- Pop-up image upload flow:
  - Admin uploads pop-up image through Pop-up Image Management interface
  - Frontend sends image file to backend API endpoint
  - Backend uploads image to Supabase Storage popup_images bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL, responsive scaling settings, and display duration in popup_image_content table
  - Admin can add multiple pop-up images
  - Admin can delete pop-up images from database
  - Frontend retrieves pop-up image URL and displays on initial page load with configurable duration and hold-to-freeze functionality
  - Public UI displays pop-up image with proper image recognition ensuring visibility to users
- Total body background image upload flow:
  - Admin uploads total body background image through Total Body Background Management interface
  - Frontend sends image file to backend API endpoint
  - Backend uploads image to Supabase Storage total_backgrounds bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL and responsive scaling settings in total_body_background_content table
  - Frontend retrieves background image URL and applies responsive scaling
  - Public UI displays background image across entire application body with automatic scaling across all screen sizes
- Gallery image upload flow:
  - Admin selects images through Gallery Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage gallery bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL, frame width, frame color settings, and animation settings in gallery_images table
  - Frontend retrieves image URLs from gallery_images table
  - Public UI Gallery Section displays images using stored URLs with increased frame width (1-2px more) and animated frame color effects
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
  - Backend stores image URL, display order, animation duration, and hold-to-freeze settings in event_posters table
  - Admin can add multiple event posters
  - Admin can delete event posters from database
  - Frontend retrieves poster image URLs and displays with automatic scrolling animation and hold-to-freeze functionality
  - Public UI displays event posters with proper image recognition ensuring visibility to users
- Staff/Student photo upload flow:
  - Admin uploads staff/student photos through Event Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage coordinator_photos bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL in events table (event-specific)
  - Frontend retrieves photo URLs and displays in round or semi-circle shape based on configuration
- Committee image and staff/student photo upload flow:
  - Admin uploads committee images and staff/student photos through Committee Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage committees bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URLs in committees table
  - Frontend retrieves image URLs and displays committee images and staff/student photos
- Mobile logo scrolling image upload flow (homepage only):
  - Admin uploads logo images through Mobile Logo Scrolling Management interface
  - Frontend sends image files to backend API endpoint
  - Backend uploads images to Supabase Storage mobile_logos bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL, display order, glow effect settings, and transparent background configuration in mobile_logo_scrolling table
  - Admin can add multiple mobile logos
  - Admin can delete mobile logos from database
  - Frontend retrieves logo image URLs and displays with automatic left-to-right scrolling animation, glow effect, and transparent background on mobile homepage only
  - Public UI displays mobile logos with proper image recognition ensuring visibility to users
- File update locations for splash screen image upload:
  - Backend API file: Create/update splash screen upload endpoint (e.g., /api/splash-screen/upload)
  - Admin Dashboard component: Add splash screen image upload interface in Splash Screen Management section
  - Public Splash Screen component: Fetch and display splash screen image with 2-second duration and automatic transition
  - Supabase Storage configuration: Create splash_screens bucket with public access
- File update locations for pop-up image upload:
  - Backend API file: Create/update pop-up image upload endpoint (e.g., /api/popup-image/upload)
  - Admin Dashboard component: Add pop-up image upload interface in Pop-up Image Management section with add/delete functionality
  - Public Pop-up Image component: Fetch and display pop-up image with configurable display duration and hold-to-freeze functionality
  - Supabase Storage configuration: Create popup_images bucket with public access
  - Database schema: Update popup_image_content table with default_display_duration and hold_to_freeze_enabled fields
- File update locations for total body background image upload:
  - Backend API file: Create/update total body background upload endpoint (e.g., /api/total-background/upload)
  - Admin Dashboard component: Add total body background image upload interface in Total Body Background Management section
  - Public Body component: Fetch and display total body background image with responsive scaling
  - Supabase Storage configuration: Create total_backgrounds bucket with public access
- File update locations for gallery image upload:
  - Backend API file: Create/update gallery upload endpoint (e.g., /api/gallery/upload)
  - Admin Dashboard component: Add image upload interface in Gallery Management section with frame color and animation configuration
  - Public Gallery component: Fetch and display images from gallery_images table with increased frame width and animated frame color effects
  - Supabase Storage configuration: Create gallery bucket with public access
- File update locations for FUSION 2k26 background image upload:
  - Backend API file: Create/update background upload endpoint (e.g., /api/header/background)
  - Admin Dashboard component: Add background image upload interface in Primary Header Management section
  - Public Header component: Fetch and display background image with responsive scaling
  - Supabase Storage configuration: Create backgrounds bucket with public access
- File update locations for event poster image upload:
  - Backend API file: Create/update event poster upload endpoint (e.g., /api/event-posters/upload)
  - Admin Dashboard component: Add poster image upload interface in Event Poster Management section with add/delete functionality and hold-to-freeze configuration
  - Public Event Poster Section component: Fetch and display posters with automatic scrolling animation and hold-to-freeze functionality
  - Supabase Storage configuration: Create event_posters bucket with public access
  - Database schema: Update event_posters table with proper image URL storage, animation_duration, and hold_to_freeze_enabled fields
- File update locations for staff/student photo upload:
  - Backend API file: Create/update staff/student photo upload endpoint (e.g., /api/coordinators/photo)
  - Admin Dashboard component: Add photo upload interface in Event Management sections
  - Public Event Detail Page components: Fetch and display staff/student photos
  - Supabase Storage configuration: Create coordinator_photos bucket with public access
- File update locations for committee image and staff/student photo upload:
  - Backend API file: Create/update committee image upload endpoint (e.g., /api/committees/image)
  - Admin Dashboard component: Add image upload interface in Committee Management section
  - Public Committee Section component: Fetch and display committee images and staff/student photos
  - Supabase Storage configuration: Create committees bucket with public access
- File update locations for mobile logo scrolling image upload (homepage only):
  - Backend API file: Create/update mobile logo upload endpoint (e.g., /api/mobile-logos/upload)
  - Admin Dashboard component: Add logo upload interface in Mobile Logo Scrolling Management section with add/delete functionality, glow effect configuration, and transparent background configuration
  - Public Mobile Logo Scrolling Section component: Fetch and display logos with automatic left-to-right scrolling animation, glow effect, and transparent background on mobile homepage only
  - Supabase Storage configuration: Create mobile_logos bucket with public access
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

### 4.8 Staff/Student Photo Display Implementation
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

### 4.9 Mobile Logo Scrolling Implementation (Homepage Only)
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

### 4.11 Gallery Frame Color Animation Implementation
- Gallery frame color animation functionality:
  - Implement animated frame color effects with colors: Gold, Blue, Sky Blue, Purple, Pink
  - Implement diagonal glow animation moving from left-top corner to right-bottom corner
  - Implement wave form color transitions across all frame colors
  - Automatic glow animation applied to all frames
  - Smooth color transitions creating dynamic visual effect
  - Admin can configure frame colors and animation settings
  - Responsive frame color animation across all screen sizes
- File update locations for gallery frame color animation:
  - Admin Dashboard Gallery Management component: Add frame color configuration interface and diagonal glow animation configuration
  - Public Gallery Section component: Apply configured frame colors and animated glow effects to images
  - CSS/Animation file: Add frame color styles, diagonal glow animation keyframes, and wave form color transition styles
  - Backend API: Store frame color configuration and animation settings in gallery_images table or separate configuration table

### 4.12 Splash Screen Implementation
- Splash screen functionality:
  - Display splash screen image on initial application load
  - 2-second display duration (fixed)
  - Automatic transition to main application after 2 seconds
  - Smooth fade-in and fade-out animations
  - Responsive image scaling across all screen sizes
  - Admin can upload and configure splash screen image
  - Admin can enable/disable splash screen functionality
- File update locations for splash screen:
  - Public Splash Screen component: Create new component for splash screen display
  - Main App component: Add splash screen logic to initial load sequence
  - Admin Dashboard Splash Screen Management component: Add splash screen configuration interface
  - CSS/Animation file: Add fade-in and fade-out animation styles
  - Backend API: Create endpoints for splash screen management (upload, retrieve, update settings)

### 4.13 Pop-up Image Implementation
- Pop-up image functionality:
  - Display pop-up image on initial page load after splash screen
  - Pop-up image overlays main content
  - Responsive image scaling across all screen sizes
  - Configurable default display duration set by admin
  - Interactive hold-to-freeze functionality:
    - When user holds/touches image: Timer freezes, image remains visible
    - When user releases image: Image disappears immediately
  - If user does not interact: Image disappears after admin-configured default duration
  - Smooth fade-out animation for dismissal
  - Pop-up does not reappear during same session after dismissal
  - Admin can upload and configure pop-up image with database storage
  - Admin can add/delete pop-up images
  - Admin can enable/disable pop-up image functionality
  - Admin can configure default display duration
- File update locations for pop-up image:
  - Public Pop-up Image component: Create new component for pop-up image display with hold-to-freeze functionality and database image retrieval
  - Main App component: Add pop-up image logic to initial load sequence
  - Admin Dashboard Pop-up Image Management component: Add pop-up image configuration interface with display duration settings and add/delete functionality
  - CSS/Animation file: Add fade-out animation styles and overlay styles
  - Backend API: Create endpoints for pop-up image management (upload, retrieve, update settings, add/delete images) with proper image URL storage
  - Database schema: Update popup_image_content table with default_display_duration and hold_to_freeze_enabled fields

### 4.14 Total Body Background Implementation
- Total body background functionality:
  - Display background image across entire application body
  - Responsive image scaling across all screen sizes
  - Configurable background positioning
  - Configurable fixed/scroll behavior
  - Admin can upload and configure total body background image
- File update locations for total body background:
  - Public Body component: Apply total body background image with responsive scaling
  - Admin Dashboard Total Body Background Management component: Add background configuration interface
  - CSS file: Add total body background styles with responsive scaling
  - Backend API: Create endpoints for total body background management (upload, retrieve, update settings)

### 4.15 Chatbot Authentication Enhancement
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

### 4.16 Code Quality
- Clean, modular, scalable codebase
- Maintainable UI component structure
- Optimized for production deployment
- Support for multiple web pages architecture
- Efficient real-time update mechanism
- Secure connection credentials handling
- Responsive design implementation using CSS media queries and flexible layouts
- Responsive image scaling implementation for splash screen, pop-up image, total body background, and FUSION 2k26 background images
- Rich text editor integration with proper sanitization and text color/bold formatting support for description, rules, and instructions
- Modal/detail view component with proper state management
- Automatic scrolling animation implementation for event posters with hold-to-freeze functionality
- Text animation implementation for FUSION 2k26 text
- Photo display implementation with shape configuration and lazy loading
- Mobile logo scrolling implementation (homepage only) with semi-square shape, 20px height, glow effect, and transparent background
- Committee card purple glow effect implementation
- Gallery frame color animation implementation with diagonal glow and wave form color transitions
- Splash screen implementation with 2-second duration and automatic transition
- Pop-up image implementation with configurable display duration, hold-to-freeze functionality, and database storage
- Total body background implementation with responsive scaling
- Enhanced chatbot authentication with automatic passkey recognition
- Proper database integration for pop-up images, event posters, and mobile logos with image URL storage and retrieval
- Image recognition implementation ensuring all admin-uploaded images display correctly to users

## 5. User Flow

### 5.1 Public User Flow
1. User opens application and sees splash screen for 2 seconds
2. Splash screen automatically transitions to main application
3. Pop-up image displays automatically on initial page load with configurable display duration
4. User can interact with pop-up image:
   - Hold/touch image: Timer freezes, image remains visible
   - Release image: Image disappears immediately
   - No interaction: Image disappears after admin-configured default duration
5. User lands on cinematic homepage with total body background image and dual header system:
   - Total body background image automatically scales to fit screen size
   - Primary header displaying navigation menu at top-right corner (Home, Events, Committee, Gallery, About Us, Contact Us) with FUSION 2k26 background image that automatically scales to fit screen size
   - FUSION 2k26 text with responsive sizing and animated effects
   - Secondary header positioned below primary header displaying ADITYA College of Engineering Madanapalle (golden color with black border and glowing background, responsive font sizing), MADANAPALLE (responsive font 12/14), UGC - Autonomous Institution (responsive font 12/14), and college logos with configured shapes (circle/semi-square) that automatically adjust size based on screen size with minimum two logos visible on mobile (left-right positioning)
   - Mobile logo scrolling section (mobile view only, homepage only) displaying semi-square logos (20px height) with automatic left-to-right scrolling animation, glow effect around logos, and transparent background
6. User navigates through multiple web pages using top-right navigation menu
7. User experiences consistent responsive design across all screen sizes with automatic font and logo adjustments, responsive total body background image scaling, responsive FUSION 2k26 background image scaling, and animated FUSION 2k26 text
8. User views Gallery Section with animated frame color effects (Gold, Blue, Sky Blue, Purple, Pink) featuring diagonal glow animation moving from left-top to right-bottom corner in wave form across all frames
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
23. User experiences optimal viewing on mobile devices with properly scaled logos (minimum two visible with left-right positioning), text with golden color, black border, and glowing background, responsive total body background image, responsive FUSION 2k26 background image, animated FUSION 2k26 text in secondary header, mobile logo scrolling section (homepage only) with semi-square logos (20px height), automatic left-to-right scrolling animation, glow effect around logos, and transparent background

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
   - Splash Screen: Upload splash screen image, configure display duration, enable/disable functionality, configure responsive scaling
   - Pop-up Image: Upload pop-up image with database storage, add/delete images, enable/disable functionality, configure responsive scaling, configure default display duration, preview hold-to-freeze functionality
   - Total Body Background: Upload total body background image, configure responsive scaling for different screen sizes, configure positioning, configure fixed/scroll behavior
   - Primary Header: Position navigation menu at top-right, configure styling, upload FUSION 2k26 background image, configure responsive scaling for background image across different screen sizes
   - FUSION 2k26 Text: Configure text content, font settings, responsive sizing, alignment, animation settings
   - Secondary Header: Update college name (ADITYA College of Engineering Madanapalle), location (MADANAPALLE), institution status (UGC - Autonomous Institution), configure golden color styling with black border and glowing background, upload logos, configure logo shapes (circle/semi-square), configure responsive sizing for logos and text across different screen sizes with minimum two logos visible on mobile (left-right positioning), manage positioning, update static data
   - Mobile Logo Scrolling (homepage only): Add/remove logos with database storage, configure logo display order, configure scrolling animation settings (semi-square shape, 20px height, left-to-right animation), configure glow effect settings, configure transparent background
   - Responsive Configuration: Set breakpoints, configure font size mappings for different screen sizes, configure logo size mappings for desktop/tablet/mobile views with mobile left-right positioning, configure background image scaling behavior, configure text alignment mappings
   - Text Styling: Adjust font, size, color
   - Background: Change color or upload background image (admin-controlled) with responsive scaling configuration
   - Body Content: Add text boxes anywhere with drag-and-drop, edit positioning and content
   - Footer: Edit structure, update contact details, customize styling
   - Event Posters: Upload event poster images with database storage, add/delete posters, configure automatic scrolling animation settings, configure animation duration, configure hold-to-freeze functionality, rearrange poster display order
   - Events: Add event details including rules with rich text formatting, instructions with rich text formatting, multiple images, event-specific staff coordinator details (name, role, photo with shape configuration), event-specific student coordinator details (name, contact number, photo with shape configuration), Google Form link; Use rich text editor for event description, rules, and instructions with text justification, list formatting options (bullet and numbered), text color picker, and bold text button; Edit event-specific coordinator details directly within Events Section; Configure photo display enable/disable option per event
   - Committees: Add committees with name, description, image (optional), role details, staff details (name, role, photo with shape configuration, contact), student details (name, role, photo with shape configuration, contact); Edit committee information; Configure photo display enable/disable option per committee; Configure purple glow effect settings
   - Gallery: Upload images through Gallery Management interface, images stored in Supabase Storage and displayed in public Gallery Section; Configure image frame width (increased by 1-2px for enhanced visual presentation); Configure frame colors (Gold, Blue, Sky Blue, Purple, Pink); Configure diagonal glow animation (left-top to right-bottom); Configure wave form color transitions
   - About Us, Contact management
   - Chatbot information content management (excluding admin passkey information)
10. Admin arranges homepage layout and dual header sections as desired
11. Admin uploads and configures splash screen image with responsive scaling settings
12. Admin uploads and configures pop-up image with responsive scaling settings, display duration configuration, and hold-to-freeze functionality
13. Admin uploads and configures total body background image with responsive scaling settings for different devices
14. Admin uploads and configures FUSION 2k26 background image with responsive scaling settings for different devices
15. Admin configures FUSION 2k26 text with responsive sizing and animation settings
16. Admin configures responsive behavior for secondary header including logo sizing (minimum two visible on mobile with left-right positioning) and text scaling with golden color, black border, and glowing background for different devices
17. Admin configures mobile logo scrolling section (homepage only) with logo upload, order settings, animation configuration (semi-square shape, 20px height, left-to-right animation), glow effect configuration, and transparent background configuration
18. Admin uploads event poster images, configures automatic scrolling animation, configures animation duration, and configures hold-to-freeze functionality
19. Admin configures gallery frame colors and diagonal glow animation with wave form color transitions
20. Admin edits entire application including splash screen, pop-up image with display duration settings, total body background, primary header with FUSION 2k26 background image, FUSION 2k26 text with animations, secondary header with responsive configurations and glowing background, mobile logo scrolling section (homepage only) with glow effect and transparent background, event poster section with scrolling animation and hold-to-freeze functionality, footer, body sections, event-specific coordinator details with photo management and role field, committee information including name, description, image, role details, and staff/student details with photo management and role field, event descriptions, rules, and instructions with rich text formatting including justified text, list formatting (bullet and numbered), text color customization, and bold text formatting for all events, gallery frame color animation with diagonal glow and wave form color transitions, and committee card purple glow effect settings
21. Admin can change passkey through Passkey Management
22. All changes save to Supabase automatically and reflect immediately across all web pages on public UI and live preview with proper responsive behavior including splash screen display, pop-up image display with configurable duration and hold-to-freeze functionality, total body background image scaling, FUSION 2k26 background image scaling, text animations, poster scrolling with hold-to-freeze functionality, photo display, mobile logo scrolling (homepage only) with glow effect and transparent background, committee card purple glow effect, gallery frame color animation with diagonal glow and wave form color transitions, and event content formatting with justified text, lists (bullet and numbered), text colors, and bold formatting
23. Admin can access and edit multiple web pages with consistent editing interface

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
2. Test pop-up image display on initial page load with configurable display duration and hold-to-freeze functionality
3. Test total body background image display and responsive scaling across different screen sizes
4. Test public user interface with dual header system
5. Test FUSION 2k26 background image display and responsive scaling across different screen sizes
6. Test FUSION 2k26 text display with responsive sizing and animations
7. Test responsive behavior of secondary header across different screen sizes with golden color, black border, and glowing background
8. Verify logo sizing adjustments on mobile, tablet, and desktop views with minimum two logos visible on mobile (left-right positioning)
9. Verify text scaling for college name, location, and institution status across devices
10. Test mobile logo scrolling section (homepage only) with semi-square logos (20px height), automatic left-to-right scrolling animation, glow effect around logos, and transparent background on mobile devices
11. Verify mobile logo scrolling section does not display on desktop or tablet views
12. Verify mobile logo scrolling section displays only on homepage, not on other pages
13. Test gallery section display with animated frame color effects (Gold, Blue, Sky Blue, Purple, Pink) featuring diagonal glow animation and wave form color transitions
14. Test event poster section display positioned after Gallery and before About Us with automatic scrolling animation and hold-to-freeze functionality
15. Test chatbot functionality (verify no admin access option or passkey information displayed)
16. Test admin authentication with automatic passkey recognition
17. Test admin dashboard functionality
18. Test database connection
19. Verify live preview updates
20. Test gallery image upload and display with increased frame width (1-2px more) and animated frame color effects
21. Test splash screen image upload and responsive scaling configuration
22. Test pop-up image upload, add/delete functionality, responsive scaling configuration, and display duration configuration
23. Test pop-up image hold-to-freeze functionality
24. Test total body background image upload and responsive scaling configuration
25. Test FUSION 2k26 background image upload and responsive scaling configuration
26. Test FUSION 2k26 text configuration with responsive sizing and animation settings
27. Test event poster image upload, add/delete functionality, scrolling animation configuration, animation duration configuration, and hold-to-freeze functionality configuration
28. Test primary and secondary header management including responsive configurations with glowing background
29. Test mobile logo scrolling management (homepage only) with logo upload, add/delete functionality, order configuration, animation settings, glow effect configuration, and transparent background configuration
30. Test event-specific coordinator details display and photo management
31. Test event-specific coordinator editing within Events Section with photo upload, shape configuration, and role field
32. Test committee management with name, description, image, role details, and staff/student details including role field
33. Test committee card click functionality and detail view opening
34. Test committee card purple glow effect on click
35. Test committee detail view display with complete committee information including role details and staff/student details with role field
36. Test committee detail view close/back functionality
37. Test event description rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
38. Test event rules rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
39. Test event instructions rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
40. Test event description, rules, and instructions display with formatted content including text colors, bold formatting, and list formatting (bullet and numbered) for all events
41. Test gallery frame color animation configuration with diagonal glow and wave form color transitions
42. Verify proper image recognition and display for pop-up images, event posters, and mobile logos

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
3. Test pop-up image display on initial page load with configurable display duration and hold-to-freeze functionality on actual devices
4. Test total body background image display and responsive scaling on actual devices
5. Test all public user features including dual header system
6. Test FUSION 2k26 background image display and responsive scaling on actual devices
7. Test FUSION 2k26 text display with responsive sizing and animations on actual devices
8. Test responsive behavior of secondary header on actual mobile devices with golden color, black border, and glowing background
9. Verify logo and text scaling across different screen sizes with minimum two logos visible on mobile (left-right positioning)
10. Test mobile logo scrolling section (homepage only) on actual mobile devices with semi-square logos (20px height), automatic left-to-right scrolling animation, glow effect around logos, and transparent background
11. Verify mobile logo scrolling section does not display on desktop or tablet devices
12. Verify mobile logo scrolling section displays only on homepage, not on other pages
13. Test gallery section display with animated frame color effects (Gold, Blue, Sky Blue, Purple, Pink) featuring diagonal glow animation and wave form color transitions on actual devices
14. Test event poster section display positioned after Gallery and before About Us with automatic scrolling animation and hold-to-freeze functionality on actual devices
15. Test chatbot functionality (verify no admin access option or passkey information displayed)
16. Test admin authentication with automatic passkey recognition
17. Test admin dashboard
18. Verify database connectivity
19. Test live preview functionality
20. Verify image uploads to Supabase Storage
21. Test gallery image display on public UI with increased frame width (1-2px more) and animated frame color effects
22. Test splash screen image upload and responsive scaling configuration
23. Test pop-up image upload, add/delete functionality, responsive scaling configuration, and display duration configuration
24. Test pop-up image hold-to-freeze functionality on actual devices
25. Test total body background image upload and responsive scaling configuration
26. Test FUSION 2k26 background image upload and responsive scaling configuration
27. Test FUSION 2k26 text configuration with responsive sizing and animation settings
28. Test event poster image upload, add/delete functionality, scrolling animation configuration, animation duration configuration, and hold-to-freeze functionality configuration
29. Test primary and secondary header display and management with responsive configurations and glowing background
30. Test mobile logo scrolling management (homepage only) with logo upload, add/delete functionality, order configuration, animation settings, glow effect configuration, and transparent background configuration
31. Test event-specific coordinator details display and photo management functionality
32. Test event-specific coordinator editing within Events Section with photo upload, shape configuration, and role field
33. Test committee management with name, description, image, role details, and staff/student details functionality including role field
34. Test committee card click functionality and detail view opening on actual devices
35. Test committee card purple glow effect on click on actual devices
36. Test committee detail view responsiveness across different screen sizes
37. Test committee detail view close/back functionality
38. Test event description rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
39. Test event rules rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
40. Test event instructions rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
41. Test event description, rules, and instructions display with justified and listified formatting including text colors, bold formatting, and list formatting (bullet and numbered) for all events
42. Test gallery frame color animation with diagonal glow and wave form color transitions on actual devices
43. Verify proper image recognition and display for pop-up images, event posters, and mobile logos on actual devices

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
6. Add pop-up image management endpoint with add/delete functionality and display duration configuration
7. Add total body background management endpoint
8. Add gallery image upload endpoint with frame color and animation configuration
9. Add FUSION 2k26 background image upload endpoint
10. Add FUSION 2k26 text management endpoint
11. Add event poster image upload endpoint with add/delete functionality, animation duration configuration, and hold-to-freeze functionality configuration
12. Add primary and secondary header management endpoints
13. Add responsive configuration management endpoints
14. Add mobile logo scrolling management endpoints (homepage only) with add/delete functionality, glow effect configuration, and transparent background configuration
15. Add event-specific coordinator management endpoints with photo upload and role field within Events Section
16. Add committee management endpoints with image and staff/student photo upload including role field and purple glow effect settings
17. Add committee detail retrieval endpoint
18. Add event description, rules, and instructions formatting endpoints with text color, bold formatting, and list formatting (bullet and numbered)
19. Add gallery frame color and animation configuration endpoints
20. Update chatbot endpoints to remove admin passkey information display
21. Add proper image URL storage and retrieval endpoints for pop-up images, event posters, and mobile logos

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
7. Test pop-up image display, add/delete functionality, display duration configuration, and hold-to-freeze functionality
8. Test total body background image upload and responsive scaling
9. Test gallery image upload and display with increased frame width and animated frame color effects
10. Test FUSION 2k26 background image upload and responsive scaling
11. Test FUSION 2k26 text configuration with responsive sizing and animations
12. Test event poster image upload, add/delete functionality, scrolling animation, animation duration configuration, and hold-to-freeze functionality
13. Test dual header system management
14. Test responsive configuration management for secondary header with glowing background
15. Test mobile logo scrolling management (homepage only) with logo upload, add/delete functionality, order configuration, animation settings, glow effect configuration, and transparent background configuration
16. Test event-specific coordinator management and photo upload with shape configuration and role field within Events Section
17. Test committee management with name, description, image, role details, and staff/student photo upload including role field and purple glow effect settings
18. Test committee card click and detail view functionality with purple glow effect
19. Test event description, rules, and instructions rich text editor with text color, bold formatting, and list formatting (bullet and numbered)
20. Test gallery frame color animation configuration with diagonal glow and wave form color transitions
21. Test chatbot functionality (verify no admin access option or passkey information displayed)
22. Test admin authentication with automatic passkey recognition
23. Verify proper image recognition and display for pop-up images, event posters, and mobile logos

#### Step 5: Deploy Migrated Version
1. Commit changes to version control
2. Follow MeDo deployment steps (Section 6.2)
3. Verify deployed application

### 6.5 Splash Screen Implementation Guide

#### Backend Implementation
1. Create splash screen management API endpoints:
   - POST /api/splash-screen - Create splash screen configuration
   - GET /api/splash-screen - Retrieve splash screen configuration
   - PUT /api/splash-screen/:id - Update splash screen configuration including image URL, display duration, enabled status, responsive scaling settings
   - POST /api/splash-screen/upload - Upload splash screen image

#### Frontend Implementation
1. Create Splash Screen component:
   - File location: frontend/components/public/SplashScreen.jsx or similar
   - Implementation:
     - Fetch splash screen configuration from /api/splash-screen endpoint
     - Display splash screen image for 2 seconds on initial load
     - Apply responsive scaling using CSS media queries
     - Implement fade-in animation on appearance
     - Implement fade-out animation on disappearance
     - Automatically transition to main application after 2 seconds
     - No user interaction required

2. Update Main App component:
   - File location: frontend/App.jsx or similar
   - Implementation:
     - Add splash screen display logic to initial load sequence
     - Show splash screen first, then main application
     - Ensure smooth transition between splash screen and main application

3. Admin Dashboard Splash Screen Management component:
   - File location: frontend/components/admin/SplashScreenManagement.jsx or similar
   - Add splash screen configuration interface:
     - Image upload interface
     - Display duration configuration (default: 2 seconds)
     - Enable/disable splash screen toggle
     - Responsive scaling configuration for desktop/tablet/mobile
     - Preview panel showing splash screen appearance

#### CSS Implementation
1. Create splash screen styles:
   - File location: frontend/styles/splash-screen.css or similar
   - Implementation:
     - Define full-screen splash screen container
     - Define responsive image scaling using media queries
     - Create fade-in animation keyframes
     - Create fade-out animation keyframes
     - Ensure proper z-index for splash screen overlay

#### Supabase Storage Configuration
1. Create splash_screens storage bucket:
   - Bucket name: splash_screens
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for splash screen:
1. Backend API routes file (e.g., backend/routes/splash-screen.js)
2. Public Splash Screen component (e.g., frontend/components/public/SplashScreen.jsx)
3. Main App component (e.g., frontend/App.jsx)
4. Admin Dashboard Splash Screen Management component (e.g., frontend/components/admin/SplashScreenManagement.jsx)
5. Splash screen styles file (e.g., frontend/styles/splash-screen.css)
6. Supabase client configuration file (e.g., backend/config/supabase.js)
7. Database schema file for splash_screen_content table

### 6.6 Pop-up Image Implementation Guide

#### Backend Implementation
1. Create pop-up image management API endpoints:
   - POST /api/popup-image - Create pop-up image configuration
   - GET /api/popup-image - Retrieve pop-up image configuration
   - PUT /api/popup-image/:id - Update pop-up image configuration including image URL, enabled status, responsive scaling settings, default display duration, hold-to-freeze functionality
   - POST /api/popup-image/upload - Upload pop-up image with database storage
   - DELETE /api/popup-image/:id - Delete pop-up image from database

#### Frontend Implementation
1. Create Pop-up Image component:
   - File location: frontend/components/public/PopupImage.jsx or similar
   - Implementation:
     - Fetch pop-up image configuration from /api/popup-image endpoint
     - Display pop-up image on initial page load after splash screen
     - Apply responsive scaling using CSS media queries
     - Implement configurable display duration based on admin settings
     - Implement hold-to-freeze functionality:
       - Detect user touch/hold on image
       - Freeze timer when user holds image
       - Resume timer and dismiss image when user releases
     - If no user interaction: Dismiss after admin-configured default duration
     - Implement fade-out animation on dismissal
     - Track dismissal state to prevent reappearance during same session
     - Retrieve image URLs from database for display

2. Update Main App component:
   - File location: frontend/App.jsx or similar
   - Implementation:
     - Add pop-up image display logic to initial load sequence
     - Show pop-up image after splash screen
     - Manage pop-up dismissal state

3. Admin Dashboard Pop-up Image Management component:
   - File location: frontend/components/admin/PopupImageManagement.jsx or similar
   - Add pop-up image configuration interface:
     - Image upload interface with add/delete functionality
     - Enable/disable pop-up image toggle
     - Responsive scaling configuration for desktop/tablet/mobile
     - Default display duration configuration (in seconds)
     - Hold-to-freeze functionality toggle
     - Preview panel showing pop-up image appearance and interaction behavior

#### CSS Implementation
1. Create pop-up image styles:
   - File location: frontend/styles/popup-image.css or similar
   - Implementation:
     - Define pop-up overlay container
     - Define responsive image scaling using media queries
     - Create fade-out animation keyframes
     - Ensure proper z-index for pop-up overlay
     - Center pop-up image on screen
     - Add touch/hold interaction styles

#### Supabase Storage Configuration
1. Create popup_images storage bucket:
   - Bucket name: popup_images
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for pop-up image:
1. Backend API routes file (e.g., backend/routes/popup-image.js) with add/delete endpoints and proper image URL storage
2. Public Pop-up Image component (e.g., frontend/components/public/PopupImage.jsx) with hold-to-freeze functionality and database image retrieval
3. Main App component (e.g., frontend/App.jsx)
4. Admin Dashboard Pop-up Image Management component (e.g., frontend/components/admin/PopupImageManagement.jsx) with display duration configuration and add/delete functionality
5. Pop-up image styles file (e.g., frontend/styles/popup-image.css)
6. Supabase client configuration file (e.g., backend/config/supabase.js)
7. Database schema file for popup_image_content table with default_display_duration and hold_to_freeze_enabled fields

### 6.7 Total Body Background Implementation Guide

#### Backend Implementation
1. Create total body background management API endpoints:
   - POST /api/total-background - Create total body background configuration
   - GET /api/total-background - Retrieve total body background configuration
   - PUT /api/total-background/:id - Update total body background configuration including image URL, responsive scaling settings, positioning settings
   - POST /api/total-background/upload - Upload total body background image

#### Frontend Implementation
1. Update Body component:
   - File location: frontend/components/public/Body.jsx or similar
   - Implementation:
     - Fetch total body background configuration from /api/total-background endpoint
     - Apply background image to entire application body
     - Implement responsive scaling using CSS media queries
     - Apply configurable positioning
     - Apply configurable fixed/scroll behavior

2. Admin Dashboard Total Body Background Management component:
   - File location: frontend/components/admin/TotalBodyBackgroundManagement.jsx or similar
   - Add background configuration interface:
     - Image upload interface
     - Responsive scaling configuration for desktop/tablet/mobile
     - Background positioning controls
     - Fixed/scroll behavior toggle
     - Preview panel showing background appearance

#### CSS Implementation
1. Create total body background styles:
   - File location: frontend/styles/total-body-background.css or similar
   - Implementation:
     - Define body background styles
     - Define responsive image scaling using media queries
     - Create background positioning classes
     - Implement fixed/scroll behavior
     - Ensure background covers entire application body

#### Supabase Storage Configuration
1. Create total_backgrounds storage bucket:
   - Bucket name: total_backgrounds
   - Public access: enabled
   - File size limit: configure as needed

2. Set bucket policies:
   - Allow public read access
   - Restrict write access to authenticated admin users

#### Code Update Summary
Files requiring updates for total body background:
1. Backend API routes file (e.g., backend/routes/total-background.js)
2. Public Body component (e.g., frontend/components/public/Body.jsx)
3. Admin Dashboard Total Body Background Management component (e.g., frontend/components/admin/TotalBodyBackgroundManagement.jsx)
4. Total body background styles file (e.g., frontend/styles/total-body-background.css)
5. Supabase client configuration file (e.g., backend/config/supabase.js)
6. Database schema file for total_body_background_content table

### 6.8 Chatbot Authentication Enhancement Guide

#### Backend Implementation
1. Update authentication API endpoints:
   - POST /api/auth/validate-passkey - Validate passkey and automatically open admin dashboard
   - Remove explicit admin access endpoints

2. Implement automatic passkey recognition logic:
   - Detect passkey format in chatbot input
   - Automatically validate passkey against database
   - Return authentication token on successful validation
   - No explicit admin mode selection required

#### Frontend Implementation
1. Update Chatbot component:
   - File location: frontend/components/public/Chatbot.jsx or similar
   - Implementation:
     - Remove admin access option from chatbot interface
     - Remove admin passkey information display
     - Implement automatic passkey recognition in input handler
     - Automatically call authentication API when passkey detected
     - Automatically open admin dashboard on successful authentication
     - No explicit admin mode selection UI

2. Update Admin Dashboard component:
   - File location: frontend/components/admin/AdminDashboard.jsx or similar
   - Implementation:
     - Update authentication flow to support automatic passkey recognition
     - Remove explicit admin access button or option
     - Seamless authentication experience

#### Code Update Summary
Files requiring updates for chatbot authentication enhancement:
1. Backend authentication API routes file (e.g., backend/routes/auth.js)
2. Chatbot component (e.g., frontend/components/public/Chatbot.jsx)
3. Admin Dashboard component (e.g., frontend/components/admin/AdminDashboard.jsx)
4. Authentication logic file (e.g., backend/middleware/auth.js)

### 6.9 Event Poster Hold-to-Freeze Implementation Guide

#### Backend Implementation
1. Update event poster management API endpoints:
   - PUT /api/event-posters/:id - Update event poster configuration including animation_duration and hold_to_freeze_enabled fields

#### Frontend Implementation
1. Update Event Poster Section component:
   - File location: frontend/components/public/EventPosterSection.jsx or similar
   - Implementation:
     - Implement hold-to-freeze functionality:
       - Detect user touch/hold on poster
       - Freeze scrolling animation when user holds poster
       - Display poster as pop-up overlay
       - Resume animation when user releases poster
     - Implement configurable animation duration based on admin settings
     - Apply smooth transitions for pop-up display and dismissal

2. Admin Dashboard Event Poster Management component:
   - File location: frontend/components/admin/EventPosterManagement.jsx or similar
   - Add hold-to-freeze configuration interface:
     - Animation duration configuration (in seconds)
     - Hold-to-freeze functionality toggle
     - Preview panel showing hold-to-freeze behavior

#### CSS Implementation
1. Update event poster styles:
   - File location: frontend/styles/event-poster.css or similar
   - Implementation:
     - Add pop-up overlay styles for poster display
     - Add touch/hold interaction styles
     - Ensure proper z-index for pop-up overlay

#### Code Update Summary
Files requiring updates for event poster hold-to-freeze:
1. Backend API routes file (e.g., backend/routes/event-posters.js)
2. Public Event Poster Section component (e.g., frontend/components/public/EventPosterSection.jsx)
3. Admin Dashboard Event Poster Management component (e.g., frontend/components/admin/EventPosterManagement.jsx)
4. Event poster styles file (e.g., frontend/styles/event-poster.css)
5. Database schema file for event_posters table with animation_duration and hold_to_freeze_enabled fields

### 6.10 Gallery Frame Color Animation Implementation Guide

#### Backend Implementation
1. Update gallery management API endpoints:
   - PUT /api/gallery/:id - Update gallery image configuration including frame_color_settings and diagonal_glow_animation_settings

#### Frontend Implementation
1. Update Gallery Section component:
   - File location: frontend/components/public/GallerySection.jsx or similar
   - Implementation:
     - Apply frame colors: Gold, Blue, Sky Blue, Purple, Pink
     - Implement diagonal glow animation moving from left-top to right-bottom corner
     - Implement wave form color transitions across all frame colors
     - Apply automatic glow animation to all frames
     - Use CSS animations for smooth color transitions

2. Admin Dashboard Gallery Management component:
   - File location: frontend/components/admin/GalleryManagement.jsx or similar
   - Add frame color animation configuration interface:
     - Frame color selection (Gold, Blue, Sky Blue, Purple, Pink)
     - Diagonal glow animation toggle
     - Wave form color transition toggle
     - Animation speed configuration
     - Preview panel showing animated frame effects

#### CSS Implementation
1. Update gallery styles:
   - File location: frontend/styles/gallery.css or similar
   - Implementation:
     - Define frame color classes for Gold, Blue, Sky Blue, Purple, Pink
     - Create diagonal glow animation keyframes (left-top to right-bottom)
     - Create wave form color transition keyframes
     - Apply animations to all gallery frames
     - Ensure smooth color transitions

#### Code Update Summary
Files requiring updates for gallery frame color animation:
1. Backend API routes file (e.g., backend/routes/gallery.js)
2. Public Gallery Section component (e.g., frontend/components/public/GallerySection.jsx)
3. Admin Dashboard Gallery Management component (e.g., frontend/components/admin/GalleryManagement.jsx)
4. Gallery styles file (e.g., frontend/styles/gallery.css)
5. Database schema file for gallery_images table with frame_color_settings and diagonal_glow_animation_settings fields

### 6.11 Mobile Logo Scrolling Glow Effect Implementation Guide

#### Backend Implementation
1. Update mobile logo scrolling management API endpoints:
   - PUT /api/mobile-logos/:id - Update mobile logo configuration including glow_effect_settings and transparent_background_enabled fields

#### Frontend Implementation
1. Update Mobile Logo Scrolling Section component:
   - File location: frontend/components/public/MobileLogoScrollingSection.jsx or similar
   - Implementation:
     - Apply glow effect around each logo
     - Apply transparent background to mobile logo section
     - Implement configurable glow color and intensity based on admin settings
     - Use CSS box-shadow or similar for glow effect

2. Admin Dashboard Mobile Logo Scrolling Management component:
   - File location: frontend/components/admin/MobileLogoScrollingManagement.jsx or similar
   - Add glow effect configuration interface:
     - Glow color picker
     - Glow intensity slider
     - Transparent background toggle
     - Preview panel showing glow effect and transparent background

#### CSS Implementation
1. Update mobile logo scrolling styles:
   - File location: frontend/styles/mobile-logo-scrolling.css or similar
   - Implementation:
     - Define glow effect styles using box-shadow
     - Define transparent background styles
     - Apply glow effect to all mobile logos
     - Ensure glow effect is visible on transparent background

#### Code Update Summary
Files requiring updates for mobile logo scrolling glow effect:
1. Backend API routes file (e.g., backend/routes/mobile-logos.js)
2. Public Mobile Logo Scrolling Section component (e.g., frontend/components/public/MobileLogoScrollingSection.jsx)
3. Admin Dashboard Mobile Logo Scrolling Management component (e.g., frontend/components/admin/MobileLogoScrollingManagement.jsx)
4. Mobile logo scrolling styles file (e.g., frontend/styles/mobile-logo-scrolling.css)
5. Database schema file for mobile_logo_scrolling table with glow_effect_settings and transparent_background_enabled fields

### 6.12 Committee Management Update Guide

#### Backend Implementation
1. Update committee management API endpoints:
   - POST /api/committees - Create committee with name, description, image, role_details, staff_details, student_details
   - PUT /api/committees/:id - Update committee information including name, description, image, role_details, staff_details, student_details
   - DELETE /api/committees/:id - Delete committee

#### Frontend Implementation
1. Update Committee Management component:
   - File location: frontend/components/admin/CommitteeManagement.jsx or similar
   - Implementation:
     - Add committee name input field
     - Add committee description input field
     - Add committee image upload interface (optional)
     - Add role details input section
     - Add staff details input section:
       - Staff name input
       - Staff role input
       - Staff photo upload (optional)
       - Staff contact input (optional)
       - Photo shape configuration (round or semi-circle)
     - Add student details input section:
       - Student name input
       - Student role input
       - Student photo upload (optional)
       - Student contact input (optional)
       - Photo shape configuration (round or semi-circle)
     - Add photo display enable/disable toggle per committee

2. Update Committee Section component:
   - File location: frontend/components/public/CommitteeSection.jsx or similar
   - Implementation:
     - Display committee name on committee cards
     - Display committee description preview on committee cards
     - Display committee image on committee cards (if provided)

3. Update Committee Detail View component:
   - File location: frontend/components/public/CommitteeDetailView.jsx or similar
   - Implementation:
     - Display complete committee name
     - Display complete committee description
     - Display committee role details
     - Display staff details with photos (if enabled), role field, and contact
     - Display student details with photos (if enabled), role field, and contact

#### Code Update Summary
Files requiring updates for committee management:
1. Backend API routes file (e.g., backend/routes/committees.js)
2. Admin Dashboard Committee Management component (e.g., frontend/components/admin/CommitteeManagement.jsx)
3. Public Committee Section component (e.g., frontend/components/public/CommitteeSection.jsx)
4. Public Committee Detail View component (e.g., frontend/components/public/CommitteeDetailView.jsx)
5. Database schema file for committees table with committee_name, description, image, role_details, staff_details, student_details fields

## 7. Other Requirements

### 7.1 Supabase Table Schema
System will automatically create the following tables on first connection:
- splash_screen_content (id, image_url, display_duration, enabled, responsive_scaling_settings, animation_settings, created_at, updated_at)
- popup_image_content (id, image_url, enabled, responsive_scaling_settings, positioning_settings, default_display_duration, hold_to_freeze_enabled, created_at, updated_at)
- total_body_background_content (id, background_image_url, responsive_scaling_settings, positioning_settings, fixed_scroll_behavior, created_at, updated_at)
- primary_header_content (id, navigation_menu, navigation_position, styling, background_image_url, responsive_scaling_settings, created_at, updated_at)
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
- gallery_images (id, image_url, frame_width, frame_color_settings, diagonal_glow_animation_settings, wave_form_color_transition_settings, created_at, updated_at)
- about_us (id, content, created_at, updated_at)
- contact_info (id, details, created_at, updated_at)
- admin_config (id, passkey, created_at, updated_at)
- chatbot_info (id, content, created_at, updated_at)

### 7.2 Image Storage
- All uploaded images stored in Supabase Storage
- Separate storage buckets for:
  - Splash_screens (for splash screen images with responsive scaling support)
  - Popup_images (for pop-up images with responsive scaling support, display duration configuration, and hold-to-freeze functionality)
  - Total_backgrounds (for total body background images with responsive scaling support)
  - Backgrounds (including FUSION 2k26 header background images with responsive scaling support)
  - Logos (including secondary header logos with shape configurations, responsive sizing, and mobile left-right positioning)
  - Mobile_logos (for mobile logo scrolling section, homepage only, semi-square shape, 20px height, glow effect, transparent background)
  - Event posters (for Event Poster Section with automatic scrolling animation, hold-to-freeze functionality, and animation duration configuration)
  - Event images
  - Coordinator photos (for event-specific staff and student coordinators with round and semi-circle shape support)
  - Committee images and staff/student photos (for committee groups with round and semi-circle shape support)
  - Gallery images (for Gallery Section display with configurable frame width and animated frame color effects)
  - Background images
- Public access configured for image buckets
- Automatic URL generation for uploaded images
- Splash_screens bucket specifically configured for splash screen images with responsive scaling capabilities
- Popup_images bucket specifically configured for pop-up images with responsive scaling capabilities, display duration configuration, and hold-to-freeze functionality
- Total_backgrounds bucket specifically configured for total body background images with responsive scaling capabilities
- Gallery bucket specifically configured for admin-uploaded gallery images that display in public Gallery Section with increased frame width (1-2px more) and animated frame color effects (Gold, Blue, Sky Blue, Purple, Pink) with diagonal glow animation and wave form color transitions
- Backgrounds bucket specifically configured for FUSION 2k26 header background images with responsive scaling capabilities
- Event_posters bucket specifically configured for event poster images with automatic scrolling animation, hold-to-freeze functionality, and animation duration configuration
- Coordinator_photos bucket specifically configured for staff and student photos with round and semi-circle shape configurations
- Committees bucket specifically configured for committee images and staff/student photos with round and semi-circle shape configurations
- Mobile_logos bucket specifically configured for mobile logo scrolling section (homepage only) with semi-square shape, 20px height, glow effect, and transparent background
- Logo bucket supports circle and semi-square shape configurations with responsive sizing capabilities and mobile left-right positioning
- Proper image URL storage in database tables for pop-up images, event posters, and mobile logos
- Image recognition implementation ensuring all admin-uploaded images display correctly to users