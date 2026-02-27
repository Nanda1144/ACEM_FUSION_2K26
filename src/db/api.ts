import axios from 'axios';
import type {
  Event,
  CommitteeMember,
  Contact,
  HeaderSettings,
  ThemeSettings,
  Page,
  PageSection,
  FooterSettings,
  PopupSettings,
} from '@/types/index';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

type CacheEntry = {
  data: any;
  expiresAt: number;
};

const GET_CACHE_TTL_MS = 5000;
const getCache = new Map<string, CacheEntry>();
const inFlightGets = new Map<string, Promise<any>>();

api.interceptors.request.use((config) => {
  const method = (config.method || 'get').toLowerCase();
  if (method !== 'get') {
    getCache.clear();
    inFlightGets.clear();
  }
  return config;
});

const getCached = async (url: string) => {
  const now = Date.now();
  const cached = getCache.get(url);

  if (cached && cached.expiresAt > now) {
    return cached.data;
  }

  const activeRequest = inFlightGets.get(url);
  if (activeRequest) {
    return activeRequest;
  }

  const request = api
    .get(url)
    .then(({ data }) => {
      getCache.set(url, { data, expiresAt: now + GET_CACHE_TTL_MS });
      return data;
    })
    .finally(() => {
      inFlightGets.delete(url);
    });

  inFlightGets.set(url, request);
  return request;
};

// Events API
export const eventsApi = {
  getAll: async () => {
    const data = await getCached('/events');
    return data;
  },

  getById: async (id: string) => {
    const data = await getCached(`/events/${id}`);
    return data;
  },

  getByType: async (type: 'Technical' | 'Cultural') => {
    const data = await getCached('/events');
    return data.filter((e: Event) => e.type === type);
  },

  create: async (event: Omit<Event, 'id' | 'created_at' | 'updated_at'>) => {
    const { data } = await api.post('/events', event);
    return data;
  },

  update: async (id: string, event: Partial<Event>) => {
    const { data } = await api.put(`/events/${id}`, event);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/events/${id}`);
  }
};

// Committee API
export const committeeApi = {
  getAll: async () => {
    const data = await getCached('/committee');
    return data;
  },

  create: async (member: Omit<CommitteeMember, 'id' | 'created_at' | 'updated_at'>) => {
    const { data } = await api.post('/committee', member);
    return data;
  },

  update: async (id: string, member: Partial<CommitteeMember>) => {
    const { data } = await api.put(`/committee/${id}`, member);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/committee/${id}`);
  }
};

// Gallery API
export const galleryApi = {
  getAll: async () => {
    const data = await getCached('/gallery');
    return data;
  },

  create: async (image_url: string) => {
    const { data } = await api.post('/gallery', { image_url });
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/gallery/${id}`);
  }
};

// About Us API
export const aboutUsApi = {
  get: async () => {
    const data = await getCached('/about');
    return data[0] || null;
  },

  update: async (id: string, content: string) => {
    const { data } = await api.put(`/about/${id}`, { content });
    return data;
  }
};

// Contact API
export const contactApi = {
  get: async () => {
    const data = await getCached('/contact');
    return data[0] || null;
  },

  update: async (id: string, contact: Partial<Contact>) => {
    const { data } = await api.put(`/contact/${id}`, contact);
    return data;
  }
};

// Admin Passkey API
export const passkeyApi = {
  get: async () => {
    const data = await getCached('/passkey');
    return data[0] || null;
  },

  validate: async (passkey: string) => {
    const { data } = await api.post('/passkey/verify', { passkey });
    return data.valid;
  },

  update: async (id: string, newPasskey: string) => {
    const { data } = await api.put(`/passkey/${id}`, { passkey: newPasskey });
    return data;
  }
};

// Header Settings API
export const headerSettingsApi = {
  get: async () => {
    const data = await getCached('/header-settings');
    return data[0] || null;
  },

  update: async (id: string, settings: Partial<HeaderSettings>) => {
    const { data } = await api.put(`/header-settings/${id}`, settings);
    return data;
  }
};

// Theme Settings API
export const themeSettingsApi = {
  get: async () => {
    const data = await getCached('/theme');
    return data[0] || null;
  },

  update: async (id: string, settings: Partial<ThemeSettings>) => {
    const { data } = await api.put(`/theme/${id}`, settings);
    return data;
  }
};

// Pages API
export const pagesApi = {
  getAll: async () => {
    const data = await getCached('/pages');
    return data;
  },

  getBySlug: async (slug: string) => {
    const data = await getCached('/pages');
    return data.find((p: Page) => p.slug === slug) || null;
  },

  create: async (page: Omit<Page, 'id' | 'created_at' | 'updated_at'>) => {
    const { data } = await api.post('/pages', page);
    return data;
  },

  update: async (id: string, page: Partial<Page>) => {
    const { data } = await api.put(`/pages/${id}`, page);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/pages/${id}`);
  }
};

