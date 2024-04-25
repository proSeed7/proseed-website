'use client'
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import { Twirl as Hamburger } from 'hamburger-react'

export default function HeaderLogic({ translations }) {

    const [isOpen, setOpen] = useState(false);
    const router = useRouter();
    const onLinkClick = async (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const targetSection = document.querySelector(target);
        const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10);
        setOpen(false);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop /*- headerHeight*/,
                behavior: "smooth"
            });
        } else {
            router.push('/');
            setTimeout(() => {
                const section = document.querySelector(target);
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop /*- headerHeight*/,
                        behavior: "smooth"
                    });
                }
            }, 50);
        }
    };

    const navLinks = [
        { name: 'why', label: translations.why, href: "#stageSection" },
        { name: 'mission', label: translations.mission, href: "#missionSection" },
        { name: 'how', label: translations.how, href: "#howSection" },
        { name: 'what', label: translations.what, href: "#whatSection" },
        /*{ name: 'prosperity', label: translations.prosperity, href: "#prosperitySection" },*/
        { name: 'contact', label: translations.contact, href: "#contactSection" },
        { name: 'career', label: translations.career, href: "#careerSection" }
    ];

    return (
        <>
            <nav
                className={'order-2 absolute md:static top-header-height right-0 pointer-events-none overflow-hidden w-full h-dyn-screen md:h-auto md:w-auto md:ml-auto'}
                aria-label="Proceed Navigation">
                <menu
                    className={`flex flex-col md:flex-row h-full w-full md:h-auto md:w-auto bg-default p-8 md:p-0 md:gap-4 transition-transform pointer-events-auto duration-300 translate-x-full md:translate-x-0 ${isOpen ? '[&]:translate-x-0' : ''}`}
                    role="menubar"
                    aria-label="Proseed Navigation Menu"
                    aria-expanded={isOpen ? "true" : "false"}
                >

                    {navLinks.map(link => (
                        <li className={''} role="none" key={link.name}>
                            <a role="menuitem" className={'text-xl lg:text-2xl relative hover:text-accent-green after:bg-accent-green after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'} href={link.href} tabIndex={isOpen ? 0 : -1}
                               onClick={onLinkClick}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </menu>
            </nav>
            <button className={'order-5 md:hidden text-accent-color'}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </button>
        </>
    );
}