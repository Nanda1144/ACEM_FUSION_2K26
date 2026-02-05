import { supabase } from './supabase';
import type { 
  Event, 
  CommitteeMember, 
  Committee,
  CommitteeCoordinator,
  EventPoster,
  OverallCoordinator,
  GalleryImage, 
  AboutUs, 
  Contact, 
  AdminPasskey, 
  HeaderSettings, 
  ThemeSettings, 
  Page, 
  PageSection, 
  FooterSettings, 
  ComponentTemplate,
  SponsorLogo
} from '@/types/index';

// Events API
export const eventsApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  getByType: async (type: 'Technical' | 'Cultural') => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('type', type)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  create: async (event: Omit<Event, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('events')
      .insert([event])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, event: Partial<Event>) => {
    const { data, error } = await supabase
      .from('events')
      .update({ ...event, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Committee API
export const committeeApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('committee')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  create: async (member: Omit<CommitteeMember, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('committee')
      .insert([member])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, member: Partial<CommitteeMember>) => {
    const { data, error } = await supabase
      .from('committee')
      .update({ ...member, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('committee')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Gallery API
export const galleryApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  create: async (image_url: string) => {
    const { data, error } = await supabase
      .from('gallery')
      .insert([{ image_url }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('gallery')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// About Us API
export const aboutUsApi = {
  get: async () => {
    const { data, error } = await supabase
      .from('about_us')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, content: string) => {
    const { data, error } = await supabase
      .from('about_us')
      .update({ content, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Contact API
export const contactApi = {
  get: async () => {
    const { data, error } = await supabase
      .from('contact')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, contact: Partial<Contact>) => {
    const { data, error } = await supabase
      .from('contact')
      .update({ ...contact, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Admin Passkey API
export const passkeyApi = {
  get: async () => {
    const { data, error } = await supabase
      .from('admin_passkey')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  validate: async (passkey: string) => {
    const { data, error } = await supabase
      .from('admin_passkey')
      .select('*')
      .eq('passkey', passkey)
      .limit(1)
      .maybeSingle();
    
    if (error) throw error;
    return !!data;
  },

  update: async (id: string, newPasskey: string) => {
    const { data, error } = await supabase
      .from('admin_passkey')
      .update({ passkey: newPasskey, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Header Settings API
export const headerSettingsApi = {
  get: async () => {
    const { data, error } = await supabase
      .from('header_settings')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, settings: Partial<HeaderSettings>) => {
    const { data, error } = await supabase
      .from('header_settings')
      .update({ ...settings, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Theme Settings API
export const themeSettingsApi = {
  get: async () => {
    const { data, error } = await supabase
      .from('theme_settings')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, settings: Partial<ThemeSettings>) => {
    const { data, error } = await supabase
      .from('theme_settings')
      .update({ ...settings, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Pages API
export const pagesApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  getBySlug: async (slug: string) => {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  create: async (page: Omit<Page, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('pages')
      .insert([page])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, page: Partial<Page>) => {
    const { data, error } = await supabase
      .from('pages')
      .update({ ...page, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('pages')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Page Sections API
export const pageSectionsApi = {
  getByPageId: async (pageId: string) => {
    const { data, error } = await supabase
      .from('page_sections')
      .select('*')
      .eq('page_id', pageId)
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  create: async (section: Omit<PageSection, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('page_sections')
      .insert([section])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, section: Partial<PageSection>) => {
    const { data, error } = await supabase
      .from('page_sections')
      .update({ ...section, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('page_sections')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Footer Settings API
export const footerSettingsApi = {
  get: async () => {
    const { data, error } = await supabase
      .from('footer_settings')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, settings: Partial<FooterSettings>) => {
    const { data, error } = await supabase
      .from('footer_settings')
      .update({ ...settings, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Component Templates API
export const componentTemplatesApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('component_templates')
      .select('*')
      .order('category', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  getByCategory: async (category: string) => {
    const { data, error } = await supabase
      .from('component_templates')
      .select('*')
      .eq('category', category);
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  }
};

// Image Upload Helper
export const uploadImage = async (
  file: File,
  bucket: 'app-9dfi9jpj51xd_events_images' | 'app-9dfi9jpj51xd_committee_images' | 'app-9dfi9jpj51xd_gallery_images'
): Promise<string> => {
  // Validate file name
  const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const fileName = `${Date.now()}_${sanitizedFileName}`;

  // Check file size and compress if needed
  let fileToUpload = file;
  if (file.size > 1024 * 1024) {
    // File is larger than 1MB, compress it
    fileToUpload = await compressImage(file);
  }

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, fileToUpload, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path);

  return publicUrl;
};

// Event Posters API
export const eventPostersApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('event_posters')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  create: async (poster: { image_url: string; display_order: number }) => {
    const { data, error } = await supabase
      .from('event_posters')
      .insert([poster])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, poster: { image_url?: string; display_order?: number }) => {
    const { data, error } = await supabase
      .from('event_posters')
      .update(poster)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('event_posters')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Overall Coordinators API
export const overallCoordinatorsApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('overall_coordinators')
      .select('*')
      .order('display_order', { ascending: true});
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  getByType: async (type: 'staff' | 'student') => {
    const { data, error } = await supabase
      .from('overall_coordinators')
      .select('*')
      .eq('type', type)
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  getByEventType: async (eventType: 'Technical' | 'Cultural') => {
    const { data, error } = await supabase
      .from('overall_coordinators')
      .select('*')
      .or(`event_type.eq.${eventType},event_type.eq.Both`)
      .order('type', { ascending: true })
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  create: async (coordinator: {
    type: 'staff' | 'student';
    name: string;
    position?: string;
    contact?: string;
    image_url?: string;
    event_type?: 'Technical' | 'Cultural' | 'Both';
    display_order: number;
    show_photo: boolean;
  }) => {
    const { data, error } = await supabase
      .from('overall_coordinators')
      .insert([coordinator])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, coordinator: Partial<{
    name: string;
    position: string;
    contact: string;
    image_url: string;
    event_type: 'Technical' | 'Cultural' | 'Both';
    display_order: number;
    show_photo: boolean;
  }>) => {
    const { data, error } = await supabase
      .from('overall_coordinators')
      .update(coordinator)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('overall_coordinators')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Committees API (new groups-based system)
export const committeesApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('committees')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('committees')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw error;
    return data;
  },

  create: async (committee: {
    title: string;
    description?: string;
    image_url?: string;
    display_order: number;
  }) => {
    const { data, error } = await supabase
      .from('committees')
      .insert([committee])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, committee: Partial<{
    title: string;
    description: string;
    image_url: string;
    display_order: number;
  }>) => {
    const { data, error } = await supabase
      .from('committees')
      .update(committee)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    // Delete committee coordinators first
    await supabase
      .from('committee_coordinators')
      .delete()
      .eq('committee_id', id);
    
    // Then delete the committee
    const { error } = await supabase
      .from('committees')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Committee Coordinators API
export const committeeCoordinatorsApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('committee_coordinators')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  getByCommittee: async (committeeId: string) => {
    const { data, error } = await supabase
      .from('committee_coordinators')
      .select('*')
      .eq('committee_id', committeeId)
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  create: async (coordinator: {
    committee_id: string;
    name: string;
    position?: string;
    contact?: string;
    image_url?: string;
    display_order: number;
  }) => {
    const { data, error } = await supabase
      .from('committee_coordinators')
      .insert([coordinator])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, coordinator: Partial<{
    name: string;
    position: string;
    contact: string;
    image_url: string;
    display_order: number;
  }>) => {
    const { data, error} = await supabase
      .from('committee_coordinators')
      .update(coordinator)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('committee_coordinators')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Image Compression Helper
const compressImage = async (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Resize to max 1080p
        const maxDimension = 1080;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = (height / width) * maxDimension;
            width = maxDimension;
          } else {
            width = (width / height) * maxDimension;
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, '.webp'), {
                type: 'image/webp',
                lastModified: Date.now()
              });
              resolve(compressedFile);
            } else {
              reject(new Error('Compression failed'));
            }
          },
          'image/webp',
          0.8
        );
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });
};

// Sponsor Logos API
export const sponsorLogosApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('sponsor_logos')
      .select('*')
      .order('order_number', { ascending: true });
    
    if (error) throw error;
    return Array.isArray(data) ? data : [];
  },

  create: async (logo: { image_url: string; order_number: number }) => {
    const { data, error } = await supabase
      .from('sponsor_logos')
      .insert([logo])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  update: async (id: string, logo: { image_url?: string; order_number?: number }) => {
    const { data, error } = await supabase
      .from('sponsor_logos')
      .update(logo)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('sponsor_logos')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
