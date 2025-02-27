
import { Route, Routes } from 'react-router-dom'
import ContextProduct from './Context/ContextProduct'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Service from './pages/Service'
import Contact from './pages/Contact'
import ProductDetail from './components/ProductDetail'

const App = () => {
  return (
    <ContextProduct>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/detail/:id" element={<ProductDetail/>} />
      </Routes>
    </ContextProduct>
  )
}

export default App