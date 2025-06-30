// app/layout.js
import './index.css'
import Header from './components/header'
import Footer from './components/Footer'


export const metadata = {
  title: 'Movie Guesser',
  description: 'Un film c’est bien, un bon film c’est mieux!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-screen bg-gray-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
