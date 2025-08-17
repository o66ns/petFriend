import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import PetList from './components/PetList'
import PetPage from './pages/PetPage'
import AddAnimal from "./pages/AddAnimal"


function App() {
  return (

    <div className='flex flex-col justify-between min-h-[100svh]'>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<PetList />} />
        <Route path="/animals/:id" element={<PetPage />} />
        <Route path="/AddAnimal" element={<AddAnimal />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
