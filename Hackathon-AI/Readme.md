Sure! Here's a redefined and polished version of your README in a more professional and organized format, while keeping it clear and engaging:

---

# 🎯 Pitch Analysis Backend

A powerful backend system for a **Video Pitch Evaluation Platform** that analyzes YouTube pitch videos and provides **AI-generated feedback**. This system uses **multi-agent architecture** via LangGraph and LangChain, delivering structured and insightful evaluations.

---

## 🚀 Key Features

* 🎥 **YouTube Pitch Video Analysis**
* 🧠 **Multi-Agent AI (LangGraph + LangChain)**
* 📝 **Structured Feedback** — clarity, tone, structure, content
* 📊 **Scored Evaluations + Markdown Report**
* 💾 **MongoDB** for storing evaluations
* ⚡ **FAISS** for fast and semantic retrieval
* 🌐 **RESTful API** with **FastAPI**
* 📥 **JSON Input** | 📤 **Markdown Output**

---

## 📡 API Endpoints

| Method | Endpoint         | Description                             |
| ------ | ---------------- | --------------------------------------- |
| POST   | `/analyze`       | Analyze a YouTube pitch video           |
| GET    | `/evaluations`   | Retrieve all video evaluation summaries |
| GET    | `/feedback_logs` | Get feedback logs by YouTube URL        |

---

## 🧠 Agent Workflow Overview

The system employs specialized agents to perform tasks like downloading videos, transcribing, and analyzing different aspects:

* `download_agent`: Fetch and extract audio/video data
* `clarity_agent`, `tone_agent`, `structure_agent`, `content_agent`: Analyze respective components
* `feedback_agent`: Compiles and formats the final feedback
* Powered by **LangGraph** for orchestration and **FAISS** for retrieval-enhanced generation

*Visual Representation*: `agentsWorkflow.drawio`

---

## 📦 Project Structure

```
├── agents/               # Individual AI agents and router
├── app/                  # Core app logic (CRUD, DB models, API)
├── chains/               # LangChain-powered pipelines
├── core/                 # Runner logic for orchestration
├── data/                 # Templates and static assets
├── faiss_index/          # FAISS vector index storage
├── graph/                # LangGraph definition
├── llms/                 # LLM wrapper configuration
├── prompts/              # Prompt templates
├── state/                # Global state handler
├── tools/                # Modular tools for agent tasks
├── utils/                # Helper functions (YouTube, FAISS, indexing)
├── main.py               # App entry point
├── requirements.txt      # Python dependencies
└── .env                  # Environment variables
```

---

## 🔐 Environment Variables

Make sure to set the following in your `.env` file:

```bash
MONGO_URI="mongodb://localhost:27017"
GOOGLE_API_KEY="your_google_api_key_here"
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd Backend
   ```

2. **Create and activate a virtual environment**

   ```bash
   python -m venv .venv
   source .venv/bin/activate   # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server**

   ```bash
   python main.py
   ```

5. **Access the API**

   ```
   http://localhost:8000
   ```

---

## 📬 Sample Request

```http
POST /analyze HTTP/1.1
Content-Type: application/json

{
  "youtube_url": "https://www.youtube.com/watch?v=wJfjDyAmy7U"
}
```
## Architecture Flow Diagram

https://drive.google.com/drive/folders/1k2FbRmJEqxEb5rmny0jA-RisuOBsKTK4
---

## 🧰 Tech Stack

* **Python 3.9+**
* **FastAPI** – REST API Framework
* **LangChain + LangGraph** – AI orchestration
* **Gemini** – Large Language Model
* **MongoDB** – NoSQL data storage
* **FAISS** – Vector search
* **yt-dlp** – YouTube media extraction

---


---
