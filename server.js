const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Simple API route
app.get("/", (req, res) => {
    res.send("🚀 Hello from Cloud Run with Docker!");
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ status: "UP", message: "Service is running!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});