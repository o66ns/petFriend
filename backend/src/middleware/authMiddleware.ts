import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'secret123'

interface AuthRequest extends Request {
    userId?: string;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' })
    }

    const token = authHeader.split(' ')[1]!

    try {
        const decoded = jwt.verify(token, JWT_SECRET)

        if (typeof decoded !== 'object' || !decoded || !('userId' in decoded)) {
            return res.status(401).json({ message: 'Invalid token' })
        }

        req.userId = (decoded as { userId: string }).userId
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}
