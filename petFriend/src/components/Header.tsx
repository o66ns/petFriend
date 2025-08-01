import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Profile from '../assets/profile.png'
import Favorite from '../assets/favorite.png'
import { Menu, X } from "lucide-react"

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="flex justify-between h-[15svh] px-[3svw] sm:px-[4svw]">

                <div className="flex gap-4">
                    <Link to="" className="flex gap-4">
                        <img
                            src={Logo}
                            alt="petFriend"
                            className="h-[14svh] pt-[2svh] object-contain"
                        />
                        <div className="pt-[5svh] text-[5svh] hidden md:block ">PetFriend</div>
                    </Link>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                <nav className= {`flex gap-[3svw] md:static md:flex md:flex-row md:w-auto md:py-0 md:gap-[3svw] ${isOpen ? 'flex' : 'hidden'}`}>
                    <Link to="/favorites" className="pt-[4svh] text-[3.5svh]">
                        <img
                            src={Favorite}
                            alt="Favorite"
                            className="h-[8svh] object-contain"
                        />
                    </Link>

                    <Link to="/" className="pt-[4svh] text-[3.5svh]">
                        <img
                            src={Profile}
                            alt="Profile"
                            className="h-[8.5svh] object-contain"
                        />
                    </Link>
                </nav>

            </header>
        </>
    )
}

export default Header
