import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import PetList from './components/PetList'
import PetPage from './pages/PetPage'


function App() {
  return (

    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<PetList />} />
        <Route path="/animals/:id" element={<PetPage />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
