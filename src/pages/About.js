import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Bootstrap from '../icons/Bootstrap'
import Css from '../icons/Css'
import Figma from '../icons/Figma'
import Git from '../icons/Git'
import Github from '../icons/Github'
import Html from '../icons/Html'
import Javascript from '../icons/Javascript'
import Npm from '../icons/Npm'
import ReactIcon from '../icons/ReactIcon'
import Socials from '../components/Socials'
import { motion } from 'framer-motion'

export default function About({ darkMode }) {
    return (
        <div className={`${!darkMode ? 'bg-[#fefdfc]' : 'dark:bg-[#020a13]'} min-h-[87.5vh] box-border lg:py-5 lg:px-10 p-5 flex justify-center`}>
            <div className='lg:w-[80%] w-[100%]'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='flex flex-col gap-5'>
                    <div className='lg:max-w-[55%] w-full flex flex-col gap-5'>
                        <h3 className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'} font-quicksand lg:text-[2.5rem] text-[1.5rem]`}>About Me.</h3>
                        <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>
                            Hello my name is Ayomide Basit, i'm a Software Developer currently specialized in Front-End Development and located in Lagos, Nigeria.
                        </p>
                        <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>
                            Hard worker, problem solver, resilient, focused and a keen eye for detail, the aforementioned are all qualities i possess. I enjoy watching the UFC, playing COD and swimming.
                        </p>
                        <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>
                            I'm interested in working at a company / on projects where i can deliver business value and also level up my skills as a developer.
                        </p>
                        <div className='flex flex-col gap-5'>
                            <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>
                                Here are some of the technologies i work with:
                            </p>
                            <div className='flex items-center gap-10 flex-wrap'>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <Html fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>HTML5</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 2 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <Css fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>CSS3</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 3 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <Javascript fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>JavaScript</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 4 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <ReactIcon fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>ReactJS</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 5 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <Bootstrap fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>Bootstrap</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 6 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <img className='h-[47.5px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/120px-Tailwind_CSS_Logo.svg.png?20211001194333' />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>TailwindCSS</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 7 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <img src='https://cdn.worldvectorlogo.com/logos/redux.svg' />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>Redux</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 8 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <Git fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>Git</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 9 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <Github fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>Github</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 10 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <Figma fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>Figma</p>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 11 }}
                                    className='w-[50px] h-[75px] flex flex-col items-center gap-1'>
                                    <Npm fill={!darkMode ? 'black' : 'white'} />
                                    <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>NPM</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <Link to='/projects' className='mt-10 flex items-center gap-3 hover:underline underline-offset-4 max-w-max'>
                        <a className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP`}>My Projects</a>
                        <FontAwesomeIcon icon={faAnglesRight} fade className={`${!darkMode ? 'text-[#020a13]' : 'dark:text-[#e1e1e1]'}`} />
                    </Link>
                </motion.div>
                <Socials fill={!darkMode ? '#020a13' : '#e1e1e1'} />
            </div>
        </div>
    )
}
