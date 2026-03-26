import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { getQuestionBank } from "../data/questionBank.js";

let vectorStore;

// Initialize RAG system (run once)
export const initializeRAG = async () => {
  try {
    console.log("⚡ Initializing RAG...");

    const rawText = getQuestionBank();

    // Split into lines (questions)
    const lines = rawText
      .split("\n")
      .map(line => line.trim())
      .filter(line => line && !line.includes("QuestionStatement"));

    const documents = lines.map(line => ({
      pageContent: line
    }));

const embeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HF_API_KEY,
  model: "sentence-transformers/all-MiniLM-L6-v2"
});

    vectorStore = await FaissStore.fromDocuments(documents, embeddings);

    console.log("✅ RAG Initialized Successfully");

  } catch (error) {
    console.error("❌ RAG Init Error:", error);
  }
};

export const getRelevantQuestions = async (query) => {
  if (!vectorStore) {
    throw new Error("RAG not initialized");
  }

  const retriever = vectorStore.asRetriever({ k: 3 });

  const docs = await retriever.invoke(query);

  return docs.map(doc => doc.pageContent).join("\n");
};