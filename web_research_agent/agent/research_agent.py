import os
from tavily import TavilyClient
from utils.openai_utils import generate_questions

class ResearchAgent:
    def __init__(self, topic):
        self.topic = topic
        self.questions = []
        self.answers = {}
        self.tavily_client = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))

    def generate_research_questions(self):
        self.questions = generate_questions(self.topic)
        return self.questions

    def search_web(self):
        for question in self.questions:
            results = self.tavily_client.search(query=question, max_results=3)
            key_points = []
            for res in results["results"]:
                key_points.append(f"- **{res['title']}**: {res['content']}")
            self.answers[question] = key_points
