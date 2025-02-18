import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Socials from '../components/Socials'
import { motion } from 'framer-motion'

export default function Home({ darkMode }) {
    return (
        <div className={`${!darkMode ? 'bg-[#fefdfc]' : 'dark:bg-[#020a13]'} min-h-[87.5vh] box-border lg:py-5 lg:px-10 p-5 flex justify-center`}>
            <div className='lg:w-[80%] w-[100%]'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='flex flex-col gap-5'>
                    <p className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'} font-sourceSP`}>Hello, my name is</p>
                    <div className='lg:max-w-[85%] w-full'>
                        <div className='max-w-max'>
                            <p className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'} lg:text-[5rem] text-[2.5rem] font-serif`}>Ayomide Basit.</p>
                        </div>
                        <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} lg:text-[4rem] text-[2rem] font-serif`}>I use code to bring designs to life and make them functional.</p>
                    </div>
                    <div className={`${!darkMode ? 'bg-[#020a13] text-[#e1e1e1]' : 'bg-[#e1e1e1] text-[#020a13]'} font-sourceSP rounded box-border lg:p-3 p-2 max-w-max italic flex items-center gap-3`}>
                        <p>Welcome to my portfolio.</p>
                        <img className='w-[15px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/120px-Emoji_u1f44b.svg.png?20170527185010' />
                    </div>
                    <Link to='/about' className='mt-10 flex items-center gap-3 hover:underline underline-offset-4 max-w-max'>
                        <a className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>Know more about me</a>
                        <FontAwesomeIcon icon={faAnglesRight} fade className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'}`} />
                    </Link>
                </motion.div>
                <Socials fill={!darkMode ? '#020a13' : '#e1e1e1'} />
            </div>
        </div>
    )
}
