import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const petImages = Object.values(
    import.meta.glob('../assets/Anton/*.jpg', {
        eager: true,
        import: 'default'
    }) as Record<string, string>
)

// petImages.map((img, i) => (
//     <img key={i} src={img} alt={`anton ${i + 1}`} />
// ))

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
        name: 'Anton programmer',
        image: petImages[1],
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
    {
        id: 3,
        name: 'Anton sleeps',
        image: petImages[2],
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
    {
        id: 4,
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
    {
        id: 5,
        name: 'Anton serious',
        image: petImages[4],
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
        sex: '',
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

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-[4svh] bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />

            <div className='pt-[8svh] text-[10svh] font-semibold text-center'>PETS</div>

            <div className="px-[4svw] py-6">
                <div className="bg-white shadow rounded-2xl p-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
