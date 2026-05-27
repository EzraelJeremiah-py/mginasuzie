from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/api/portfolio", methods=["GET"])
def portfolio():
    data = {
        "name": "Suzana Mgina",
        "title": "Data Analysis Student | Cloud Computing Student",
        "profile": "Passionate student interested in data analysis, statistics, cloud computing, and research. Enjoys developing modern web applications, analyzing datasets, and learning new technologies.",
        "skills": [
            "R Programming",
            "Python",
            "HTML & CSS",
            "Cloud Computing",
            "Data Visualization",
            "Statistical Analysis"
        ],
        "qualifications": [
            "Bachelor Degree Student",
            "Introduction to Data Science Certificate",
            "Cloud Computing Training",
            "R Programming Skills"
        ],
        "projects": [
            {
                "title": "Student Performance Analysis using R",
                "description": "Analyzed student datasets using R programming and statistical analysis techniques."
            },
            {
                "title": "Agricultural Research Analysis",
                "description": "Conducted ANOVA analysis and interpreted results using R Studio."
            }
        ],
        "contact": {
            "email": "suzanamgina74@gmail.com",
            "phone": "+255 616769896",
            "location": "Dar es Salaam, Tanzania"
        }
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
