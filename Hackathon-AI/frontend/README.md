🎥 Video Pitch Evaluation Portal – FrontendThis is the modern React-based frontend for the Agentic AI Pitch Evaluation Platform. It provides a professional, intuitive, and highly interactive user interface for submitting YouTube pitch videos and viewing the sophisticated AI-generated evaluations from the backend.🌟 Live DemoA video demonstration showcasing the full application (frontend + backend) can be found here:🎬 Watch Project Demo Video🚀 Key Features✨ Modern & Professional UI: Built with a sleek, dark theme using Tailwind CSS, featuring "glassmorphism" effects and smooth animations for a premium user experience.Intuitive Multi-Step Flow: Guides the user through a seamless journey: a clean submission page, a dynamic loading page, and a comprehensive results dashboard.📊 Interactive Evaluation Dashboard: Presents complex AI feedback in an easy-to-understand format, using charts (recharts) for scores and tabs for detailed reports.▶️ Instant Video Preview: Upon URL submission, the app immediately fetches and displays the video's title and thumbnail, giving the user instant confirmation.🛰️ Live Workflow Tracking: The loading page visually tracks the backend AI's progress through the analysis pipeline (Downloading, Transcribing, Analyzing, Scoring).🧩 Modular & Maintainable Code: Built with a clean, component-based architecture that is easy to understand and scale.📁 Project StructureThe frontend code is organized into a clean, modern React (Vite) structure to ensure maintainability and clarity./frontend/
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
🛠️ Setup InstructionsPrerequisitesNode.js (v18 or later) and npmA running instance of the backend server on http://localhost:8000StepsClone the Repository(If you haven't already)git clone https://github.com/your-username/your-repo.git
cd your-repo/frontend
Install DependenciesThis will install React, Tailwind CSS, and other required packages.npm install
Start the Development ServerThis will launch the application in your browser.npm run dev
The frontend will now be available at http://localhost:5173 (or another port if 5173 is busy).📦 Core DependenciesLibraryPurposeReactCore UI library for building components.ViteModern, fast frontend build tool.Tailwind CSSFor styling the user interface.RechartsFor creating the score gauge and other charts.Lucide ReactFor clean and beautiful icons.📬 API CommunicationThe frontend communicates with the backend via two primary RESTful API endpoints.MethodEndpointDescriptionPOST/get-previewQuickly fetches video title and thumbnail for the loading page UI.POST/run-pitch-analysis(Primary) Submits the video for the full AI evaluation workflow.