const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function dbconnection() {
    try {
        await client.connect();
        console.log('✅ MongoDB Connected Successfully');
        return client.db().collection('user_details'); // Corrected the spelling
    } catch (err) {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1);
    }
}

module.exports = dbconnection;
