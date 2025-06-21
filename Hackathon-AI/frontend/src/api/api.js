import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your FastAPI backend
  headers: { "Content-Type": "application/json" },
});

/**
 * Submits a video for the full analysis pipeline.
 * This function calls the primary endpoint on your backend.
 * @param {string} youtube_url - The URL of the YouTube video.
 * @returns {Promise<object>} - A promise that resolves to the full evaluation report.
 */
export const analyzeVideo = (youtube_url) => {
  return apiClient.post("/analyze", { youtube_url });
};


export const getEvaluations = async (studentId) =>
  axios.get(`${BASE_URL}/evaluations`);

export const getFeedback = async (youtube_url) =>
  axios.get(`${BASE_URL}/feedback_logs`, { params: { youtube_url } });