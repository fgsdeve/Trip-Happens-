const express = require('express');
const connectDB = require('./config/db'); 
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');
const auth = require('./middleware/authMiddleware'); 

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors()); // CORS middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/itineraries', auth, itineraryRoutes); // Protecting the itinerary routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
