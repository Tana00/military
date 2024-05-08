import React, {useState} from 'react'
import { Element } from 'react-scroll'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
const Main = () => {
    const [openForm, setOpenForm] = useState(false)


  return (
    <div className='relative bg-black'>
        {openForm && <SignUp 
            setOpenForm={setOpenForm}
            openForm={openForm}
        />}
        <Header 
            setOpenForm={setOpenForm}
        />
        <Element name='home'>
            <Home 
                setOpenForm={setOpenForm}
            />
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