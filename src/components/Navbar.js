import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ navMenu, darkMode, toggleNavMenu, toggleDarkMode, closeNavMenu }) {
    const location = useLocation()

    return (
        <div className={`${!darkMode ? 'bg-[#fefdfc]' : 'dark:bg-[#020a13]'} box-border lg:py-5 lg:px-10 p-5 flex justify-between`}>
            <div>
                <Link to='/'>
                    <h3 className={`${!darkMode ? 'dark:bg-[#020a13] text-[#e1e1e1] ' : 'dark:bg-[#e1e1e1] text-[#020a13]'} text-[1.5rem] font-moondance box-border py-1 px-2 rounded`}>BD.</h3>
                </Link>
            </div>
            <div className='flex items-center gap-10'>
                <ul className={`${!darkMode ? 'bg-[#fefdfc]' : 'dark:bg-[#020a13]'} w-full h-[92.5%] lg:h-[1.75rem] lg:flex lg:flex-row flex-col justify-center items-center gap-10 lg:relative lg:top-0 absolute left-0 top-[75px] ${!navMenu ? 'hidden' : 'flex'} z-20`}>
                    <li className={`${!darkMode ? 'text-[#020a13] border-black' : 'dark:text-[#e1e1e1] border-[#e1e1e1]'} lg:text-sm text-xl font-sourceSP hover:border-b-[3px] ${location.pathname === '/about' && 'border-b-[3px]'}`}>
                        <Link onClick={closeNavMenu} to='/about'>About</Link>
                    </li>
                    <li className={`${!darkMode ? 'text-[#020a13] border-black' : 'dark:text-[#e1e1e1] border-[#e1e1e1]'} lg:text-sm text-xl font-sourceSP hover:border-b-[3px] ${location.pathname === '/projects' && 'border-b-[3px]'}`}>
                        <Link onClick={closeNavMenu} to='/projects'>Projects</Link>
                    </li>
                    <li className={`${!darkMode ? 'text-[#020a13] border-black' : 'dark:text-[#e1e1e1] border-[#e1e1e1]'} lg:text-sm text-xl font-sourceSP hover:border-b-[3px] ${location.pathname === '/resume' && 'border-b-[3px]'}`}>
                        <Link onClick={closeNavMenu} to='/resume'>Resume</Link>
                    </li>
                    <li className={`${!darkMode ? 'text-[#020a13] border-black' : 'dark:text-[#e1e1e1] border-[#e1e1e1]'} lg:text-sm text-xl font-sourceSP hover:border-b-[3px] ${location.pathname === '/contact' && 'border-b-[3px]'}`}>
                        <Link onClick={closeNavMenu} to='/contact'>Contact</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-5'>
                    <FontAwesomeIcon icon={!darkMode ? faMoon : faSun} className={`${!darkMode ? 'text-[#020a13] hover:bg-[#020a13] hover:text-[#e1e1e1]' : 'dark:text-[#e1e1e1] hover:bg-[#e1e1e1] hover:text-[#020a13]'} w-[1.25rem] text-xl  rounded-full box-border p-2 z-20`} onClick={toggleDarkMode} />
                    <FontAwesomeIcon icon={!navMenu ? faEquals : faXmark} className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'} w-[1.25rem] text-2xl lg:hidden z-20`} onClick={toggleNavMenu} />
                </div>
            </div>
        </div>
    )
}
