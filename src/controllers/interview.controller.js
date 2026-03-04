import Chat from "../models/chat.model.js";
import { generateInterviewResponse } from "../services/ai.service.js";

export const handleInterviewChat = async (req, res) => {
  const { userId, message } = req.body;

  let chat = await Chat.findOne({ userId });

  if (!chat) {
    chat = await Chat.create({
      userId,
      messages: []
    });
  }

  const systemPrompt = `
You are a strict but fair technical interviewer.
Ask one question at a time.
Evaluate answers.
Focus on resume skills.
`;

  const resumeKeywords = "Node.js, React, MongoDB"; // fetch from DB

  const aiReply = await generateInterviewResponse({
    systemPrompt,
    resumeKeywords,
    chatHistory: chat.messages,
    userMessage: message
  });

  chat.messages.push({ role: "user", content: message });
  chat.messages.push({ role: "assistant", content: aiReply });

  await chat.save();

  res.json({ reply: aiReply });
};