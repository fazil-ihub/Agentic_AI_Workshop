import React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components/common/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card.jsx";

const staticSubmissions = [
  {
    id: 1,
    title: "Startup Pitch: EcoClean",
    youtubeUrl: "https://www.youtube.com/watch?v=eco123",
    transcript:
      "Welcome everyone, today I'm going to present EcoClean, a sustainable solution to water pollution...",
    overall_score: 82,
    scores: {
      clarity: 85,
      confidence: 78,
      body_language: 80,
      vocal_delivery: 84,
    },
    feedback:
      "Great energy and structure. Improve pauses and eye contact to engage your audience better.",
  },
  {
    id: 2,
    title: "AI in Education",
    youtubeUrl: "https://www.youtube.com/watch?v=ai456",
    transcript:
      "Artificial intelligence is revolutionizing how we personalize education. In this talk...",
    overall_score: 90,
    scores: {
      clarity: 93,
      confidence: 87,
      body_language: 89,
      vocal_delivery: 91,
    },
    feedback: "Excellent delivery with strong confidence and clarity. Keep it up!",
  },
];

const SubmittedDataPage = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Simulate fetching from backend
    setSubmissions(staticSubmissions);
  }, []);

  return (
    <div className="flex flex-col min-h-screen main-container">
      <div className="container mx-auto px-4 py-10 flex-grow">
        <Header />

        <Card className="max-w-5xl mx-auto mb-8 fade-in-up">
          <CardHeader>
            <CardTitle>Submitted Video Evaluations</CardTitle>
            <CardDescription>Recent analysis results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="border border-slate-800 rounded-lg p-5 bg-slate-900/50"
              >
                <h3 className="text-lg font-semibold text-blue-300">
                  <a
                    href={submission.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {submission.title}
                  </a>
                </h3>
                <p className="text-slate-400 text-sm mt-1 mb-2">
                  YouTube URL: {submission.youtubeUrl}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-300 font-semibold mb-1">
                      Transcript Preview
                    </p>
                    <p className="text-slate-400 text-sm bg-slate-800/50 p-3 rounded">
                      {submission.transcript}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-300 font-semibold mb-1">
                      Evaluation Scores
                    </p>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>
                        <span className="text-slate-400">Overall Score:</span>{" "}
                        <strong>{submission.overall_score}/100</strong>
                      </li>
                      {Object.entries(submission.scores).map(([key, value]) => (
                        <li key={key}>
                          <span className="capitalize text-slate-400">
                            {key.replace(/_/g, " ")}:
                          </span>{" "}
                          {value}/100
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-slate-300 font-semibold mb-1">Feedback</p>
                  <p className="text-slate-400 bg-slate-800/50 p-3 rounded text-sm">
                    {submission.feedback}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default SubmittedDataPage;
