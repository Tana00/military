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
    <div className=" dark:bg-[#0c2b2f] bg-[#0c2b2f] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative overflow-clip">
      <div className="absolute z-[-10] pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#0c2b2f] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-opacity-35"></div>
      
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