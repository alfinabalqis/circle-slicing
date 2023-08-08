import React from 'react'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Merk from './components/Merk'


function App() {
  return (
  //  <div className='h-full bg-dark-custom'>
  //   <Navbar/>
  //   <Hero/>
  //  </div>
  <div className='h-full max-w-[1440px] mx-auto bg-dark-custom'>
    <Navbar/>
    <Hero/>
    <Merk/>
  </div>
  )
}

export default App
