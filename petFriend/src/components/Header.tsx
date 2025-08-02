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
            <header className="flex justify-between items-center h-[8svh] landscape:h-[15svh] px-[3svw] sm:px-[4svw] pt-[3svh]">

                <div>
                    <Link to="/" className="flex gap-4">
                        <img
                            src={Logo}
                            alt="petFriend"
                            className="h-[8svh] landscape:h-[14svh]"
                        />
                        <div className="pt-[5svh] text-[5svh] hidden landscape:block ">PetFriend</div>
                    </Link>
                </div>

                <nav className={`flex gap-[3svw] fixed top-[4svh] ${isOpen ? 'left-[55svw]' : 'left-[83svw]'} z-50 landscape:static landscape:flex landscape:flex-row landscape:w-auto landscape:py-0 landscape:gap-[3svw]`}>
                    

                    <div className={`${isOpen ? 'flex' : 'hidden landscape:flex'}`}>

                        <Link to="/favorites">
                            <img
                                src={Favorite}
                                alt="Favorite"
                                className="h-[12svw] landscape:h-[8svh] object-contain"
                            />
                        </Link>

                        <Link to="/">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="h-[12.75svw] landscape:h-[8.5svh] object-contain"
                            />
                        </Link>

                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="landscape:hidden">
                        {isOpen ? <X className="w-[12svw] - h-[12svw]" /> : <Menu className="w-[12svw] h-[12svw]" />}
                    </button>
                </nav>

            </header>
        </>
    )
}

export default Header
