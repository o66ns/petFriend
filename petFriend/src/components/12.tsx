import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4">
            <Link to="/" className="font-bold text-lg">🐾</Link>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            <nav className={`absolute top-full left-0 w-full bg-white flex-col items-center gap-6 py-6 transition-all duration-300 md:static md:flex md:flex-row md:w-auto md:py-0 md:gap-10 ${isOpen ? 'flex' : 'hidden'}`}>
                <Link to="#pets" className="text-xl font-medium">Наші тварини</Link>
                <Link to="/favorites" className="text-xl font-medium">Улюблені</Link>
            </nav>
        </header>
    )
}

export default Header
