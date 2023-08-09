import React from 'react'

import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Content from './sections/Content'
import Footer from './sections/Footer'


function App() {
  return (
  <div className='h-full max-w-[1440px] mx-auto bg-dark-custom'>
    <Navbar/>
    <Hero/>
    <Content/>
    <Footer/>
  </div>
  )
}

export default App
