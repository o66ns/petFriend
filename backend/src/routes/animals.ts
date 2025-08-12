import { Router, Request, Response } from 'express'
import { Animal } from '../models/Animal'
import { authMiddleware } from '../middleware/authMiddleware'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

const router = Router()

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadPath = path.resolve('uploads')
//         if (!fs.existsSync(uploadPath)) {
//             fs.mkdirSync(uploadPath, { recursive: true })
//         }
//         cb(null, uploadPath)
//     },
//     filename: (req, file, cb) => {
//         const ext = file.originalname.split('.').pop()
//         const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`
//         cb(null, uniqueName)
//     }
// })

// const upload = multer({ storage })

interface AuthRequest extends Request {
    userId?: string
}

router.post('/', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const animalData = {
            ...req.body,
            toilet: req.body.toilet === 'true',
            vaccine: req.body.vaccine === 'true',
            sterilization: req.body.sterilization === 'true',
            image: req.file?.filename,
            shelterId: req.userId,
        }

        const newAnimal = new Animal(animalData)
        const saved = await newAnimal.save()

        res.status(201).json(saved)
    } catch (err) {
        res.status(500).json({ message: 'Error creating animal' })
    }
})

router.get('/', async (_req: Request, res: Response) => {
    try {
        const animals = await Animal.find()
        res.json(animals)
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch animals' })
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const animal = await Animal.findById(req.params.id)
        if (!animal) {
            return res.status(404).json({ message: 'Animal not found' })
        }
        res.json(animal)
    } catch (err) {
        res.status(500).json({ message: 'Error fetching animal' })
    }
})

router.delete('/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const animalId = req.params.id

        const animal = await Animal.findById(animalId)
        if (!animal) {
            return res.status(404).json({ message: 'Animal not found' })
        }

        await animal.deleteOne()

        res.json({ message: 'Animal successfully deleted' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error while deleting animal' })
    }
})

export default router
