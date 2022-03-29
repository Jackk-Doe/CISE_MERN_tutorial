const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI');

console.log('Entering connectDB');

/// Start DB connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

console.log('Exiting connectDB');

module.exports = connectDB;