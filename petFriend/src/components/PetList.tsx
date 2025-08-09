import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import AuthModal from './AuthModal'

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
    const isLoggedIn = localStorage.getItem('token') !== null





    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const res = await fetch('http://localhost:3000/animals')
                const data = await res.json()
                setAllAnimals(data)
            } catch (err) {
                console.error('помилка при отриманні тварин:', err)
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





    // Filter


    const [filters, setFilters] = useState({
        type: '',
        sex: '',
        litterTrained: '',
        vaccinated: '',
        sterilized: '',
    })


    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFilters((prev) => ({ ...prev, [name]: value }))
    }



    const filteredAnimals = allAnimals
        .filter((a) =>
            (!filters.type || a.type === filters.type) &&
            (!filters.sex || a.sex === filters.sex) &&
            (!filters.litterTrained || a.litterTrained === (filters.litterTrained === 'true')) &&
            (!filters.vaccinated || a.vaccinated === (filters.vaccinated === 'true')) &&
            (!filters.sterilized || a.sterilized === (filters.sterilized === 'true'))
        )
        .sort((a, b) => b.daysOnPetfinder - a.daysOnPetfinder)

    const visibleAnimals = filteredAnimals.slice(0, visibleCount)
    const allShown = visibleCount >= filteredAnimals.length

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + cols * 2)
    }





    // Favorites






    const [favorites, setFavorites] = useState<string[]>([])
    const [favoritesLoaded, setFavoritesLoaded] = useState(false)
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    const [showAuth, setShowAuth] = useState(false)
    const [pendingFavoriteId, setPendingFavoriteId] = useState<string | null>(null)





    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/me/favorites', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const data = await res.json()

                const ids = data.map((animal: any) => animal._id)

                setFavorites(ids)
                setFavoritesLoaded(true)

            } catch (err) {
                console.error('не вдалось завантажити улюблених:', err)
            }
        }

        fetchFavorites()
    }, [token])


    const toggleFavorite = async (id: string) => {

        const isFav = favorites.includes(id)

        setFavorites((prev) =>
            isFav ? prev.filter((favId) => favId !== id) : [...prev, id]
        )

        if (token) {
            try {
                const res = await fetch(`http://localhost:3000/api/me/favorites/${id}`, {
                    method: isFav ? 'DELETE' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })

                if (!res.ok) {
                    throw new Error('не вдалось оновити улюблене')
                }
                if (!token) {
                    throw new Error('немає токена')
                }
            } catch (err) {
                console.error('фейл при оновленні улюбленого:', err)
                setFavorites((prev) =>
                    isFav ? [...prev, id] : prev.filter((favId) => favId !== id)
                )
            }
        } else {
            setShowAuth(true)
        }
    }












    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-[4svh] bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />

            <div className='pt-[8svh] text-[10svh] font-semibold text-center'>PETS</div>

            <div className="px-[4svw] py-6">
                <div className="bg-white shadow rounded-2xl p-6 grid gap-4 grid-cols-2 sm:grid-cols-3 landscape:grid-cols-4 lg:grid-cols-6">
                    <select name="type" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>kind of animal</option>
                        <option value="кіт">cat</option>
                        <option value="пес">dog</option>
                        <option value="пес">bird</option>
                        <option value="пес">rodent</option>
                        <option value="пес">fish</option>
                        <option value="пес">reptile</option>
                        <option value="пес">exotic animal</option>
                        <option value="пес">domestic animal</option>
                    </select>

                    <select name="sex" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>sex</option>
                        <option value="чол">male</option>
                        <option value="жін">female</option>
                    </select>

                    <select name="litterTrained" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>toilet</option>
                        <option value="true">toilet trained</option>
                        <option value="false">not toiled trained</option>
                    </select>

                    <select name="vaccinated" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>vaccine</option>
                        <option value="true">vaccinated</option>
                        <option value="false">not vaccinated</option>
                    </select>

                    <select name="sterilized" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>sterilization</option>
                        <option value="true">sterilized</option>
                        <option value="false">not sterilized</option>
                    </select>

                    <select name="color" onChange={handleFilterChange} className="border rounded-lg p-2">
                        <option value=''>color</option>
                        <option value="true">black</option>
                        <option value="false">white</option>
                        <option value="false">orange</option>
                        <option value="false">grey</option>
                        <option value="false">brown</option>
                        <option value="false">black&white</option>
                    </select>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-3 lg:grid-cols-4 gap-6 py-[7svh] px-[4svw]">
                {visibleAnimals.map((animal) => (
                    <div key={animal._id} className="relative">
                        <Link
                            to={`/animals/${animal._id}`}
                            className="h-[68svh]  z-0 bg-white rounded-2xl shadow p-4 flex flex-col items-center hover:scale-[1.01] transition"
                        >
                            <img src={animal.image ? `http://localhost:3000/uploads/${animal.image}` : 'https://via.placeholder.com/150'}
                                className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h2 className="text-lg font-semibold">{animal.name}</h2>
                        </Link>

                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                if (isLoggedIn && favoritesLoaded) {
                                    toggleFavorite(animal._id)
                                } else {
                                    setPendingFavoriteId(animal._id)
                                    setShowAuth(true)
                                }
                            }}
                            className="absolute top-2 right-2 z-20 text-2xl"
                        >
                            <span className={(((favorites.includes(animal._id) && favoritesLoaded) ?? !isLoggedIn) ? 'text-red-500' : 'text-black') + '  bg-white rounded-xl p-1 inline-flex items-center justify-center text-[5svh] w-[7svh] h-[7svh]'}>
                                ❤︎
                            </span>
                        </button>

                    </div>
                ))}
                {isLoggedIn && (
                    <Link
                        to="/AddAnimal"
                        className="h-[68svh] bg-white rounded-2xl shadow p-4 flex flex-col justify-center items-center text-5xl font-bold text-gray-500 hover:scale-[1.01] transition">
                        +
                    </Link>
                )}


            </div>

            {!allShown && (
                <div className="flex justify-center pb-[6svh]">
                    <button
                        onClick={handleShowMore}
                        className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                    >
                        ще
                    </button>
                </div>
            )}

            <div className="absolute bottom-0 left-0 w-full h-[6svh] bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10" />

            {showAuth && (
                <AuthModal
                    onClose={() => {
                        setShowAuth(false)
                        setPendingFavoriteId(null)
                    }}
                    onSuccess={(newToken) => {
                        setToken(newToken)
                        setShowAuth(false)

                        if (pendingFavoriteId) {
                            toggleFavorite(pendingFavoriteId)
                            setPendingFavoriteId(null)
                        }
                    }}
                />
            )}
        </div>
    )
}

export default PetList
