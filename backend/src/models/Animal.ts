    import mongoose from 'mongoose'

    const animalSchema = new mongoose.Schema({
        name: { type: String, required: true },
        age: Number,
        sex: String,
        type: String,
        breed: String,
        color: String,
        temperament: String,
        location: String,
        litterTrained: Boolean,
        vaccinated: Boolean,
        sterilized: Boolean,
        image: String,
        createdAt: { type: Date, default: Date.now }
    }, { timestamps: true })

    export const Animal = mongoose.model('Animal', animalSchema)
