import React from "react"
import AntonCat from '../assets/Anton.png'

const Hero: React.FC = () => {
  return (
    <section className="relative h-[92.2svh] landscape:h-[85svh] w-full flex flex-col landscape:flex-row justify-between pt-[12svh] px-[8svw] overflow-hidden">

      <div className="flex flex-col justify-between items-center h-full text-center landscape:text-left">
        <h1 className="text-[3svh] landscape:text-[3.5svw] font-bold leading-tight mb-[5svh]">
          Looking for <br />
          a fluffy friend? <br />
          They’re looking for you too :)
        </h1>
        <a href="#pets" className="bg-[#DEC1E9] rounded-full w-45 h-45 flex justify-center items-center">
          <div className="text-2xl font-bold hover:underline]">
            OUR PETS
          </div>
        </a>
      </div>

      <div className="flex justify-center landscape:justify-end green-circle">
        <img
          src={AntonCat}
          alt="Anton"
          className="h-[39svh] landscape:h-[73svh] object-contain"
        />
      </div>
    </section>

  )
}

export default Hero
