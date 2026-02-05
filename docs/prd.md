# Fusion26 College Fest Web Application Requirements Document

## 1. Application Overview

### 1.1 Application Name
Fusion26

### 1.2 Application Description
A cinematic, immersive multi-page web application for a college fest that delivers a premium, dramatic, and visually powerful experience inspired by modern event websites like ashv2k.in. The platform features a public user interface for event browsing and registration, alongside a secure admin dashboard with real-time live preview functionality accessible via enhanced chatbot authentication for comprehensive content management. The application supports multiple web pages with flexible responsive design across all screen sizes, and provides admins with complete control over all sections including dual header system with FUSION 2k26 background image, footer, and body content with drag-and-drop text box placement capabilities. The system connects to Supabase cloud database with manual configuration support. The application includes a splash screen that displays for 2 seconds on initial load before automatically opening the main application.

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

### 2.2 Public User Interface

#### 2.2.1 Total Body Background Image
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

#### 2.2.2 Primary Header Section (Top Header)
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

#### 2.2.3 Secondary Header Section (Logo and College Information Header)
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

#### 2.2.4 Mobile Logo Scrolling Section (Homepage Only)
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

#### 2.2.5 FUSION 2k26 Text Section
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

#### 2.2.6 Homepage
- Cinematic hero section with parallax scrolling
- Smooth transitions and motion-based micro-interactions
- Dark theme with neon/gradient accents
- Bold modern typography
- Glow effects, animated cards, hover transitions
- Animated loading states
- Admin-configurable layout for header sections
- Admin-configurable FUSION 2k26 background image with responsive scaling
- Admin-configurable total body background image with responsive scaling
- Admin-configurable logo arrangement (add/delete logos with shape options)
- Admin-editable body content with flexible text box placement
- Mobile logo scrolling section (homepage only) with semi-square logos (20px height) and left-to-right animation

#### 2.2.7 Event Poster Section
- Positioned above Events Section on homepage
- Automatic horizontal scrolling animation (left to right)
- Display event poster images uploaded by admin
- Continuous loop animation for poster display
- Smooth transitions between posters
- Admin can upload multiple event poster images
- Admin can add, edit, or delete event posters
- Cinematic layout with smooth animations

#### 2.2.8 Events Section
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

#### 2.2.9 Event Type Coordinators Section
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

#### 2.2.10 Event Detail Page
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

#### 2.2.11 Committee Section
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

#### 2.2.12 Gallery Section
- Cinematic grid/masonry layout displaying uploaded images
- Image frame width increased by 1-2px for enhanced visual presentation
- Lazy loading implementation
- Smooth transitions between images
- Display images uploaded by admin through Gallery Management

#### 2.2.13 About Us Section
- Editable text content displaying fest information

#### 2.2.14 Contact Us Section
- Display contact details
- Contact form or contact information display

#### 2.2.15 Footer Section
- Display contact details
- Social media links (Instagram, LinkedIn, WhatsApp, Email)
- Admin-editable footer structure and content
- Improved layout with enhanced visual presentation

### 2.3 Enhanced Chatbot-Based Admin Authentication

#### 2.3.1 Chatbot Interface
- Floating chatbot fixed at bottom-right corner
- Enhanced chatbot functionality providing:
  - Website information and details
  - Interactive guidance and support
- Chatbot does not display admin access option or admin passkey information
- Admin authentication handled automatically through passkey recognition

#### 2.3.2 Chatbot Information Features
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

#### 2.3.3 Admin Authentication Flow
- Admin enters passkey directly in chatbot input field
- System automatically recognizes passkey format and validates against database
- No explicit admin access button or option required
- Correct passkey automatically opens Admin Dashboard without additional confirmation
- Seamless authentication experience without manual mode selection
- Enhanced chatbot provides contextual help during authentication process

### 2.4 Admin Dashboard

#### 2.4.1 Real-Time Live Preview
- Split-screen interface:
  - Left panel: Admin editing controls
  - Right panel: Live preview of public website
- All changes reflect instantly in live preview panel
- Preview updates automatically as admin edits content
- Preview shows exact appearance of public website across multiple web pages

#### 2.4.2 Splash Screen Management
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

