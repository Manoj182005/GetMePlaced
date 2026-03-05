import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY
});

export const generateInterviewResponse = async ({
  systemPrompt,
  resumeKeywords,
  chatHistory,
  userMessage
}) => {

  const messages = [
    {
      role: "system",
      content: `${systemPrompt}

Candidate Resume Keywords: ${resumeKeywords}`
    },
    ...chatHistory,
    {
      role: "user",
      content: userMessage
    }
  ];

  const response = await model.invoke(messages);

  return response.content;
};