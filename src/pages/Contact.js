import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Socials from '../components/Socials'
import { motion } from 'framer-motion'

export default function Contact({ darkMode }) {
    return (
        <div className={`${!darkMode ? 'bg-[#fefdfc]' : 'dark:bg-[#020a13]'} min-h-[87.5vh] box-border lg:py-5 lg:px-10 p-5 flex justify-center`}>
            <div className='lg:w-[80%] w-[100%]'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='flex flex-col gap-5'>
                    <h3 className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'} font-quicksand lg:text-[2.5rem] text-[1.5rem]`}>Contact Me.</h3>
                    <form className='lg:w-[50%] flex flex-col gap-10' action="https://formsubmit.co/ayomidebasit026@gmail.com" method="POST">
                        <div>
                            <input className={`${!darkMode ? 'text-[#020a1380] border-[#020a1380]' : 'dark:text-[#e1e1e180] border-[#e1e1e180]'} font-sourceSP w-full box-border p-3 border-b-2 bg-transparent outline-none`} type='text' placeholder='Name' name='name' required />
                        </div>
                        <div>
                            <input className={`${!darkMode ? 'text-[#020a1380] border-[#020a1380]' : 'dark:text-[#e1e1e180] border-[#e1e1e180]'} font-sourceSP w-full box-border p-3 border-b-2 bg-transparent outline-none`} type='email' placeholder='Email' name='email' required />
                        </div>
                        <input type='hidden' name='_subject' value='New offer!' />
                        <div>
                            <textarea className={`${!darkMode ? 'text-[#020a1380] border-[#020a1380]' : 'dark:text-[#e1e1e180] border-[#e1e1e180]'} font-sourceSP w-full h-[150px] box-border p-3 border-b-2 bg-transparent outline-none`} height='700px' placeholder='Message' name='message' required />
                        </div>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <button className={`${!darkMode ? 'dark:bg-[#020a13] text-[#e1e1e1] hover:bg-transparent hover:text-[#020a13] border-[#020a13]' : 'dark:bg-[#e1e1e1] text-[#020a13] hover:bg-transparent hover:text-[#e1e1e1] border-[#e1e1e1]'} lg:w-4/12 font-sourceSP box-border p-2 border-2 rounded`}>Send Message</button>
                    </form>
                    <Link to='/' className='mt-10 flex items-center gap-3 hover:underline underline-offset-4 max-w-max'>
                        <a className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>Home Page</a>
                        <FontAwesomeIcon icon={faAnglesRight} fade className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'}`} />
                    </Link>
                </motion.div>
                <Socials fill={!darkMode ? '#020a13' : '#e1e1e1'} />
            </div>
        </div>
    )
}