// Page Sections API
export const pageSectionsApi = {
  getByPageId: async (pageId: string) => {
    const data = await getCached('/sections');
    return data.filter((s: PageSection) => s.page_id === pageId);
  },

  create: async (section: Omit<PageSection, 'id' | 'created_at' | 'updated_at'>) => {
    const { data } = await api.post('/sections', section);
    return data;
  },

  update: async (id: string, section: Partial<PageSection>) => {
    const { data } = await api.put(`/sections/${id}`, section);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/sections/${id}`);
  }
};

// Footer Settings API
export const footerSettingsApi = {
  get: async () => {
    const data = await getCached('/footer');
    return data[0] || null;
  },

  update: async (id: string, settings: Partial<FooterSettings>) => {
    const { data } = await api.put(`/footer/${id}`, settings);
    return data;
  }
};

// Component Templates API
export const componentTemplatesApi = {
  getAll: async () => {
    const data = await getCached('/templates');
    return data;
  },

  getByCategory: async (category: string) => {
    const data = await getCached('/templates');
    return data.filter((t: any) => t.category === category);
  }
};

// Image Upload Helper
export const uploadImage = async (
  file: File,
  _bucket?: string
): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const { data } = await api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  // If the returned url is relative, prepend the API base URL (excluding /api part if present)
  if (data.url && data.url.startsWith('/')) {
    const baseUrl = API_URL.endsWith('/api') ? API_URL.slice(0, -4) : API_URL;
    return `${baseUrl}${data.url}`;
  }

  return data.url;
};

// Event Posters API
export const eventPostersApi = {
  getAll: async () => {
    const data = await getCached('/event-posters');
    return data;
  },

  create: async (poster: { image_url: string; display_order: number; scroll_duration?: number }) => {
    const { data } = await api.post('/event-posters', poster);
    return data;
  },

  update: async (id: string, poster: { image_url?: string; display_order?: number; scroll_duration?: number }) => {
    const { data } = await api.put(`/event-posters/${id}`, poster);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/event-posters/${id}`);
  }
};

// Background Images API
export const backgroundImagesApi = {
  getAll: async () => {
    const data = await getCached('/background-images');
    return data;
  },

  create: async (image: { image_url: string; display_order: number; display_duration?: number }) => {
    const { data } = await api.post('/background-images', image);
    return data;
  },

  update: async (id: string, image: { image_url?: string; display_order?: number; display_duration?: number }) => {
    const { data } = await api.put(`/background-images/${id}`, image);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/background-images/${id}`);
  }
};

// Overall Coordinators API
export const overallCoordinatorsApi = {
  getAll: async () => {
    const data = await getCached('/overall-coordinators');
    return data;
  },

  getByType: async (type: 'staff' | 'student') => {
    const data = await getCached('/overall-coordinators');
    return data.filter((c: any) => c.type === type);
  },

  getByEventType: async (eventType: 'Technical' | 'Cultural') => {
    const data = await getCached('/overall-coordinators');
    return data.filter((c: any) => c.event_type === eventType || c.event_type === 'Both');
  },

  create: async (coordinator: any) => {
    const { data } = await api.post('/overall-coordinators', coordinator);
    return data;
  },

  update: async (id: string, coordinator: any) => {
    const { data } = await api.put(`/overall-coordinators/${id}`, coordinator);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/overall-coordinators/${id}`);
  }
};

