import Hero from '../components/Hero'
import PetList from '../components/PetList'


const Home = () => {
  return (
    <>
      <Hero />
      <div id="pets">
        <PetList />
      </div>
    </>
  )
}

export default Home
