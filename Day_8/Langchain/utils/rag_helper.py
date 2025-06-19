import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import TextLoader

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

embedding_model = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=GOOGLE_API_KEY)
llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=GOOGLE_API_KEY, temperature=0.3)

def load_documents(file_path: str):
    loader = TextLoader(file_path)
    return loader.load()

def create_vector_store(docs):
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
    chunks = splitter.split_documents(docs)
    return FAISS.from_documents(chunks, embedding_model)

def rag_query(vectorstore, question: str) -> str:
    retriever = vectorstore.as_retriever(search_type="similarity", k=4)
    context_docs = retriever.get_relevant_documents(question)
    return "\n\n".join([doc.page_content for doc in context_docs])
