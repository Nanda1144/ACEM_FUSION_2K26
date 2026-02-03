// Database Diagnostic and Fix Script
const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || process.env.VITE_MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB_NAME || process.env.VITE_MONGODB_DB_NAME || 'acem_db';

async function runDiagnostic() {
  console.log('🔍 Running Database Diagnostic...\n');
  
  // Check environment variables
  console.log('1. Checking Environment Variables');
  console.log('   --------------------------------');
  if (!MONGODB_URI) {
    console.log('   ❌ MONGODB_URI not found in .env file');
    console.log('   Please add your MongoDB connection string to .env file\n');
    process.exit(1);
  }
  console.log('   ✅ MONGODB_URI found');
  console.log(`   ✅ Database name: ${DB_NAME}\n`);

  let client;
  try {
    // Test connection
    console.log('2. Testing MongoDB Connection');
    console.log('   ---------------------------');
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log('   ✅ Successfully connected to MongoDB Atlas\n');

    const db = client.db(DB_NAME);

    // Check collections
    console.log('3. Checking Collections');
    console.log('   --------------------');
    const collections = await db.listCollections().toArray();
    console.log(`   Found ${collections.length} collections:`);
    collections.forEach(col => {
      console.log(`   - ${col.name}`);
    });
    console.log('');

    // Check admin passkey
    console.log('4. Checking Admin Passkey');
    console.log('   ----------------------');
    const passkeyDoc = await db.collection('admin_passkey').findOne({});
    if (passkeyDoc) {
      console.log('   ✅ Admin passkey found');
      console.log(`   Passkey: ${passkeyDoc.passkey}`);
      console.log(`   ID: ${passkeyDoc._id}\n`);
      
      // Verify default passkey
      if (passkeyDoc.passkey === 'acemadmin@fusion') {
        console.log('   ✅ Default passkey is correct!\n');
      } else {
        console.log('   ⚠️  Passkey is not the default value');
        console.log('   Default should be: acemadmin@fusion');
        console.log('   Current value: ' + passkeyDoc.passkey);
        console.log('\n   Do you want to reset it to default? (y/n)');
      }
    } else {
      console.log('   ❌ Admin passkey NOT found');
      console.log('   Creating default passkey...');
      await db.collection('admin_passkey').insertOne({
        passkey: 'acemadmin@fusion',
        created_at: new Date(),
        updated_at: new Date()
      });
      console.log('   ✅ Default passkey created: acemadmin@fusion\n');
    }

    // Check theme settings
    console.log('5. Checking Theme Settings');
    console.log('   -----------------------');
    const themeDoc = await db.collection('theme_settings').findOne({});
    if (themeDoc) {
      console.log('   ✅ Theme settings found');
      console.log(`   Header title: ${themeDoc.header_title}\n`);
    } else {
      console.log('   ⚠️  Theme settings not found');
      console.log('   Run the backend server to initialize default data\n');
    }

    // Check events
    console.log('6. Checking Events');
    console.log('   ---------------');
    const eventCount = await db.collection('events').countDocuments();
    console.log(`   Found ${eventCount} events\n`);

    // Check committee
    console.log('7. Checking Committee');
    console.log('   ------------------');
    const committeeCount = await db.collection('committee').countDocuments();
    console.log(`   Found ${committeeCount} committee members\n`);

    // Check gallery
    console.log('8. Checking Gallery');
    console.log('   ----------------');
    const galleryCount = await db.collection('gallery').countDocuments();
    console.log(`   Found ${galleryCount} gallery images\n`);

    console.log('✅ Diagnostic Complete!\n');
    console.log('Summary:');
    console.log('--------');
    console.log(`✅ MongoDB connection: Working`);
    console.log(`✅ Database: ${DB_NAME}`);
    console.log(`✅ Collections: ${collections.length}`);
    console.log(`✅ Admin passkey: ${passkeyDoc ? 'Found' : 'Created'}`);
    console.log(`✅ Events: ${eventCount}`);
    console.log(`✅ Committee: ${committeeCount}`);
    console.log(`✅ Gallery: ${galleryCount}\n`);

    console.log('Next Steps:');
    console.log('-----------');
    console.log('1. Start the backend server: npm run server');
    console.log('2. Start the frontend: npm run client');
    console.log('3. Open http://localhost:5173');
    console.log('4. Click chatbot and enter passkey: acemadmin@fusion\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error('\nTroubleshooting:');
    console.error('1. Check your MongoDB connection string in .env');
    console.error('2. Verify your MongoDB Atlas cluster is running');
    console.error('3. Check network access (IP 0.0.0.0/0 should be whitelisted)');
    console.error('4. Verify database user credentials are correct\n');
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

// Run diagnostic
runDiagnostic().catch(console.error);
