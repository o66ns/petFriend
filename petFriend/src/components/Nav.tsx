import React from "react"
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Profile from '../assets/profile.png'
import Favorite from '../assets/favorite.png'

const Nav: React.FC = () => {
    return (
        <>
            <nav className="flex justify-between h-[15svh] px-[8svh]">

                <div className="flex gap-4">
                    <Link to="/" className="text-[3.5svh]">
                        <img
                            src={Logo}
                            alt="petFriend"
                            className="h-[14svh] pt-[2svh] object-contain"
                        />
                    </Link>
                    <Link to="/about" className="pt-[5svh] text-[3.5svh]">Про нас</Link>
                    <Link to="/contacts" className="pt-[5svh] text-[3.5svh]">Контакти</Link>
                </div>

                <div className="flex gap-3">
                    <Link to="/favorites" className="pt-[2svh] text-[3.5svh]">
                        <img
                            src={Favorite}
                            alt="Favorite"
                            className="h-[10svh] pt-[2svh] object-contain"
                        />
                    </Link>

                    <Link to="/" className="pt-[2svh] text-[3.5svh]">
                        <img
                            src={Profile}
                            alt="Profile"
                            className="h-[10svh] pt-[2svh] object-contain"
                        />
                    </Link>                    
                </div>

            </nav>
        </>
    )
}

export default Nav
