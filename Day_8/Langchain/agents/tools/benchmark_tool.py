from langchain.tools import tool
from langchain_google_genai import ChatGoogleGenerativeAI
import os
from dotenv import load_dotenv

load_dotenv()
llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=os.getenv("GOOGLE_API_KEY"))

@tool
def benchmark_tool(submission_summary: str) -> str:
    """Compares LeetCode submission behavior to elite benchmark practices."""
    prompt = f"""
Compare this student submission log to NeetCode/LeetCode75 habits:

{submission_summary}

Give 100 words of feedback.
"""
    return llm.invoke(prompt).content
