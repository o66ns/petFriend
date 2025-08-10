import React, { useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Profile from '../assets/profile.png'
import Favorite from '../assets/favorite.png'
import { Menu, X } from "lucide-react"
import AuthModal from './AuthModal'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'


interface DecodedToken {
    userId: string
    email?: string 
    exp: number
}

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showAuth, setShowAuth] = useState(false)
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [userEmail, setUserEmail] = useState<string | null>(null)
    const [authSource, setAuthSource] = useState<'profile' | 'favorite' | null>(null)

    useEffect(() => {
        if (token) {
            try {
                const decoded: DecodedToken = jwtDecode(token)
                setUserEmail(decoded.email || null)
            } catch {
                setUserEmail(null)
            }
        } else {
            setUserEmail(null)
        }
    }, [token])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setToken(null)
        setShowDropdown(false)
    }

    const navigate = useNavigate()

    const handleFavoriteClick = () => {
        if (token) {
            navigate('/favorites')
        } else {
            setAuthSource('favorite')
            setShowAuth(true)
        }
    }

    const handleProfileClick = () => {
        if (token) {
            setShowDropdown(prev => !prev)
        } else {
            setAuthSource('profile')
            setShowAuth(true)
        }
    }


    return (
        <>
            <header className="flex justify-between items-center h-[8svh] landscape:h-[15svh] px-[3svw] sm:px-[4svw] pt-[3svh]">
                <div>
                    <Link to="/" className="flex gap-4">
                        <img src={Logo} alt="petFriend" className="h-[8svh] landscape:h-[14svh]" />
                        <div className="pt-[5svh] text-[5svh] hidden landscape:block">PetFriend</div>
                    </Link>
                </div>

                <nav className={`flex gap-[3svw] fixed top-[4svh] ${isOpen ? 'left-[55svw]' : 'left-[83svw]'} z-50 landscape:static landscape:flex landscape:flex-row landscape:w-auto landscape:py-0 landscape:gap-[3svw]`}>
                    <div className={`${isOpen ? 'flex' : 'hidden landscape:flex'} relative`} ref={dropdownRef}>

                        <button onClick={handleFavoriteClick}>
                            <img src={Favorite} alt="Favorite" className="h-[12svw] landscape:h-[8svh] object-contain" />
                        </button>

                        <button onClick={handleProfileClick}>
                            <img src={Profile} alt="Profile" className="h-[12.75svw] landscape:h-[8.5svh] object-contain" />
                        </button>

                        {showDropdown && token && (
                            <div className="absolute right-0 mt-2 bg-white border shadow-md rounded p-2 w-48 z-50">
                                {userEmail && <p className="text-sm mb-2 truncate">{userEmail}</p>}
                                <button onClick={handleLogout} className="text-red-500 text-sm">Log out</button>
                            </div>
                        )}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="landscape:hidden">
                        {isOpen ? <X className="w-[12svw] h-[12svw]" /> : <Menu className="w-[12svw] h-[12svw]" />}
                    </button>
                </nav>
            </header>

            {showAuth && (
                <AuthModal
                    onClose={() => {
                        setShowAuth(false)
                        setAuthSource(null)
                    }}
                    onSuccess={(newToken) => {
                        setToken(newToken)
                        setShowAuth(false)

                        if (authSource === 'favorite') {
                            navigate('/favorites')
                        }
                        setAuthSource(null)
                    }}
                />
            )}
        </>
    )
}

export default Header
