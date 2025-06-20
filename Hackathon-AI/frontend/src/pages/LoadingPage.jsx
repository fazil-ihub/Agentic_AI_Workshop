import React, { useEffect, useState } from 'react';
import { WorkflowTracker } from '../components/custom/WorkflowTracker';
import { VideoPreviewCard } from '../components/custom/VideoPreviewCard';
import { Card, CardContent } from '../components/ui/Card';

export const LoadingPage = ({ videoUrl, setPage, setResults, setError }) => {
    const [currentStage, setCurrentStage] = useState(null);
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const fetchPreviewAndEvaluate = async () => {
            try {
                // Step 1: Fetch preview data from our backend
                const previewRes = await fetch('http://127.0.0.1:8000/get-video-preview', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ youtube_url: videoUrl }) });
                const previewData = await previewRes.json();
                if (!previewRes.ok) throw new Error(previewData.detail || "Failed to fetch preview.");
                setVideoData(previewData);

                // Step 2: Start the full evaluation
                setCurrentStage('crewai');
                const fullEvalRes = await fetch('http://127.0.0.1:8000/evaluate-full-pipeline', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ youtube_url: videoUrl }) });
                const fullEvalData = await fullEvalRes.json();
                if (!fullEvalRes.ok) throw new Error(fullEvalData.detail || 'Evaluation failed.');
                
                // Simulate workflow progression for UX
                setTimeout(() => setCurrentStage('langgraph'), 500);
                setTimeout(() => setCurrentStage('autogen'), 1200);
                setTimeout(() => { setResults(fullEvalData); setPage('results'); }, 2000);
            } catch (err) {
                setError(err.message);
                setPage('entry');
            }
        };
        fetchPreviewAndEvaluate();
    }, [videoUrl, setPage, setResults, setError]);

    return (
        <main className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                    <VideoPreviewCard videoData={videoData} />
                </div>
                <div className="md:col-span-2">
                    <Card>
                        <CardContent className="pt-6">
                            <h2 className="text-2xl font-bold text-center">Analysis in Progress...</h2>
                            <p className="text-center text-gray-400 mb-6">Our AI agents are evaluating your pitch.</p>
                            <WorkflowTracker currentStage={currentStage} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
};
