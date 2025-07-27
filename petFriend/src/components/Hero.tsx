import React from "react"
import AntonCat from '../assets/Anton.png'


const Hero: React.FC = () => {
  return (
    <section className="h-[80svh] flex justify-between px-[6svw]">
      
      {/* ліва колонка */}
      <div className="flex flex-col justify-between h-full">
        <h1 className="pt-[9svh] text-[8svh] font-bold">
          Шукаєш <br />
          пухнастого друга? <br />
          Він теж тебе шукає :)
        </h1>
        <button className="pb-[9svh] text-[6svh] font-bold hover:underline">
          НАШІ ТВАРИНИ
        </button>
      </div>

      {/* права колонка */}
      <div className="flex-col justify-end">
        <img
          src={AntonCat}
          alt="Антон"
          className="h-[80svh] object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
