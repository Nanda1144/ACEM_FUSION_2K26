const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// MongoDB Connection
let db = null;
let client = null;

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.VITE_MONGODB_URI || process.env.MONGODB_URI;
    const DB_NAME = process.env.VITE_MONGODB_DB_NAME || process.env.MONGODB_DB_NAME || 'acem_db';

    if (!MONGODB_URI) {
      throw new Error('MongoDB URI not found in environment variables');
    }

    client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      minPoolSize: 5,
    });

    await client.connect();
    db = client.db(DB_NAME);

    console.log('✅ Connected to MongoDB Atlas');

    // Create indexes
    await createIndexes();
    
    // Initialize default data
    await initializeDefaultData();

    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
};

// Create indexes
async function createIndexes() {
  try {
    await db.collection('events').createIndex({ type: 1 });
    await db.collection('events').createIndex({ created_at: -1 });
    await db.collection('committee').createIndex({ display_order: 1 });
    await db.collection('gallery').createIndex({ created_at: -1 });
    await db.collection('pages').createIndex({ slug: 1 }, { unique: true });
    await db.collection('pages').createIndex({ display_order: 1 });
    await db.collection('pages').createIndex({ is_published: 1 });
    await db.collection('page_sections').createIndex({ page_id: 1 });
    await db.collection('page_sections').createIndex({ display_order: 1 });
    console.log('✅ Database indexes created');
  } catch (error) {
    console.error('Error creating indexes:', error);
  }
}

