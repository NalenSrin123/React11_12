import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import "./App.css"
import BlogPage from "./pages/BlogPage"
import News from "./pages/News"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
const App = () => {
  return (
    <>
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/abouts" element={<About/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App