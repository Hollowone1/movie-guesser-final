// pages/api/recommend.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        throw new Error(`Erreur backend : ${response.statusText}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erreur côté API Node → Python' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
