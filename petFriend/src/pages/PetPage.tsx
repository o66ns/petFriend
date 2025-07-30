import { useParams, Link } from 'react-router-dom'

const animals = [
    { id: 1, name: 'Барсік', image: '/images/cat1.jpg', age: '2 роки', desc: 'Муркотливий котик, любить гратись.' },
    { id: 2, name: 'Рекс', image: '/images/dog1.jpg', age: '5 років', desc: 'Серйозний охоронець, але добряк.' },
    // інші...
]

const PetPage: React.FC = () => {
    const { id } = useParams()
    const pet = animals.find((a) => a.id === Number(id))

    if (!pet) {
        return <div className="p-10 text-center text-2xl">Тваринку не знайдено :(</div>
    }

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <Link to="/" className="text-blue-600 underline mb-6 inline-block">← назад до списку</Link>

            <img src={pet.image} alt={pet.name} className="w-full max-w-md object-cover rounded-2xl mb-6 mx-auto" />

            <h1 className="text-4xl font-bold mb-2 text-center">{pet.name}</h1>
            <p className="text-center text-gray-500 text-lg mb-4">{pet.age}</p>
            <p className="text-lg leading-relaxed">{pet.desc}</p>
        </div>
    )
}

export default PetPage
