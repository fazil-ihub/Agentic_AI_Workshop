class ReportGenerator:
    @staticmethod
    def compile(topic, questions, answers):
        report = f"# Research Report on: {topic}\n\n"
        report += f"## Introduction\nThis report explores key questions related to **{topic}**, based on web research.\n\n"

        for question in questions:
            report += f"### {question}\n"
            for point in answers[question]:
                report += f"{point}\n"
            report += "\n"

        report += "## Conclusion\nThis concludes the findings gathered from web research.\n"
        return report
