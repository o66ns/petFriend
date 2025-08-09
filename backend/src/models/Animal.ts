import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: {
        type: String,
        enum: [
            '<6 months',
            '<1 year',
            '1-3 years',
            '3-6 years',
            '6-10 years',
            '10+ years',
        ],
        required: true,
    },
    sex: { type: String, enum: ['male', 'female',], required: false },
    type: {
        type: String,
        enum: [
            'cat',
            'dog',
            'bird',
            'rodent',
            'fish',
            'reptile',
            'exotic animal',
            'domestic animal',
        ],
        required: true
    },

    color: {
        type: String,
        enum: [
            'black',
            'white',
            'grey',
            'red',
            'brown',
            'bicolor',
            'tricolor',
        ],
        required: false,
    },
    temperament: {
        type: String,
        enum: [
            'calm and peaceful',
            'active and playful',
            'shy and cautious',
            'aggressive and independent',
            'kid-friendly',
            'animal-friendly',
        ],
        required: false,
    },
    toilet: { type: Boolean, required: false, default: false },
    vaccine: {type: Boolean, required: false, default: false },
    sterilized: {type: Boolean, required: false, default: false },
    image: {type: [String]},
}, { timestamps: false })

export const Animal = mongoose.model('Animal', animalSchema)
