import { initializeRAG } from "./services/rag.service.js";
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
  console.log(`Server running on port ${PORT}`);

  await initializeRAG(); 
});