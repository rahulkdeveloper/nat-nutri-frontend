import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact';
import OurStory from './pages/OurStory'
import WhereToBuy from './pages/WhereToBuy'
import ProductsPage from './pages/Products'
import HomePage from './pages/Home'
import RecipePage from './pages/Recipes'

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact-us' element={<Contact/>}></Route>
          {/* <Route path='/our-story' element={<OurStory/>}></Route> */}
          <Route path='/where-to-buy' element={<WhereToBuy/>}></Route>
          <Route path='/products' element={<ProductsPage/>}></Route>
          {/* <Route path='/recipes' element={<RecipePage/>}></Route> */}
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
