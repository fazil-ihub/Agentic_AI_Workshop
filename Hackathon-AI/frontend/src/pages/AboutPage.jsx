import React from "react";
import { Header } from "../components/common/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card.jsx";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen main-container">
      <div className="container mx-auto px-4 py-10 flex-grow">
        <Header />

        <Card className="max-w-4xl mx-auto fade-in-up">
          <CardHeader>
            <CardTitle className="text-black">About Agentic Pitch Evaluator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-black leading-relaxed">
            <p>
              <strong className="text-black">Agentic Pitch Evaluator</strong> is an AI-powered tool built to help students, educators, and professionals assess and improve their presentation skills using YouTube videos.
            </p>
            <p>
              By leveraging a stack of language agents, audio analysis, and scoring models, this platform breaks down your delivery into measurable skills like clarity, vocal variety, engagement, and body language.
            </p>
            <p>
              Our AI agents evaluate your video and return a detailed report along with a transcript — helping you recognize what works and what doesn't in your pitch.
            </p>
            {/* <p>
              This tool is built using modern web technologies like <strong>React + Vite + Tailwind CSS</strong> on the frontend, and <strong>FastAPI</strong>, <strong>LangChain</strong>, and whisper-based transcription on the backend.
            </p> */}
            <p className="italic text-slate-700">
              Whether you're preparing for a pitch competition, a classroom presentation, or a business proposal — Agentic Evaluator gives you the feedback you need to grow.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
