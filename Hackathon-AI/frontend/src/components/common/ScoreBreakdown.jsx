import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";

const ScoreBreakdown = ({ scores }) => (
  <Card className="w-full mt-8">
    <CardHeader>
      <CardTitle>Score Breakdown</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      {Object.entries(scores).map(([key, value]) => (
        <div
          key={key}
          className="flex justify-between text-sm border-b border-slate-800 pb-1"
        >
          <span className="capitalize text-slate-400">
            {key.replace(/_/g, " ")}
          </span>
          <span className="text-white font-semibold">{value}/100</span>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default ScoreBreakdown;
