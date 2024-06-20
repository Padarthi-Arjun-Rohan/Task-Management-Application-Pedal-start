const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRouter = require('./routes/tasks');
const errorHandler = require('./middlewares/errorHandler');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRouter);

// Error handling middleware
app.use(errorHandler);

// MongoDB connection
// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Remove useCreateIndex and useFindAndModify options
  }).then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }).catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  });

