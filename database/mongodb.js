// database/mongodb.js
const mongoose = require('mongoose');
const { DB_URI, NODE_ENV } = require('../config/env');

if (!DB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.<development/production>.local'
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV}`);
  } catch (e) {
    console.error('Error connecting to database', e);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
