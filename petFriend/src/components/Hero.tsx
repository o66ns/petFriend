import React from "react"
import AntonCat from '../assets/Anton.png'


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85svh] w-full flex flex-col-reverse md:flex-row justify-between pt-[12svh] px-[8svw] overflow-hidden">

      <div className="flex flex-col justify-between h-full text-center md:text-left">
        <h1 className="text-[5svh] md:text-[8svh] font-bold leading-tight mb-6">
          Шукаєш <br className="hidden md:block" />
          пухнастого друга? <br className="hidden md:block" />
          Він теж тебе шукає :)
        </h1>

        <a href="#pets" className="relative mb-[8svh] md:mb-[12svh] text-[4.5svh] md:text-[6svh] font-bold hover:underline purple-circle self-center md:self-start">
          НАШІ ТВАРИНИ
        </a>
      </div>

      <div className="flex justify-center md:justify-end green-circle">
        <img
          src={AntonCat}
          alt="Антон"
          className="h-[45svh] md:h-[80svh] object-contain"
        />
      </div>
    </section>

  )
}

export default Hero
