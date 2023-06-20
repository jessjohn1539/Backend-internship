// server.js

const express = require('express');
const mongoose = require('mongoose');
const nudgeRoutes = require('./app/routes/nudgeRoutes');


const app = express();

// Middleware for parsing JSON
app.use(express.json());


// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/nudges', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api', nudgeRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