#### 2.4.3 Total Body Background Management
- Upload total body background image
- Configure background image responsive scaling:
  - Desktop scaling settings
  - Tablet scaling settings
  - Mobile scaling settings
- Configure background image positioning for different screen sizes
- Configure background image fixed/scroll behavior
- Preview background image appearance across all screen sizes
- All changes update automatically in database and reflect in live preview

#### 2.4.4 Primary Header Management
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

#### 2.4.5 Secondary Header (Logo and College Information Header) Management
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

#### 2.4.6 Mobile Logo Scrolling Management (Homepage Only)
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

#### 2.4.7 FUSION 2k26 Text Management
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

#### 2.4.8 Body Content Management
- Add text boxes anywhere on the page with drag-and-drop functionality
- Position text boxes freely according to admin preference
- Edit text box content, styling, and positioning
- Delete text boxes as needed
- Rearrange body sections and components
- Customize body layout structure
- All changes update automatically in database and reflect in live preview

#### 2.4.9 Footer Management
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

#### 2.4.10 Homepage Layout Management
- Arrange primary header sections as desired
- Configure FUSION 2k26 background image with responsive scaling
- Configure total body background image with responsive scaling
- Configure FUSION 2k26 text with responsive sizing and animations
- Configure secondary logo and college information header layout
- Add or delete logos dynamically with shape configuration
- Configure mobile logo scrolling section (homepage only) with logo order settings
- Configure layout elements positioning
- Drag-and-drop interface for section reordering
- All customizations apply across multiple web pages

#### 2.4.11 Event Poster Management
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

#### 2.4.12 Event Management
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

#### 2.4.13 Event Type Coordinators Management
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

#### 2.4.14 Committee Management
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

#### 2.4.15 Gallery Management
- Upload multiple images to gallery
- Image upload interface with file selection
- Uploaded images stored in Supabase Storage
- Image URLs automatically generated and stored in gallery_images table
- Images appear in cinematic gallery layout on public UI Gallery Section
- Live preview shows gallery updates instantly
- Delete images from gallery
- Rearrange image display order
- Configure image frame width (increased by 1-2px for enhanced visual presentation)

#### 2.4.16 About Us Management
- Edit About Us section text content
- Updates reflect immediately on public UI and live preview

#### 2.4.17 Contact & Social Media Management
- Update contact details
- Update social media links (Instagram, LinkedIn, WhatsApp, Email)
- Changes reflect instantly on public UI and live preview

#### 2.4.18 Passkey Management
- Change passkey functionality with validation:
  - Enter old passkey
  - Enter new passkey
  - Confirm new passkey
- Validation rules:
  - Old passkey must match database value
  - New passkey and confirm passkey must match
- Passkey update stored securely in Supabase

#### 2.4.19 Complete Application Editing
- Admin has full control to edit entire application:
  - Splash screen configuration with responsive scaling
  - Total body background image with responsive scaling
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
  - Event descriptions, rules, and instructions with justified text, list formatting (bullet and numbered), text color customization, and bold text formatting for all events
  - Gallery image frame width configuration
  - Committee card purple glow effect on click
- Flexible editing interface allowing customization of any component
- All edits automatically update database
- All changes reflect instantly on public website and live preview

