import os
from utils.pdf_loader import extract_text_from_pdf
from utils.summarizer import summarize_content
from utils.quiz_generator import generate_quiz

API_KEY = "your-openai-api-key"  # Use environment variable for security

pdf_path = "sample_input/study_material.pdf"
content = extract_text_from_pdf(pdf_path)

print("\n🔹 Extracted Study Content:\n", content[:500])  # Preview
summary = summarize_content(content, API_KEY)

print("\n🔹 Summary:\n", summary)
quiz = generate_quiz(summary, API_KEY)

print("\n🔹 Generated Quiz Questions:\n", quiz)

with open("output/generated_quiz.txt", "w", encoding="utf-8") as f:
    f.write("Summary:\n" + summary + "\n\nQuiz:\n" + quiz)
