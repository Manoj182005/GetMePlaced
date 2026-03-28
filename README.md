# 🚀 GetMePlaced – AI-Powered Interview Preparation Platform

## 🧠 Overview
GetMePlaced is a full-stack AI-powered web application that helps users prepare for technical interviews by generating personalized questions based on their resume.

The system extracts key skills from uploaded resumes and uses them to simulate a real-time technical interview experience powered by LLMs and LangChain.

---

## ✨ Features
- 📄 Upload resume (PDF) and extract key technical keywords  
- 🤖 AI-powered interview chatbot  
- 🎯 Personalized questions based on resume skills  
- 🔄 Context-aware conversation using session tracking  
- ⚡ Real-time frontend-backend communication  
- 🧠 Scalable architecture with scope for RAG & authentication  

---

## 🏗️ Tech Stack

### Frontend
- React.js  
- Axios  
- CSS  

### Backend
- Node.js  
- Express.js  

### AI Integration
- LangChain  
- LLM APIs (OpenAI / similar)  

### Database
- MongoDB  

### Other Tools
- Multer (file upload handling)  
- PDF parsing libraries  

---


---

## 🔄 How It Works

### 1. Resume Upload
- User uploads a PDF resume  
- Backend extracts text and identifies key skills  
- Keywords are stored in MongoDB  

### 2. AI Interview Chat
- User sends a message  
- Backend retrieves stored resume keywords  
- LangChain constructs prompt with context  
- LLM generates interview question or feedback  

### 3. Response Delivery
- AI response is sent back to frontend  
- Displayed in chat interface  

---

## 📁 Project Structure

### 📦 Backend

## ⚙️ System Architecture
