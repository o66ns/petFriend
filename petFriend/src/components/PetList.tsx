// PetList.tsx
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const allAnimals = [
    {
        id: 1,
        name: 'Барсік',
        image: '/images/cat1.jpg',
        age: '2 роки',
        gender: 'чол',
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
        name: 'Рекс',
        image: '/images/dog1.jpg',
        age: '5 років',
        gender: 'чол',
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
    // інші тварини...
]

const getColsPerRow = (width: number) => {
    if (width >= 1024) return 4
    if (width >= 768) return 3
    if (width >= 640) return 2
    return 1
}

const PetList: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(0)
    const [cols, setCols] = useState(getColsPerRow(window.innerWidth))
    const [filters, setFilters] = useState({
        type: '',
        gender: '',
        litterTrained: '',
        vaccinated: '',
        sterilized: '',
    })

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFilters((prev) => ({ ...prev, [name]: value }))
    }

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

    const filteredAnimals = allAnimals
        .filter((a) =>
            (!filters.type || a.type === filters.type) &&
            (!filters.gender || a.gender === filters.gender) &&
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

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-[4svh] bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />

            <div className='pt-[8svh] text-[10svh] font-semibold text-center'>PETS</div>

            <div className="px-[4svw] py-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <select name="type" onChange={handleFilterChange}><option value=''>Вид</option><option value="кіт">Кіт</option><option value="пес">Пес</option></select>
                <select name="gender" onChange={handleFilterChange}><option value=''>Стать</option><option value="чол">Чол</option><option value="жін">Жін</option></select>
                <select name="litterTrained" onChange={handleFilterChange}><option value=''>Лоток</option><option value="true">Так</option><option value="false">Ні</option></select>
                <select name="vaccinated" onChange={handleFilterChange}><option value=''>Вакцинація</option><option value="true">Так</option><option value="false">Ні</option></select>
                <select name="sterilized" onChange={handleFilterChange}><option value=''>Стерилізація</option><option value="true">Так</option><option value="false">Ні</option></select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-[7svh] px-[4svw]">
                {visibleAnimals.map((animal) => (
                    <Link
                        key={animal.id}
                        to={`/animals/${animal.id}`}
                        className="h-[68svh] bg-white rounded-2xl shadow p-4 flex flex-col items-center hover:scale-[1.01] transition"
                    >
                        <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                        <h2 className="text-lg font-semibold">{animal.name}</h2>
                    </Link>
                ))}
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
        </div>
    )
}

export default PetList
