
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import About from './retreats/Retreats'
import Retreatsin from './retreats/Retreatsin'
import './App.css'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Coaches from './coaches/Coaches'
import Explore from './explore/Explore'
import Retreats from './retreats/Retreats'
import ProductDeatils from './ProductDeatils'


function App() {
 console.log(window.location.href )

 

  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/retreats" element={<Retreats/>}/>
      <Route path="/Retreatsin" element={<Retreatsin />} />
      <Route path="/coaches" element={<Coaches/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/product/:id" element={<ProductDeatils/>}/>
      <Route path="/retreatsin/:id" element={<Retreatsin/>}/>
    </Routes>
    
    </BrowserRouter>
    {/* <Home/>
    <About/>
    <Contact/> */}
    </>
  )
}

export default App
