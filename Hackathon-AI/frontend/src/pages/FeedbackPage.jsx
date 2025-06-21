import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { ScoreGauge } from '../components/common/ScoreGauge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import { useState } from 'react';
import ScoreBreakdown from '../components/common/ScoreBreakdown';

const FeedbackPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("summary");

  if (!state || !state.results) return (
    <div className="text-center mt-20 text-slate-300">
      No data available. <button className="underline text-blue-400" onClick={() => navigate('/')}>Go Back</button>
    </div>
  );

  const { results, youtubeUrl } = state;
  const { final_report = {}, transcript = "Not available." } = results;
  const { overall_score = 0, scores = {}, detailed_report = "Not available." } = final_report;

  return (
    <div className="container mx-auto px-4 py-10">
      <Card className="fade-in-up">
        <CardHeader>
          <CardTitle>Pitch Evaluation</CardTitle>
          <CardDescription>Analysis for: {results.video_metadata?.title || youtubeUrl}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center lg:col-span-1">
              <ScoreGauge score={overall_score} />
              <ScoreBreakdown scores={scores} />
            </div>
            <div className="lg:col-span-2">
              <Tabs value={tab} onValueChange={setTab}>
                <TabsList>
                  <TabsTrigger value="summary">Report</TabsTrigger>
                  <TabsTrigger value="transcript">Transcript</TabsTrigger>
                </TabsList>
                <TabsContent value="summary">
                  <div className="prose prose-custom max-w-none" dangerouslySetInnerHTML={{ __html: detailed_report.replace(/\n/g, '<br />') }} />
                </TabsContent>
                <TabsContent value="transcript">
                  <pre className="text-sm text-slate-300 bg-slate-800 p-4 rounded-md">{transcript}</pre>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackPage;
