import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Socials from '../components/Socials'
import resume from '../images/resume.png'
import { motion } from 'framer-motion'

export default function Resume({ darkMode }) {
    return (
        <div className={`${!darkMode ? 'bg-[#fefdfc]' : 'dark:bg-[#020a13]'} min-h-[87.5vh] box-border lg:py-5 lg:px-10 p-5 flex justify-center`}>
            <div className='lg:w-[80%] w-[100%]'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='flex flex-col gap-5'>
                    <div className='lg:max-w-[55%] w-full flex flex-col gap-5'>
                        <h3 className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'} font-quicksand lg:text-[2.5rem] text-[1.5rem]`}>Resume.</h3>
                        <a className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP lg:text-[1rem] text-[.75rem] hover:underline underline-offset-4 max-w-max`} href='https://drive.google.com/file/d/1f59qn88CDMbGhk3nQdI8flkiPtCfFlC_/view?usp=share_link'>Click here to view my resume.</a>
                        <img src={resume} />
                    </div>
                    <Link to='/contact' className='mt-10 flex items-center gap-3 hover:underline underline-offset-4 max-w-max'>
                        <a className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>Contact Me</a>
                        <FontAwesomeIcon icon={faAnglesRight} fade className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'}`} />
                    </Link>
                </motion.div>
                <Socials fill={!darkMode ? '#020a13' : '#e1e1e1'} />
            </div>
        </div>
    )
}
