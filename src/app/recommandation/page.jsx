

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    text: "Comment était ta journée ?",
    answers: ["Stressante", "Ennuyante", "Épuisante"],
  },
  {
    text: "À quelle échelle intellectuelle as-tu besoin d’un film ?",
    answers: ["Aucune", "Moyenne", "Élevée"],
  },
  {
    text: "Te sens-tu prêt à voyager ?",
    answers: ["Oui", "Non"],
  },
  {
    text: "Tu es prêt à tenir toute la soirée ?",
    answers: ["Oui", "Non", "Plusieurs films"],
  },
  {
    text: "La critique est sévère, mais est-elle justifiée ?",
    answers: ["Oui", "Non", "Plus ou moins"],
  },
];

export default function Home() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleStart = () => setStep(0);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      fetch('../api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: newAnswers })
      })
        .then(res => res.json())
        .then(data => setResult(data));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      {step === -1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <h1 className="text-5xl font-black">Movie Guesser</h1>
          <p className="text-xl">Un film c’est bien, un bon film c’est mieux!</p>
          <p className="max-w-md mx-auto">
            Répondez à quelques questions concernant votre humeur.<br/>
            Movie guesser fait pour vous le dur labeur !
          </p>
          <button onClick={handleStart} className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold">
            Commencer
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {step >= 0 && step < questions.length && (
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 w-full max-w-xl"
          >
            <h2 className="text-3xl font-bold">Question {step + 1}</h2>
            <p className="text-lg">{questions[step].text}</p>
            <div className="flex flex-col gap-4">
              {questions[step].answers.map((ans, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(ans)}
                  className="py-2 px-4 rounded-full text-white font-bold"
                  style={{ backgroundColor: ['#ef4444', '#f59e0b', '#d1d5db'][i] || '#6b7280' }}
                >
                  {ans}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12">
          <h2 className="text-2xl font-bold mb-4">TADAM! Voici votre super film!</h2>
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">{result.title}</h3>
            <p className="italic">{result.genre}</p>
            {result.poster && <img src={result.poster} alt={result.title} className="mt-4 w-40 mx-auto" />}
            <div className="mt-4 text-sm">
              <p>Durée : {result.runtime} min</p>
              <p>Note : {result.vote_average}</p>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              <button className="text-sm text-red-600 underline">Supprimer</button>
              <button className="text-sm text-purple-600 font-bold">Ajouter aux favoris</button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}