import pandas as pd
import random
import os

CSV_PATH = "AllMovies.csv"

def get_recommendation(answers):
    # Chargement des colonnes essentielles
    cols = ['title', 'genres', 'popularity', 'release_date', 'vote_average',
            'runtime', 'spoken_languages', 'imdb_rating', 'imdb_votes']
    df = pd.read_csv(CSV_PATH, usecols=cols, low_memory=False)
    df = df.dropna(subset=['title', 'genres', 'runtime', 'vote_average'])

    # 1. Comment était ta journée ?
    map_genres = {
        "Stressante": ["Comedy", "Romance"],
        "Ennuyante": ["Adventure", "Fantasy"],
        "Épuisante": ["Drama", "Thriller"]
    }
    pattern = '|'.join(map_genres.get(answers[0], []))
    df = df[df["genres"].str.contains(pattern, case=False, na=False)]

    # 2. Échelle intellectuelle
    if answers[1].startswith("Aucune"):
        df = df[df["vote_average"] < 6.5]
    elif answers[1].startswith("Moyenne"):
        df = df[(df["vote_average"] >= 6.5) & (df["vote_average"] <= 7.8)]
    elif answers[1].startswith("Élevée"):
        df = df[df["vote_average"] > 7.8]

    # 3. Voyage ?
    if "étranger" in answers[2]:
        df = df[~df["spoken_languages"].str.contains("en", na=False, case=False)]
    else:
        df = df[df["spoken_languages"].str.contains("en", na=False, case=False)]

    # 4. Durée
    if ">2h" in answers[3]:
        df = df[df["runtime"] >= 120]
    elif "<2h" in answers[3]:
        df = df[df["runtime"] < 120]
    elif "<1h" in answers[3]:
        df = df[df["runtime"] < 60]

    # 5. Critique
    if "Oui" == answers[4]:
        df = df[(df["imdb_rating"] >= 7.5) & (df["imdb_votes"] >= 10000)]
    elif "Non" == answers[4]:
        df = df[(df["imdb_rating"] < 6) & (df["imdb_votes"] < 1000)]
    else:
        df = df[(df["imdb_rating"] >= 6) & (df["imdb_rating"] < 7.5)]

    if df.empty:
        return {"title": "Aucun film trouvé", "genre": "", "runtime": 0, "vote_average": 0}

    df = df.sort_values(by=["vote_average", "popularity"], ascending=False).head(15)
    film = random.choices(
        df.to_dict("records"),
        weights=df["vote_average"] + df["popularity"] / 20,
        k=1
    )[0]

    return {
        "title": film["title"],
        "genre": film["genres"].split(",")[0] if film["genres"] else "",
        "runtime": int(film["runtime"]),
        "vote_average": float(film["vote_average"]),
        "poster": None  # ajoute ça si tu veux intégrer poster_path plus tard
    }
