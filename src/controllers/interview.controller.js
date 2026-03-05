import { generateInterviewResponse } from "../services/ai.service.js";

const chatSessions = {};

export const handleInterviewChat = async (req, res) => {

  const { userId, message } = req.body;

  if (!chatSessions[userId]) {
    chatSessions[userId] = [];
  }

  const chatHistory = chatSessions[userId];

  const systemPrompt = `
You are a strict but fair technical interviewer.

Ask one question at a time.

Evaluate candidate answers.

Focus on resume skills.
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