#### 2.4.20 Supabase Connection Management
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
- Total body background image with responsive scaling across all screen sizes
- Default background color with admin override capability
- Enhanced footer design with improved visual hierarchy
- Primary header with navigation menu positioned at top-right corner
- Primary header with admin-configurable FUSION 2k26 background image that scales responsively across all screen sizes
- FUSION 2k26 text with responsive sizing and animated effects
- Secondary header with golden color college name styling, black border, and glowing background effect for enhanced attractiveness, positioned below primary header
- Secondary header includes configurable logo shapes (circle/semi-square) with minimum two logos visible on mobile (left-right positioning)
- Fully responsive secondary header with flexible logo sizing and text scaling across all devices
- Mobile logo scrolling section (homepage only) with semi-square logos (20px height) and automatic left-to-right scrolling animation
- Event poster section with automatic horizontal scrolling animation (left to right)
- Event type coordinators section with photo display options (round or semi-circle shapes) and optional event type display
- Event descriptions, rules, and instructions displayed with justified text alignment, list formatting support (bullet and numbered), text color customization, and bold text formatting for all events
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
- Splash screen responsive scaling across all screen sizes with automatic transition
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
- Event poster section responsive across all screen sizes with automatic scrolling animation
- Event type coordinators section responsive with photo display options and optional event type display
- Multiple web pages with consistent responsive behavior
- Admin dashboard optimized for desktop editing experience
- Event descriptions, rules, and instructions maintain justified alignment, list formatting (bullet and numbered), text colors, and bold formatting across all screen sizes for all events
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
- Optimized splash screen loading with minimal delay
- Optimized total body background image loading with responsive image sizing
- Optimized FUSION 2k26 background image loading with responsive image sizing
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
  - Splash screen content (image URL, display duration, enabled status, responsive scaling settings, animation settings)
  - Total body background content (background image URL, responsive scaling settings, positioning settings, fixed/scroll behavior)
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
  - Events (including rules with formatting, instructions with formatting, multiple images, event-specific staff coordinators with photos and role field, event-specific student coordinators with photos, Google Form links, description formatting data with text color and bold formatting, rules formatting data with text color and bold formatting, instructions formatting data with text color and bold formatting, photo display settings, photo shape configurations)
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
- Supabase Storage for image uploads including splash screen images, total body background images, FUSION 2k26 background images, event posters, coordinator photos, committee images, mobile scrolling logos
- Event-specific coordinator details stored within events table
- Event type coordinator details stored in separate event_type_coordinators table with role field and event type display toggle
- Committee details stored in committees table with coordinator role field and purple glow effect settings
- Event description, rules, and instructions formatting metadata including text color, bold formatting, and list formatting (bullet and numbered) stored within events table for all events
- Mobile logo scrolling data stored in mobile_logo_scrolling table (homepage only)
- Splash screen data stored in splash_screen_content table
- Total body background data stored in total_body_background_content table

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
  - Total body background management (upload, retrieve, update settings, responsive scaling configuration)
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
  - Event detail page data (including event-specific coordinator management with photo upload and role field, description formatting with text color, bold formatting, and list formatting for bullet and numbered lists, rules formatting with text color, bold formatting, and list formatting, instructions formatting with text color, bold formatting, and list formatting, photo display settings, photo shape configuration)
  - Event type coordinators management (add, edit, delete staff and student coordinators with photo upload, role field, event type display toggle, photo display settings, photo shape configuration)
  - Committee management (add, edit, delete committees with title, description, image, coordinator details with photo upload and role field, photo display settings, photo shape configuration, purple glow effect settings)
  - Committee detail retrieval for detailed view
  - Gallery image management (upload, retrieve, delete, frame width configuration)
  - Complete application editing
  - Chatbot information retrieval (excluding admin passkey information)
  - Image upload to Supabase Storage (including splash screen images, total body background images, FUSION 2k26 background images, event posters, coordinator photos, committee images, mobile scrolling logos)
- Environment variable support for connection credentials storage
- Error handling for database connection failures
- Automatic passkey recognition logic without explicit admin access option

### 4.3 Image Upload Implementation
- Splash screen image upload flow:
  - Admin uploads splash screen image through Splash Screen Management interface
  - Frontend sends image file to backend API endpoint
  - Backend uploads image to Supabase Storage splash_screens bucket
  - Backend receives public URL from Supabase Storage
  - Backend stores image URL and responsive scaling settings in splash_screen_content table
  - Frontend retrieves splash screen image URL and displays for 2 seconds on initial load
  - Public UI displays splash screen with automatic transition to main application
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
- File update locations for splash screen image upload:
  - Backend API file: Create/update splash screen upload endpoint (e.g., /api/splash-screen/upload)
  - Admin Dashboard component: Add splash screen image upload interface in Splash Screen Management section
  - Public Splash Screen component: Fetch and display splash screen image with 2-second duration and automatic transition
  - Supabase Storage configuration: Create splash_screens bucket with public access
- File update locations for total body background image upload:
  - Backend API file: Create/update total body background upload endpoint (e.g., /api/total-background/upload)
  - Admin Dashboard component: Add total body background image upload interface in Total Body Background Management section
  - Public Body component: Fetch and display total body background image with responsive scaling
  - Supabase Storage configuration: Create total_backgrounds bucket with public access
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

