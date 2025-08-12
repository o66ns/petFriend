import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
    name: { type: String, required: true },
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
    },
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
    },
    sex: { type: String, enum: ['male', 'female',]},
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
    },
    temperament: {
        type: String,
        enum: [
            'calm and peaceful',
            'active and playful',
            'shy and cautious',
            'aggressive and independent',
        ],
    },
    toilet: { type: Boolean, default: false },
    vaccine: {type: Boolean, default: false },
    sterilization: {type: Boolean, default: false },
    kidFriendly: {type: Boolean, default: false },
    animalFriendly: {type: Boolean, default: false },
    description: {type: String},
    image: {type: String},
}, { timestamps: false })

export const Animal = mongoose.model('Animal', animalSchema)
