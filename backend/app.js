const express = require('express');
const { connectionToDb } = require('./config/db'); // Ensure correct path
const taskRoutes = require('./routes/tasks'); // Ensure correct path
const cors=require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/tasks', taskRoutes);

// Connect to the database and start the server
const startServer = async () => {
    await connectionToDb(); // Connect to the database
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

startServer();
