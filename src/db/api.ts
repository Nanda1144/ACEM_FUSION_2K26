import { getDatabase, convertMongoDoc, convertMongoDocs, ObjectId } from './mongodb';
import type { 
  Event, 
  CommitteeMember, 
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

// Events API
export const eventsApi = {
  getAll: async (): Promise<Event[]> => {
    const db = await getDatabase();
    const events = await db.collection('events')
      .find({})
      .sort({ created_at: -1 })
      .toArray();
    return convertMongoDocs<Event>(events);
  },

  getById: async (id: string): Promise<Event | null> => {
    const db = await getDatabase();
    const event = await db.collection('events').findOne({ _id: new ObjectId(id) });
    return event ? convertMongoDoc<Event>(event) : null;
  },

  getByType: async (type: 'Technical' | 'Cultural'): Promise<Event[]> => {
    const db = await getDatabase();
    const events = await db.collection('events')
      .find({ type })
      .sort({ created_at: -1 })
      .toArray();
    return convertMongoDocs<Event>(events);
  },

  create: async (event: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event> => {
    const db = await getDatabase();
    const now = new Date();
    const result = await db.collection('events').insertOne({
      ...event,
      created_at: now,
      updated_at: now
    });
    const newEvent = await db.collection('events').findOne({ _id: result.insertedId });
    return convertMongoDoc<Event>(newEvent);
  },

  update: async (id: string, event: Partial<Event>): Promise<Event> => {
    const db = await getDatabase();
    const { id: _, ...updateData } = event as any;
    await db.collection('events').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updated_at: new Date() 
        } 
      }
    );
    const updated = await db.collection('events').findOne({ _id: new ObjectId(id) });
    return convertMongoDoc<Event>(updated);
  },

  delete: async (id: string): Promise<void> => {
    const db = await getDatabase();
    await db.collection('events').deleteOne({ _id: new ObjectId(id) });
  }
};

// Committee API
export const committeeApi = {
  getAll: async (): Promise<CommitteeMember[]> => {
    const db = await getDatabase();
    const members = await db.collection('committee')
      .find({})
      .sort({ display_order: 1 })
      .toArray();
    return convertMongoDocs<CommitteeMember>(members);
  },

  create: async (member: Omit<CommitteeMember, 'id' | 'created_at' | 'updated_at'>): Promise<CommitteeMember> => {
    const db = await getDatabase();
    const now = new Date();
    const result = await db.collection('committee').insertOne({
      ...member,
      created_at: now,
      updated_at: now
    });
    const newMember = await db.collection('committee').findOne({ _id: result.insertedId });
    return convertMongoDoc<CommitteeMember>(newMember);
  },

  update: async (id: string, member: Partial<CommitteeMember>): Promise<CommitteeMember> => {
    const db = await getDatabase();
    const { id: _, ...updateData } = member as any;
    await db.collection('committee').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updated_at: new Date() 
        } 
      }
    );
    const updated = await db.collection('committee').findOne({ _id: new ObjectId(id) });
    return convertMongoDoc<CommitteeMember>(updated);
  },

  delete: async (id: string): Promise<void> => {
    const db = await getDatabase();
    await db.collection('committee').deleteOne({ _id: new ObjectId(id) });
  }
};

// Gallery API
export const galleryApi = {
  getAll: async (): Promise<GalleryImage[]> => {
    const db = await getDatabase();
    const images = await db.collection('gallery')
      .find({})
      .sort({ created_at: -1 })
      .toArray();
    return convertMongoDocs<GalleryImage>(images);
  },

  create: async (image: Omit<GalleryImage, 'id' | 'created_at'>): Promise<GalleryImage> => {
    const db = await getDatabase();
    const result = await db.collection('gallery').insertOne({
      ...image,
      created_at: new Date()
    });
    const newImage = await db.collection('gallery').findOne({ _id: result.insertedId });
    return convertMongoDoc<GalleryImage>(newImage);
  },

  delete: async (id: string): Promise<void> => {
    const db = await getDatabase();
    await db.collection('gallery').deleteOne({ _id: new ObjectId(id) });
  }
};

