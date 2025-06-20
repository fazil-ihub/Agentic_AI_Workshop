:

🎥 Video Pitch Evaluation Portal – Frontend
This is the React-based frontend for the Pitch Analysis AI Platform. It enables users to submit YouTube pitch videos and view AI-generated evaluations, feedback, and scoring in a visually intuitive dashboard.

🌟 Live Demo
🎬 Watch Demo Video

🚀 Key Features
📨 Video Submission: Submit YouTube video URLs for evaluation

📊 Evaluation Dashboard: View clarity, tone, structure, and content scores

📝 Feedback Modal: Get detailed AI-generated markdown feedback in a popup

🧩 Modular Components: Built using reusable and maintainable components

🎨 Tailwind CSS UI: Modern, responsive design with gradient background

📁 Project Structure
graphql
Copy
Edit
pitch-evaluation-frontend/
├── public/                     # Static files
├── src/
│   ├── api/
│   │   └── api.js              # Axios config & API calls
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   └── tabs.jsx
│   │   └── VideoDashboard.jsx  # Main dashboard
│   ├── App.js                  # App entry point and routing
│   ├── index.js                # React DOM render
│   └── styles.css              # Tailwind and global styles
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md
🛠️ Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/pitch-evaluation-frontend.git
cd pitch-evaluation-frontend
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
⚠️ Ensure the backend server is running on http://localhost:8000

📦 Core Dependencies
react

axios

react-markdown

tailwindcss

postcss

autoprefixer

📬 API Communication
The frontend communicates with the backend via these endpoints:

POST /analyze – Submit video for evaluation

GET /evaluations – Fetch all past evaluations

GET /feedback_logs – Retrieve feedback for a specific video

