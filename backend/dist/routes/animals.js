"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Animal_1 = require("../models/Animal");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const animalData = {
            ...req.body,
            toilet: req.body.toilet === 'true',
            vaccine: req.body.vaccine === 'true',
            sterilization: req.body.sterilization === 'true',
            image: req.body.image,
            shelterId: req.userId,
        };
        const newAnimal = new Animal_1.Animal(animalData);
        const saved = await newAnimal.save();
        res.status(201).json(saved);
    }
    catch (err) {
        res.status(500).json({ message: 'Error creating animal' });
    }
});
router.get('/', async (_req, res) => {
    try {
        const animals = await Animal_1.Animal.find();
        res.json(animals);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to fetch animals' });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const animal = await Animal_1.Animal.findById(req.params.id);
        if (!animal) {
            return res.status(404).json({ message: 'Animal not found' });
        }
        res.json(animal);
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching animal' });
    }
});
router.delete('/:id', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const animalId = req.params.id;
        const animal = await Animal_1.Animal.findById(animalId);
        if (!animal) {
            return res.status(404).json({ message: 'Animal not found' });
        }
        await animal.deleteOne();
        res.json({ message: 'Animal successfully deleted' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error while deleting animal' });
    }
});
exports.default = router;
//# sourceMappingURL=animals.js.map