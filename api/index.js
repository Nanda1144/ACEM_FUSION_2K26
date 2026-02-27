import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { getDatabase, initializeDatabase, ObjectId } from './mongodb.js';
import dotenv from 'dotenv';
dotenv.config();
dotenv.config({ path: '.env.local', override: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const configuredOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim()).filter(Boolean)
    : [];

const allowedOrigins = [
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
    'http://localhost:5173',
    'http://localhost:3000',
    ...configuredOrigins
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        // Allow server-to-server requests and same-origin browser requests (no Origin header)
        if (!origin) return callback(null, true);
        // If no explicit allowlist is configured, allow browser origins by default.
        if (configuredOrigins.length === 0) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error('CORS not allowed'));
    },
    credentials: true
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const uploadsPath = path.join(__dirname, '../public/uploads');
const uploadDir = process.env.VERCEL ? path.join('/tmp', 'uploads') : uploadsPath;

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

app.use('/uploads', express.static(uploadDir));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'));
    }
});

const upload = multer({ storage });

const formatDoc = (doc) => {
    if (!doc) return null;
    if (Array.isArray(doc)) return doc.map(formatDoc);
    const { _id, ...rest } = doc;
    return { id: _id.toString(), ...rest };
};

const sendInternalError = (res, error) => {
    console.error('API error:', error?.message || 'unknown error');
    return res.status(500).json({ error: 'Internal server error' });
};

const createCrudRoutes = (collectionName, routeName) => {
    app.get(`/api/${routeName}`, async (req, res) => {
        try {
            const db = await getDatabase();
            const items = await db.collection(collectionName).find({}).toArray();
            res.json(formatDoc(items));
        } catch (error) {
            sendInternalError(res, error);
        }
    });

    app.get(`/api/${routeName}/:id`, async (req, res) => {
        try {
            const db = await getDatabase();
            const item = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id) });
            res.json(formatDoc(item));
        } catch (error) {
            sendInternalError(res, error);
        }
    });

    app.post(`/api/${routeName}`, async (req, res) => {
        try {
            const db = await getDatabase();
            const newItem = { ...req.body, created_at: new Date(), updated_at: new Date() };
            const result = await db.collection(collectionName).insertOne(newItem);
            const inserted = await db.collection(collectionName).findOne({ _id: result.insertedId });
            res.status(201).json(formatDoc(inserted));
        } catch (error) {
            sendInternalError(res, error);
        }
    });

    app.put(`/api/${routeName}/:id`, async (req, res) => {
        try {
            const db = await getDatabase();
            const { id, _id, ...updateData } = req.body;
            updateData.updated_at = new Date();
            await db.collection(collectionName).updateOne(
                { _id: new ObjectId(req.params.id) },
                { $set: updateData }
            );
            const updated = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id) });
            res.json(formatDoc(updated));
        } catch (error) {
            sendInternalError(res, error);
        }
    });

    app.delete(`/api/${routeName}/:id`, async (req, res) => {
        try {
            const db = await getDatabase();
            await db.collection(collectionName).deleteOne({ _id: new ObjectId(req.params.id) });
            res.status(204).send();
        } catch (error) {
            sendInternalError(res, error);
        }
    });
};

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', database: 'mongodb', timestamp: new Date(), environment: process.env.VERCEL ? 'vercel' : 'local' });
});

app.post('/api/passkey/verify', async (req, res) => {
    try {
        const passkey = typeof req.body?.passkey === 'string' ? req.body.passkey.trim() : '';
        if (!passkey) {
            return res.json({ valid: false });
        }
        const db = await getDatabase();
        const result = await db.collection('admin_passkey').findOne({ passkey });
        res.json({ valid: !!result });
    } catch (error) {
        sendInternalError(res, error);
    }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const publicUrl = `/uploads/${req.file.filename}`;
    res.json({
        url: publicUrl,
        warning: process.env.VERCEL ? 'Files uploaded to Vercel are temporary and will be deleted after the function restarts.' : undefined
    });
});

const collections = [
    { col: 'events', route: 'events' },
    { col: 'committee', route: 'committee' },
    { col: 'gallery', route: 'gallery' },
    { col: 'about_us', route: 'about' },
    { col: 'contact', route: 'contact' },
    { col: 'admin_passkey', route: 'passkey' },
    { col: 'header_settings', route: 'header-settings' },
    { col: 'theme_settings', route: 'theme' },
    { col: 'pages', route: 'pages' },
    { col: 'page_sections', route: 'sections' },
    { col: 'footer_settings', route: 'footer' },
    { col: 'component_templates', route: 'templates' },
    { col: 'overall_coordinators', route: 'overall-coordinators' },
    { col: 'sponsor_logos', route: 'sponsor-logos' },
    { col: 'event_posters', route: 'event-posters' },
    { col: 'background_images', route: 'background-images' },
    { col: 'committees', route: 'committees' },
    { col: 'committee_coordinators', route: 'committee-coordinators' },
    { col: 'popup_settings', route: 'popup-settings' },
    { col: 'popup_image', route: 'popup-image' }
];

collections.forEach(({ col, route }) => createCrudRoutes(col, route));

// For local development
if (!process.env.VERCEL) {
    initializeDatabase().then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Local server running on http://localhost:${PORT}`);
        });
    });
}

// Export for Vercel
export default app;