// Committees API (new groups-based system)
export const committeesApi = {
  getAll: async () => {
    const data = await getCached('/committees');
    return data;
  },

  getById: async (id: string) => {
    const data = await getCached(`/committees/${id}`);
    return data;
  },

  create: async (committee: any) => {
    const { data } = await api.post('/committees', committee);
    return data;
  },

  update: async (id: string, committee: any) => {
    const { data } = await api.put(`/committees/${id}`, committee);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/committees/${id}`);
  }
};

// Committee Coordinators API
export const committeeCoordinatorsApi = {
  getAll: async () => {
    const data = await getCached('/committee-coordinators');
    return data;
  },

  getByCommittee: async (committeeId: string) => {
    const data = await getCached('/committee-coordinators');
    return data.filter((c: any) => c.committee_id === committeeId);
  },

  create: async (coordinator: any) => {
    const { data } = await api.post('/committee-coordinators', coordinator);
    return data;
  },

  update: async (id: string, coordinator: any) => {
    const { data } = await api.put(`/committee-coordinators/${id}`, coordinator);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/committee-coordinators/${id}`);
  }
};

// Popup Settings API
export const popupSettingsApi = {
  get: async () => {
    const data = await getCached('/popup-settings');
    return data[0] || null;
  },

  update: async (id: string, settings: Partial<PopupSettings>) => {
    const { data } = await api.put(`/popup-settings/${id}`, settings);
    return data;
  },

  upsert: async (settings: Partial<PopupSettings>) => {
    const existing = await popupSettingsApi.get();
    if (existing) {
      return await popupSettingsApi.update(existing.id, settings);
    } else {
      const { data } = await api.post('/popup-settings', settings);
      return data;
    }
  }
};

// Sponsor Logos API
export const sponsorLogosApi = {
  getAll: async () => {
    const data = await getCached('/sponsor-logos');
    return data;
  },

  create: async (logo: { image_url: string; order_number: number; shape?: 'semi-square' | 'round' }) => {
    const { data } = await api.post('/sponsor-logos', logo);
    return data;
  },

  update: async (id: string, logo: { image_url?: string; order_number?: number; shape?: 'semi-square' | 'round' }) => {
    const { data } = await api.put(`/sponsor-logos/${id}`, logo);
    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/sponsor-logos/${id}`);
  }
};

// Popup Image API
export const popupImageApi = {
  get: async () => {
    const data = await getCached('/popup-image');
    return data && data.length > 0 ? data.find((p: any) => p.is_enabled) : null;
  },

  getForAdmin: async () => {
    const data = await getCached('/popup-image');
    return data && data.length > 0 ? data[0] : null;
  },

  upsert: async (popup: { image_url: string; duration: number; is_enabled: boolean }) => {
    const existing = await popupImageApi.getForAdmin();
    if (existing) {
      const { data } = await api.put(`/popup-image/${existing.id}`, popup);
      return data;
    } else {
      const { data } = await api.post('/popup-image', popup);
      return data;
    }
  },

  delete: async () => {
    // In our simplified generic CRUD, we might need a specific delete all or just delete by ID
    const existing = await popupImageApi.getForAdmin();
    if (existing) {
      await api.delete(`/popup-image/${existing.id}`);
    }
  }
};

// Image Compression Helper (kept for frontend side)
export const compressImage = async (file: File): Promise<File> => {
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

