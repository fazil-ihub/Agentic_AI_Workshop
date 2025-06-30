import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeVideo } from "../api/api.js";
import { Header } from "../components/common/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Input } from "../components/ui/Input.jsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/Card.jsx";
import { Loader2, Send } from "lucide-react";

const EntryPage = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await analyzeVideo(youtubeUrl);
      navigate("/feedback", { state: { results: data, youtubeUrl } });
    } catch (err) {
      setError(err.response?.data?.detail || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen main-container">
      {/* Page Content */}
      <div className="container mx-auto px-4 py-10 flex-grow">
        <Header />

        {/* Introductory Info */}
        <section className="text-center text-slate-800 mb-12 max-w-2xl mx-auto fade-in-up">
          <p className="text-lg">
            Welcome to the <span className="text-blue-400 font-semibold">Agentic Pitch Evaluator</span> — an AI-powered platform to assess your presentation skills.
            <br />
            Paste a YouTube video link and receive instant feedback on your pitch.
          </p>
        </section>

        {/* Input Card */}
        <Card className="max-w-2xl mx-auto mt-20 fade-in-up">
  <CardHeader>
    <CardTitle className="text-center text-xl">Submit YouTube Video</CardTitle>
  </CardHeader>
  <CardContent>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col items-center gap-4"
    >
      <Input
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
        placeholder="Paste your YouTube pitch video link"
        disabled={loading}
        className="w-full max-w-lg"
      />
      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full max-w-lg flex justify-center gap-2"
      >
        {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
        Analyze
      </Button>
    </form>
  </CardContent>
</Card>


        {/* Error Message */}
        {error && (
          <div className="mt-6 max-w-xl mx-auto text-center text-red-400 bg-red-900/30 border border-red-800 p-4 rounded-lg fade-in-up">
          {/* <strong>Error:</strong> {error} */}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EntryPage;
