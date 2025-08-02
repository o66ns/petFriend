import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    type: String, // кіт, собака і тд
    breed: String,
    color: String,
    description: String,
    shelterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // хто додав
    createdAt: { type: Date, default: Date.now }
})

export const Animal = mongoose.model('Animal', animalSchema)
