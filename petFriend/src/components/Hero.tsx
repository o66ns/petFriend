import React from "react"
import AntonCat from '../assets/Anton.png'


const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-100">
      {/* котик як фон */}
      <img
        src={AntonCat} // заміни на свій шлях
        alt="Кіт Антон"
        className="absolute inset-0 h-full w-full object-cover object-center z-0"
      />

      {/* кола */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/30 blur-2xl z-10" />
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-white/10 blur-3xl z-10" />

      {/* контент */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Притулок для тварин
        </h1>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition">
          НАШІ ТВАРИНИ
        </button>
      </div>
    </section>
  )
}

export default Hero
