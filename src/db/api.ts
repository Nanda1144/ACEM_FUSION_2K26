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
  ThemeSettings, 
  Page, 
  PageSection, 
  FooterSettings, 
  ComponentTemplate 
} from '@/types/index';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function for API calls
async function apiCall<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

// Events API
export const eventsApi = {
  getAll: async (): Promise<Event[]> => {
    return apiCall<Event[]>('/events');
  },

  getById: async (id: string): Promise<Event | null> => {
    return apiCall<Event>(`/events/${id}`);
  },

  getByType: async (type: 'Technical' | 'Cultural'): Promise<Event[]> => {
    return apiCall<Event[]>(`/events?type=${type}`);
  },

  create: async (event: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event> => {
    return apiCall<Event>('/events', {
      method: 'POST',
      body: JSON.stringify(event),
    });
  },

  update: async (id: string, event: Partial<Event>): Promise<Event> => {
    return apiCall<Event>(`/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
    });
  },

  delete: async (id: string): Promise<void> => {
    await apiCall(`/events/${id}`, { method: 'DELETE' });
  }
};

// Committee API
export const committeeApi = {
  getAll: async (): Promise<CommitteeMember[]> => {
    return apiCall<CommitteeMember[]>('/committee');
  },

  create: async (member: Omit<CommitteeMember, 'id' | 'created_at' | 'updated_at'>): Promise<CommitteeMember> => {
    return apiCall<CommitteeMember>('/committee', {
      method: 'POST',
      body: JSON.stringify(member),
    });
  },

  update: async (id: string, member: Partial<CommitteeMember>): Promise<CommitteeMember> => {
    return apiCall<CommitteeMember>(`/committee/${id}`, {
      method: 'PUT',
      body: JSON.stringify(member),
    });
  },

  delete: async (id: string): Promise<void> => {
    await apiCall(`/committee/${id}`, { method: 'DELETE' });
  }
};

// Gallery API
export const galleryApi = {
  getAll: async (): Promise<GalleryImage[]> => {
    return apiCall<GalleryImage[]>('/gallery');
  },

  create: async (image: Omit<GalleryImage, 'id' | 'created_at'>): Promise<GalleryImage> => {
    return apiCall<GalleryImage>('/gallery', {
      method: 'POST',
      body: JSON.stringify(image),
    });
  },

  delete: async (id: string): Promise<void> => {
    await apiCall(`/gallery/${id}`, { method: 'DELETE' });
  }
};

// About Us API
export const aboutApi = {
  get: async (): Promise<AboutUs | null> => {
    return apiCall<AboutUs>('/about');
  },

  update: async (id: string, content: string): Promise<AboutUs> => {
    return apiCall<AboutUs>(`/about/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ content }),
    });
  }
};

// Contact API
export const contactApi = {
  get: async (): Promise<Contact | null> => {
    return apiCall<Contact>('/contact');
  },

  update: async (id: string, contact: Partial<Contact>): Promise<Contact> => {
    return apiCall<Contact>(`/contact/${id}`, {
      method: 'PUT',
      body: JSON.stringify(contact),
    });
  }
};

