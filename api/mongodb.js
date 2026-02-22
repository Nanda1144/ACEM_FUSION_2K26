import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
dotenv.config({ path: '.env.local', override: true });

// MongoDB Connection Configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB_NAME || 'acem_db';

let client = null;
let db = null;
let isInitialized = false;

/**
 * Connect to MongoDB Atlas
 */
async function connectToMongoDB() {
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

        // Auto-initialize if not done yet
        if (!isInitialized) {
            await initializeDatabase(db);
            isInitialized = true;
        }

        return db;
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw new Error('Failed to connect to MongoDB Atlas. Please check your connection string.');
    }
}

/**
 * Get MongoDB database instance
 */
async function getDatabase() {
    if (!db) {
        return await connectToMongoDB();
    }
    return db;
}

/**
 * Close MongoDB connection
 */
async function closeMongoDB() {
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
async function createIndexes(providedDb) {
    try {
        const database = providedDb || await getDatabase();
        if (!database) return;

        await database.collection('events').createIndex({ type: 1 });
        await database.collection('events').createIndex({ created_at: -1 });
        await database.collection('committee').createIndex({ display_order: 1 });
        await database.collection('gallery').createIndex({ created_at: -1 });
        await database.collection('pages').createIndex({ slug: 1 }, { unique: true });
        await database.collection('pages').createIndex({ display_order: 1 });
        await database.collection('pages').createIndex({ is_published: 1 });
        await database.collection('page_sections').createIndex({ page_id: 1 });
        await database.collection('page_sections').createIndex({ display_order: 1 });
        await database.collection('sponsor_logos').createIndex({ order_number: 1 });
        console.log('✅ Database indexes verified');
    } catch (error) {
        console.error('Error creating indexes:', error);
    }
}

/**
 * Initialize database with default data
 */
async function initializeDatabase(providedDb) {
    try {
        const database = providedDb || await getDatabase();
        if (!database) return;

        const passkeyExists = await database.collection('admin_passkey').findOne({});
        if (!passkeyExists) {
            await database.collection('admin_passkey').insertOne({
                passkey: 'acemadmin@fusion',
                created_at: new Date(),
                updated_at: new Date()
            });
            console.log('✅ Default admin passkey created');
        }

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
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

export {
    connectToMongoDB,
    getDatabase,
    closeMongoDB,
    initializeDatabase,
    ObjectId
};
