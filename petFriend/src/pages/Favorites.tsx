import React, { useState } from "react"
import { Link } from "react-router-dom"

const favoriteAnimals = [
  { id: 2, name: 'Рекс', image: '/images/dog1.jpg' },
  { id: 5, name: 'Барсік', image: '/images/cat1.jpg' },
]

const Favorites: React.FC = () => {
  const [favorites] = useState(favoriteAnimals) // можна замінити на контекст або реальний стейт

  if (favorites.length === 0) {
    return <div className="p-8 text-center text-xl">У тебе немає улюблених тварин :(</div>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Улюблені тварини</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((animal) => (
          <Link
            key={animal.id}
            to={`/animals/${animal.id}`}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center hover:scale-[1.02] transition"
          >
            <img src={animal.image} alt={animal.name} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h2 className="text-lg font-semibold">{animal.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Favorites
