import React, { useEffect, useState } from "react";
import { Header } from "../components/common/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card.jsx";

const SubmittedDataPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const evalResponse = await fetch("http://localhost:8000/evaluations");
        if (!evalResponse.ok) throw new Error("Failed to fetch evaluations");

        const evalData = await evalResponse.json();

        // Fetch feedback logs in parallel
        const enriched = await Promise.all(
          evalData.map(async (item) => {
            try {
              const feedbackRes = await fetch(
                `http://localhost:8000/feedback_logs?youtube_url=${encodeURIComponent(item.youtube_url)}`
              );
              const feedbackData = feedbackRes.ok
                ? await feedbackRes.json()
                : null;

              return {
                ...item,
                title: item?.metadata?.title || "Untitled Video",
                transcript: item?.report?.substring(0, 300) + "...", // you can change this
                feedback: item?.report || "No feedback available",
                feedback_log: feedbackData,
              };
            } catch (innerErr) {
              console.error("Error fetching feedback log:", innerErr);
              return item;
            }
          })
        );

        setSubmissions(enriched);
      } catch (err) {
        console.error("Error fetching submissions:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
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
            {loading && <p className="text-slate-400">Loading...</p>}
            {error && <p className="text-red-400">Error: {error}</p>}

            {!loading &&
              !error &&
              submissions.map((submission, idx) => (
                <div
                  key={idx}
                  className="border border-slate-800 rounded-lg p-5 bg-slate-900/50"
                >
                  <h3 className="text-lg font-semibold text-blue-300">
                    <a
                      href={submission.youtube_url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {submission.title}
                    </a>
                  </h3>
                  <p className="text-white text-sm mt-1 mb-2">
                    YouTube URL: {submission.youtube_url}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg font-semibold text-blue-300">
                        Transcript Preview
                      </p>
                      <p className="text-white text-sm bg-slate-800/50 p-3 rounded">
                        {submission.transcript || "Transcript not available"}
                      </p>
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-blue-300">
                        Evaluation Scores
                      </p>
                      <ul className="text-white">
                        <li>
                          <span className="text-white">
                            Overall Score:
                          </span>{" "}
                          <strong>{submission.overall_score}/100</strong>
                        </li>
                        {submission.scores &&
                          Object.entries(submission.scores).map(
                            ([key, value]) => (
                              <li key={key}>
                                <span className="capitalize text-white">
                                  {key.replace(/_/g, " ")}:
                                </span>{" "}
                                {value}/100
                              </li>
                            )
                          )}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-lg font-semibold text-blue-300">
                      Feedback / Report
                    </p>
                    <p className="text-white bg-slate-800/50 p-3 rounded text-sm whitespace-pre-wrap">
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
