import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

export const connectDB = async () => {
    if (!MONGO_URI) {
        console.error('No MONGO_URI in env')
        process.exit(1)
    }

    try {
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB connected')
    } catch (err) {
        console.error('Error connecting MongoDB:', err)
        process.exit(1)
    }
}
