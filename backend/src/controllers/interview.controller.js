import { generateInterviewResponse } from "../services/ai.service.js";
import User from "../models/user.model.js";

const chatSessions = {};

export const handleInterviewChat = async (req, res) => {

  const { userId, message } = req.body;

  if (!userId || !message) {
    return res.status(400).json({
      success:false,
      message:"userId and message required"
    });
  }

  if (!chatSessions[userId]) {
    chatSessions[userId] = [];
  }

  const chatHistory = chatSessions[userId];

  const systemPrompt = `
You are an experienced technical interviewer.

Rules:
- Ask one question at a time
- Evaluate candidate answers
- Ask follow-up questions
- Focus on resume skills
`;

const user = await User.findOne({ userId });

if (!user || !user.resumeKeywords || user.resumeKeywords.length === 0) {
  return res.status(400).json({
    success: false,
    message: "Please upload resume before starting interview"
  });
}

const resumeKeywords = user.resumeKeywords.join(", ");
console.log("✅ Resume Keywords from DB:", resumeKeywords);

const aiReply = await generateInterviewResponse({
  userId,
  resumeKeywords,
  userMessage: message
});

  chatSessions[userId].push({
    role: "user",
    content: message
  });

  chatSessions[userId].push({
    role: "assistant",
    content: aiReply
  });

  res.json({
    success: true,
    reply: aiReply
  });

};