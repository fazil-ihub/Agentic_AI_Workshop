import pandas as pd

def parse_leetcode_csv(file):
    try:
        df = pd.read_csv(file)
        if "date" not in df.columns:
            raise ValueError("CSV must contain a 'date' column")

        df["timestamp"] = pd.to_datetime(df["date"]) + pd.to_timedelta("00:00:00")
        return df[["problem_name", "timestamp", "difficulty", "topic"]]
    except Exception as e:
        raise ValueError(f"Error parsing CSV: {e}")
