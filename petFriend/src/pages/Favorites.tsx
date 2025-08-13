import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { host } from '../config'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([])

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token')
      if (!token) return

      try {
        const res = await fetch(`${host}/api/me/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const data = await res.json()
        setFavorites(data)
      } catch (err) {
        console.error('Failed to load favorites', err)
      }
    }

    fetchFavorites()
  }, [])

  if (favorites.length === 0) {
    return <div className="p-8 text-center text-xl">You have no favorite animals :(</div>
  }


  const token = localStorage.getItem('token')

  const toggleFavorite = async (animal: any) => {
    const isFav = favorites.some(fav => fav._id === animal._id)

    setFavorites((prev) =>
      isFav ? prev.filter(fav => fav._id !== animal._id) : [...prev, animal]
    )

    try {
      const res = await fetch(`${host}/api/me/favorites/${animal._id}`, {
        method: isFav ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      if (!res.ok) {
        throw new Error('Failed to update favorites')
      }

      if (!token) {
        throw new Error('No token found')
      }
    } catch (err) {
      console.error('Failed to update favorite:', err)
      setFavorites((prev) =>
        isFav ? [...prev, animal] : prev.filter(fav => fav._id !== animal._id)
      )
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">FAVORITES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((animal) => (
          <div key={animal._id} className="bg-white relative rounded-2xl shadow p-4 flex flex-col items-center hover:scale-[1.02] transition">
            <Link to={`/animals/${animal._id}`}>
              <img
                src={animal.image ? animal.image : 'https://via.placeholder.com/150'}
                alt={animal.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold">{animal.name}</h2>
              <p className="text-sm text-gray-500">{animal.age}</p>
              <p className="text-sm text-gray-400">{animal.type} • {animal.temperament}</p>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault()
                toggleFavorite(animal)
              }}
              className="absolute top-2 right-2 z-20 text-2xl"
            >
              <span className={(favorites.includes(animal._id) ? 'text-black' : 'text-red-500') + '  bg-white rounded-xl p-1 inline-flex items-center justify-center text-[5svh] w-[7svh] h-[7svh]'} >
                ❤︎
              </span>
            </button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Favorites