// Admin Passkey API
export const passkeyApi = {
  verify: async (passkey: string): Promise<boolean> => {
    const result = await apiCall<{ valid: boolean }>('/passkey/verify', {
      method: 'POST',
      body: JSON.stringify({ passkey }),
    });
    return result.valid;
  },

  update: async (id: string, newPasskey: string): Promise<void> => {
    await apiCall(`/passkey/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ passkey: newPasskey }),
    });
  },

  get: async (): Promise<AdminPasskey | null> => {
    return apiCall<AdminPasskey>('/passkey');
  }
};

// Theme Settings API
export const themeSettingsApi = {
  get: async (): Promise<ThemeSettings | null> => {
    return apiCall<ThemeSettings>('/theme');
  },

  update: async (id: string, settings: Partial<ThemeSettings>): Promise<ThemeSettings> => {
    return apiCall<ThemeSettings>(`/theme/${id}`, {
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  }
};

// Pages API
export const pagesApi = {
  getAll: async (): Promise<Page[]> => {
    return apiCall<Page[]>('/pages');
  },

  getPublished: async (): Promise<Page[]> => {
    return apiCall<Page[]>('/pages?published=true');
  },

  getBySlug: async (slug: string): Promise<Page | null> => {
    return apiCall<Page>(`/pages/slug/${slug}`);
  },

  create: async (page: Omit<Page, 'id' | 'created_at' | 'updated_at'>): Promise<Page> => {
    return apiCall<Page>('/pages', {
      method: 'POST',
      body: JSON.stringify(page),
    });
  },

  update: async (id: string, page: Partial<Page>): Promise<Page> => {
    return apiCall<Page>(`/pages/${id}`, {
      method: 'PUT',
      body: JSON.stringify(page),
    });
  },

  delete: async (id: string): Promise<void> => {
    await apiCall(`/pages/${id}`, { method: 'DELETE' });
  }
};

// Page Sections API
export const pageSectionsApi = {
  getByPageId: async (pageId: string): Promise<PageSection[]> => {
    return apiCall<PageSection[]>(`/page-sections/${pageId}`);
  },

  create: async (section: Omit<PageSection, 'id' | 'created_at' | 'updated_at'>): Promise<PageSection> => {
    return apiCall<PageSection>('/page-sections', {
      method: 'POST',
      body: JSON.stringify(section),
    });
  },

  update: async (id: string, section: Partial<PageSection>): Promise<PageSection> => {
    return apiCall<PageSection>(`/page-sections/${id}`, {
      method: 'PUT',
      body: JSON.stringify(section),
    });
  },

  delete: async (id: string): Promise<void> => {
    await apiCall(`/page-sections/${id}`, { method: 'DELETE' });
  }
};

// Footer Settings API
export const footerSettingsApi = {
  get: async (): Promise<FooterSettings | null> => {
    return apiCall<FooterSettings>('/footer');
  },

  update: async (id: string, settings: Partial<FooterSettings>): Promise<FooterSettings> => {
    return apiCall<FooterSettings>(`/footer/${id}`, {
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  }
};

// Component Templates API
export const componentTemplatesApi = {
  getAll: async (): Promise<ComponentTemplate[]> => {
    return apiCall<ComponentTemplate[]>('/component-templates');
  },

  getByCategory: async (category: string): Promise<ComponentTemplate[]> => {
    return apiCall<ComponentTemplate[]>(`/component-templates?category=${category}`);
  }
};

// Event Posters API
export const eventPostersApi = {
  getAll: async () => {
    return apiCall('/event-posters');
  },

  create: async (poster: { image_url: string; display_order: number }) => {
    return apiCall('/event-posters', {
      method: 'POST',
      body: JSON.stringify(poster),
    });
  },

  update: async (id: string, poster: { image_url?: string; display_order?: number }) => {
    return apiCall(`/event-posters/${id}`, {
      method: 'PUT',
      body: JSON.stringify(poster),
    });
  },

  delete: async (id: string) => {
    await apiCall(`/event-posters/${id}`, { method: 'DELETE' });
  }
};

// Overall Coordinators API
export const overallCoordinatorsApi = {
  getAll: async () => {
    return apiCall('/overall-coordinators');
  },

  getByType: async (type: 'staff' | 'student') => {
    return apiCall(`/overall-coordinators?type=${type}`);
  },

  create: async (coordinator: {
    type: 'staff' | 'student';
    name: string;
    position?: string;
    contact?: string;
    image_url?: string;
    display_order: number;
    show_photo: boolean;
  }) => {
    return apiCall('/overall-coordinators', {
      method: 'POST',
      body: JSON.stringify(coordinator),
    });
  },

  update: async (id: string, coordinator: Partial<{
    name: string;
    position: string;
    contact: string;
    image_url: string;
    display_order: number;
    show_photo: boolean;
  }>) => {
    return apiCall(`/overall-coordinators/${id}`, {
      method: 'PUT',
      body: JSON.stringify(coordinator),
    });
  },

  delete: async (id: string) => {
    await apiCall(`/overall-coordinators/${id}`, { method: 'DELETE' });
  }
};

// Committees API (new groups-based system)
export const committeesApi = {
  getAll: async () => {
    return apiCall('/committees');
  },

  getById: async (id: string) => {
    return apiCall(`/committees/${id}`);
  },

  create: async (committee: {
    title: string;
    description?: string;
    image_url?: string;
    display_order: number;
  }) => {
    return apiCall('/committees', {
      method: 'POST',
      body: JSON.stringify(committee),
    });
  },

  update: async (id: string, committee: Partial<{
    title: string;
    description: string;
    image_url: string;
    display_order: number;
  }>) => {
    return apiCall(`/committees/${id}`, {
      method: 'PUT',
      body: JSON.stringify(committee),
    });
  },

  delete: async (id: string) => {
    await apiCall(`/committees/${id}`, { method: 'DELETE' });
  }
};

// Committee Coordinators API
export const committeeCoordinatorsApi = {
  getAll: async () => {
    return apiCall('/committee-coordinators');
  },

  getByCommittee: async (committeeId: string) => {
    return apiCall(`/committee-coordinators?committee_id=${committeeId}`);
  },

  create: async (coordinator: {
    committee_id: string;
    name: string;
    position?: string;
    contact?: string;
    image_url?: string;
    display_order: number;
  }) => {
    return apiCall('/committee-coordinators', {
      method: 'POST',
      body: JSON.stringify(coordinator),
    });
  },

  update: async (id: string, coordinator: Partial<{
    name: string;
    position: string;
    contact: string;
    image_url: string;
    display_order: number;
  }>) => {
    return apiCall(`/committee-coordinators/${id}`, {
      method: 'PUT',
      body: JSON.stringify(coordinator),
    });
  },

  delete: async (id: string) => {
    await apiCall(`/committee-coordinators/${id}`, { method: 'DELETE' });
  }
};

// Image Upload Helper
export async function uploadImage(file: File, bucket: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async () => {
      try {
        const base64String = reader.result as string;
        
        const response = await fetch(`${API_BASE_URL}/images/upload`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: base64String,
            filename: file.name,
            contentType: file.type,
            bucket,
          }),
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const result = await response.json();
        // Convert relative URL to absolute URL
        const imageUrl = result.url.startsWith('http') 
          ? result.url 
          : `${API_BASE_URL.replace('/api', '')}${result.url}`;
        resolve(imageUrl);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

// Image compression helper
async function compressImage(file: File): Promise<File> {
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
        
        // Resize if larger than 1080p
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
              const compressedFile = new File([blob], file.name, {
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
      
      img.onerror = () => reject(new Error('Image load failed'));
    };
    
    reader.onerror = () => reject(reader.error);
  });
}

export { compressImage };
