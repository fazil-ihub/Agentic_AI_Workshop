from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate

def summarize_content(content, api_key):
    llm = OpenAI(openai_api_key=api_key, temperature=0.5)

    prompt = PromptTemplate.from_template(
        "Summarize the following study content into 3–5 key bullet points:\n\n{content}"
    )
    return llm(prompt.format(content=content))
