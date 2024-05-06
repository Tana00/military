import React from 'react'
import { Element } from 'react-scroll'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
const Main = () => {
  return (
    <div className='relative bg-black'>
        <Header />
        <Element name='home'>
            <Home />
        </Element>
        <Element name='about'>
            <About />
        </Element>
        <Element name='services'>
            <Services />
        </Element>
        <Element name='contact'>
            <Contact />
        </Element>
        <Footer />
    </div>
  )
}

export default Main