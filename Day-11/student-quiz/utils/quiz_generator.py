from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate

def generate_quiz(summary, api_key):
    llm = OpenAI(openai_api_key=api_key, temperature=0.7)

    prompt = PromptTemplate.from_template(
        "Based on the following summary, generate 2 multiple-choice questions with 4 options each and indicate the correct answer:\n\n{summary}"
    )
    return llm(prompt.format(summary=summary))
