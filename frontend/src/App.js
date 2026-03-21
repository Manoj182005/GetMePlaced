import './App.css';
import Navbar from "./components/Navbar";
import ResumeUpload from "./components/ResumeUpload";
import InterviewChat from "./components/InterviewChat";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main-layout">
        <ResumeUpload />
        <InterviewChat />
      </div>
    </div>
  );
}

export default App;