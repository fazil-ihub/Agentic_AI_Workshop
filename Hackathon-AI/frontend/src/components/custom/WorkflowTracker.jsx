import React from 'react';
import { Rocket, BrainCircuit, Users, Check } from 'lucide-react';

const WORKFLOW_STAGES = [
    { key: 'crewai', name: 'CrewAI Analysis', Icon: Rocket, description: "Extracts data & performs initial content/speech review." },
    { key: 'langgraph', name: 'LangGraph Refinement', Icon: BrainCircuit, description: "Refines coaching feedback in a cyclical quality loop." },
    { key: 'autogen', name: 'AutoGen Panel Review', Icon: Users, description: "A panel of AI agents provides a final, multi-perspective summary." },
];

export const WorkflowTracker = ({ currentStage }) => {
    const currentStageIndex = WORKFLOW_STAGES.findIndex(s => s.key === currentStage);
    return (
        <div className="space-y-6">
            {WORKFLOW_STAGES.map((stage, index) => {
                const isCompleted = currentStageIndex > index;
                const isRunning = currentStageIndex === index;
                return (
                    <div key={stage.key} className="flex items-start gap-4">
                        <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${isCompleted ? 'bg-green-500/20 border-green-500 text-green-400' : isRunning ? 'bg-blue-500/20 border-blue-500 text-blue-400 animate-spin' : 'bg-gray-700/50 border-gray-600 text-gray-400'}`}>
                            {isCompleted ? <Check size={20} /> : <stage.Icon size={20} />}
                        </div>
                        <div>
                            <h4 className={`font-bold transition-colors ${isRunning || isCompleted ? 'text-white' : 'text-gray-400'}`}>{stage.name}</h4>
                            <p className="text-sm text-gray-400">{stage.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};