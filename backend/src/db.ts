import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/petfriend'

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB підключено')
    } catch (err) {
        console.error('Помилка підключення до MongoDB:', err)
        process.exit(1)
    }
}
