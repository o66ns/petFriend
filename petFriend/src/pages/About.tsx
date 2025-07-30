import Catdog from '../assets/catdog.jpg'

const About = () => {
  return (
    <>
      <div className='relative'>
        <div className='pt-[10svh] text-[10svh] font-semibold text-center text-white relative z-10'>ABOUT US</div>

        <p className='pt-[10svh] pb-[20svh] w-[80svw] mx-auto text-[3svh] text-white relative z-10'>It all started with one dog, found shivering in the rain near an old warehouse.  <br />
          No collar. No microchip. Just tired eyes that had seen too much. <br />
          We took him in, gave him a name, and promised we wouldn't stop there. <br /><br />
          Since then, our shelter has grown into a safe place for animals that were abandoned, injured, or simply unwanted. <br />
          Every dog, every cat that comes through our doors gets more than food and a warm bed — they get a chance to be loved again.
          We’re a small team of volunteers, vets, and people who believe that kindness isn’t optional. <br /><br />
          We don’t do this for likes or praise — we do it because no living being deserves to be forgotten. <br />
          Some animals stay with us for a week. Others for months. A few… longer. But they all wait. For a voice, a smell, a hand that says “you’re home now.” <br />
          Maybe that voice is yours.</p>

        <div className="absolute bottom-0 left-0 w-full h-[150svh] bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
      <img
        src={Catdog}
        alt="petFriend"
        className="w-full object-contain relative z-10"
      />


    </>
  )
}

export default About
