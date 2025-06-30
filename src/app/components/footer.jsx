export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-6">
      <div className="flex justify-center space-x-4 mb-4">
        <img src="./facebook.png" className="h-6" />
        <img src="./insta.png" className="h-6" />
        <img src="./Snapchat.png" className="h-6" />
        <img src="./tiktok.png" className="h-6" />
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:underline">L'algorithme</a>
        <a href="#" className="hover:underline">Qui sommes nous?</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">FAQ</a>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-full flex items-center px-4 py-2">
          <img src="./movie_guesser.png" alt="Logo" className="h-6 mr-2" />
          <input
            type="text"
            placeholder="Rechercher dans le site"
            className="outline-none text-black"
          />
        </div>
      </div>
    </footer>
  );
}