// Initialize default data
async function initializeDefaultData() {
  try {
    // Admin passkey
    const passkeyExists = await db.collection('admin_passkey').findOne({});
    if (!passkeyExists) {
      await db.collection('admin_passkey').insertOne({
        passkey: 'acemadmin@fusion',
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('✅ Default admin passkey created');
    }

    // Theme settings
    const themeExists = await db.collection('theme_settings').findOne({});
    if (!themeExists) {
      await db.collection('theme_settings').insertOne({
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

    // Footer settings
    const footerExists = await db.collection('footer_settings').findOne({});
    if (!footerExists) {
      await db.collection('footer_settings').insertOne({
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

    // About us
    const aboutExists = await db.collection('about_us').findOne({});
    if (!aboutExists) {
      await db.collection('about_us').insertOne({
        content: 'Welcome to ACEM! We are dedicated to providing exceptional education and fostering innovation.',
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('✅ Default about us content created');
    }

    // Contact
    const contactExists = await db.collection('contact').findOne({});
    if (!contactExists) {
      await db.collection('contact').insertOne({
        instagram: 'https://instagram.com/acem',
        linkedin: 'https://linkedin.com/company/acem',
        whatsapp: 'https://wa.me/1234567890',
        email: 'contact@acem.edu',
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('✅ Default contact information created');
    }

    // Component templates
    const templatesExist = await db.collection('component_templates').findOne({});
    if (!templatesExist) {
      await db.collection('component_templates').insertMany([
        {
          name: 'Text Box',
          type: 'text',
          default_props: { content: 'Enter your text here', fontSize: 'base', fontWeight: 'normal', color: '#FFFFFF', align: 'left' },
          category: 'basic',
          created_at: new Date()
        },
        {
          name: 'Heading',
          type: 'heading',
          default_props: { content: 'Heading Text', level: 'h2', fontSize: '2xl', fontWeight: 'bold', color: '#00D9FF', align: 'center' },
          category: 'basic',
          created_at: new Date()
        },
        {
          name: 'Image',
          type: 'image',
          default_props: { src: '', alt: 'Image', width: '100%', height: 'auto', objectFit: 'cover' },
          category: 'media',
          created_at: new Date()
        },
        {
          name: 'Button',
          type: 'button',
          default_props: { text: 'Click Me', link: '#', variant: 'primary', size: 'md' },
          category: 'interactive',
          created_at: new Date()
        }
      ]);
      console.log('✅ Default component templates created');
    }

    // Pages
    const pagesExist = await db.collection('pages').findOne({});
    if (!pagesExist) {
      await db.collection('pages').insertMany([
        { title: 'Home', slug: 'home', content: 'Welcome to ACEM', is_published: true, display_order: 1, show_in_menu: true, created_at: new Date(), updated_at: new Date() },
        { title: 'Events', slug: 'events', content: 'Our Events', is_published: true, display_order: 2, show_in_menu: true, created_at: new Date(), updated_at: new Date() },
        { title: 'Committee', slug: 'committee', content: 'Our Committee', is_published: true, display_order: 3, show_in_menu: true, created_at: new Date(), updated_at: new Date() },
        { title: 'Gallery', slug: 'gallery', content: 'Our Gallery', is_published: true, display_order: 4, show_in_menu: true, created_at: new Date(), updated_at: new Date() },
        { title: 'About Us', slug: 'about', content: 'About Us', is_published: true, display_order: 5, show_in_menu: true, created_at: new Date(), updated_at: new Date() },
        { title: 'Contact Us', slug: 'contact', content: 'Contact Us', is_published: true, display_order: 6, show_in_menu: true, created_at: new Date(), updated_at: new Date() }
      ]);
      console.log('✅ Default pages created');
    }
  } catch (error) {
    console.error('Error initializing default data:', error);
  }
}

// Helper function to convert MongoDB _id to id
function convertDoc(doc) {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return { id: _id.toString(), ...rest };
}

function convertDocs(docs) {
  return docs.map(convertDoc);
}

// ==================== API ROUTES ====================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Events API
app.get('/api/events', async (req, res) => {
  try {
    const { type } = req.query;
    const query = type ? { type } : {};
    const events = await db.collection('events').find(query).sort({ created_at: -1 }).toArray();
    res.json(convertDocs(events));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/events/:id', async (req, res) => {
  try {
    const event = await db.collection('events').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(event));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/events', async (req, res) => {
  try {
    const now = new Date();
    const result = await db.collection('events').insertOne({ ...req.body, created_at: now, updated_at: now });
    const event = await db.collection('events').findOne({ _id: result.insertedId });
    res.json(convertDoc(event));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/events/:id', async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    await db.collection('events').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...updateData, updated_at: new Date() } }
    );
    const event = await db.collection('events').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(event));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/events/:id', async (req, res) => {
  try {
    await db.collection('events').deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Committee API
app.get('/api/committee', async (req, res) => {
  try {
    const members = await db.collection('committee').find({}).sort({ display_order: 1 }).toArray();
    res.json(convertDocs(members));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/committee', async (req, res) => {
  try {
    const now = new Date();
    const result = await db.collection('committee').insertOne({ ...req.body, created_at: now, updated_at: now });
    const member = await db.collection('committee').findOne({ _id: result.insertedId });
    res.json(convertDoc(member));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/committee/:id', async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    await db.collection('committee').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...updateData, updated_at: new Date() } }
    );
    const member = await db.collection('committee').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(member));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/committee/:id', async (req, res) => {
  try {
    await db.collection('committee').deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Gallery API
app.get('/api/gallery', async (req, res) => {
  try {
    const images = await db.collection('gallery').find({}).sort({ created_at: -1 }).toArray();
    res.json(convertDocs(images));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/gallery', async (req, res) => {
  try {
    const result = await db.collection('gallery').insertOne({ ...req.body, created_at: new Date() });
    const image = await db.collection('gallery').findOne({ _id: result.insertedId });
    res.json(convertDoc(image));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/gallery/:id', async (req, res) => {
  try {
    await db.collection('gallery').deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// About Us API
app.get('/api/about', async (req, res) => {
  try {
    const about = await db.collection('about_us').findOne({});
    res.json(convertDoc(about));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/about/:id', async (req, res) => {
  try {
    await db.collection('about_us').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { content: req.body.content, updated_at: new Date() } }
    );
    const about = await db.collection('about_us').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(about));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Contact API
app.get('/api/contact', async (req, res) => {
  try {
    const contact = await db.collection('contact').findOne({});
    res.json(convertDoc(contact));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/contact/:id', async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    await db.collection('contact').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...updateData, updated_at: new Date() } }
    );
    const contact = await db.collection('contact').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(contact));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Passkey API
app.post('/api/passkey/verify', async (req, res) => {
  try {
    const { passkey } = req.body;
    const result = await db.collection('admin_passkey').findOne({ passkey });
    res.json({ valid: !!result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/passkey', async (req, res) => {
  try {
    const passkey = await db.collection('admin_passkey').findOne({});
    res.json(convertDoc(passkey));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/passkey/:id', async (req, res) => {
  try {
    await db.collection('admin_passkey').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { passkey: req.body.passkey, updated_at: new Date() } }
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Theme Settings API
app.get('/api/theme', async (req, res) => {
  try {
    const theme = await db.collection('theme_settings').findOne({});
    res.json(convertDoc(theme));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/theme/:id', async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    await db.collection('theme_settings').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...updateData, updated_at: new Date() } }
    );
    const theme = await db.collection('theme_settings').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(theme));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Pages API
app.get('/api/pages', async (req, res) => {
  try {
    const { published } = req.query;
    const query = published === 'true' ? { is_published: true, show_in_menu: true } : {};
    const pages = await db.collection('pages').find(query).sort({ display_order: 1 }).toArray();
    res.json(convertDocs(pages));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/pages/slug/:slug', async (req, res) => {
  try {
    const page = await db.collection('pages').findOne({ slug: req.params.slug });
    res.json(convertDoc(page));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/pages', async (req, res) => {
  try {
    const now = new Date();
    const result = await db.collection('pages').insertOne({ ...req.body, created_at: now, updated_at: now });
    const page = await db.collection('pages').findOne({ _id: result.insertedId });
    res.json(convertDoc(page));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/pages/:id', async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    await db.collection('pages').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...updateData, updated_at: new Date() } }
    );
    const page = await db.collection('pages').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(page));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/pages/:id', async (req, res) => {
  try {
    await db.collection('pages').deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Page Sections API
app.get('/api/page-sections/:pageId', async (req, res) => {
  try {
    const sections = await db.collection('page_sections').find({ page_id: req.params.pageId }).sort({ display_order: 1 }).toArray();
    res.json(convertDocs(sections));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/page-sections', async (req, res) => {
  try {
    const now = new Date();
    const result = await db.collection('page_sections').insertOne({ ...req.body, created_at: now, updated_at: now });
    const section = await db.collection('page_sections').findOne({ _id: result.insertedId });
    res.json(convertDoc(section));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/page-sections/:id', async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    await db.collection('page_sections').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...updateData, updated_at: new Date() } }
    );
    const section = await db.collection('page_sections').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(section));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/page-sections/:id', async (req, res) => {
  try {
    await db.collection('page_sections').deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Footer Settings API
app.get('/api/footer', async (req, res) => {
  try {
    const footer = await db.collection('footer_settings').findOne({});
    res.json(convertDoc(footer));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/footer/:id', async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    await db.collection('footer_settings').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...updateData, updated_at: new Date() } }
    );
    const footer = await db.collection('footer_settings').findOne({ _id: new ObjectId(req.params.id) });
    res.json(convertDoc(footer));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Component Templates API
app.get('/api/component-templates', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const templates = await db.collection('component_templates').find(query).sort({ category: 1 }).toArray();
    res.json(convertDocs(templates));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Image Upload API
app.post('/api/images/upload', async (req, res) => {
  try {
    const { data, filename, contentType, bucket } = req.body;
    const result = await db.collection('images').insertOne({
      bucket,
      filename,
      contentType,
      data,
      created_at: new Date()
    });
    const imageUrl = `/api/images/${result.insertedId}`;
    res.json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/images/:id', async (req, res) => {
  try {
    const image = await db.collection('images').findOne({ _id: new ObjectId(req.params.id) });
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.set('Content-Type', image.contentType);
    const base64Data = image.data.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 API available at http://localhost:${PORT}/api`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down gracefully...');
  if (client) {
    await client.close();
  }
  process.exit(0);
});
