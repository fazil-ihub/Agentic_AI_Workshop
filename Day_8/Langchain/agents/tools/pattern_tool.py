from langchain.tools import tool
import pandas as pd
from io import StringIO

@tool
def analyze_patterns_tool(csv_str: str) -> str:
    """
    Analyze behavioral patterns in LeetCode CSV string.
    Expects columns: problem_name, timestamp, difficulty, topic
    """

    try:
        # Load and clean CSV from string
        df = pd.read_csv(StringIO(csv_str))

        # Normalize column names (lowercase & stripped)
        df.columns = [col.strip().lower() for col in df.columns]

        # Rename to standard names (if needed)
        column_map = {
            'date': 'timestamp',
            'problem': 'problem_name',
            'tag': 'topic'
        }
        df.rename(columns=column_map, inplace=True)

        required = {'timestamp', 'difficulty', 'topic'}
        missing = required - set(df.columns)

        if missing:
            return f"❌ Missing columns in CSV: {', '.join(missing)}"

        # Convert timestamp
        df['timestamp'] = pd.to_datetime(df['timestamp'], errors='coerce')
        df = df.dropna(subset=['timestamp']).sort_values('timestamp')

        insights = []

        # 1. Rapid submission detection
        time_diffs = df['timestamp'].diff().dropna()
        if (time_diffs < pd.Timedelta(minutes=1)).sum() > 3:
            insights.append("⚠️ Rapid submissions detected — try spacing out your practice sessions.")

        # 2. Topic concentration
        top_topic = df['topic'].value_counts().idxmax()
        if df['topic'].value_counts().max() / len(df) > 0.5:
            insights.append(f"📚 Too many problems from the same topic: **{top_topic}** — diversify your practice.")

        # 3. Difficulty coverage
        if df['difficulty'].value_counts().get('Hard', 0) == 0:
            insights.append("🧩 No 'Hard' problems attempted — gradually increase challenge for growth.")

        if not insights:
            return "✅ Great job! Your solving pattern looks balanced and well-paced."

        return "\n".join(insights)

    except Exception as e:
        return f"❌ Error analyzing patterns: {e}"