// About Us API
export const aboutApi = {
  get: async (): Promise<AboutUs | null> => {
    const db = await getDatabase();
    const about = await db.collection('about_us').findOne({});
    return about ? convertMongoDoc<AboutUs>(about) : null;
  },

  update: async (id: string, content: string): Promise<AboutUs> => {
    const db = await getDatabase();
    await db.collection('about_us').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          content, 
          updated_at: new Date() 
        } 
      }
    );
    const updated = await db.collection('about_us').findOne({ _id: new ObjectId(id) });
    return convertMongoDoc<AboutUs>(updated);
  }
};

// Contact API
export const contactApi = {
  get: async (): Promise<Contact | null> => {
    const db = await getDatabase();
    const contact = await db.collection('contact').findOne({});
    return contact ? convertMongoDoc<Contact>(contact) : null;
  },

  update: async (id: string, contact: Partial<Contact>): Promise<Contact> => {
    const db = await getDatabase();
    const { id: _, ...updateData } = contact as any;
    await db.collection('contact').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updated_at: new Date() 
        } 
      }
    );
    const updated = await db.collection('contact').findOne({ _id: new ObjectId(id) });
    return convertMongoDoc<Contact>(updated);
  }
};

// Admin Passkey API
export const passkeyApi = {
  verify: async (passkey: string): Promise<boolean> => {
    const db = await getDatabase();
    const result = await db.collection('admin_passkey').findOne({ passkey });
    return !!result;
  },

  update: async (id: string, newPasskey: string): Promise<void> => {
    const db = await getDatabase();
    await db.collection('admin_passkey').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          passkey: newPasskey, 
          updated_at: new Date() 
        } 
      }
    );
  },

  get: async (): Promise<AdminPasskey | null> => {
    const db = await getDatabase();
    const passkey = await db.collection('admin_passkey').findOne({});
    return passkey ? convertMongoDoc<AdminPasskey>(passkey) : null;
  }
};

// Theme Settings API
export const themeSettingsApi = {
  get: async (): Promise<ThemeSettings | null> => {
    const db = await getDatabase();
    const settings = await db.collection('theme_settings').findOne({});
    return settings ? convertMongoDoc<ThemeSettings>(settings) : null;
  },

  update: async (id: string, settings: Partial<ThemeSettings>): Promise<ThemeSettings> => {
    const db = await getDatabase();
    const { id: _, ...updateData } = settings as any;
    await db.collection('theme_settings').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updated_at: new Date() 
        } 
      }
    );
    const updated = await db.collection('theme_settings').findOne({ _id: new ObjectId(id) });
    return convertMongoDoc<ThemeSettings>(updated);
  }
};

// Pages API
export const pagesApi = {
  getAll: async (): Promise<Page[]> => {
    const db = await getDatabase();
    const pages = await db.collection('pages')
      .find({})
      .sort({ display_order: 1 })
      .toArray();
    return convertMongoDocs<Page>(pages);
  },

  getPublished: async (): Promise<Page[]> => {
    const db = await getDatabase();
    const pages = await db.collection('pages')
      .find({ is_published: true, show_in_menu: true })
      .sort({ display_order: 1 })
      .toArray();
    return convertMongoDocs<Page>(pages);
  },

  getBySlug: async (slug: string): Promise<Page | null> => {
    const db = await getDatabase();
    const page = await db.collection('pages').findOne({ slug });
    return page ? convertMongoDoc<Page>(page) : null;
  },

  create: async (page: Omit<Page, 'id' | 'created_at' | 'updated_at'>): Promise<Page> => {
    const db = await getDatabase();
    const now = new Date();
    const result = await db.collection('pages').insertOne({
      ...page,
      created_at: now,
      updated_at: now
    });
    const newPage = await db.collection('pages').findOne({ _id: result.insertedId });
    return convertMongoDoc<Page>(newPage);
  },

  update: async (id: string, page: Partial<Page>): Promise<Page> => {
    const db = await getDatabase();
    const { id: _, ...updateData } = page as any;
    await db.collection('pages').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updated_at: new Date() 
        } 
      }
    );
    const updated = await db.collection('pages').findOne({ _id: new ObjectId(id) });
    return convertMongoDoc<Page>(updated);
  },

  delete: async (id: string): Promise<void> => {
    const db = await getDatabase();
    await db.collection('pages').deleteOne({ _id: new ObjectId(id) });
  }
};

