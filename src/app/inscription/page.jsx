// pages/signup.js

import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    pseudo: '',
    password: '',
    confirm: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Email invalide';
    if (!formData.pseudo.trim()) newErrors.pseudo = 'Pseudonyme requis';
    if (formData.password.length < 6) newErrors.password = 'Mot de passe trop court';
    if (formData.password !== formData.confirm) newErrors.confirm = 'Les mots de passe ne correspondent pas';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      console.log("✅ Données valides :", formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-black">Movie Guesser</h1>
      <p className="text-xl">Un film c’est bien, un bon film c’est mieux!</p>
      <h2 className="text-2xl font-bold mt-8">S'inscrire</h2>

      <form onSubmit={handleSubmit} className="mt-6 bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="block text-left text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border px-3 py-2 rounded-md"
            placeholder="Value"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="pseudo" className="block text-left text-sm font-medium">Pseudonyme</label>
          <input
            id="pseudo"
            type="text"
            value={formData.pseudo}
            onChange={handleChange}
            className="mt-1 w-full border px-3 py-2 rounded-md"
            placeholder="Value"
          />
          {errors.pseudo && <p className="text-red-500 text-sm mt-1 text-left">{errors.pseudo}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-left text-sm font-medium">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full border px-3 py-2 rounded-md"
            placeholder="Value"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1 text-left">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirm" className="block text-left text-sm font-medium">Confirmer mot de passe</label>
          <textarea
            id="confirm"
            value={formData.confirm}
            onChange={handleChange}
            className="mt-1 w-full border px-3 py-2 rounded-md"
            placeholder="Value"
          />
          {errors.confirm && <p className="text-red-500 text-sm mt-1 text-left">{errors.confirm}</p>}
        </div>

        <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded-md font-bold">
          S'inscrire
        </button>

        {success && (
          <p className="text-green-600 text-sm mt-4">✅ Inscription réussie !</p>
        )}
      </form>
    </div>
  );
}
