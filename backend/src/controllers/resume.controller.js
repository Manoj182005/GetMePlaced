import pdf from "pdf-parse";
import { extractKeywords } from "../utils/keywordExtractor.js";

export const uploadResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      });
    }

    const pdfData = await pdf(req.file.buffer);

    const extractedText = pdfData.text;

    const keywords = extractKeywords(extractedText);

    return res.status(200).json({
      success: true,
      message: "Resume parsed successfully",
      keywords
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};