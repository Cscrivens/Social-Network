const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/social-network');
        console.log('MongoDB Connected');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
      }
    };
    

module.exports = connectDB;
