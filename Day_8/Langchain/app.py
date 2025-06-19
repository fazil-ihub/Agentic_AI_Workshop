import streamlit as st
import pandas as pd
from utils.leetcode_parser import parse_leetcode_csv
from agents.controller import run_agent

st.set_page_config(page_title="LeetCode OKR Analyzer", layout="centered")
st.title("📊 LeetCode Submission Analyzer")

st.markdown("""
Welcome to the **LeetCode OKR Analyzer** — your intelligent coding coach!  
Analyze your problem-solving patterns and get AI-driven personalized feedback.  
Built with **LangChain**, **Gemini**, and Multi-Agent Orchestration.

---

### 📋 What You’ll Get:
- Detects batch-solving, poor topic diversity, and pacing gaps
- Feedback on missing difficulty progression
- Gemini-based benchmarking vs NeetCode / LeetCode75 standards
""")

# File Upload
uploaded_file = st.file_uploader("📂 Upload your LeetCode submission CSV", type=["csv"])

if uploaded_file:
    try:
        df = parse_leetcode_csv(uploaded_file)

        st.subheader("📁 Submission Preview")
        st.dataframe(df)

        # Ensure required columns exist
        required_columns = {"problem_name", "timestamp", "difficulty", "topic"}
        if not required_columns.issubset(df.columns):
            st.error(f"❌ Your CSV must include these columns: {', '.join(required_columns)}")
        else:
            # Convert dataframe to CSV string
            csv_str = df.to_csv(index=False)

            st.subheader("🧠 AI-Powered Pattern Analysis")
            with st.spinner("Analyzing behavioral patterns..."):
                pattern_result = run_agent(f"Run pattern analysis on this CSV:\n{csv_str}")
                st.success("Pattern insights generated ✅")
                st.markdown(f"**Personalized Insights:**\n\n{pattern_result}")

            st.subheader("📘 Benchmark Feedback (Gemini AI)")
            with st.spinner("Benchmarking against top coding prep strategies..."):
                benchmark_result = run_agent(f"Run benchmarking feedback on this CSV:\n{csv_str}")
                st.success("Benchmark complete ✅")
                st.markdown(f"**AI Feedback:**\n\n{benchmark_result}")

    except Exception as e:
        st.error(f"🚫 Failed to process your file: {e}")
else:
    st.info("📤 Upload a LeetCode CSV with columns: `problem_name, date, difficulty, topic`")
