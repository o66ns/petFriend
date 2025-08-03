import { Router, Request, Response } from 'express'
import { User } from '../models/User'
import { authMiddleware } from '../middleware/authMiddleware'
import mongoose from 'mongoose'

interface AuthRequest extends Request {
    userId?: string
}


const router = Router()




router.post('/me/favorites/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) return res.status(404).json({ message: 'Користувача не знайдено' })

        const animalId = req.params.id as string
        if (!mongoose.Types.ObjectId.isValid(animalId)) {
            return res.status(400).json({ message: 'Невалідний ID тварини' })
        }

        const animalObjectId = new mongoose.Types.ObjectId(animalId)

        const alreadyInFavorites = user.favorites.some(fav =>
            fav.toString() === animalObjectId.toString()
        )

        if (alreadyInFavorites) {
            return res.status(400).json({ message: 'Тварина вже у фаворитах' })
        }

        //user.favorites.push(animalId)
        user.favorites.push(new mongoose.Types.ObjectId(animalId))
        await user.save()

        res.json({ message: 'Тварина додана у фаворити' })
    } catch (err) {
        res.status(500).json({ message: 'Помилка сервера' })
    }
})

router.get('/me/favorites', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const user = await User.findById(req.userId).populate('favorites')
        if (!user) return res.status(404).json({ message: 'Користувача не знайдено' })

        res.json(user.favorites)
    } catch (err) {
        res.status(500).json({ message: 'Помилка сервера' })
    }
})

router.delete('/me/favorites/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) return res.status(404).json({ message: 'Користувача не знайдено' })

        const animalId = req.params.id as string
        const animalObjectId = new mongoose.Types.ObjectId(animalId)

        user.favorites = user.favorites.filter(fav => fav.toString() !== animalObjectId.toString())

        await user.save()
        res.json({ message: 'Тварина видалена з фаворитів' })
    } catch {
        res.status(500).json({ message: 'Помилка сервера' })
    }
})


export default router
