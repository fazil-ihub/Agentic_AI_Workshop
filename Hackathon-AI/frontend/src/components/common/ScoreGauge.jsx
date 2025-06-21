import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export const ScoreGauge = ({ score }) => {
  const scoreData = [{ value: score }];
  const color = score > 85 ? "#22c55e" : score > 70 ? "#facc15" : "#ef4444";

  return (
    <div className="relative w-48 h-48">
      <RadialBarChart
        innerRadius="80%"
        outerRadius="100%"
        data={scoreData}
        startAngle={90}
        endAngle={-270}
        barSize={15}
        width={192}
        height={192}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          dataKey="value"
          cornerRadius={10}
          fill={color}
        />
      </RadialBarChart>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-5xl font-bold" style={{ color }}>
          {score}
        </p>
        <p className="text-sm text-slate-400">Overall Score</p>
      </div>
    </div>
  );
};
