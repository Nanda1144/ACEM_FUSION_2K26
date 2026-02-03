import { MongoClient, Db, ObjectId } from 'mongodb';

// MongoDB Connection Configuration
const MONGODB_URI = import.meta.env.VITE_MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = import.meta.env.VITE_MONGODB_DB_NAME || 'acem_db';

let client: MongoClient | null = null;
let db: Db | null = null;

/**
 * Connect to MongoDB Atlas
 */
export async function connectToMongoDB(): Promise<Db> {
  if (db) {
    return db;
  }

  try {
    client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      minPoolSize: 5,
    });

    await client.connect();
    db = client.db(DB_NAME);

    console.log('✅ Connected to MongoDB Atlas');

    // Create indexes for better performance
    await createIndexes(db);

    return db;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB Atlas. Please check your connection string.');
  }
}

/**
 * Get MongoDB database instance
 */
export async function getDatabase(): Promise<Db> {
  if (!db) {
    return await connectToMongoDB();
  }
  return db;
}

/**
 * Close MongoDB connection
 */
export async function closeMongoDB(): Promise<void> {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log('MongoDB connection closed');
  }
}

/**
 * Create indexes for collections
 */
async function createIndexes(database: Db): Promise<void> {
  try {
    // Events collection indexes
    await database.collection('events').createIndex({ type: 1 });
    await database.collection('events').createIndex({ created_at: -1 });

    // Committee collection indexes
    await database.collection('committee').createIndex({ display_order: 1 });

    // Gallery collection indexes
    await database.collection('gallery').createIndex({ created_at: -1 });

    // Pages collection indexes
    await database.collection('pages').createIndex({ slug: 1 }, { unique: true });
    await database.collection('pages').createIndex({ display_order: 1 });
    await database.collection('pages').createIndex({ is_published: 1 });

    // Page sections collection indexes
    await database.collection('page_sections').createIndex({ page_id: 1 });
    await database.collection('page_sections').createIndex({ display_order: 1 });

    console.log('✅ Database indexes created');
  } catch (error) {
    console.error('Error creating indexes:', error);
  }
}

/**
 * Initialize database with default data
 */
