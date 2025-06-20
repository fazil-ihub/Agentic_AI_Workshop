# llms.py
import os
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings

# Load your Google Generative AI key from environment
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# LLM instance for text generation (Gemini)
llm = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash",
    google_api_key=GOOGLE_API_KEY,
    temperature=0.7
)

# Embedding model (used in FAISS retrieval)
embedding_model = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001",
    google_api_key=GOOGLE_API_KEY
)
