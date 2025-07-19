import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("GOOGLE_API_KEY")

def generate_questions(topic):
    prompt = f"Generate 5 to 6 well-structured research questions on the topic: '{topic}'. Cover different aspects."
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    content = response['choices'][0]['message']['content']
    questions = [line.strip("0123456789). ").strip() for line in content.split('\n') if line.strip()]
    return questions
