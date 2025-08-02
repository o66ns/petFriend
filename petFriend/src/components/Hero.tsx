import React from "react"
import AntonCat from '../assets/Anton.png'


const Hero: React.FC = () => {
  return (
    <section className="relative h-[92.2svh] landscape:h-[85svh] w-full flex flex-col landscape:flex-row justify-between pt-[12svh] px-[8svw] overflow-hidden">

      <div className="flex flex-col justify-between h-full text-center landscape:text-left">
        <h1 className="text-[3svh] landscape:text-[3.5svw] font-bold leading-tight mb-[5svh]">
          Шукаєш <br/>
          пухнастого друга? <br/>
          Він теж тебе шукає :)
        </h1>

        <a href="#pets" className="relative mb-[8svh] landscape:mb-[12svh] text-[3svh] landscape:text-[2.5svw] font-bold hover:underline purple-circle self-center landscape:self-start">
          НАШІ ТВАРИНИ
        </a>
      </div>

      <div className="flex justify-center landscape:justify-end green-circle">
        <img
          src={AntonCat}
          alt="Антон"
          className="h-[39svh] landscape:h-[73svh] object-contain"
        />
      </div>
    </section>

  )
}

export default Hero
