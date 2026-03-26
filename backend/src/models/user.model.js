import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: String,
  resumeKeywords: [String]
});

export default mongoose.model("User", userSchema);