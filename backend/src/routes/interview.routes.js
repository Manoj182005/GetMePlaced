import express from "express";
import { handleInterviewChat } from "../controllers/interview.controller.js";

const router = express.Router();

router.post("/chat", handleInterviewChat);

export default router;