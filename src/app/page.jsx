import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="text-center">
        <section className="bg-gray-100 p-8 h-screen flex flex-col items-center justify-center">
          <h1 className="text-8xl font-rokkitt font-bold my-4">Movie Guesser</h1>
          <p className="mb-8 text-4xl">Un film c’est bien, un bon film c’est mieux!</p>
        </section>

        <section className="bg-purple-700 text-white py-12 px-6 h-screen flex flex-col items-center justify-center">
          <h2 className="text-8xl font-bold mb-4">Qui sommes nous?</h2>
          <p className="mb-4 max-w-2xl mx-auto text-3xl">
            Vous avez des idées de film mais ne savez pas quoi choisir? MovieGuesser le choisit pour vous!<br/>
            MovieGuesser est un algorithme qui prend en compte vos humeurs de la journée et vous conseille le film idéal
            pour vos matins, après-midis et soirées cinéma!
          </p>
          <button className="bg-red-400 py-2 px-6 rounded">Envie d’essayer?</button>
        </section>

        <section className="p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Partagez vos playlists</h2>
            <p>
              Avec movie guesser, partagez vos playlists dans le feed de vos réseaux préférés avec vos amis. <br/>
              Vos films, c’est une part de vous, quand vous partagez, c’est encore mieux, plus besoin d’un psy!
            </p>
            <button className="bg-yellow-400 py-2 px-6 rounded mt-4">Créer une playlist</button>
          </div>
          <img src="./playlists.png" alt="Playlist Icon" className="mx-auto" />
        </section>
      </main>
    </div>
  );
}