import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([])

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token')
      if (!token) return

      try {
        const res = await fetch('http://localhost:3000/api/me/favorites', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const data = await res.json()
        setFavorites(data)
      } catch (err) {
        console.error('не вдалось завантажити фаворити', err)
      }
    }

    fetchFavorites()
  }, [])

  if (favorites.length === 0) {
    return <div className="p-8 text-center text-xl">У тебе немає улюблених тварин :(</div>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">FAVORITES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((animal) => (
          <Link
            key={animal._id}
            to={`/animals/${animal._id}`}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center hover:scale-[1.02] transition"
          >
            <img
              src={animal.image || 'https://via.placeholder.com/150'}
              alt={animal.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
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
