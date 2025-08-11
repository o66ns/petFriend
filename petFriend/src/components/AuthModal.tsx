import React, { useState } from 'react'
import { host } from '../config'

interface Props {
    onClose: () => void
    onSuccess: (token: string) => void
}

const AuthModal: React.FC<Props> = ({ onClose, onSuccess }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [mode, setMode] = useState<'login' | 'register'>('login')

    const handleAuth = async () => {
        try {
            const endpoint = mode === 'login' ? 'login' : 'register'
            const res = await fetch(`${host}/auth/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data.message)

            if (mode === 'login') {
                localStorage.setItem('token', data.token)
                onSuccess(data.token)
            } else {
                const loginRes = await fetch(`${host}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                })
                const loginData = await loginRes.json()
                if (!loginRes.ok) throw new Error(loginData.message)

                localStorage.setItem('token', loginData.token)
                onSuccess(loginData.token)
            }

            onClose()
        } catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.73)] flex items-center justify-center z-50">
            <div className="bg-neutral-100 p-4 rounded w-[80vw] max-w-[400px]">
                <h2 className="text-lg font-bold mb-2">
                    {mode === 'login' ? 'Log In' : 'Register'}
                </h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex justify-between items-center mt-2 text-sm">
                    <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="underline">
                        {mode === 'login' ? 'No account?' : 'Already have an account?'}
                    </button>
                    <div className="flex gap-2">
                        <button onClick={onClose} className="underline">Close</button>
                        <button onClick={handleAuth} className="bg-black text-white px-4 py-1 rounded">
                            {mode === 'login' ? 'Log In' : 'Register'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal
