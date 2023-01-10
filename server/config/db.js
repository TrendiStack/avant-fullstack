const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set('strictQuery', true);
  const connect = await mongoose.connect(process.env.MONGO_URI);
  console.log(
    `MongoDB Connected: ${connect.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
