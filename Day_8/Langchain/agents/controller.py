from langchain.agents import initialize_agent, AgentType, Tool
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os

from agents.tools.pattern_tool import analyze_patterns_tool
from agents.tools.feedback_tool import feedback_tool
from agents.tools.benchmark_tool import benchmark_tool

load_dotenv()

llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=os.getenv("GOOGLE_API_KEY"))

tools = [analyze_patterns_tool, feedback_tool, benchmark_tool]

agent1 = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

def run_agent(user_input: str):
    return agent1.run(user_input)
