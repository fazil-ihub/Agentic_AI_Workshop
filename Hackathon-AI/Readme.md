Agentic AI Pitch Evaluator
Participant Name: Sudharsan
Project for: Agentic AI Hackathon 2025

1. Project Introduction
The Agentic AI Pitch Evaluator is a sophisticated web application designed to provide objective, AI-driven feedback on video pitch presentations. Presenters, such as students or startup founders, can submit a YouTube link to their pitch and receive a comprehensive evaluation of their content, structure, and delivery.

This tool leverages a powerful, stateful multi-agent system built with LangGraph to transform a subjective analysis process into a verifiable and data-driven outcome. By analyzing the video's audio, transcript, and metadata, the system provides a detailed report with scores and actionable coaching recommendations, helping users refine their presentation skills.

Key Features:
End-to-End Analysis: From a single YouTube URL, the system downloads audio, transcribes it, and performs a multi-faceted analysis.

AI-Powered Evaluation: Uses a LangGraph agentic workflow to evaluate content, structure, and delivery.

Real Audio Analysis: Leverages yt-dlp to download audio and openai-whisper for accurate transcription, enabling real analysis of speech patterns.

Context-Aware Analysis (RAG): A Retrieval-Augmented Generation (RAG) agent cross-references the pitch against established presentation benchmarks (e.g., for startup vs. academic pitches) to provide relevant feedback.

Interactive Frontend: A modern, responsive frontend built with React and styled with Tailwind CSS provides a seamless user experience, including a live workflow tracker and a detailed results dashboard.

Robust Backend: The application is powered by a high-performance FastAPI backend, ensuring scalability and reliability.

2. Live Demo
[Link to a 2-minute video showcasing the project functionality]

3. Tech Stack & Architecture
This project is built with a modern, decoupled architecture, featuring a React frontend and a Python backend.

Area

Technology

Frontend

React (Vite), Tailwind CSS, Recharts (for charts)

Backend

FastAPI, Uvicorn

Agentic Framework

LangGraph (to create a stateful, multi-step agentic graph)

AI & LLMs

Google Gemini Pro (via LangChain), OpenAI Whisper (for transcription)

RAG Database

ChromaDB (for lightweight, in-memory vector storage)

Media Tools

yt-dlp (for downloading audio), pydub (for audio manipulation)

Prerequisites

ffmpeg (system-level dependency for audio processing)

4. Agentic Workflow & Flow Diagram
The core of this project is a stateful graph built with LangGraph. The workflow ensures a logical progression from data collection to final analysis, with each step handled by a specialized agent or tool.

Agent & Node Roles:
Download & Transcribe Node:

Trigger: The process starts when a user submits a URL.

Action: Uses yt-dlp to download the audio and whisper to create an accurate transcript. It also fetches video metadata.

Output: The application state is updated with the audio file path, transcript, and metadata.

Analyze Presentation Node:

Trigger: Successful completion of the download and transcription.

Action: This node performs two key AI-driven tasks in parallel:

Content Analysis: An agent uses RAG to fetch the relevant pitch template (e.g., "Startup Pitch") and evaluates the transcript's content and structure against it.

Delivery Analysis: An agent analyzes the text for clarity, confidence, and filler words.

Output: The state is updated with two distinct text-based analyses.

Generate Report Node:

Trigger: Successful completion of the presentation analysis.

Action: A final agent synthesizes the content and delivery analyses, calculates scores for each, and generates a final, user-friendly report with actionable feedback.

Output: The state is updated with the final report object.

Flow Diagram
graph TD
    subgraph Frontend (User Interface)
        A[User Enters YouTube URL in UI] --> B{Submit Button Clicked};
        B --> C[Frontend calls /get-preview API];
        C --> D[Display Video Preview & Loading UI];
        D --> E{Frontend calls /run-pitch-analysis API};
        E --> F[Waits for Full Report...];
        G[Backend sends JSON Response] --> H[Parse JSON Data];
        H --> I[Display Results Dashboard: Scores, Report, Transcript];
    end

    subgraph Backend (FastAPI Server & LangGraph Workflow)
        C --> J[<b>/get-preview Endpoint</b><br>Uses yt-dlp to quickly fetch<br>Title & Thumbnail];
        J --> K[Send Preview JSON back to Frontend];

        E --> L[<b>/run-pitch-analysis Endpoint</b><br>Initiates LangGraph Workflow];

        subgraph LangGraph State Machine
            L --> M(<b>Node 1: Download & Transcribe</b><br>Agent uses yt-dlp to download audio<br>Agent uses Whisper to transcribe audio);
            M --> N{Error Check};
            N -- No Error --> O(<b>Node 2: Analyze Presentation</b><br>AI calls to LLM:<br>- Content Analysis (uses RAG)<br>- Delivery Analysis);
            N -- Error --> P[End with Error State];
            O --> Q(<b>Node 3: Generate Report</b><br>Agent synthesizes analyses<br>Calculates scores<br>Generates final report text);
        end

        Q --> G;
        P --> G;
    end

    subgraph External Services & Data
        RAG["fa:fa-database RAG Vector Store<br>(pitch_templates.json)"]
        LLM["fa:fa-brain AI Model (Google Gemini)"]
        YOUTUBE["fa:fa-youtube YouTube Video"]
    end

    %% Styling and Connections
    style A fill:#cde4ff,stroke:#66aaff,stroke-width:2px
    style I fill:#d4edda,stroke:#28a745,stroke-width:2px
    style P fill:#f8d7da,stroke:#dc3545,stroke-width:2px

    M --> YOUTUBE;
    O --> RAG;
    O --> LLM;
    Q --> LLM;

5. Setup and Installation
To run this project locally, please follow these steps.

Prerequisites
Python 3.9+

Node.js and npm (for the frontend)

ffmpeg: This must be installed on your system and accessible from the command line. You can download it from ffmpeg.org.

Backend Setup
Clone the repository and navigate to the backend folder:

git clone [your-repo-url]
cd [your-repo-name]/backend

Create and activate a Python virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

Create a .env file in the backend root folder and add your API key:

GOOGLE_API_KEY="AIza..."

Install the required dependencies:

python -m pip install -r requirements.txt

Run the FastAPI server:

python -m uvicorn main:app --reload

The backend will now be running on http://127.0.0.1:8000.

Frontend Setup
Open a new terminal and navigate to the frontend folder:

cd [your-repo-name]/frontend

Install the required Node.js packages:

npm install

Run the React development server:

npm run dev

The frontend will now be accessible at http://localhost:5173.

6. API Endpoints
The backend exposes two main API endpoints for the frontend to use:

POST /get-preview:

Purpose: Quickly fetches video metadata to display a preview to the user.

Request Body: { "youtube_url": "..." }

Response: A JSON object with title, thumbnail, and uploader.

POST /run-pitch-analysis:

Purpose: Triggers the full, stateful LangGraph workflow.

Request Body: { "youtube_url": "..." }

Response: The final state object from the LangGraph, containing the transcript, all analyses, and the final report with scores.