// PetPage.tsx
import { useParams, Link } from 'react-router-dom'

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
    // інші...
]

const PetPage: React.FC = () => {
    const { id } = useParams()
    const pet = allAnimals.find((a) => a.id === Number(id))

    if (!pet) {
        return <div className="p-10 text-center text-2xl">Тваринку не знайдено :(</div>
    }

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <Link to="/" className="text-blue-600 underline mb-6 inline-block">← назад до списку</Link>

            <img src={pet.image} alt={pet.name} className="w-full max-w-md object-cover rounded-2xl mb-6 mx-auto" />

            <h1 className="text-4xl font-bold mb-2 text-center">{pet.name}</h1>
            <p className="text-center text-gray-500 text-lg mb-2">{pet.age}</p>
            <p className="text-center text-gray-500 text-md mb-2">{pet.gender}, {pet.type}, {pet.breed}</p>
            <p className="text-center text-gray-500 text-md mb-2">Колір: {pet.color}, Характер: {pet.temperament}</p>
            <p className="text-center text-gray-500 text-md mb-2">Привчена до лотка: {pet.litterTrained ? 'так' : 'ні'}</p>
            <p className="text-center text-gray-500 text-md mb-2">Вакцинована: {pet.vaccinated ? 'так' : 'ні'}</p>
            <p className="text-center text-gray-500 text-md mb-2">Стерилізована: {pet.sterilized ? 'так' : 'ні'}</p>
            <p className="text-center text-gray-500 text-md mb-2">Розташування: {pet.location}</p>
            <p className="text-center text-gray-500 text-md mb-6">{pet.daysOnPetfinder} днів чекає на дім</p>

            <p className="text-lg leading-relaxed">{pet.desc}</p>
        </div>
    )
}

export default PetPage
