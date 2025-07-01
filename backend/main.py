from flask import Flask, request, jsonify
from movie_guesser_core import get_recommendation
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # autorise les appels depuis le frontend

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.json
    answers = data.get("answers", [])
    film = get_recommendation(answers)
    return jsonify(film)

if __name__ == "__main__":
    app.run(port=5000)