// Page Sections API
export const pageSectionsApi = {
  getByPageId: async (pageId: string): Promise<PageSection[]> => {
    const db = await getDatabase();
    const sections = await db.collection('page_sections')
      .find({ page_id: pageId })
      .sort({ display_order: 1 })
      .toArray();
    return convertMongoDocs<PageSection>(sections);
  },

  create: async (section: Omit<PageSection, 'id' | 'created_at' | 'updated_at'>): Promise<PageSection> => {
    const db = await getDatabase();
    const now = new Date();
    const result = await db.collection('page_sections').insertOne({
      ...section,
      created_at: now,
      updated_at: now
    });
    const newSection = await db.collection('page_sections').findOne({ _id: result.insertedId });
    return convertMongoDoc<PageSection>(newSection);
  },

  update: async (id: string, section: Partial<PageSection>): Promise<PageSection> => {
    const db = await getDatabase();
    const { id: _, ...updateData } = section as any;
    await db.collection('page_sections').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updated_at: new Date() 
        } 
      }
    );
    const updated = await db.collection('page_sections').findOne({ _id: new ObjectId(id) });
    return convertMongoDoc<PageSection>(updated);
  },

  delete: async (id: string): Promise<void> => {
    const db = await getDatabase();
    await db.collection('page_sections').deleteOne({ _id: new ObjectId(id) });
  }
};

// Footer Settings API
export const footerSettingsApi = {
  get: async (): Promise<FooterSettings | null> => {
    const db = await getDatabase();
    const settings = await db.collection('footer_settings').findOne({});
    return settings ? convertMongoDoc<FooterSettings>(settings) : null;
  },

  update: async (id: string, settings: Partial<FooterSettings>): Promise<FooterSettings> => {
    const db = await getDatabase();
    const { id: _, ...updateData } = settings as any;
    await db.collection('footer_settings').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          ...updateData, 
          updated_at: new Date() 
        } 
      }
    );
    const updated = await db.collection('footer_settings').findOne({ _id: new ObjectId(id) });
    return convertMongoDoc<FooterSettings>(updated);
  }
};

// Component Templates API
export const componentTemplatesApi = {
  getAll: async (): Promise<ComponentTemplate[]> => {
    const db = await getDatabase();
    const templates = await db.collection('component_templates')
      .find({})
      .sort({ category: 1 })
      .toArray();
    return convertMongoDocs<ComponentTemplate>(templates);
  },

  getByCategory: async (category: string): Promise<ComponentTemplate[]> => {
    const db = await getDatabase();
    const templates = await db.collection('component_templates')
      .find({ category })
      .toArray();
    return convertMongoDocs<ComponentTemplate>(templates);
  }
};

// Image Upload Helper (using base64 storage in MongoDB)
export async function uploadImage(file: File, bucket: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async () => {
      try {
        const base64String = reader.result as string;
        const db = await getDatabase();
        
        // Store image in MongoDB
        const result = await db.collection('images').insertOne({
          bucket,
          filename: file.name,
          contentType: file.type,
          size: file.size,
          data: base64String,
          created_at: new Date()
        });
        
        // Return a reference URL
        const imageUrl = `/api/images/${result.insertedId}`;
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
