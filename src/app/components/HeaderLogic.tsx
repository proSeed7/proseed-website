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
                top: targetSection.offsetTop - headerHeight,
                behavior: "smooth"
            });
        } else {
            router.push('/');
            setTimeout(() => {
                const section = document.querySelector(target);
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - headerHeight,
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
        { name: 'prosperity', label: translations.prosperity, href: "#prosperitySection" },
        { name: 'contact', label: translations.contact, href: "#contactSection" },
        { name: 'career', label: translations.career, href: "#careerSection" }
    ];

    return (
        <>
            <nav
                className={'order-2 absolute md:static top-header-height right-0 pointer-events-none overflow-hidden w-full h-dyn-screen md:h-auto md:w-auto md:ml-auto'}
                aria-label="Proceed Navigation">
                <menu
                    className={`flex flex-col md:flex-row h-full w-full md:h-auto md:w-auto bg-default p-8 md:p-0 md:gap-4 pointer-events-auto duration-300 translate-x-full md:translate-x-0 ${isOpen ? '[&]:translate-x-0' : ''}`}
                    role="menubar"
                    aria-label="Proseed Navigation Menu">
                    {navLinks.map(link => (
                        <li className={'first:md:hidden'} role="none" key={link.name}>
                            <a role="menuitem" className={''} href={link.href} onClick={onLinkClick}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </menu>
            </nav>
            <button className={'order-5 md:hidden'}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </button>
        </>
    );
}