import pdf from "pdf-parse";
import { extractKeywords } from "../utils/keywordExtractor.js";
import User from "../models/user.model.js";

export const uploadResume = async (req, res) => {
  try {

    const { userId } = req.body;

    if (!req.file || !userId) {
      return res.status(400).json({
        success: false,
        message: "Resume and userId required"
      });
    }

    const pdfData = await pdf(req.file.buffer);
    const extractedText = pdfData.text;

    const keywords = extractKeywords(extractedText);

    // 🔥 SAVE TO DB
    await User.findOneAndUpdate(
      { userId },
      { resumeKeywords: keywords },
      { upsert: true, new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Resume parsed and saved",
      keywords
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};