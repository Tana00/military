import React from 'react'
import { Element } from 'react-scroll'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
const Main = () => {
  return (
    <div className=''>
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
    </div>
  )
}

export default Main