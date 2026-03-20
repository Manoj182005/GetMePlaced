import express from "express";
import cors from "cors";

import resumeRoutes from "./routes/resume.routes.js";
import interviewRoutes from "./routes/interview.routes.js";

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome to GetMePlaced Backend 🚀"
    });
});


app.get("/ping", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server is live 🚀"
    });
});

app.use("/api/v1/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);

export default app;