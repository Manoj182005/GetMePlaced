import { initializeRAG } from "./services/rag.service.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import app from "./app.js";

const PORT = process.env.PORT || 5000;
console.log("Mongo URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.log("❌ MongoDB Error:", err.message);
  });
app.listen(PORT, async() => {
  console.log(`Server running on port ${PORT}`);

  await initializeRAG(); 
});