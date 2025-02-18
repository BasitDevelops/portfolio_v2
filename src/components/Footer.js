import React from 'react'

export default function Footer({ darkMode }) {
    return (
        <div className={`w-full ${!darkMode ? 'bg-[#fefdfc]' : 'dark:bg-[#020a13]'} flex justify-center`}>
            <p className={`${!darkMode ? 'text-[#020a1380]' : 'dark:text-[#e1e1e180]'} font-sourceSP text-xs box-border py-3`}>Designed and Built by BasitDevelops {new Date().getFullYear()}</p>
        </div>
    )
}
