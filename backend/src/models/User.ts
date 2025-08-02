import mongoose, { Schema, model } from 'mongoose'

interface IUser {
    email: string
    password: string
    favorites: mongoose.Types.ObjectId[]  // масив ObjectId тварин
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Animal', default: [] }],
})

export const User = model<IUser>('User', userSchema)
