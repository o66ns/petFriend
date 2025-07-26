import React from "react"
import AntonCat from '../assets/Anton.png'


const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-between px-8">
      
      {/* ліва колонка */}
      <div className="flex flex-col justify-between h-full py-20">
        <h1 className="text-5xl font-bold text-gray-900">
          Шукаєш <br />
          пухнастого друга? <br />
          Він теж тебе шукає :)
        </h1>
        <button className="mt-8 text-blue-600 hover:underline">
          ↓ прокрути вниз
        </button>
      </div>

      {/* права колонка */}
      <div className="h-full flex items-center">
        <img
          src={AntonCat}
          alt="Антон"
          className="h-[80%] object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
