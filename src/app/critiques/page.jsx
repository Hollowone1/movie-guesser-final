// app/critiques/page.jsx

export default function Critiques() {
  const mockReviews = {
    "A la une": [1, 2, 3],
    "Les plus consultées": [1, 2, 3, 4, 5, 6]
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <h1 className="text-5xl font-black text-center">Movie Guesser</h1>
      <p className="text-center text-xl">Un film c’est bien, un bon film c’est mieux!</p>

      {Object.entries(mockReviews).map(([section, items], idx) => (
        <div key={idx} className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">{section}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 text-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition">
                <h3 className="text-xl font-bold">Close up</h3>
                <p className="italic text-sm">Drame</p>
                <img src="/closeup.jpg" alt="Close up" className="my-4 rounded w-full h-48 object-cover border-2 border-white shadow" />
                <p className="text-xs text-gray-600">Playlist 1</p>
                <p className="text-xs text-gray-600">"Vous êtes d’humeur copycat"</p>
                <div className="flex justify-between mt-4 text-sm">
                  <button className="bg-white text-purple-700 px-3 py-1 rounded-full font-bold">Voir la critique</button>
                  <button className="bg-white text-indigo-600 px-3 py-1 rounded-full font-bold">👍 Favori</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
