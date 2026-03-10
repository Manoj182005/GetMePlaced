import dotenv from "dotenv";
dotenv.config();

import { ChatGroq } from "@langchain/groq";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";

import { SYSTEM_PROMPT } from "../prompts/system.prompt.js";
import { getQuestionBank } from "../data/questionBank.js";

// Initialize Model
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
  temperature: 0.7
});

// Load Question Bank
const questionBank = getQuestionBank();

// Prompt Template
const prompt = ChatPromptTemplate.fromMessages([
  ["system", SYSTEM_PROMPT],
  new MessagesPlaceholder("history"),
  ["human", "{input}"]
]);

// Connect Prompt → Model
const chainWithPrompt = prompt.pipe(model);

// Memory store
const messageHistories = {};

// Get session memory
const getMessageHistory = (sessionId) => {
  if (!messageHistories[sessionId]) {
    messageHistories[sessionId] = new InMemoryChatMessageHistory();
  }
  return messageHistories[sessionId];
};

// Chain with memory
const chain = new RunnableWithMessageHistory({
  runnable: chainWithPrompt,
  getMessageHistory,
  inputMessagesKey: "input",
  historyMessagesKey: "history"
});

export const generateInterviewResponse = async ({
  userId,
  resumeKeywords,
  userMessage
}) => {
  try {

    const input = `
Candidate Resume Keywords:
${resumeKeywords}

User Message:
${userMessage}
`;

    const response = await chain.invoke(
      {
        input,
        QuestionsForGPT: questionBank   // 🔥 FIX HERE
      },
      { configurable: { sessionId: userId } }
    );

    return response.content;

  } catch (error) {

    console.error("AI Error:", error);
    return "AI failed to respond.";

  }
};