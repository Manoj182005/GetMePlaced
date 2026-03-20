import './App.css';
import { useState } from "react";
import Navbar from "./components/Navbar";
import ResumeUpload from "./components/ResumeUpload";
import InterviewChat from "./components/InterviewChat";

function App() {

  const [activeTab, setActiveTab] = useState("resume");

  return (
    <div className="App">
      <Navbar />

      {/* Center Box */}
      <div className="main-container">

        {/* Toggle Icons */}
        <div className="toggle-box">
          <button
            className={activeTab === "resume" ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setActiveTab("resume")}
          >
            📄
          </button>

          <button
            className={activeTab === "chat" ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setActiveTab("chat")}
          >
            💬
          </button>
        </div>

        {/* Content Box */}
        <div className="content-card">
          {activeTab === "resume" && <ResumeUpload />}
          {activeTab === "chat" && <InterviewChat />}
        </div>

      </div>
    </div>
  );
}

export default App;