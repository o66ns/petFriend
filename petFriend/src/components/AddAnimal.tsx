import React, { useState } from 'react'

const AddAnimal: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sex: '',
        type: '',
        breed: '',
        color: '',
        temperament: '',
        location: '',
        litterTrained: false,
        vaccinated: false,
        sterilized: false,
        image: null as File | null,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        const isCheckbox = type === 'checkbox'

        setFormData((prev) => ({
            ...prev,
            [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setFormData((prev) => ({
            ...prev,
            image: file,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const form = new FormData()

        // обробка текстових / логічних / числових полів
        Object.entries(formData).forEach(([key, value]) => {
            if (value === null) return // image === null або щось інше порожнє

            if (key === 'image' && value instanceof File) {
                form.append('image', value) // value тут точно File
            } else if (typeof value === 'boolean') {    
                form.append(key, String(value)) // boolean → "true"/"false"
            } else if (key === 'age') {
                form.append('age', String(Number(value)))
            } else {
                form.append(key, value as string)
            }
        })

        try {
            const res = await fetch('http://localhost:3000/animals', {
                method: 'POST',
                body: form,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })

            if (res.ok) {
                alert('Тварина додана')
            } else {
                const errorData = await res.json().catch(() => null)
                alert('Помилка: ' + (errorData?.error || res.statusText))
            }
        } catch (err) {
            alert('Помилка запиту')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="p-[4svh] m-[8svh] max-w-xl mx-auto flex flex-col gap-4 bg-white rounded-xl shadow"
        >
            <input name="name" placeholder="Імʼя" onChange={handleChange} required className="border p-2 rounded" />
            <input name="age" type="number" placeholder="Вік" onChange={handleChange} required className="border p-2 rounded" />
            <select name="sex" onChange={handleChange} required className="border p-2 rounded">
                <option value="">Стать</option>
                <option value="чол">Чол</option>
                <option value="жін">Жін</option>
            </select>
            <input name="type" placeholder="Тип" onChange={handleChange} className="border p-2 rounded" />
            <input name="breed" placeholder="Порода" onChange={handleChange} className="border p-2 rounded" />
            <input name="color" placeholder="Колір" onChange={handleChange} className="border p-2 rounded" />
            <input name="temperament" placeholder="Характер" onChange={handleChange} className="border p-2 rounded" />
            <input name="location" placeholder="Місто" onChange={handleChange} className="border p-2 rounded" />

            <label className="flex items-center gap-2">
                <input type="checkbox" name="litterTrained" onChange={handleChange} />
                Привчений до лотка
            </label>

            <label className="flex items-center gap-2">
                <input type="checkbox" name="vaccinated" onChange={handleChange} />
                Вакцинований
            </label>

            <label className="flex items-center gap-2">
                <input type="checkbox" name="sterilized" onChange={handleChange} />
                Стерилізований
            </label>

            <input type="file" name="image" accept="image/*" onChange={handleFileChange} />

            <button type="submit" className="bg-black text-white py-2 rounded">
                Додати тварину
            </button>
        </form>
    )
}

export default AddAnimal