### 4.13 Total Body Background Implementation
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

### 4.14 Chatbot Authentication Enhancement
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

### 4.15 Code Quality
- Clean, modular, scalable codebase
- Maintainable UI component structure
- Optimized for production deployment
- Support for multiple web pages architecture
- Efficient real-time update mechanism
- Secure connection credentials handling
- Responsive design implementation using CSS media queries and flexible layouts
- Responsive image scaling implementation for splash screen, total body background, and FUSION 2k26 background images
- Rich text editor integration with proper sanitization and text color/bold formatting support for description, rules, and instructions
- Modal/detail view component with proper state management
- Automatic scrolling animation implementation for event posters
- Text animation implementation for FUSION 2k26 text
- Photo display implementation with shape configuration and lazy loading
- Mobile logo scrolling implementation (homepage only) with semi-square shape and 20px height
- Committee card purple glow effect implementation
- Gallery frame width configuration implementation
- Splash screen implementation with 2-second duration and automatic transition
- Total body background implementation with responsive scaling
- Enhanced chatbot authentication with automatic passkey recognition

## 5. User Flow

### 5.1 Public User Flow
1. User opens application and sees splash screen for 2 seconds
2. Splash screen automatically transitions to main application
3. User lands on cinematic homepage with total body background image and dual header system:
   - Total body background image automatically scales to fit screen size
   - Primary header displaying navigation menu at top-right corner (Home, Events, Committee, Gallery, About Us, Contact Us) with FUSION 2k26 background image that automatically scales to fit screen size
   - FUSION 2k26 text with responsive sizing and animated effects
   - Secondary header positioned below primary header displaying ADITYA College of Engineering Madanapalle (golden color with black border and glowing background, responsive font sizing), MADANAPALLE (responsive font 12/14), UGC - Autonomous Institution (responsive font 12/14), and college logos with configured shapes (circle/semi-square) that automatically adjust size based on screen size with minimum two logos visible on mobile (left-right positioning)
   - Mobile logo scrolling section (mobile view only, homepage only) displaying semi-square logos (20px height) with automatic left-to-right scrolling animation
4. User navigates through multiple web pages using top-right navigation menu
5. User experiences consistent responsive design across all screen sizes with automatic font and logo adjustments, responsive total body background image scaling, responsive FUSION 2k26 background image scaling, and animated FUSION 2k26 text
6. User views Event Poster Section above Events Section with automatic horizontal scrolling animation (left to right)
7. User views events by category (Technical/Cultural) on Events page
8. User clicks Technical or Cultural selection button
9. User views Event Type Coordinators Section below selection buttons:
   - When Technical button selected: System displays staff coordinators (name, role, photo if enabled) and student coordinators (name, contact number, photo if enabled) for Technical events
   - When Cultural button selected: System displays staff coordinators (name, role, photo if enabled) and student coordinators (name, contact number, photo if enabled) for Cultural events
   - Event type field displayed optionally based on admin configuration
10. User clicks on event card to navigate to dedicated event detail page
11. User views complete event information including:
   - Full description with justified text alignment, list formatting (bullet and numbered), text color customization, and bold text formatting
   - Rules with justified text alignment, list formatting (bullet and numbered), text color customization, and bold text formatting
   - Instructions with justified text alignment, list formatting (bullet and numbered), text color customization, and bold text formatting
   - Event images
   - Event-specific staff coordinator details (name, role, photo if enabled in round or semi-circle shape)
   - Event-specific student coordinator details (name, contact number, photo if enabled in round or semi-circle shape)
12. User clicks registration button on event detail page
13. Google Form opens (link provided by admin)
14. User explores committee section and views committee groups (Technical Committee, Cultural Committee, etc.) with committee cards displaying title, description preview, and coordinator details (name, role, photo if enabled, contact)
15. User clicks on committee card to view complete committee details
16. Purple glow effect applied to committee card on click
17. Detailed view opens (modal or dedicated page) displaying:
    - Full-size committee image (if provided)
    - Committee title
    - Complete committee description
    - Complete coordinators details with photos (if enabled, round or semi-circle shape) and role field
