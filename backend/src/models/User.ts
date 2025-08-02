import { Schema, model } from 'mongoose'

interface IUser {
    email: string
    password: string
    favorites: string[] // масив id тваринок
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: { type: [String], default: [] },
})

export const User = model<IUser>('User', userSchema)
