import { Router, Request, Response } from 'express'
import { Animal } from '../models/Animal'
import { authMiddleware } from '../middleware/authMiddleware'
import multer from 'multer'
import path from 'path'

const router = Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads'))
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`
        cb(null, uniqueName)
    }
})

const upload = multer({ storage })


interface AuthRequest extends Request {
    userId?: string
}

router.post('/', authMiddleware, upload.single('image'), async (req: AuthRequest, res: Response) => {
    try {
        const animalData = {
            ...req.body,
            litterTrained: req.body.litterTrained === 'true',
            vaccinated: req.body.vaccinated === 'true',
            sterilized: req.body.sterilized === 'true',
            age: Number(req.body.age),
            image: req.file?.filename,
            shelterId: req.userId,
        }

        const newAnimal = new Animal(animalData)
        const saved = await newAnimal.save()

        res.status(201).json(saved)
    } catch (err) {
        res.status(500).json({ message: 'Помилка при створенні тварини' })
    }
})

router.get('/', async (_req: Request, res: Response) => {
    try {
        const animals = await Animal.find()
        res.json(animals)
    } catch (err) {
        res.status(500).json({ message: 'Не вдалось отримати тварин' })
    }
})

export default router
