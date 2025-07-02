'use client'

import { useParams } from 'next/navigation'

const mockPlaylists = {
  'le-gout-du-sang': {
    title: 'Le gout du sang',
    films: [1, 2, 3]
  },
  'harry-potter-cest-has-been': {
    title: "Harry Potter, c’est has been",
    films: [1, 2, 3]
  },
  'la-vengeance-dans-le-cerveau': {
    title: "La vengeance dans le cerveau",
    films: [1, 2, 3]
  }
}

export default function PlaylistDetail() {
  const { slug } = useParams()
  const playlist = mockPlaylists[slug] || { title: "Playlist inconnue", films: [] }

  return (
    <div className="min-h-screen px-4 py-10">
      <h1 className="text-5xl font-black text-center">{playlist.title}</h1>
      <p className="text-center text-xl mb-10">Retrouvez tous vos films soigneusement sélectionnés</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {playlist.films.map((_, i) => (
          <div key={i} className="bg-purple-50 p-4 rounded-xl shadow">
            <h3 className="font-bold">Close up</h3>
            <p className="italic text-sm">Drame</p>
            <img src="/closeup.jpg" alt="Close up" className="my-4 rounded w-full h-48 object-cover" />
            <p className="text-xs">Playlist : {playlist.title}</p>
            <p className="text-xs">Vous êtes d’humeur copycat</p>
            <div className="flex justify-between mt-4 text-sm">
              <button className="text-red-600">Supprimer</button>
              <button className="text-purple-700 font-bold">Ajouter aux favoris</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
