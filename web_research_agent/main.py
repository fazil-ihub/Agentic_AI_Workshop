from agent.research_agent import ResearchAgent
from agent.report_generator import ReportGenerator

def main():
    topic = input("Enter a research topic: ")
    
    agent = ResearchAgent(topic)
    
    print("\n[1] Generating research questions...")
    questions = agent.generate_research_questions()
    for q in questions:
        print(f"- {q}")

    print("\n[2] Performing web search...")
    agent.search_web()

    print("\n[3] Compiling the report...")
    report = ReportGenerator.compile(agent.topic, agent.questions, agent.answers)
    print(report)

    with open(f"{topic.replace(' ', '_')}_report.md", "w", encoding="utf-8") as f:
        f.write(report)

if __name__ == "__main__":
    main()
