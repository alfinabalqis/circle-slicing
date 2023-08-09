import React from 'react'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Merk from './components/Merk'
import Content from './sections/Content'


function App() {
  return (
  <div className='h-full max-w-[1440px] mx-auto bg-dark-custom'>
    <Navbar/>
    <Hero/>
    <Content/>
  </div>
  )
}

export default App