18. User closes detail view and returns to Committee Section
19. User explores gallery section and views images uploaded by admin with increased frame width (1-2px more) for enhanced visual presentation
20. User views improved footer section with contact details and social media links
21. User can interact with chatbot to get website information and details (no admin passkey information displayed)
22. User experiences optimal viewing on mobile devices with properly scaled logos (minimum two visible with left-right positioning), text with golden color, black border, and glowing background, responsive total body background image, responsive FUSION 2k26 background image, animated FUSION 2k26 text in secondary header, and mobile logo scrolling section (homepage only) with semi-square logos (20px height) and automatic left-to-right scrolling animation

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
   - Total Body Background: Upload total body background image, configure responsive scaling for different screen sizes, configure positioning, configure fixed/scroll behavior
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
   - Events: Add event details including rules with rich text formatting, instructions with rich text formatting, multiple images, event-specific staff coordinator details (name, role, photo with shape configuration), event-specific student coordinator details (name, contact number, photo with shape configuration), Google Form link; Use rich text editor for event description, rules, and instructions with text justification, list formatting options (bullet and numbered), text color picker, and bold text button; Edit event-specific coordinator details directly within Events Section; Configure photo display enable/disable option per event
   - Event Type Coordinators: Add staff coordinator details (name, role, photo with shape configuration, event type, event type display toggle), add student coordinator details (name, contact number, photo with shape configuration, event type, event type display toggle); Configure photo display enable/disable option for coordinators; Edit coordinator details including name, role/contact, photo, event type
   - Committees: Add committees with title, description, image (optional), coordinator details (name, role, photo with shape configuration, contact); Edit committee information; Configure photo display enable/disable option per committee; Configure purple glow effect settings
   - Gallery: Upload images through Gallery Management interface, images stored in Supabase Storage and displayed in public Gallery Section; Configure image frame width (increased by 1-2px for enhanced visual presentation)
   - About Us, Contact management
   - Chatbot information content management (excluding admin passkey information)
