require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routes
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Frontend
const path = require('path');
app.use(express.static(path.join(__dirname, '../')));

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/shopmetrix', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB Connected Successfully');
}).catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    console.log('⚠️ Running in disconnected mode (MOCK Data OK)');
});

// API Routes setup
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/shopify', apiRoutes);

// Healthcheck
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'ShopMetrix Backend is running.' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
