const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const colors = require('colors');

const app = express();
const port = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get('/', (req, res) => res.send('API Running'));

// Define Routes

// Authentication
app.use('/api/auth', require('./routers/userRouter'));

// Users
// app.use('/api/users', require('../routers/users'));

// Categories
app.use('/api/categories', require('./routers/categoriesRouter'));

// Products
app.use('/api/products', require('./routers/productsRouter'));

// Collections
app.use('/api/collections', require('./routers/collectionRouter'));

// Reviews
app.use('/api/reviews', require('./routers/reviewsRouter'));

// Payments
app.use('/api/payment', require('./routers/stripeRouter'));

app.listen(port, () => console.log(`Server started on port ${port}`));
