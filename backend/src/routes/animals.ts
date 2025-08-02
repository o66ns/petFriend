import { Router, Request, Response } from 'express'
import { Animal } from '../models/Animal'
import { authMiddleware } from '../middleware/authMiddleware'


interface AuthRequest extends Request {
    userId?: string
}


const router = Router()




// Додати тварину
router.post('/', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const newAnimal = new Animal({
            ...req.body,
            shelterId: req.userId,
        })

        const saved = await newAnimal.save()
        res.status(201).json(saved)
    } catch (err) {
        res.status(500).json({ message: 'Помилка при створенні тварини' })
    }
})

export default router
