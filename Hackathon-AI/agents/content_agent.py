from state.state import PitchAnalysisState
from tools import content_analysis_tool

def content_agent(state: PitchAnalysisState) -> PitchAnalysisState:
    print("📊 Agent 2: Content Analysis")
    
    try:
        analysis = content_analysis_tool.invoke({
            "transcript": state["transcript"],
            "metadata": state["metadata"]
        })
        state["content_analysis"] = analysis
        state["current_agent"] = "clarity_agent"
        print("✅ Content analysis completed")
    except Exception as e:
        state["error_message"] = str(e)
        state["current_agent"] = "error"
    
    return state
