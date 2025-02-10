const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./src/routes/userRoutes");
const transactionRoutes = require("./src/routes/transactionRoutes");
const customRoutes = require("./src/routes/customRoutes");

const app = express();

// CORS Configuration
const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS || "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/custom", customRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Random Data Generator API");
});

module.exports = app;
