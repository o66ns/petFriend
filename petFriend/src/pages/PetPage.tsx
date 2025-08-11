import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { host } from '../config'

interface Animal {
    _id: string
    name: string
    image: string
    age: string
    sex?: string
    type: string
    toilet?: boolean
    vaccine?: boolean
    sterilization?: boolean
    kidFriendly?: boolean
    animalFriendly?: boolean
    color?: string
    temperament?: string
    description?: string
}

const PetPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [animal, setAnimal] = useState<Animal | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return

        const fetchAnimal = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${host}/animals/${id}`)
                if (!res.ok) throw new Error('Failed to fetch animal')
                const data: Animal = await res.json()
                setAnimal(data)
            } catch (e: any) {
                setError(e.message || 'Error')
            } finally {
                setLoading(false)
            }
        }

        fetchAnimal()
    }, [id])

    if (loading) return <div className="p-10 text-center">Loading...</div>
    if (error) return <div className="p-10 text-center text-red-600">Error: {error}</div>
    if (!animal) return <div className="p-10 text-center">Animal not found :(</div>

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <Link to="/" className="text-black underline mb-6 inline-block">← back to list</Link>

            <img
                src={animal.image.startsWith('http') ? animal.image : `${host}/uploads/${animal.image}`}
                alt={animal.name}
                className="w-full max-w-md object-cover rounded-2xl mb-6 mx-auto"
            />

            <h1 className="text-4xl font-bold mb-2 text-center">{animal.name}</h1>
            <p className="text-center text-gray-500 text-lg mb-2">{animal.age}</p>
            <p className="text-center text-gray-500 text-md mb-2">
                {animal.sex === 'male' ? 'Male' : animal.sex === 'female' ? 'Female' : 'Unknown'}, {animal.type}
            </p>
            <p className="text-center text-gray-500 text-md mb-2">Color: {animal.color || 'Unknown'}, Temperament: {animal.temperament || 'Unknown'}</p>
            <p className="text-center text-gray-500 text-md mb-2">Toilet trained: {animal.toilet ? 'Yes' : 'No'}</p>
            <p className="text-center text-gray-500 text-md mb-2">Vaccinated: {animal.vaccine ? 'Yes' : 'No'}</p>
            <p className="text-center text-gray-500 text-md mb-2">Sterilized: {animal.sterilization ? 'Yes' : 'No'}</p>
            <p className="text-center text-gray-500 text-md mb-2">Kid-friendly: {animal.kidFriendly ? 'Yes' : 'No'}</p>
            <p className="text-center text-gray-500 text-md mb-2">Animal-friendly: {animal.animalFriendly ? 'Yes' : 'No'}</p>

            <p className="text-lg leading-relaxed">{animal.description || 'No description available.'}</p>
        </div>
    )
}

export default PetPage
