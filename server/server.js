const express = require('express');
const connectDB = require('./config/db'); 
const dotenv = require('dotenv');
const auth = require('./middleware/authMiddleware'); 
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/protected-route', auth, (req, res) => {
  res.json({ msg: 'You have access to this protected route', user: req.user });
});

// Include other routes
const userRoutes = require('./routes/userRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');

app.use('/api/users', userRoutes);
app.use('/api/itineraries', auth, itineraryRoutes); // Protecting the itinerary routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
