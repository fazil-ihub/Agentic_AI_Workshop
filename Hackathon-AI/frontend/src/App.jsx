import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import EntryPage from "./pages/EntryPage";
import About from "./pages/AboutPage";
import Submissions from "./pages/SubmittedDataPage";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
