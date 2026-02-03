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
