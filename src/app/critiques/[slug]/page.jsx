// app/critiques/[slug]/page.jsx
'use client'

import { useParams } from 'next/navigation'

const filmData = {
  'close-up': {
    title: 'Close Up',
    noteGuesser: '9/10',
    noteMoyenne: '8.5/10',
    synopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate. Eget ornare quam viverra orci sagittis eu volutpat.',
    critique:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.',
    image: '/closeup.jpg'
  }
}

export default function FilmReviewPage() {
  const { slug } = useParams()
  const film = filmData[slug] || {
    title: 'Film inconnu',
    noteGuesser: '-',
    noteMoyenne: '-',
    synopsis: 'Aucune donnée disponible.',
    critique: 'Aucune critique disponible.',
    image: '/placeholder.jpg'
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-5xl font-black text-center">Movie Guesser</h1>
      <p className="text-center text-xl mb-10">Un film c’est bien, un bon film c’est mieux!</p>

      <h2 className="text-2xl font-bold text-center mb-10">Critique {film.title}</h2>

      <div className="flex flex-col md:flex-row md:items-start gap-10">
        <img
          src={film.image}
          alt={film.title}
          className="w-full md:w-1/2 rounded-xl shadow-xl border border-gray-300"
        />

        <div className="flex-1 space-y-4">
          <p className="text-lg font-semibold">La note du Guesser: <span className="font-black">{film.noteGuesser}</span></p>
          <p className="text-lg font-semibold">Notes moyennes: <span className="font-black">{film.noteMoyenne}</span></p>

          <div>
            <p className="text-lg font-bold underline mb-2">Synopsis:</p>
            <p className="text-sm leading-relaxed">{film.synopsis}</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-lg font-bold underline mb-2">La critique du guesser:</p>
        <p className="text-md leading-relaxed">{film.critique}</p>
      </div>
    </div>
  )
}