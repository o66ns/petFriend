// Favorites.tsx
import React, { useState } from "react"
import { Link } from "react-router-dom"

const petImages = Object.values(
  import.meta.glob('../assets/Anton/*.jpg', {
    eager: true,
    import: 'default'
  }) as Record<string, string>
)

const allAnimals = [
  {
    id: 1,
    name: 'Anton',
    image: petImages[0],
    age: '2 роки',
    sex: 'чол',
    type: 'кіт',
    breed: 'дворовий',
    litterTrained: true,
    vaccinated: true,
    sterilized: true,
    color: 'сірий',
    temperament: 'активний',
    location: 'Київ',
    daysOnPetfinder: 45,
    desc: 'Муркотливий котик, любить гратись.'
  },
  {
    id: 2,
    name: 'Anton sleeps again',
    image: petImages[3],
    age: '5 років',
    sex: 'чол',
    type: 'пес',
    breed: 'вівчарка',
    litterTrained: false,
    vaccinated: false,
    sterilized: false,
    color: 'чорний',
    temperament: 'спокійний',
    location: 'Львів',
    daysOnPetfinder: 12,
    desc: 'Серйозний охоронець, але добряк.'
  },
]

const favoriteIds = [2, 1] // можеш замінити на useContext або props

const Favorites: React.FC = () => {
  const [favorites] = useState(
    allAnimals.filter((a) => favoriteIds.includes(a.id))
  )

  if (favorites.length === 0) {
    return <div className="p-8 text-center text-xl">У тебе немає улюблених тварин :(</div>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">FAVORITES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((animal) => (
          <Link
            key={animal.id}
            to={`/animals/${animal.id}`}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center hover:scale-[1.02] transition"
          >
            <img src={animal.image} alt={animal.name} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h2 className="text-lg font-semibold">{animal.name}</h2>
            <p className="text-sm text-gray-500">{animal.age}</p>
            <p className="text-sm text-gray-400">{animal.type} • {animal.breed}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Favorites