10. Admin arranges homepage layout and dual header sections as desired
11. Admin uploads and configures splash screen image with responsive scaling settings
12. Admin uploads and configures total body background image with responsive scaling settings for different devices
13. Admin uploads and configures FUSION 2k26 background image with responsive scaling settings for different devices
14. Admin configures FUSION 2k26 text with responsive sizing and animation settings
15. Admin configures responsive behavior for secondary header including logo sizing (minimum two visible on mobile with left-right positioning) and text scaling with golden color, black border, and glowing background for different devices
16. Admin configures mobile logo scrolling section (homepage only) with logo upload, order settings, and animation configuration (semi-square shape, 20px height, left-to-right animation)
17. Admin uploads event poster images and configures automatic scrolling animation
18. Admin edits entire application including splash screen, total body background, primary header with FUSION 2k26 background image, FUSION 2k26 text with animations, secondary header with responsive configurations and glowing background, mobile logo scrolling section (homepage only), event poster section with scrolling animation, footer, body sections, event type coordinator details with photo management and role field, event-specific coordinator details with photo management and role field, committee information including title, description, image, and coordinator details with photo management and role field, event descriptions, rules, and instructions with rich text formatting including justified text, list formatting (bullet and numbered), text color customization, and bold text formatting for all events, gallery image frame width configuration, and committee card purple glow effect settings
19. Admin can change passkey through Passkey Management
20. All changes save to Supabase automatically and reflect immediately across all web pages on public UI and live preview with proper responsive behavior including splash screen display, total body background image scaling, FUSION 2k26 background image scaling, text animations, poster scrolling, photo display, mobile logo scrolling (homepage only), committee card purple glow effect, gallery frame width configuration, and event content formatting with justified text, lists (bullet and numbered), text colors, and bold formatting
21. Admin can access and edit multiple web pages with consistent editing interface

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
2. Test total body background image display and responsive scaling across different screen sizes
3. Test public user interface with dual header system
4. Test FUSION 2k26 background image display and responsive scaling across different screen sizes
5. Test FUSION 2k26 text display with responsive sizing and animations
6. Test responsive behavior of secondary header across different screen sizes with golden color, black border, and glowing background
7. Verify logo sizing adjustments on mobile, tablet, and desktop views with minimum two logos visible on mobile (left-right positioning)
8. Verify text scaling for college name, location, and institution status across devices
9. Test mobile logo scrolling section (homepage only) with semi-square logos (20px height) and automatic left-to-right scrolling animation on mobile devices
10. Verify mobile logo scrolling section does not display on desktop or tablet views
11. Verify mobile logo scrolling section displays only on homepage, not on other pages
12. Test event poster section display and automatic scrolling animation
13. Test event type coordinators section display and filtering based on event type selection
14. Test coordinator photo display with round and semi-circle shapes
15. Test coordinator role field display for staff coordinators
16. Test event type display toggle functionality
17. Test chatbot functionality (verify no admin access option or passkey information displayed)
18. Test admin authentication with automatic passkey recognition
19. Test admin dashboard functionality
20. Test database connection
21. Verify live preview updates
22. Test gallery image upload and display with increased frame width (1-2px more)
23. Test splash screen image upload and responsive scaling configuration
24. Test total body background image upload and responsive scaling configuration
25. Test FUSION 2k26 background image upload and responsive scaling configuration
26. Test FUSION 2k26 text configuration with responsive sizing and animation settings
27. Test event poster image upload and scrolling animation configuration
28. Test primary and secondary header management including responsive configurations with glowing background
29. Test mobile logo scrolling management (homepage only) with logo upload, order configuration, and animation settings
30. Test event type coordinator details display, filtering, and photo management
31. Test event type coordinator editing with photo upload, shape configuration, role field, and event type display toggle
32. Test event-specific coordinator details display and photo management
33. Test event-specific coordinator editing within Events Section with photo upload, shape configuration, and role field
34. Test committee management with title, description, image, and coordinator details including role field
35. Test committee card click functionality and detail view opening
36. Test committee card purple glow effect on click
37. Test committee detail view display with complete committee information including coordinator role field
38. Test committee detail view close/back functionality
39. Test event description rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
40. Test event rules rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
41. Test event instructions rich text editor with justification, list formatting (bullet and numbered), text color picker, and bold text button
42. Test event description, rules, and instructions display with formatted content including text colors, bold formatting, and list formatting (bullet and numbered) for all events

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
3. Test total body background image display and responsive scaling on actual devices
4. Test all public user features including dual header system
5. Test FUSION 2k26 background image display and responsive scaling on actual devices
6. Test FUSION 2k26 text display with responsive sizing and animations on actual devices
7. Test responsive behavior of secondary header on actual mobile devices with golden color, black border, and glowing background
8. Verify logo and text scaling across different screen sizes with minimum two logos visible on mobile (left-right positioning)
9. Test mobile logo scrolling section (homepage only) on actual mobile devices with semi-square logos (20px height) and automatic left-to-right scrolling animation
10. Verify mobile logo scrolling section does not display on desktop or tablet devices
11. Verify mobile logo scrolling section displays only on homepage, not on other pages
12. Test event poster section display and automatic scrolling animation on actual devices
13. Test event type coordinators section display, filtering, and photo display on actual devices
14. Test coordinator photo display with round and semi-circle shapes on actual devices
15. Test coordinator role field display for staff coordinators
16. Test event type display toggle functionality
17. Test chatbot functionality (verify no admin access option or passkey information displayed)
18. Test admin authentication with automatic passkey recognition
19. Test admin dashboard
20. Verify database connectivity
21. Test live preview functionality
22. Verify image uploads to Supabase Storage
23. Test gallery image display on public UI with increased frame width (1-2px more)
24. Test splash screen image upload and responsive scaling configuration
25. Test total body background image upload and responsive scaling configuration
26. Test FUSION 2k26 background image upload and responsive scaling configuration
27. Test FUSION 2k26 text configuration with responsive sizing and animation settings
28. Test event poster image upload and scrolling animation configuration
29. Test primary and secondary header display and management with responsive configurations and glowing background
30. Test mobile logo scrolling management (homepage only) with logo upload, order configuration, and animation settings
31. Test event type coordinator details display, filtering, and photo management functionality
32. Test event type coordinator editing with photo upload, shape configuration, role field, and event type display toggle
33. Test event-specific coordinator details display and photo management functionality
34. Test event-specific coordinator editing within Events Section with photo upload, shape configuration, and role field
35. Test committee management with title, description, image, and coordinator details functionality including role field
36. Test committee card click functionality and detail view opening on actual devices
37. Test committee card purple glow effect on click on actual devices
38. Test committee detail view responsiveness across different screen sizes
39. Test committee detail view close/back functionality
40. Test event description rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
41. Test event rules rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
42. Test event instructions rich text editor functionality with text color, bold formatting, and list formatting (bullet and numbered)
43. Test event description, rules, and instructions display with justified and listified formatting including text colors, bold formatting, and list formatting (bullet and numbered) for all events

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
6. Add total body background management endpoint
7. Add gallery image upload endpoint
8. Add FUSION 2k26 background image upload endpoint
9. Add FUSION 2k26 text management endpoint
10. Add event poster image upload endpoint
11. Add primary and secondary header management endpoints
12. Add responsive configuration management endpoints
13. Add mobile logo scrolling management endpoints (homepage only)
14. Add event type coordinator management endpoints with photo upload, role field, and event type display toggle
15. Add event-specific coordinator management endpoints with photo upload and role field within Events Section
16. Add committee management endpoints with image and coordinator photo upload including role field and purple glow effect settings
17. Add committee detail retrieval endpoint
18. Add event description, rules, and instructions formatting endpoints with text color, bold formatting, and list formatting (bullet and numbered)
19. Add gallery frame width configuration endpoint
20. Update chatbot endpoints to remove admin passkey information display

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
7. Test total body background image upload and responsive scaling
8. Test gallery image upload and display with increased frame width
9. Test FUSION 2k26 background image upload and responsive scaling
10. Test FUSION 2k26 text configuration with responsive sizing and animations
11. Test event poster image upload and scrolling animation
12. Test dual header system management
13. Test responsive configuration management for secondary header with glowing background
14. Test mobile logo scrolling management (homepage only) with logo upload, order configuration, and animation settings
15. Test event type coordinator management, filtering, and photo upload with shape configuration, role field, and event type display toggle
16. Test event-specific coordinator management and photo upload with shape configuration and role field within Events Section
17. Test committee management with title, description, image, and coordinator photo upload including role field and purple glow effect settings
18. Test committee card click and detail view functionality with purple glow effect
19. Test event description, rules, and instructions rich text editor with text color, bold formatting, and list formatting (bullet and numbered)
20. Test gallery frame width configuration
21. Test chatbot functionality (verify no admin access option or passkey information displayed)
22. Test admin authentication with automatic passkey recognition

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

