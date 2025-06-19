from langchain.tools import tool

@tool
def feedback_tool(insight: str) -> str:
    """Takes insight string and formats it into coaching advice."""
    return "Here’s your personalized feedback:\n" + "\n".join(f"- {line}" for line in insight.split('\n'))
