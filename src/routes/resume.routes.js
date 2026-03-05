import express from "express";
import multer from "multer";
import { uploadResume } from "../controllers/resume.controller.js";

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== "application/pdf") {
            cb(new Error("Only PDF files allowed"));
        }
        cb(null, true);
    }
});

router.post("/upload", upload.single("resume"), uploadResume);

export default router;