### 6.6 Total Body Background Implementation Guide

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

### 6.7 Chatbot Authentication Enhancement Guide

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

## 7. Other Requirements

### 7.1 Supabase Table Schema
System will automatically create the following tables on first connection:
- splash_screen_content (id, image_url, display_duration, enabled, responsive_scaling_settings, animation_settings, created_at, updated_at)
- total_body_background_content (id, background_image_url, responsive_scaling_settings, positioning_settings, fixed_scroll_behavior, created_at, updated_at)
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
- events (id, name, type, description_html_with_text_color_bold_formatting_and_list_formatting, rules_html_with_text_color_bold_formatting_and_list_formatting, instructions_html_with_text_color_bold_formatting_and_list_formatting, images, event_specific_staff_coordinators_with_photos_and_role, event_specific_student_coordinators_with_photos, registration_link, photo_display_enabled, created_at, updated_at)
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
  - Splash_screens (for splash screen images with responsive scaling support)
  - Total_backgrounds (for total body background images with responsive scaling support)
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
- Splash_screens bucket specifically configured for splash screen images with responsive scaling capabilities
- Total_backgrounds bucket specifically configured for total body background images with responsive scaling capabilities
- Gallery bucket specifically configured for admin-uploaded gallery images that display in public Gallery Section with increased frame width (1-2px more)
- Backgrounds bucket specifically configured for FUSION 2k26 header background images with responsive scaling capabilities
- Event_posters bucket specifically configured for event poster images with automatic scrolling animation
- Coordinator_photos bucket specifically configured for coordinator photos with round and semi-circle shape configurations
- Committees bucket specifically configured for committee images and coordinator photos with round and semi-circle shape configurations
- Mobile_logos bucket specifically configured for mobile logo scrolling section (homepage only) with semi-square shape and 20px height
- Logo bucket supports circle and semi-square shape configurations with responsive sizing capabilities and mobile left-right positioning