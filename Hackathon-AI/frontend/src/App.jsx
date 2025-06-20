import React, { useState, useEffect } from 'react';
import { Header } from './components/custom/Header';
import { EntryPage } from './pages/EntryPage';
import { LoadingPage } from './pages/LoadingPage';
import { ResultsPage } from './pages/ResultsPage';

// Main App Component with Aurora Background effect
export default function App() {
    const [page, setPage] = useState('entry'); // entry, loading, results
    const [videoUrl, setVideoUrl] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    // Effect to handle the aurora mouse follow
    useEffect(() => {
        const handleMouseMove = (event) => {
            const glow = document.getElementById('aurora-glow');
            if (glow) {
                glow.style.setProperty('--mouse-x', `${event.clientX}px`);
                glow.style.setProperty('--mouse-y', `${event.clientY}px`);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen bg-slate-950 text-white font-sans">
            <div className="main-background"></div>
            <div id="aurora-glow"></div>
            
            <main className="relative z-10 container mx-auto px-4 py-8 md:py-12">
                <Header />
                {error && (
                    <div 
                        className="max-w-2xl mx-auto my-4 p-4 bg-red-900/50 border border-red-700 rounded-lg text-center text-red-300 cursor-pointer fade-in-up" 
                        onClick={() => setError(null)}
                    >
                        <strong>Error:</strong> {error} (click to dismiss)
                    </div>
                )}

                <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
                    {page === 'entry' && <EntryPage setPage={setPage} setVideoUrl={setVideoUrl} />}
                    {page === 'loading' && <LoadingPage videoUrl={videoUrl} setPage={setPage} setResults={setResults} setError={setError} />}
                    {page === 'results' && <ResultsPage results={results} setPage={setPage} setVideoUrl={setVideoUrl} setResults={setResults} />}
                </div>
            </main>
        </div>
    );
}