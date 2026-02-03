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
}

export interface Event {
  id: string;
  name: string;
  type: 'Technical' | 'Cultural';
  description: string;
  image_url: string | null;
  staff_coordinators: Coordinator[];
  student_coordinators: Coordinator[];
  registration_link: string | null;
  created_at: string;
  updated_at: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  image_url: string | null;
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
}

export interface ThemeSettings {
  id: string;
  header_title: string;
  header_font_family: string;
  header_font_size: string;
  header_text_color: string;
  header_bg_color: string;
  header_bg_image: string | null;
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

