import React from "react";
import { Bot } from "lucide-react";

export const Header = () => (
  <header className="text-center mb-12 fade-in-up">
    <div className="inline-flex items-center gap-4 mb-4 bg-slate-900/50 border border-slate-700 px-4 py-2 rounded-full shadow-lg">
      <Bot size={24} className="text-blue-400" />
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
        Agentic Pitch Evaluator
      </h1>
    </div>

    {/* ✅ Test container to verify Tailwind is working */}
    
  </header>
);
