import React, { useState } from "react";
import axios from "axios";
import "./ResumeUpload.css";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setKeywords([]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("userId", "123"); // ✅ VERY IMPORTANT

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:5000/api/v1/resume/upload",
        formData
      );

      setKeywords(response.data.keywords);

    } catch (err) {
      console.error("UPLOAD ERROR:", err.response?.data || err.message);
      setError("Failed to parse resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🚀 GetMePlaced</h1>
        <p className="subtitle">Upload your resume and extract top keywords</p>

        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />

        <button onClick={handleUpload}>
          {loading ? "Processing..." : "Upload & Extract"}
        </button>

        {error && <p className="error">{error}</p>}

        {keywords.length > 0 && (
          <div className="keywords">
            <h2>Top Keywords</h2>
            <div className="keyword-list">
              {keywords.map((keyword, index) => (
                <span key={index} className="keyword">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;