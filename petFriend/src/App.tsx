import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import PetList from './components/PetList'
import PetPage from './pages/PetPage'
import AddAnimal from "./components/AddAnimal"


function App() {
  return (

    <>
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

    </>
  )
}

export default App
