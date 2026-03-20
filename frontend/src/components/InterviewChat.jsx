import React, { useState } from "react";
import axios from "axios";
import "./InterviewChat.css";

const InterviewChat = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {

    if (!input.trim()) return;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/interview/chat",
        {
          userId: "123",
          message: input
        }
      );

      // 🔥 Extract response safely
      const rawReply =
        typeof res.data.reply === "object"
          ? res.data.reply.content || JSON.stringify(res.data.reply)
          : res.data.reply || res.data;

      // 🔥 IMPORTANT FIX: convert \\n → real new lines
      const fixedReply = rawReply.replace(/\\n/g, "\n");

      // 🔥 Update messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: input },
        { role: "assistant", content: fixedReply }
      ]);

      setInput("");

    } catch (error) {
      console.error("Error:", error);

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "⚠️ Error fetching response from server." }
      ]);
    }
  };

  return (
    <div className="chat-container">

      <h2>AI Technical Interview</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.role === "user" ? "user-message" : "ai-message"
            }`}
          >
            {/* 🔥 Render with proper line breaks */}
            {msg.content.split("\n").map((line, i) => (
              <p key={i} style={{ margin: "5px 0" }}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
};

export default InterviewChat;