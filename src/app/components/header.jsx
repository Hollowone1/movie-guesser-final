"use client";

import Link from "next/link";


export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <img src="./movie_guesser.png" alt="Movie Guesser Logo" className="h-12" />
      <nav className="space-x-2">
        <Link href="/recommandation"><button className="bg-red-400 text-white py-2 px-4 rounded">L'Algorithme</button></Link>
        <Link href="/playlists"><button className="bg-yellow-400 text-white py-2 px-4 rounded">Playlists</button></Link>
        <Link href="/critiques"><button className="bg-gray-300 text-white py-2 px-4 rounded">Les critiques</button></Link>
      </nav>
      <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
        <span className="text-black text-xl">👤</span>
      </div>
    </header>
  );
}