import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db'
import authRouter from './routes/auth'
import animalsRouter from './routes/animals'

connectDB()


dotenv.config()

const app = express()
app.use(express.json())
app.use('/auth', authRouter)
app.use('/animals', animalsRouter)

app.get('/', (_req, res) => {
    res.send('API працює')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Сервер слухає на порту ${PORT}: http://localhost:3000`)
})
