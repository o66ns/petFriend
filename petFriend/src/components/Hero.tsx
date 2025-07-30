import React from "react"
// import AntonCat from '../assets/Anton.png'
import Cat from '../assets/cat.png'


const Hero: React.FC = () => {
  return (
    <section className="relative h-[85svh] w-full flex justify-between pt-[5svh] px-[8svw] overflow-hidden">
      
      {/* ліва колонка */}
      <div className="flex flex-col justify-between h-full">
        <h1 className="pt-[4svh] text-[8svh] font-bold">
          Шукаєш <br />
          пухнастого друга? <br />
          Він теж тебе шукає :)
        </h1>
        <button className="pb-[12svh] text-[6svh] font-bold hover:underline purple-circle">
          НАШІ ТВАРИНИ
        </button>
      </div>

      {/* права колонка */}
      <div className="flex-col justify-end green-circle">
        <img
          src={Cat}
          alt="Антон"
          className="h-[82.3svh] object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
