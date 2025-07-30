import React, { useState, useEffect } from "react"

const animals = [
    { id: 1, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 2, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 3, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 4, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 5, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 6, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 7, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 8, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 9, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 10, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 11, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 12, name: 'Барсік', image: '/images/cat1.jpg' },
    { id: 13, name: 'Барсік', image: '/images/cat1.jpg' },
    // більше...
]

const getColsPerRow = (width: number) => {
    if (width >= 1024) return 4 // lg
    if (width >= 768) return 3  // md
    if (width >= 640) return 2  // sm
    return 1 // мобілка
}

const PetList: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(0)
    const [cols, setCols] = useState(getColsPerRow(window.innerWidth))

    useEffect(() => {
        const handleResize = () => {
            const newCols = getColsPerRow(window.innerWidth)
            setCols(newCols)
            setVisibleCount(newCols * 3)
        }

        window.addEventListener("resize", handleResize)
        handleResize() // викликаємо одразу, бо інакше не покаже при завантаженні

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const visibleAnimals = animals.slice(0, visibleCount)
    const allShown = visibleCount >= animals.length

    const handleShowMore = () => {
        setVisibleCount(prev => prev + cols * 2) // ще 2 ряди
    }

    return (
        <div className="relative">

            <div className="absolute top-0 left-0 w-full h-[4svh] bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />

            <div className='pt-[8svh] text-[10svh] font-semibold text-center'>PETS</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-[7svh] px-[4svw]">
                {visibleAnimals.map((animal) => (
                    <div key={animal.id} className="h-[68svh] bg-white rounded-2xl shadow p-4 flex flex-col items-center">
                        <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                        <h2 className="text-lg font-semibold">{animal.name}</h2>
                    </div>
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
