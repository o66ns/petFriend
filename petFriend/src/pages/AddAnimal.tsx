import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { host } from '../config'

declare global {
    interface Window {
        uploadcare?: any
    }
}

const AddAnimal: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        age: '',
        sex: '',
        color: '',
        temperament: '',
        toilet: false,
        vaccine: false,
        sterilization: false,
        description: '',
        kidFriendly: false,
        animalFriendly: false,
        image: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            if (!window.uploadcare) return
            const widgetEl = document.querySelector('#uploadcare-uploader') as HTMLInputElement
            if (widgetEl) {
                const widget = window.uploadcare.Widget(widgetEl)
                widget.onChange((file: any) => {
                    if (file) {
                        file.done((fileInfo: any) => {
                            setFormData(prev => ({ ...prev, image: fileInfo.cdnUrl }))
                        })
                    }
                })
            }
        }

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        const isCheckbox = type === 'checkbox'
        setFormData(prev => ({
            ...prev,
            [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.image) {
            alert('Upload image first')
            return
        }

        try {
            const res = await fetch(`${host}/animals`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                alert('Animal added')
                navigate('/')
            } else {
                const errorData = await res.json().catch(() => null)
                alert('Error: ' + (errorData?.error || res.statusText))
            }
        } catch {
            alert('Request error')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="p-[4svh] m-[8svh] max-w-xl mx-auto flex flex-col gap-4 bg-white rounded-xl shadow"
        >
            <input name="name" placeholder="Name" onChange={handleChange} required className="border p-2 rounded" value={formData.name} />

            <select name="age" onChange={handleChange} required className="border p-2 rounded" value={formData.age}>
                <option value="">Age</option>
                <option value="<6 months">&lt;6 months</option>
                <option value="<1 year">&lt;1 year</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-6 years">3-6 years</option>
                <option value="6-10 years">6-10 years</option>
                <option value="10+ years">10+ years</option>
            </select>

            <select name="sex" onChange={handleChange} required className="border p-2 rounded" value={formData.sex}>
                <option value="">Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <select name="type" onChange={handleChange} required className="border p-2 rounded" value={formData.type}>
                <option value="">Type</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="bird">Bird</option>
                <option value="rodent">Rodent</option>
                <option value="fish">Fish</option>
                <option value="reptile">Reptile</option>
                <option value="exotic animal">Exotic animal</option>
                <option value="domestic animal">Domestic animal</option>
            </select>

            <select name="color" onChange={handleChange} required className="border p-2 rounded" value={formData.color}>
                <option value="">Color</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="grey">Grey</option>
                <option value="red">Red</option>
                <option value="brown">Brown</option>
                <option value="bicolor">Bicolor</option>
                <option value="tricolor">Tricolor</option>
            </select>

            <select name="temperament" onChange={handleChange} required className="border p-2 rounded" value={formData.temperament}>
                <option value="">Temperament</option>
                <option value="calm and peaceful">Calm and peaceful</option>
                <option value="active and playful">Active and playful</option>
                <option value="shy and cautious">Shy and cautious</option>
                <option value="aggressive and independent">Aggressive and independent</option>
            </select>

            <label className="flex items-center gap-2"><input type="checkbox" name="toilet" onChange={handleChange} checked={formData.toilet} />Toilet trained</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="vaccine" onChange={handleChange} checked={formData.vaccine} />Vaccinated</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="sterilization" onChange={handleChange} checked={formData.sterilization} />Sterilized</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="kidFriendly" onChange={handleChange} checked={formData.kidFriendly} />Kid-friendly</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="animalFriendly" onChange={handleChange} checked={formData.animalFriendly} />Animal-friendly</label>

            <textarea name="description" placeholder="Description" onChange={handleChange} required className="border p-2 rounded resize-y" value={formData.description} />

            <input
                type="hidden"
                id="uploadcare-uploader"
                role="uploadcare-uploader"
                data-public-key="13147021bead328b5fad"
                data-images-only
            />

            <button type="submit" className="bg-black text-white py-2 rounded mt-2">Add Animal</button>
        </form>
    )
}

export default AddAnimal