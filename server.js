const express = require('express');
const connectDB = require('./config/connection');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database
connectDB();

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Social Network API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

