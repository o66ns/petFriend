"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const animalSchema = new mongoose_1.default.Schema({
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
        required: true
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
        required: true,
    },
    sex: { type: String, enum: ['male', 'female',], required: true },
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
        required: true,
    },
    temperament: {
        type: String,
        enum: [
            'calm and peaceful',
            'active and playful',
            'shy and cautious',
            'aggressive and independent',
        ],
        required: true,
    },
    toilet: { type: Boolean, required: true, default: false },
    vaccine: { type: Boolean, required: true, default: false },
    sterilization: { type: Boolean, required: true, default: false },
    kidFriendly: { type: Boolean, required: true, default: false },
    animalFriendly: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: false });
exports.Animal = mongoose_1.default.model('Animal', animalSchema);
//# sourceMappingURL=Animal.js.map