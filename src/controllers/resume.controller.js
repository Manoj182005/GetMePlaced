const fs = require("fs");
const pdf = require("pdf-parse");
const { extractKeywords } = require("../utils/keywordExtractor");

exports.uploadResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        const dataBuffer = fs.readFileSync(req.file.path);

        const pdfData = await pdf(dataBuffer);

        const extractedText = pdfData.text;

        const keywords = extractKeywords(extractedText);

        return res.status(200).json({
            success: true,
            message: "Resume parsed successfully",
            keywords
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};