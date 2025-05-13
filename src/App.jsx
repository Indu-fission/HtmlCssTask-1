import { useState } from 'react'
import Header from './Components/Header'
import Product from './Components/Product'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'

import './App.css'

function App() {

  return (
    <>
     <div className="home-page">
      <Header/>
      <Home />
      <About />
      <Product />
      <Contact />
      <Footer /> 
    </div>
    </>
  )
}

export default App
