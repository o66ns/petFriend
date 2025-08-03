import { Router } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/User'
import jwt from 'jsonwebtoken'

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'секрет123'

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: 'Email і пароль обовʼязкові' })
        }

        if (typeof email !== 'string' || !email.includes('@')) {
            return res.status(400).json({ message: 'Некоректний email' })
        }
        if (typeof password !== 'string' || password.length < 6) {
            return res.status(400).json({ message: 'Пароль має містити щонайменше 6 символів' })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'Користувач вже існує' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            password: hashedPassword,
        })

        await newUser.save()

        res.status(201).json({ message: 'Користувач створений' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Помилка сервера' })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) return res.status(401).json({ message: 'Невірний email або пароль' })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(401).json({ message: 'Невірний email або пароль' })

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' })

        res.json({ token })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Помилка сервера' })
    }
})

export default router
