"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const authMiddleware_1 = require("../middleware/authMiddleware");
const mongoose_1 = __importDefault(require("mongoose"));
const router = (0, express_1.Router)();
router.post('/me/favorites/:id', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const user = await User_1.User.findById(req.userId);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        const animalId = req.params.id;
        if (!mongoose_1.default.Types.ObjectId.isValid(animalId)) {
            return res.status(400).json({ message: 'Invalid animal ID' });
        }
        const animalObjectId = new mongoose_1.default.Types.ObjectId(animalId);
        const alreadyInFavorites = user.favorites.some(fav => fav.toString() === animalObjectId.toString());
        if (alreadyInFavorites) {
            return res.status(400).json({ message: 'Animal already in favorites' });
        }
        user.favorites.push(new mongoose_1.default.Types.ObjectId(animalId));
        await user.save();
        res.json({ message: 'Animal added to favorites' });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
router.get('/me/favorites', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const user = await User_1.User.findById(req.userId).populate('favorites');
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user.favorites);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
router.delete('/me/favorites/:id', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const user = await User_1.User.findById(req.userId);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        const animalId = req.params.id;
        const animalObjectId = new mongoose_1.default.Types.ObjectId(animalId);
        user.favorites = user.favorites.filter(fav => fav.toString() !== animalObjectId.toString());
        await user.save();
        res.json({ message: 'Animal removed from favorites' });
    }
    catch {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.default = router;
//# sourceMappingURL=user.js.map