export async function initializeDatabase(): Promise<void> {
  const database = await getDatabase();

  try {
    // Check if admin passkey exists
    const passkeyExists = await database.collection('admin_passkey').findOne({});
    if (!passkeyExists) {
      await database.collection('admin_passkey').insertOne({
        passkey: 'acemadmin@fusion',
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('✅ Default admin passkey created');
    }

    // Check if theme settings exist
    const themeExists = await database.collection('theme_settings').findOne({});
    if (!themeExists) {
      await database.collection('theme_settings').insertOne({
        header_title: 'ACEM',
        header_font_family: 'Inter',
        header_font_size: '2xl',
        header_text_color: '#00D9FF',
        header_bg_color: 'transparent',
        header_bg_image: null,
        nav_font_size: 'base',
        nav_text_color: '#FFFFFF',
        nav_hover_color: '#00D9FF',
        page_bg_color: '#0A0F1E',
        page_bg_image: null,
        logos: [],
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('✅ Default theme settings created');
    }

    // Check if footer settings exist
    const footerExists = await database.collection('footer_settings').findOne({});
    if (!footerExists) {
      await database.collection('footer_settings').insertOne({
        college_name: 'ACEM',
        address: '123 College Street, City, State - 123456',
        phone: '+91 1234567890',
        email: 'info@acem.edu',
        website: 'www.acem.edu',
        social_links: {
          instagram: 'https://instagram.com/acem',
          linkedin: 'https://linkedin.com/company/acem',
          facebook: 'https://facebook.com/acem',
          twitter: 'https://twitter.com/acem'
        },
        additional_info: 'All rights reserved © 2026 ACEM',
        layout_style: 'default',
        bg_color: '#0A0F1E',
        text_color: '#FFFFFF',
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('✅ Default footer settings created');
    }

    // Check if about us exists
    const aboutExists = await database.collection('about_us').findOne({});
    if (!aboutExists) {
      await database.collection('about_us').insertOne({
        content: 'Welcome to ACEM! We are dedicated to providing exceptional education and fostering innovation.',
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('✅ Default about us content created');
    }

    // Check if contact exists
    const contactExists = await database.collection('contact').findOne({});
    if (!contactExists) {
      await database.collection('contact').insertOne({
        instagram: 'https://instagram.com/acem',
        linkedin: 'https://linkedin.com/company/acem',
        whatsapp: 'https://wa.me/1234567890',
        email: 'contact@acem.edu',
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('✅ Default contact information created');
    }

    // Check if component templates exist
    const templatesExist = await database.collection('component_templates').findOne({});
    if (!templatesExist) {
      await database.collection('component_templates').insertMany([
        {
          name: 'Text Box',
          type: 'text',
          default_props: {
            content: 'Enter your text here',
            fontSize: 'base',
            fontWeight: 'normal',
            color: '#FFFFFF',
            align: 'left'
          },
          category: 'basic',
          created_at: new Date()
        },
        {
          name: 'Heading',
          type: 'heading',
          default_props: {
            content: 'Heading Text',
            level: 'h2',
            fontSize: '2xl',
            fontWeight: 'bold',
            color: '#00D9FF',
            align: 'center'
          },
          category: 'basic',
          created_at: new Date()
        },
        {
          name: 'Image',
          type: 'image',
          default_props: {
            src: '',
            alt: 'Image',
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          },
          category: 'media',
          created_at: new Date()
        },
        {
          name: 'Button',
          type: 'button',
          default_props: {
            text: 'Click Me',
            link: '#',
            variant: 'primary',
            size: 'md'
          },
          category: 'interactive',
          created_at: new Date()
        },
        {
          name: 'Card',
          type: 'card',
          default_props: {
            title: 'Card Title',
            content: 'Card content goes here',
            image: '',
            link: '#'
          },
          category: 'layout',
          created_at: new Date()
        },
        {
          name: 'Spacer',
          type: 'spacer',
          default_props: {
            height: '40px'
          },
          category: 'layout',
          created_at: new Date()
        },
        {
          name: 'Divider',
          type: 'divider',
          default_props: {
            color: '#00D9FF',
            thickness: '1px',
            style: 'solid'
          },
          category: 'layout',
          created_at: new Date()
        }
      ]);
      console.log('✅ Default component templates created');
    }

    // Create default pages if they don't exist
    const pagesExist = await database.collection('pages').findOne({});
    if (!pagesExist) {
      await database.collection('pages').insertMany([
        {
          title: 'Home',
          slug: 'home',
          content: 'Welcome to ACEM',
          is_published: true,
          display_order: 1,
          show_in_menu: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Events',
          slug: 'events',
          content: 'Our Events',
          is_published: true,
          display_order: 2,
          show_in_menu: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Committee',
          slug: 'committee',
          content: 'Our Committee',
          is_published: true,
          display_order: 3,
          show_in_menu: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Gallery',
          slug: 'gallery',
          content: 'Our Gallery',
          is_published: true,
          display_order: 4,
          show_in_menu: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'About Us',
          slug: 'about',
          content: 'About Us',
          is_published: true,
          display_order: 5,
          show_in_menu: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'Contact Us',
          slug: 'contact',
          content: 'Contact Us',
          is_published: true,
          display_order: 6,
          show_in_menu: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
      console.log('✅ Default pages created');
    }

    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

/**
 * Helper function to convert MongoDB _id to id
 */
export function convertMongoDoc<T>(doc: any): T {
  if (!doc) return doc;
  
  const { _id, ...rest } = doc;
  return {
    id: _id.toString(),
    ...rest
  } as T;
}

/**
 * Helper function to convert array of MongoDB docs
 */
export function convertMongoDocs<T>(docs: any[]): T[] {
  return docs.map(doc => convertMongoDoc<T>(doc));
}

export { ObjectId };
