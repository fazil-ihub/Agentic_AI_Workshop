import React from 'react';
import { Bot } from 'lucide-react';

export const Header = () => (
    <header className="text-center mb-16 fade-in-up">
        <div className="inline-flex items-center gap-4 mb-4 bg-gray-900/50 border border-gray-700 px-4 py-2 rounded-full shadow-lg">
            <Bot size={24} className="text-blue-400"/>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
                Agentic Pitch Evaluator
            </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Get instant, AI-driven feedback on your pitch videos. Our multi-agent pipeline analyzes your content, delivery, and structure to provide actionable insights.
        </p>
    </header>
);
