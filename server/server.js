const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');

dotenv.config();

const app = express();

connectDB();

app.use(express.json({extended:false}));

app.use('/api/users', userRoutes);
app.use('/api/itineraries', itineraryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));