import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { host } from '../config'

const getColsPerRow = (width: number) => {
    if (width >= 1024) return 4
    if (width >= 768) return 3
    if (width >= 640) return 2
    return 1
}

const PetList: React.FC = () => {
    const [allAnimals, setAllAnimals] = useState<any[]>([])
    const [visibleCount, setVisibleCount] = useState(0)
    const [cols, setCols] = useState(getColsPerRow(window.innerWidth))
    const [loading, setLoading] = useState(true)
    const isLoggedIn = localStorage.getItem('token') !== null

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const res = await fetch(`${host}/animals`)
                const data = await res.json()
                setAllAnimals(data)
            } catch (err) {
                console.error('error fetching animals:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchAnimals()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            const newCols = getColsPerRow(window.innerWidth)
            setCols(newCols)
            setVisibleCount(newCols * 5)
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Filters
    const [filters, setFilters] = useState({
        type: '',
        age: '',
        sex: '',
        color: '',
        temperament: '',
        toilet: '',
        vaccine: '',
        sterilization: '',
        kidFriendly: '',
        animalFriendly: '',
    })

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFilters(prev => ({ ...prev, [name]: value }))
    }

    const filteredAnimals = allAnimals
        .filter(a =>
            (!filters.age || a.age === filters.age) &&
            (!filters.type || a.type === filters.type) &&
            (!filters.sex || a.sex === filters.sex) &&
            (!filters.color || a.color === filters.color) &&
            (!filters.temperament || a.temperament === filters.temperament) &&
            (!filters.toilet || a.toilet === (filters.toilet === 'true')) &&
            (!filters.vaccine || a.vaccine === (filters.vaccine === 'true')) &&
            (!filters.sterilization || a.sterilization === (filters.sterilization === 'true')) &&
            (!filters.kidFriendly || a.kidFriendly === (filters.kidFriendly === 'true')) &&
            (!filters.animalFriendly || a.animalFriendly === (filters.animalFriendly === 'true'))
        )

    const visibleAnimals = filteredAnimals.slice(0, visibleCount)
    const allShown = visibleCount >= filteredAnimals.length

    const handleShowMore = () => {
        setVisibleCount(prev => prev + cols * 2)
    }

    // Favorites
    const [favorites, setFavorites] = useState<string[]>([])
    const [favoritesLoaded, setFavoritesLoaded] = useState(false)
    const [token] = useState<string | null>(localStorage.getItem('token'))

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const res = await fetch(`${host}/api/me/favorites`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const data = await res.json()

                const ids = data.map((animal: any) => animal._id)
                setFavorites(ids)
                setFavoritesLoaded(true)
            } catch (err) {
                console.error('failed to load favorites:', err)
            }
        }

        if (token) fetchFavorites()
    }, [token])

    const toggleFavorite = async (id: string) => {
        const isFav = favorites.includes(id)

        setFavorites(prev =>
            isFav ? prev.filter(favId => favId !== id) : [...prev, id]
        )

        if (token) {
            try {
                const res = await fetch(`${host}/api/me/favorites/${id}`, {
                    method: isFav ? 'DELETE' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })

                if (!res.ok) throw new Error('failed to update favorite')
                if (!token) throw new Error('no token')
            } catch (err) {
                console.error('failed to update favorite:', err)
                setFavorites(prev =>
                    isFav ? [...prev, id] : prev.filter(favId => favId !== id)
                )
            }
        } else {
            alert('You need to register or log in to add favorites');
        }
    }

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-[4svh] bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />

            <div className='pt-[8svh] text-[10svh] font-semibold text-center'>PETS</div>

            {/* Filters */}
            <div className="px-[4svw] py-6">
                <div className="bg-white shadow rounded-2xl p-6 grid gap-4 grid-cols-2 sm:grid-cols-3 landscape:grid-cols-4 lg:grid-cols-6">
                    <select name="type" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>kind of animal</option>
                        <option value="cat">cat</option>
                        <option value="dog">dog</option>
                        <option value="bird">bird</option>
                        <option value="rodent">rodent</option>
                        <option value="fish">fish</option>
                        <option value="reptile">reptile</option>
                        <option value="exotic animal">exotic animal</option>
                        <option value="domestic animal">domestic animal</option>
                    </select>

                    <select name="age" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>age</option>
                        <option value="<6 months">&lt;6 months</option>
                        <option value="<1 year">&lt;1 year</option>
                        <option value="<1-3 years">1-3 years</option>
                        <option value="3-6 years">3-6 years</option>
                        <option value="6-10 years">6-10 years</option>
                        <option value="10+ years">10+ years</option>
                    </select>

                    <select name="sex" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>sex</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>

                    <select name="color" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>color</option>
                        <option value="black">black</option>
                        <option value="white">white</option>
                        <option value="grey">grey</option>
                        <option value="red">red</option>
                        <option value="brown">brown</option>
                        <option value="bicolor">bicolor</option>
                        <option value="tricolor">tricolor</option>
                    </select>

                    <select name="temperament" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>temperament</option>
                        <option value="calm and peaceful">calm and peaceful</option>
                        <option value="active and playful">active and playful</option>
                        <option value="shy and cautious">shy and cautious</option>
                        <option value="aggressive and independent">aggressive and independent</option>
                        <option value="kid-friendly">kid-friendly</option>
                        <option value="animal-friendly">animal-friendly</option>
                    </select>

                    <select name="toilet" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>toilet</option>
                        <option value="true">toilet trained</option>
                        <option value="false">not toilet trained</option>
                    </select>

                    <select name="vaccine" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>vaccine</option>
                        <option value="true">vaccinated</option>
                        <option value="false">not vaccinated</option>
                    </select>

                    <select name="sterilization" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>sterilization</option>
                        <option value="true">sterilized</option>
                        <option value="false">not sterilized</option>
                    </select>

                    <select name="kidFriendly" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>kid-friendly</option>
                        <option value="true">yes</option>
                        <option value="false">no</option>
                    </select>

                    <select name="animalFriendly" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>animal-friendly</option>
                        <option value="true">yes</option>
                        <option value="false">no</option>
                    </select>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-3 lg:grid-cols-4 gap-6 py-[7svh] px-[4svw]">
                {loading ? (
                    <div className="col-span-full text-center text-xl text-gray-500">
                        Loading animal cards...
                    </div>
                ) : (
                    visibleAnimals.map(animal => (
                        <div key={animal._id} className="relative">
                            <Link
                                to={`/animals/${animal._id}`}
                                className="h-80 z-0 bg-white rounded-2xl shadow p-4 flex flex-col items-center"
                            >
                                <img
                                    src={animal.image ? animal.image : 'https://via.placeholder.com/150'}
                                    className="w-full h-48 object-cover rounded-xl mb-4"
                                />
                                <h2 className="text-lg font-semibold">{animal.name}</h2>
                                <p className="text-sm text-gray-500">{animal.age}</p>
                                <p className="text-sm text-gray-400">{animal.type} • {animal.temperament}</p>
                            </Link>

                            <button
                                onClick={e => {
                                    e.preventDefault()
                                    if (isLoggedIn && favoritesLoaded) {
                                        toggleFavorite(animal._id)
                                    } else {
                                        alert('You need to log in to add favorites');
                                    }
                                }}
                                className="absolute top-2 right-2 z-20 text-2xl hover:scale-[1.1] transition"
                            >
                                <span className={((favorites.includes(animal._id) && favoritesLoaded) || !isLoggedIn
                                    ? 'text-red-500'
                                    : 'text-black') +
                                    ' bg-white rounded-xl p-1 inline-flex items-center justify-center text-[5svh] w-[7svh] h-[7svh]'}
                                >
                                    ❤︎
                                </span>
                            </button>

                            <button
                                onClick={e => {
                                    if (!loading && isLoggedIn) {
                                        e.preventDefault()
                                        const confirmDelete = window.confirm(
                                            'Are you sure you want to delete this cute face looking straight into your soul?'
                                        )
                                        if (!confirmDelete) return
                                    } else {
                                        e.preventDefault()
                                        alert('You need to log in to delete animals');
                                    }

                                    fetch(`${host}/animals/${animal._id}`, {
                                        method: 'DELETE',
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                                    })
                                        .then(res => {
                                            if (!res.ok) throw new Error('Failed to delete')
                                            setAllAnimals(prev => prev.filter(a => a._id !== animal._id))
                                            setFavorites(prev => prev.filter(id => id !== animal._id))
                                        })
                                        .catch(err => {
                                            alert('Error deleting: ' + err.message)
                                        })
                                }}
                                className="absolute bg-white h-6.5 w-6.5 rounded top-47 right-70 z-20 text-3 transition cursor-pointer"
                                title="Delete"
                            >
                                🗑️
                            </button>
                        </div>
                    ))
                )}

                <Link
                    onClick={e => {
                        if (!loading && isLoggedIn) {
                        } else {
                            e.preventDefault()
                            alert('You need to log in to add animals');
                        }
                    }}
                    to="/AddAnimal"
                    className="h-80 bg-white rounded-2xl shadow p-4 flex flex-col justify-center items-center text-5xl font-bold text-gray-500 hover:scale-[1.01] transition"
                >
                    +
                </Link>
            </div>

            {
                !loading && !allShown && (
                    <div className="flex justify-center pb-[6svh]">
                        <button
                            onClick={handleShowMore}
                            className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                        >
                            more
                        </button>
                    </div>
                )
            }

            <div className="absolute bottom-0 left-0 w-full h-[6svh] bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10" />
        </div >
    )
}

export default PetList
