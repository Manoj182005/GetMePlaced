import { generateInterviewResponse } from "../services/ai.service.js";

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

  const resumeKeywords = "Node.js, React, MongoDB";

  const aiReply = await generateInterviewResponse({
    systemPrompt,
    resumeKeywords,
    chatHistory,
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