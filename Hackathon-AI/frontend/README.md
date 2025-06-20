🎥 Video Pitch Evaluation Portal – Frontend
This is the modern React-based frontend for the Agentic AI Pitch Evaluation Platform. It provides a professional, intuitive, and highly interactive user interface for submitting YouTube pitch videos and viewing the sophisticated AI-generated evaluations from the backend.

🌟 Live Demo
A video demonstration showcasing the full application (frontend + backend) can be found here:

🎬 Watch Project Demo Video

https://drive.google.com/drive/folders/1k2FbRmJEqxEb5rmny0jA-RisuOBsKTK4

🚀 Key Features
✨ Modern & Professional UI: Built with a sleek, dark theme using Tailwind CSS, featuring "glassmorphism" effects and smooth animations for a premium user experience.

Intuitive Multi-Step Flow: Guides the user through a seamless journey: a clean submission page, a dynamic loading page, and a comprehensive results dashboard.

📊 Interactive Evaluation Dashboard: Presents complex AI feedback in an easy-to-understand format, using charts (recharts) for scores and tabs for detailed reports.

▶️ Instant Video Preview: Upon URL submission, the app immediately fetches and displays the video's title and thumbnail, giving the user instant confirmation.

🛰️ Live Workflow Tracking: The loading page visually tracks the backend AI's progress through the analysis pipeline (Downloading, Transcribing, Analyzing, Scoring).

🧩 Modular & Maintainable Code: Built with a clean, component-based architecture that is easy to understand and scale.

📁 Project Structure
The frontend code is organized into a clean, modern React (Vite) structure to ensure maintainability and clarity.

/frontend/
├── public/                     # Static assets
└── src/
    ├── components/
    │   ├── ui.jsx              # Reusable, shadcn-style UI primitives (Button, Card, etc.)
    │   └── custom_components.jsx # Project-specific components (Header, ScoreGauge, etc.)
    │
    ├── pages/
    │   ├── EntryPage.jsx
    │   ├── LoadingPage.jsx
    │   └── ResultsPage.jsx
    │
    ├── App.jsx                 # Main application component with page routing logic
    ├── index.css               # Global styles and Tailwind CSS directives
    └── main.jsx                # React DOM render entry point

🛠️ Setup Instructions
Prerequisites
Node.js (v18 or later) and npm

A running instance of the backend server on http://localhost:8000

Steps
Clone the Repository
(If you haven't already)

git clone https://github.com/your-username/your-repo.git
cd your-repo/frontend

Install Dependencies
This will install React, Tailwind CSS, and other required packages.

npm install

Start the Development Server
This will launch the application in your browser.

npm run dev

The frontend will now be available at http://localhost:5173 (or another port if 5173 is busy).

📦 Core Dependencies
Library

Purpose

React

Core UI library for building components.

Vite

Modern, fast frontend build tool.

Tailwind CSS

For styling the user interface.

Recharts

For creating the score gauge and other charts.

Lucide React

For clean and beautiful icons.

📬 API Communication
The frontend communicates with the backend via two primary RESTful API endpoints.

Method

Endpoint

Description

POST

/get-preview

Quickly fetches video title and thumbnail for the loading page UI.

POST

/run-pitch-analysis

(Primary) Submits the video for the full AI evaluation workflow.
