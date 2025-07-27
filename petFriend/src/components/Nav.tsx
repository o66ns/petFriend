import React from "react"
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <>
    <nav className="flex justify-between h-[10svh] pt-[3svh] px-[4svh]">
        <div className="flex gap-4">
          <Link to="/" className="text-[3.5svh]">Головна</Link>
          <Link to="/about" className="text-[3.5svh]">Про нас</Link>
          <Link to="/contacts" className="text-[3.5svh]">Контакти</Link>
        </div>

        <div className="flex gap-4">
          <Link to="/favorites" className="text-[3.5svh]">Улюблені</Link>
          <div className="text-[3.5svh]">Профіль</div>
        </div>
      </nav>
    </>
  )
}

export default Nav
