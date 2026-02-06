export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

// Fusion26 Types
export interface Coordinator {
  name: string;
  contact: string;
  photo_url?: string;
}

export interface Event {
  id: string;
  name: string;
  type: 'Technical' | 'Cultural';
  description: string;
  description_format: 'paragraph' | 'list';
  description_html?: string;
  image_url: string | null;
  staff_coordinators: Coordinator[];
  student_coordinators: Coordinator[];
  staff_coordinator_photos?: { name: string; photo_url: string }[];
  student_coordinator_photos?: { name: string; photo_url: string }[];
  show_coordinator_photos?: boolean;
  registration_link: string | null;
  rules: string | null;
  instructions: string | null;
  additional_images: string[];
  venue: string | null;
  event_date: string | null;
  duration: string | null;
  prize_details: string | null;
  team_size: string | null;
  created_at: string;
  updated_at: string;
}

export interface EventPoster {
  id: string;
  image_url: string;
  display_order: number;
  scroll_duration: number;
  created_at: string;
  updated_at: string;
}

export interface OverallCoordinator {
  id: string;
  type: 'staff' | 'student';
  name: string;
  position?: string;
  contact?: string;
  image_url?: string;
  event_type?: 'Technical' | 'Cultural' | 'Both';
  display_order: number;
  show_photo: boolean;
  created_at: string;
  updated_at: string;
}

export interface CommitteePersonDetail {
  name: string;
  contact?: string;
  role?: string;
}

export interface Committee {
  id: string;
  title: string;
  description?: string;
  role?: string;
  image_url?: string;
  staff_details: CommitteePersonDetail[];
  student_details: CommitteePersonDetail[];
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface CommitteeCoordinator {
  id: string;
  committee_id: string;
  name: string;
  position?: string;
  contact?: string;
  image_url?: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

// Legacy type for backward compatibility
export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  special_role: 'Chief Patron' | 'Patron' | 'Convener' | 'Co-Convener' | null;
  image_url: string | null;
  info: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  image_url: string;
  created_at: string;
}

export interface AboutUs {
  id: string;
  content: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  instagram: string | null;
  linkedin: string | null;
  whatsapp: string | null;
  email: string | null;
  updated_at: string;
}

export interface AdminPasskey {
  id: string;
  passkey: string;
  updated_at: string;
}

export interface HeaderSettings {
  id: string;
  college_name: string;
  logo_1_url: string | null;
  logo_2_url: string | null;
  logo_3_url: string | null;
  logo_4_url: string | null;
  updated_at: string;
}

export interface Logo {
  id: number;
  url: string;
  position: 'left' | 'right';
  order: number;
  shape?: 'circle' | 'semi-square';
}

export interface ThemeSettings {
  id: string;
  header_title: string;
  header_subtitle: string | null;
  header_tagline: string | null;
  header_font_family: string;
  header_font_size: string;
  header_text_color: string;
  header_bg_color: string;
  header_bg_image: string | null;
  show_header_subtitle: boolean;
  show_header_tagline: boolean;
  logos: Logo[];
  page_bg_color: string;
  page_bg_image: string | null;
  nav_font_size: string;
  nav_text_color: string;
  nav_hover_color: string;
  updated_at: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  is_published: boolean;
  display_order: number;
  show_in_menu: boolean;
  created_at: string;
  updated_at: string;
}

export interface PageComponent {
  id: string;
  type: string;
  props: Record<string, any>;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: string;
    height: string;
  };
}

export interface PageSection {
  id: string;
  page_id: string;
  section_type: 'header' | 'body' | 'footer';
  section_name: string;
  components: PageComponent[];
  styles: Record<string, any>;
  display_order: number;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface FooterSettings {
  id: string;
  college_name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  social_links: Record<string, string>;
  additional_info: string | null;
  layout_style: string;
  bg_color: string;
  text_color: string;
  updated_at: string;
}

export interface ComponentTemplate {
  id: string;
  name: string;
  type: string;
  default_props: Record<string, any>;
  preview_image: string | null;
  category: string;
  created_at: string;
}

export interface SponsorLogo {
  id: string;
  image_url: string;
  order_number: number;
  created_at: string;
}

export interface PopupSettings {
  id: string;
  enabled: boolean;
  image_url: string | null;
  link_url: string | null;
  show_once_per_session: boolean;
  display_delay: number;
  display_duration: number;
  created_at: string;
  updated_at: string;
}

