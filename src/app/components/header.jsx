export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <img src="./movie_guesser.png" alt="Movie Guesser Logo" className="h-12" />
      <nav className="space-x-2">
        <button className="bg-red-400 text-white py-2 px-4 rounded">L'Algorithme</button>
        <button className="bg-yellow-400 text-white py-2 px-4 rounded">Playlists</button>
        <button className="bg-gray-300 text-white py-2 px-4 rounded">Les critiques</button>
      </nav>
      <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
        <span className="text-black text-xl">👤</span>
      </div>
    </header>
  );
}