import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './components/Hero'
import Best from './components/Best'
import Join from './components/Join'
import Slide from './components/Slide'
import Grow from './components/Grow'
import Map from './components/Map'

function App() {
  return (
    <>
      <Header />
      <div className='flex flex-col min-h-screen'>
        <Hero />
        <Best />
        <Join />
        <Slide />
        <Grow />
        <Map />
      </div>
      <Footer />
    </>
  )
}

export default App
