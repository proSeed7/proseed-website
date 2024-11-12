'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitch({className}) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isToggled, setToggle] = useState(theme === 'dark')


    useEffect(() => {
        setMounted(true)
        setToggle(theme === 'dark')
    }, [theme])

    if (!mounted) return (
        <div className={'pt-1'}>
            <div className="checkbox-label peer-checked:[&>span]:translate-x-[23px] flex justify-between items-center cursor-pointer relative w-[50px] h-[26px] p-1 rounded-full bg-default-inverted">
                <span
                    className="transition-transform duration-300 ease-linear bg-default w-[22px] h-[22px] absolute left-0.5 top-0.5 rounded-full"></span>
            </div>
        </div>
    )

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(nextTheme)
        setToggle(!isToggled)
    }

    return (
        <div className={className}>
            <input type="checkbox" className="checkbox cursor-pointer w-12 h-7 opacity-0 absolute peer" id="checkbox" onChange={toggleTheme}
                   checked={isToggled}/>
            <label htmlFor="checkbox"
                   className="pointer-events-none checkbox-label peer-checked:[&>span]:translate-x-[23px] flex justify-between items-center relative w-[50px] h-[26px] p-1 rounded-full bg-accent-inverted">
                <FaMoon className={'text-default-inverted'}/>
                <FaSun className={'text-default-inverted'}/>
                <span className="transition-transform duration-300 ease-linear bg-default w-[22px] h-[22px] absolute left-0.5 top-0.5 rounded-full"></span>
            </label>
        </div>
    )
}