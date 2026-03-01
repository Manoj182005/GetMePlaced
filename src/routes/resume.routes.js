const express = require("express");
const multer = require("multer");
const { uploadResume } = require("../controllers/resume.controller");

const router = express.Router();

// Multer Storage Config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== "application/pdf") {
            cb(new Error("Only PDF files are allowed"));
        }
        cb(null, true);
    }
});

router.post("/upload", upload.single("resume"), uploadResume);

module.exports = router;