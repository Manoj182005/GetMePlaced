const express = require("express");
const multer = require("multer");
const { uploadResume } = require("../controllers/resume.controller");

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

module.exports = router;