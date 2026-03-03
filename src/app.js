const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const resumeRoutes = require("./routes/resume.routes");



// Root route
app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome to GetMePlaced Backend 🚀"
    });
});

// Ping route
app.get("/ping", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server is live 🚀"
    });
});


app.use("/api/v1/resume", resumeRoutes);

module.exports = app;