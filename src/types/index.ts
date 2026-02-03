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

