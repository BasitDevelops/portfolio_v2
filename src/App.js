import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  const [navMenu, setNavMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleNavMenu = () => setNavMenu(prevState => !prevState)
  const toggleDarkMode = () => setDarkMode(prevState => !prevState)
  const closeNavMenu = () => setNavMenu(false)

  return (
    <>
      <Navbar
        navMenu={navMenu}
        darkMode={darkMode}
        toggleNavMenu={toggleNavMenu}
        toggleDarkMode={toggleDarkMode}
        closeNavMenu={closeNavMenu}
      />
      <div className='w-[100px] h-[100px] bg-[blue] rounded absolute right-0 top-0 opacity-10'></div>
      <div className='w-[100px] h-[100px] bg-[blue] rounded absolute left-0 bottom-0 opacity-10'></div>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} />} />
        <Route path='/about' element={<About darkMode={darkMode} />} />
        <Route path='/projects' element={<Projects darkMode={darkMode} />} />
        <Route path='/resume' element={<Resume darkMode={darkMode} />} />
        <Route path='/contact' element={<Contact darkMode={darkMode} />} />
      </Routes>
      <Footer
        darkMode={darkMode}
      />
    </>
  )
}

export default App